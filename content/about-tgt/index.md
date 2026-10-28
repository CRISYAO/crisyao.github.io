---
title: "About TGT"
description: "TGT（Tech Genius Team）是京东发起的顶尖青年技术天才计划，面向全球高校学生及应届生，探索 LLM、多模态、AI Infra 等前沿技术方向。"
date: 2026-03-30
---

{{< raw >}}
<style>
:root {
  --jd-red: #E1251B;
  --jd-red-hover: #B11B14;
  --jd-red-bg: #FEEBEA;
  --jd-red-border: #FCD2D0;
}

/* ── 布局 ── */
.tgt-page{max-width:860px;margin:0 auto;padding:2rem 0 4rem}
.tgt-hero{padding-bottom:2rem;border-bottom:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.2));margin-bottom:2.5rem}
.tgt-eyebrow{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-text-secondary,#6b6b67);margin-bottom:.75rem}
.tgt-h1{font-size:clamp(26px,5vw,34px);font-weight:500;line-height:1.2;margin-bottom:1rem;color:var(--color-text-primary,#1a1a18)}
.tgt-accent{color:var(--jd-red)}
.tgt-hero p{font-size:15px;color:var(--color-text-secondary,#6b6b67);max-width:640px;line-height:1.8}
.tgt-sl{font-size:11px;letter-spacing:.10em;text-transform:uppercase;color:var(--color-text-secondary,#6b6b67);padding-bottom:.5rem;margin-bottom:1rem}
.tgt-sec{margin-bottom:2.5rem}

/* ── Mission ── */
.tgt-mission{background:var(--color-background-secondary,#f7f7f5);border-radius:12px;padding:1.25rem 1.5rem;font-size:15px;line-height:1.8;color:var(--color-text-primary,#1a1a18)}
.tgt-mission strong{color:var(--jd-red);font-weight:500}
.tgt-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:1rem}
.tgt-tag{font-size:12px;padding:3px 10px;border-radius:99px;border:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.2));background:var(--color-background-primary,#fff);color:var(--color-text-secondary,#6b6b67)}
.tgt-tag.g{background:var(--jd-red-bg);color:var(--jd-red);border-color:var(--jd-red-border)}

/* ── 团队卡片（一行一张：左 1/3 团队，右 2/3 论文） ── */
.tgt-teams{display:flex;flex-direction:column;gap:12px}
.tgt-team{display:grid;grid-template-columns:1fr 2fr;border:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.2));border-radius:12px;overflow:hidden;background:var(--color-background-primary,#fff)}
.tgt-team-l{padding:1.15rem 1.35rem;border-right:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.2));background:var(--color-background-secondary,#fafaf8);display:flex;flex-direction:column}
.tgt-on{font-size:15px;font-weight:600;display:flex;align-items:center;gap:8px;margin-bottom:6px;color:var(--color-text-primary,#1a1a18);flex-wrap:wrap}
.tgt-sub{font-size:12.5px;font-weight:400;color:var(--color-text-secondary,#6b6b67);margin-left:-4px}
.tgt-od{font-size:12.5px;color:var(--color-text-secondary,#6b6b67);line-height:1.7;margin-bottom:10px}
.tgt-ol{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:auto}
.tgt-papers{padding:4px 0;display:flex;flex-direction:column;justify-content:center}
.tgt-p{display:grid;grid-template-columns:1fr 132px 66px;gap:14px;align-items:center;padding:11px 16px;text-decoration:none;border-bottom:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.14));transition:background .15s}
.tgt-p:last-child{border-bottom:none}
.tgt-p:hover{background:var(--color-background-secondary,#fafaf8);text-decoration:none}
.tgt-pt{font-size:13.5px;line-height:1.45;color:var(--color-text-primary,#1a1a18)}
.tgt-pv{font-size:11px;color:var(--color-text-secondary,#6b6b67);text-align:right;white-space:nowrap;letter-spacing:.01em}
.tgt-pr{justify-self:end;font-size:10.5px;padding:2px 8px;border-radius:4px;font-weight:600;white-space:nowrap}
.rank-a{background:#FEEBEA;color:#C41E1A;border:0.5px solid #FCD2D0}
.rank-b{background:#FFF4E5;color:#B35900;border:0.5px solid #F7DDB8}
.rank-n{background:#F2F2F0;color:#6b6b67;border:0.5px solid rgba(0,0,0,.06)}
.rank-g{background:#FFF3C7;color:#8A6100;border:0.5px solid #EFD489}
.tgt-more{display:flex;flex-wrap:wrap;align-items:center;gap:10px 12px;margin-top:22px;padding:16px 2px 2px;border-top:0.5px dashed var(--color-border-tertiary,rgba(128,128,128,.28));font-size:13px;color:var(--color-text-secondary,#6b6b67)}
.tgt-more-t{color:var(--color-text-primary,#1a1a18);font-weight:500}
.tgt-more-d{width:1px;height:11px;background:var(--color-border-tertiary,rgba(128,128,128,.45))}
.tgt-lnk{font-size:13px;font-weight:500;text-decoration:none;white-space:nowrap;display:inline-flex;align-items:center;gap:4px;transition:border-color .15s;border-bottom:0.5px solid transparent}
.tgt-lnk.b{color:#185FA5}
.tgt-lnk.b:hover{color:#185FA5;text-decoration:none;border-bottom-color:#9DC2E6}
.tgt-meta{font-size:11.5px;color:var(--color-text-secondary,#6b6b67);margin-left:auto}

/* ── Tabs & 筛选器 ── */
.tgt-tabs{display:flex;gap:8px;margin-bottom:1rem}
.tgt-tab{font-size:13px;padding:5px 14px;border-radius:99px;border:0.5px solid var(--color-border-secondary,rgba(128,128,128,.3));background:transparent;color:var(--color-text-secondary,#6b6b67);cursor:pointer;transition:all .15s;font-family:inherit}
.tgt-tab.active{background:var(--jd-red);color:#fff;border-color:var(--jd-red)}
.field-filters{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:1.5rem}
.field-btn{font-size:12px;padding:4px 12px;border-radius:4px;border:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.2));background:var(--color-background-primary,#fff);color:var(--color-text-secondary,#6b6b67);cursor:pointer;font-family:inherit;transition:all .15s}
.field-btn.active{background:var(--jd-red-bg);color:var(--jd-red);border-color:var(--jd-red-border);font-weight:500}

/* ── 表格 ── */
.tgt-tbl{width:100%;border-collapse:collapse;font-size:13px}
.tgt-tbl th{text-align:left;font-weight:500;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-text-secondary,#6b6b67);padding:8px 12px;border-bottom:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.2))}
.tgt-tbl td{padding:10px 12px;border-bottom:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.2));vertical-align:middle;color:var(--color-text-primary,#1a1a18)}
.tgt-tbl tr:last-child td{border-bottom:none}
.tgt-tbl tr:hover td{background:var(--color-background-secondary,#f7f7f5)}
.row-hidden{display:none!important}

/* ── Badges ── */
.tgt-bd{font-size:11px;padding:3px 8px;border-radius:4px;font-weight:500;white-space:nowrap}
.bd-ai{background:var(--jd-red-bg);color:var(--jd-red)}
.bd-infra{background:#EEEDFE;color:#3C3489}
.bd-data{background:#FAEEDA;color:#633806}
.bd-sc{background:#E6F1FB;color:#185FA5}
.bd-spt{background:#E7F6F2;color:#006D5B}
.bd-sec{background:#FFF4E5;color:#B35900}

/* ── 申请按钮 ── */
.tgt-ap{font-size:12px;color:var(--jd-red);text-decoration:none;padding:4px 10px;border:0.5px solid var(--jd-red-border);border-radius:4px;background:var(--jd-red-bg);white-space:nowrap;transition:background .15s}

/* ── 联系方式 ── */
.tgt-cr{display:flex;gap:12px;flex-wrap:wrap}
.tgt-cc{flex:1;min-width:180px;background:var(--color-background-primary,#fff);border:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.2));border-radius:8px;padding:.75rem 1rem}
.tgt-cl{font-size:11px;text-transform:uppercase;color:var(--color-text-secondary,#6b6b67);margin-bottom:4px;letter-spacing:.06em}
.tgt-cv{font-size:14px;font-weight:500;color:var(--color-text-primary,#1a1a18)}
.tgt-cv a{color:var(--jd-red);text-decoration:none}
.tgt-ch{font-size:11px;color:var(--color-text-secondary,#6b6b67);margin-top:3px}

/* ── Coming Soon 虚线框 ── */
/* ── Coming Soon 虚线框 ── */
.tgt-cs{border:2px dashed var(--color-border-tertiary,rgba(128,128,128,.35));border-radius:12px;padding:1.5rem;text-align:center;grid-column:1/-1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;transition:all .3s ease;cursor:default}
.tgt-cs:hover{border-color:var(--jd-red);background:var(--jd-red-bg);transform:translateY(-2px);box-shadow:0 4px 12px rgba(225,37,27,.1)}
.tgt-cs:hover .tgt-cs-icon{color:var(--jd-red);transform:scale(1.2)}
.tgt-cs:hover .tgt-cs-text{color:var(--jd-red)}
.tgt-cs:hover .tgt-cs-sub{opacity:1}
.tgt-cs-icon{font-size:22px;color:var(--color-text-secondary,#6b6b67);transition:all .3s ease}
.tgt-cs-text{font-size:14px;font-weight:500;color:var(--color-text-secondary,#6b6b67);transition:all .3s ease}
.tgt-cs-sub{font-size:12px;color:var(--color-text-secondary,#6b6b67);opacity:.65;transition:all .3s ease}

.tgt-hidden{display:none}
@media(max-width:600px){
  .tgt-tbl th:first-child,.tgt-tbl td:first-child{display:none}
  .tgt-team{grid-template-columns:1fr}
  .tgt-team-l{border-right:none;border-bottom:0.5px solid var(--color-border-tertiary,rgba(128,128,128,.2))}
  .tgt-p{grid-template-columns:1fr 66px;gap:8px;padding:10px 14px}
  .tgt-pv{grid-column:1;text-align:left;margin-top:2px}
  .tgt-pr{grid-column:2;grid-row:1/3;align-self:center}
  .tgt-more{gap:8px 10px;margin-top:18px}
  .tgt-meta{margin-left:0}
}
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
    <div class="tgt-sl">Research &amp; Open Source</div>
    <div class="tgt-teams">

      <div class="tgt-team">
        <div class="tgt-team-l">
          <div class="tgt-on">Ads Group</div>
          <div class="tgt-od">广告场景的生成式建模，覆盖个性化广告图文生成与多主体视频生成。</div>
        </div>
        <div class="tgt-papers">
          <a class="tgt-p" href="https://arxiv.org/abs/2605.12138" target="_blank">
            <span class="tgt-pt"><strong>Uni-AdGen</strong> — Design Your Ad: Personalized Advertising Image and Text Generation with Unified Autoregressive Models</span>
            <span class="tgt-pv">CVPR 2026<br><span style="opacity:.65">May 2026</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2512.22310" target="_blank">
            <span class="tgt-pt"><strong>MoFu</strong>: Scale-Aware Modulation and Fourier Fusion for Multi-Subject Video Generation</span>
            <span class="tgt-pv">AAAI 2026<br><span style="opacity:.65">Dec 2025</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
        </div>
      </div>

      <div class="tgt-team">
        <div class="tgt-team-l">
          <div class="tgt-on">AI Infra</div>
          <div class="tgt-od">大模型训练与推理的系统与框架，覆盖分布式训练、推理加速与生产级多模型服务。</div>
        </div>
        <div class="tgt-papers">
          <a class="tgt-p" href="https://github.com/jd-opensource/xllm" target="_blank">
            <span class="tgt-pt"><strong>xLLM</strong> — 通用大模型训练与推理框架</span>
            <span class="tgt-pv">GitHub</span>
            <span class="tgt-pr rank-g" id="xllm-stars">★ 1.6k</span>
          </a>
          <a class="tgt-p" href="https://zirui.cool/assets/pdf/Janus_SOSP26.pdf" target="_blank">
            <span class="tgt-pt"><strong>Janus</strong>: Multi-LLM Serving at Production Scale</span>
            <span class="tgt-pv">SOSP 2026<br><span style="opacity:.65">Sep 2026</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2609.36433" target="_blank">
            <span class="tgt-pt"><strong>RA-CFGCache</strong>: From Branch-Level Criteria to Guided-Risk Control under Classifier-Free Guidance</span>
            <span class="tgt-pv">NeurIPS 2026<br><span style="opacity:.65">Sep 2026</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2606.23087" target="_blank">
            <span class="tgt-pt"><strong>FlowTrain</strong>: Flow-Based Decoupled Training for Industrial-Grade Vision-Language Models</span>
            <span class="tgt-pv">EMNLP 2026 (Industry)<br><span style="opacity:.65">Jun 2026</span></span>
            <span class="tgt-pr rank-b">CCF-B</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2602.09578" target="_blank">
            <span class="tgt-pt"><strong>FlexMARL</strong>: Graph-Driven Rollout-Training Co-Design for LLM-Based Multi-Agent Reinforcement Learning</span>
            <span class="tgt-pv">ATC 2026<br><span style="opacity:.65">Feb 2026</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2510.14686" target="_blank">
            <span class="tgt-pt"><strong>xLLM</strong> Technical Report</span>
            <span class="tgt-pv">arXiv 2510.14686<br><span style="opacity:.65">Oct 2025</span></span>
            <span class="tgt-pr rank-n">技术报告</span>
          </a>
        </div>
      </div>

      <div class="tgt-team">
        <div class="tgt-team-l">
          <div class="tgt-on">Consumer AI <span class="tgt-sub">（东东团队）</span></div>
          <div class="tgt-od">面向消费场景的 AI 技术，覆盖会话式购物、组合购买与优惠券约束下的智能体评测，以及长程任务、记忆机制与强化学习后训练。</div>
        </div>
        <div class="tgt-papers">
          <a class="tgt-p" href="https://arxiv.org/abs/2609.38974" target="_blank">
            <span class="tgt-pt"><strong>RealWorldShop</strong>: Benchmarking and Improving Conversational Shopping Agents in Real-World E-commerce</span>
            <span class="tgt-pv">EMNLP 2026 Findings<br><span style="opacity:.65">Sep 2026</span></span>
            <span class="tgt-pr rank-b">CCF-B</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2609.34422" target="_blank">
            <span class="tgt-pt"><strong>CAMG-RL</strong> — Coding Agent Memory Post-training: Unlocking the Memory Potential of Pre-trained File Operations for Long-Horizon Tasks via Reinforcement Learning</span>
            <span class="tgt-pv">arXiv 2609.34422<br><span style="opacity:.65">Sep 2026</span></span>
            <span class="tgt-pr rank-n">预印本</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2608.09282" target="_blank">
            <span class="tgt-pt"><strong>ComboShoppingBench</strong>: Evaluating LLM Agents for Budget-Constrained Basket Shopping with Coupons</span>
            <span class="tgt-pv">arXiv 2608.09282<br><span style="opacity:.65">Aug 2026</span></span>
            <span class="tgt-pr rank-n">预印本</span>
          </a>
        </div>
      </div>

      <div class="tgt-team">
        <div class="tgt-team-l">
          <div class="tgt-on">OxyGent</div>
          <div class="tgt-od">把 agent、工具、模型与推理流程统一成可插拔的 Oxy 单元，像搭积木一样组多智能体系统；GAIA 榜单全球前列，并借 OxyBank 持续进化。</div>
        </div>
        <div class="tgt-papers">
          <a class="tgt-p" href="https://github.com/jd-opensource/OxyGent" target="_blank">
            <span class="tgt-pt"><strong>OxyGent</strong> — 开源多智能体协作框架</span>
            <span class="tgt-pv">GitHub</span>
            <span class="tgt-pr rank-g" id="oxygent-stars">★ 2.1k</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2605.13213" target="_blank">
            <span class="tgt-pt"><strong>HAM³</strong>: Hierarchical Attacks for Multi-Modal Multi-Agent Reasoning</span>
            <span class="tgt-pv">CVPR 2026<br><span style="opacity:.65">May 2026</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2604.25602" target="_blank">
            <span class="tgt-pt"><strong>OxyGent</strong>: Making Multi-Agent Systems Modular, Observable, and Evolvable via Oxy Abstraction</span>
            <span class="tgt-pv">ACL 2026 Demo<br><span style="opacity:.65">Apr 2026</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2506.19500" target="_blank">
            <span class="tgt-pt"><strong>NaviAgent</strong>: Graph-Driven Bilevel Planning for Scalable Tool Orchestration</span>
            <span class="tgt-pv">ICML 2026<br><span style="opacity:.65">Jun 2025</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
        </div>
      </div>

      <div class="tgt-team">
        <div class="tgt-team-l">
          <div class="tgt-on">Oxygen AIGC</div>
          <div class="tgt-od">电商场景的多模态生成与理解，覆盖虚拟试衣、分层图像编辑、多模态评测与多教师蒸馏后训练。</div>
        </div>
        <div class="tgt-papers">
          <a class="tgt-p" href="https://arxiv.org/abs/2610.24738" target="_blank">
            <span class="tgt-pt"><strong>LayerEditor</strong>: Editing Images into Reusable Layers via Compositional Edit-Prior Distillation</span>
            <span class="tgt-pv">arXiv 2610.24738<br><span style="opacity:.65">Oct 2026</span></span>
            <span class="tgt-pr rank-n">预印本</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2610.13521" target="_blank">
            <span class="tgt-pt"><strong>Road MOPD</strong> — Beyond Domain-Routed Supervision: Cross-Teacher Guarding for Multi-Teacher On-Policy Distillation</span>
            <span class="tgt-pv">arXiv 2610.13521<br><span style="opacity:.65">Oct 2026</span></span>
            <span class="tgt-pr rank-n">预印本</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2607.21694" target="_blank">
            <span class="tgt-pt"><strong>Oxygen-TryOn</strong>: Fashion-Native Foundation Model for Any-item Virtual Try-On</span>
            <span class="tgt-pv">arXiv 2607.21694<br><span style="opacity:.65">Jul 2026</span></span>
            <span class="tgt-pr rank-n">预印本</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2605.13173" target="_blank">
            <span class="tgt-pt"><strong>OxyEcomBench</strong>: Benchmarking Multimodal Foundation Models across E-Commerce Ecosystems</span>
            <span class="tgt-pv">arXiv 2605.13173<br><span style="opacity:.65">May 2026</span></span>
            <span class="tgt-pr rank-n">预印本</span>
          </a>
        </div>
      </div>

      <div class="tgt-team">
        <div class="tgt-team-l">
          <div class="tgt-on">OxygenREC</div>
          <div class="tgt-od">电商生成式推荐，以指令遵循驱动「快慢思考」统一检索与排序，并逐步把判别能力内化进生成模型。</div>
        </div>
        <div class="tgt-papers">
          <a class="tgt-p" href="https://arxiv.org/abs/2607.24255" target="_blank">
            <span class="tgt-pt"><strong>OxygenREC-v2</strong>: Internalizing Discrimination into Generative Recommendation</span>
            <span class="tgt-pv">arXiv 2607.24255<br><span style="opacity:.65">Jul 2026</span></span>
            <span class="tgt-pr rank-n">预印本</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2512.22386" target="_blank">
            <span class="tgt-pt"><strong>OxygenREC</strong>: An Instruction-Following Generative Framework for E-commerce Recommendation</span>
            <span class="tgt-pv">SIGIR 2026<br><span style="opacity:.65">Apr 2026</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
        </div>
      </div>

      <div class="tgt-team">
        <div class="tgt-team-l">
          <div class="tgt-on">OxygenSearch</div>
          <div class="tgt-od">面向电商生成式检索的优化框架，解决层次前缀冲突与标签噪声问题。</div>
        </div>
        <div class="tgt-papers">
          <a class="tgt-p" href="https://arxiv.org/abs/2602.23964" target="_blank">
            <span class="tgt-pt"><strong>RAD-DPO</strong>: Robust Adaptive Denoising Direct Preference Optimization for Generative Retrieval in E-commerce</span>
            <span class="tgt-pv">SIGIR 2026<br><span style="opacity:.65">Apr 2026</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
        </div>
      </div>

      <div class="tgt-team">
        <div class="tgt-team-l">
          <div class="tgt-on">Oxygen XR</div>
          <div class="tgt-od">3D 视觉生成与重建，基于高斯泼溅与稀疏表示实现高质量 3D 内容生成。</div>
        </div>
        <div class="tgt-papers">
          <a class="tgt-p" href="https://arxiv.org/abs/2604.00648" target="_blank">
            <span class="tgt-pt"><strong>DirectFisheye-GS</strong>: Enabling Native Fisheye Input in Gaussian Splatting with Cross-View Joint Optimization</span>
            <span class="tgt-pv">CVPR 2026<br><span style="opacity:.65">Apr 2026</span></span>
            <span class="tgt-pr rank-a">CCF-A</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2509.23646" target="_blank">
            <span class="tgt-pt"><strong>Sparse-Up</strong>: Learnable Sparse Upsampling for 3D Generation with High-Fidelity Textures</span>
            <span class="tgt-pv">ICASSP 2026<br><span style="opacity:.65">Sep 2025</span></span>
            <span class="tgt-pr rank-b">CCF-B</span>
          </a>
        </div>
      </div>

      <div class="tgt-team">
        <div class="tgt-team-l">
          <div class="tgt-on">Tech Team Y</div>
          <div class="tgt-od">供应链场景的 AI 基础能力：把运筹优化与 AI 估计耦合进决策，并在十亿级时间序列上做人类反馈对齐。</div>
        </div>
        <div class="tgt-papers">
          <a class="tgt-p" href="https://www.preprints.org/manuscript/202610.0845/v1" target="_blank">
            <span class="tgt-pt"><strong>ScoAI</strong>: Toward OR-Native Decision Intelligence</span>
            <span class="tgt-pv">Preprints.org<br><span style="opacity:.65">Oct 2026</span></span>
            <span class="tgt-pr rank-n">预印本</span>
          </a>
          <a class="tgt-p" href="https://arxiv.org/abs/2501.15942" target="_blank">
            <span class="tgt-pt"><strong>TimeHF</strong>: Billion-Scale Time Series Models Guided by Human Feedback</span>
            <span class="tgt-pv">arXiv 2501.15942<br><span style="opacity:.65">Jan 2025</span></span>
            <span class="tgt-pr rank-n">预印本</span>
          </a>
        </div>
      </div>

    </div>
    <div class="tgt-more">
      <span class="tgt-more-t">更多团队与顶会成果</span>
      <span class="tgt-more-d" aria-hidden="true"></span>
      <a class="tgt-lnk b" href="https://mp.weixin.qq.com/s/q7AyShgBDBd14hqssxpVRQ" target="_blank">查看 2026 京东零售技术论文合集 <span aria-hidden="true">↗</span></a>
      <span class="tgt-meta">首期精选 11 篇 · 后续期次持续更新</span>
    </div>
  </div>

  <div class="tgt-sec">
    <div class="tgt-sl">Open Positions</div>
    <div class="tgt-tabs">
      <button class="tgt-tab active" onclick="mainTab('full',this)">正式岗位（27届）</button>
      <button class="tgt-tab" onclick="mainTab('intern',this)">实习岗位(27届及之后)</button>
    </div>
    <div class="field-filters">
      <button class="field-btn active" onclick="filterField('All',this)">全部</button>
      <button class="field-btn" onclick="filterField('AI',this)">AI</button>
      <button class="field-btn" onclick="filterField('Infra',this)">Infra</button>
      <button class="field-btn" onclick="filterField('SPT',this)">搜推广</button>
      <button class="field-btn" onclick="filterField('SC',this)">供应链</button>
      <button class="field-btn" onclick="filterField('Data',this)">大数据</button>
      <button class="field-btn" onclick="filterField('Sec',this)">安全</button>
    </div>

    <div id="tgt-full">
      <table class="tgt-tbl">
        <thead><tr><th>领域</th><th>方向</th><th></th></tr></thead>
        <tbody>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>面向京东零售全场景的Agent研究与落地（东东团队）</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6049" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>面向电商推荐场景的大模型技术应用（OxygenREC团队）</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6119" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>生成与理解多模态大模型在电商行业的关键技术研究和应用（Oxygen AIGC团队）</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8754" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>基于电商大模型的mid-train及RL研究（零售基模团队）</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8766" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多智能体联合训练与协同推理探索（OxyGent团队）</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8679" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>面向国际电商场景的agent应用和toolRL探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8664" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多模态大模型在视频中的可控生成</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=6099" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>空间智能大模型创新与应用（Oxygen XR团队）</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8760" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>面向工业界Agent的强化学习后训练研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8669" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>大模型分布式训练自动优化</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8774" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>超大规模异构算力智能调度</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8759" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>新一代大模型推理技术优化研究（xLLM团队）</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8746" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>面向搜推算法特征治理的智能体系统研究和实现</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8647" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>大模型以及AI搜索助手应用</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8677" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>基于多模态大模型的生成式搜索推荐范式应用探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8632" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>多模态大模型广告创意分发算法研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8658" target="_blank">申请 →</a></td></tr>
          <tr data-field="SC"><td><span class="tgt-bd bd-sc">供应链</span></td><td>运筹大模型供应链决策系统优化</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8676" target="_blank">申请 →</a></td></tr>
          <tr data-field="SC"><td><span class="tgt-bd bd-sc">供应链</span></td><td>端到端大模型供应链智能决策底座研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8643" target="_blank">申请 →</a></td></tr>
        </tbody>
      </table>
    </div>

    <div id="tgt-intern" class="tgt-hidden">
      <table class="tgt-tbl">
        <thead><tr><th>领域</th><th>方向</th><th></th></tr></thead>
        <tbody>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>面向电商大模型预训练与后训练的探索研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8912" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>购物智能体强化学习后训练算法探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8934" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多模态大模型可控视觉生成底座研发与应用</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8925" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多模态图像视频生成大模型研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8820" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>3D可控生成与空间智能多模态研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=9018" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>代码大模型缺陷检测与自动生成研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8878" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>电商智能体长期记忆与互动优化研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8875" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>结构化智能体动态用户画像前沿探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8908" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>大模型用户行为语义化与知识关联研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8913" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多智能体联合训练与协同推理探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8909" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>基于AI Agent的搜索体验全链路优化研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8892" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>多模态大模型意图识别与搜推研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8899" target="_blank">申请 →</a></td></tr>
          <tr data-field="AI"><td><span class="tgt-bd bd-ai">AI</span></td><td>软件研发Agent智能体开发与应用</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8941" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>大模型高效推理与端云协同架构研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8859" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>超大规模异构算力集群智能调度研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8809" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>超大规模分布式训练自动优化探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8797" target="_blank">申请 →</a></td></tr>
          <tr data-field="Infra"><td><span class="tgt-bd bd-infra">Infra</span></td><td>基于LLM的特征工程智能治理技术研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8849" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>生成式推荐与强化学习后训练探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8853" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>面向电商推荐场景的大模型技术应用</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8936" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>广告全链路数据自动化分析与诊断</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8877" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>LLM 多智能体在营销投放算法的应用</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8867" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>基于大模型技术的智能广告投放算法研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8872" target="_blank">申请 →</a></td></tr>
          <tr data-field="SPT"><td><span class="tgt-bd bd-spt">搜推广</span></td><td>多模态大模型广告创意分发算法研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8871" target="_blank">申请 →</a></td></tr>
          <tr data-field="SC"><td><span class="tgt-bd bd-sc">供应链</span></td><td>运筹优化大模型交易链路的一体化建设</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8930" target="_blank">申请 →</a></td></tr>
          <tr data-field="SC"><td><span class="tgt-bd bd-sc">供应链</span></td><td>端到端大模型供应链智能决策底座研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8990" target="_blank">申请 →</a></td></tr>
          <tr data-field="SC"><td><span class="tgt-bd bd-sc">供应链</span></td><td>运筹大模型供应链决策系统优化</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8986" target="_blank">申请 →</a></td></tr>
          <tr data-field="Sec"><td><span class="tgt-bd bd-sec">安全</span></td><td>LLM 大模型对抗防御与可信原生安全研发</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8999" target="_blank">申请 →</a></td></tr>
          <tr data-field="Sec"><td><span class="tgt-bd bd-sec">安全</span></td><td>LLM 多模态风控大模型对抗与鲁棒性研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=9010" target="_blank">申请 →</a></td></tr>
          <tr data-field="Sec"><td><span class="tgt-bd bd-sec">安全</span></td><td>LLM 多模态合规智能体与自进化系统落地探索</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8966" target="_blank">申请 →</a></td></tr>
          <tr data-field="Data"><td><span class="tgt-bd bd-data">大数据</span></td><td>AI多模态存储与向量化计算探索研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8801" target="_blank">申请 →</a></td></tr>
          <tr data-field="Data"><td><span class="tgt-bd bd-data">大数据</span></td><td>基于分层AI架构的SparkSQL自适应执行优化系统研究</td><td><a class="tgt-ap" href="https://campus.jd.com/#/details?id=8917" target="_blank">申请 →</a></td></tr>
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
        <div class="tgt-ch">备注：TGT-院校-姓名</div>
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
  document.querySelectorAll(`#${activeId} tbody tr`).forEach(row => {
    row.classList.toggle('row-hidden', currentField !== 'All' && row.dataset.field !== currentField);
  });
}

async function fetchStars(repo, elementId) {
  try {
    const r = await fetch(`https://img.shields.io/github/stars/${repo}.json`);
    if (!r.ok) return;
    const d = await r.json();
    if (d.value) {
      document.getElementById(elementId).innerText = '★ ' + d.value;
    }
  } catch(e) {}
}

window.addEventListener('load', () => {
  fetchStars('jd-opensource/OxyGent', 'oxygent-stars');
  fetchStars('jd-opensource/xllm', 'xllm-stars');
});
</script>
{{< /raw >}}
