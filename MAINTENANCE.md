# 个人主页维护手册（两台电脑通用）

- 线上站点：<https://crisyao.github.io/>
- 源码仓库：<https://github.com/CRISYAO/crisyao.github.io>
- 技术栈：Hugo 0.156.0 (extended) + FixIt 主题，推送到 `main` 后由 GitHub Actions 自动构建部署

---

## 一分钟版本

| 想做的事 | Windows | macOS |
| --- | --- | --- |
| 本地预览（边改边看） | `.\dev.cmd` | `./dev.sh` |
| 发布上线 | `.\publish.cmd` | `./publish.sh` |
| 拉取另一台电脑的改动 | `git pull --rebase` | `git pull --rebase` |

改完 → 预览满意 → 发布 → 等 1 分钟 → 刷新线上页面。就这三步。

---

## 0. 核心：只有一个"正本"

```
              GitHub 仓库（唯一正本）
                 ↑ 推送        ↓ 拉取
        Windows 电脑              Mac 电脑
        （本地副本）              （本地副本）
```

- 两台电脑都只是**副本**。只有推送到 GitHub 的内容才算真正保存；没推送的改动只存在于那台电脑上。
- **铁律一：离开一台电脑前，先发布（推送）。** 看到"已推送 abc1234"才算走。
- **铁律二：到一台电脑开工前，先拉取。** `git pull --rebase`（`dev` 脚本也会提醒你落后了几个提交）。
- 违反铁律不会丢数据，但会多出一次手动合并，麻烦。详见第 5 节。

---

## 1. 想改东西，改哪个文件

| 想改什么 | 改这里 |
| --- | --- |
| 首页头像、头衔、社交链接、统计、分析代码 | `hugo.toml` |
| About TGT 页面（团队、项目、岗位） | `content/about-tgt/index.md` |
| About Me 页面 | `content/about-me/index.md` |
| Connections 页面 | `content/connections/index.md` |
| 图片（如头像 `me.jpg`） | `static/` 目录，页面里写成 `/me.jpg` |
| 自定义样式 | `static/css/custom.css` |
| 页面里的小脚本 | `static/js/*.js` |
| 主题外观（尽量别动） | `themes/FixIt/` |

**不要改**：`public/`、`resources/` —— 这是 Hugo 的构建产物，每次构建都会重新生成，改了也不会生效，而且已经被 Git 忽略。

---

## 2. 这台 Windows 电脑（已经配好）

- 仓库位置：`E:\Github\crisyao.github.io`
- 便携版 Hugo：`.tools\hugo.exe`（v0.156.0 extended，与 GitHub Actions 里用的是同一版本，避免"本地好看、线上变样"）
- 已设置：`pull.rebase = true`（拉取时用变基，历史更干净）、`credential.helper = manager`（推送到 GitHub 时用浏览器登录一次即可）

日常（两种用法都行）：

```powershell
cd E:\Github\crisyao.github.io
.\dev.cmd                     # 预览，浏览器自动打开 http://localhost:1313/
# ……改内容，浏览器会自动刷新……
# Ctrl + C 停止预览
.\publish.cmd "补充了 3 个新岗位"   # 不写说明也行，会问你
```

也可以在资源管理器里**双击** `dev.cmd` / `publish.cmd`。

> `dev.cmd` / `publish.cmd` 只是外壳，真正干活的是同名的 `.ps1`。外壳里带了
> `-ExecutionPolicy Bypass`，所以即使电脑上禁止运行 PowerShell 脚本也能用；
> 如果你习惯直接用 PowerShell，改成 `.\dev.ps1` / `.\publish.ps1` 也一样。

---

## 3. Mac 第一次配置（只做一次）

```bash
# 1) 装工具（已装 Homebrew 可跳过第一行）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git hugo
hugo version        # 输出里要带 "extended"

# 2) 下载站点源码到你自己习惯的目录（示例：~/Sites）
mkdir -p ~/Sites && cd ~/Sites
git clone https://github.com/CRISYAO/crisyao.github.io.git
cd crisyao.github.io

# 3) 设置提交身份与拉取方式
git config user.name  "CRISYAO"
git config user.email "chaohaoyao@gmail.com"
git config pull.rebase true
git config credential.helper osxkeychain

# 4) 给脚本执行权限（一般 clone 下来就有，没有就补一下）
chmod +x dev.sh publish.sh

# 5) 试一下
./dev.sh
```

第一次 `./publish.sh` 推送时会要求登录 GitHub（浏览器授权），之后会记住。

Mac 上两个小提示：

- 第一次敲 `git` 可能弹出"安装命令行开发者工具"，点安装、等几分钟即可。
- 便携版 Hugo 只放在 Windows 那边（`.tools/hugo.exe`）；Mac 用 `brew install hugo` 装的就行，脚本会自动找到。

---

## 4. 日常标准动作

1. **拉取**：`git pull --rebase`（离上次使用隔了几天，尤其要做）
2. **预览**：`.\dev.cmd` / `./dev.sh`，改到满意
3. **发布**：`Ctrl+C` 停预览 → `.\publish.cmd "这次改了什么"` / `./publish.sh "这次改了什么"`
4. **确认**：约 1 分钟后刷新 <https://crisyao.github.io/>；没变先看 [Actions 记录](https://github.com/CRISYAO/crisyao.github.io/actions)

发布脚本内部顺序是：**提交 → 拉取（变基）→ 推送**，所以它本身就带一步"先拉"，不会因为另一台电脑改过而被 GitHub 拒绝。

---

## 5. 两台电脑交替使用（重点看这节）

