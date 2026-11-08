# Verification report — verifier-VB

Date: 2026-11-08. Scope: guides origin-marking-requirements, country-of-origin-sourcing, first-sale-valuation and antidumping-duties, with their data/claims JSON files.

## Sources re-fetched (WebFetch, this session)
- **eCFR 19 CFR Part 134:** the part page (134.0, 134.11, 134.1(d)(1), 134.46) and subparts A–F. Subpart C was read twice to get verbatim 134.22, 134.25 and 134.26.
- **19 CFR Part 102:** the eCFR part, subpart B and API URLs are robots-blocked. The subpart A page gave the 102.1 "simple assembly" definition. 102.0 and 102.11 were read from the govinfo annual CFR edition (April 1, 2025, CFR-2025-title19-vol1-part102.xml), which is recorded in `fetched_via`.
- **eCFR 19 CFR Part 152, subpart E:** fetched twice, the second time for the verbatim 152.102(b) and 152.103(f).
- **eCFR 19 CFR Part 351:** subpart B (all three chunks) and subpart D (351.402(f)).
- **Federal Register, read through govinfo HTML:**
  - 2026-08806 (May 6, 2026 four-year review)
  - 2026-20510 (Oct 7, 2026 continuation)
  - 2026-20511 (Oct 7, 2026 conforming amendment)
  - 2025-21671 (exclusion extension)
  - 2025-23912 (semiconductors)
  - 2026-15181 (forced labor, including Annex I, U.S. note 52)
  - 2026-22660 (shrimp final results)
  - 2026-22658 (hangers circumvention)
  - 2026-22629 (Nov 5, 2026 initiation)
  - E8-1140 (2008 proposal)
  - 2010-24464 (withdrawal)
  - E8-19640 (2008 interim rule)
- **FR API searches:**
  - USTR documents, newest first: the latest is 2026-11-02, and none is an exclusion extension.
  - Term search "product exclusion" technology transfer, since 2025-11-01: finds only 2025-21671 and 2026-20511.
  - Current public inspection list: no new USTR exclusion notice.

## Counts
| Page | Checked | Verified | Corrected | Rejected |
|---|---|---|---|---|
| origin-marking-requirements | 44 | 38 | 6 | 0 |
| country-of-origin-sourcing | 25 | 23 | 2 | 0 |
| first-sale-valuation | 34 | 32 | 2 | 0 |
| antidumping-duties | 32 | 27 | 5 | 0 |

The "Verified" count excludes corrected claims. All claims now carry status "verified" and verified_by "verifier-VB". Corrected claims are explained in their verifier_note. Notes on claims that were verified unchanged: sourcing -20 (record of the extension search), sourcing -04 to -09 (govinfo source) and antidumping -21 to -23 (evidence rebuilt from the margin table).

## Writer flags
1. **Section 301 exclusions.** The latest notice is 2025-21671 (Dec 1, 2025). It extends the 178 exclusions through 11:59 p.m. EDT on November 9, 2026, per its DATES section and annexes. Its determination paragraph says "until November 10, 2026". There is no later extension: 2026-17925 and 2026-20511 are conforming HTS amendments with no end-date change. The page and FAQ now cite that notice by date and say that, as of Nov 8, 2026, no further extension had been published. The keyFact reads "11:59 p.m. EDT, Nov 9, 2026".
2. **Shrimp evidence.** The evidence strings for claims -21, -22 and -23 were rebuilt from the printed table as "row label | margin":
   - "Sao Ta Foods Joint Stock Company/FIMEX VN/Sao Ta Seafood Factory/Khang An Foods Joint Stock Company. | 10.71"
   - "Soc Trang Seafood Joint Stock Company; STAPIMEX | 6.36"
   - "Separate Rate Companies | 7.59"

   The Vietnam-wide 25.76% is "not subject to change" in this review. The claim, chart label and FAQ now say so.
