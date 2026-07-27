# TGT 页面维护规范

> 最后更新：2026-07-27
> 维护者：Claude Code Assistant

## 📋 文档目的

本文档记录 TGT (Tech Genius Team) 页面的维护规范、命名规则和更新流程，确保页面内容的一致性和可维护性。

---

## 🏗️ 页面结构

### 文件位置
- **源文件**: `/Users/yaochaohao.1/tgt-recruiter-page/content/about-tgt/index.md`
- **线上地址**: https://crisyao.github.io/about-tgt/
- **仓库地址**: https://github.com/crisyao/tgt-recruiter-page

### 页面模块
1. **Header** - 顶部标题与简介
2. **Mission** - 团队使命与核心技术领域标签
3. **Core Tech & Open Source** - 开源项目与核心技术展示
4. **Open Positions** - 招聘岗位（正式/实习）
5. **Contact** - 联系方式

---

## 📝 命名规则

### 1. 团队命名规范

**Oxygen 系列**：
- 团队前缀统一使用 `Oxygen`，代表京东零售技术团队的核心技术品牌
- 已有团队：
  - `OxyGent` - 多智能体协作框架（Gent = Agent）
  - `Oxygen AIGC` - AIGC 内容生成团队（虚拟试衣等）
  - `OxygenREC` - 生成式推荐
  - `OxygenSearch` - 生成式检索
  - `Oxygen XR` - 3D 视觉生成与重建

**其他项目**：
- `xLLM` - 大模型训练与推理框架（独立命名）
- 使用小驼峰命名法

### 2. 项目卡片标题格式

```
项目名称 [可选标签]
```

**标签类型**：
- **Star 数标签**：GitHub 项目显示 star 数
  - 示例：`★ 1.9k`
  - 样式：黄色背景 `background:#FAEEDA;color:#633806`
- **技术方向标签**：标注技术方向
  - 示例：`3D Vision`、`Oxygen AIGC`
  - 样式：青绿色背景 `background:#E7F6F2;color:#006D5B`

### 3. 项目卡片描述规范

**格式**：
```
一句话简介 + 关键特性（可选）
```

**要求**：
- 长度控制在 50-80 字
- 突出核心价值和技术亮点
- 避免过于技术化的术语

**示例**：
```
专为虚拟试衣打造的 Fashion-Native 基础大模型，支持全品类任意搭（衣物/鞋履/包包/饰品），真实场景图精准还原纹理与廓形。
```

### 4. 链接与元信息格式

**链接类型**：
- `GitHub` - GitHub 仓库链接（蓝色标签）
- `Paper` - 论文链接（紫色标签）
- `Blog` - 博客文章链接（蓝色标签）
- `查看` - 其他链接（蓝色标签）

**元信息格式**：
- 论文：`🏆 会议名称 年份 · 月份` 或 `arXiv · 月份`
- 示例：
  - `🏆 CVPR 2026 · Apr 2026`
  - `arXiv · Jul 2026`

**多论文展示**：
- 如果项目有多篇论文，分行显示
- 每行一个 `<span class="tgt-meta">`

---

## 🎨 视觉规范

### 颜色系统

**主题色**：
- JD Red: `#E1251B`（主色调）
- JD Red Background: `#FEEBEA`（浅色背景）
- JD Red Border: `#FCD2D0`（边框色）

**标签颜色**：
| 标签类型 | 背景色 | 文字色 | 用途 |
|---------|--------|--------|------|
| GitHub Stars | `#FAEEDA` | `#633806` | star 数 |
| 3D Vision | `#E7F6F2` | `#006D5B` | 技术方向 |
| AI | `#FEEBEA` | `#E1251B` | AI 领域 |
| Infra | `#EEEDFE` | `#3C3489` | Infra 领域 |
| 搜推广 | `#E7F6F2` | `#006D5B` | 搜推广领域 |
| 供应链 | `#E6F1FB` | `#185FA5` | 供应链领域 |
| 大数据 | `#FAEEDA` | `#633806` | 大数据领域 |
| 安全 | `#FFF4E5` | `#B35900` | 安全领域 |

### 卡片布局
- Grid 布局：`grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`
- 卡片间距：`gap: 12px`
- 卡片圆角：`border-radius: 12px`
- 卡片边框：`0.5px solid rgba(128,128,128,.2)`

---

## 🔄 更新流程

### 新增项目

1. **确定展示位置**
   - Oxygen 系列项目：按项目重要性排序，放在 Oxygen AIGC 附近
   - 其他项目：按重要性和发布时间排序

2. **准备信息**
   - 项目名称与团队
   - 一句话描述（50-80字）
   - GitHub 链接（如有）
   - 论文链接与发表信息
   - 技术方向标签（可选）

