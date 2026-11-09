# verifier-V5-2: 2026-11-09 enrichment pass (drafted claims and changed sentences only)

Scope: claims with status "drafted" (enricher-E2), plus page sentences added or changed on 2026-11-09. I found those sentences by comparing each .mdx with the Nov 8 build in dist/guides/<slug>/index.html. Every source was re-fetched on 2026-11-09:
- eCFR, sell.amazon.com, developer-docs.amazon and the govinfo 2025 CFR XML (packaging-design-fba-41) were read with WebFetch.
- The four github.com/amzn SP-API model files were downloaded from raw.githubusercontent.com (the `fetched_via` URLs) and searched for the exact strings. Every evidence fragment joined with "·" or "…" was confirmed one fragment at a time.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/seller-fulfilled-prime | 14 (-26…-39) | 14 | 0 | 0 | ~1,151 | no |
| guides/packaging-design-fba | 14 (-28…-41) | 13 | 1 | 0 | ~1,559 | no |
| guides/bundles-and-multipacks | 9 (-26…-34) | 8 | 1 | 0 | ~1,384 | no |
| guides/product-inserts | 13 (-15…-27) | 7 | 6 | 0 | ~1,396 | no |
| guides/q4-freight-booking-window | 12 (-29…-40) | 11 | 1 | 0 | ~1,234 | no |

## Corrections (claims)
- product-inserts-18 / -19: **the required State-law statements were truncated.** The page told readers to "copy them exactly". 16 CFR 701.3(a)(7) and (a)(8) continue with "…, so the above limitation may not apply to you." and "…, so the above limitation or exclusion may not apply to you." The full statements are now in the claims and the table. The (a)(8) statement "may be combined" with the (a)(7) statement, and that note was added too.
- product-inserts-21: under 702.3(b)(1)(i)(B), the tag, sign, sticker, label, decal or other attachment must contain the full text of the written warranty. This condition was added to the claim and the page.
- product-inserts-25: the source describes a workflow ("You first verify that an order is available for solicitation, then create the solicitation request"). It does not say a review can be requested "only when" the order is available. The claim and the sentence were narrowed.
- product-inserts-27: the outbound model lists PACKING_SLIP and BLANK_BOX as FeatureSettings featureName values. "Feature constraints" became "feature settings".
- product-inserts-17: "uses under Part 703" became "elected by the warrantor in compliance with Part 703". The checklist item was updated too.
- bundles-and-multipacks-27: added the second ITEM_SETCREAT condition, "must not require covering". The page table already said this.
- packaging-design-fba-33: added "This warning must be printed on the bag or attached as a label." The page's "a label is the fallback" was replaced with this either/or wording.
- q4-freight-booking-window-39: added the short-voyage exception from the same sentence of 149.2(b): "or upon lading at a foreign port that is less than a 24 hour voyage". The page sentence was updated.

## Page sentences removed or reworded (no source / inference presented as fact)
- seller-fulfilled-prime:
  - Removed the "pick-list rule" paragraph (sort IsPrime orders by LatestShipDate, flag SameDay/NextDay, "that is how the cap turns into a packing schedule"). It was cited to -12, which does not support it.
  - "matching fields" for the prequalification measures became a direct description of what the report contains.
  - Removed the advice "pull it on a fixed day each week".
  - "SFP-specific thresholds are … on the SFP performance dashboard" was reworded. Thresholds are in the program policy; the dashboard is for monitoring (-21).
  - The worked example's closing opinion ("a more useful starting point … than a percentage alone") became a plain statement of the counts. The arithmetic is correct: 6/400 = 1.5%; 382/390 ≈ 97.9%; 8 shipments lacked valid tracking.
- packaging-design-fba:
  - "Amazon's inbound system assigns each SKU a prep category" was reworded. The model also has setPrepDetails, so sellers set prep details too.
  - "Expect overboxing" became "Overboxing may be required" (the source says "may require").
  - The SMALL row's advice ("consider a larger card or blister") was replaced with the category boundary.
  - Removed "or the prep step in Send to Amazon" (not in -05) and the unmarked -05 citation there.
  - Removed "If a redesign removes the trigger, check that the category on file is updated."
  - "(or a prep provider working for you)" was replaced with the source's accepted values (SELLER or NONE). The prepOwner field carries the same US restriction as labelOwner, and the page now says so.
  - The 1/4-inch type-size row was relabeled "More than 100, up to 400 sq in".
- bundles-and-multipacks:
  - Removed "a QUARTER view smooths out a single promotion week" (assumption).
  - The shortlist sentence was softened.
  - "Brand Analytics role" became "Brand Analytics Selling Partner API role".
  - Removed the packing advice ("cover the whole pack in an outer sleeve", "put the FNSKU on the outside", the suggested "Sold as a set" wording). A sleeve conflicts with "must not require covering". It was replaced with the sourced ITEM_SETSTK label requirement (-28).
  - The checklist item was reworded to "keep inner barcodes from facing outward".
- product-inserts:
  - Removed "a practical layout is a card that names the warranty and points to the full text" and the worked-example line "The fix is a short card that … gives a web address". No source says this satisfies 701.3's single-document requirement, so it read as legal advice.
  - Removed "Because the message is Amazon's template, there is no seller-written offer…", which was an inference.
  - Removed "closest thing MCF offers to a printed insert" (superlative). The extension of the warranty rules to packing-slip comments became a sentence limited to the review rules (-01, -02).
  - "What the seller will do" became "what the warrantor will do".
- q4-freight-booking-window:
  - Removed "In Q4 these are the steps where a late decision costs the most" and "and in what order".
  - The table footnote now labels the "Fix it by" dates in the first four rows as planning assumptions.

## Arithmetic (all inside "Worked example (hypothetical)" blocks)
- SFP: 6 ÷ 400 = 1.5%; 382 ÷ 390 = 97.95% ≈ 97.9%. Correct.
- Packaging: 5 × 4 = 20 sq in, which falls in the 1/8-inch tier. 0.40 × 6 × 7 = 16.8 sq in, the same tier. The clear space above and below is at least the lettering height (≥ 1/8 in). Correct.
- Bundles: $12 + $18 + $9 = $39; $39 − $35 = $4. Amazon's $15 + $20 → $30 example was confirmed verbatim. Correct.
- Q4: the new ready-to-ship sentence (around Oct 11 vs Oct 18) is consistent with the stated 7-day truck leg.

## Rejected
None.

## Notes
- curl to govinfo.gov was refused by the proxy (403), so the 2025 CFR XML was read with WebFetch (two passes for the exact § 500.6(b) wording).
- Pre-existing and not changed on 11-09, so not in scope: check-page warns that four FAQ questions are grammar-edited versions of logged suggestions ("What are the Seller Fulfilled Prime requirements?", "How does Seller Fulfilled Prime compare with FBA?", "What are Amazon FBA packaging requirements?", "How much are Amazon storage fees in Q4?"). All four are in the Nov 8 build.

check-page: no ERROR on all five pages.
