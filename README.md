# marra.vc

Static site for Matt Marra Ventures & Advisory. No build step: plain HTML, CSS and one data file.

## Edit
- **Portfolio:** `data/portfolio.js`. One line per company with `status` of `active`, `acquired`, `exited` or `closed`. Status filter buttons appear automatically once more than one status is used. `show: false` hides an entry.
- **Copy, press, contact:** `index.html`.
- **Logo:** drop `assets/logo.png` in and swap the wordmark (see the comment in the header).

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server` here.

## Deploy
Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Point the publish directory at the repo root. The domain stays at name.com; switching DNS away from Wix is a separate, deliberate step.
