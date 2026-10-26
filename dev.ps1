# ============================================================================
#  本地预览 —— 改完文件，浏览器自动刷新
#
#  用法：在本文件夹打开 PowerShell，运行  .\dev.ps1
#  停止：Ctrl + C
# ============================================================================

$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot

# ---- 找 Hugo：优先用仓库自带的便携版，其次用系统安装版 --------------------
$hugo = $null
$bundled = Join-Path $PSScriptRoot '.tools\hugo.exe'
if (Test-Path -LiteralPath $bundled) {
    $hugo = $bundled
}
else {
    $cmd = Get-Command hugo -ErrorAction SilentlyContinue
    if ($cmd) { $hugo = $cmd.Source }
}

if (-not $hugo) {
    Write-Host ''
    Write-Host '  没有找到 Hugo。装一个再来：' -ForegroundColor Yellow
    Write-Host '    winget install Hugo.Hugo.Extended'
    Write-Host '  或者把 hugo.exe 放到  .tools\hugo.exe'
    Write-Host ''
    exit 1
}

# ---- 顺手提醒：GitHub 上是否有别处提交的新内容 -----------------------------
git fetch --quiet origin 2>$null
if ($LASTEXITCODE -eq 0) {
    $behind = git rev-list --count 'HEAD..origin/main' 2>$null
    if ($behind -and [int]$behind -gt 0) {
        Write-Host ''
        Write-Host "  提醒：GitHub 上还有 $behind 个提交没拉下来（可能是另一台电脑改的）。" -ForegroundColor Yellow
        Write-Host '        建议先另开一个窗口运行  git pull --rebase  ，再预览。' -ForegroundColor Yellow
    }
}

Write-Host ''
Write-Host "  Hugo : $hugo" -ForegroundColor DarkGray
Write-Host '  预览 : http://localhost:1313/' -ForegroundColor Cyan
Write-Host '  停止 : Ctrl + C' -ForegroundColor DarkGray
Write-Host ''

& $hugo server --buildDrafts --buildFuture --disableFastRender --port 1313 --openBrowser
