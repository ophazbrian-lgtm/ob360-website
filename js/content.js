/* Fetches /content/*.json (editable via the CMS) and renders into the page */
(function () {
  async function fetchJSON(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error('Failed to load ' + path);
    return res.json();
  }

  function serviceCard(s, index) {
    const bullets = (s.bullets || []).map((b) => `<li>${b}</li>`).join('');
    return `
      <article class="service-card reveal" id="${s.id}">
        <div class="service-num">${String(index + 1).padStart(2, '0')}</div>
        <h3>${s.title}</h3>
        <p>${s.summary}</p>
        <ul class="service-list">${bullets}</ul>
        <a href="/contact.html?service=${encodeURIComponent(s.title)}" class="quote-link">Get a quote</a>
      </article>`;
  }

  function portfolioCard(p) {
    return `
      <a href="${p.link}" target="_blank" rel="noopener" class="port-card reveal">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="port-overlay">
          <span class="tag">${p.category}</span>
          <h3>${p.title}</h3>
        </div>
      </a>`;
  }

  async function renderServices(selector, opts) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const data = await fetchJSON('/content/services.json');
      const services = data.items || [];
      const list = opts && opts.limit ? services.slice(0, opts.limit) : services;
      el.innerHTML = '<div class="grid-services">' + list.map(serviceCard).join('') + '</div>';
    } catch (e) {
      el.innerHTML = '<p>Could not load services right now.</p>';
    }
  }

  async function renderPortfolio(selector, opts) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.innerHTML = '<div class="grid-portfolio">' + Array(opts && opts.skeletonCount || 4).fill('<div class="port-card skeleton" style="aspect-ratio:4/3;"></div>').join('') + '</div>';
    try {
      const data = await fetchJSON('/content/portfolio.json');
      const items = data.items || [];
      const list = opts && opts.limit ? items.slice(0, opts.limit) : items;
      el.innerHTML = '<div class="grid-portfolio">' + list.map(portfolioCard).join('') + '</div>';
    } catch (e) {
      el.innerHTML = '<p>Could not load portfolio right now.</p>';
    }
  }

  window.OB360Content = { fetchJSON, renderServices, renderPortfolio };
})();
