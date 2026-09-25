# peter-woodley

Personal brand site for Peter Woodley. It is plain static HTML/CSS/JS with no build step, deployed on Netlify.

**Status: DRAFT / preview.** Per Peter's brief, nothing launches until Peter approves it.

## Links out to
- DigiLabs TechTank: https://www.digi-labs.org
- DigiLabs ITAD: https://digilabs-itad.netlify.app
- Woodley Solutions / Woodley Brothers Networks: https://woodleynetworkingsolutions.netlify.app
- Reflex Sports: https://reflexsports.co (**currently returns 404, so fix it or pull the link before launch**)
- Paul's site: https://paul-woodley.netlify.app

## What Peter must approve before going live
- [ ] Photos from portfolio-media/ (01-alaska … 10-donda). They are in the Muse workspace, not on this machine. Drop them into `/assets/` and I'll wire them in
- [x] Hero portrait: chess/plants photo (IMG_5098, Peter's pick set)
- [x] Peter's 10 photos added: Alaska, LA statue, Welcome to LA, museum painting, beach, chess, boat at sunset, floral art, Louvre, Eiffel
- [ ] Captions that need Peter's confirmation: whether the Eiffel/Louvre shots are from the 2024 Olympics trip, where the boat/skyline shot was taken, which arena the LA statue is at
- [ ] Still needed: Crandon triathlon, FSU graduation, food photos
- [x] Joint photos added: Alaska glacier + waterfall, Heat game, morning run, booth, DigiLabs suits
- Skipped: photos with third parties (Alaska bar trio, arena selfie with two friends). Need their OK before publishing
- [ ] Instagram reel URLs (e-waste mission, plus Paris/Alaska/running) for the official IG embeds
- [ ] FSU undergrad major and years for both degrees
- [ ] Crandon triathlon year
- [ ] Caption for 10-donda.jpg
- [ ] KIPP Miami: confirm the partner is fine with being named publicly (school + minors). No student photos or names
- [ ] Location framing: the brief says "Tallahassee-based" but the story arc ends in Miami. Which one?
- [ ] Reflex Sports wording. Keep it high-level: no athlete names, especially minors
- [ ] Whether Woodley Solutions belongs on your site (you asked for all 3 ventures; I included it)
- [ ] Approve all copy (it's written in your voice, so change anything that doesn't sound like you)

## Launch
1. Remove `<meta name="robots" content="noindex, nofollow">` from `index.html` and the `X-Robots-Tag` header from `netlify.toml`
2. Remove the `.draft-bar` div
3. Push to `main`. Netlify auto-deploys
