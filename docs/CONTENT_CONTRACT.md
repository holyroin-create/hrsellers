# fbatactics.com v3 — Content contract (binding for every writer and verifier)

Session date: 2026-11-08 (use for `modified`, `lastVerified`, `accessed`). Language: American English.
Audience: US small/mid-size sellers who import goods and sell on Amazon, Walmart, eBay, Etsy, Shopify.
Promise: "Fees, duties and rules for marketplace sellers — explained clearly, checked against the official source."

## 1. Sources (primary only)
Allowed (render in WebFetch): eCFR (www.ecfr.gov/current/...; if a section URL is robots-blocked use the part/subpart URL and ask for the section text), Federal Register (document pages; if blocked use https://www.federalregister.gov/api/v1/documents/NNNN.json or govinfo.gov HTML to read, but put the human-readable document page in `source_url` and the URL you read in `fetched_via`), govinfo.gov, irs.gov, usitc.gov, sell.amazon.com, marketplace.walmart.com, ebay.com/help, etsy.com/legal, shopify.com/pricing, and any other official .gov / platform page you can actually fetch (e.g. uspto.gov, gs1us.org, a state revenue department) — test it first.
Known unfetchable: sellercentral.amazon.com help, cbp.gov, ftc.gov, cpsc.gov, uscode.house.gov, seller-us.tiktok.com, web.archive.org. A fact only available there is dropped.
Forbidden: blogs, vendors, agencies, forums, news, aggregators, Cornell LII, wikis, AI sites, memory.
Every factual statement (number, rate, threshold, date, deadline, legal requirement, platform rule) must come from a page you fetched in this session whose text contains it. Arithmetic is allowed when labeled "Worked example (hypothetical)" with stated inputs.

## 2. Files
- `src/content/<collection>/<slug>.mdx` — collections: `guides`, `marketplaces`.
- `data/claims/<slug>.json` — array of claim objects:
```json
{"claim_id":"<slug>-01","claim":"one sentence fact as stated on the page","page":"/guides/<slug>/",
 "source_url":"https://…","fetched_via":"(only if different)","publisher":"e.g. eCFR — Office of the Federal Register",
 "source_type":"regulation | federal-register-notice | statute | official-pricing-page | official-documentation | official-publication",
 "accessed":"2026-11-08","evidence":"verbatim excerpt ≤25 words from the fetched text","archive_url":"",
 "produced_by":"<agent>","verified_by":"","status":"drafted"}
```
Every `<C id/>` and every `claim` prop must exist in the JSON, and every JSON claim must be cited on the page.

## 3. Frontmatter
```yaml
---
title: "Specific, plain headline (≤ 65 chars)"
description: "140–158 chars, what the reader gets"
pillar: "importing"        # importing | fees | compliance | money
type: "guide"              # guide | reference
published: "2026-11-08"
modified: "2026-11-08"
lastVerified: "2026-11-08"
minutes: 8
photo:                     # brief for the photo editor (no URLs): what a real, editorial photo should show
  subject: "stacked shipping containers at a port terminal, no people, no logos"
  alt: "Shipping containers stacked at a port terminal"
keyFacts:                  # 3–5 cards shown at the top; each value a cited fact
  - { label: "Bond minimum", value: "$100", claim: "<slug>-04" }
summary: ["3–5 self-contained bullet sentences, each fact cited in the body"]
faq:                       # 3–6 Q&As; questions ONLY from research/faq-bank.json (real Google autocomplete questions) when relevant; answers 1–3 sentences, cited
  - { q: "How much is a customs bond?", a: "…", claims: ["<slug>-04"] }
related: ["slug", "slug"]
---
```

## 4. Body components (no imports needed)
- `<C id="x"/>` citation marker after the sentence it supports.
- `<Callout type="tip|warning|note|example" title="…">…</Callout>`
- `<Steps title="…" steps={[{t:"Step title", d:"one or two lines", claim:"optional-id"}]} />` numbered process
- `<Timeline title="…" items={[{date:"YYYY-MM-DD", t:"…", d:"…", claim:"id"}]} />` real dates only
- `<Chart title="…" kind="bar|column" unit="%|$|days" rows={[{label:"…", value:12, claim:"id"}]} />` exact sourced numbers
- `<Compare title="…" columns={["Option A","Option B"]} rows={[{label:"…", values:["…","…"], claim:"id"}]} />` side-by-side comparison card
- `<Decision title="…" rows={[{if:"If your situation is…", then:"What applies", claim:"id"}]} />` decision table
- `<Checklist title="…" items={["…"]} />` printable
- `<Stat value="$34.58" label="…" claim="id" />` inline big-number card (use ≤2 per page)
- Markdown tables are allowed; put a line under each: `*Source: <publisher>, checked Nov 8, 2026.* <C id="…"/>`

## 5. Page standard
- H2 sections (H3 allowed); no H1 in body.
- Required: photo brief, keyFacts (3–5), summary, ≥3 visual/structured elements from section 4 (tables count), one original decision element (Decision table, hypothetical worked example, or common-mistakes table), FAQ (3–6), and a final H2 "How to confirm it for your goods" (or a page-specific variant) pointing to the primary source.
- Body 1,200–2,200 words. Answer the reader's question in the first paragraph. Specific, concrete, no filler, no throat-clearing, no repeated boilerplate across pages.
- Never claim experience, testing, clients, interviews; no invented people, quotes, stats, case studies.
- Not legal/tax advice: one short page-specific scope note (e.g. which formal route settles the question) — do not reuse identical wording.
- No mention of AI, affiliates, ads, or this contract. No third-party software names.

## 6. Verifier rules (verifiers only)
Re-fetch every source (ask WebFetch for the verbatim passage). Set `status:"verified"`, `verified_by:"<you>"` only when the fetched text states the claim exactly (numbers, days vs business days, scope, conditions). Otherwise correct claim + sentence in place from the fetched text (keep `produced_by`, explain in `verifier_note`) or set `status:"rejected"` + note and remove the sentence and markers. Do not create new claim objects. Remove uncited factual sentences. Recompute arithmetic. Check keyFacts/FAQ answers against their claims. Write `docs/verification/<you>.md`.
