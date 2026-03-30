---
title: "About TGT"
description: "TGT（Tech Genius Team）是京东发起的顶尖青年技术天才计划，面向全球高校学生及应届生，探索 LLM、多模态、AI Infra 等前沿技术方向。"
date: 2026-03-30
---

{{< raw >}}
<style>
/* 1. 颜色与基础布局 */
:root {
  --jd-red: #E1251B;
  --jd-red-hover: #B11B14;
}

.tgt-page{max-width:860px;margin:0 auto;padding:2rem 0 4rem}
.tgt-hero{padding-bottom:2rem;border-bottom:0.5px solid rgba(0,0,0,.10);margin-bottom:2.5rem}
.tgt-eyebrow{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-text-secondary,#6b6b67);margin-bottom:.75rem}
.tgt-h1{font-size:clamp(26px,5vw,34px);font-weight:500;line-height:1.2;margin-bottom:1rem;color:var(--color-text-primary,#1a1a18)}
.tgt-accent{color: var(--jd-red)}
.tgt-hero p{font-size:15px;color:var(--color-text-secondary,#6b6b67);max-width:640px;line-height:1.8}
.tgt-sl{font-size:11px;letter-spacing:.10em;text-transform:uppercase;color:var(--color-text-secondary,#6b6b67);padding-bottom:.5rem;border-bottom:0.5px solid rgba(0,0,0,.10);margin-bottom:1rem}
.tgt-sec{margin-bottom:2.5rem}
.tgt-mission{background:var(--color-background-secondary,#f7f7f5);border-radius:12px;padding:1.25rem 1.5rem;font-size:15px;line-height:1.8}
.tgt-mission strong{color: var(--jd-red);font-weight:500}
.tgt-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:1rem}
.tgt-tag{font-size:12px;padding:3px 10px;border-radius:99px;border:0.5px solid rgba(0,0,0,.10);background:#fff;color:#6b6b67}
.tgt-tag.g{background:#FEEBEA;color: var(--jd-red);border-color:#FCD2D0}

/* 2. 开源项目卡片样式 */
.tgt-og{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px}
.tgt-oc{background:var(--color-background-primary,#fff);border:0.5px solid rgba(0,0,0,.10);border-radius:12px;padding:1rem 1.25rem}
.tgt-on{font-size:15px;font-weight:500;display:flex;align-items:center;gap:8px;margin-bottom:6px;color:var(--color-text-primary,#1a1a18)}
.tgt-stars{font-size:12px;background:#FAEEDA;color:#633806;border-radius:99px;padding:2px 8px;font-weight:400}
.tgt-od{font-size:13px;color:var(--color-text-secondary,#6b6b67);line-height:1.65;margin-bottom:12px}
.tgt-ol{display:flex;gap:8px;flex-wrap:wrap;align-items: center;}
.tgt-lnk{font-size:12px;text-decoration:none;padding:3px 10px;border-radius:99px;transition:background .15s; white-space: nowrap;}
.tgt-lnk.b{background:#E6F1FB;color:#185FA5;border:0.5px solid #B5D4F4}
.tgt-lnk.p{background:#EEEDFE;color:#3C3489;border:0.5px solid #AFA9EC}

/* 3. 筛选器与表格样式 */
.tgt-tabs{display:flex;gap:8px;margin-bottom:1rem}
.tgt-tab{font-size:13px;padding:5px 14px;border-radius:99px;border:0.5px solid rgba(0,0,0,.18);background:transparent;color:var(--color-text-secondary,#6b6b67);cursor:pointer;transition:all .15s}
.tgt-tab.active{background: var(--jd-red);color:#fff;border-color: var(--jd-red)}
.field-filters { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.5rem; }
.field-btn { font-size: 12px; padding: 4px 12px; border-radius: 4px; border: 0.5px solid rgba(0,0,0,.10); background: #fff; color: #6b6b67; cursor: pointer; }
.field-btn.active { background: #FEEBEA; color: var(--jd-red); border-color: #FCD2D0; font-weight: 500; }
.tgt-tbl{width:100%;border-collapse:collapse;font-size:13px}
.tgt-tbl th{text-align:left;font-weight:500;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-text-secondary,#6b6b67);padding:8px 12px;border-bottom:0.5px solid rgba(0,0,0,.10)}
.tgt-tbl td{padding:10px 12px;border-bottom:0.5px solid rgba(0,0,0,.10);vertical-align:middle}
.row-hidden { display: none !important; }
.tgt-bd{font-size:11px;padding:3px 8px;border-radius:4px;font-weight:500;white-space:nowrap}
.bd-ai{background:#FEEBEA;color: var(--jd-red)}
.bd-infra{background:#EEEDFE;color:#3C3489}
.bd-data{background:#FAEEDA;color:#633806}
.bd-sc{background:#E6F1FB;color:#185FA5}
.bd-spt{background:#E7F6F2;color:#006D5B} 
.bd-sec{background:#FFF4E5;color:#B35900} 
.tgt-ap{font-size:12px;color: var(--jd-red);text-decoration:none;padding:4px 10px;border:0.5px solid #FCD2D0;border-radius:4px;background:#FEEBEA;white-space:nowrap}
.tgt-hidden{display:none}

/* 4. 联系方式 */
.tgt-cr{display:flex;gap:12px;flex-wrap:wrap}
.tgt-cc{flex:1;min-width:180px;background:#fff;border:0.5px solid rgba(0,0,0,.10);border-radius:8px;padding:.75rem 1rem}
.tgt-cl{font-size:11px;text-transform:uppercase;color:#6b6b67;margin-bottom:4px}
.tgt-cv{font-size:14px;font-weight:500;color:#1a1a18}
.tgt-cv a{color: var(--jd-red);text-decoration:none}

@media(max-width:600px){.tgt-tbl th:first-child,.tgt-tbl td:first-child{display:none}}
</style>

<div class="tgt-page">
  <div class="tgt-hero">
    <div class="tgt-eyebrow">京东零售 · 顶尖青年技术天才计划</div>
    <h1 class="tgt-h1">Tech <span class="tgt-accent">Genius</span> Team</h1>
    <p>面向全球高校本硕博在校生、应届生及毕业两年内的技术人才，与全球技术天才一起基于京东丰富的业务场景探索前沿技术。</p>
  </div>

  <div class="tgt-sec">
    <div class="tgt-sl">Mission</div>
    <div class="tgt-mission">
      致力于寻找具备极客精神的 <strong>"Tech Genius"</strong>。我们不仅提供丰富的业务场景，更提供探索前沿技术边界的土壤。
      <div class="tgt-tags">
        <span class="tgt-tag g">LLM</span><span class="tgt-tag g">多模态</span><span class="tgt-tag g">视频生成</span>
        <span class="tgt-tag g">AI 搜索</span><span class="tgt-tag g">生成式推荐</span>
        <span class="tgt-tag">推理引擎优化</span><span class="tgt-tag">分布式训练</span>
        <span class="tgt-tag">AI Infra</span><span class="tgt-tag">决策智能</span><span class="tgt-tag">运筹优化</span>
      </div>
    </div>
  </div>

  <div class="tgt-sec">
    <div class="tgt-sl">Core Tech &amp; Open Source</div>
    <div class="tgt-og">
      <div class="tgt-oc">
        <div class="tgt-on">OxyGent <span id="oxygent-stars" class="tgt-stars">★ 1.9k</span></div>
        <div class="tgt-od">京东零售开源多智能体协作框架，GAIA 榜单全球前列，发布时获开源多智能体框架评分 Top 2。</div>
        <div class="tgt-ol"><a class="tgt-lnk b" href="https://github.com/jd-opensource/OxyGent" target="_blank">GitHub</a></div>
      </div>
      <div class="tgt-oc">
        <div class="tgt-on">xLLM <span id="xllm-stars" class="tgt-stars">★ 1.2k</span></div>
        <div class="tgt-od">灵活可扩展的通用大模型训练与推理框架，专注解决大规模模型训练中的效率与扩展性难题。</div>
        <div class="tgt-ol">
          <a class="tgt-lnk b" href="https://github.com/jd-opensource/xllm" target="_blank">GitHub</a>
          <a class="tgt-lnk p" href="https://arxiv.org/abs/2510.14686" target="_blank">arXiv</a>
        </div>
      </div>
      <div class="tgt-oc">
        <div class="tgt-on">OxygenREC</div>
        <div class="tgt-od">基于指令遵循的「快慢思考」电商生成式推荐框架，arXiv v1 · Dec 2025。</div>
        <div class="tgt-ol">
          <a class="tgt-lnk p" href="https://arxiv.org/abs/2512.22386" target="_blank">Paper</a>
          <span style="font-size:11px;color:#6b6b67">arXiv v1</span>
        </div>
      </div>
      <div class="tgt-oc">
        <div class="tgt-on">顶会论文合集</div>
        <div class="tgt-od">2026 京东零售技术国际顶会论文合集 · 第一期，CVPR / WWW / ICLR，发布于 Mar 2026。</div>
        <div class="tgt-ol"><a class="tgt-lnk b" href="https://mp.weixin.qq.com/s/q7AyShgBDBd14hqssxpVRQ" target="_blank">查看</a></div>
      </div>
    </div>
  </div>

  <div class="tgt-sec">
    <div class="tgt-sl">Open Positions</div>
    <div class="tgt-tabs">
      <button class="tgt-tab active" onclick="mainTab('full',this)">正式岗位</button>
      <button class="tgt-tab" onclick="mainTab('intern',this)">实习岗位(27届及之后)</button>
    </div>
    <div class="field-filters">
      <button class="field-btn active" onclick="filterField('All', this)">全部</button>
      <button class="field-btn" onclick="filterField('AI', this)">AI</button>
      <button class="field-btn" onclick="filterField('Infra', this)">Infra</button>
      <button class="field-btn" onclick="filterField('SPT', this)">搜推广</button>
      <button class="field-btn" onclick="filterField('SC', this)">供应链</button>
      <button class="field-btn" onclick="filterField('Data', this)">大数据</button>
      <button class="field-btn" onclick="filterField('Sec', this)">安全</button>
    </div>

    <div id="tgt-full">
      <table class="tgt-tbl">
        <thead><tr><th>领域</th><th>方向</th><th></th></tr></thead>
        <tbody>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>代码大模型</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6101" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>基模后训练</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6533" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多模态大模型</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6013" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>大模型安全风控</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6537" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>AI 搜索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6147" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>生成式推荐</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6119" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>3D 内容生成</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6182" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>视频生成</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6099" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>推理引擎优化</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=5989" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>分布式训练自动优化</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=5991" target="_blank">申请 →</a></td></tr>
          <tr data-field="Data"><td><span class="tgt-bd bd-data">大数据</span></td><td>大数据融合计算优化</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6005" target="_blank">申请 →</a></td></tr>
          <tr data-field="SC"><td><span class="tgt-bd bd-sc">供应链</span></td><td>供应链优化技术探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6081" target="_blank">申请 →</a></td></tr>
        </tbody>
      </table>
    </div>

    <div id="tgt-intern" class="tgt-hidden">
      <table class="tgt-tbl">
        <thead><tr><th>领域</th><th>方向</th><th></th></tr></thead>
        <tbody>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>大模型预训练与后训练</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7515" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>购物智能体强化学习后训练算法探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7494" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多模态大模型可控视觉生成底座研发与应用</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7530" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多模态图像视频生成大模型研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7601" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>3D可控生成与空间智能多模态研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7536" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>代码大模型缺陷检测与自动生成研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7567" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>电商智能体长期记忆与互动优化研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7574" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>结构化智能体动态用户画像前沿探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7505" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>大模型用户行为语义化与知识关联研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7495" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多智能体联合训练与协同推理探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7534" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>基于AI Agent的搜索体验全链路优化研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7520" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多模态大模型意图识别与搜推研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7546" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>基于大模型的模型驱动测试建模方法研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7529" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>软件研发Agent智能体开发与应用</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7511" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多模态GUI智能体与RAG系统研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7506" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>异构硬件深度学习编译优化技术探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7629" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>大模型高效推理与端云协同架构研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7625" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>超大规模异构算力集群智能调度研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7617" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>超大规模分布式训练自动优化探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7633" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>基于LLM的特征工程智能治理技术研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7565" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>搜推系统生成式大模型排序决策研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7592" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>生成式推荐与强化学习后训练探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7609" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>面向电商推荐场景的大模型技术应用</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7522" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>广告全链路数据自动化分析与诊断</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7603" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>LLM 多智能体在营销投放算法的应用</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7570" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>基于大模型技术的智能广告投放算法研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7607" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>多模态大模型广告创意分发算法研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7591" target="_blank">申请 →</a></td></tr>
          <tr data-field="SC"><td><span class="tgt-bd bd-sc">供应链</span></td><td>运筹优化大模型交易链路的一体化建设</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7538" target="_blank">申请 →</a></td></tr>
          <tr data-field="SC"><td><span class="tgt-bd bd-sc">供应链</span></td><td>端到端大模型供应链智能决策底座研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7443" target="_blank">申请 →</a></td></tr>
          <tr data-field="SC"><td><span class="tgt-bd bd-sc">供应链</span></td><td>运筹大模型供应链决策系统优化</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7410" target="_blank">申请 →</a></td></tr>
          <tr data-field="Sec"><td><span class="tgt-bd bd-sec">安全</span></td><td>LLM 大模型对抗防御与可信原生安全研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7445" target="_blank">申请 →</a></td></tr>
          <tr data-field="Sec"><td><span class="tgt-bd bd-sec">安全</span></td><td>LLM 多模态风控大模型对抗与鲁棒性研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7422" target="_blank">申请 →</a></td></tr>
          <tr data-field="Sec"><td><span class="tgt-bd bd-sec">安全</span></td><td>LLM 多模态合规智能体与自进化系统落地探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7408" target="_blank">申请 →</a></td></tr>
          <tr data-field="Data"><td><span class="tgt-bd bd-data">大数据</span></td><td>多模态数据湖存储与湖流一体优化探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7635" target="_blank">申请 →</a></td></tr>
          <tr data-field="Data"><td><span class="tgt-bd bd-data">大数据</span></td><td>基于分层AI架构的SparkSQL自适应执行优化系统研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=7519" target="_blank">申请 →</a></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="tgt-sec">
    <div class="tgt-sl">联系我</div>
    <div class="tgt-cr">
      <div class="tgt-cc">
        <div class="tgt-cl">Email</div>
        <div class="tgt-cv"><a href="mailto:yaochaohao.1@jd.com">yaochaohao.1@jd.com</a></div>
      </div>
      <div class="tgt-cc">
        <div class="tgt-cl">WeChat</div>
        <div class="tgt-cv">CRISYAO916</div>
        <div style="font-size:11px;color:#6b6b67;margin-top:3px">备注：TGT-院校-姓名</div>
      </div>
    </div>
  </div>
</div>

<script>
let currentMain = 'full';
let currentField = 'All';

function mainTab(tab, btn) {
    currentMain = tab;
    document.getElementById('tgt-full').classList.toggle('tgt-hidden', tab !== 'full');
    document.getElementById('tgt-intern').classList.toggle('tgt-hidden', tab !== 'intern');
    document.querySelectorAll('.tgt-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
}

function filterField(field, btn) {
    currentField = field;
    document.querySelectorAll('.field-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
}

function applyFilters() {
    const activeId = currentMain === 'full' ? 'tgt-full' : 'tgt-intern';
    const rows = document.querySelectorAll(`#${activeId} tbody tr`);
    rows.forEach(row => {
        const field = row.getAttribute('data-field');
        row.classList.toggle('row-hidden', currentField !== 'All' && field !== currentField);
    });
}

// GitHub Star 抓取
async function fetchStars(repo, elementId) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (!response.ok) return;
        const data = await response.json();
        const stars = data.stargazers_count;
        const formatted = stars >= 1000 ? (stars / 1000).toFixed(1) + 'k' : stars;
        document.getElementById(elementId).innerText = `★ ${formatted}`;
    } catch (e) {}
}

window.addEventListener('load', () => {
    fetchStars('jd-opensource/OxyGent', 'oxygent-stars');
    fetchStars('jd-opensource/xllm', 'xllm-stars');
});
</script>
{{< /raw >}}
