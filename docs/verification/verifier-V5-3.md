# verifier-V5-3: 2026-11-09 enrichment pass (drafted claims and changed sentences only)

Scope: claims with status "drafted" (enricher-E3), plus page sentences added or changed on 2026-11-09. To find those sentences I compared each page with the Nov 8 build in dist/guides/<slug>/index.html. Sources were re-fetched on 2026-11-09:
- GitHub SP-API models: the raw files on raw.githubusercontent.com/amzn/selling-partner-api-models/main/…, grepped for the exact description strings.
- developer-docs.amazon.com: through the `fetched_via` host (developer-docs.amazon). The proxy blocks the .com host.
- rfc-editor.org (RFC 3629), nysenate.gov (GBL § 396-B, bill S8420 actions list and sponsor memo), governor.ny.gov, sell.amazon.com, advertising.amazon.com, aboutamazon.com: with WebFetch.

No claim was rejected.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/title-limit-984-million | 21 (-23…-43) | 21 | 0 (1 note) | 0 | ~1,531 | no |
| guides/ai-image-tagging-rule | 12 (-25…-36) | 12 | 0 (3 notes) | 0 | ~1,164 | no |
| guides/main-image-compliance | 21 (-27…-47) | 18 | 3 | 0 | ~1,450 | no |
| guides/listing-optimisation-a10 | 13 (-27…-39) | 11 | 2 | 0 | ~1,262 | no |
| guides/rufus-listing-optimization | 11 (-26…-36) | 9 | 2 | 0 | ~1,160 | no |

## Corrections (claims)
- main-image-compliance-45, -46: the ad-spec page (component-based creative) never mentions **Amazon DSP**. It covers Asset-based Creative and Brand Store Creative. The attribution was corrected in both claims, in the body sentence and in the Compare column header.
- main-image-compliance-39: widened to give the meaning of all three exemption values (EXEMPT = permanent), from the same schema description. This fixes the table cell "applied now, later, or not at all".
- listing-optimisation-a10-27: eligibility is stated per report. SQP and SCP need the Brand Analytics role plus Brand Registry. The Amazon Search Terms report also needs a brand representative. "The same reports" was too broad; the claim and the sentence were narrowed.
- listing-optimisation-a10-30: added the field names the table lists (searchFrequencyRank, clickShare, conversionShare). They are property names in the raw schema.
- rufus-listing-optimization-28: widened with the rest of the source sentence ("features and customer sentiment frequently mentioned across written reviews").
- rufus-listing-optimization-31: added "live in the Amazon Shopping app for a subset of U.S. customers", which the timeline states and the release supports.

## Page sentences removed or reworded (no source / inference presented as fact)
- title-limit: in the table, "Backend keywords, not shown to shoppers" became "Backend search terms", and "What is in the box" became "Included components". The inference "so the 200-character figure is the general ceiling, not a promise for every category" became "so check your product type's limit there as well". "custom keyword" became "keyword". The examples "accented letters and the degree sign" were removed, because RFC 3629 gives only ranges. "you do not need a schema…" became "you can request a schema that does not enforce required attributes". "The last code ties to a schema flag" was reworded so it no longer asserts a causal link. "a mismatch means Amazon split or adjusted it" became "the catalog value is Amazon's reconciled version". "Brand owners can also be told" was reworded, because the notification schema does not name brand owners.
- ai-image-tagging-rule: "so the label does not depend on whether a vendor calls its tool AI" became "not limited to generative AI tools". The sentence "expressive works … will rarely fit a physical product listing" was removed (speculation; the examples were not in a claim). The media carve-out sentence was rewritten to say the list is open-ended ("including, but not limited to") and does not name marketplaces, citing -28 and -04. The sentence "The guide says nothing about generating or labeling people" was removed (uncited, though true per fetch). In the Compare cell, "A+ Content module builder" became "A+ Content AI features".
- ai-image-tagging-rule, **180-day arithmetic**: Dec 11, 2025 + 180 days = Jun 9, 2026 (20+31+28+31+30+31+9 = 180), which is correct. The governor.ny.gov release is dated June 9, 2026 and says the law "is now in effect", but it states no effective date or day count. The sentence is now labelled "By this page's own count (not a date stated in the statute)" and cites -12.
- main-image-compliance: the summary's "with an enforcement action and exemption status attached" became "which can carry…". "INFO" was dropped from the severity row (no claim). The source line title was corrected to "6 tips for taking product photos in 2025". "not yet hurting the listing" became "enforcement actions are not applied until that date passes". "the signal that a fix has cleared" became "no issues are currently affecting the listing". "Brand owners can also be alerted" was reworded.
- listing-optimisation-a10: the **summary bullet misattributed** "impression counts include sponsored results" to Search Query Performance. The source says this of Search Catalog Performance, so the bullet was fixed. "The three that matter" became "Three of them". "Across all queries" was dropped from the SCP table cell. "Constraints catch people out" was reworded. "an ad campaign can raise impression counts without any change in organic placement" became "the count is not an organic-only measure". "the closest Amazon-provided view" (superlative) was removed.
- rufus-listing-optimization: the Buy for Me release never mentions Rufus or an assistant. The page now calls it a separate Amazon Shopping app feature, and the "looks beyond Amazon" sentence now cites -11. "The announcement does not say how a brand joins or leaves" was confirmed and reworded with a -33 citation. The absolute "Advice that claims to know those weights has no Amazon source behind it" was restored to the hedged "we found none…" wording. "review summary … which facts buyers mention most" became "review highlights show which product features buyers mention frequently", citing -28.

## Arithmetic (all inside "Worked example (hypothetical)" blocks)
- title-limit: 480×1 + 10×2 = 500 bytes; one more "é" gives 491 chars / 502 bytes. Correct.
- ai-image-tagging-rule: $1,000 + $5,000 × 2 = $11,000. Correct; the counting assumption is stated.
- main-image-compliance: the three files were checked against 500–10,000 px and the >1,000 px preference. Correct.
- listing-optimisation-a10: "pick other products about three times more often than its visibility would suggest (0.12 ÷ 0.04 = 3)" was a wrong interpretation of shares. It now reads "click share is one-third of its impression share (0.04 ÷ 0.12 ≈ 0.33)". "holds its share" became "rises slightly".

## Check
`node tools/check-page.mjs` on all five pages: no ERROR. The remaining warnings are FAQ-wording warnings on questions unchanged since Nov 8. The one FAQ added Nov 9 ("Amazon main image size?") is in research/suggest-v4-writer-W-G.jsonl.
