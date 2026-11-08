# Verification report — verifier-VE

Date: 2026-11-08. Scope: guides amazon-referral-fees, walmart-wfs, etsy-offsite-ads-economics, ebay-etsy-for-amazon-sellers, with their data/claims JSON files.

## Sources re-fetched (WebFetch, this session)
- https://sell.amazon.com/pricing: referral rule, total-price note, full category rows, media closing fee, fee-category note, Everything Else note, plan prices
- https://marketplace.walmart.com/walmart-fulfillment-services-pricing/: weight table, dim-weight method, surcharges, standard definition, storage tiers, examples, included/not-included lists, "subject to change" line
- https://marketplace.walmart.com/referral-fees/: varies by category, deducted on completed sale, zero setup/monthly/hidden fees (covers Marketplace and WFS), total sales price, Home, Kitchen, Decor & Garden 15% (flat, no minimum)
- https://www.etsy.com/legal/fees/ (fetched twice, the second time to read the full threshold and opt-out sentences): Offsite Ads section, listing fee, transaction fee
- https://www.etsy.com/legal/etsy-payments/: US 3% + 0.25 USD, assessed on the gross order amount including shipping and tax
- https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822: FVF definition, per-order fee, total amount of sale, most categories 13.6% up to $7,500, 250 free listings then $0.35
- https://www.shopify.com/pricing: Basic $39 monthly / $29 yearly, 2.9% + 30¢, 2% third-party, third-party fee sentence

## Counts
| Page | Checked | Verified | Corrected | Rejected |
|---|---|---|---|---|
| amazon-referral-fees | 19 | 19 | 0 | 0 |
| walmart-wfs | 33 | 33 | 0 | 0 |
| etsy-offsite-ads-economics | 13 | 12 | 1 | 0 |
| ebay-etsy-for-amazon-sellers | 24 | 24 | 0 | 0 |

The "Verified" count excludes corrected claims. All claims now carry status "verified" and verified_by "verifier-VE". The corrected claim is explained in its verifier_note.

## Claim correction
- etsy-offsite-ads-economics-02: the live text says the $10,000 / 365-day test is "calculated on the first day of the month" and that 12% applies "on the first day of the month following qualification". The claim was rewritten to match. The body sentence used to say the threshold is checked "at any time"; it now gives the first-of-month calculation and start date.

## Page-text fixes (no claim change)
**Amazon**
- Opening paragraph: removed "for most categories … the percentage is 15%", which the source does not state. It now says "In Home and Kitchen the rate is 15% with a $0.30 minimum".
- Removed an uncited sentence about FBA fulfillment fees being separate.
- Tier-cliff rounding: $20.50 now leaves $17.01 (was $17.02) and $10.50 leaves $8.92 (was $8.93), so each net matches its rounded fee.
- Added citations to two arithmetic sentences: the $2.00 minimum crossover and the plan break-even.

**Walmart**
- The big & bulky sentence said "heavier or longer items", which is an inference. It now gives the source's stated reason: the chair exceeds 150 lb.
- Added citations to the dimensional-weight and box-shrink arithmetic sentences.

**Etsy**
- Removed "which covers most Etsy orders", an uncited claim.
- Fixed wrong logic. The page said low-priced items feel the ad fee most. In fact the fixed fees take a bigger share on small orders, while the ad fee is a flat percentage. The sentence, the $25 breakdown line and the checklist item were all rewritten.
- Net-price example: shown as $22.175 (about $22.18) instead of $25.00 − $2.83 = $22.18, which subtracted wrongly. Results unchanged at $29.97 and $25.86.

**eBay comparison**
- The page said Shopify at 10 orders is "above Amazon". Corrected: it is above Amazon Individual ($4.74), Walmart and eBay, but below Amazon Professional at that volume ($7.75).
- Removed the uncited clause "on top of that provider's own charges" after the Shopify 2% fee.

## Walmart WFS table oddities (re-read on live page)
- 31–50 lb is $14.55 plus $0.40 per lb over 31, which is lower than 21–30 lb at $15.55 plus $0.40 per lb over 21. This is exactly as published. The 31–50 lb and 51 lb+ rows carry an asterisk saying heavier items ship by ground and may take more than two days. The guide reproduces the figures without inferring anything.
- Long-term storage: the live table gives 366–450 days at $2.25 and more than 450 days at $7.50 per cu ft per month. The estimator section separately says items stored more than 12 months "may incur" $2.25. That is consistent with the table, and the guide reports the table as published. "Long-term storage fees" are listed under "Not included in cost".

## FAQ questions
Questions with a colon suffix were rewritten as plain questions. Where research/faq-bank.json has a matching question, that wording was used:
- **Amazon:** "How much is Amazon referral fee?" (bank wording; answer rewritten to lead with the rule) and "What is Amazon's closing fee?"
- **Walmart:** "What do Walmart WFS fees include?", "How much are Walmart WFS storage fees?", "How much does it cost to sell on Walmart Marketplace?" (bank wording) and "How do I calculate Walmart WFS fees?"
- **Etsy:** "How much is the Etsy Offsite Ads fee?", "Can you opt out of Etsy Offsite Ads?", "Are Etsy Offsite Ads mandatory?" (answer now starts "Yes") and "What are Etsy fees per sale?" (bank wording)
- **eBay comparison:** "Are Etsy fees higher than eBay?" (bank wording)

## Other checks
- **keyFacts and FAQ answers:** all checked against their claims.
- **Arithmetic:** every worked example was recomputed, including all table rows, the storage examples, the cap thresholds, the fee stacks, the 50-order table, the $15 and $50 table, and the tax example. Only the items listed above needed changes.
- **Citations:** every citation marker and claim prop resolves to a JSON claim, and every JSON claim is cited.
- **Content rules:** no experience claims found.
- **Body length:** 1,449–1,542 words per page.
- **Build:** `ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build` completes with 60 pages built and no MDX errors.

## Notes
- Some WebFetch responses for Walmart and Etsy were short quotes plus paraphrase, because of quote-length limits. Every figure and condition in the claims matched the fetched text.
- The eBay keyFact value "13.6% + $0.40 per order over $10" cites only claim -10. The per-order part is in claim -11.
