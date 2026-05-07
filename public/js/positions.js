// 岗位筛选功能 - 方案3：筛选功能
document.addEventListener('DOMContentLoaded', function() {
  // 岗位数据
  const positions = [
    // 正式岗位
    { id: 1, title: '代码大模型', domain: '人工智能', type: '正式', desc: '参与代码大模型研发', link: 'https://campus.jd.com/#/details?id=6101' },
    { id: 2, title: '基模后训练', domain: '人工智能', type: '正式', desc: '大模型后训练技术研究', link: 'https://campus.jd.com/#/details?id=6533' },
    { id: 3, title: '多模态大模型', domain: '人工智能', type: '正式', desc: '多模态大模型研发', link: 'https://campus.jd.com/#/details?id=6013' },
    { id: 4, title: '大模型安全风控', domain: '人工智能', type: '正式', desc: '大模型安全与风控技术', link: 'https://campus.jd.com/#/details?id=6537' },
    { id: 5, title: 'AI 搜索', domain: '人工智能', type: '正式', desc: 'AI搜索技术研发', link: 'https://campus.jd.com/#/details?id=6147' },
    { id: 6, title: '生成式推荐', domain: '人工智能', type: '正式', desc: '生成式推荐算法', link: 'https://campus.jd.com/#/details?id=6119' },
    { id: 7, title: '3D 内容生成', domain: '人工智能', type: '正式', desc: '3D内容生成技术', link: 'https://campus.jd.com/#/details?id=6182' },
    { id: 8, title: '视频生成', domain: '人工智能', type: '正式', desc: '视频生成技术研发', link: 'https://campus.jd.com/#/details?id=6099' },
    { id: 9, title: '推理引擎优化', domain: 'AI Infra', type: '正式', desc: '推理引擎性能优化', link: 'https://campus.jd.com/#/details?id=5989' },
    { id: 10, title: '分布式训练自动优化', domain: 'AI Infra', type: '正式', desc: '分布式训练优化', link: 'https://campus.jd.com/#/details?id=5991' },
    { id: 11, title: '大数据融合计算优化', domain: '大数据', type: '正式', desc: '大数据计算优化', link: 'https://campus.jd.com/#/details?id=6005' },
    { id: 12, title: '供应链优化技术探索', domain: '智能供应链', type: '正式', desc: '供应链优化技术', link: 'https://campus.jd.com/#/details?id=6081' },
    
    // 实习岗位
    { id: 13, title: '大模型预训练与后训练', domain: '人工智能', type: '实习', desc: '大模型预训练与后训练研究', link: 'https://campus.jd.com/#/details?id=7515' },
    { id: 14, title: '代码大模型缺陷检测与自动生成研发', domain: '多模态大模型与应用方向', type: '实习', desc: '代码大模型缺陷检测', link: 'https://campus.jd.com/#/details?id=7567' },
    { id: 15, title: '电商智能体长期记忆与互动优化研究', domain: '多模态大模型与应用方向', type: '实习', desc: '智能体长期记忆研究', link: 'https://campus.jd.com/#/details?id=7574' },
    { id: 16, title: '异构硬件下的深度学习编译优化技术探索', domain: 'AI Infra方向', type: '实习', desc: '深度学习编译优化', link: 'https://campus.jd.com/#/details?id=7629' },
    { id: 17, title: '大模型高效推理与端云协同架构研发', domain: 'AI Infra方向', type: '实习', desc: '大模型推理优化', link: 'https://campus.jd.com/#/details?id=7625' },
    { id: 18, title: '超大规模异构算力集群智能调度研发', domain: 'AI Infra方向', type: '实习', desc: '算力集群调度', link: 'https://campus.jd.com/#/details?id=7617' },
    { id: 19, title: '超大规模分布式训练自动优化探索', domain: 'AI Infra方向', type: '实习', desc: '分布式训练优化', link: 'https://campus.jd.com/#/details?id=7633' },
    { id: 20, title: '基于大模型技术的广告全链路数据自动化分析与诊断', domain: '搜索推荐广告方向', type: '实习', desc: '广告数据分析', link: 'https://campus.jd.com/#/details?id=7603' },
    { id: 21, title: '基于LLM多智能体技术在营销投放算法的应用', domain: '搜索推荐广告方向', type: '实习', desc: '营销投放算法', link: 'https://campus.jd.com/#/details?id=7570' },
    { id: 22, title: '多模态数据湖存储与湖流一体优化探索', domain: '大数据方向', type: '实习', desc: '数据湖存储优化', link: 'https://campus.jd.com/#/details?id=7635' }
  ];

  // 获取所有领域
  const domains = [...new Set(positions.map(p => p.domain))];
  
  // 创建筛选器
  function createFilters() {
    const container = document.querySelector('.position-filters-container');
    if (!container) return;
    
    let html = '<div class="position-filters">';
    html += '<button class="filter-btn active" data-domain="all">全部岗位</button>';
    
    domains.forEach(domain => {
      html += `<button class="filter-btn" data-domain="${domain}">${domain}</button>`;
    });
    
    html += '<button class="filter-btn reset" id="reset-filters">重置</button>';
    html += '</div>';
    
    container.innerHTML = html;
    
    // 绑定事件
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        if (this.id === 'reset-filters') {
          resetFilters();
          return;
        }
        
        // 更新按钮状态
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const domain = this.getAttribute('data-domain');
        filterPositions(domain);
      });
    });
  }
  
  // 筛选岗位
  function filterPositions(domain) {
    const cards = document.querySelectorAll('.position-card');
    
    if (domain === 'all') {
      cards.forEach(card => card.style.display = 'block');
      return;
    }
    
    cards.forEach(card => {
      const cardDomain = card.getAttribute('data-domain');
      if (cardDomain === domain) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // 重置筛选
  function resetFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.id !== 'reset-filters') {
        btn.classList.remove('active');
      }
    });
    document.querySelector('.filter-btn[data-domain="all"]').classList.add('active');
    
    document.querySelectorAll('.position-card').forEach(card => {
      card.style.display = 'block';
    });
  }
  
  // 生成卡片
  function generateCards() {
    const container = document.querySelector('.positions-container');
    if (!container) return;
    
    // 清空现有内容
    container.innerHTML = '';
    
    // 创建筛选器容器
    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'position-filters-container';
    container.appendChild(filtersContainer);
    
    // 创建岗位容器
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'positions-cards';
    container.appendChild(cardsContainer);
    
    // 生成卡片
    positions.forEach(position => {
      const card = document.createElement('div');
      card.className = 'position-card';
      card.setAttribute('data-domain', position.domain);
      
      const typeClass = position.type === '实习' ? 'position-type intern' : 'position-type';
      
      card.innerHTML = `
        <div class="position-header">
          <h3 class="position-title">${position.title}</h3>
          <span class="${typeClass}">${position.type}</span>
        </div>
        <p class="position-desc">${position.desc}</p>
        <div class="position-footer">
          <span class="position-domain">${position.domain}</span>
          <a href="${position.link}" target="_blank" class="position-link">立即申请</a>
        </div>
      `;
      
      cardsContainer.appendChild(card);
    });
    
    // 创建筛选器
    createFilters();
  }
  
  // 初始化
  generateCards();
});