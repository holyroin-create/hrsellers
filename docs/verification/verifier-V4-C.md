# verifier-V4-C — verification report (2026-11-08)

Pages: guides/awd-vs-3pl-warehousing, guides/mcf-off-amazon-orders, guides/fba-vs-fbm-breakeven, guides/seller-fulfilled-prime, guides/removal-vs-hold-decision. All sources re-fetched with WebFetch on 2026-11-08 (curl blocked by proxy). `node tools/check-page.mjs` on all five: no ERROR.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/awd-vs-3pl-warehousing | 31 | 25 | 4 (18, 19, 20, 21) | 2 (28, 29) | ≈1,067 | no |
| guides/mcf-off-amazon-orders | 37 | 34 | 2 (13, 21) | 1 (25) | ≈974 | no |
| guides/fba-vs-fbm-breakeven | 25 | 24 | 1 (08, evidence/wording) | 0 | ≈970 | no |
| guides/seller-fulfilled-prime | 25 | 24 | 1 (24, evidence/wording) | 0 | ≈746 | no |
| guides/removal-vs-hold-decision | 17 | 13 | 4 (04, 05, 08, 16) | 0 | ≈727 | no |

Minor evidence-only refreshes (exact fetched wording, claim unchanged) are noted in `verifier_note` and not counted as corrections.

## Main corrections
- awd-28 / awd-29 rejected: sell.amazon.com/programs/supply-chain has no "ASCS account", "non-Amazon channels" or "immediate access to MCF, AWD, and MCD" text (literal substring search). Two Decision rows and the closing "immediate access" sentence removed.
- awd-18/19/21: discount and delivery-date wording rewritten to the fetched sentences ("save 10% on storage costs with AWD smart storage rates" with healthy inventory levels; "products that are already in the fulfillment network").
- awd-07 ($0.35 WCP promotion through Dec 31, 2026) and all AWD rate rows confirmed; WCP row is labelled "25% off base rate".
- mcf-21: 3.5% fuel and logistics-related surcharge is NOT on /mcf/pricing; it is on the rate card ("will be applied to MCF fulfillment fees in the US", no start date). source_url moved.
- mcf-25 rejected: no "$0.30"/2026 fee-change text on /mcf/pricing or the rate card (pricing page now describes Jan 15, 2027 changes). Sentence removed.
- mcf-13 narrowed to "When you sign up for FBA, you're ready to use MCF."
- MCF rate card: rows and peak dates (Oct 15, 2026–Jan 14, 2027) confirmed; column headers are only "1 2 3 4+". Body now states that the units-per-order / per-unit reading is drawn from the pricing page ("units per order" fee factor; "up to 50% off per-unit fulfillment fees for multi-unit orders").
- fba-vs-fbm: intro claimed per-unit fulfillment fees are not tabled on sell.amazon.com — false (FBA page has size-tier fee tables); intro rewritten. Removed "Labels are usually the largest FBM line"; worked example now states the free-shipping input it relied on.
- removal: removed unsupported "same reports are available in Seller Central", causal link between October rate and holiday-guide task, "often overlooked", "usually the cheaper path", Seller Support dispute line; claim 05 reworded to the guide's actual list intro; report renamed "Storage Fees" per SP-API doc.
- seller-fulfilled-prime: removed unsupported product-selection advice and "Buy Shipping matters more under SFP" comparative.
- All worked-example arithmetic recomputed; all correct.

## Rejected claim records (removed from data/claims because check-page.mjs errors on uncited JSON claims)




{"claim_id": "awd-vs-3pl-warehousing-28", "claim": "Sellers who only want to sell on non-Amazon channels can sign up for an ASCS account instead.", "page": "/guides/awd-vs-3pl-warehousing/", "source_url": "https://sell.amazon.com/programs/supply-chain", "publisher": "Amazon — Sell on Amazon (sell.amazon.com)", "source_type": "official-documentation", "accessed": "2026-11-08", "evidence": "If you only want to sell on non-Amazon channels, you can sign up for an ASCS account instead.", "archive_url": "", "produced_by": "writer-W-C", "verified_by": "verifier-V4-C", "status": "rejected", "verifier_note": "Re-fetched sell.amazon.com/programs/supply-chain 2026-11-08 with literal substring search: \"ASCS account\", \"non-Amazon channels\" and \"immediate access to MCF\" NOT FOUND (page only says \"When you sign up for FBA, you're ready to use MCF.\"). Removed from page (Decision rows and closing sentence)."}

{"claim_id": "awd-vs-3pl-warehousing-29", "claim": "Signing up for FBA gives immediate access to MCF, AWD and MCD.", "page": "/guides/awd-vs-3pl-warehousing/", "source_url": "https://sell.amazon.com/programs/supply-chain", "publisher": "Amazon — Sell on Amazon (sell.amazon.com)", "source_type": "official-documentation", "accessed": "2026-11-08", "evidence": "When you sign up for FBA, you get immediate access to MCF, AWD, and MCD.", "archive_url": "", "produced_by": "writer-W-C", "verified_by": "verifier-V4-C", "status": "rejected", "verifier_note": "Re-fetched sell.amazon.com/programs/supply-chain 2026-11-08 with literal substring search: \"ASCS account\", \"non-Amazon channels\" and \"immediate access to MCF\" NOT FOUND (page only says \"When you sign up for FBA, you're ready to use MCF.\"). Removed from page (Decision rows and closing sentence)."}

{"claim_id": "mcf-off-amazon-orders-25", "claim": "For 2026, MCF fulfillment fees rose by $0.30 per unit on average, unchanged for orders of 3 or more units in small and large standard.", "page": "/guides/mcf-off-amazon-orders/", "source_url": "https://supplychain.amazon.com/mcf/pricing", "publisher": "Amazon Supply Chain Services (supplychain.amazon.com)", "source_type": "official-pricing-page", "accessed": "2026-11-08", "evidence": "MCF fulfillment fees increased on average by $0.30 per unit. Fulfillment fees remain unchanged for orders containing 3 or more units", "archive_url": "", "produced_by": "writer-W-C", "verified_by": "verifier-V4-C", "status": "rejected", "verifier_note": "Re-fetched /mcf/pricing and /docs/rate-card 2026-11-08: no \"$0.30\" text and no 2026 fee-change text; /mcf/pricing now describes changes effective January 15, 2027. Sentence removed."}
