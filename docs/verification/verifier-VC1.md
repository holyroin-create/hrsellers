# Verifier report: verifier-VC1 (2026-11-08)

Scope: guides `duty-drawback`, `foreign-trade-zones`, `prior-disclosure-protests` and their `data/claims/*.json`.
Method: re-fetched every source via WebFetch (eCFR part/subpart pages: 19 CFR 190 Subparts A–G, I; 19 CFR 146 Subparts A, D, F; 15 CFR 400 (two offsets); 19 CFR 159 Subpart A; 19 CFR 173; 19 CFR 174 Subparts B, C; 19 CFR 162 Subpart G; GovInfo USCODE-2023 19 U.S.C. 81c and 1484). Asked for verbatim text and compared it with each claim (numbers, working/business/calendar days, scope, conditions).

| Page | Checked | Verified as written | Corrected | Rejected |
|---|---|---|---|---|
| duty-drawback | 36 | 34 | 2 | 0 |
| foreign-trade-zones | 38 | 34 | 4 | 0 |
| prior-disclosure-protests | 38 | 36 | 2 | 0 |

All claims are now `status: verified`, `verified_by: verifier-VC1`. Corrected claims carry a `verifier_note`.

## Corrections
- **duty-drawback-08**: 190.32(d)(1) is a wine alternative that *refers to* the 8-digit standard in 190.2. Reworded the claim and page sentence.
- **duty-drawback-22** (writer flag): confirmed the full sentence: "Claims not completed within the 5-year period after the date on which the merchandise designated as the basis for the drawback claim was imported will be considered abandoned." Claim expanded and page sentence aligned. duty-drawback-23 confirmed: "Except as provided in paragraph (e)(2)..., no extension will be granted unless...CBP was responsible."
- **foreign-trade-zones-04**: added "with the zone grantee".
- **foreign-trade-zones-14**: added the qualifier "in a manner which has effected a change in tariff classification" (claim, body and Compare cell).
- **foreign-trade-zones-18**: added the 146.43(a) domestic-status categories so the page's "US goods / duty-paid goods" description has a source.
- **foreign-trade-zones-28**: scope added. 146.63(c) weekly entry covers goods manufactured or changed in the zone within 24 hours before transfer, which is separate from the 19 U.S.C. 1484(i) option. Steps text reworded.
- **prior-disclosure-protests-04**: added "except as provided in 159.12". The keyFact and chart label "Normal liquidation" changed to "Deemed liquidation if not extended".
- **prior-disclosure-protests-12**: the limit is on *reliquidating* to correct a clerical error, mistake of fact or inadvertence. Claim, Decision row and callout reworded. Removed "After that, it cannot be fixed."

## Writer flags confirmed
- Statute wording (GovInfo 2023): 81c(a) "without being subject to the customs laws of the United States", the list of operations, and "subject to the laws and regulations ... affecting imported merchandise" all confirmed. 1484(i)(1): any 7-day period, option of operator or user, filed on or before first day, summary covers only merchandise actually withdrawn. 1484(i)(3): prohibited-by-law exclusion. All confirmed.
- Liquidation: 1 year, extensions up to 1 year each, 3-year total cap, 4-year outer limit "unless liquidation continues to be suspended by statute or court order". All confirmed.
- Protest: 180 days for entries on or after Dec 18, 2004 (90 days before); 2 years for CBP action; deemed denial "at the close of the 30th day following such date of mailing"; CIT action within 180 days after mailing of denial or deemed denial. All confirmed.
- 162.73 caps: fraud = domestic value; gross negligence = lesser of domestic value or 4x (40% no loss); negligence = lesser of domestic value or 2x (20% no loss). With prior disclosure: fraud 1x (10% no loss); negligence and gross negligence = interest from the date of liquidation at the 26 U.S.C. 6621 rate. All confirmed.
- Day units: drawback notices are 5 / 2 / 7 *working* days (190.35(a), 190.35(c), 190.42(c), 190.71(a)). FTZ entry summary is 10 *business* days (146.62). Prior disclosure is 10 days, 30 days and 30 days, with no "working" or "business" qualifier in the text. Protests are 180 calendar-unqualified days. Page wording matches.

## Other page fixes (uncited or overstated text)
- duty-drawback: removed "Repackaging or relabeling does not automatically disqualify", "commercially equivalent / exact units need not be traced", "importer can pass along drawback rights" and "Normally you are paid when the claim liquidates". The FAQ no longer says "CBP can verify every claim before it pays" or "payment normally follows liquidation". The Compare "Refund cap" cells for substitution and rejected merchandise (99% unsourced in claims) now point to the regulation.
- foreign-trade-zones: removed "Most marketplace sellers enter at that level... You do not apply for your own zone" and "Weekly entry is the filing benefit sellers ask about most". Replaced the uncited "re-exported goods never enter customs territory" with claim 20's actual wording. Dropped "about" in the exact arithmetic. Corrected the summary bullet on when classification is fixed. Corrected the Decision row on zone-restricted goods (public-interest exception).
- prior-disclosure-protests: changed "Every deadline runs from liquidation" to "The protest clock usually starts at liquidation". Removed the unsourced "missed preference program / value error" list. Changed the FAQ's "1-year steps" to "each time by up to 1 year". The worked example no longer says "owed either way"; it is tied to the tender requirement.
- Arithmetic rechecked: 4,200 x 0.99 = 4,158; 3,200 x 0.99 = 3,168; 100,000 x 10% = 10,000 and 25,000 x 10% = 2,500; (7.5% - 3.9%) x 200,000 = 7,200; 2 x 7,200 = 14,400. All correct.
- No experience claims found. The citation cross-check (page vs JSON) is clean on all three pages.

## Related slugs added
- duty-drawback: hts-classification-basics, antidumping-duties, entry-type-11-vs-01, tariff-stack-2026
- foreign-trade-zones: entry-type-11-vs-01, customs-bonds, hts-classification-basics, tariff-stack-2026
- prior-disclosure-protests: hts-classification-basics, entry-type-11-vs-01, customs-bonds, first-sale-valuation, country-of-origin-sourcing

Build: `ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build` completed with 62 pages and no MDX errors.
