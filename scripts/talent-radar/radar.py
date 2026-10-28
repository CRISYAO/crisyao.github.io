#!/usr/bin/env python3
"""
Talent Radar — 追踪 connections 页上人选的公开主页变化。

用法:
  python3 radar.py                            # 扫描 + 与上次快照比对 + 输出报告
  python3 radar.py --push-file /tmp/push.md   # 额外生成微信推送正文(见 render_push)

流程:
  1. 解析 content/connections/index.md,提取 {姓名, URL, 板块, 页面描述}
  2. 逐个抓取个人主页,提取 title / meta description / h1 / 首段正文
  3. 与上次快照做 diff,输出变化报告(供 GitHub Issue 使用)
  4. 无变化时不改写快照文件,避免仓库出现每日空提交

链接枢纽(scholar/linkedin/baike)无法稳定抓取,仅记录在案,不参与 diff。
纯标准库实现,无第三方依赖。
"""

import concurrent.futures
import datetime
import html as html_mod
import json
import re
import ssl
import sys
import urllib.request
from pathlib import Path

# ── 配置 ──────────────────────────────────────────────
REPO_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_CONNECTIONS = REPO_ROOT / "content" / "connections" / "index.md"
DEFAULT_SNAPSHOT = REPO_ROOT / "data" / "talent-radar" / "snapshot.json"
CONCURRENCY = 6
TIMEOUT_S = 20
MAX_WORKERS = 6

# 这些站点反爬/需登录,抓不到稳定内容,跳过抓取
LINK_HUB_DOMAINS = [
    "scholar.google.com",
    "www.linkedin.com",
    "linkedin.com",
    "baike.baidu.com",
]

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
      "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36")

# 推送正文里用的中文字段名(报告 Issue 仍用原始字段名,便于排查)
FIELD_LABELS = {
    "title": "页面标题",
    "meta": "简介",
    "intro": "主页自述",
    "h1": "主标题",
}

MAX_PUSH_ITEMS = 8      # 微信里最多展开几个人,其余指向 Issue
MAX_PUSH_CHARS = 8000   # 服务号正文别太长,超出按整行截断


def main():
    args = sys.argv[1:]
    connections = Path(args[args.index("--connections") + 1]) if "--connections" in args else DEFAULT_CONNECTIONS
    snapshot_path = Path(args[args.index("--snapshot") + 1]) if "--snapshot" in args else DEFAULT_SNAPSHOT
    push_path = Path(args[args.index("--push-file") + 1]) if "--push-file" in args else None

    people = parse_connections(connections.read_text(encoding="utf-8"))
    if not people:
        print("CHANGES: 0")
        print("[!] 未从 %s 解析到任何人选" % connections)
        sys.exit(0)

    prev = load_snapshot(snapshot_path)
    prev_by_url = {p["url"]: p for p in prev.get("people", [])}
    is_baseline = "people" not in prev

    fetched = scan_all(people)
    changes, report_lines, records, unreachable = diff(people, fetched, prev_by_url)

    n_fetchable = sum(1 for p in people if not is_link_hub(p["url"]))
    print("CHANGES: %d" % len(changes))
    print("追踪 %d 位人选(%d 个主页可抓取,%d 个链接枢纽仅记录)" % (
        len(people), n_fetchable, len(people) - n_fetchable))
    print("上次快照: %s" % ("无(首次运行,本次建立基线)" if is_baseline
                          else prev.get("generated_at", "无")))
    print()

    if is_baseline:
        print("【基线建立】本次抓取结果作为初始快照,不报告变化。")
        tracked_new = [p for p in people if p["url"] not in prev_by_url]
        print("新增追踪 %d 人。" % len(tracked_new))
        for p in tracked_new:
            print("  + %s — %s [%s]" % (p["name"], p["desc"], p["section"]))
        save_snapshot(snapshot_path, people, fetched)
    else:
        for line in report_lines:
            print(line)
        if changes:
            save_snapshot(snapshot_path, people, fetched)
            if push_path:
                push_path.write_text(
                    render_push(records, len(people), unreachable, prev.get("generated_at", "")),
                    encoding="utf-8")
                print()
                print("[i] 推送正文已写入 %s (%d 字节)" % (push_path, push_path.stat().st_size))