3. **Stacking.** U.S. note 52(a) says that, "except as provided in subdivisions (b) through (k)", products under 9903.05.20–9903.05.84 "shall also be subject to" the general rates and to any additional duty in "this subchapter or in subchapter IV of chapter 99". The notice does not mention 9903.88 or the 2018 China actions. The body now quotes the note. In the worked example (4% + 25% + 12.5%), simple addition and non-application of subdivisions (b)–(k) are explicitly labeled hypothetical assumptions.

## Claim corrections
**origin-marking-requirements**
- -07: the manufacturer is the ultimate purchaser only if its process results in a substantial transformation (134.1(d)(1)).
- -20: 134.46 also covers U.S. city or location names.
- -21: the origin must also appear in at least a comparable size.
- -35: the new-container certification is in 134.25, which covers only J-list articles and articles incapable of being marked. The page had presented it as applying to all repacking. The summary, Steps and mistakes table were rescoped, and 134.26 retail repacking is kept separate.
- -39: the open-container carve-out does not apply where the container bears a U.S. address or other potentially misleading marking.
- -41: the 30-day rule is about examination packages, and the consequence is general-order storage (134.53(b)).

**country-of-origin-sourcing**
- -10: the full simple-assembly definition (fasteners excluded, no more than minor processing).
- -25: the note 52 wording and the (b)–(k) qualifier.

**first-sale-valuation**
- -12: a selling commission also covers an agent who "works for or on behalf of" the manufacturer or seller.
- -31: the source says "typically", not "generally".

**antidumping-duties**
- -12: 351.218(a) wording, "likely to continue or resume".
- -16: 351.225(l)(1) says "will", not "may".
- -24: the Vietnam-wide rate was not subject to change.
- -27: the deposit-rate continuation is limited to exporters that received a separate rate.
- -28: the notice says "or" the Vietnam orders, not "and".

## Page-text fixes (no claim change)
**Origin marking**
- Removed invented examples: "adding a hang tag" and "decorative tins".
- Removed the uncited closing line of the worked example ("Relabeling at origin would have cost far less").
- The "Made in PRC" mistake row now says abbreviations that unmistakably indicate the country are accepted (claim -16).
- The callout's container-marking sentence is now cited (-38).

**Sourcing**
- Removed an uncited NTR base-rate sentence and the "how importers usually think" assertion.
- The FAQ on substantial transformation no longer claims that Part 134 defines the test.
- A Decision row cited the 12.5% claim for an origin conclusion. It now cites -02.
- Summary wording softened: "rely mainly" and "often matters more" were not sourced.

**First sale**
- Removed uncited generalizations about trading-company reluctance and broker-only disclosure.
- "You cannot carry the burden" softened.

**Antidumping**
- Removed the uncited claim that an item "can carry no AD/CVD duty from one supplier".
- Removed the deposit-rate clause from the Final results step, which cited a claim that did not support it.
- The FAQ answer on AD/CVD is now cited.

## FAQ
- **Origin marking:** colon-style questions were replaced with "What is country of origin marking?", "Does country of origin need to be on packaging?" and "How to label country of origin?" (all bank wording), plus two plain questions.
- **Sourcing:**
  - "How is country of origin determined?" now uses bank wording.
  - "Substantial transformation test: what does it look for?" became "What is substantial transformation?".
  - Added "What are section 301 tariff exclusions?" (bank wording), using the existing claims -19 and -20.
- First-sale and AD questions were already plain; the bank has no matches for them.

## Other checks
- **Arithmetic:** recomputed every worked example:
  - origin marking: $600
  - sourcing: 41.5%, $8,300 and $800
  - first sale: $8,300, $6,300 and $2,000
  - AD: $3,036, $4,284, $1,248, $2,544 and $492

  All are correct.
- **Citations:** every marker and claim prop resolves to a claim, and every claim is cited.
- **Content rules:** no experience claims found.
- **related:** set using only slugs from the allowed list.
- **Build:** `ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build` completes with 65 pages built and no MDX errors.

## Notes
- Body length: my rough count, which strips component markup, puts all four pages slightly under or near 1,200 words of running prose. Content in tables and components brings them up. I did not pad.
- Claims for 102.0 and 102.11 rest on the April 1, 2025 annual CFR edition because eCFR blocks Part 102. Re-check against the current eCFR if access returns.
