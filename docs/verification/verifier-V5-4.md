# verifier-V5-4: 2026-11-09 enrichment pass (drafted claims and changed sentences only)

Scope: claims with status "drafted" (enricher-E4), plus page sentences added or changed on 2026-11-09. I found those sentences by comparing each page with the Nov 8 build in dist/guides/<slug>/index.html. All sources were re-read on 2026-11-09:
- GitHub SP-API models: raw.githubusercontent.com files (accountHealthReport-2020-11-18, listingsItems_2021-08-01, ListingsItemIssuesChangeNotification_2023-12-13, customerFeedback_2024-06-01, catalogItems_2022-04-01), grepped verbatim.
- developer-docs.amazon.com: via WebFetch. It 302-redirects to developer-docs.amazon, which is Amazon's own .amazon domain, so the `fetched_via` values are correct.
- sell.amazon.com, trustworthyshopping.aboutamazon.com and uspto.gov: via WebFetch.
- 16 CFR 465: govinfo CFR-2025-title16-vol1 part 465 XML (edition date 2025-01-01), via WebFetch.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/order-defect-rate | 16 (-19…-34) | 16 | 0 | 0 | ~1,261 | no |
| guides/account-suspension-appeal | 13 (-22…-34) | 13 | 0 | 0 | ~1,536 | no |
| guides/ip-complaints-retractions | 29 (-34…-62) | 27 | 2 | 0 | ~1,076 | no |
| guides/vine-and-early-reviews | 13 (-35…-47) | 13 | 0 | 0 | ~1,314 | no |
| guides/variations-review-pooling | 12 (-31…-42) | 12 | 0 | 0 | ~1,264 | no |

## Corrections (claims)
- **ip-complaints-retractions-39 / -40: the APEX deposit is $5,000, not $4,000.** I fetched sell.amazon.com/brand-registry five times on 2026-11-09 (the plain URL, `/`, and three query-string variants). Four fetches returned "Participation in an evaluation requires both parties to deposit $5,000 with the neutral evaluator" and "The winning participant receives their $5,000 deposit back." Only one fetch reported $4,000, and its prompt had itself named "$4,000" as an example, so I treat it as a summarizer artifact. I corrected the claims and evidence. The page now says $5,000 with the check date (Nov 9, 2026) in the description, key fact, summary, intro, APEX table and worked example. The example's arithmetic is now 2 × $5,000 = $10,000.

## Report a Violation blog post (sell.amazon.com/blog/report-a-violation-to-amazon)
- The post still shows Mar 26, 2025, with no updated date. Today it says "Report Infringement form in Seller Central" (claims -34, -35, -36 verified).
- It no longer mentions the Public Notice Form, "up to 50 ASINs", the "Open details" / "Retract a complaint" steps, "more robust", "Amazon reviews the complaint", or submission history on the Brand Registry homepage. The Nov 8 claims built on those statements are gone from both the JSON and the page; I grepped to confirm no text or marker remains.
- Claims -30, -31 and -32 (definitions of copyright, trademark and patent) are still in the post.
- The Jul 31, 2026 announcement (blog/announcements/report-a-violation) does not cover withdrawing a report, a review time, or individual fields. The page now says this about "the Amazon pages checked … on Nov 9, 2026". It no longer claims the steps sit under a specific Brand Registry help topic.

## Page sentences removed or reworded (no source)
- **ip-complaints-retractions:**
  - Removed "so connected software can flag the change on the day it happens".
  - "A complaint lands in two places for the seller" became a neutral sentence about where the data appears. The summary bullet no longer says a received complaint shows up as LISTING_SUPPRESSED (that link is not in any source).
  - The trademark row no longer says "not required to have rights"; it now uses the USPTO wording.
  - Removed "registration or application number" from the checklist.
  - Dropped "paid" from the APEX intro and added "US".
  - Rewrote the FAQ answer "How to remove intellectual property complaints on amazon?" so it no longer asserts where the withdrawal steps are published.
- **account-suspension-appeal:**
  - **Fixed a logic error in the worked example**: an AT_RISK→DEACTIVATED message marks the deactivation, not "when the problem began".
  - Removed "date" from the notification log claim (the payload claim covers only previous and current status).
  - Removed "an appeal is about the store where the status changed", "lists more policy categories than the dashboard summary suggests" and "An account problem often shows up first on individual listings".
  - Replaced "a single open item can be enough to move the status" with a direct reading of the sample (EQUALS 0).
  - "That date is your deadline" became "the expiry date is when enforcement starts".
  - The policy-field table lost its unsourced "What to collect for the appeal" column (invoices, testing documents, and so on). Its wrong row text "Categories outside the named groups" for foodAndProductSafetyIssues / otherPolicyViolations was replaced with the field meanings.
  - "Invoices and supply chain" in the example became "the documents behind those products".
  - Summary: "suppressed or removed listings" became "for example as suppressed listings".
- **order-defect-rate:**
  - "Your account-specific benchmark" and "account-specific target" were reworded, because nothing sourced says the target is account-specific.
  - "In the same units as the sample record" became "written in the same format".
  - The Seller Central Help pointer no longer asserts an exact help-page title.
- **vine-and-early-reviews:**
  - Removed "a quick way to see which of your listings it already treats as eligible" and "long enough to compare topics before and after a Vine batch".
  - Removed "the federal backdrop for any program that gives products to reviewers" and "where these sections bite".
- **variations-review-pooling:**
  - "Published only in Seller Central Help" became "published in Seller Central Help".
  - Removed the inference "so a multipack linked that way is not a variation".
  - The checklist item about linking multipacks became a check of the relationship type.
  - Worked example: the six-month trend operation takes a child ASIN, so "topic share for the family" became "for the S child". The "fix belongs on S" advice was softened.

## Arithmetic (all inside "Worked example (hypothetical)" blocks)
- ODR: Aug 27 to Oct 25 inclusive = 60 days; 8 + 5 + 3 = 16, which is 2 more than 14; 14 ÷ 2,000 = 0.7%. Correct.
- APEX: 2 × $5,000 = $10,000 (corrected from $8,000).
- Vine calendar: Mar 29, 2027 is a Monday; minus 21 days = Mon Mar 8; +30 = Apr 7; +90 = Jun 6. Correct.
- Variations Vine: $200 ÷ 5 = $40 and $200 ÷ 25 = $8. Correct.

## Frontmatter
- ip-complaints-retractions and vine-and-early-reviews carry `produced_by`/`verified_by`/`status` keys. The schema does not use them (zod strips them). `verified_by` said only "verifier-V4-F", which was misleading after the Nov 9 additions. It now reads "verifier-V4-F (Nov 8 claims); verifier-V5-4 (Nov 9 claims)". `status: "verified"` is accurate now that every claim on both pages is verified.
- The other three pages have no such keys.

## Rejected
None.

## Notes
- Pre-existing and not changed on 11-09, so out of scope: the variations-review-pooling FAQ questions trigger check-page "not verbatim" warnings. All three questions were already in the Nov 8 build.
- Verified claims from before Nov 9 (for example the ip-complaints-retractions-22 to -27 Trustworthy Shopping figures) were not re-checked in this pass.

check-page: no ERROR on all five pages.
