/**
 * Connections page — progressive enhancement
 *
 * Lightweight enhancement of the Markdown list:
 * - Adds badge spans to existing <li> elements
 * - Category tab filters (text-only, no emoji)
 * - Mobile-friendly full-row click targets
 * - SVG section icons (replaces emoji)
 */

(function () {
  'use strict';

  // Badge rule matching (order-sensitive)
  const BADGE_RULES = [
    { re: /Ph\.D\.\s*student/i, type: 'student' },
    { re: /Postdoctoral\s*Associate/i, type: 'student' },
    { re: /Postdoc/i, type: 'student' },
    { re: /Incoming\s*Research\s*Scientist/i, type: 'student' },
    { re: /Incoming\s*Researcher/i, type: 'student' },
    { re: /Associate\s*Professor/i, type: 'professor' },
    { re: /Assistant\s*Professor/i, type: 'professor' },
    { re: /Professor(?!\s*at)/i, type: 'professor' },
    { re: /Lecturer/i, type: 'professor' },
    { re: /Associate\s*Researcher/i, type: 'professor' },
    { re: /Incoming\s*Lecturer/i, type: 'professor' },
    { re: /Founder\s*(and|&)?\s*CEO/i, type: 'founder' },
    { re: /Co-?Founder\s*(and|&)?\s*CEO/i, type: 'founder' },
    { re: /Co-?founder\s*(and|&)?\s*CRO/i, type: 'founder' },
    { re: /Founder(?!\s*(and|&))/i, type: 'founder' },
    { re: /CEO/i, type: 'founder' },
    { re: /CTO/i, type: 'founder' },
    { re: /Researcher/i, type: 'industry' },
    { re: /Research\s*Scientist/i, type: 'industry' },
    { re: /Engineer/i, type: 'industry' },
  ];

  function guessType(role) {
    for (const r of BADGE_RULES) {
      if (r.re.test(role)) return r.type;
    }
    return 'industry';
  }

  function guessSection(h2Text) {
    const t = h2Text.toLowerCase();
    if (t.includes('llm') || t.includes('agent')) return 'llm-agent';
    if (t.includes('multi') || t.includes('modal') || t.includes('多模态')) return 'multi-modal';
    if (t.includes('infra') || t.includes('infrastructure') || t.includes('基础设施')) return 'ai-infra';
    if (t.includes('science') || t.includes('ai4s') || t.includes('科学')) return 'ai4s';
    if (t.includes('embodied') || t.includes('具身')) return 'embodied-ai';
    if (t.includes('chip') || t.includes('芯片')) return 'ai-chips';
    return 'other';
  }

  const SECTION_LABELS = {
    'llm-agent':     'LLM & Agent',
    'multi-modal':   'Multi-modal AI',
    'ai-infra':      'AI Infrastructure',
    'ai4s':          'AI for Science',
    'embodied-ai':   'Embodied AI',
    'ai-chips':      'AI Chips',
  };

  /**
   * Add badge spans to all <li> elements. Keeps the Markdown list structure.
   */
  function enhance() {
    const content = document.getElementById('content');
    if (!content) return;

    const allH2s = content.querySelectorAll('h2[id]');
    if (allH2s.length === 0) return;

    const sectionKeys = [];

    allH2s.forEach(h2 => {
      const ul = h2.nextElementSibling;
      if (!ul || ul.tagName !== 'UL') return;

      const secKey = guessSection(h2.textContent.trim());
      const secName = SECTION_LABELS[secKey] || h2.textContent.trim().replace(/^[🤖🎨🔧🔬🧩🤖]\s*/, '').trim();

      // Replace emoji in h2 with plain text
      h2.innerHTML = `<span>${secName}</span>`;
      sectionKeys.push(secKey);

      const lis = ul.querySelectorAll('li');
      lis.forEach(li => {
        const link = li.querySelector('a');
        const name = link ? link.textContent.trim() : '';
        const fullText = li.textContent.trim();

        // Extract text after the link: "[Name](url) - Role at Org"
        let after = fullText.replace(new RegExp('^' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*-\\s*'), '').trim();
        if (!after || after === fullText) {
          const idx = fullText.lastIndexOf(' - ');
          after = idx >= 0 ? fullText.slice(idx + 3).trim() : fullText;
        }

        let role = '', org = '';
        const atIdx = after.lastIndexOf(' at ');
        if (atIdx >= 0) {
          role = after.slice(0, atIdx).trim();
          org  = after.slice(atIdx + 4).trim();
        } else {
          role = after.trim();
        }

        const type = guessType(role);

        const badge = document.createElement('span');
        badge.className = `badge badge-${type}`;
        badge.textContent = role;

        const orgSpan = document.createElement('span');
        orgSpan.className = 'affiliation';
        orgSpan.textContent = org ? `at ${org}` : '';

        li.innerHTML = '';
        li.appendChild(link.cloneNode(true));
        li.appendChild(document.createTextNode(' '));
        li.appendChild(badge);
        if (org) {
          li.appendChild(document.createTextNode(' '));
          li.appendChild(orgSpan);
        }

        li.setAttribute('data-type', type);
        li.setAttribute('data-section', secKey);
        li.setAttribute('data-name', name.toLowerCase());
        li.setAttribute('data-role', role.toLowerCase());
        li.setAttribute('data-org', org.toLowerCase());
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance);
  } else {
    enhance();
  }
})();