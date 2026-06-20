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
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#FFFFFF';
      nav.style.padding = '20px 24px';
      nav.style.gap = '16px';
      nav.style.borderBottom = '1px solid rgba(11,11,11,0.12)';
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
    markActiveNav();
    wireMobileNav();
    wireRevealOnScroll();
  });
})();
