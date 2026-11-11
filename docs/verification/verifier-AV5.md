# verifier-AV5 — ai-listing-translation-eu-uk (2026-11-11)

All 38 sources were fetched again on 2026-11-11 with WebFetch: EUR-Lex 2023/988 and 2024/1689 (read in offset chunks), gov.uk (GB GPSR 2005, GB toys 2011, NI landing page, NI detailed guidance), sell.amazon.com (3 pages), platform.claude.com, help.openai.com and docs.cloud.google.com.

Counts: 38 verified (9 with claim-text corrections, 4 more where only the page wording changed), 0 rejected.

## Claim corrections
- 02: "registered trade mark", not "trade mark" (Art. 19(a)). Fixed in the claim and the page table.
- 06: added the Art. 9(7) exception ("can be used safely and as intended without them"). Fixed in the manufacturer row of the page table.
- 12: Art. 22(9) is addressed to "providers of online marketplaces". It lists its own items, which mirror Art. 19, and requires the information to be shown on the product listing. It does not refer to "the Article 19 information". I removed the uncited line "Marketplaces enforce the information duty at the point of listing."
- 15: Art. 50(2) also requires outputs to be "detectable as artificially generated or manipulated". Added.
- 20: GB guidance has extra conditions: the information covers the normal or reasonably foreseeable period of use, and applies where the risks are not immediately obvious. Added.
- 21: the GB source says "must ... where reasonable to do so". The page and FAQ said "should" and "asks". Corrected.
- 24: in the NI guidance this duty sits under the manufacturers' obligations and only applies when it is needed for safe use. Corrected.
- 28: the Amazon review carry-over is conditional ("If you already sell with Amazon, in many cases"). Corrected.

## Page-only fixes (claim text unchanged)
- 01: "sellers" changed to "economic operators" (Art. 19).
- 05: the Art. 19(d) scope sentence now follows the text ("to be affixed ... or included in an accompanying document").
- 22: the page now says outright that the English rule is for toys, not for every product. Added the qualifiers from the text: clearly visible, easily legible, understandable, accurate.
- 32: all four table rows match platform.claude.com exactly. The caption now says the figures are Anthropic's own and not an independent test. Claims 32 and 34 support the sentence saying Polish, Dutch and Turkish are not in the table.
- 35: the source mentions only the target language. The workflow step said "source and target language". Corrected.

## Legal-precision checks (all confirmed against the text)
- GPSR duty-holders:
  - 9(2), 9(3) and 9(7): manufacturers.
  - 11(4): importers.
  - 12(1): distributors.
  - 19: economic operators, for distance sales.
  - 22(9): providers of online marketplaces.
- GPSR dates and recitals: 52 sets application from 13 December 2024. The recital numbers are correct: (21) covers languages as a sign of targeting, and (58) says an offer should not be listed without the safety and traceability information.
- AI Act Chapter IV: the heading is quoted verbatim.
- AI Act Art. 50: 50(2) applies to providers. The text-related part of 50(4) is its second subparagraph and applies to deployers, covering public-interest text. Its exception covers human review or editorial control where a natural or legal person holds editorial responsibility.
- AI Act Art. 113: general application is 2 August 2026, with exceptions (a)–(c) for Chapters I–II, Chapter III Section 4 plus V/VII/XII/Art. 78, and Art. 6(1). Chapter IV is not among the exceptions.
- What the page avoids: it does not say the AI Act requires sellers to label AI translations, and it does not decide whether a seller is a provider or a deployer.
- Google page: docs.cloud.google.com (title "Google models | Gemini Enterprise Agent Platform") contains "All Gemini models can understand the following languages." The list includes de, fr, it, es, pl, nl and tr. Claim 38 confirmed.
- Worked example: hypothetical and labeled as such. It contains no arithmetic. The counts are consistent: 3 stores, and 3 filed versions (English source, German, French). It does not apply any English-language rule to the non-toy product.

## Final checks
- Register: parses as valid JSON.
- Claim markers: 38 of 38 ids are cited on the page, all verified.
- Gate: `node tools/gate-claims.mjs` reports 0 errors, with no message mentioning this slug.
- Frontmatter: title 60 characters, description 157, 4 keyFacts, 5 summary bullets.
- FAQ questions: all three are present in research/suggest-v4-writer-W-L.jsonl.
- Body length: about 2,300 words.
- Not covered by this check: the page uses the original OJ text of the AI Act. Any later amending act was not checked. The page already tells readers to check EUR-Lex for amendments.
