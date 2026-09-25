// Mobile nav, reveal-on-scroll, footer year
(() => {
  const t = document.querySelector('.nav-toggle');
  const n = document.getElementById('nav-links');
  if (t && n) {
    t.addEventListener('click', () => {
      const open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', String(open));
    });
    n.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      n.classList.remove('open'); t.setAttribute('aria-expanded', 'false');
    }));
  }
  const y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('.section-head, .venture, .about-grid, .timeline, .countries, .disc-grid, .grid-gallery, .contact-grid, .panels, .work-grid, .cards');
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
})();
