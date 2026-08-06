/**
 * Connections page — progressive enhancement
 *
 * Parses the raw Markdown list in the # Connections page and upgrades it with:
 * - Badge coloring (student / professor / industry / founder)
 * - Category tab filters
 * - Real-time search (by name, affiliation, role)
 * - Stats bar (total count + direction count)
 * - Mobile-friendly full-row click targets
 * - SVG section icons (replaces emoji)
 *
 * Runs on DOMContentLoaded, looks for #content > ul > li elements under h2 sections.
 */

(function () {
  'use strict';

  // ========================
  // CONFIG
  // ========================

  // Badge palette & label mappings (order-sensitive — earlier match wins)
  const BADGE_RULES = [
    { re: /Ph\.D\.\s*student/i, type: 'student', label: 'Ph.D. student' },
    { re: /Postdoctoral\s*Associate/i, type: 'student', label: 'Postdoc' },
    { re: /Postdoc/i, type: 'student', label: 'Postdoc' },
    { re: /Incoming\s*Research\s*Scientist/i, type: 'student', label: 'Incoming Research Scientist' },
    { re: /Incoming\s*Researcher/i, type: 'student', label: 'Incoming Researcher' },
    { re: /Associate\s*Professor/i, type: 'professor', label: 'Associate Professor' },
    { re: /Assistant\s*Professor/i, type: 'professor', label: 'Assistant Professor' },
    { re: /Professor(?!\s*at)/i, type: 'professor', label: 'Professor' },
    { re: /Lecturer/i, type: 'professor', label: 'Lecturer' },
    { re: /Associate\s*Researcher/i, type: 'professor', label: 'Associate Researcher' },
    { re: /Incoming\s*Lecturer/i, type: 'professor', label: 'Incoming Lecturer' },
    { re: /Founder\s*(and|&)?\s*CEO/i, type: 'founder', label: 'Founder & CEO' },
    { re: /Co-?Founder\s*(and|&)?\s*CEO/i, type: 'founder', label: 'Co-Founder & CEO' },
    { re: /Co-?founder\s*(and|&)?\s*CRO/i, type: 'founder', label: 'Co-founder & CRO' },
    { re: /Founder\s*(and|&)?\s*CEO/i, type: 'founder', label: 'Founder & CEO' },
    { re: /Founder(?!\s*(and|&))/i, type: 'founder', label: 'Founder' },
    { re: /CEO/i, type: 'founder', label: 'CEO' },
    { re: /CTO/i, type: 'founder', label: 'CTO' },
    { re: /Researcher/i, type: 'industry', label: 'Researcher' },
    { re: /Research\s*Scientist/i, type: 'industry', label: 'Research Scientist' },
    { re: /Engineer/i, type: 'industry', label: 'Engineer' },
  ];

  const BADGE_COLORS = {
    student:   { bg: '#3182ce', fg: '#fff' },   // blue
    professor:  { bg: '#d69e2e', fg: '#fff' },   // gold
    industry:   { bg: '#38a169', fg: '#fff' },   // green
    founder:    { bg: '#805ad5', fg: '#fff' },   // purple
  };

  // Section slug → SVG icon (inline as data URI or HTML string)
  // We replace emoji in h2 text with these SVG icons.
  const SECTION_ICONS = {
    'llm-agent':     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/><circle cx="6" cy="6" r="1.5"/><circle cx="18" cy="18" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="6" cy="18" r="1.5"/></svg>',
    'multi-modal':   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><circle cx="6" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><path d="M6 14l4 4 4-4"/></svg>',
    'ai-infra':       '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="8" height="6" rx="1"/><rect x="14" y="4" width="8" height="6" rx="1"/><line x1="6" y1="13" x2="6" y2="18"/><line x1="18" y1="13" x2="18" y2="18"/><line x1="4" y1="18" x2="8" y2="18"/><line x1="16" y1="18" x2="20" y2="18"/></svg>',
    'ai4s':            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 4v4"/><path d="M12 12v4"/><path d="M12 20v.01"/></svg>',
    'embodied-ai':    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12c0 4.5-3.5 8-8 8s-8-3.5-8-8 3.5-8 8-8 8 3.5 8 8z"/><circle cx="12" cy="12" r="3"/><path d="M10 8l4 4-4 4"/></svg>',
    'ai-chips':       '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/><circle cx="12" cy="8" r="0.5"/><circle cx="12" cy="16" r="0.5"/></svg>',
  };

  // ========================
  // HELPERS
  // ========================

  /** Parse a single raw line like "Name (url) - Role at Org" into structured data */
  function parseLine(li) {
    const text = li.textContent.trim();
    const link = li.querySelector('a');
    const href = link ? link.getAttribute('href') : '';
    const name = link ? link.textContent.trim() : text.split(/[,\-]/)[0].trim();

    // Extract role + org from the text after the link
    const afterLink = text.replace(/^\[?[^\]]+\]?\([^)]+\)/, '').replace(/^\s*-\s*/, '').trim();

    let role = '';
    let org = afterLink;

    // Try "at" split
    const atIdx = afterLink.lastIndexOf(' at ');
    if (atIdx >= 0) {
      role = afterLink.slice(0, atIdx).trim();
      org  = afterLink.slice(atIdx + 4).trim();
    }

    // Infer badge type
    let badgeType = 'industry';    // default
    for (const rule of BADGE_RULES) {
      if (rule.re.test(role)) {
        badgeType = rule.type;
        break;
      }
    }

    return { name, href, role, org, badgeType, li };
  }

  /** Build a single connection row (DOM) */
  function buildRow(item) {
    const div = document.createElement('div');
    div.className = 'connection-item';
    div.setAttribute('data-type', item.badgeType);
    div.setAttribute('data-name', item.name.toLowerCase());
    div.setAttribute('data-role', item.role.toLowerCase());
    div.setAttribute('data-org', item.org.toLowerCase());

    // Link
    const a = document.createElement('a');
    a.href = item.href || '#';
    // Fix missing protocol
    if (a.href && !a.href.startsWith('http') && !a.href.startsWith('/')) {
      a.href = 'https://' + a.href;
    }
    a.textContent = item.name;
    a.className = 'connection-name';

    // Badge
    const badge = document.createElement('span');
    badge.className = `badge badge-${item.badgeType}`;
    badge.textContent = item.role;

    // Org
    const orgSpan = document.createElement('span');
    orgSpan.className = 'affiliation';
    orgSpan.textContent = item.org ? `at ${item.org}` : '';

    div.appendChild(a);
    div.appendChild(badge);
    if (item.org) div.appendChild(orgSpan);

    return div;
  }

  // ========================
  // MAIN RENDER LOOP
  // ========================

  function init() {
    const content = document.getElementById('content');
    if (!content) return;

    const h2s = content.querySelectorAll('h2');
    if (h2s.length === 0) return;

    let totalItems = 0;
    const sections = [];

    // Replace each section's ul > li with enhanced DOM
    h2s.forEach((h2, idx) => {
      const rawText = h2.textContent.trim();
      const ul = h2.nextElementSibling;
      if (!ul || ul.tagName !== 'UL') return;

      const lis = ul.querySelectorAll('li');
      if (lis.length === 0) return;

      const sectionKey = inferSectionKey(rawText);
      const sectionName = rawText.replace(/^[🤖🎨🔧🔬🧩🤖]\s*/, '').trim();

      // Build new container
      const sectionDiv = document.createElement('div');
      sectionDiv.className = 'connection-section';
      sectionDiv.setAttribute('data-section', sectionKey);

      // Replace h2 emoji with SVG icon
      const iconHtml = SECTION_ICONS[sectionKey] || '';
      h2.innerHTML = `${iconHtml} <span>${sectionName}</span>`;
      h2.classList.add('section-title');

      const listDiv = document.createElement('div');
      listDiv.className = 'connection-list';

      const items = [];
      lis.forEach(li => {
        const item = parseLine(li);
        if (!item.name) return;
        items.push(item);
        const row = buildRow(item);
        row.setAttribute('data-section', sectionKey);
        listDiv.appendChild(row);
      });

      totalItems += items.length;
      sections.push({ key: sectionKey, name: sectionName, count: items.length });

      // Replace the ul in place
      ul.replaceWith(listDiv);

      // Wrap section with data attributes for filtering
      const wrapper = document.createElement('div');
      wrapper.className = 'connection-section-wrapper';
      wrapper.setAttribute('data-section', sectionKey);
      wrapper.appendChild(h2.cloneNode(true));    // we already modified h2, so clone it
      wrapper.appendChild(listDiv);

      // Replace the original section elements
      h2.parentNode.insertBefore(wrapper, h2);
      h2.remove();
    });

    // ========================
    // STATS BAR
    // ========================
    const statsDiv = document.createElement('div');
    statsDiv.className = 'connections-stats';
    statsDiv.innerHTML = `<span>共 <strong>${totalItems}</strong> 位 </span> · <span> 覆盖 <strong>${sections.length}</strong> 个方向</span>`;

    const header = content.querySelector('.header');
    if (header) {
      header.appendChild(statsDiv);
    } else {
      content.insertBefore(statsDiv, content.firstChild);
    }

    // ========================
    // TOOLBAR (search + tabs)
    // ========================
    const toolbarDiv = document.createElement('div');
    toolbarDiv.className = 'connections-toolbar';

    // Tab filters
    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'connections-tabs';

    const allTab = document.createElement('button');
    allTab.className = 'filter-tab active';
    allTab.setAttribute('data-filter', 'all');
    allTab.textContent = 'All';
    tabsDiv.appendChild(allTab);

    sections.forEach(sec => {
      const btn = document.createElement('button');
      btn.className = 'filter-tab';
      btn.setAttribute('data-filter', sec.key);
      const iconHtml = SECTION_ICONS[sec.key] || '';
      btn.innerHTML = `${iconHtml}<span>${sec.name}</span>`;
      tabsDiv.appendChild(btn);
    });

    toolbarDiv.appendChild(tabsDiv);

    // Search input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'connections-search';
    searchInput.placeholder = '搜索姓名 / 机构 / 身份...';
    searchInput.setAttribute('aria-label', 'Search connections');
    toolbarDiv.appendChild(searchInput);

    content.insertBefore(toolbarDiv, content.querySelector('.connection-section-wrapper') || content.firstChild);

    // ========================
    // FILTER LOGIC
    // ========================
    const allItems = content.querySelectorAll('.connection-item');
    const sectionWrappers = content.querySelectorAll('.connection-section-wrapper');

    function applyFilters(filterKey, searchTerm) {
      const activeFilter = filterKey || 'all';
      const query = (searchTerm || '').toLowerCase().trim();

      allItems.forEach(item => {
        const sec = item.getAttribute('data-section');
        const name = item.getAttribute('data-name') || '';
        const role = item.getAttribute('data-role') || '';
        const org  = item.getAttribute('data-org')  || '';

        let visible = true;

        // Section filter
        if (activeFilter !== 'all') {
          visible = sec === activeFilter;
        }

        // Search filter
        if (visible && query) {
          visible = name.includes(query) || role.includes(query) || org.includes(query);
        }

        item.style.display = visible ? '' : 'none';
      });

      // Hide empty section wrappers
      sectionWrappers.forEach(wrapper => {
        const sec = wrapper.getAttribute('data-section');
        const visibleItems = wrapper.querySelectorAll('.connection-item[style*="display: none"]');
        const showing = wrapper.querySelectorAll('.connection-item:not([style*="display: none"])');

        // Adjust for inline display (no style = visible)
        let hasVisible = false;
        wrapper.querySelectorAll('.connection-item').forEach(el => {
          if (el.style.display !== 'none') hasVisible = true;
        });

        wrapper.style.display = hasVisible ? '' : 'none';
      });

      // Update tab active state
      document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-filter') === activeFilter);
      });
    }

    // Tab clicks
    tabsDiv.addEventListener('click', e => {
      const btn = e.target.closest('.filter-tab');
      if (!btn) return;
      const filterKey = btn.getAttribute('data-filter');
      applyFilters(filterKey, searchInput.value);
    });

    // Search input
    searchInput.addEventListener('input', () => {
      const activeTab = document.querySelector('.filter-tab.active');
      const filterKey = activeTab ? activeTab.getAttribute('data-filter') : 'all';
      applyFilters(filterKey, searchInput.value);
    });
  }

  /** Guess section key from heading text */
  function inferSectionKey(text) {
    const t = text.toLowerCase();
    if (t.includes('llm') || t.includes('agent')) return 'llm-agent';
    if (t.includes('multi') || t.includes('modal') || t.includes('多模态')) return 'multi-modal';
    if (t.includes('infra') || t.includes('infrastructure') || t.includes('基础设施')) return 'ai-infra';
    if (t.includes('science') || t.includes('ai4s') || t.includes('科学')) return 'ai4s';
    if (t.includes('embodied') || t.includes('具身')) return 'embodied-ai';
    if (t.includes('chip') || t.includes('芯片')) return 'ai-chips';
    return 'other';
  }

  // ========================
  // BOOT
  // ========================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();