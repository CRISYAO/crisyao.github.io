#!/usr/bin/env bash
# ============================================================================
#  本地预览（macOS / Linux）
#
#  用法：在本文件夹运行  ./dev.sh
#  停止：Ctrl + C
# ============================================================================

set -u
cd "$(dirname "$0")"

HUGO=""
if [ -x ".tools/hugo" ]; then
    HUGO=".tools/hugo"
elif command -v hugo >/dev/null 2>&1; then
    HUGO="hugo"
fi

if [ -z "$HUGO" ]; then
    echo "  没有找到 Hugo。先安装：brew install hugo"
    exit 1
fi

# 顺手提醒：GitHub 上是否有别处提交的新内容
if git fetch --quiet origin 2>/dev/null; then
    BEHIND=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo 0)
    if [ "${BEHIND:-0}" -gt 0 ]; then
        echo ""
        echo "  提醒：GitHub 上还有 ${BEHIND} 个提交没拉下来（可能是另一台电脑改的）。"
        echo "        建议先运行  git pull --rebase  再预览。"
    fi
fi

echo ""
echo "  Hugo : ${HUGO}"
echo "  预览 : http://localhost:1313/"
echo "  停止 : Ctrl + C"
echo ""

exec "$HUGO" server --buildDrafts --buildFuture --disableFastRender --port 1313 --openBrowser
