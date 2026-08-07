---
title: "About Me"
layout: profile
---

{{< raw >}}
<style>
:root {
  --jd-red: #E1251B;
  --text-main: #1a1a18;
  --text-muted: #6b6b67;
  --bg-soft: #f7f7f5;
  --border-light: rgba(0,0,0,0.06);
}

* { box-sizing: border-box; }

.me-page { max-width: 780px; margin: 0 auto; padding: 2rem 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }

/* ── Header ── */
.me-header { display: flex; align-items: center; gap: 28px; margin-bottom: 3rem; }
.me-avatar { width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 2px solid var(--jd-red); box-shadow: 0 4px 16px rgba(225,37,27,0.12); flex-shrink: 0; }
.me-intro { }
.me-intro h1 { font-size: 30px; margin: 0 0 6px 0; color: var(--text-main); font-weight: 700; letter-spacing: -.02em; }
.me-intro p { font-size: 16px; color: var(--text-muted); margin: 0; }

/* ── Section ── */
.me-sec { margin-bottom: 3rem; }
.me-sl { font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--text-muted); padding-bottom: 6px; border-bottom: 1px solid var(--border-light); margin-bottom: 1.5rem; font-weight: 700; }

/* ── Mission Card ── */
.me-mission { background: var(--bg-soft); border-radius: 12px; padding: 1.25rem 1.5rem; font-size: 15px; line-height: 1.8; color: var(--text-main); }
.me-mission strong { color: var(--jd-red); font-weight: 500; }

