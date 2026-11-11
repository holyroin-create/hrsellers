# Verification report: verifier-AV3

Page: `src/content/guides/ai-hts-code-liability.mdx`, register `data/claims/ai-hts-code-liability.json`. Date: 2026-11-11. I re-fetched every source with WebFetch today. govinfo is blocked for curl in this session but loads through WebFetch.

## Counts
- Claims: 45
- Verified as written: 38
- Corrected, then verified: 7 (-05, -09, -10, -12, -21, -38, -45)
- Rejected: 0

## Corrections
- **-05**: 1592(a)(1)(A)(ii) covers "any omission which is material". The omission does not also have to be false. I fixed the claim text. The page sentence only uses the "material and false" branch, so it stays as it was.
- **-09**: 1592(c)(4) says the penalty "shall not exceed" 100% of lost duties (10% of dutiable value if duties were not affected), and only if the unpaid amount is tendered. The old wording, "falls to", overstated it. I fixed the claim and the fraud row of the table ("Up to 100% ..., with tender").
- **-10**: For negligence or gross negligence with a prior disclosure, the penalty "shall not exceed" the interest, which is computed from the date of liquidation, if the loss is tendered. I fixed the claim and changed five places on the page from "is / reduces to interest" to "up to / cannot exceed / caps at interest": the table cells and header, the worked example, Decision row 4 and summary bullet 5.
- **-12**: 19 CFR 162.74(a)(1) also requires a tender of any actual loss. I added that to the claim. The page already states the tender rule.
- **-21**: The photographs/drawings language is in 177.2(b)(3), and it covers requests about the status of an article, not every ruling request. I narrowed the claim. The page sentence is about article ruling requests, so it stays as it was.
- **-38**: The page said the AUP rule applies to "businesses that build on its models". The AUP says it applies to "anyone who uses our products to make a High-risk AI Recommendation". It also requires review before the recommendation is delivered as advice, and it excludes general information that explains what a law says. I rewrote the claim and the page sentence to match.
- **-45**: The Kimi text covers both user input and Kimi output (您输入…的和…向您输出的内容). I fixed the claim and the callout sentence.

## Other checks and edits
- **1592(c) penalty table, checked against the statute**:
  - Fraud: up to the domestic value.
  - Gross negligence: up to the lesser of the domestic value or 4× lost duties; 40% of dutiable value if duties were not affected.
  - Negligence: up to the lesser of the domestic value or 2× lost duties; 20% of dutiable value if duties were not affected.
  - The prior disclosure amounts are listed above. The table now matches.
  - The worked example's arithmetic is correct ($8,000 / $16,000 / $80,000).
- **keyFacts for -07 and -08**: The values now read "Up to 4×/2× lost duties; 40%/20% of dutiable value if none lost". The old "(or …)" wording read as if the two were alternatives you could choose between.
- **Intro sentence**: "every major AI provider says in its own terms" overstated the sources. It now reads "each AI provider covered below says in its own terms or help pages … can be wrong or should not be relied on".
- **GRI source (-23, -24)**: The source is the USITC archive PDF of the 2004 HTS edition. The page now says GRI 1 is "quoted here from the USITC's archived 2004 edition", and the publisher field in both claims records the 2004 archive. The page nowhere calls it the current edition.
- **Kimi -44 translation**: The Chinese reads "生成内容虽已经过人工智能算法自动过滤，但仍不排除其中部分信息具有瑕疵、不合理或引发用户不适". The paraphrase "filtered by algorithms, but some information may still be flawed or unreasonable" is faithful. It leaves out "or cause discomfort", which does not change the meaning.
- **Uncited sentence**: "An AI model's training data can predate the current revision" was a factual statement with no source. I softened it to "An AI answer may not reflect the latest revision".
- **Other checks**:
  - Every FAQ question comes from research/faq-bank.json.
  - Title is 53 characters and the description is 153 characters.
  - keyFacts: 4. Summary bullets: 5.
  - Body is about 2,490 words.
  - Every claim id is cited and every cited id exists and is verified.
  - `node tools/gate-claims.mjs` returns no errors or warnings for this slug.
