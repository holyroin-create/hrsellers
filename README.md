# fbatactics.com — v2 (GitHub Pages)

Static Astro site: marketplace fees and US import rules, every fact tied to a primary source.
Every page is built from `src/content/**.mdx` + `data/claims/*.json`; the build **refuses to render a page
that cites an unverified claim**, and CI gates block deployment on any policy, link, image or claims error.

```bash
npm ci
npm run dev        # http://localhost:4321
npm run check      # build + all gates (as CI runs them, except external links and Lighthouse)
```

## What you (the owner) must do — in this order

### 1. Confirm owner details (deploy is blocked until you do)
Open `site.config.json`. The values were copied from the old repository (`src/config.ts`); nothing was guessed.
- Check `publisherName`, `editorName`, `contactEmail` are current and that the mailbox receives mail.
- Optional: `publisherLegalAddress`, `editorBio` (only true, checkable facts).
- Set `"ownerConfirmed": true`.

### 2. Create the repository and push
1. On GitHub create a repository (e.g. `fbatactics`). Public or private both work with Pages on your plan; public is required on GitHub Free.
2. Upload this folder's contents (not the ZIP itself) to the `main` branch — GitHub Desktop: *File → Add local repository*, commit, *Publish*.
   The old repository `holyroin-create/hrsellers` can stay as an archive; do not deploy both to the same domain.

### 3. Turn on Pages
Repository → **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow
`.github/workflows/deploy.yml` builds, runs all gates, and deploys. Watch it under the **Actions** tab.

### 4. Move the domain from Cloudflare Pages to GitHub Pages
The live site is currently served by Cloudflare Pages (old repo had `_redirects`/`_headers`).
1. **Settings → Pages → Custom domain:** enter `fbatactics.com`, Save (do this *before* changing DNS).
2. At your DNS provider remove the records pointing to Cloudflare Pages for `@` and `www`, then add:
   - `A @ 185.199.108.153`, `A @ 185.199.109.153`, `A @ 185.199.110.153`, `A @ 185.199.111.153`
   - optional `AAAA @ 2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME www <your-github-username>.github.io` (no repository name)
   - No wildcard (`*`) records. If DNS is on Cloudflare, set these records to **DNS only** (grey cloud) until the certificate is issued.
   Source: docs.github.com "Managing a custom domain for your GitHub Pages site" (checked 2026-11-08).
3. Wait for the DNS check to pass, then tick **Enforce HTTPS**. If the certificate stalls, remove the domain, save, re-add it.
4. Detach the domain from the Cloudflare Pages project so the two hosts do not compete.

### 5. Search Console (same day)
- Submit `https://fbatactics.com/sitemap-index.xml`.
- Removed URLs return 404 on purpose (list: `docs/URL_ENVANTERI.csv`, decision `KALDIR`). Do **not** request removal for them; Google drops 404s on recrawl. Use the Removals tool only if an old page must disappear faster.
- Use URL Inspection → *Request indexing* on the home page and 5–10 guides.

### 6. AdSense
1. Wait until the site has been live and crawled for at least 2–3 weeks with the new content.
2. AdSense → **Privacy & messaging → European regulations**: create and publish the 3-button consent message. Then set `"googleCmpConfigured": true`.
3. AdSense → Sites → request review. Verification uses the `google-adsense-account` meta tag already in every page, and `/ads.txt`.
4. **After approval only:** create two display ad units, put their numeric IDs in `adSlots.inArticle` and `adSlots.endOfArticle`, set `"adsEnabled": true`, update the date on `/privacy/` and `/cookie-policy/`, push. The policy gate refuses `adsEnabled` without the CMP flag and slot IDs.
No one can guarantee approval; see `docs/90_GUN_PLANI.md` for what to do after a rejection.

## Updating content
- New/changed guide: follow `docs/CONTENT_CONTRACT.md`. Every fact → a claim in `data/claims/<slug>.json`, checked by someone other than the writer (`verified_by` ≠ `produced_by` — CI enforces this).
- A figure changed: update the claim, the sentence, `modified` + `lastVerified`, and add a line to `data/corrections.json`.
- Policy log: add an entry to `data/policy-log.json` + a claim in `data/claims/policy-log.json`.
- Weekly job (`weekly-sources.yml`) reopens every source and opens an issue for dead links or claims older than 120 days.

## Layout
```
src/content/guides/*.mdx         guides           src/content/marketplaces/*.mdx  fee references
data/claims/*.json               claims register  data/policy-log.json            log entries
data/fee-presets.json            calculator rates data/tool-rates.json            MPF/HMF for the estimator
data/images.json                 image manifest   data/redirects.json             old URL → new URL
site.config.json                 owner settings   tools/gate-*.mjs                CI gates
legacy/unverified/               old guides, not built     docs/                  all project documents
```

## Licenses
Code: MIT (`LICENSE`). Text and graphics: © the publisher, all rights reserved (`LICENSE-CONTENT.md`). Fonts: SIL OFL 1.1 (`public/fonts-licenses/`).
