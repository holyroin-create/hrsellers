# verifier-V4-H — verification log (2026-11-08)

Every source was re-fetched with WebFetch on 2026-11-08. Sources: developer-docs.amazon (SP-API guides and references), sell.amazon.com, developer.walmart.com, marketplace.walmart.com, ecfr.gov (16 CFR Part 233; § 233.2 and § 233.3 section pages; § 233.1 read from the part page because the section URL is robots-blocked), govinfo.gov (FR 2024-18519 HTML, fetched_via for the Federal Register document page). For SP-API reference pages whose rendered text has no response-schema definitions (getListingsItem, searchListingsItems' 1,000-SKU note, getListingsRestrictions, getItemOffers, getCompetitiveSummary, getFeaturedOfferExpectedPriceBatch), the definitions were confirmed verbatim in Amazon's official SP-API model JSON on raw.githubusercontent.com/amzn/selling-partner-api-models. That URL is recorded in `fetched_via`, and `source_url` still points to the documentation page. No forbidden sources were found.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/listing-disappeared | 29 | 28 | 1 (13 evidence) | 0 | ≈884 | no |
| guides/variations-review-pooling | 30 | 30 | 0 | 0 | ≈842 | no |
| guides/ungating-restricted-categories | 35 | 34 | 1 (15) | 0 | ≈762 | no |
| guides/buy-box-featured-offer | 31 | 29 | 2 (23, 29 evidence) | 0 | ≈857 | no |
| guides/cross-channel-price-parity | 25 | 22 | 3 (20, 21, 23) | 0 | ≈989 | no |

No claim was rejected, so none were removed from the JSON.

## Claim corrections
- ungating-15: the source says a brand application "will need" a purchase invoice from a manufacturer or distributor **or** a brand authorization letter. The draft said an invoice "may" be required. Fixed in the claim, Steps, both FAQ answers, the summary and the body.
- buy-box-23: the getCompetitiveSummary segment has three membership values (PRIME, NON_PRIME, DEFAULT = Prime status unknown). The claim now uses the schema's values.
- buy-box-29: the evidence is replaced with the FBA-page sentence found on re-fetch. The claim is unchanged.
- parity-20 / -21: added the conditions in § 233.2(a): "same merchandise in the advertiser's trade area" and "substantial sales of the article are being made in the area".
- parity-23: "many shoppers assume" changed to the regulation's wording, "many members of the purchasing public believe" (§ 233.3(a)).
- listing-disappeared-13: the evidence is replaced with the verbatim expiryDate text.

## Page-text fixes (uncited, speculative or false statements removed or reworded)
- listing-disappeared: removed "almost always changed state" and the claim that the SP-API data is "the same listing data Seller Central shows". Also removed: reference numbers being what "support cases are keyed to"; "no amount of attribute editing will fix"; "DUPLICATE often surfaces when…"; "editing price/quantity will not bring it back"; the "feed writes zero" scenario; "the problem is authorization, not listing data"; and "Seller Support/appeal path is the formal route". The status-combination table and Decision symptoms were rewritten from the definitions (no "direct link", "reverted field" or "effectively gone"). The Canceled and Inactive report steps no longer add details the source does not give. The worked example no longer assumes a creation-date filter, because no claim supports it.
- variations-review-pooling: removed "the main reason sellers want it / why it is policed", the jacket-experience reasoning and "that is exactly the line regulators looked at". Also removed the claim that the proposed definition "maps closely to variation themes", the "In other words" gloss, the uncited "rest of the rule … did take effect", "Seller Support is the route" and "before the cost of the units". The DUPLICATE sentence no longer claims creating a new page triggers it. The Compare card is now limited to cited facts. The FTC proposal is still described as proposed § 465.3 that the Commission "decided not to finalize" (FR 2024-18519, § IV.C), which the final rule confirms.
- ungating-restricted-categories: corrected the Compare cell that said grocery purchase records are "not itemized on Amazon's public grocery page". This was false: the grocery page lists invoices for 10 or more units. Also removed: "the same data its seller tools use", "approval can usually be applied for", "goods bought at retail are hard to use", invoices "in your business name", "approval is about proving … not paperwork volume" and "budget that into the product decision". The worked example no longer applies the brand-application review time to a grocery category. The scope note's uncited "federal rules still apply" was reworded.
- buy-box-featured-offer: removed "most shoppers buy from whichever offer…" and "(the old Buy Box)" / "used to call" / "long called". The source says "sometimes called". Also removed: the "Practical meaning" column ("most common disqualifier", "stockouts end eligibility immediately"); "result differs by shopper location"; "FBA covers delivery and service by default"; "deciding factor is … not the channel label"; "OFFER_NOT_FOUND usually means"; "pricing software data come from…"; and Seller Support as the authoritative view. "Amazon does not publish a formula" is reworded to "We found no Amazon page that publishes a formula". "Common reasons" in the FAQ is changed to "reasons it lists include". Worked-example arithmetic was checked and is correct.
- cross-channel-price-parity: removed "selling at different prices is allowed". This sentence characterized Amazon's non-public pricing policy. Also removed "neither will tell you which outside store set the benchmark", which is false for Walmart (its event includes the reference price and URL), and "Unlike Amazon". The Fair Pricing FAQ answer now says only that the policy is published inside Seller Central and that this page does not describe it. Also removed: "your own website is a retailer outside Amazon"; "the usual cause … is a single list price"; "benchmark is often your cheapest channel"; "Expect marketplaces to benchmark against the lower price"; "weekly"; and "FTC guides are interpretive". "Own-store anchors" is reworded, and the Average Selling Price definition now follows the source. Worked-example arithmetic was checked ($31.76 and $32.94 are correct).

## FAQ
All FAQ questions passed check-page (bank/suggest files). Answers were checked against their listed claims, and ungating, buy-box and parity answers were edited as above.

`node tools/check-page.mjs` (all five pages): no ERROR, exit 0.
