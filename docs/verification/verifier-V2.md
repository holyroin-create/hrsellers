# Verification report: verifier-V2

Date: 2026-11-08. Each source_url was opened with WebFetch in this session. The eCFR renderer API was blocked by robots, so the checks used the eCFR part pages and section pages. Every claim now has `status: "verified"` and `verified_by: "verifier-V2"`. Where the page wording went beyond the source, the sentence and the claim object were both corrected from fetched text, and a `verifier_note` records the change. No claim had to be removed. For each target page, `tools/gate-claims.mjs` reports zero errors: every `<C>` and `claim` id resolves, and every claim is cited. The 356 errors the gate reports belong to other pages that have not been verified yet.

## origin-marking-requirements
- Claims checked: 24. Verified as written: 22. Corrected: 2 (-21 and -11). Rejected: 0.
- -21 (19 CFR 134.3(a)): the sentence left out the alternative to marking (depositing estimated duties or giving adequate security) and the condition that the goods are held in CBP custody and found not legally marked. Sentence and claim rewritten.
- -11 (134.46): the sentence left out the "may mislead or deceive the ultimate purchaser" condition. Sentence and claim rewritten.
- Removed one uncited sentence that described 134.32(g), (h), (j)-(l) and (n)-(q). Replaced it with a neutral pointer to the full section.
- Softened one unsourced generalization ("the rule most private-label listings run into").
- Worked example: 10% x $20,000 = $2,000. Correct.
- Frontmatter is valid and the hero claim -20 exists.

## country-of-origin-sourcing
- Claims checked: 17. Verified: 16. Corrected: 1 (-06). Rejected: 0.
- -06 (102.0): the list of Annex 311 purposes was made specific: textile and apparel products, plus Annex 302.2 originating goods.
- Removed an uncited claim about CBP practice ("decides case by case through rulings").
- Summary bullet narrowed to "the first two Section 301 actions", because the October 7, 2026 notice covers only the July 6 and August 23, 2018 actions.
- The FR numbers were confirmed exactly: 818 subheadings / $34B, 279 / $16B, 25%, and the mattress case numbers and periods of review.
- Frontmatter is valid and the hero timeline claim -14 exists.

## first-sale-valuation
- Claims checked: 22. Verified: 20. Corrected: 2 (-06 and -09). Rejected: 0.
- -06: added the "identified separately from the price" condition. Paragraphs are now cited exactly: transport is (i)(1)(ii) and duties/taxes are (i)(2). Table header and summary bullet updated.
- -09 (152.103(l)(1)): the regulation names "the Center director", not "CBP". Sentence reworded.
- Worked example: $8,500 x 30% = $2,550; $6,500 x 30% = $1,950; difference $600. Correct.
- Frontmatter is valid and the hero flow claim -01 exists.

## antidumping-duties
- Claims checked: 24. Verified: 21. Corrected or extended: 3 (-11, -15, -20). Claim text and evidence were tightened on -21.
- Build error "unknown claim antidumping-duties-19": not present now. -19 exists, is cited three times (hero, body, table note) and is verified. All 24 ids match between the MDX and the JSON.
- -11 (351.225(l)(1)): the page and a summary bullet implied that all entries are suspended during a scope inquiry. When an inquiry starts, the rule continues suspension only for entries that were already suspended. Both corrected.
- -20: extended with the notice's statement that the deposit rates for Saha Thai and TPP equal their 0.00% margins.
- Added a sentence stating that a 0.00% rate means no AD cash deposit on those two firms' entries and that the reviewed entries will be liquidated without regard to AD duties (cites -21). The table header now reads "for entries on or after Sept. 1, 2026". The company name was corrected to "Thai Premium Pipe Co. Ltd", as printed in the notice.
- -15: claim text aligned to the regulation ("or suspension of investigation occurs"). The source URL is the 351.102 section page.
- Frontmatter is valid and the hero claim -19 exists.

## All pages
No experience or testing claims, no forbidden sources and no AI mentions were found. All four JSON files parse. Body length is about 1,270–1,500 words per page (within 1,100–2,200).

## Gate conflict
`gate-claims.mjs` raises an error when `verified_by` equals `produced_by`. Under contract section 5, a claim a verifier adds itself must carry the verifier's name in `produced_by`, so any such claim would fail the gate. For that reason, corrections were made in place on the existing claim ids, with a `verifier_note`, instead of as new claims.
