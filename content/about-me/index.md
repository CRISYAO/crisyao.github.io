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
.me-header { display: flex; align-items: center; gap: 28px; margin-bottom: 3.5rem; }
.me-avatar { width: 90px; height: 90px; border-radius: 50%; background: var(--bg-soft); display: flex; align-items: center; justify-content: center; font-size: 40px; border: 2px solid var(--jd-red); box-shadow: 0 4px 12px rgba(225,37,27,0.1); }
.me-intro h1 { font-size: 32px; margin: 0 0 8px 0; color: var(--text-main); font-weight: 700; }
.me-intro p { font-size: 17px; color: var(--text-muted); margin: 0; letter-spacing: -0.01em; }

.me-sec { margin-bottom: 3.5rem; }
.me-sl { font-size: 11px; letter-spacing: .15em; text-transform: uppercase; color: var(--text-muted); padding-bottom: 8px; border-bottom: 1px solid rgba(0,0,0,0.08); margin-bottom: 1.8rem; font-weight: 700; }

/* Timeline & Experience Style */
.exp-item { display: flex; gap: 24px; margin-bottom: 2rem; }
.exp-date { min-width: 110px; font-size: 13px; color: #999; font-weight: 500; padding-top: 4px; }
.exp-content h3 { font-size: 17px; margin: 0 0 4px 0; color: var(--text-main); font-weight: 600; }
.exp-content .company { color: var(--jd-red); font-weight: 600; font-size: 14px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.03em; }
.exp-content .desc { font-size: 14.5px; color: #555; line-height: 1.6; }

/* Contact Grid */
.me-contact { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
.contact-card { background: var(--bg-soft); padding: 18px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.04); transition: all 0.25s ease; text-decoration: none !important; }
.contact-card:hover { border-color: var(--jd-red); background: #fff; box-shadow: 0 8px 20px rgba(225,37,27,0.08); transform: translateY(-2px); }
.contact-label { font-size: 11px; text-transform: uppercase; color: #999; margin-bottom: 6px; font-weight: 700; }
.contact-value { font-size: 15px; font-weight: 600; color: var(--text-main); }

@media (max-width: 600px) {
  .me-header { flex-direction: column; text-align: center; gap: 16px; }
  .exp-item { flex-direction: column; gap: 6px; }
  .exp-date { min-width: auto; margin-bottom: 2px; }
}
</style>

<div class="me-page">
  <header class="me-header">
    <img src="/static/me.jpg" alt="Yao Chaohao" class="me-avatar">
    
    <div class="me-intro">
      <h1>Yao Chaohao (CRISYAO)</h1>
      <p>TGT Recruitment Lead @ JD Retail </p>
    </div>
  </header>

  <div class="me-sec">
    <div class="me-sl">Mission</div>
    <p style="font-size: 16px; line-height: 1.8; color: #333; margin: 0;">
      As a tech-focused talent partner, I operate on the belief that <strong>"Talent is the ultimate productivity."</strong> My focus is bridging the gap between cutting-edge academic research and large-scale industrial application by scouting "Tech Geniuses" to redefine the future of retail technology.
    </p>
  </div>

  <div class="me-sec">
    <div class="me-sl">Experience</div>
    
    <div class="exp-item">
      <div class="exp-date">2025 – Present</div>
      <div class="exp-content">
        <div class="company">JD.com (京东零售)</div>
        <h3>TGT Recruitment Lead</h3>
        <div class="desc">Spearheading the "Tech Genius Team" program to acquire top-tier global talent in LLM, Multi-modal AI, and AI Infrastructure.</div>
      </div>
    </div>

    <div class="exp-item">
      <div class="exp-date">2022 – 2025</div>
      <div class="exp-content">
        <div class="company">Wenge Tech (中科闻歌)</div>
        <h3>Head of Campus Recruitment & HRBP</h3>
        <div class="desc">Led talent strategy and organizational scaling for decision-making AI and intelligence systems.</div>
      </div>
    </div>

    <div class="exp-item">
      <div class="exp-date">2019 – 2022</div>
      <div class="exp-content">
        <div class="company">TAL Education Group (好未来)</div>
        <h3>Regional Campus Recruitment Lead</h3>
        <div class="desc">Directed end-to-end recruitment operations and team expansion for the Hefei regional hub.</div>
      </div>
    </div>
  </div>

  <div class="me-sec">
    <div class="me-sl">Education</div>
    <div class="exp-item">
      <div class="exp-date">2014 – 2018</div>
      <div class="exp-content">
        <h3>Xi'an University of Architecture and Technology</h3>
        <div class="desc">Bachelor's Degree</div>
      </div>
    </div>
    <div class="exp-item">
      <div class="exp-date">2011 – 2014</div>
      <div class="exp-content">
        <h3>Affiliated High School of NWPU </h3>
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
      <a href="mailto:yaochaohao.1@jd.com" class="contact-card">
        <div class="contact-label">Email</div>
        <div class="contact-value">yaochaohao.1@jd.com</div>
      </a>
    </div>
  </div>
</div>
{{< /raw >}}
