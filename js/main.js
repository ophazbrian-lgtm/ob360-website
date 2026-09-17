/* Loads shared header/footer, wires mobile nav, scroll reveals */
(function () {
  async function injectPartial(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;
    const res = await fetch(url);
    el.innerHTML = await res.text();
  }

  function markActiveNav() {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('[data-nav] a').forEach((a) => {
      const href = a.getAttribute('href').split('/').pop().split('?')[0];
      if (href === path) a.classList.add('active');
    });
  }

  function wireMobileNav() {
    const toggle = document.querySelector('[data-nav-toggle]');
    const nav = document.querySelector('[data-nav]');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  function wireRevealOnScroll() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((i) => obs.observe(i));
  }

  document.addEventListener('DOMContentLoaded', async () => {
    await injectPartial('[data-include="header"]', '/partials/header.html');
    await injectPartial('[data-include="footer"]', '/partials/footer.html');
    if (window.OB360Settings) await window.OB360Settings.loadAndApply();
    markActiveNav();
    wireMobileNav();
    wireRevealOnScroll();
  });

  window.OB360 = { wireRevealOnScroll };
})();
