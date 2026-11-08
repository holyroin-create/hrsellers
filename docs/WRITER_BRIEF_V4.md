# Writer brief v4 — rebuilding the retired URLs (binding, read fully)

Session date 2026-11-08. Repo: /home/claude/fbatactics-v3. Read `docs/CONTENT_CONTRACT.md` first; this brief adds to it and wins where they differ.

## Goal
Each assigned URL existed on the old site and is indexed. Write a brand-new page at **exactly that URL** (same slug), from primary sources only. Do not look at or reuse any old text. Title, description and headings must fit the new content while staying on the topic the slug names (the old page's topic).

## Files
- Guides: `src/content/guides/<slug>.mdx` + `data/claims/<slug>.json` (claim ids `<slug>-01`…).
- Marketplaces: `src/content/marketplaces/<slug>.mdx` + `data/claims/marketplace-<slug>.json` (ids `marketplace-<slug>-01`…).
- Seller software (URL /reviews/<slug>/): `src/content/reviews/<slug>.mdx` + `data/claims/<slug>.json` (ids `<slug>-01`…), `pillar: "operations"`, `type: "reference"`.
- `pillar`: importing | fees | compliance | money | operations (operations = Amazon/marketplace selling operations: listings, inventory, fulfillment programs, account health, ads, software).
- `photo`: give `subject` and `alt` for a future dedicated photo AND set `image:` to the best-fitting existing verified photo id from `docs/photo-catalog.md` (used until a dedicated photo is approved). The alt you write must describe that fallback photo truthfully.
- `produced_by`: your agent name. `verified_by`: "" and `status`: "drafted" — a different agent verifies.

## Sources (primary only, fetched in this session with WebFetch)
Readable and allowed (test first): sell.amazon.com (Amazon's public seller site, incl. /pricing, /pricing/optional-costs, /fulfillment-by-amazon, /programs/*, /brand-registry, /tools/*, /learn/*, and Amazon's own /blog posts on sell.amazon.com — label source_type "official-documentation"), advertising.amazon.com (Amazon Ads' own pages), developer-docs.amazon.com (Selling Partner API docs, which document report types, fees, inventory, listings rules), ir.aboutamazon.com and aboutamazon.com (Amazon's own releases), marketplace.walmart.com / sellerhelp.walmart.com, ebay.com/help, etsy.com/legal, shopify.com, eCFR, Federal Register, govinfo, irs.gov, sba.gov, fmc.gov, trade.gov, usitc.gov, ustr.gov, uspto.gov, usps.com, gs1us.org, gov.uk, eur-lex.europa.eu, canada.ca, a software vendor's own site for its own product (only on /reviews/ pages). Anything else official you can actually fetch is fine; list new hosts in your final report.
Not readable (do not cite): sellercentral.amazon.com help pages (JavaScript shell), cbp.gov, ftc.gov, cpsc.gov, uscode.house.gov, seller-us.tiktok.com, web.archive.org.
Forbidden: blogs other than the platform's own, news, agencies, consultants, forums, Reddit, YouTube, aggregators, Wikipedia, AI sites, your memory.
Every fact must appear in text you fetched. `evidence` = verbatim excerpt ≤ 25 words. If a statement cannot be supported, leave it out. No invented numbers, quotes, cases, testimonials, "we tested", "sellers report", benchmark figures without an official source, or predictions. Hypothetical arithmetic only inside a block labelled "Worked example (hypothetical)" with stated inputs.

## When the topic cannot be sourced
Some slugs name things only documented inside Seller Central (e.g. a specific internal fee name or metric). Then:
1. Write the page around what IS publicly documented by the platform on the same topic (e.g. the program, fee or policy as described on sell.amazon.com or in SP-API docs), and say plainly in one sentence that the detailed rule is published inside Seller Central and should be checked there. Do not describe the unpublished rule.
2. If the public sources cannot support at least ~700 words of substantive, non-repetitive body text on the topic, still create the files but set `draft: true` in frontmatter and explain why in your report. Never pad.

## Page standard
- Body 900–1,800 words of substantive text (minimum ~700 if the sources are thin — never filler). Rendered page incl. key facts, FAQ and sources must reach 1,000 words (800 for /reviews/).
- Open with what the reader needs to decide; use at least one decision element (Decision, Compare, Checklist or Steps) built from cited facts; one worked example where arithmetic helps; end with an H2 "How to confirm" naming the official page(s) to re-check.
- Avoid overlap with existing pages: link to them instead (existing slugs: `ls src/content/guides src/content/marketplaces`). Do not restate their content at length.
- /reviews/ pages: title like "<Tool>: features and pricing from the vendor's own pages"; first paragraph must say the page summarizes the vendor's published information, the tool was not tested, and the site has no affiliate relationship. No ratings, scores, pros/cons verdicts or "best for" claims. Cover: what it is, which marketplaces/data, plans and prices (with the date checked), free trial/cancellation terms if published, where the vendor publishes its privacy/terms, and how it relates to Amazon's own free tools (only if sourced).
- Dates: published/modified/lastVerified "2026-11-08". Anything time-sensitive (2026 fee changes, deadlines) must give the effective date from the source.
- FAQ (0–5 items): questions must be real Google suggestions. Fetch `https://suggestqueries.google.com/complete/search?client=firefox&q=<url-encoded topic>` with WebFetch, and append one line per query to `research/suggest-v4-<your-agent-name>.jsonl` as `{"q":"<query>","suggestions":["...","..."]}`. Use a suggestion's wording (fix only capitalization and add "?"). If none fit, omit the FAQ.
- `related`: 2–4 existing or assigned slugs.

## Self-check (do NOT run astro build — other agents share the folder)
`node tools/check-page.mjs guides/<slug> reviews/<slug> marketplaces/<slug>` must print no ERROR for every page you deliver (draft pages included).

## Report
Reply with a table: URL | status (written / draft) | body words | claims | main source hosts. Then list new hosts used and any slug whose topic you had to narrow, with one line why.