/* ── Timeline ── */
.exp-item { display: flex; gap: 20px; margin-bottom: 0; }
.exp-line { position: relative; padding: 0 0 2rem 22px; border-left: 2px solid #e0e0e0; margin-bottom: 0; }
.exp-line:last-child { border-left-color: transparent; padding-bottom: 0; }
.exp-line::before { content: ""; position: absolute; left: -5px; top: 5px; width: 8px; height: 8px; border-radius: 50%; background: var(--jd-red); border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(225,37,27,.15); }
.exp-line:last-child::before { display: none; }
.exp-date { min-width: 105px; font-size: 12px; color: #aaa; font-weight: 500; padding-top: 4px; flex-shrink: 0; }

/* ── Experience Content ── */
.exp-content { }
.exp-content .company { color: var(--jd-red); font-weight: 600; font-size: 14px; margin-bottom: 6px; letter-spacing: 0.03em; }
.exp-content h3 { font-size: 16px; margin: 0 0 6px 0; color: var(--text-main); font-weight: 600; }
.exp-content .desc { font-size: 14px; color: #555; line-height: 1.65; }
.exp-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
.exp-tag { display: inline-flex; align-items: center; font-size: 10.5px; padding: 2px 10px; border-radius: 20px; font-weight: 600; background: #f0f0ee; color: #555; border: 1px solid rgba(0,0,0,0.06); }
.exp-tag.jd { background: #fff0ef; color: #c41e1a; border-color: rgba(225,37,27,0.15); }
.exp-tag.wenge { background: #eef4ff; color: #2563eb; border-color: rgba(37,99,235,0.15); }
.exp-tag.tal { background: #fff5eb; color: #e67a0b; border-color: rgba(230,122,11,0.15); }

/* ── Education (inline) ── */
.edu-row { display: flex; align-items: baseline; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border-light); }
.edu-row:last-child { border-bottom: none; }
.edu-year { min-width: 100px; font-size: 13px; color: #bbb; font-weight: 500; flex-shrink: 0; }
.edu-name { font-size: 15px; font-weight: 500; color: var(--text-main); }
.edu-desc { font-size: 13px; color: #999; margin-left: auto; }

/* ── Contact ── */
.me-contact { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; }
.contact-card { background: var(--bg-soft); padding: 16px; border-radius: 10px; border: 1px solid transparent; transition: all 0.25s ease; text-decoration: none; display: block; }
.contact-card.clickable:hover { border-color: var(--jd-red); background: #fff; box-shadow: 0 8px 20px rgba(225,37,27,0.08); transform: translateY(-2px); cursor: pointer; }
.contact-label { font-size: 10px; text-transform: uppercase; color: #aaa; margin-bottom: 4px; font-weight: 700; letter-spacing: 0.04em; }
.contact-value { font-size: 14px; font-weight: 600; color: var(--text-main); }

/* ── Easter Egg ── */
.egg-hint { text-align: center; margin-top: 3.5rem; color: #ccc; font-size: 11px; font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace; cursor: default; transition: color .3s; user-select: none; }
.egg-hint:hover { color: var(--jd-red); }

@media (max-width: 640px) {
  .me-header { flex-direction: column; text-align: center; gap: 14px; }
  .exp-item { flex-direction: column; gap: 4px; }
  .exp-date { min-width: auto; }
  .edu-row { flex-wrap: wrap; gap: 4px; }
  .edu-desc { margin-left: 112px; }
}
</style>

<div class="me-page">

  <!-- Header -->
  <header class="me-header">
    <img src="/me.jpg" alt="Yao Chaohao" class="me-avatar">
    <div class="me-intro">
      <h1>Yao Chaohao <span style="color:#bbb;font-weight:400">/ 姚超豪</span></h1>
      <p>TGT Recruitment Lead @ JD Retail</p>
    </div>
  </header>

  <!-- Mission -->
  <div class="me-sec">
    <div class="me-sl">Mission</div>
    <div class="me-mission">
      <strong>Talent is the ultimate productivity.</strong> Bridging the gap between cutting-edge academic research and large-scale industrial application by scouting "Tech Geniuses" to redefine the future of retail technology.
    </div>
  </div>

  <!-- Experience (Timeline) -->
  <div class="me-sec">
    <div class="me-sl">Experience</div>
    
    <div class="exp-item exp-line">
      <div class="exp-date">2025 – Present</div>
      <div class="exp-content">
        <div class="company">JD.com</div>
        <h3>TGT Recruitment Lead</h3>
        <div class="desc">Spearheading the "Tech Genius Team" program to acquire top-tier global talent in LLM, Multi-modal AI, and AI Infrastructure.</div>
        <div class="exp-tags">
          <span class="exp-tag jd">#LLM</span>
          <span class="exp-tag jd">#Multimodal-AI</span>
          <span class="exp-tag jd">#AI-Infrastructure</span>
          <span class="exp-tag jd">#Global-Talent</span>
        </div>
      </div>
    </div>

    <div class="exp-item exp-line">
      <div class="exp-date">2022 – 2025</div>
      <div class="exp-content">
        <div class="company">Wenge Tech</div>
        <h3>Head of Campus Recruitment & HRBP</h3>
        <div class="desc">Built campus recruitment operations and served as HRBP for AI business units.</div>
        <div class="exp-tags">
          <span class="exp-tag wenge">#Campus-Recruitment</span>
          <span class="exp-tag wenge">#HRBP</span>
          <span class="exp-tag wenge">#Decision-Intelligence</span>
        </div>
      </div>
    </div>

    <div class="exp-item exp-line">
      <div class="exp-date">2019 – 2022</div>
      <div class="exp-content">
        <div class="company">TAL Education Group</div>
        <h3>Regional Campus Recruitment Lead</h3>
        <div class="desc">Directed end-to-end recruitment operations and team expansion for the Hefei regional hub.</div>
        <div class="exp-tags">
          <span class="exp-tag tal">#Campus-Recruitment</span>
          <span class="exp-tag tal">#EdTech</span>
          <span class="exp-tag tal">#Team-Expansion</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Education -->
  <div class="me-sec">
    <div class="me-sl">Education</div>
    <div class="edu-row">
      <span class="edu-year">2014 – 2018</span>
      <span class="edu-name">Xi'an University of Architecture and Technology</span>
      <span class="edu-desc">Bachelor's Degree</span>
    </div>
    <div class="edu-row">
      <span class="edu-year">2011 – 2014</span>
      <span class="edu-name">Middle School Attached to Northwestern Polytechnical University</span>
      <span class="edu-desc">High School Diploma</span>
    </div>
  </div>

  <!-- Contact -->
  <div class="me-sec">
    <div class="me-sl">Connect</div>
    <div class="me-contact">
      <div class="contact-card">
        <div class="contact-label">WeChat</div>
        <div class="contact-value">CRISYAO916</div>
      </div>
      <a href="mailto:yaochaohao.1@jd.com" class="contact-card clickable">
        <div class="contact-label">Email</div>
        <div class="contact-value">yaochaohao.1@jd.com</div>
      </a>
      <a href="https://www.linkedin.com/in/%E8%B6%85%E8%B1%AA-%E5%A7%9A-33629610b/" class="contact-card clickable" target="_blank">
        <div class="contact-label">LinkedIn</div>
        <div class="contact-value">超豪 姚</div>
      </a>
    </div>
  </div>

  <!-- Easter Egg -->
  <div class="egg-hint">
    /* console.log("👋 Hey there, Tech Genius."); */
  </div>

</div>

<script>
(function(){
  if (typeof console !== 'undefined' && console.log) {
    console.log('%c👋 Hey there, Tech Genius.', 'color:#E1251B;font-size:20px;font-weight:bold;');
    console.log('%cInterested in joining JD TGT? → yaochaohao.1@jd.com', 'color:#6b6b67;font-size:14px;');
  }
})();
</script>
{{< /raw >}}