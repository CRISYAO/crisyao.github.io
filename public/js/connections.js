/**
 * Connections page — progressive enhancement
 *
 * Lightweight enhancement of the Markdown list:
 * - Adds badge spans to existing <li> elements
 * - Adds category tab filters
 * - Real-time search
 * - Stats bar
 * - Mobile-friendly styling
 * - SVG section icons
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

  // Section icons (SVG)
  const SECTION_ICONS = {
    'llm-agent':     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/><circle cx="6" cy="6" r="1.5"/><circle cx="18" cy="18" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="6" cy="18" r="1.5"/></svg>',
    'multi-modal':   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><circle cx="6" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><path d="M6 14l4 4 4-4"/></svg>',
    'ai-infra':       '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="8" height="6" rx="1"/><rect x="14" y="4" width="8" height="6" rx="1"/><line x1="6" y1="13" x2="6" y2="18"/><line x1="18" y1="13" x2="18" y2="18"/><line x1="4" y1="18" x2="8" y2="18"/><line x1="16" y1="18" x2="20" y2="18"/></svg>',
    'ai4s':            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M12 4v4"/><path d="M12 12v4"/><path d="M8 8l8 4"/></svg>',
    'embodied-ai':    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12c0 4.5-3.5 8-8 8s-8-3.5-8-8 3.5-8 8-8 8 3.5 8 8z"/><circle cx="12" cy="12" r="3"/><path d="M10 8l4 4-4 4"/></svg>',
    'ai-chips':       '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/><circle cx="12" cy="8" r="0.5"/><circle cx="12" cy="16" r="0.5"/></svg>',
  };

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

  /**
   * Add badge spans to all <li> elements and section icons to h2s.
   * Does NOT rebuild the entire DOM — just wraps the existing list item text.
   */
  function enhance() {
    const content = document.getElementById('content');
    if (!content) { console.log('⚠️ #content not found'); return; }

    const sections = content.querySelectorAll('h2[id] + ul');
    if (sections.length === 0) { console.log('⚠️ no h2+ul sections found'); return; }

    let totalItems = 0;
    const sectionList = [];

    // Collect all sections first
    const allH2s = content.querySelectorAll('h2[id]');
    allH2s.forEach(h2 => {
      const ul = h2.nextElementSibling;
      if (!ul || ul.tagName !== 'UL') return;

      const secKey = guessSection(h2.textContent.trim());
      const secName = h2.textContent.trim().replace(/^[🤖🎨🔧🔬🧩🤖]\s*/, '').trim();
      const iconHtml = SECTION_ICONS[secKey] || '';

      // Replace emoji with SVG icon in the h2
      h2.innerHTML = `${iconHtml} <span>${secName}</span>`;

      const lis = ul.querySelectorAll('li');
      lis.forEach(li => {
        totalItems++;

        // Parse the text: "[Name](url) - Role at Org"
        const link = li.querySelector('a');
        const name = link ? link.textContent.trim() : '';
        const fullText = li.textContent.trim();
        // Extract text after the link
        let after = fullText.replace(new RegExp('^' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*-\\s*'), '').trim();
        if (!after || after === fullText) {
          // fallback: try to get text after the last " - "
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

        // Build badge + org span
        const badge = document.createElement('span');
        badge.className = `badge badge-${type}`;
        badge.textContent = role;

        const orgSpan = document.createElement('span');
        orgSpan.className = 'affiliation';
        orgSpan.textContent = org ? `at ${org}` : '';

        // Clear the li text and re-insert as structured DOM
        li.innerHTML = '';
        li.appendChild(link.cloneNode(true));
        li.appendChild(document.createTextNode(' '));
        li.appendChild(badge);
        if (org) {
          li.appendChild(document.createTextNode(' '));
          li.appendChild(orgSpan);
        }

        // Add data attributes for filtering
        li.setAttribute('data-type', type);
        li.setAttribute('data-section', secKey);
        li.setAttribute('data-name', name.toLowerCase());
        li.setAttribute('data-role', role.toLowerCase());
        li.setAttribute('data-org', org.toLowerCase());
      });

      sectionList.push({ key: secKey, name: secName });
    });

    // ---- STATS BAR ----
    const stats = document.createElement('div');
    stats.className = 'connections-stats';
    stats.innerHTML = `<span>共 <strong>${totalItems}</strong> 位 </span> · <span> 覆盖 <strong>${sectionList.length}</strong> 个方向</span>`;
    const header = content.querySelector('.header');
    if (header) {
      header.appendChild(stats);
    }

    // ---- TOOLBAR (search + tabs) ----
    const toolbar = document.createElement('div');
    toolbar.className = 'connections-toolbar';
    toolbar.setAttribute('data-section', 'toolbar');
    toolbar.style.display = 'flex';
    toolbar.style.flexWrap = 'wrap';
    toolbar.style.alignItems = 'center';
    toolbar.style.gap = '0.8rem';
    toolbar.style.marginBottom = '1.5rem';
    toolbar.style.position = 'sticky';
    toolbar.style.top = '0';
    toolbar.style.zIndex = '10';
    toolbar.style.background = '#fff';
    toolbar.style.padding = '0.8rem 0';
    toolbar.style.borderBottom = '1px solid #e2e8f0';

    // Tabs
    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'connections-tabs';

    const allBtn = document.createElement('button');
    allBtn.className = 'filter-tab active';
    allBtn.setAttribute('data-filter', 'all');
    allBtn.textContent = 'All';
    tabsDiv.appendChild(allBtn);

    sectionList.forEach(sec => {
      const btn = document.createElement('button');
      btn.className = 'filter-tab';
      btn.setAttribute('data-filter', sec.key);
      btn.innerHTML = `${SECTION_ICONS[sec.key] || ''}<span>${sec.name}</span>`;
      tabsDiv.appendChild(btn);
    });

    toolbar.appendChild(tabsDiv);

    // Search
    const search = document.createElement('input');
    search.type = 'text';
    search.className = 'connections-search';
    search.placeholder = '搜索姓名 / 机构 / 身份...';
    search.style.flex = '1';
    search.style.minWidth = '180px';
    search.style.maxWidth = '320px';
    search.style.padding = '0.4rem 1rem';
    search.style.borderRadius = '999px';
    search.style.border = '1px solid #e2e8f0';
    search.style.fontSize = '0.85rem';
    search.style.color = '#2d3748';
    search.style.background = '#f7fafc';
    toolbar.appendChild(search);

    content.insertBefore(toolbar, content.firstChild);

    // ---- FILTER LOGIC ----
    const allItems = content.querySelectorAll('li[data-type]');

    function applyFilter(filterKey, query) {
      const active = filterKey || 'all';
      const q = (query || '').toLowerCase().trim();

      allItems.forEach(li => {
        let visible = true;
        if (active !== 'all') {
          visible = li.getAttribute('data-section') === active;
        }
        if (visible && q) {
          const name = li.getAttribute('data-name') || '';
          const role = li.getAttribute('data-role') || '';
          const org  = li.getAttribute('data-org')  || '';
          visible = name.includes(q) || role.includes(q) || org.includes(q);
        }
        li.style.display = visible ? '' : 'none';
      });
    }

    tabsDiv.addEventListener('click', e => {
      const btn = e.target.closest('.filter-tab');
      if (!btn) return;
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.getAttribute('data-filter'), search.value);
    });

    search.addEventListener('input', () => {
      const activeTab = document.querySelector('.filter-tab.active');
      const fk = activeTab ? activeTab.getAttribute('data-filter') : 'all';
      applyFilter(fk, search.value);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance);
  } else {
    enhance();
  }
})();