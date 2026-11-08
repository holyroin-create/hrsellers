# verifier-VA1: verification report (2026-11-08)

Scope: the guides `hts-classification-basics`, `entry-type-11-vs-01` and `customs-bonds`, plus their `data/claims/*.json` files.
Method: I re-fetched every source with WebFetch and asked for the verbatim passages. eCFR subpart and section URLs returned robots_disallowed this session (part 141 subpart A, part 142 subparts A and B, part 143 subpart C, § 24.23, and the eCFR renderer API), so I read the same text on the part-level pages (parts 24, 141, 142, 143), long pages in offset chunks. Where that happened, `source_url` now points to the part page I read. I read the FR documents through govinfo HTML (`fetched_via`); `source_url` stays on the federalregister.gov document page. I created no new claim objects. Build (`ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build`): 66 pages, no MDX errors.

## Counts

| Page | Checked | Verified as drafted | Corrected in place | Rejected |
|---|---|---|---|---|
| hts-classification-basics | 40 | 25 | 15 | 0 |
| entry-type-11-vs-01 | 31 | 14 (+3 evidence-only cleanups) | 14 (wording/scope) | 0 |
| customs-bonds | 27 | 15 (+6 URL/note only) | 9 (wording/scope) | 0 |

All 98 claims are `status: "verified"`, `verified_by: "verifier-VA1"`. Every claim that changed in any way has a `verifier_note`: 15 / 17 / 12. Every claim is cited on its page, and every marker resolves to a claim.

## Writer-flagged items
- **GRI text (hts-11 to hts-20).** I could not fetch the current HTSUS General Rules as text. hts.usitc.gov `reststop/file?...General Rules of Interpretation` returned binary for both `currentRelease` and `2026HTSRev22`. The usitc.gov GRI page only links an older PDF (1001gn.pdf), and the Revision 22 download is a binary file. I verified all ten claims against the 2004 archive PDF (0400gn.pdf, "Harmonized Tariff Schedule of the United States (2004)"). Each claim now begins "In the 2004 HTSUS edition archived by USITC…". The page has a bold **Edition note** telling readers to check the current edition on hts.usitc.gov, and the Additional U.S. Rule sentence says "(2004 edition)". Wording fixes:
  - 3(b): "goods put up in sets for retail sale", not just "sets".
  - 3(a): added the "prima facie classifiable under two or more headings" condition.
  - 3(c): added "among those which equally merit consideration".
  - 5(a): added the specially-shaped, long-term-use and entered-with conditions.
  - 6: now states what the rule says.
  - U.S. Rule 1(a): added "(other than actual use)".
- **entry-13 (FY2027 MPF min/max).** I confirmed every value in FR 2026-15530 Table 2 (CBP Dec. 26-14, 91 FR 48398): min 34.58, max 670.86, informal automated 2.77, manual 8.30, CBP-prepared 12.45, "required as of October 1, 2026". The table has one amount column ("New fee/limitation adjusted in accordance with the FAST Act"), so these are the FY2027 figures. I removed the "..." from the evidence fields (-13 to -16).