**推荐的节奏**：一次只在一台电脑上改；改完、发布、再换电脑。这样永远不会有冲突。

具体规矩：

1. **走之前一定发布。** 哪怕只改了一个字。没收尾的改动留在原电脑上，换台电脑时看不到，容易重复改或覆盖。
2. **到了先拉取。** `git pull --rebase`。`dev` 脚本启动时会提示"GitHub 上还有 N 个提交没拉下来"。
3. **同一时间只在一台电脑上动同一个文件。** 尤其 `content/about-tgt/index.md` 这种长文件，两边都改必然要人工合并。
4. **忘了推送就走了怎么办？** 问题不大：在另一台照常改、照常发布；回到原来那台时先 `git pull --rebase`，Git 会把两边的改动合起来。只有改到同一行时才会提示冲突（第 6.1 节）。
5. **看到陌生提交别慌。** 仓库里有个定时任务（Talent Radar）会隔几天自动更新 `data/talent-radar/snapshot.json`，提交信息带 `[skip ci]`。那是正常的，不是你改的。

---

## 6. 出问题了怎么办

### 6.1 发布时提示"自动合并失败"（冲突）

两台电脑改了同一行。脚本已经帮你把能自动合的合好了，剩下的需要你选：

```bash
git status                       # 找 "both modified:" 后面的文件名
```

用编辑器打开那个文件，搜索 `<<<<<<<`，会看到三块：

```
<<<<<<< HEAD
你在这台电脑上写的内容
=======
另一台电脑上写的内容
>>>>>>> abc1234
```

保留想要的部分，把 `<<<<<<<`、`=======`、`>>>>>>>` 这三行删掉，然后：

```bash
git add 那个文件
git rebase --continue
git push
```

不想自己弄：把 `git status` 的输出发给我就行，内容不会丢。

### 6.2 想把某次改动退回去

- 最简单：GitHub 网页 → Commits → 找到那次提交 → 点 **Revert**，会自动提交并在下次部署时生效。
- 或者本地：`git log --oneline` 找到提交号 → `git revert <提交号>` → `git push`。

### 6.3 推送被拒（rejected / non-fast-forward）

说明 GitHub 上比本地新。先 `git pull --rebase`，再 `git push`。

### 6.4 线上没更新

1. 打开 [Actions](https://github.com/CRISYAO/crisyao.github.io/actions) 看最近一次 "Deploy Hugo site to Pages" 是绿勾还是红叉。
2. 绿勾但页面没变 → 浏览器缓存，`Ctrl + Shift + R`（Mac：`Cmd + Shift + R`）。
3. 红叉 → 点进去看哪一步失败，通常是 Markdown 里的 HTML 标签没写完整。本地 `.\dev.ps1` 一般能看出问题。

### 6.5 推送要求登录 / 一直失败

```powershell
git config --local credential.helper manager   # Windows
git push                                        # 弹出浏览器 → 授权 GitHub
```

```bash
git config --local credential.helper osxkeychain   # macOS
git push
```

公司网络挡 GitHub 时，换手机热点再试。

### 6.6 预览打不开

- `http://localhost:1313/` 没反应：可能上次的预览窗口没关，先关掉所有 PowerShell / 终端窗口再试。
- 端口被占用：把 `dev.ps1` / `dev.sh` 里的 `--port 1313` 改成 `1314`。

### 6.7 电脑坏了、本地文件全没了

不用救：所有内容都在 GitHub 上。新电脑按第 3 节 clone 一遍即可。

---

## 7. 这次顺手修掉的坑

| 原来 | 现在 | 为什么 |
| --- | --- | --- |
| `public/` 里 113 个构建产物进了仓库 | 不再入库，改由 GitHub Actions 构建 | 两台电脑一构建就产生成百上千处"改动"，必然冲突 |
| `resources/`、`.hugo_build.lock` 入库 | 忽略 | 同上，纯生成物 |
| `assets/jsconfig.json` 入库 | 忽略 | Windows 写 `\`、macOS 写 `/`，每次构建都变一次 |
| 4 个 `.DS_Store` 入库 | 删除 | macOS 的文件夹元数据，没有用 |
| 本地没有 Hugo，改完只能直接推 | 便携 Hugo + `dev` 脚本 | 先看效果再发，避免线上出错 |
| 发布靠手打三条命令 | `publish` 脚本 | 顺序错了就会冲突 |
| 直接跑 `.ps1` 可能被"禁止运行脚本"拦住 | 另配 `.cmd` 外壳 | 双击就能用，不用改系统设置 |

另外：`.github/workflows/hugo.yaml` 本来就已经配好了自动构建部署，只是仓库里同时存着旧的 `public/`，两套东西并存才是混乱的根源。

---

## 8. 还可以再省事的地方（想做随时说）

- **手机上改错别字**：GitHub 网页直接打开 `content/.../index.md` → 铅笔图标 → 提交，自动部署。不需要电脑。
- **把 `themes/FixIt` 改成 submodule**：现在主题 3000+ 个文件直接躺在仓库里，升级主题很痛苦。
- **加一个"最近更新"列表**：把 `content/` 里的改动自动列出来。
- **给 `publish` 加一条命令直接看部署结果**（需要装 `gh`）。

---

## 9. 页面级规范

TGT 页面还有一份更细的规范（命名规则、配色、岗位格式、提交前检查清单）：
见 [`content/about-tgt/MAINTENANCE.md`](content/about-tgt/MAINTENANCE.md)。

---

## 更新记录

| 日期 | 内容 |
| --- | --- |
| 2026-10-26 | 建立双电脑维护流程；`public/` 等生成物移出版本库；新增 `dev` / `publish` 脚本与本手册 |
