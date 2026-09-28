// One place to manage the Substack + affiliate links. Both sections stay hidden until
// real entries exist, so nothing half-built ever shows. Same file lives in both repos.
//
// SUBSTACK: set the publication subdomain (e.g. "woodleytwins" for woodleytwins.substack.com).
// TOOLKIT: add real affiliate links only. Each needs {cat, name, note, url}.
//   Keep a label on every link and the disclosure below (FTC rule: clear and next to the links).
window.WOODLEY_LINKS = {
  substack: "",            // e.g. "woodleytwins"
  toolkit: [
    // { cat: "Networking", name: "Raspberry Pi 5 (8GB)", note: "What our home network builds run on.", url: "https://amzn.to/..." },
  ],
  disclosure: "Some links on this page are affiliate links. If you buy through one, we may earn a small commission at no extra cost to you. We only list gear we use ourselves."
};

document.addEventListener('DOMContentLoaded', () => {
  const L = window.WOODLEY_LINKS || {};
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  if (L.substack && /^[a-z0-9-]+$/.test(L.substack)) {
    const sec = document.getElementById('writing');
    const slot = sec && sec.querySelector('[data-substack]');
    if (slot) {
      const base = `https://${L.substack}.substack.com`;
      slot.innerHTML = `<div class="substack-box"><div><p>Get new posts by email. It's free, and you can unsubscribe anytime.</p><p><a class="text-link" href="${base}" target="_blank" rel="noopener">Read the archive ↗</a></p></div><iframe src="${base}/embed" title="Subscribe on Substack" loading="lazy"></iframe></div>`;
      sec.hidden = false;
    }
  }
  const items = (L.toolkit || []).filter(i => i && i.url && /^https:\/\//.test(i.url));
  if (items.length) {
    const sec = document.getElementById('toolkit');
    const ul = sec && sec.querySelector('[data-toolkit]');
    if (ul) {
      ul.innerHTML = items.map(i => `<li><p class="cat mono">${esc(i.cat || '')}</p><h3>${esc(i.name)}</h3><p>${esc(i.note || '')}</p><a href="${esc(i.url)}" target="_blank" rel="sponsored noopener">View (affiliate link) ↗</a></li>`).join('');
      const d = sec.querySelector('[data-disclosure]'); if (d) d.textContent = L.disclosure || '';
      sec.hidden = false;
    }
  }
});
