# DENETIM_RAPORU_A1 — independent audit of fbatactics.com (rebuilt)

Auditor: auditor-A1. Audit date: 2026-11-07 UTC (2026-11-08 in Ankara).
Scope: `dist/` rebuilt by the auditor with `ALLOW_UNVERIFIED=1 npm run build` (54 pages, 65 HTML files including 11 redirect stubs), plus `src/`, `data/`, `docs/`, `site.config.json`, `.github/workflows/`.
Method: scripted checks over every built HTML file (headings, canonical, description, og:image, JSON-LD, sitemap, links, third-party requests, ad code, storage APIs), the project gates (`gate:claims`, `gate:images`, `gate:policy` with and without `RELEASE=1`, `gate:links`, `gate:html`), text extraction of every hub, legal and trust page, a claim-by-claim comparison for the glossary, quiz, rateboard and policy log, a seeded random sample of 12 cited sentences, sentence-level duplicate counting, and 5-word-shingle similarity across all 26 content pages. One policy page was re-fetched (support.google.com/adsense/answer/1346295) to confirm the allowed ad label wording.
No site files were edited.

## Summary

| Severity | Count |
|---|---|
| Critical | 0 |
| High | 3 |
| Medium | 9 |
| Low | 19 |

Nothing in the built files breaks a Google rule outright today: there's no ad code, no third-party request, no cookie or storage use, no broken internal link, and every URL in the inventory resolves to the decided outcome. The rejection risk sits in three places: unverified pages carry "Verified" labels, the named publisher and editor aren't confirmed, and no human review is recorded anywhere. Fix those three before you request review.

The project's own gates agree. `gate:claims` reports 93 errors and `gate:policy` in release mode reports 1 error (`ownerConfirmed=false`). The CI pipeline in `.github/workflows/deploy.yml` will refuse to deploy until both are cleared.

---

## 1. Findings

### High

**H1 — Four guides are published from unverified claims and labelled "Verified"**
- Files/URLs: `/guides/customs-holds-and-exams/`, `/guides/duty-drawback/`, `/guides/foreign-trade-zones/`, `/guides/prior-disclosure-protests/`; `data/claims/{customs-holds-and-exams,duty-drawback,foreign-trade-zones,prior-disclosure-protests}.json`.
- Evidence: all 93 claims in these four files have `status: "drafted"` and an empty `verified_by` (22 + 25 + 23 + 23). None of the verifier reports in `docs/verification/` (V2–V7) mentions these slugs. `npm run gate:claims` lists 93 errors. The pages are in `dist/` only because of `ALLOW_UNVERIFIED=1`. Yet the built pages show "Last verified: November 8, 2026". `/guides/` shows a "Verified" badge on each of them. Every Sources block says "Each was opened and checked against the sentence it supports". `/editorial-standards/` §2 says "The site's build refuses to publish a page that cites an unchecked entry". On these four pages, all three statements are false.
- Risk: misrepresentation (Publisher Policies, A06) and loss of trust (B02). This becomes Critical if this `dist/` is ever uploaded by hand rather than through CI. The owner has historically updated the site by drag-and-drop in the GitHub web UI.
- Fix: run an independent verifier over the 93 claims (fetch each `source_url`, set `verified`/`rejected`, then edit the MDX) and write `docs/verification/<name>.md`. Until that's done, either withdraw the four guides or don't deploy. If you withdraw them, change their rows in `URL_ENVANTERI.csv` from YENİDEN YAZ to KALDIR or BİRLEŞTİR, and remove them from `/guides/`, `/costs/` and `/start-here/` links. Never publish a build made with `ALLOW_UNVERIFIED=1`. Have the build write a marker such as `dist/.build-mode` and make the deploy job fail when it reads "unverified".

**H2 — Publisher and editor identity are unconfirmed and may be out of date (ownership clarity)**
- Files/URLs: `site.config.json` (`ownerConfirmed: false`, `publisherLegalAddress: ""`, `editorBio: ""`), `/about/`, footer "Published by HR Express", the byline "By HR Express editorial" and the JSON-LD `publisher`/`author` "HR Express" on all 26 articles.
- Evidence: `site.config.json` itself says these values were copied from the previous repository, and `RELEASE=1 npm run gate:policy` fails on `ownerConfirmed=false`. The user's memory store (not the site files) records two relevant facts. First, the HR Express venture ended in January 2026. Second, Muhammet Ali Türk has worked full time at RTÜK as a computer technician since 1 September 2026. The same store records the site as run by the account owner (Ahmet). The About page names an editor and a publisher that may not match who actually runs and checks the site. Google says "Don't invent creators" (B02), and AdSense expects clear ownership.
- Fix: the owner confirms the real publisher (person or legal entity), the real editor, and a working contact. Update `publisherName`, `editorName`, `editorBio` and, if available, `publisherLegalAddress`. Remove any name that doesn't actually edit the site. Then set `ownerConfirmed: true`. Keep the About page, footer, byline and JSON-LD consistent with the confirmed facts.