## Material corrections
- **entry-03 / 19 CFR 143.21(a).** The $2,500 informal rule has an exception: "except for articles valued in excess of $250 classified in Chapter 99, Subchapters III and IV, HTSUS". It was missing from the draft. I added it to the claim, first paragraph, summary, Compare row, mistakes table, Decision row and FAQ.
- **entry-06 / 143.26(a).** "Owner or purchaser … using reasonable care" applies to shipments "valued between $800 and $2,500", and a designated licensed broker may also enter them. The scope is now on every use.
- **entry-18.** The exemption covers "An importer or exporter" acting solely on his own account, not "a person". The Decision row "You need a broker license" became "the own-account exemption does not cover you; check Part 111". The general licensing requirement was not fetched.
- **entry-10/-11.** 142.12(b): "with estimated duties attached", when not filed at entry. 142.15: the demand is the entire bond amount on a single entry bond.
- **entry-21/-27/-28.** Added the "$2,500 or less" scope; named the One Big Beautiful Bill Act; the FIOR applicability quote is footnote 23 ("Operationally…"). The interim final rule is effective Jan 5, 2027.
- **hts-31 / 177.10.** The source says publish in the Customs Bulletin "or otherwise make it available for public inspection". I fixed the keyFact label and the body sentence to match.
- **hts-02/-03/-04/-30.** Wording aligned to the source ("used on entries", "goods … provisions of", the full 177.9(c) clause, and "where tariff rates are assigned").
- **bonds-01 / page lead.** "You need a customs bond for any formal entry" became release at the time of entry under 142.4(a). The summary notes the 142.4(c) waiver. bonds-03 now lists the three waiver conditions.
- **bonds-04 / 113.1.** Scoped to where a bond is "not specifically required by law or regulation".
- **bonds-13 / 113.62(d).** Redelivery applies to conditionally released merchandise, in the listed cases only.
- **bonds-15.** "Specified cases" = restricted or prohibited merchandise or alcoholic beverages.
- **bonds-19.** Extended with FR footnote 3: "The terms and conditions for bonds with Activity Code 1 are set forth in 19 CFR 113.62". This sources the AC1-to-113.62 link.
- **bonds-08/-23/-26.** Added "general character of the merchandise", "has the right to make entry", and the type 11/13 scope of the proposed $1,000 minimum.
- **bonds-20.** The FR summary says "most bonds" go electronic; the body says all (by EDI or email). An FR API search shows no final eBond rule, so "still proposals" stands.

## Uncited or unsupported text removed or reworded
- **HTS:** "matters for many consumer goods"; "That is why a ruling request asks…" (causal claim); "Before CBP acts" (prior-disclosure timing); "the code you export under is not the code you import under" (USITC says the codes are "very similar").
- **Entry:** "classification, value and origin … same reasonable-care standard applies whether…"; "set by private providers, not by the regulations"; "CBP's call at the port" (now tied to 143.22); the importer-of-record guide cross-reference.
- **Bonds:**
  - The FAQ line "premium … set by the surety, not by the regulations".
  - The Compare cell "Value and nature of the goods, if CBP asks" (not in any source).
  - The Activity Code row that implied both bond types use AC1.
  - "ask your surety to confirm … ports".
  - "the same late filing can cost very different sums".
  - "CBP's revenue office".
  - "taking effect in January 2027" (no claim on this page).

## FAQ
- **HTS.** All questions now come from faq-bank.json: "How to determine HTS code?", "What is HTS code used for?", "Is HTS code the same as Schedule B?", "How do I find my HTS code?". I dropped the non-bank questions ("What happens if HS code is wrong?", the binding-ruling and HTS-change questions); the body still covers that material.
- **Entry.** faq-bank has no entry-type questions. I kept "Informal entry vs formal entry: what's the difference?" (not in any research file; flagged for the editor). I added "What is the current merchandise processing fee?" and "Is de minimis still in effect?" (both bank). I dropped the informal-limit and "customs broker … China" questions (not in the bank).
- **Bonds.** "How much is a customs bond?", "How does a customs bond work?", "What does a customs bond cover?", "How to get a customs bond?" — all from the bank.

## Arithmetic
- **MPF:** 0.3464% × 2,000 = 6.93 → min 34.58; × 20,000 = 69.28; × 250,000 = 866.00 → max 670.86. Correct.
- **113.62(n)(4):** 2×400 = 800 → 1,000; 2×3,000 = 6,000. Correct.

## Related
- **hts:** entry-type-11-vs-01, customs-bonds, country-of-origin-sourcing, tariff-stack-2026, prior-disclosure-protests, customs-holds-and-exams.
- **entry:** customs-bonds, hts-classification-basics, merchandise-processing-fee, de-minimis-suspension-2026, incoterms-who-is-importer, customs-holds-and-exams.
- **bonds:** entry-type-11-vs-01, incoterms-who-is-importer, de-minimis-suspension-2026, customs-holds-and-exams, hts-classification-basics.

## Other
I found no claims of experience, testing, clients or interviews. Body word counts are about 1,540 / 1,420 / 1,310 (within 1,200–2,200).
