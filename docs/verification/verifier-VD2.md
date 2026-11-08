# verifier-VD2: eBay, Etsy, Shopify marketplace pages + margin-calculator presets

Date: 2026-11-08. Method: each source fetched once with WebFetch (asked for the complete fee details, verbatim), then compared locally against every claim, page sentence, keyFact, FAQ answer, worked example and preset row.

## Sources re-fetched
| Source | Used by |
|---|---|
| https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822 | marketplace-ebay-01..19, tool-margin-calculator-74..85, 95 |
| https://www.ebay.com/help/selling/fees-credits-invoices/store-selling-fees?id=4122 | marketplace-ebay-20..28, tool-margin-calculator-86..87 |
| https://www.etsy.com/legal/fees/ (Last updated Oct 5, 2026) | marketplace-etsy-01..06, 09..20, tool-margin-calculator-88, 90..92 |
| https://www.etsy.com/legal/etsy-payments/ | marketplace-etsy-07..08, tool-margin-calculator-89 |
| https://www.shopify.com/pricing | marketplace-shopify-01..11, tool-margin-calculator-93..94 |

## Results
| File | Claims | Verified | Corrected in place (then verified) | Rejected |
|---|---|---|---|---|
| data/claims/marketplace-ebay.json | 28 | 26 | 2 (ebay-02, ebay-15) | 0 |
| data/claims/marketplace-etsy.json | 20 | 19 | 1 (etsy-15) | 0 |
| data/claims/marketplace-shopify.json | 11 | 11 | 0 | 0 |
| data/claims/tool-margin-calculator.json (74–95 only) | 22 | 22 | 0 | 0 |
| data/fee-presets.json (eBay 20, Etsy 5, Shopify 8 rows) | 33 rows | 33 match claims | 0 | 0 |

### Corrections
- **marketplace-ebay-02**: eBay includes buyer-paid shipping in the total amount of the sale "with some exceptions" (for example, the fee is based on the cheapest domestic option when 1-day or international shipping is also offered). I added that qualifier to the claim, the intro sentence and the "Does eBay charge fees on shipping?" FAQ answer.
- **marketplace-ebay-15**: the page says "up to 250 zero insertion fee listings per month", and the $0.35 fee is "per listing in most categories". The draft wrongly made "free in most categories" the condition. I fixed the claim, intro, summary, keyFact label and FAQ answer.
- **marketplace-etsy-15**: the Offsite Ads fee base (total order amount) also includes taxes in some jurisdictions. I added that to the claim and to the fee-schedule table cell.

### Other page edits
- **eBay FAQ**: replaced "Does eBay charge seller fees for poor performance?", which is not in the FAQ bank, with "What percentage is eBay final value fee?" from research/faq-bank.json (topic "ebay final value fee"). The answer is built from claims ebay-04, 05, 06, 12 and 25.
- **Shopify intro**: "Shopify does not take a marketplace commission" was an uncited inference. It now reads "Shopify's pricing page lists a monthly plan fee plus payment processing…".
- **Shopify, blended rate**: "usually understates costs" was an unsupported generalization. Changed to "can understate costs".
- **Shopify, 30¢ sentence**: "it is about 4.1% of a $25 sale" read as though the 30¢ alone was 4.1%. Changed to "the total fee is about 4.1%…".

### Arithmetic recomputed (all correct as published)
- **eBay, $25 / $100, plus $0.40 per order** (all rows match):

  | Rate | $25 | $100 |
  |---|---|---|
  | 13.6% | $3.80 | $14.00 |
  | 12.7% | $3.58 | $13.10 |
  | 15.3% | $4.23 | $15.70 |
  | 13.25% | $3.71 | $13.65 |
  | 6.7% | $2.08 | $7.10 |

  - $108 tax example: $15.09, which is $1.09 more than the $100 sale with no tax.
  - Basic Store break-evens: $21.95 ÷ 0.009 = $2,439 and $27.95 ÷ 0.009 = $3,106.
  - Per-order fee as a share of the sale: 1.6% at $25, 0.4% at $100, 3.75% at $8, 6% at $5.
- **Etsy:**
  - Base fees: $2.83 on $25 (exact $2.825) and $9.95 on $100.
  - With Offsite Ads: $6.58 and $5.83 on $25; $24.95 and $21.95 on $100.
  - $8 tax example: $10.19.
  - Smaller sales: $10 sale $1.40; $5 sale $0.93 (18.5%); $50 sale $5.20 (10.4%).
  - $100 Offsite Ads cap is reached above $666.67 at 15%.
  - $30 + $6 shipping: transaction fee $2.34.
- **Shopify:**

  | Scenario | $25 | $100 |
  |---|---|---|
  | Basic, standard card | $1.03 | $3.20 |
  | Basic, premium card | $1.18 | $3.80 |
  | Basic, international card | $1.28 | $4.20 |
  | Grow | $0.98 | $3.00 |
  | Advanced | $0.93 | $2.80 |
  | Plus | $0.86 | $2.55 |
  | Basic, third-party provider (Shopify fee only) | $0.50 | $2.00 |

  - Plan upgrade break-evens: $25k, $33k, $110k and $147k a month; third-party provider $5k.
  - Grow saves $80 vs Basic at $40k a month.
  - In-person $25 sale on Basic: $0.75.

### Presets
- All eBay, Etsy and Shopify rows: `rate_pct`, `min_fee_usd` (null), `band` and `fixed_fee_usd` match their claims.
- **eBay fixed fee**: every eBay row has `fixed_fee_usd` 0.4 with `fixed_fee_note` "per order; $0.30 if the order total is $10.00 or less", so the note covers the order-total dependency. The exception is athletic shoes at $150 and over: 0 with "no per-order fee for this category", which matches ebay-13.
- No preset edits were needed, and I did not touch the Amazon or Walmart rows.

### Notes for the owner (not changed)
- eBay bands say "price", but eBay applies the rate to the total amount of the sale, which includes shipping and tax. The calculator UI should make that clear.
- The Etsy Offsite Ads presets do not encode the $100-per-order cap.
- The eBay page does not mention that the Below Standard surcharge rises to 7% after four or more consecutive Below Standard months. The page's 6% statement is still accurate.
- By a rough count that strips components, the body text is about 1,050–1,160 words per page, which may be under the 1,200-word floor in section 5. That is the writer's call.

## Build
`ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build`: 65 pages built, Complete!, with no MDX errors.
