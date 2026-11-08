# verifier-V4-K — 2026-11-08

Pages: guides/amazon-ppc-benchmarks, guides/ppc-campaign-structure-launch, guides/deal-and-coupon-fees, guides/q4-deal-deadlines-2026, guides/subscribe-and-save-economics. Sources re-fetched with WebFetch: advertising.amazon.com (ACOS, cost-per-click, conversion-rate, targeting-with-sponsored-products, BFCM tips guides; Sponsored Products page), sell.amazon.com (/advertising, /blog/seller-promotions, /programs/subscribe-and-save, /blog/subscribe-and-save), aboutamazon.com (Black Friday FAQ, Prime Big Deal Days FAQ). SP-API financesV0.json read from raw.githubusercontent.com (amzn/selling-partner-api-models). No third-party sources found on any page.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| amazon-ppc-benchmarks | 22 | 20 | 2 (13, 19) | 0 | ~1,353 | no |
| ppc-campaign-structure-launch | 27 | 26 | 1 (09) | 0 | ~1,067 | no |
| deal-and-coupon-fees | 22 | 22 | 0 | 0 | ~886 | no |
| q4-deal-deadlines-2026 | 21 | 18 | 3 (04 evidence, 06 note, 07) | 0 | ~864 | no |
| subscribe-and-save-economics | 20 | 19 | 1 (20) | 0 | ~783 | no |

Main corrections
- 34% Sponsored Products figure: footnote lists 20 marketplaces, not 21; page now attributes it to Amazon internal data with date range and the $1 minimum-spend condition.
- Maximum CPC includes base bid plus dynamic-bidding/cost-control adjustments; removed "bid is the cap" / "never exceeds your maximum" wording (FAQ, body, mistakes table).
- ppc-campaign: "winning the Featured Offer / cannot serve without it" replaced by the source condition (eligible for the Featured Offer); unsupported "products or categories" product-targeting wording replaced with the guide's ASIN statement; "dynamic bids if your goal is sales" replaced with the source wording; "Amazon updates its ad products regularly" and "a common use" removed.
- q4: Brand Store 7-day rule now carries the source exception (longer events, e.g. Cyber Week); unsourced "Amazon does not post them publicly" and peak-day budget speculation removed; rating sentence fixed; Black Friday evidence replaced with the fetched sentence. Q4 dates (Nov 27, Nov 30, Oct 6–7) match aboutamazon.com.
- deal-and-coupon-fees: heading "four discount tools" renamed (source's four types include promotions); invented "deal-creation screen" detail removed from FAQ/checklist.
- subscribe-and-save: Amazon's extra 5% conditioned on five or more items in one delivery; "gate most sellers hit first", "easier to forecast" and "removes much of the reason to subscribe" removed. Constant-fee simplification in the worked example is labelled.
- All worked-example arithmetic recomputed (ACOS/CPC/CVR example, launch budget, coupon headroom, Q4 date counts, S&S tiers): correct.