def render_push(records, total, unreachable, prev_time):
    """生成微信推送用的 markdown。

    和 Issue 报告不同,这里要按手机屏幕排版:每字段单独一段(用空行分隔),
    否则 ServerChan/微信会把连续行合并成一整块,完全没法读。
    """
    now = datetime.datetime.now().strftime("%m-%d")
    out = ["**TGT 人才雷达 · %s**" % now, ""]
    out.append("追踪 %d 位人选，本次 **%d** 人主页有变化。" % (total, len(records)))
    if prev_time:
        out += ["", "对比基准：%s" % prev_time]

    for i, r in enumerate(records[:MAX_PUSH_ITEMS], 1):
        out += ["", "---", ""]
        out.append("**%d. %s**" % (i, r["name"]))
        out += ["", "%s · [%s](%s)" % (
            r["section"] or "未分组", r["url"].split("//", 1)[-1].rstrip("/"), r["url"])]
        for key, old, new in r["diffs"]:
            out += ["", "**%s**：%s → %s" % (
                FIELD_LABELS.get(key, key), brief(old, 100) or "（空）", brief(new, 100) or "（空）")]

    if len(records) > MAX_PUSH_ITEMS:
        out += ["", "---", "", "另有 %d 人有变化，详见 GitHub Issue。" % (len(records) - MAX_PUSH_ITEMS)]

    if unreachable:
        out += ["", "---", "", "ℹ️ %d 人本次抓取失败或刚恢复，未计入变化：%s" % (
            len(unreachable), "、".join(ur[0] for ur in unreachable[:5])
            + ("等" if len(unreachable) > 5 else ""))]

    out.append("")
    text = "\n".join(out)
    if len(text) > MAX_PUSH_CHARS:
        # 按整行截断,避免把一个汉字/一行 markdown 劈开
        cut = text[:MAX_PUSH_CHARS].rsplit("\n", 1)[0]
        text = cut + "\n\n…（内容过长已截断，完整报告见 GitHub Issue）\n"
    return text



def parse_connections(md_text):
    people = []
    section = ""
    for line in md_text.splitlines():
        m = re.match(r"^##\s+(.+)$", line)
        if m:
            section = m.group(1).strip()
            continue
        m = re.match(r"^\s*-\s*\[([^\]]+)\]\(([^)]+)\)\s*-\s*(.+)$", line)
        if m:
            name, url, desc = (g.strip() for g in m.groups())
            people.append({"name": name, "url": url, "desc": desc, "section": section})
    return people


def is_link_hub(url):
    return any(d in url for d in LINK_HUB_DOMAINS)


def scan_all(people):
    """并发抓取所有可抓取主页。返回 {url: fields|None}"""
    targets = [p["url"] for p in people if not is_link_hub(p["url"])]
    out = {p["url"]: None for p in people}
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        futs = {pool.submit(fetch_html, u): u for u in targets}
        for fut in concurrent.futures.as_completed(futs):
            url = futs[fut]
            try:
                html = fut.result()
            except Exception:
                html = None
            out[url] = extract_fields(html) if html else None
    return out


def fetch_html(url):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=TIMEOUT_S, context=ctx) as resp:
        if resp.status != 200:
            return None
        return resp.read().decode("utf-8", errors="replace")


def extract_fields(html):
    """从 HTML 提取对 role 变化最敏感的字段。"""
    title = first_match(html, r"<title[^>]*>([\s\S]*?)</title>", flags=re.I)
    meta_desc = extract_meta_description(html)
    h1s = re.findall(r"<h1\b[^>]*>([\s\S]*?)</h1>", html, flags=re.I)[:4]
    intro = extract_intro(html)
    return {
        "title": title,
        "meta": meta_desc,
        "h1": [normalize_text(h) for h in h1s],
        "intro": intro,
    }


def first_match(text, pattern, flags=0):
    m = re.search(pattern, text, flags)
    return m.group(1) if m else ""


