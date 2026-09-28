// Mobile nav + footer year. No tracking, no third-party scripts.
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
})();
