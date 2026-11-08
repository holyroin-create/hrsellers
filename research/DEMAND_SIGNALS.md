# Demand Signals: Google Autocomplete (R1)

- **Source:** Google's own autocomplete endpoint only (`suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us`).
- **Fetched:** 2026-11-08
- **Raw data:** `suggest-raw.json` (niche → seed → suggestions), `faq-raw.json` (Task B queries), `faq-bank.json` (filtered FAQ questions)

> **Important caveat:** autocomplete shows that demand **exists** and how **broad** it is, meaning how many distinct ways people phrase it. It does **not** measure search volume. Google returns at most about 10 suggestions per query and filters some. A niche with more distinct suggestions has a wider long tail. That does not mean it has more searches. Nothing here should be read as a traffic estimate.

## Method
- **Seeds:** each niche got 7–9 base seeds. Its 2 strongest seeds were then expanded as `<seed> c`, `<seed> f`, `<seed> h`, `<seed> p`, `<seed> t` and `<seed> s` (6 letters, the same set for every niche). That makes 19–21 queries per niche and 159 queries in total.
- **Distinct count:** the number of unique suggestion strings across all of a niche's queries. The seed string itself is included when Google echoed it back.
- **Commercial/cost intent:** suggestions matching any of `fee(s)`, `cost(s)`, `rate(s)`, `price/prices/pricing`, `calculator(s)`, `how much`, `tax(es)`, `duty/duties` as whole words.
- **Format fit:** suggestions matching `calculator`, `chart`, `table` or `checklist`. A secondary count covers `template`, `pdf`, `example`, `sample`, `lookup`, `finder`, `list`, `by state` and `by category`.
- **Recency load:** suggestions containing 2026 or 2027.
- **Questions:** suggestions starting with how, what, when, why, is, are, do, does, can, who or where.
- **No filtering:** shares are computed on the raw union. That union includes non-US variants (India, UK, Canada and others) and off-topic collisions, which are listed in the notes.

## Summary table

| # | Niche | Queries (base + letter) | Distinct suggestions | Commercial/cost intent | Format fit: calc/chart/table/checklist | Template/lookup-type | 2026/2027 | Question-form | Non-US variants | vs/or comparisons |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Marketplace selling fees | 9 + 12 | 162 | **155 (96%)** | **33 (20%)** | 3 | 4 (2%) | 6 | 33 | 8 |
| 2 | US import duties & customs | 8 + 12 | **193** | 82 (42%) | 23 (12%) | 11 | 2 (1%) | 0 | 40 | 2 |
| 3 | Amazon FBA operations | 7 + 12 | 98 | **75 (77%)** | 16 (16%) | 1 | 2 (2%) | 6 | 8 | 0 |
| 4 | Product compliance | 8 + 12 | 141 | 4 (3%) | 0 (0%) | **16** | 1 (1%) | **13** | 11 | 0 |
| 5 | Ecommerce accounting & sales tax | 8 + 12 | 149 | 101 (68%) | 6 (4%) | 9 | 1 (1%) | **13** | 5 | 3 |
| 6 | Shipping & dimensional weight | 8 + 12 | 181 | 120 (66%) | 27 (15%) | 0 | **6 (3%)** | 3 | 9 | 3 |
| 7 | TikTok Shop / social commerce | 7 + 12 | 128 | 16 (12%) | 2 (2%) | 0 | 1 (1%) | 12 | 17 | 0 |
| 8 | Seller software reviews | 8 + 12 | 189 | 16 (8%) | 2 (1%) | 1 | 0 (0%) | 1 | 4 | **13** |

The question counts above come only from Task A seeds, which were not phrased as questions. Task B collected questions directly. Its 527 questions across 22 topics are in `faq-bank.json`.

