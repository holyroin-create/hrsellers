# verifier-VA2 — verification report (2026-11-08)

Scope: guides `incoterms-who-is-importer` and `customs-holds-and-exams` and their `data/claims/*.json`.
Method: re-fetched every source with WebFetch and asked for verbatim passages. Compared numbers, business days vs days, scope and conditions. No new claim objects were created. Build (`ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build`) completes: 66 pages, no MDX errors.

## Counts

| Page | Checked | Verified as drafted | Corrected in place | Rejected |
|---|---|---|---|---|
| incoterms-who-is-importer | 32 | 26 | 6 (-07, -09, -18, -19, -27, -28) | 0 |
| customs-holds-and-exams | 35 | 24 | 11 (-02, -03, -04, -06, -08, -17, -18, -28, -31, -34, -35) | 0 |
| **Total** | **67** | **50** | **17** | **0** |

All 67 claims now have `status: "verified"` and `verified_by: "verifier-VA2"`. Every corrected claim has a `verifier_note`. Some claims that were verified as drafted only had their source URL changed (see below).

## Sources re-fetched
- FR Doc. 2026-22735, 91 FR 69977. The document page and `api/v1/documents/2026-22735.json` both failed, so I read it via govinfo HTML (`fetched_via`); `source_url` is still the federalregister.gov document page.
- eCFR 19 CFR Parts 101, 111 subpart A, 113, 141, 151, 162, 171, and 127 subparts A and B. The page reads "up to date as of 10/15/2026".
- These URLs are robots-blocked: Part 141 subparts A, B and C, and Part 127 as a whole part. Claims that pointed at them now use `source_url` .../part-141 or .../part-127/subpart-A|B, with a note.

## Foreign importer-of-record rule (FR 2026-22735). DATES section, verbatim
- "This interim final rule is effective on January 5, 2027." (-13 verified)
- "Comments on the rule must be received on or before January 5, 2027." (-14 verified)
- "All customs brokers are expected to be in full compliance with the requirements of this rule no later than May 6, 2027." (-15 verified). The DATES section also lets brokers request delayed compliance with 19 CFR 111.29 changes before January 5, 2027. This is noted in the claim; the page does not mention it.
- Header: "[USCBP-2026-1387; CBP Dec. 26-19]", RIN 1685-AA48. ACTION: "Interim final rule; request for comments."

## incoterms-who-is-importer-32 evidence with "..." (checked line by line)
1. "[Federal Register Volume 91, Number 214 (Friday, November 6, 2026)]": present verbatim
2. "[Rules and Regulations]": present
3. "[Pages 69977-70007]": present
4. "CBP Dec. 26-19]": present, as the tail of "[USCBP-2026-1387; CBP Dec. 26-19]"
The title "Heightened Requirements for Foreign Importers of Record" is confirmed. Verified.

## Corrections: incoterms-who-is-importer
- -27: the rule says CBP "now has the ability to require live entry **and** discontinue immediate delivery privileges". The draft said "or". Claim and sentence corrected.
- -28: the rule describes an IOR as "registered with CBP by submitting CBP Form 5106". The "request a CBP-assigned number" wording is aimed at foreign parties, not at every importer. Claim and sentence narrowed to registration.
- -18 / -19: -18 now lists the actual alternative criteria: at least 51% U.S.-citizen/LPR beneficial owners who control the entity, or direct ownership of significant unencumbered U.S. real property. -19 now includes the "exercises substantial control" prong. The sentence that read "which is why the rule defines a beneficial owner by a 25 percent threshold" was an unsupported inference and has been rewritten.
- -09: the source says "An importer or exporter", not "a person".
- -07: 141.18 also allows "the State from which the remote location filing originates", and it is scoped to entry for consumption. Updated the table and summary.
- Body: "how a consignee steps out of the liability chain" went beyond the source. It now reads "relieved from statutory liability for increased and additional duties", per 141.20(a)(1). "141.17–141.20" was changed to "141.17, 141.18 and 141.20" because 141.19 is not cited.

## Corrections: customs-holds-and-exams
- **19 CFR 151.16, business days vs days:** (b) "Within five business days from the date on which merchandise is presented..."; (c) notice "within five business days from such decision or failure to release"; (e) "within 30 days from the date the merchandise is presented"; (f) "within 30 days after..." with no "business" qualifier. Claims -09, -10, -15 and -16 and the page's "Note the units" paragraph match the source and are verified.
- -02: added "unless a special regulation permits a lesser number". -03: non-disclosure lasts only until the goods arrive "within the limits of the port of entry". The summary, Compare cell and body were all fixed.
- -04: 151.4 lists exceptions, so the page now says "generally". -06: public-stores exams are excepted. -08: the scope is "outside a port of entry or permanent Customs station", not "outside port limits", and the officer's regular-hours salary is excluded. Table and FAQ fixed.
- -17: a written request gets copies of the test results. -18: "If otherwise provided by law".
- -28: the bond is "$5,000 or 10% ... whichever is lower, but not less than $250". The draft left out both qualifiers. The Stat label was trimmed to the 20-day fact (-27) only.
- -31: added "without all estimated duties and storage or other charges having been paid", plus the shorter period for special merchandise.
- -34: 113.62(d) applies to conditionally released goods, in three listed cases. -35: scope is "arriving in the Customs territory of the United States".

## FAQ questions
- incoterms: questions are now bank or research wording: "What is the importer of record responsible for?" (bank), "What are the requirements to be an importer of record?" (faq-raw), "How to become an importer of record in the USA?" (bank), "...importer of record and consignee?" (suggest-raw "importer of record vs consignee"), "Who is the importer of record on a DDP shipment?" (bank). Answers recheck against -28, -13, -25, -23, -20, -02, -04.
- customs-holds-and-exams: neither faq-bank.json nor the raw files have any exam, hold or seizure questions. I kept the four drafted questions and corrected their answers; flagged for the editor.

## Arithmetic / worked examples
Neither page has a worked example or any arithmetic.

## Experience claims / uncited facts
No experience, testing, client or interview claims. Remaining uncited sentences are framing or advice only, for example "Do not ship until that is settled in writing" and "Keep your own file either way."

## related
- incoterms: added `country-of-origin-sourcing` and `prior-disclosure-protests`. It already had customs-bonds, entry-type-11-vs-01, hts-classification-basics and customs-holds-and-exams.
- customs-holds-and-exams: added `prior-disclosure-protests`, `origin-marking-requirements` and `us-product-compliance`.

## Editor flags
- Rough body word counts with components stripped are about 1,030 (incoterms) and 960 (customs holds). Counting component text, they may reach the 1,200 floor. This was not adjusted by the verifier.
