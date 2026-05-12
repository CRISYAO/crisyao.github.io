---
title: "About Me"
layout: profile
---

{{< raw >}}
<style>
/* Design System: JD Red & Minimalist Professional */
:root {
  --jd-red: #E1251B;
  --text-main: #1a1a18;
  --text-muted: #6b6b67;
  --bg-soft: #f7f7f5;
}

.me-page { max-width: 800px; margin: 0 auto; padding: 2rem 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
.me-header { display: flex; align-items: center; gap: 32px; margin-bottom: 3.5rem; }
.me-avatar { width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 2px solid var(--jd-red); box-shadow: 0 4px 16px rgba(225,37,27,0.12); }
.me-intro h1 { font-size: 32px; margin: 0 0 8px 0; color: var(--text-main); font-weight: 700; }
.me-intro p { font-size: 17px; color: var(--text-muted); margin: 0; letter-spacing: -0.01em; }

.me-sec { margin-bottom: 3.5rem; }
.me-sl { font-size: 11px; letter-spacing: .15em; text-transform: uppercase; color: var(--text-muted); padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.08); margin-bottom: 1.8rem; font-weight: 700; }

/* Mission 卡片 */
.me-mission{background:var(--bg-soft);border-radius:12px;padding:1.25rem 1.5rem;font-size:15px;line-height:1.8;color:var(--text-main)}
.me-mission strong{color:var(--jd-red);font-weight:500}
.me-mission em{font-style:normal;color:var(--jd-red)}

/* Timeline & Experience Style */
.exp-item { display: flex; gap: 24px; margin-bottom: 2rem; }
.exp-line { position: relative; padding-left: 20px; border-left: 2px solid #e0e0e0; margin-bottom: 0; }
.exp-line::before { content: ""; position: absolute; left: -5px; top: 6px; width: 8px; height: 8px; border-radius: 50%; background: var(--jd-red); border: 2px solid #fff; }
.exp-line:last-child { border-left-color: transparent; }
.exp-date { min-width: 110px; font-size: 13px; color: #999; font-weight: 500; padding-top: 4px; }
.exp-content h3 { font-size: 17px; margin: 0 0 4px 0; color: var(--text-main); font-weight: 600; }
.exp-content .company { color: var(--jd-red); font-weight: 600; font-size: 14px; margin-bottom: 8px; letter-spacing: 0.03em; display: flex; align-items: center; gap: 8px; }
.exp-content .company img.exp-logo { height: 18px; width: auto; opacity: .8; }
.exp-content .desc { font-size: 14.5px; color: #555; line-height: 1.6; }

/* Contact Grid */
.me-contact { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
.contact-card { background: var(--bg-soft); padding: 18px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.04); transition: all 0.25s ease; text-decoration: none !important; cursor: default; }
.contact-card.clickable:hover { border-color: var(--jd-red); background: #fff; box-shadow: 0 8px 20px rgba(225,37,27,0.08); transform: translateY(-2px); cursor: pointer; }
.contact-label { font-size: 11px; text-transform: uppercase; color: #999; margin-bottom: 6px; font-weight: 700; letter-spacing: 0.04em; }
.contact-value { font-size: 15px; font-weight: 600; color: var(--text-main); }

@media (max-width: 600px) {
  .me-header { flex-direction: column; text-align: center; gap: 16px; }
  .exp-item { flex-direction: column; gap: 6px; }
  .exp-date { min-width: auto; margin-bottom: 2px; }
}
</style>

<div class="me-page">
  <header class="me-header">
    <img src="/me.jpg" alt="Yao Chaohao" class="me-avatar">
    
    <div class="me-intro">
      <h1>Yao Chaohao <span style="color:var(--text-muted);font-weight:400">/ 姚超豪</span></h1>
      <p>TGT Recruitment Lead @ JD Retail</p>
    </div>
  </header>

  <div class="me-sec">
    <div class="me-sl">Mission</div>
    <div class="me-mission">
      <strong>Talent is the ultimate productivity.</strong> Bridging the gap between cutting-edge academic research and large-scale industrial application by scouting "Tech Geniuses" to redefine the future of retail technology.
    </div>
  </div>

  <div class="me-sec">
    <div class="me-sl">Experience</div>
    
    <div class="exp-item exp-line">
      <div class="exp-date">2025 – Present</div>
      <div class="exp-content">
        <div class="company"><img class="exp-logo" src="/img/jd-logo.png" alt="JD.com"> JD.com</div>
        <h3>TGT Recruitment Lead</h3>
        <div class="desc">Spearheading the "Tech Genius Team" program to acquire top-tier global talent in LLM, Multi-modal AI, and AI Infrastructure.</div>
      </div>
    </div>

    <div class="exp-item exp-line">
      <div class="exp-date">2022 – 2025</div>
      <div class="exp-content">
        <div class="company"><img class="exp-logo" src="/img/wenge-logo.svg" alt="Wenge Tech"> Wenge Tech</div>
        <h3>Head of Campus Recruitment & HRBP</h3>
        <div class="desc">Built campus recruitment operations and served as HRBP for AI business units.</div>
      </div>
    </div>

    <div class="exp-item exp-line">
      <div class="exp-date">2019 – 2022</div>
      <div class="exp-content">
        <div class="company"><img class="exp-logo" src="/img/tal-logo.png" alt="TAL Education"> TAL Education Group</div>
        <h3>Regional Campus Recruitment Lead</h3>
        <div class="desc">Directed end-to-end recruitment operations and team expansion for the Hefei regional hub.</div>
      </div>
    </div>
  </div>

  <div class="me-sec">
    <div class="me-sl">Education</div>
    <div class="exp-item exp-line">
      <div class="exp-date">2014 – 2018</div>
      <div class="exp-content">
        <h3>Xi'an University of Architecture and Technology</h3>
        <div class="desc">Bachelor's Degree</div>
      </div>
    </div>
    <div class="exp-item exp-line" style="border-left-color:transparent">
      <div class="exp-date">2011 – 2014</div>
      <div class="exp-content">
        <h3>Affiliated High School of NWPU</h3>
        <div class="desc">High School Diploma</div>
      </div>
    </div>
  </div>

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
    </div>
  </div>
</div>
{{< /raw >}}
