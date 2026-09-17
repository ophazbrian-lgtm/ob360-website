/* Applies safe, owner-editable settings stored in content/site-settings.json. */
(function () {
  const get = (source, path) => path.split('.').reduce((value, key) => value && value[key], source);
  function apply(settings) {
    document.querySelectorAll('[data-content]').forEach((el) => { const value = get(settings, el.dataset.content); if (value !== undefined) el.textContent = value; });
    document.querySelectorAll('[data-content-src]').forEach((el) => { const value = get(settings, el.dataset.contentSrc); if (value) el.src = value; });
    document.querySelectorAll('[data-content-alt]').forEach((el) => { const value = get(settings, el.dataset.contentAlt); if (value) el.alt = value; });
    document.querySelectorAll('[data-email-href]').forEach((el) => { const value = get(settings, el.dataset.emailHref); if (value) el.href = `mailto:${value}`; });
    const headline = document.querySelector('[data-home-headline]');
    if (headline && settings.home) headline.replaceChildren(document.createTextNode(settings.home.headlineBefore || ''), Object.assign(document.createElement('mark'), { textContent: settings.home.headlineHighlight || '' }), document.createTextNode(settings.home.headlineAfter || ''));
    if (settings.design) {
      const root = document.documentElement.style;
      if (settings.design.accent) root.setProperty('--gold', settings.design.accent);
      if (settings.design.highlight) root.setProperty('--red', settings.design.highlight);
      if (settings.design.background) root.setProperty('--paper', settings.design.background);
      document.querySelectorAll('[data-hero-layout]').forEach((el) => el.classList.toggle('visual-left', settings.design.heroLayout === 'visual-left'));
    }
  }
  async function loadAndApply() {
    try { const response = await fetch('/content/site-settings.json', { cache: 'no-cache' }); if (!response.ok) throw new Error('Settings unavailable'); const settings = await response.json(); apply(settings); return settings; }
    catch (error) { console.warn('OB360 settings could not be loaded.', error); return null; }
  }
  window.OB360Settings = { loadAndApply };
})();
