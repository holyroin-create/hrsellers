# verifier-V3 report (2026-11-08)

I fetched these sources once each with WebFetch, plus one follow-up fetch of sell.amazon.com/pricing to get the exact tier wording:
- https://sell.amazon.com/pricing: plans, how referral fees are calculated, the full referral fee table (38 rows), the closing fee and the footnotes
- https://sell.amazon.com/fulfillment-by-amazon: FBA cost categories (the page has no per-unit fee figures)
- https://marketplace.walmart.com/referral-fees/: fee statements, the full referral table (35 rows) and the column headers
- https://marketplace.walmart.com/walmart-fulfillment-services-pricing/: fulfillment fees, surcharges, storage and notes
- https://marketplace.walmart.com/walmart-fulfillment-services/: the no-fees statement and the size and weight limits

## /marketplaces/amazon/ (amazon.mdx + marketplace-amazon.json)
- Claims checked: 52. Verified: 52. Rejected: 0.
- Corrected and verified: marketplace-amazon-47. The page links price, weight and dimensions to *fulfillment* costs, not to all FBA costs. I narrowed the claim text and the MDX bullet to match, and added a verifier_note.
- MDX edits:
  - Removed "has no monthly charge but" from the Individual plan sentence. The page does not state it.
  - Summary bullet 5 now says that fulfillment costs depend on price, weight and dimensions.
  - The Source line under the plan table cited -04 (the switch/cancel claim). It now cites -01 (the plan price).
- Worked example ($25, hypothetical): all correct.
  - 15% x 25 = 3.75; +0.99 = 4.74
  - 17% x 25 = 4.25
  - 8% x 25 = 2.00
  - 3.75 + 1.80 = 5.55
  - 39.99 / 0.99 ≈ 40.4; 39.99 / 100 ≈ 0.40; 39.99 / 1,000 ≈ 0.04
  - The $0.30 minimum binds below $2.00 at 15%.
  - $20 + $5 shipping gives a $3.75 fee.
- `<C>` ids match the JSON in both directions. Sources are primary only. No experience claims. Frontmatter is valid (description is 160 characters).

## /marketplaces/walmart/ (walmart.mdx + marketplace-walmart.json)
- Claims checked: 48. Verified: 47. Rejected: 1. Added: 1.
- Rejected: **marketplace-walmart-04**, "no minimum referral fee column". The brief called this claim -03. In the file, -03 is the total-sales-price definition, which the page states verbatim, so -03 is verified. The page shows only the two column headers and has no sentence about a minimum.
- Added: **marketplace-walmart-49**, which says the table has two columns, Product Category and Referral Fee Percentage. It is produced_by and verified_by verifier-V3, and I saw it on the page.
- MDX edits:
  - The "No minimum in the table... unlike some marketplaces" bullet is now "Table layout: ... two columns ..." and cites -49.
  - Category names now match the page: "Beauty, Health and Personal Care", "Jewelry and Precious Metals", "Outdoors Products and Sports". The claim text for -11, -20 and -25 changed to match.
  - The description no longer says "every category". The page has 4 rows that the MDX table leaves out:
    - Collectibles (for approved sellers) 8%
    - Music 15%
    - Software & Computer Video Games 15%
    - Video & DVD 15%

    A writer can add them as new claims if wanted.
- Worked examples: all correct.
  - $20 → $2.00; $21 → $3.15; +$1.15
  - $10 → $0.80; $11 → $1.65
  - Jewelry $300 → 50.00 + 2.50 = $52.50
  - $19 + $3 = $22 at 15%
  - WFS: 3.75 + 3.45 = 7.20; 3.45 + 0.50 = 3.95, giving a 7.70 total; 2.00
  - 0.1 cu ft x 0.75 = $0.075
  - $9 item: 3.45 + 1.00
- Note: the WFS pricing page contradicts itself on long-term storage. The table says $2.25 from 366 to 450 days. The estimator text says "more than 12 months" at $2.25. Claim -48 follows the table and is verified.
- **Gate conflict:** tools/gate-claims.mjs fails a claim when produced_by equals verified_by, so -49 currently gives "verified by its own producer". Contract section 5 says the verifier who adds a claim marks it verified. A second verifier needs to re-fetch the referral-fees page and sign -49, or the bullet must be dropped.

## /tools/margin-calculator/ (fee-presets.json + tool-margin-calculator.json): Amazon and Walmart only
- Claims checked: 69 (-01 to -38 Amazon, -39 to -69 Walmart). Verified: 69. Rejected: 0. I left -70 to -84 (eBay, Etsy, Shopify) untouched for verifier-V4.
- Presets checked: 95 (51 Amazon, 44 Walmart).
  - Every rate_pct and min_fee_usd equals its claim, checked with a script.
  - Every tier is paired with the right band.
  - Every claim matches the fetched table. Amazon minimums are $0.30, with none listed for Gift Cards, Grocery, Media, Video Games and Consoles. Fine Art has a $1.00 minimum. Walmart minimums are null, which is consistent with the page.
- Edits: the claim text for -59, -62 and -68 and three Walmart preset labels now use the page's category names. Rates are unchanged.
- All four JSON files parse.
