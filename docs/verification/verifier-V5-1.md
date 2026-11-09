# verifier-V5-1: 2026-11-09 enrichment pass (drafted claims and changed sentences only)

Scope: claims with status "drafted" (enricher-E1), plus page sentences added or changed on 2026-11-09. To find those sentences I compared each page with the Nov 8 build in dist/guides/<slug>/index.html.

How the sources were checked:
- developer-docs.amazon (report-type-values-fba.md and report-type-values-returns.md), sellingpartners.aboutamazon.com (the 2027 and Dec 2023 fee posts), sell.amazon.com (/pricing and /fulfillment-by-amazon) and supplychain.amazon.com/docs/rate-card were re-fetched with WebFetch on 2026-11-09.
- The GitHub SP-API models (financesV0.json and productFeesV0.json) were downloaded from raw.githubusercontent.com and searched for the exact strings.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/aged-inventory-15-month-tier | 10 (-18…-27) | 9 | 1 | 0 | ~1,346 | no |
| guides/removal-vs-hold-decision | 15 (-18…-32) | 14 | 1 | 0 | ~1,304 | no |
| guides/returns-cost-and-badge | 14 (-24…-37) | 14 | 0 | 0 | ~1,189 | no |
| guides/fba-fuel-logistics-surcharge-2026 | 12 (-21…-32) | 12 | 0 (1 note) | 0 | ~1,138 | no |
| guides/fbt-fixed-dollar-problem | 13 (-16…-28) | 13 | 0 | 0 | ~1,287 | no |

## Confirmations requested by the enricher
- **GitHub model claims** (removal -26/-27/-28, returns -34…-37, fuel -31, fbt -25/-26): every string was found verbatim in the raw files. The matches are RemovalShipmentItem.FeeAmount, FBALiquidationEvent and LiquidationProceedsAmount, the ChargeComponent list (RestockingFee, ReturnShipping), ShipmentItem.ItemFeeAdjustmentList, the AdjustmentType FBAInventoryReimbursement, and the getMyFeesEstimateForSKU/ASIN notes. FeesEstimateRequest requires PriceToEstimateFees.
- **456+ days = 15-month tier**: this is the page's own arithmetic (15 × 30.4 = 456). It is now labelled as such wherever it appears: the intro, the summary bullet and the band section. The old causal wording ("which is why the top band is the one called the 15-month tier") implied the name was Amazon's, so it was removed.
- **Fuel surcharge introduced April 2026**: confirmed on the 2027 fee article: "Costs, especially fuel and line-haul trucking, have remained elevated since we introduced the surcharge in April 2026". The article also says "remains unchanged" and "keep reviewing" (claims -21, -22, -23).
- **fbt -01 replaced by -28**: confirmed. sell.amazon.com/fulfillment-by-amazon, under Fulfillment costs, says: "These costs are based on the product's price, weight, and dimensions." Claim -01 no longer exists in the JSON or on the page.

## Corrections (claims)
- aged-inventory-15-month-tier-19: the 366–455 and 456-plus fields are "available in the US, DE, UK, FR, IT, and ES stores", not the US store alone. The claim was widened to that store list. The page wording "in the US store" is still accurate.
- removal-vs-hold-decision-23: "works if generated within six weeks" was reworded to the source's condition. The report identifies items that will be 365+ days old at the next cleanup "if the report is generated within six weeks of the cleanup event date".
- fba-fuel-logistics-surcharge-2026-29 (note only): expected-fulfillment-fee-per-unit is listed for the US and Canada stores, and expected-future-fulfillment-fee-per-unit for the US store only. Both exist in the US report, so the claim stands.

## Page sentences removed or reworded (no source / editorial)
- aged-inventory: removed "Amazon does not publish the band table on its public seller site" (an unsourced negative) and "shows exactly how the surcharge is bucketed". Removed "The public announcement does not give the new per-band rates" and "in your account". "Amazon frames it as a predictability fix" became a plain quote. The worked-example cell "Surcharge band for one day" became "Reaches day 456 one day before the change", because the monthly assessment day is unknown. Removed "the case the 15-month tier was built for" and "only the new rate matters", and the latter became "almost all of its aged period falls under the new rate". The dates in the example were recomputed (receipt + N days) and are correct.
- removal-vs-hold: removed "Liquidation is not only a cost." The general claim "liquidation still turns stuck stock into a small positive payout" became a statement that holds only for the example's inputs. "The 181-day step… is still the expensive case" was replaced with the sourced 2027 statement (age-based rate, higher fees for aged inventory).
- returns-cost-and-badge: "flat return fee" became "per-unit return fee", because some rows carry a per-lb add-on. Removed "The fee is tied to how the return is offered…, not simply to whether a unit comes back" (an inference that conflicts with the high-return-rate expansion) and "The public announcement does not give the thresholds". The Seller Central pointer was cut to one sentence, and the unsourced reference to "return-related labels Amazon shows on product pages" and "not reproduced on Amazon's public pages" was removed. "FBA returns and returnless refunds… sit in the FBA reports instead" was corrected: the source points only FBA returns to the FBA Returns Report. "names the lines a return creates" became "defines several charge types that relate to returns". Removed "which is where label costs start".
- fba-fuel-logistics-surcharge: the description no longer implies that the FBA rate is 3.5%. Removed "The surcharge sits on top of the regular fee schedule", which was unsourced. Removed "it is not presented as permanent". Removed "and your Fee Preview report" as a source of the FBA surcharge rate, which is not documented. Removed the redundant 2022 recap sentence. The summary bullet on Fee Preview/Product Fees became "fee estimates".
- fbt-fixed-dollar-problem: removed "so it helps a cheap item but does not change the structure" (SIPP). "gives every field you need" became "has the fields".

## Arithmetic (all hypothetical, labelled)
- aged: 15 × 30.4 = 456. The lot dates are correct: Nov 1 2025 + 181/366/456 days = May 1 2026 / Nov 2 2026 / Jan 31 2027, and the Feb 1 2026 and Aug 1 2026 rows are also correct.
- removal: 200 × 3.00 = $600; 200 × 0.90 = $180; −$200. Correct.
- returns: 24 × 4.70 = 112.80; 54 − 18 = 36; total 148.80 / 400 = $0.37; return fees are 75.8% of the total. Correct.
- fuel: 7.53 / 8.88 / 10.97 / 12.16 × 3.5% = 0.26355 / 0.3108 / 0.38395 / 0.4256, and the per-unit roundings and 1,000-unit totals are correct. The $7.53, $8.88 and $12.16 figures were confirmed on the rate-card page's peak table.
- fbt: the referral thresholds (−$0.28, −$0.57), the $10.83 breakeven (0.85P > 9.20), the two breaks at once (+$1.54, −$1.04), the chart (1.6 / 0.32 / 3.8 / 0.76%) and $7.53 as 75% of $10 and 25% of $30 are all correct.

## Rejected
None.

## Notes
- check-page: no ERROR on all five pages. Two warnings flag FAQ questions not found verbatim in the suggestion logs: "How much are Amazon FBA removal order fees?" and "Does Amazon charge sellers a fuel surcharge?". Both questions were already in the Nov 8 build, so they are pre-existing and out of scope. The changed fuel FAQ answer is supported by -01, -21 and -22.
- returns: the seller-fulfilled report type GET_FLAT_FILE_RETURNS_DATA_BY_RETURN_DATE was confirmed on report-type-values-returns.md.
