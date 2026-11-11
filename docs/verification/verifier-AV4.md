# Verification: ai-chat-amazon-data-rules (verifier-AV4, 2026-11-11)

All 54 sources re-fetched with WebFetch on 2026-11-11.

- Verified: 54 (44 as written, 10 with corrections or notes below)
- Corrected: 8 claim texts/evidence (29, 38 evidence, 39, 44, 46, 50, 51, 54), plus page-wording notes on 11 and 18
- Rejected: 0

## Corrections
- **-29** Anthropic 2-year retention: condition was "flagged for safety review"; source says flagged by automated trust and safety systems as violating the Usage Policy. Claim and Compare cell fixed.
- **-38** OpenAI API training: re-fetch confirms "(unless you explicitly opt in to share data with us)". Evidence extended; claim stands.
- **-39** OpenAI abuse-monitoring logs: added "by default" and the stated exceptions (law, protection from harm). Compare cell now says "by default".
- **-44** Gemini Keep Activity off: added "unless you choose to send Google feedback". Body sentence fixed.
- **-46** Gemini "Please don't enter confidential information": the page cut the sentence off with a full stop. The full sentence is limited to information "that you wouldn't want a reviewer to see or Google to use to improve our services, including machine-learning technologies". Quote completed in body; Decision row reworded.
- **-50** Gemini Paid Services: evidence completed (paid quota of the Gemini API; prompts incl. system instructions, cached content, files). Added to the Compare "Google: training" row (with -47), whose Paid and Unpaid cells relied on them but did not cite them.
- **-51** Gemini Paid logging: "solely to detect violations" left out the second stated purpose ("and any required legal or regulatory disclosures"). Claim and Compare cell fixed.
- **-54** Kimi (Chinese): translation checked. Added the omitted condition "and cannot re-identify a specific individual". The passage does not mention model training, and the cell does not say it does.
- **-11** Exact, but the table label now reads "termination or role change".
- **-18** The source list also includes the gift message, customized URL and extendedFields. Body changed to "its list includes" so the list does not read as complete.

## Other page fixes
- Summary bullet 4 said Google, like the others, does not train on its API by default. That is wrong for Unpaid Gemini API services. It now says "Google says so for paid Gemini API services".
- "Not stated on the page" cells: Anthropic API opt-out and OpenAI API opt-out replaced with a cited statement (no setting needed: not trained by default (-30) / only if you opt in (-38)). OpenAI consumer "other chats not stated" is confirmed: the Data Controls FAQ gives no retention period for regular chats. The Kimi consumer retention cell now names the kimi.com agreement, which on re-fetch states no retention period for conversation content.
- DPP scope: the page attributes the DPP to solution providers building SP-API applications and says outright that the cited pages do not cover hand-copying from Seller Central. The vendor sentence was softened into a conditional for SP-API applications. The "How to confirm" line now also names the Nov 2025 update notice as a source (-12 and -13 come from it, not from DPP quotes).

## Checks
Register JSON parses. Cited ids match the verified ids exactly (54 of 54). gate-claims reports no errors for this slug. Description is 158 chars, keyFacts 4, summary 5, prose body about 1,310 words.
