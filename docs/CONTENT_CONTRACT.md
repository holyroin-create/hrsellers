# fbatactics.com — Content contract (binding for every writer and verifier agent)

Date of this session: 2026-11-08. Use it as `modified`, `lastVerified` and `accessed`.
Language: American English. Audience: US-based small and mid-size marketplace sellers who import goods
(Amazon, Walmart, eBay, Etsy, Shopify sellers). Site promise: "Marketplace fees and US import rules,
read from the primary source."

## 1. Sources — the only acceptable kinds
Primary only: the body that issues the rule or fee.
- Regulations: eCFR (https://www.ecfr.gov/current/title-XX/...) — renders fine in WebFetch. Prefer section-level URLs, e.g. https://www.ecfr.gov/current/title-19/chapter-I/part-134/subpart-A/section-134.11
- Federal Register documents (https://www.federalregister.gov/documents/YYYY/MM/DD/...). Search via the API: https://www.federalregister.gov/api/v1/documents.json?conditions[term]=...&order=newest&per_page=20 (the HTML search page is robots-blocked; the API and document pages work).
- Official platform pages that render without login: https://sell.amazon.com/pricing (and other sell.amazon.com pages), https://marketplace.walmart.com/..., https://www.ebay.com/help/..., https://www.etsy.com/legal/fees/, https://www.shopify.com/pricing, https://www.irs.gov/publications/..., docs.github.com, support.google.com.
- Known NOT verifiable from this session (do not cite unless you yourself fetched and saw the claim): sellercentral.amazon.com help pages (JS only), cbp.gov, ftc.gov, cpsc.gov, uscode.house.gov, seller-us.tiktok.com, web.archive.org. If a fact can only be sourced there, DROP the fact.
- Forbidden: blogs, vendors/agencies, forums, news sites, aggregators, Cornell LII, Wikipedia, AI sites, anything you did not open in this session.

Every factual statement (rate, threshold, date, deadline, legal requirement, definition attributed to a law)
must be backed by a source you fetched with WebFetch in this session AND whose fetched text contains the claim.
If you cannot fetch it, the sentence does not get written. Do not rely on memory for any number, date, or section
number. Arithmetic examples are allowed if labeled "Worked example" and the inputs are stated as hypothetical.

## 2. Files you write
1. `src/content/guides/<slug>.mdx` (or `src/content/marketplaces/<slug>.mdx` for marketplace pages).
2. `data/claims/<slug>.json` — JSON array, one object per claim:
```json
{
  "claim_id": "<slug>-01",
  "claim": "One sentence, the exact fact as stated on the page",
  "page": "/guides/<slug>/",
  "source_url": "https://...",
  "publisher": "e.g. Office of the Federal Register / National Archives (eCFR)",
  "source_type": "regulation | federal-register-notice | official-pricing-page | official-documentation | official-publication",
  "accessed": "2026-11-08",
  "evidence": "short excerpt from the fetched page, max 25 words, that proves the claim",
  "archive_url": "",
  "produced_by": "<your agent name>",
  "verified_by": "",
  "status": "drafted"
}
```
IDs are `<slug>-NN`, zero-padded, unique. Every `<C id="..."/>` used in MDX must exist in the JSON and vice versa.
Several sentences may cite the same claim id only if that one source passage supports all of them.

## 3. MDX format
Frontmatter (all required unless marked):
```yaml
---
title: "Plain, specific headline (max 70 chars)"
description: "140–160 chars, says what the reader gets"
category: "Import & customs" # or "Marketplace fees" | "Product compliance" | "Operations & accounting"
published: "YYYY-MM-DD"   # given to you in your brief (original date for existing URLs)
modified: "2026-11-08"
lastVerified: "2026-11-08"
minutes: 9                # reading time, words/230 rounded
summary:                  # 3–5 bullet strings, each self-contained, each fact cited in body
  - "..."
hero:                     # original data graphic, rendered as SVG by the site. Pick ONE kind:
  kind: "stat"            # stat | flow | timeline | compare
  figure: "$800"          # stat: headline figure (must be a cited claim)
  label: "short label under the figure"
  claim: "<slug>-03"
  # flow:     steps: ["Step", "Step", "Step", "Step"]     (2–6 short labels), claim optional
  # timeline: items: [{date: "2025-08-29", label: "..."}]  (2–6), claim required
  # compare:  unit: "%" rows: [{label: "...", value: 15}] (2–6), claim required
related: ["other-slug", "other-slug"]   # optional, slugs from your brief list
---
```
No import lines. These components are available globally:
- `<C id="slug-01" />` — citation marker. Place right after the sentence/clause it supports.
- `<Callout type="note|warning|example" title="...">markdown text</Callout>`
- `<Flow title="..." steps={[{t: "Label", d: "one line"}]} claim="slug-04" />` — process diagram (claim optional if steps are site-authored method, then say so in title, e.g. "Suggested order of checks")
- `<Timeline title="..." items={[{date: "YYYY-MM-DD", t: "label", d: "one line", claim: "slug-05"}]} />`
- `<Bars title="..." unit="%" rows={[{label: "...", value: 15, claim: "slug-06"}]} />` — chart + accessible table auto-generated; values must be exact sourced numbers
- `<Checklist title="..." items={["...", "..."]} />` — printable checklist of actions (procedural, may cite)
- Markdown tables: put a line directly below each table: `*Source: <publisher, page name>, checked Nov 8, 2026.* <C id="..."/>`

Structure: H2 sections only for main structure (H3 allowed). No H1 in body (the title is the H1).
Required per guide: hero + at least TWO of (table, Flow, Timeline, Bars, Checklist). Length 1,100–2,200 words of body.
End every guide with an H2 "What to check yourself" giving concrete steps where the reader confirms on the primary source.

## 4. Writing standard
- Answer the query in the first two paragraphs. Specific, concrete, no filler, no throat-clearing.
- Never claim experience, testing, interviews, clients, "we've seen", "in our experience". No invented people, quotes, anecdotes, case studies, statistics.
- Not legal/tax advice: one neutral line in a note where the topic is legal or tax ("This page summarizes the rule; for a ruling on your goods, CBP binding rulings or a licensed customs broker are the route.") — keep it factual.
- No mention of affiliate programs, tools for sale, discounts, or "click here". No ad references.
- No copying of source wording beyond short quoted terms of art (definitions) under 15 words, in quotation marks.
- No cross-page repetition: each page has its own angle; link related slugs with relative links `/guides/<slug>/`.
- Do not mention AI. Do not mention this contract.

## 5. Verifier rules (verifier agents only)
Open every `source_url` yourself with WebFetch. For each claim set:
- `status: "verified"` and `verified_by: "<your name>"` only if the fetched page states the claim (numbers, dates, scope all match).
- otherwise `status: "rejected"` and add `"verifier_note": "why"`. Then edit the MDX: remove or correct the sentence (correct only with a fetched primary source; add new claim objects as needed, marked verified by you only if you fetched them — and note `"produced_by": "<you>"`).
Also check: worked-example arithmetic, every `<C>` id exists, no forbidden source, no experience claims, frontmatter valid.
Write a short report to `docs/verification/<your-name>.md`: per page — claims checked, verified, rejected, edits made.