def extract_meta_description(html):
    for tag in re.findall(r"<meta\b[^>]*>", html, flags=re.I):
        if re.search(r'name=["\']description["\']', tag, re.I):
            m = re.search(r'content=["\']([\s\S]*?)["\']', tag, re.I)
            if m:
                return normalize_text(m.group(1))
    return ""


def extract_intro(html):
    """页面去掉 header/footer/脚本后的首 500 字符可见文本——
    学术主页这里通常是 'I am a PhD student at ...' 的自我介绍。"""
    t = re.sub(r"<!--[\s\S]*?-->", " ", html)
    t = re.sub(
        r"<(script|style|noscript|svg|nav|header|footer|aside|form|iframe)\b[\s\S]*?</\1>",
        " ", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html_mod.unescape(t)
    t = re.sub(r"\s+", " ", t).strip()
    return t[:500]


def normalize_text(t):
    return re.sub(r"\s+", " ", html_mod.unescape(re.sub(r"<[^>]+>", " ", t))).strip()


def diff(people, fetched, prev_by_url):
    """比对本次抓取与上次快照,返回 (changes, report_lines)。
    CHANGES 只计"已追踪人选的主页内容真变化";
    新增追踪/抓取失败放入说明区,不计数、不触发告警。"""
    changes = []
    added = []
    unreachable = []
    records = []

    for p in people:
        url = p["url"]
        prev_p = prev_by_url.get(url)
        new_fields = fetched.get(url)

        # 新增追踪的人:建立基线,不算变化
        if prev_p is None:
            if not is_link_hub(url) and new_fields:
                added.append("🆕 %s [新增追踪] %s (%s)" % (p["name"], p["desc"], p["section"]))
            continue

        # 链接枢纽只在名单变化时体现,不抓取
        if is_link_hub(url):
            continue

        # 本次抓取失败:沿用旧数据,标记不可达,不算变化
        if new_fields is None:
            unreachable.append((p["name"], p["url"], ""))
            continue
        # 上次抓不到、这次抓到了:恢复可追踪,不算变化
        if not prev_p.get("fields"):
            unreachable.append((p["name"], p["url"], " [恢复可追踪]"))
            continue

        diffs = []
        raw = []
        for k in ("title", "meta", "intro"):
            old_v = (prev_p["fields"] or {}).get(k, "")
            new_v = new_fields.get(k, "")
            if old_v != new_v and (old_v or new_v):
                diffs.append("%s: %s → %s" % (k, brief(old_v, 80), brief(new_v, 80)))
                raw.append((k, old_v, new_v))
        old_h1 = (prev_p["fields"] or {}).get("h1", [])
        new_h1 = new_fields.get("h1", [])
        if old_h1 != new_h1:
            diffs.append("h1: %s → %s" % (brief(" | ".join(old_h1), 80), brief(" | ".join(new_h1), 80)))
            raw.append(("h1", " | ".join(old_h1), " | ".join(new_h1)))

        if diffs:
            changes.append(p)
            added.append("🔔 %s (%s) [%s]" % (p["name"], url.split("//", 1)[-1], p["section"]))
            for d in diffs:
                added.append("   • %s" % d)
            records.append({
                "name": p["name"], "section": p["section"], "url": url, "diffs": raw,
            })

    lines = list(added)
    if unreachable:
        lines.append("")
        lines.append("ℹ️ 以下 %d 人本次抓取失败或刚恢复可抓取,沿用旧数据,不计入变化:" % len(unreachable))
        lines.extend("   - %s (%s)%s" % (n, u, f) for n, u, f in unreachable)

    return changes, lines, records, unreachable


def brief(t, n):
    t = t or ""
    return (t[:n] + "…") if len(t) > n else t


def load_snapshot(path):
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def save_snapshot(path, people, fetched):
    path.parent.mkdir(parents=True, exist_ok=True)
    out = {
        "generated_at": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "people": [
            {
                "name": p["name"],
                "url": p["url"],
                "desc": p["desc"],
                "section": p["section"],
                "fields": fetched.get(p["url"]),
            }
            for p in people
        ],
    }
    path.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    main()