**H3 — No human review is recorded for any page; all drafting and checking was done by AI agents**
- Files: `data/claims/*.json` (`verified_by` values are only `verifier-V2` to `verifier-V7` and `lead-crosscheck`), all MDX frontmatter (no `reviewedBy` or `reviewedDate`), `/about/` and `/editorial-standards/` §6 ("researched and drafted with the help of AI writing tools ... then checked against those sources").
- Evidence: checklist A03 says auto-generated content without manual review or curation doesn't qualify. B06's test is "every page has `reviewedBy`". No page or data file names a human reviewer. The disclosure is honest, but together with the earlier "low value content" rejection it is the largest remaining rejection risk.
- Fix: a named human (the confirmed editor from H2) reads every guide and marketplace page against its sources and records `reviewedBy` and `reviewedDate` in the frontmatter. Render "Reviewed by <name>, <date>" in the byline. Make the build fail when either field is missing on `guides`/`marketplaces`. Only describe the review on the About page after it has happened.

### Medium

**M1 — Ad label wording isn't one of the two allowed strings**
- Files: `src/components/AdSlot.astro` (`<p class="ad-label">Advertisement</p>`, `aria-label="Advertisement"`), `/about/` ("ads are labeled 'Advertisement'"), `docs/KARAR_GUNLUGU.md` K-13.
- Evidence: support.google.com/adsense/answer/1346295 (fetched during this audit): "Publishers may only label Google ads with either 'Advertisements' or 'Sponsored Links'." This is inactive today (ads are off) but would be a violation the day ads are switched on.
- Fix: change the label to `Advertisements` in AdSlot.astro and on the About page, and correct K-13. Add the CI test from A09.

**M2 — The only ad slot sits directly above the Sources link list**
- File: `src/layouts/Article.astro` (`<AdSlot slot="inArticle" />` immediately followed by `<Sources />`, a dense list of outbound links).
- Evidence: A09/1346295 warns against ads next to links and navigation. The site's own About page promises ads are "never placed inside ... source lists", and adjacency comes close to breaking that promise.
- Fix: move the slot to a break between body H2 sections (for example after the second H2, away from Flow, Checklist and tables), or put a non-link block between the ad and the Sources heading. Keep the existing 300 px reserve.

**M3 — Sources blocks restate every claim sentence: 25–52 % of each article's text**
- Files: `src/components/Sources.astro`; every guide and marketplace page.
- Evidence: the Sources section is 34–41 % of the words on most guides, and 52 % on `/marketplaces/amazon/` (52 entries but only 2 distinct URLs) and `/marketplaces/walmart/` (48 entries, 3 URLs). Identical source lines appear on 3 pages each, for example the Etsy processing-fee lines. Each body fact appears twice on the page. To a reviewer, that reads as padding. It also inflates the `gate:policy` 900-word floor, which counts this text.
- Fix: group the Sources list by unique `source_url` and show the publisher, page title, pinpoint and checked date once per source. Keep the per-claim anchors and put the claim text in a collapsed `<details>`. Have `gate:policy` exclude `.sources` from its word count.

**M4 — `/news/` is a near-duplicate of `/policy-log/`**
- Evidence: every entry on `/news/` is repeated word for word on `/policy-log/` (10 of the 21 long text lines are shared, and all titles and summaries are). Both pages are indexable and both are in `sitemap-0.xml`.
- Fix: make `/news/` a meta-refresh stub to `/policy-log/` (BİRLEŞTİR, update `URL_ENVANTERI.csv` and `data/redirects.json`), or add `noindex` and a canonical to `/policy-log/`.

**M5 — 9 of 14 glossary definitions say more than their cited claim**
- File: `data/glossary.json` (single `claim_id` per term). Each term below lists the unsupported addition and the claim that would support it:
  - *Country of origin*: "changes the origin only if it substantially transforms" is not in `country-of-origin-sourcing-01`; it is in `-02`.
  - *Ultimate purchaser*: "for goods sold at retail ... the retail buyer" is not in `origin-marking-requirements-04`; it is in `-05`.
  - *Transaction value*: "the first basis US Customs uses" is not in `first-sale-valuation-02`; it is in `-01`.
  - *Assist*: "for use in producing ... tools, dies and molds" is not in `first-sale-valuation-10`; it is in `-21`.
  - *Antidumping (AD) order*: "importers pay a cash deposit ... at entry" is not in `antidumping-duties-01`; `-02` supports the cash deposit but not "at entry".
  - *Anniversary month*: "reviews may be requested during that month" is not in `antidumping-duties-15`; it is in `-06`.
  - *Scope ruling*: "A Commerce Department decision" is not in `antidumping-duties-09`; it is implied by `-11`.
  - *Final value fee (eBay)*: "percentage fee ... charged when the item sells" is not in `marketplace-ebay-05`; `-01` supports the percentage. Nothing supports "when it sells" verbatim.
  - *Attributed order (Etsy)*: "only these orders carry the Offsite Ads fee" is not in `marketplace-etsy-16`; it is in `-05` and `-15`.
