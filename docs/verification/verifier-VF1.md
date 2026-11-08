# verifier-VF1: verification report (2026-11-08)

Scope: guides `us-product-compliance`, `hazmat-dangerous-goods`, `review-manipulation-risk` and their `data/claims/*.json`.
Method: I re-fetched every source with WebFetch and asked for verbatim passages. I then checked each claim's numbers, scope, conditions and dates against that text. No new claim objects were created. Build (`ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build`): 66 pages, complete, no MDX errors.

## Counts

| Page | Checked | Verified as drafted | Corrected in place | Rejected |
|---|---|---|---|---|
| us-product-compliance | 28 | 27 | 1 (-26) | 0 |
| hazmat-dangerous-goods | 39 | 33 | 6 (-11, -22, -26, -27, -29, -33) | 0 |
| review-manipulation-risk | 30 | 27 | 3 (-05, -15, -24) | 0 |
| **Total** | **97** | **87** | **10** | **0** |

All 97 claims now have `status: "verified"` and `verified_by: "verifier-VF1"`. Each corrected claim has a `verifier_note`.

## Access notes (fetched_via)
- eCFR robots-blocks 16 CFR Parts 1200 and 1110 (part, section and renderer API URLs), the Part 1107 part-level page, and 49 CFR 172.704 and Part 172 Subpart H. Here is what I read instead:
  - 16 CFR 1200.2: govinfo CFR-2025 title 16 vol 2 (revised 2025-01-01).
  - 16 CFR 1110: the regulatory text in FR 2024-30826, read on govinfo at around character offset 300,000. The September 2025 correction changed only the DATES section.
  - 16 CFR 1107: eCFR Subparts A and C.
  - 49 CFR 172.704: govinfo CFR-2025 title 49 vol 2 (revised 2025-10-01).
  - For all of these, `source_url` stays the human-readable eCFR or FR page.
- FR documents 2024-30826, 2025-18521, 2024-18519 and 2026-18853 were read on govinfo HTML, plus the FR API JSON for metadata. The Part 465 rule text is at around offset 330,000–389,000 of 2024-18519. The two civil-penalty sentences are at around 100,000–200,000.
- 49 CFR 173.150 and 173.156 were read from Part 173 Subpart D at offset 100,000.

## Flagged items
- **CPSC eFiling dates.** FR 2025-18521 (90 FR 45917): "As of September 23, 2025, the effective date of the final rule published at 90 FR 1800 on January 8, 2025, is July 8, 2026." For FTZ products "subsequently entered for consumption or warehousing, the final rule is applicable on January 8, 2027." The correction also says it "has no substantive effect on the dates by which products ... must be in compliance." FR API for 2024-30826: effective_on 2026-07-08, corrections list empty.
  - **Later-notice search (FR API):** CFR 16/1110 since 2025-01-01 returns only 2024-30826 and 2025-18521. CPSC + "certificates of compliance" since 2025-09-25 returns 20 results, none amending Part 1110 or its dates. CPSC + "eFiling" returns only 2025-18739 (a paperwork extension). **No 2026 notice changes the dates.** Claims -18 and -19 are verified.
- **review-manipulation-risk-21/-22.** 16 CFR 1.98(d): "Section 5(m)(1)(A) of the FTC Act, 15 U.S.C. 45(m)(1)(A)—$53,088;" [90 FR 5581, Jan. 17, 2025]. FTC notice 2026-18853 (91 FR 58446, Sept. 15, 2026): "civil penalty amounts will remain unchanged during 2026. The FTC will continue to apply the 2025 civil penalty levels." Both verified.
- **review-manipulation-risk-19.** The FR preamble says the Commission "can seek civil penalties for a rule violation only by showing that a defendant had actual knowledge or knowledge fairly implied..." Verified.
- **review-manipulation-risk-20.** "$51,744 per violation, but courts must take into account the statutory factors..." Verified.

