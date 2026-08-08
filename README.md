# FBA Tactics — fbatactics.com

Astro static site. Published by HR Express. Funded by display advertising.

- **Stack:** Astro 7, MDX content collections, no client framework
- **Deploy:** Cloudflare Pages — build `npm run build`, output `dist`
- **Node:** 22.12 or later

```bash
npm ci
npm run dev            # http://localhost:4321
npm run build          # → dist/
npm run check          # build, then run the pre-deploy audit
npm run local-preview  # build a file:// viewable copy in local-preview/
```

## Run the audit before every push

```bash
npm run check
```

`tools/verify.mjs` runs the checks that the August 2026 AdSense review turned up by
hand, so a regression fails a build instead of failing an application. It exits non-zero
on any of:

- placeholder text reaching production (`REPLACE THIS PAGE`, `FILL_ME_IN`, `Lorem ipsum`)
- an indexed page under 350 words of body copy
- a missing canonical, a missing or very short meta description, or anything other than
  exactly one `<h1>`
- more than three ad containers on a page, an ad on a thin page, an ad inside the
  navigation or ticker, or ad containers rendering while AdSense is switched off
- a broken internal link anywhere in the build
- a guide with no sources block, or sources without retrieval dates
- a missing `robots.txt`, `ads.txt`, sitemap or `404.html`
- a `_redirects` catch-all that would return the homepage with 200 for every URL
- a missing trust page (privacy, terms, contact, about, editorial standards, corrections)

It warns, without failing, when fewer than 12 guides are published and when a
call-to-action button sits close to an ad container.

The same audit runs in CI on every push and pull request (`.github/workflows/ci.yml`).

---

## Repository layout

```
src/
  config.ts                 site name, author, AdSense settings
  data/
    nav.ts                  navigation tree
    policy.ts               fee & policy log — feeds the ticker, the Fee Watch
                            module in the masthead, and /policy-log/
    marketplaces.ts          per-marketplace fee reference — feeds /marketplaces/
    covers.ts               data covers: the headline figure each guide plots
  content/guides/           published guides (.mdx)
  components/               Cover, PortalCard, AdSlot, Sources, Faq, …
  pages/                    routes
  styles/global.css         the whole design system
tools/
  make-local-preview.mjs    rewrites dist/ for file:// viewing (local only)
public/
  ads.txt  robots.txt  downloads/
```

**Single source of truth matters here.** `policy.ts` feeds three surfaces at once and
`marketplaces.ts` feeds six pages. Edit the data file, not the page.

---

## Editorial rules (these are not style preferences)

The site's `/editorial-standards/` page makes public commitments. Breaking them in a
commit breaks the site's claim about itself, which is what the previous AdSense
rejection came down to.

1. **Every rate carries the date it was checked and a link to its source.** The
   `Sources` component takes an `accessed` date per item. No date, no publish.
2. **Name the publisher of secondary sources**, especially where that publisher sells
   the software that solves the problem the figure describes.
3. **Record disagreements, do not resolve them.** Where two sources give different
   values, publish both and send the reader to the primary source. Several pages carry
   a contested-figures table for this reason.
4. **Label illustrative figures** in the sentence that introduces them. Never present a
   demonstration of arithmetic as a quoted rate.
5. **First-party operational figures** get labelled as first-party with the period they
   cover. Client, employer and partner data is never published in any form.
6. **Corrections are logged**, dated, in `src/pages/corrections.astro`. Never edit a
   figure silently.

---

## Adding a guide

1. Create `src/content/guides/<slug>.mdx`. Frontmatter schema is in
   `src/content.config.ts` — `category` must match the enum.
2. Add a cover in `src/data/covers.ts` keyed on the same slug. Four kinds are
   available: `range`, `cliff`, `timeline`, `ledger`. Without an entry the guide falls
   back to a generic category cover.
3. Fill the `Sources` block with real links and access dates.
4. `draft: true` keeps it out of the build.

## Adding a marketplace

Append a record to `MARKETPLACES` in `src/data/marketplaces.ts`. The page, the
comparison row, the nav entry and the utility-strip link all follow from it.

---

## Advertising

Ads are off until **both** of these are true in `src/config.ts` and the `AdSlot` calls:

- `adsenseEnabled: true`
- a real `slot` ID passed to each `<AdSlot slot="…" />`

While either is missing, `AdSlot` renders **nothing at all** — not a placeholder. This is
deliberate: a labelled "Advertisement" frame with an empty box inside it looks like a
broken ad unit to a reviewer and like dead space to a reader.

Placement rules the pages honour, and which should survive any redesign:

- No ad above the fold on any page.
- No ad inside navigation, the ticker, or any sticky or overlay layer.
- No call-to-action button in or adjacent to an ad container.
- Maximum three ad slots per page.
- No ads on pages without substantial content.

## Consent

Google's certified CMP must be live in the AdSense dashboard (Privacy & messaging →
European regulations) before any EEA, UK or Swiss traffic arrives. `/privacy/` states
that a consent platform is shown to those visitors — if it is not actually live, the site
is making a claim it does not meet.

---

## Before re-applying to AdSense

- [ ] Google CMP live and verified
- [ ] `/privacy/` and `/terms/` load with no placeholder banner
- [ ] `https://fbatactics.com/does-not-exist` returns a real 404, not the homepage
- [ ] No `_redirects` catch-all (`/* /index.html 200`) anywhere in the repo
- [ ] `/ads.txt` returns plain text with the publisher ID
- [ ] `/robots.txt` allows crawling and disallows `/style-guide/`
- [ ] Sitemap submitted in Search Console and pages indexed
- [ ] 12–15 guides published with `draft: false`
- [ ] A visible publishing history — regular posts over several weeks, not one bulk upload
- [ ] Every `Sources` link in every guide opened and verified

The last two are the ones that decide it. The rejection reason was low-value content;
the fix is published volume and a real publishing cadence, not markup.