- The other five (Substantial transformation, Marking duty, J-List, Price actually paid or payable, Referral fee) match their claims.
- Fix: change the schema to `claim_ids: []`, cite every claim used, and render all the citation markers. Otherwise trim each definition to its single claim. Reword "at entry" (AD order) and "when the item sells" (eBay) unless a verified claim states them.

**M6 — Policy-log summaries carry details beyond their cited claim**
- File: `data/policy-log.json`.
- Evidence:
  - pl-2026-05: "Entry Type 11 named as the main informal route" is not in `policy-log-05`.
  - pl-2026-06: "filed by a bonded owner, purchaser or broker, with payment through Pay.gov" is not in `policy-log-06`. Pay.gov is supported in `de-minimis-suspension-2026`.
  - pl-2026-08: "automated informal entry fee becomes $2.77" is not in `policy-log-08`. It is supported by `tariff-stack-2026` and `tool-tariff-stack-estimator`.
  - pl-2026-11: the list of proposed requirements is not in `policy-log-11`.
  - pl-2026-12: the scope wording (partner agency, Chapter 98/99, FTA) is not in `policy-log-12`.
  - The `/policy-log/` page shows one citation per entry.
- Fix: add `claim_ids` arrays and cite the supporting claims, or add verified claims for these details, or trim the summaries.

**M7 — Original analysis is thin on 9 of 21 guides**
- Evidence: there is no "Worked example" or comparable original analysis in antidumping-duties, customs-holds-and-exams, incoterms-who-is-importer, section-321-repeal-2027, us-product-compliance, country-of-origin-sourcing, de-minimis-suspension-2026, hts-classification-basics or review-manipulation-risk. Their original elements are the site-authored Flow and Checklist blocks. `/guides/origin-marking-requirements/` cites 24 facts, all from one eCFR part (one unique URL). A reviewer looking for "value beyond the source" (A02, B01) may read these as reworded regulations. The prior rejection reason was exactly "low value content".
- Fix: give each of these guides at least one seller-decision element that isn't in the source. Options are a decision table ("if your shipment is X, then Y"), a hypothetical worked scenario with stated inputs, a cost or time comparison, or a common-mistake matrix. Keep everything cited and labelled hypothetical. Record the element per page in the B01 rubric.

**M8 — Bylines don't identify or link to an author**
- File: `src/layouts/Article.astro`: `By <strong>HR Express</strong> editorial`, which is not a link.
- Evidence: B02 says to show bylines where readers expect them, linked to author information.
- Fix: after H2 and H3, render "Written by HR Express editorial · Reviewed by <confirmed editor>". Link it to `/about/#editor` and add that anchor and the editor's bio to the About page. Put a matching `author` or `reviewedBy` in the JSON-LD, but only for real people.

**M9 — The only contact channel can't be verified**
- Files: `/contact/` and the footer (`contact@fbatactics.com`, email only, no form).
- Evidence: GitHub Pages doesn't provide mail, and the shell had no network to check MX records. A dead mailbox undermines the corrections process and the ownership signals.
- Fix: before requesting review, confirm the domain has MX records and send a test message to `contact@fbatactics.com`. Consider adding a business location (city, country) on the About page once H2 is settled.

### Low

- **L1 — Privacy statement says "no forms"**, but a GET search form appears in the header on every page (`/privacy/` intro). Fix: change it to "no forms that send data to us; the site search runs in your browser".
- **L2 — Three BİRLEŞTİR targets don't cover the old topic.** This is a soft-404 risk. `/guides/tariff-engineering-design/` → `/guides/hts-classification-basics/`: the target never mentions "tariff engineering". `/guides/walmart-new-seller-savings-2026/` → `/marketplaces/walmart/`: no new-seller programme is mentioned. `/guides/fba-vs-fbm-breakeven/` → `/marketplaces/amazon/`: no FBA/FBM break-even content. Fix: add a short section on the target page, or change these rows to KALDIR (404).
- **L3 — `dist/404.html` has `<link rel="canonical" href="https://fbatactics.com/404/">`**, a URL that doesn't exist. Fix: omit the canonical on the 404 page (`Base.astro` takes the canonical from the path; add a `noCanonical` prop).
- **L4 — Redirect stubs use a relative refresh target (`content="0;url=/marketplaces/walmart/"`)**, combine `noindex` with `rel=canonical`, and have no `lang` or `charset`. B10's test requires an absolute https target. Fix: generate the stubs from `data/redirects.json` with an absolute `https://fbatactics.com/...` URL. Drop `noindex` so the canonical and the refresh consolidate cleanly, and add `<html lang="en-US"><meta charset="utf-8">`.
- **L5 — Boilerplate repeated across pages.** These sentences appear on 3 or more pages:
  - The callout sentence "This page summarizes the rule; for a ruling on your goods, CBP binding rulings or a licensed customs broker are the route." appears on 15 guides (12 titled "Scope of this page", 3 "Not a ruling").
  - "Print this checklist. Ticks are not saved or sent anywhere." appears on 16 pages.
  - The two sentences of the Sources intro and the "Found an error?" line appear on all 26 pages. These are template elements and acceptable.
  - The H2 "What to check yourself" appears on 26 of 26 pages.
  - "Worked example: a hypothetical $25 item" appears on 4 pages.
  - In total there are 13 distinct sentences repeated on 3 or more pages. Pairwise 5-shingle Jaccard similarity is at most 0.143 (`/guides/etsy-offsite-ads-economics/` vs `/marketplaces/etsy/`), so no page is a near-duplicate.
  - Fix: write the scope callout per page, naming the specific route for that topic (protest, drawback claim, binding ruling, CPSC lab). Vary the "check yourself" headings, for example "Confirm it on the eCFR", "Check your own entry".
