# Talent Radar — 人选动态雷达

追踪 [connections 页](../../content/connections/index.md) 上所有人选的公开主页,自动发现职位变动信号(入职、毕业、晋升、跳槽)。

## 工作方式

```
GitHub Actions 每天定时(北京时间 14:30)
  ↓ 解析 content/connections/index.md → 113 位人选 + 主页链接
  ↓ 并发抓取 99 个可抓取主页(scholar/linkedin/baike 链接枢纽除外)
  ↓ 提取 title / meta / h1 / 首页自述 (intro)
  ↓ 与 data/talent-radar/snapshot.json 快照 diff
  ↓ 有变化 → 自动建 Issue 提醒 + 提交新快照
  ↓ 无变化 → 静默
```

## 文件

| 文件 | 作用 |
|------|------|
| `radar.py` | 核心:解析名单 → 抓取 → diff → 报告,纯标准库,可本地跑 |
| `../../data/talent-radar/snapshot.json` | 上次快照(Git 版本控制,可回溯任意时点) |
| `../../.github/workflows/talent-radar.yaml` | 定时任务 |

## 本地使用

```bash
python3 scripts/talent-radar/radar.py                # 扫描 + 比对 + 报告
python3 scripts/talent-radar/radar.py --report-only  # 只读快照(未实现,忽略)
```

## 如何判断"变化"

提取 4 个对职位变动最敏感的字段做逐字段 diff:

- **title** — 页面标题(如 "Yake Wei — Lecturer")
- **meta** — description 元信息
- **h1** — 主标题列表
- **intro** — 去掉导航/页脚后的首 500 字可见文本(学术主页通常是 "I am a PhD student at ..." 自述)

任一字段变化即计为 1 条变化,Issue 里给出 `旧值 → 新值` 对比。

## 已知边界

- **链接枢纽不抓取**:Google Scholar / LinkedIn / 百度百科反爬或需登录,名单里 14 人的链接属于此类,只在名单增减时体现。如需追踪这批人,建议在 connections 里换成其个人学术主页。
- **偶发抓取失败不算变化**:网络抖动导致抓不到时沿用旧快照数据,连续两次失败的条目会在报告的 ℹ️ 说明区列出。**快照里 fields 为 null 且 URL 非 hub 的(如 Kuan Li 的 likuan.github.io 已 404),建议核对 connections 链接是否失效。**
- **intro 中的动态内容可能误报**:部分主页有计数器、日期、"最近更新"等动态片段,会触发 diff。误报多的站点可加进 `LINK_HUB_DOMAINS` 或在 `extract_intro` 里正则剔除。
- **快照随仓库走**:clone 仓库即获得全部历史状态,push 时快照用 `[skip ci]` 避免触发 Hugo 部署。

## 新增追踪

把人选加进 `content/connections/index.md` 即可(保持字母序),下次扫描自动纳入,首次抓取建立基线,基线不算变化。
