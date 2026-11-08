# Verification report: verifier-V5

Date: 2026-11-08. Every source_url was opened with WebFetch in this session. Where a section URL was robots-blocked (eCFR 255.2, FR doc 2026-18853 HTML), the part-level page, the FR full-text .txt, or the API JSON was used instead.

## review-manipulation-risk
- Checked 21 claims and added 1 (22 in total). 22 verified, 0 rejected.
- Corrected:
  - 05: 465.2(b) says "purchase" a review and "disseminate" a testimonial. The word "procure" is gone.
  - 11: 465.7(a) also covers an "unfounded or groundless legal threat". It is now added.
  - 12: 465.7(b) has seven exceptions. The page listed three; it now lists all seven.
  - 13: the claim now also covers 465.8(b) (purchase or procure), which the page sentence already described.
- Penalty: eCFR 16 CFR 1.98(d) shows $53,088 (up to date as of 7/13/2026; source 90 FR 5581). It applies to penalties assessed after January 17, 2025, including penalties for violations before that date. FTC notice 2026-18853 (Sept 15, 2026) states the amounts "will remain unchanged during 2026" and that the FTC keeps the 2025 levels. New claim -22 (produced_by verifier-V5) cites this, with a matching sentence in the Penalty section.
- Summary bullet 3 reworded. "Reviews ... are endorsements" became "free or discounted products are a material connection", which matches 255.5(a).
- Part 255 quotes in 19 and 20 confirmed word for word on the part-level page.

## hazmat-dangerous-goods
- Checked 28 claims. 28 verified, 0 rejected.
- 10 (evidence was paraphrased): replaced with the exact text of 173.185(a)(3). The claim matches, including the button-cell exception.
- 05: the "limited quantity" definition on the page now quotes the fetched text ("the maximum amount of a hazardous material for which there is a specific labeling or packaging exception").
- 16 and 17: 173.156 confirmed through the subpart D page at offset 100000.
- Worked example (3.7 V × 20 Ah = 74 Wh; 3.7 × 30 = 111 Wh) is correct.
- Title cut to 69 characters.

## us-product-compliance
- Checked 21 claims. 21 verified, 0 rejected.
- 03 (evidence was paraphrased): replaced with the exact text. The source is now correction 2025-18521, which renames the two dates "applicable".
  - Effective date: July 8, 2026 (as of Sept 23, 2025).
  - Applicable July 8, 2026: all certifiable regulated products except FTZ imports.
  - Applicable January 8, 2027: products imported into an FTZ and then entered for consumption or warehousing.
- Federal Register API checks, all run 2026-11-08:
  - the term query requested in the brief, which returned only FERC items;
  - the CPSC agency filter with "certificates of compliance";
  - the CPSC agency filter with "eFiling".
  None found a 2026 document that delays or changes the rule, so the page dates stand.
- 07 (evidence was paraphrased): replaced with the exact text of 1110.7(b), fetched in full. The claim matches.
- 13: the de minimis sentence was found word for word (preamble Response 42).
- 09: the page now says "offered for importation" to match 1110.13(a)(1).
- 11: the page now quotes "prior to filing entry with CBP".
- 1110.11 table: the identifier and attestation rows were refined to match the text.
- Description cut to 156 characters. Reading time set to 6 minutes.

## accrual-accounting-cogs
- Checked 24 claims. 24 verified, 0 rejected.
- Pub 334 (2025): "For use in preparing 2025 Returns". The test reads "$31 million or less for the 3 prior tax years (indexed for inflation)", plus not being a tax shelter under section 448(d)(3). This matches the hero and the body exactly.
- Pub 538 shows "Revised: January 2022" and the figure "$26 million or less (indexed for inflation)". The page now says plainly that this figure is frozen at that revision and is not the 2025 amount.
- 03: the quote was corrected to "Under an accrual method of accounting, ...".
- Removed an uncited sentence: "Neither option turns a bulk purchase of stock into an immediate deduction".
- The non-incidental materials and supplies bullet was rewritten to quote only fetched text.
- Worked example (40,000 + 148,000 + 6,000 = 194,000; 194,000 − 55,000 = 139,000) is correct.
- Title cut to 59 characters. Reading time set to 6 minutes.

## Checks on all four pages
- Every `<C>` id and component claim id exists in the JSON, and every JSON id is used in the MDX.
- The JSON is valid.
- Only primary sources are used (ecfr.gov, federalregister.gov, irs.gov).
- There are no experience claims and no mentions of AI, affiliates or ads.
- Each page has a hero, at least two of the required components, and a "What to check yourself" section.
- Body length is 1,300–1,620 words per page.