- **L6 — Hub pages are lists with little text**, all indexable: `/tools/` (150 words), `/marketplaces/` (238), `/costs/` (262), `/sitemap/` (344). They carry no ads, which is correct. Fix: add 2–3 sentences of orientation to `/tools/` and `/marketplaces/`, and `noindex` the HTML `/sitemap/`.
- **L7 — Literal string for E02's CI test is missing.** `/privacy/` links `policies.google.com/technologies/partner-sites`, which is the current URL; the checklist test greps for `policies/privacy/partners`. Fix: update the test, not the page.
- **L8 — E01 vendor naming.** The privacy page says "Google and its partners" but doesn't link a vendor list. Fix: add a sentence that third-party vendors are those listed in the consent message, with a link to Google's ad technology providers page, before ads go live.
- **L9 — Deploy job has no `timeout-minutes`** (D01 test), in `.github/workflows/deploy.yml`. Fix: add `timeout-minutes: 10` to the deploy job.
- **L10 — Gradient in CSS.** `.home-top { background: linear-gradient(var(--paper), var(--paper)) padding-box }` in `src/styles/global.css` (around line 100) is a degenerate, same-color gradient. It contradicts the "no gradients" design rule. Fix: replace it with `background: var(--paper)`.
- **L11 — Mobile nav needs JavaScript.** At 960 px or narrower, `.nav` is `display:none` until `.menu-toggle` toggles it, so there is no no-JS fallback. The footer links still work. Fix: add `<noscript><style>.nav{display:flex;position:static}</style></noscript>` or use a `<details>` wrapper.
- **L12 — Uncited factual sentences outside guides.** `/resources/`: "The eCFR is the continuously updated online version ... each page shows the date it is current to". `/start-here/`: "tests the rules that cost sellers the most when they are misunderstood". Home and `/guides/` describe Marketplace fees as "worked through on real prices", but the examples are hypothetical. Fix: cite the first sentence, or reword it as site guidance. Drop "cost sellers the most". Change "real prices" to "published rates".
- **L13 — Published dates and full rewrites.** Rewritten pages keep their August 2026 `published` dates although the text was written on 2026-11-08 (for example `ebay-etsy-for-amazon-sellers`, "Published August 21, 2026"). Fix: show "First published Aug 21, 2026 · Rewritten Nov 8, 2026", or log each rewrite on `/corrections/` by URL.
- **L14 — Agency name is inconsistent in the policy log:** "CBP" (pl-2026-13) vs "U.S. Customs and Border Protection" elsewhere, both on the home page ledger. Fix: use one form.
- **L15 — Long titles.** 24 page titles run 71–84 characters with the "| FBA Tactics" suffix and will be truncated in results. Fix: drop the suffix on articles or shorten the titles.
- **L16 — Site name vs content.** "FBA Tactics" suggests Amazon FBA tactics, but 15 of 21 guides are about US customs. Nothing explains the name. Fix: add one sentence on the About page explaining the focus.
- **L17 — SearchAction points to a hidden page.** The WebSite JSON-LD `SearchAction` targets `/search/`, which is `noindex` and disallowed in robots.txt. It's harmless, but it marks up a page Google can't crawl. Fix: remove the `potentialAction`.
- **L18 — One spot-check sentence goes slightly past its claim.** `/guides/de-minimis-suspension-2026/`: "The regulation that implements Section 321 is 19 CFR 10.151" cites `de-minimis-suspension-2026-08`, which doesn't say "implements Section 321". Fix: cite a claim that links 10.151 to section 321, or reword to "The regulation for low-value importations is 19 CFR 10.151".
- **L19 — Search placeholder contrast.** The browser-default placeholder colour (about #757575) on `--paper` gives 4.41:1. Fix: set `::placeholder { color: var(--ink-3) }` (5.22:1).

---

## 2. Simulated AdSense reviewer walk (first-time visit)

| Page | Observation | Verdict |
|---|---|---|
| `/` | Clear promise, policy ledger with dated official notices, sourced rate table, four topic lists, calculator strip. No ads, no logos, no stock photos. "26 reference pages · 629 individually sourced facts": 629 equals the verified-claim count, but 4 of the 26 pages are unverified (H1). | OK, apart from H1 |
| `/guides/` | 21 guides grouped by category, each with a "Verified Nov 8, 2026" badge. The badge is false for 4 guides (H1). | H1 |
| `/guides/ebay-etsy-for-amazon-sellers/` | Strong original arithmetic, all of which I rechecked ($3.75, $4.74, $3.80, $2.825, $6.575, $1.025 are correct). | Good |
| `/guides/tariff-stack-2026/` | Rates and Bars chart values match claims -11, -14 and -17. Accessible table present. | Good |
| `/guides/origin-marking-requirements/` | Accurate, but a single-source paraphrase (M7). | Weak value-add |
| `/guides/customs-holds-and-exams/`, `/guides/duty-drawback/` | Well written, but every claim is unverified (H1). | Blocker |
| `/guides/section-321-repeal-2027/` | Written and verified (10 sources, 5 URLs). | OK |
| `/marketplaces/amazon/`, `/marketplaces/walmart/` | Full fee tables from the platform pages. Sources list is 52 % of the page (M3). | OK with M3 |
| `/tools/*` | Five calculators. Each explains its formula, nothing is stored, the dimensional divisor is left blank on purpose and logged on `/corrections/`. Tool pages for the PPC and cash-flow calculators are short (246 and 256 words) but functional. | OK |
| `/quiz/` | 12 questions, all answer indices correct, each explanation cited; radio inputs are wrapped in labels. | OK |
| `/glossary/` | 14 terms; 9 overreach their single cite (M5). | M5 |
| `/policy-log/`, `/news/` | Good primary-source log; `/news/` duplicates it (M4). | M4 |
| Legal and trust pages: `/about/`, `/contact/`, `/editorial-standards/`, `/privacy/`, `/cookie-policy/`, `/terms/`, `/disclaimer/`, `/corrections/`, `/image-credits/` | All present, linked from the footer and mutually consistent. The privacy and cookie pages match actual behaviour: no analytics, no own cookies, no storage APIs (grep found no `localStorage`, `sessionStorage`, `document.cookie` or `sendBeacon`; the only `fetch` is to the local `/search-index.json`), ads stated as not active. Ownership is unconfirmed (H2); no human review (H3); label wording (M1). | H2, H3, M1 |
| `/404.html` | Helpful text, links to hubs, `noindex`, no ad code; canonical bug (L3). | OK |
| Navigation | Six dropdown groups, a search bar and a full footer. 0 broken internal links. The only page with no inbound link is `/search/`, which is reached by the form. | OK |

## 3. Policy checklist (POLITIKA_KONTROL_LISTESI.md), row by row

| ID | Status | Evidence from built files |
|---|---|---|
| A01 | Not verifiable / partly met | No AdSense script in `dist` (ads off by design). `<meta name="google-adsense-account" content="ca-pub-9985150163567506">` is on every page, which is a valid verification method. Originality is affected by H3. Account-holder age can't be verified. |
| A02 | Met (with M7) | `gate:links`: 0 errors (116 external URLs). Nav and footer are on every page. No comments section. The value-add spot-check is weak on 9 guides (M7). |
| A03 | Partly met | No `adsbygoogle` or `pagead2` anywhere in `dist`. No "coming soon" or TODO text (the grep hits were "ad valorem"). Stubs are `noindex`. "Evidence of human review" is **Not met** (H3). |
| A04 | Met | English only (`lang="en-US"`). Rate tables have analysis. A similarity check against the sources was not run. |
| A05 | Met | No restricted-category promotion; the hazmat guide is informational. No overlays (the ad slot isn't positioned, no z-index over content). |
| A06 | Met / at risk | The ads.txt pub ID matches the config. No logos. Footer non-affiliation statement. Misrepresentation risk from H1 and H2. |
| A07 | Met | No click-encouraging phrases (grep, and the `gate:policy` FORBIDDEN list). |
| A08 | Met | The 11 refresh stubs contain no ad code. No pop-ups. |
| A09 | **Not met** | Label is "Advertisement" (M1); slot adjacent to the Sources link list (M2). |
| A10 | Met | No `display:none` or `visibility:hidden` on `.ad` or `.adsbygoogle`; the inline style is `display:block;min-height:280px`. |
| A11 | Met (decision recorded) | Manual units, decided in K-13. The script would load only on Article pages (`Base.astro`, `ads={true}` only in `Article.astro`). AdSense-side exclusions can't be verified. |
| A12 | Met | robots.txt allows `*` and Mediapartners-Google. Verification via the meta tag plus ads.txt. |
| A13 | Met (pre-deploy) | `dist/ads.txt` = `google.com, pub-9985150163567506, DIRECT, f08c47fec0942fa0`, which matches the regex. Post-deploy curl can't be verified. |
| A14 | Met | Single valid record; OWNERDOMAIN (optional) absent. |
| A15 | Met | No `Disallow: /`. |
| A16 | Partly met | Removed URLs return no file (404). No policy-center log file in `docs/`. |
| A17 | Not verifiable | AdSense UI, after approval. |
| B01 | Partly met | Titles are plain with no clickbait. The original element is missing on 9 guides (M7). |
| B02 | Partly met | AI use is disclosed (About, Editorial §6). The byline names an organisation and isn't linked (M8). Creator identity unconfirmed (H2). |
| B03 | Met | Maximum pairwise 5-shingle Jaccard is 0.143. No templated page farms. Boilerplate noted in L5. |
| B04 | Met | No `rel=sponsored`, no affiliate parameters (the `tag=` grep hits are non-link text). |
| B05 | Met | No hidden text. `.skip` (-999px) is an accessibility skip link and `.vh` is a visually-hidden label, both legitimate. |
| B06 | **Not met** | No `reviewedBy` on any page (H3); 93 claims unverified (H1). |
| B07 | Met (N/A) | No `<img>` elements; all graphics are inline SVG with `role="img"` and `aria-label`; og:image is set on every page (27 PNGs, all 1200×630). |
| B08 | Met (N/A) | No images to lazy-load. |
| B09 | Met | Article JSON-LD `headline` equals `<h1>` and `dateModified` equals the visible "Updated" on all 26 pages. BreadcrumbList present. All JSON-LD parses. No Review or Rating markup. Author is an Organization, which is truthful until H2 is resolved. |
| B10 | Partly met | 11 stubs: refresh 0, target exists, canonical equals target, visible link. The target URL is relative, not absolute (L4). |
| B11 | Met | Titles and descriptions unique across `dist`. Exactly 1 canonical per page. `noindex` only on `/search/` and 404. |
| B12 | Met | `sitemap-index.xml` present; robots.txt references it. |
| C01 | Not verifiable / deferred | CMP not configured (`googleCmpConfigured:false`). No footer "Privacy settings" link yet. The privacy page explains that it will appear. |
| C02 | Not verifiable | `__tcfapi` only exists once the CMP is live. |
| C03 | Not verifiable | AdSense UI. K-08 records the three-button choice. |
| C04 | Met (N/A) | No gtag or GA in `dist`. |
| C05 | Met | No `email=` or `name=` query parameters. |
| D01 | Partly met | `dist` is 3.9 MB. The deploy job has no `timeout-minutes` (L9). |
| D02 | Met / owner risk | No payment or credential forms. The ads-on-Pages question remains an owner decision (K-06). |
| D03 | Not verifiable | DNS (shell is offline). |
| D04 | Met (pre-deploy) | No `src="http://"` or `href="http://"` in `dist`. Enforce HTTPS can't be verified. |
| D05 | Met | `dist/404.html` exists. |
| D06 | Met | No `.gitattributes`, so no LFS. |
| D07 | Met | Privacy names GitHub Pages and its IP logging. |
| D08 | Met | `pages: write`, `id-token: write`, `contents: read`, environment `github-pages`, `needs: build`. |
| D09 | Met | configure-pages v6.0.0, upload-pages-artifact v5.0.0, deploy-pages v5.0.1, all pinned by SHA. |
| D10 | Not verifiable | Repository settings. |
| E01 | Met (L8) | `/privacy/` contains "Third-party vendors, including Google, use cookies...", `google.com/settings/ads` and `aboutads.info/choices/`. No vendor list link. |
| E02 | Met in substance | Cookies, web beacons, IP and identifiers are described. Links to `policies.google.com/technologies/partner-sites`; the literal CI string is absent (L7). |
| E03 | Met | — |
| E04 | Met | Funding statement on the About and Editorial pages; no affiliate links. |
| E05 | Met | No testimonials or star ratings; "testimonial" appears only in the FTC-rule guide and the editorial policy. |
| E06 | Met | Generic CA and US-state section present. |
| E07 | Partly met | The cookie table lists Google AdSense, the CMP and GitHub with status. The footer privacy-settings trigger is deferred until the CMP is live. |

Totals (51 rows): Met 35 (including N/A and "Met in substance"; A13 and D04 pass pre-deploy, and their post-deploy checks are pending), Partly met 7 (A03, A16, B01, B02, B10, D01, E07), Not met 2 (A09, B06), Not verifiable 7 (A01, A17, C01, C02, C03, D03, D10).

## 4. Content integrity

### Glossary (14 terms)
- 5 match their claim.
- 9 add material that is in other claims but not in the cited one (M5).
- No definition is false against the claim register.

### Quiz (12 questions)
- All `answer` indices are correct.
- All 12 claims are verified.
- Minor overreach:
  - Q1's question ("must show its country of origin to whom?") assumes the marking purpose, which is not in claim `origin-marking-requirements-05`. The claim only defines the ultimate purchaser.
  - Q4's explanation ("which are added to transaction value") relies on `first-sale-valuation-05`.
- Neither is wrong, but cite the second claim in each.

### Rateboard (9 rows)
- All values equal their verified claims:
  - 0.3464 %, $34.58, $670.86 and 0.125 % (tool-tariff-stack-estimator-01 to -04)
  - 10 % (origin-marking-requirements-20)
  - $39.99 (marketplace-amazon-01)
  - 13.6 % up to $7,500 (marketplace-ebay-01)
  - 6.5 % (marketplace-etsy-01)
  - $100 (marketplace-etsy-10)

### Fee presets
- All 119 margin-calculator presets match the rate and minimum in their verified claims.

### Policy log (13 entries)
- All claims verified.
- 5 summaries exceed their single cite (M6).
- pl-2026-13's `url` differs from its claim's `source_url`; confirm both are the same FR document.

### Random cited-sentence spot check (12 sentences, seed 1107)

| Page | Claim | Result |
|---|---|---|
| customs-holds-and-exams | -10 | Supported (but claim is unverified, H1) |
| hts-classification-basics | -18 | Supported |
| etsy-offsite-ads-economics | -14 | Supported |
| prior-disclosure-protests | -17 | Supported (unverified, H1) |
| de-minimis-suspension-2026 | -08 | Overreach "implements Section 321" (L18) |
| hts-classification-basics | -08 | Supported |
| country-of-origin-sourcing | -07 | Supported |
| accrual-accounting-cogs | -01 (+ -05) | Supported by the pair |
| foreign-trade-zones | -23 | Supported (unverified, H1) |
| entry-type-11-vs-01 | -06 | Supported |
| tariff-stack-2026 | -16 | Supported |
| hts-classification-basics | -03 | Supported |

### Claim register housekeeping
- Every `<C id>` in the MDX exists in the JSON.
- The only unused claim is `marketplace-walmart-04`, which is rejected and correctly removed from the page.

## 5. Originality and scaled-content signals

- **Repeated sentences:** 13 distinct sentences appear on 3 or more of the 26 content pages.
  - Template chrome on 26 pages: the Sources intro (2 sentences) and the error/disclaimer footer (2 sentences).
  - The checklist note on 16 pages.
  - The identical scope callout on 12 + 3 guides.
  - The diagram caption on 6 pages.
  - Repeated source lines on 3 pages each.
- **Templated structure:** every guide has the same skeleton: eyebrow, H1, lede (= meta description), byline, SVG hero, "In short", body, scope callout, "What to check yourself", ad slot, Sources, Related, error line. That is acceptable for a reference site; the scope callout and fixed H2 are the most visible footprints (L5).
- **Near-duplicates:** none between guides (max Jaccard 0.143). Page level: `/news/` vs `/policy-log/` (M4).
- **Padding:** Sources lists restating claims (M3).

## 6. URL migration (URL_ENVANTERI.csv, 153 rows)

| Decision | Rows | Result in `dist` |
|---|---|---|
| YENİDEN YAZ | 47 | 47 real pages exist at the same path (including `/guides/section-321-repeal-2027/`) |
| KORU | 2 | Both exist (`/tools/ppc-budget-calculator/`, `/tools/cash-flow-planner/`) |
| BİRLEŞTİR | 11 | 11 stubs; refresh target and canonical equal `new_url`; every target is a real page; matches `data/redirects.json` 1:1 |
| KALDIR | 93 | No file exists, so GitHub Pages serves `404.html` |

- Mismatches: **none**.
- Pages built but not in the inventory (new): `/disclaimer/`, `/image-credits/`, `/search/`, `/sitemap/`.
- Caveats: 3 weak merge targets (L2); the 4 YENİDEN YAZ guides in H1 rest on unverified claims.

## 7. Technical and SEO

- **H1:** exactly one on every non-stub page (54/54).
- **Canonical:** exactly one on every page, equal to its own URL, except on 404 (L3).
- **Meta description:** present and unique everywhere. 7 non-guide pages exceed 165 characters (privacy 172, resources 185, tariff-stack-estimator 199, cookie-policy 190, disclaimer 182, home 176, costs 166).
- **og:image:** all referenced files exist (27 PNGs), all 1200×630.
- **JSON-LD:** all blocks parse. Article headline and dateModified are truthful. See L17 for the SearchAction.
- **Sitemap:** `sitemap-0.xml` has 52 URLs. That equals the 65 HTML files minus 11 redirects, `/search/` and 404. No redirect, `/search/` or 404 is listed. No `noindex` page is listed.
- **Orphans:** none apart from `/search/`, which is reached by the form.
- **robots.txt:** `User-agent: *` Allow `/`, Disallow `/search/`; Mediapartners-Google Allow; Sitemap line present.
- **ads.txt:** valid, matches the config.
- **Third-party requests:** none.
  - No external `<script>`, `<link>`, `<img>`, `<iframe>` or `<source>` in any HTML file.
  - The CSS and JS in `_assets` contain no absolute URLs.
  - Fonts are self-hosted woff2/woff (IBM Plex Sans and Mono, Source Serif 4).
  - Outbound `<a>` links to primary sources are the only external references.
- **HTML validation:** `npm run gate:html` passes with no output.

## 8. Design vs reference, and accessibility

### Claims in TASARIM_ANALIZI.md, checked against the code

| Claim | Result | Evidence |
|---|---|---|
| No marketplace logos | Confirmed | No `<img>` anywhere; the brand mark is an original inline SVG (`BrandMark.astro`, `aria-hidden`) |
| No stock people or photographs | Confirmed | `/image-credits/` states this too |
| No gradients | One degenerate `linear-gradient(var(--paper), var(--paper))` (L10) | |
| No glass | Confirmed | No `backdrop-filter`, no blur |
| No emoji | Confirmed | Emoji scan of all HTML: none |
| Distinct from the reference | Confirmed | Left-aligned serif headline, ledger panel, numbered lists instead of an icon-card grid, rust/ink/paper palette, mono metadata. Shared only the general IA (menu + search + log) |
| Typefaces | Confirmed | Fonts match (Source Serif 4, IBM Plex Sans and Mono); tokens match (`--ink #15202b`, `--paper #fbfaf7`, `--tag #b4400f`, `--link #1c4f86`) |

- The menu has 6 groups plus a "Free calculators" CTA, as described.
- Screenshot QA at breakpoints was not possible for this audit either (no browser).

### Accessibility from markup

**Markup checks**
- **Skip link:** present.
- **Search:** `<label class="vh" for="q">`.
- **Labels:** every input is labelled. Quiz and checklist radios and checkboxes are wrapped in `<label>`; the scripted unlabeled-input warnings were false positives.
- **Dynamic regions:** quiz score has `aria-live="polite"`. Breadcrumbs use `aria-current`.
- **SVG:** every SVG has either `aria-hidden` (decoration and brand mark) or `role="img"` plus a full `aria-label`. Bars charts also have a data table. Bar labels are truncated visually ("Section 232 steel/aluminum ba…") but complete in `aria-label`.
- **Mobile nav:** needs JS (L11).

**WCAG 2.x contrast, computed**

| Text token | on paper #fbfaf7 | on sheet #fff | Notes |
|---|---|---|---|
| ink #15202b | 15.80 | 16.49 | AAA |
| ink-2 #3d4a57 | 8.69 | 9.07 | AAA |
| ink-3 #5f6b77 | 5.22 | 5.45 | AA (4.46 on rule-2, which isn't used as a text background) |
| tag #b4400f | 5.47 | 5.71 | AA; white on tag 5.71, white on hover #92330b 7.78 |
| link #1c4f86 | 8.01 | 8.36 | AAA |
| ok #2f6b3a | 6.12 | 6.39 | AA |
| warn #8a5a00 | 5.68 | 5.93 (5.42 on warn-soft) | AA |
| data-2 #c26a00 | 3.76 | 3.92 | Used only as a bar fill. Meets the 3:1 non-text minimum but must never be used for text |
| data-3 #2f7a6d | 4.88 | 5.09 | Bar fill |
| Footer #cdd5dc on ink | 11.11 | | |
| Footer legal #aeb9c4 on ink | 8.27 | | |
| Utility bar #dfe5ea on ink | 12.98 | | |
| Tool-strip span #c3ccd5 on ink | 10.15 | | |
| Placeholder (browser default) | 4.41 | | L19 |

All text tokens pass AA (4.5:1) on paper and sheet. tag on ink (2.89) would fail, but no instance was found.

---

## Release blockers (in order)
1. H1: verify or withdraw the 4 unverified guides, and rebuild without `ALLOW_UNVERIFIED`.
2. H2: owner confirms the publisher, editor and contact, then sets `ownerConfirmed: true`.
3. H3: a named human reviews every page and records `reviewedBy`/`reviewedDate`; render it in the byline.
4. M1 and M2 before `adsEnabled` is ever set to `true`.
5. M3, M4, M5, M6 and M7 before requesting AdSense review, because they bear directly on the earlier "low value content" reason.