## Notable question-form suggestions (Task A)
1. **Fees:** "what are the fees for amazon seller", "are etsy fees higher than ebay", "is walmart marketplace more expensive than walmart"
2. **Customs:** none in Task A seeds. Task B returned many, for example "who pays import tariffs the buyer or the seller", "do section 301 and 232 tariffs stack", "when will de minimis come back" and "how much customs bond do i need".
3. **FBA:** "how fba fees are calculated", "how are fba storage fees calculated", "how much are fba storage fees", "what is fba prep"
4. **Compliance:** "how to get children's product certificate (cpc)", "where to find children's product certificate", "how to get cpsc certification", "what is cpsia compliant", "can you ship lithium batteries", "does shipping lithium batteries cost more", "how to pack lithium batteries for shipping"
5. **Accounting/tax:** "does amazon collect sales tax for sellers", "does amazon issue 1099 to sellers", "how to determine sales tax nexus", "what is economic nexus for sales tax", "is inventory cogs"
6. **Shipping:** "what is dim weight", "how to get dim weight". Note that "does dim help weight loss" is noise.
7. **TikTok:** "how to sell on tiktok shop" plus 9 variants (beginners, without followers, without inventory, live, for commission), and "is tiktok for business free"
8. **Software:** "does helium 10 have a free trial"

## Observations by niche (confidence-labelled)
- **[Kesin] Fees (1)** has the densest cost intent (96%) and the best calculator fit (20%). These come from "calculator", "per sale", "by category", "chart" and "table". It is also crowded with "X vs Y" platform comparisons. Some suggestions are year-stamped: "etsy fees 2026", "ebay seller fees 2026", "tiktok shop fees 2026" and "etsy fees calculator 2026".
- **[Kesin] Customs (2)** is the broadest long tail (193). It contains a large product-specific HTS cluster: "hts code for books / stickers / socks / cardboard boxes / trading cards", "hts code tariff lookup", "hts code section 232". It is also the noisiest niche: 40 non-US variants, plus legal and tax meanings of "de minimis" and "customs duty crossword clue".
- **[Olası]** The HTS product tail suggests demand for programmatic "HTS code for X" pages or a lookup tool. Autocomplete cannot show whether those queries have meaningful volume.
- **[Kesin] FBA (3)** has narrow breadth: letter expansions dried up to 2–5 suggestions. Its cost intent is strong (77%), with calculator, chart, table and size-tier wording. Year-stamped suggestions include "fba fees 2026" and "fba storage fees 2026".
- **[Kesin] Compliance (4)** has almost no cost words, but it leads on document-format intent (template, pdf, example, sample, lookup) and on questions. Lithium shipping forms a carrier × destination matrix: USPS, UPS and FedEx crossed with Hawaii, Alaska, Puerto Rico and international.
- **[Kesin] Accounting/tax (5)** has state-by-state nexus demand: "by state chart", "threshold by state", "by state 2026", plus individual states. That is a natural fit for a table. "marketplace facilitator" is polluted by food-delivery contexts (DoorDash, Uber Eats, Toast). "inventory accounting for ecommerce" returned no suggestions.
- **[Kesin] Shipping (6)** carries the most 2026 suggestions, all about rate changes: "usps rate changes 2026", "usps rate hike 2026", "usps holiday rates 2026", "ups/fedex rates 2026". That means a high update burden. It also shows calculator intent across UPS, FedEx, USPS and DHL. "dim weight loss" (a supplement) is noise.
- **[Kesin] TikTok (7)** is mostly navigational: seller center, login and sign-up. It has many non-US markets, and three letter expansions ("tiktok shop fees h/p/t") returned nothing.
- **[Kesin] Software (8)** is navigational and brand-led: login, coupon, pricing, free trial, extension. Head-to-head intent ("helium 10 vs jungle scout", "vs keepa", "smartscout vs") is the only comparison-heavy niche. There is brand noise: keepass, "jungle scout fortnite", "smartscout baseball".

## Limitations
- One snapshot with US/English settings. Suggestions are personalised and filtered, and they change over time.
- Shares depend on which seeds were chosen. Comparing niches is directional, not exact.
- The `rate` keyword also matches phrases like "fulfillment rate", and `fee` hits are partly non-US. Treat percentages as approximate (±5–10 points).
- These pages were rate-limited on the first try and later succeeded: fba storage fees, fba inbound placement fee, fba low inventory fee, cpsia testing, dim weight f, "can you pay for reviews" and "are fake reviews illegal". No query was permanently lost.