## Corrections
- **upc-26:** 16 CFR 1107.2 says a material change is a change "that a manufacturer exercising due care knows, or should know, could affect the product's ability to comply." The definition sentence, worked example, explanatory paragraph and mistakes row now include that qualifier. The mistakes source line now also cites -26.
- **hazmat-11:** The 173.150(b) labeling exception applies "unless the material is offered for transportation or transported by aircraft." Added to the body and to the Decision row.
- **hazmat-22:** The test summary duty covers cells and batteries manufactured on or after January 1, 2008, except button cells installed in equipment.
- **hazmat-26:** The 30 kg cap applies "Except when lithium cells or batteries are packed with, or contained in, equipment."
- **hazmat-27:** The drop test applies "Except when ... contained in equipment" and covers the completed package when packed with equipment. The body and the new FAQ answer reflect both conditions.
- **hazmat-29:** The 171.8 hazmat employer definition also requires that the person transports hazmat or causes it to be transported (or makes qualified packaging). The body sentence is updated.
- **hazmat-33:** The 107.329(a) maximum applies to a person who "knowingly violates." Table, keyFact label and intro updated. "and adjusted for inflation" was removed because the fetched text does not say it.
- **hazmat Steps:** "Cover all five training types" became "Know the five training categories". The fetched text lists the categories but does not say every employee needs all five.
- **hazmat intro:** "which exists precisely because retail goods can be regulated" (an inference) was replaced with the actual consumer commodity definition. "you are offering it for transport" was softened.
- **review-05:** 465.2(c) also covers "any of their immediate relatives, for posting on a third-party platform or website."
- **review-15:** 465.8(b) also requires that the indicators "materially misrepresent their influence or importance for a commercial purpose." Updated in the body and in the Steps item.
- **review-24:** Now uses the exact 255.0(b) wording ("opinions, beliefs, findings, or experiences of a party other than the sponsoring advertiser").

## FAQ questions (research/faq-bank.json)
- **us-product-compliance:**
  - Now from the bank: "What is a children's product certificate?", "What is a general certificate of conformity?" (kept), "What does a children's product certificate look like?" and "How do you get a children's product certificate?" (bank: "how to get a children's product certificate").
  - Answers re-cited: added -20 and -21.
- **hazmat:**
  - "Do you need hazmat for lithium batteries?" (bank).
  - "How to pack lithium batteries for shipping?" (bank). The new answer cites -23, -25, -26 and -27.
  - Kept with no bank match: "What are the 9 classes of hazardous materials?" and "Is lithium ion hazmat when it's inside a device?". No bank question covers either topic, and both answers are sourced. **Flagged for editor.**
- **review-manipulation-risk:**
  - All four questions are now from the bank: "Can you pay for reviews?", "Is it illegal to buy 5 star reviews?", "What is the FTC fake reviews rule?" and "Are fake reviews illegal?".
  - The old free-product disclosure question was merged into "Can you pay for reviews?".

## Arithmetic
- Power bank: 3.7 V × 20 Ah = 74 Wh; 3.7 V × 30 Ah = 111 Wh. Correct.
- Penalty example: 40 × $53,088 = $2,123,520. Correct.
- Retest calendar: Mar 10 2026 + 1 year = Mar 10 2027; + 2 years = Mar 10 2028. Consistent with 1107.21(b)/(c).

## related
- us-product-compliance: origin-marking-requirements, customs-holds-and-exams, gs1-barcodes-fnsku.
- hazmat-dangerous-goods: shipping-lithium-batteries, customs-holds-and-exams.
- review-manipulation-risk: brand-registry-trademark, gs1-barcodes-fnsku.

## Other checks
- Every `<C>` and `claim` prop maps to a JSON claim, and every JSON claim is cited on its page.
- keyFacts and FAQ answers were checked against their claims.
- No experience, testing, client or interview claims were found.
- The remaining uncited sentences are framing or advice, for example "Build the data set when you book the lab test" and the illustrative seller-examples column, which is labeled illustrative.
- **Editor note:** a rough body word count (with component markup stripped) is about 1,060–1,180 per page. That may be below the 1,200-word floor. Not expanded, because that is outside the verifier's remit.
