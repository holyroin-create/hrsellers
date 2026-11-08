# verifier-V4-Q — 2026-11-08

Pages: reviews/helium-10, reviews/jungle-scout, reviews/keepa, reviews/sellerboard, reviews/a2x. All sources re-fetched with WebFetch (vendor sites used only for their own product; sell.amazon.com /tools, /tools/selling-partner-appstore, /tools/product-opportunity-explorer; developer-docs.amazon SP-API authorization and settlement report pages).

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| helium-10 | 37 | 36 | 1 (18) | 0 | ~853 | no |
| jungle-scout | 34 | 34 | 0 (page cell wording only) | 0 | ~805 | no |
| keepa | 23 | 21 | 1 (07) | 1 (01) | ~717 | no |
| sellerboard | 35 | 34 | 1 (03); page text on 34 | 0 | ~785 | no |
| a2x | 32 | 32 | 0 (page labels only) | 0 | ~794 | no |

Main corrections
- keepa-07: offers cost 6 tokens per found offer page (up to 10 offers) and replaces the 1-token base cost; worked example recomputed 300 x 6 = 1,800 (was 300 x (1+6) = 2,100); table row fixed.
- keepa-01 rejected (vendor marketing statistic "over 7 billion products"); removed from keyFacts and body. The rejected object was removed from data/claims/keepa.json because check-page.mjs errors on any uncited JSON claim; full record kept below.
- helium-10-18: refund terms narrowed to "nonrefundable except as the terms expressly provide", full refund within first 7 days of initial purchase; summary and body updated.
- sellerboard-03: dropped "more than 100 other Amazon fees" marketing figure; removed uncited inferences (date-range cost "matters when...", multi-currency "single rate") and "largest of those fees" superlative.
- Decision tables on helium-10 and jungle-scout retitled/reworded so they map needs to published limits rather than recommend a tier (helium-10 rows now cite the limit they state).
- jungle-scout Keyword Scout Brand Owner cell: "Included (no limit listed)" (page shows a checkmark).
- a2x: current table column labelled "Price until Nov 13, 2026" and a cited note that all plans except Mini increase from Nov 14, 2026; summary bullet scoped to pre-change prices. Both price sets confirmed (pricing page: current; support price list: Mini 29 to 29, Starter 59 to 65, Standard 79 to 85, Standard 10k 159 to 169; Premium 15k 229 to 249 ... Premium 250k 1,499 to 1,599 — Premium new prices not added, no claim for them).
- Keepa prices: keepa.com/api/pricing returns no readable price content; page correctly states no prices.

Rejected claim record
```json
{"claim_id":"keepa-01","claim":"Keepa says it tracks over 7 billion Amazon products.","page":"/reviews/keepa/","source_url":"https://keepa.com/","publisher":"Keepa","source_type":"official-documentation","accessed":"2026-11-08","evidence":"Keepa tracks over 7 billion Amazon products.","archive_url":"","produced_by":"writer-W-Q","verified_by":"verifier-V4-Q","status":"rejected","verifier_note":"Vendor marketing statistic (number of products tracked); removed from keyFacts and body per review-page rules."}
```