3. **添加到页面**
   - 在 `Core Tech & Open Source` 板块新增 `<div class="tgt-oc">` 卡片
   - 按照现有格式填写信息
   - 如果是 GitHub 项目，添加 star 数动态获取脚本

4. **更新 Mission 标签**
   - 如果项目涉及新的技术方向，在 Mission 区域添加对应标签

### 更新 Star 数

页面加载时会自动获取 GitHub star 数，需要确保：
- 项目 ID 正确（如 `jd-opensource/OxyGent`）
- 元素 ID 正确（如 `oxygent-stars`）
- 在页面底部 `fetchStars()` 函数中添加新项目

### 发布更新

```bash
cd /Users/yaochaohao.1/tgt-recruiter-page
git add content/about-tgt/index.md
git commit -m "Update: 新增 Oxygen AIGC 项目展示"
git push
```

等待 GitHub Actions 自动部署（约 1-2 分钟）。

---

## ⚠️ 操作规范（重要）

### 文件更新原则
1. **禁止直接覆盖文件**
   - ❌ 不要使用 `cp` 命令从外部文件覆盖
   - ✅ 使用 `Read` 读取 → `Edit` 精确修改

2. **修改范围控制**
   - 只修改目标区域（如 Core Tech）
   - 不要触碰其他区域（如 Open Positions）

3. **提交前验证**
   ```bash
   # 检查岗位数量（应为 54）
   grep "申请 →" content/about-tgt/index.md | wc -l

   # 检查变更范围
   git diff --stat
   ```

4. **版本意识**
   - 操作前：`git log --oneline -5`
   - 对比版本：`git diff <旧commit> <新commit>`
   - 查看历史：`git show <commit>:<file>`

### 错误示例（2026-07-27）
- 问题：使用 `cp` 从 Downloads 复制文件，覆盖了最新岗位信息
- 影响：54个岗位 → 47个岗位，丢失详细描述
- 修复：从 a35239b 恢复，重新应用优化

---

## ✅ 检查清单

更新页面时，请确认：

- [ ] 项目名称符合命名规范
- [ ] 描述简洁清晰（50-80字）
- [ ] 链接正确可访问
- [ ] 元信息格式统一
- [ ] 标签颜色符合视觉规范
- [ ] Mission 区域已更新（如有新技术方向）
- [ ] 本地预览无误
- [ ] 已提交到 Git 仓库

---

## 📌 常见问题

### Q1: 项目应该显示团队名称还是项目名称？

**建议**：
- 如果项目是团队的代表性成果，显示团队名称（如 `Oxygen AIGC`）
- 如果项目是独立的开源项目，显示项目名称（如 `OxyGent`、`xLLM`）
- 如果团队有多个项目，可以为每个项目创建独立卡片

### Q2: 如何展示多个论文？

在卡片的 `<div class="tgt-ol">` 中添加多个 `<span class="tgt-meta">`，每个占一行：

```html
<span class="tgt-meta">🏆 ICASSP 2026 · Sep 2025</span>
<span class="tgt-meta">🏆 CVPR 2026 · Apr 2026</span>
```

### Q3: 如何添加新的技术领域标签？

在 Mission 区域的 `<div class="tgt-tags">` 中添加：

```html
<span class="tgt-tag g">新技术方向</span>  <!-- 绿色高亮 -->
<span class="tgt-tag">普通标签</span>        <!-- 普通样式 -->
```

### Q4: 如何处理特殊字符？

- 使用 HTML 实体：`&amp;` → `&`，`&lt;` → `<`
- 避免在描述中使用特殊符号
- 链接使用完整的 URL

---

## 📚 参考资源

- [Hugo 文档](https://gohugo.io/documentation/)
- [FixIt 主题文档](https://github.com/hugo-fixit/FixIt)
- [GitHub API - Stargazers](https://docs.github.com/en/rest/repos/repos#list-stargazers)

---

## 📝 更新日志

### 2026-07-27
- ✨ 新增 Oxygen AIGC 团队展示
- 📝 创建维护规范文档
- 🎨 优化 Oxygen XR 论文信息展示（分行显示多论文）
- 🎨 删除 Mission 区域分割线
- 🔖 删除"虚拟试衣"标签
- 📊 更新 star 数：OxyGent 2k、xLLM 1.5k
- 🔤 按字母顺序重新排列项目卡片
- ⚠️ **事故修复**：恢复被错误覆盖的岗位信息（54个岗位），添加操作规范

### 2026-03-30
- 🎉 页面首次发布
- 📦 添加 OxyGent、xLLM、OxygenREC 等项目
- 🎨 定义页面视觉规范

---

> 💡 **提示**：每次更新页面后，请同步更新本文档的"更新日志"部分，记录修改内容。
