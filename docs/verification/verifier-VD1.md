# Verification report: verifier-VD1

Date: 2026-11-08. Scope: Amazon and Walmart marketplace pages, their claim files, and the Amazon/Walmart rows and claims in the margin calculator data.

## Sources re-fetched (WebFetch)
- https://sell.amazon.com/pricing. Read three times from the same 15-minute cache window: (1) full table, condensed; (2) exact cell quotes for all tiered and no-minimum rows, plan lines and media footnote; (3) exact cell quotes for every flat-rate row, plus the "hundreds of tools" and Revenue Calculator sentences. The tool caps quotes at 125 characters, so long cells came back split into consecutive verbatim segments.
- https://marketplace.walmart.com/referral-fees/. Full referral table verbatim (every row), the total-sales-price definition, the deduction-timing sentence and the zero-setup/monthly/hidden-fees sentence. The page lists no minimum referral fee.

## Results by file
| File | Claims | Verified | Corrected | Rejected |
|---|---|---|---|---|
| data/claims/marketplace-amazon.json | 44 | 44 | 0 | 0 |
| data/claims/marketplace-walmart.json | 43 | 43 | 0 | 0 |
| data/claims/tool-margin-calculator.json (Amazon/Walmart only: -01..-73, -96) | 74 | 74 | 0 | 0 |
| data/fee-presets.json (Amazon/Walmart rows) | 102 rows | 102 match | 0 | n/a |

eBay/Etsy/Shopify objects in the shared files were not touched. Before writing, I re-read tool-margin-calculator.json and changed only the 74 objects listed above.

Notes on specific claims:
- marketplace-amazon-44: the phrase "hundreds of tools and programs" appears in the page's meta description, not in the visible body. It is still page text, so the claim is verified, and a note records where the phrase sits.
- marketplace-amazon-28 / tool-margin-calculator-16 (Fine Art): the minimum column shows "--". The $1.00 minimum sits inside the first-tier cell, and the bands apply to the "portion of Sales Proceeds". The claim is correct, and the page table cell now says "Portion of sales proceeds".
- marketplace-walmart-39..43: the Amazon side is verified on sell.amazon.com and the Walmart side on the Walmart page.
- Presets: rate_pct, min_fee_usd (0.3 / 1.0 / null), band text and fixed_fee_usd (Media 1.8, tied to -96) all match their claims. Walmart rows correctly have min_fee_usd null.

## Arithmetic recomputed (all correct)
- Amazon $25 / $100: Home and Kitchen 3.75/15.00; Clothing 17% 4.25/17.00; Beauty 3.75/15.00; Consumer Electronics 2.00/8.00; Electronics Accessories 3.75/15.00; Jewelry 5.00/20.00; Media 15% + 1.80 = 5.55/16.80.
- Amazon other examples: $20.00 clothing at 10% = 2.00; $20.01 at 17% = 3.4017, shown as 3.40; $300 furniture 30 + 10 = 40 vs 45; $150 accessory 15 + 4 = 19; $1.50 × 15% = 0.225, so the $0.30 minimum applies; break-even 39.99 / 0.99 = 40.39, so 40 × 0.99 = 39.60 and 41 × 0.99 = 40.59.
- Walmart $25 / $100: 15% rows 3.75/15.00; 12% 3.00/12.00; 8% 2.00/8.00; 6% 1.50/6.00; Electronics Accessories 3.75/15.00; Jewelry 5.00/20.00.
- Walmart other examples: $18 at 10% = 1.80; $23 at 15% = 3.45; $350 sofa 30 + 15 = 45 vs 52.50; $400 compact appliance 36 + 8 = 44; $30 shirt 4.50; $250 chair 35 vs 37.50; $50 cartridges 6.00 vs 7.50.

## Page edits
Amazon (src/content/marketplaces/amazon.mdx):
- FAQ questions replaced with real autocomplete queries from research/faq-bank.json and faq-raw.json:
  - "How much does Amazon take per sale?" became "How much does Amazon charge sellers?"
  - "What percentage does Amazon charge sellers?" became "How much is Amazon referral fee?"
  - "Does Amazon seller charge monthly?" became "How much does Amazon seller charge monthly?" (faq-raw)
  - "Amazon individual vs professional selling plan: which costs less?" became "How much does Amazon charge individual sellers?"
  - "How much does it cost to sell on Amazon?" became "What fees does Amazon charge?"
- Removed the uncited assertion that the Individual plan "has no monthly fee". The answer now states only the cited per-item price.
- "Most categories" 15% wording changed to "Everything Else and many other categories" and "Most common rate". On the page, 15% is the most common rate, but flat 15% rows are not a majority.
- "the most common way to misprice a listing" (unsupported) changed to "an easy way to misprice a listing".
- Minimum-column step now includes Fine Art among the rows that show a dash. The Fine Art table cell is clarified.

Walmart (src/content/marketplaces/walmart.mdx):
- FAQ questions:
  - "Is it free to sell on Walmart Marketplace?" became "How much does it cost to sell on Walmart Marketplace?" (bank)
  - "How much does Walmart charge sellers on clothing?" became "How much does Walmart charge?" (bank)
- "Most categories / 15% for most / 15% in most categories" changed to "many", for the same reason as on the Amazon page.
- "These are the gaps most likely to change a listing decision" (unsupported) changed to a neutral lead-in to the five comparable rows.

No experience claims, invented people or uncited numeric facts remain. Every `<C>` id resolves, and every JSON claim is cited on its page.

## Build
`ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build` gave "65 page(s) built", Complete, with no MDX errors.

## Observation for the editor (not changed)
A rough word count of the body prose, with components excluded, is about 1,050–1,120 per page. Counting table and component text, the pages are likely within 1,200–2,200, but the editor may want to confirm against the contract.
