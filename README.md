# peter-woodley

Peter Woodley's personal brand site. Plain static HTML/CSS/JS, deployed on Netlify (site `peter-woodley`, account info@woodleysolutions.tech). **Status: preview (noindex). Peter approves before launch.**

## Structure (v2, business-first rebuild)
- `index.html`: single page. Hero with a "what brings you here" picker, then services with a call-to-action per venture, process, background, about, twin cross-link, and contact doors plus a form
- `styles.css` is this site's design; the two sites are intentionally different
- `links.js` holds the **Substack + affiliate toolkit config**. Both sections stay hidden until real entries are added. The same file is in both repos, so keep them in sync
- `v1-photo-portfolio` git tag = the old photo-heavy version

## Inquiry routing
- Network quote → woodleynetworkingsolutions.netlify.app/#contact
- ITAD pickup → digilabs-itad.netlify.app/#intake (754-274-6614)
- Schools → digi-labs.org/pricing#schools
- Reflex Sports → pwoodley@reflexsports.co (Peter's site only)
- Everything else → Netlify form on this site (reply promise: 1 business day)

## Affiliate links
Add them to `links.js` → `toolkit`. Every link renders with `rel="sponsored"`, an "(affiliate link)" label, and the disclosure line (FTC). Amazon Associates also requires the exact sentence "As an Amazon Associate I earn from qualifying purchases." If any link is Amazon, append it to `disclosure`.

## Launch
1. Remove `<meta name="robots" content="noindex, nofollow">` from `index.html` and the `X-Robots-Tag` header from `netlify.toml`
2. Turn on form email notifications: Netlify → Site → Forms → Notifications

## Peter to confirm
- [ ] Copy is in his voice
- [ ] KIPP Miami named publicly: confirm the school is OK with it
- [ ] reflexsports.co is 404; the site uses email only, with no link to the domain, until that's fixed
- [ ] Public speaking removed per request
