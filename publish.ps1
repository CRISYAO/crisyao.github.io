# ============================================================================
#  发布 —— 提交 + 拉取别处改动 + 推送，GitHub 自动构建上线
#
#  用法：在本文件夹打开 PowerShell，运行  .\publish.ps1
#  也可以：.\publish.ps1 "补充了 3 个新岗位"
# ============================================================================

param(
    [string]$Message
)

$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot

function Stop-Here([string]$text) {
    Write-Host ''
    Write-Host "  $text" -ForegroundColor Red
    Write-Host ''
    exit 1
}

# ---- 0/4 先摸清和 GitHub 的差距 -------------------------------------------
Write-Host ''
Write-Host '  [0/4] 联系 GitHub' -ForegroundColor Cyan

git fetch --quiet origin
if ($LASTEXITCODE -ne 0) {
    Write-Host '        连不上 GitHub。检查网络（公司网可能要开代理或换热点）后再试。' -ForegroundColor Red
    exit 1
}

$behind = [int](git rev-list --count 'HEAD..origin/main')

# ---- 1/4 提交本机改动 ------------------------------------------------------
Write-Host '  [1/4] 检查并提交本机改动' -ForegroundColor Cyan

$changes = git status --porcelain
if ($changes) {
    $changes | ForEach-Object { Write-Host "        $_" }

    git add -A
    if ($LASTEXITCODE -ne 0) { Stop-Here 'git add 失败，先看看上面的报错。' }

    git diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        Write-Host '        （改动都在忽略列表里，例如 public/，不用提交）' -ForegroundColor DarkGray
    }
    else {
        if (-not $Message) {
            $Message = Read-Host '        这次改了什么？（一句话，直接回车 = 自动填时间）'
        }
        if (-not $Message) {
            $Message = '更新站点内容 ' + (Get-Date -Format 'yyyy-MM-dd HH:mm')
        }

        # 中文提交信息通过临时文件（UTF-8）传入，避免控制台编码把中文写成乱码
        $msgFile = Join-Path ([System.IO.Path]::GetTempPath()) ('site-commit-' + [guid]::NewGuid().ToString('N') + '.txt')
        [System.IO.File]::WriteAllText($msgFile, $Message, (New-Object System.Text.UTF8Encoding($false)))
        git commit -q -F $msgFile
        $commitCode = $LASTEXITCODE
        Remove-Item -LiteralPath $msgFile -ErrorAction SilentlyContinue
        if ($commitCode -ne 0) { Stop-Here 'git commit 失败，先看看上面的报错。' }

        Write-Host "        已提交：$Message" -ForegroundColor DarkGray
    }
}
else {
    Write-Host '        本机没有新改动。' -ForegroundColor DarkGray
}

$ahead = [int](git rev-list --count 'origin/main..HEAD')

if (-not $changes -and $ahead -eq 0 -and $behind -eq 0) {
    Write-Host ''
    Write-Host '  没有需要发布的内容，也已经和 GitHub 一致。' -ForegroundColor Green
    Write-Host ''
    exit 0
}

# ---- 2/4 合并 GitHub 上别处的改动 -----------------------------------------
Write-Host ''
Write-Host '  [2/4] 合并 GitHub 上的最新内容（另一台电脑 / 自动任务）' -ForegroundColor Cyan

if ($behind -gt 0) {
    Write-Host "        GitHub 上有 $behind 个新提交，拉取中…" -ForegroundColor DarkGray
    git pull --rebase --autostash
    if ($LASTEXITCODE -ne 0) {
        Write-Host ''
        Write-Host '  自动合并失败：两台电脑改到了同一行。' -ForegroundColor Yellow
        Write-Host '  别慌：东西都还在，什么都没丢。' -ForegroundColor Yellow
        Write-Host ''
        Write-Host '  把下面这段输出复制给我（或按 MAINTENANCE.md 第 6.1 节处理）：' -ForegroundColor Yellow
        Write-Host ''
        git status
        Write-Host ''
        exit 1
    }
}
else {
    Write-Host '        已经是最新，无需拉取。' -ForegroundColor DarkGray
}

# ---- 3/4 推送 --------------------------------------------------------------
Write-Host ''
Write-Host '  [3/4] 推送到 GitHub' -ForegroundColor Cyan

$ahead = [int](git rev-list --count 'origin/main..HEAD')
if ($ahead -eq 0) {
    Write-Host '        没有待推送的提交。' -ForegroundColor DarkGray
}
else {
    git push
    if ($LASTEXITCODE -ne 0) {
        Write-Host ''
        Write-Host '  推送失败。多半是登录或网络问题：' -ForegroundColor Yellow
        Write-Host '    · 弹出 GitHub 登录窗口 → 登录并授权即可，只有第一次需要'
        Write-Host '    · 公司网络挡了 GitHub → 换个网络或用手机热点再试'
        Write-Host ''
        exit 1
    }
    Write-Host "        已推送 $(git rev-parse --short HEAD)" -ForegroundColor Green
}

# ---- 4/4 收尾 --------------------------------------------------------------
Write-Host ''
Write-Host '  GitHub 开始构建，约 1 分钟后生效：' -ForegroundColor DarkGray
Write-Host '  https://crisyao.github.io/' -ForegroundColor Cyan
Write-Host ''
Write-Host '  没生效？看这里：https://github.com/CRISYAO/crisyao.github.io/actions' -ForegroundColor DarkGray
Write-Host ''
