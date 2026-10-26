#!/usr/bin/env bash
# ============================================================================
#  发布（macOS）—— 提交 + 拉取别处改动 + 推送，GitHub 自动构建上线
#
#  用法：./publish.sh
#  也可以：./publish.sh "补充了 3 个新岗位"
# ============================================================================

set -u
cd "$(dirname "$0")"

die() {
    echo ""
    echo "  $1"
    echo ""
    exit 1
}

# 国内访问 GitHub 偶尔会 "Connection was reset"，自动重试几次再报错
retry() {
    local what="$1"; shift
    local i
    for i in 1 2 3 4; do
        if "$@"; then
            return 0
        fi
        if [ "$i" -lt 4 ]; then
            echo "        ${what} 没成功（第 ${i} 次），8 秒后自动重试…"
            sleep 8
        fi
    done
    return 1
}

# ---- 0/4 先摸清和 GitHub 的差距 -------------------------------------------
echo ""
echo "  [0/4] 联系 GitHub"

if ! retry "连接 GitHub" git fetch --quiet origin; then
    echo "        连不上 GitHub。检查网络后再试。"
    exit 1
fi

BEHIND=$(git rev-list --count HEAD..origin/main)

# ---- 1/4 提交本机改动 ------------------------------------------------------
echo "  [1/4] 检查并提交本机改动"

if [ -n "$(git status --porcelain)" ]; then
    git status --porcelain | sed 's/^/        /'

    git add -A || die "git add 失败，先看看上面的报错。"

    if git diff --cached --quiet; then
        echo "        （改动都在忽略列表里，例如 public/，不用提交）"
    else
        MESSAGE="${1:-}"
        if [ -z "$MESSAGE" ]; then
            printf '        这次改了什么？（一句话，直接回车 = 自动填时间）'
            read -r MESSAGE
        fi
        if [ -z "$MESSAGE" ]; then
            MESSAGE="更新站点内容 $(date '+%Y-%m-%d %H:%M')"
        fi

        git commit -q -m "$MESSAGE" || die "git commit 失败，先看看上面的报错。"
        echo "        已提交：$MESSAGE"
    fi
else
    echo "        本机没有新改动。"
fi

AHEAD=$(git rev-list --count origin/main..HEAD)

if [ -z "$(git status --porcelain)" ] && [ "$AHEAD" -eq 0 ] && [ "$BEHIND" -eq 0 ]; then
    echo ""
    echo "  没有需要发布的内容，也已经和 GitHub 一致。"
    echo ""
    exit 0
fi

# ---- 2/4 合并 GitHub 上别处的改动 -----------------------------------------
echo ""
echo "  [2/4] 合并 GitHub 上的最新内容（另一台电脑 / 自动任务）"

if [ "$BEHIND" -gt 0 ]; then
    echo "        GitHub 上有 $BEHIND 个新提交，拉取中…"
    if ! git pull --rebase --autostash; then
        echo ""
        echo "  自动合并失败：两台电脑改到了同一行。"
        echo "  别慌：东西都还在，什么都没丢。"
        echo ""
        echo "  把下面这段输出复制给我（或按 MAINTENANCE.md 第 6.1 节处理）："
        echo ""
        git status
        echo ""
        exit 1
    fi
else
    echo "        已经是最新，无需拉取。"
fi

# ---- 3/4 推送 --------------------------------------------------------------
echo ""
echo "  [3/4] 推送到 GitHub"

AHEAD=$(git rev-list --count origin/main..HEAD)
if [ "$AHEAD" -eq 0 ]; then
    echo "        没有待推送的提交。"
else
    if ! retry "推送" git push; then
        echo ""
        echo "  推送失败。多半是登录或网络问题："
        echo "    · 弹出 GitHub 登录窗口 → 登录并授权即可，只有第一次需要"
        echo "    · 公司网络挡了 GitHub → 换个网络或用手机热点再试"
        echo ""
        exit 1
    fi
    echo "        已推送 $(git rev-parse --short HEAD)"
fi

# ---- 4/4 收尾 --------------------------------------------------------------
echo ""
echo "  GitHub 开始构建，约 1 分钟后生效：https://crisyao.github.io/"
echo "  没生效？看这里：https://github.com/CRISYAO/crisyao.github.io/actions"
echo ""
