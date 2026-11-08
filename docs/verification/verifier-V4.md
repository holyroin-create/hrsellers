# Verification report: verifier-V4

Date: 2026-11-08. Scope: eBay, Etsy and Shopify marketplace pages, two guides, and the eBay/Etsy/Shopify rows of the margin calculator.

## Sources fetched (WebFetch, this session)
- https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees?id=4822
- https://www.etsy.com/legal/fees/
- https://www.etsy.com/legal/etsy-payments/
- https://www.shopify.com/pricing
- https://sell.amazon.com/pricing
- https://marketplace.walmart.com/referral-fees/
- https://sell.amazon.com/fulfillment-by-amazon
- https://marketplace.walmart.com/walmart-fulfillment-services-pricing/

All of these are primary-source pages on the allowlist. No forbidden sources were cited.

Rejected: none. Three claims had the wrong wording or scope. I corrected them in place using the fetched page, marked them verified and recorded the original wording in `verifier_note`. I did not create new claim objects, because tools/gate-claims.mjs treats a claim whose producer is also its verifier as an error.

## /marketplaces/ebay/ (marketplace-ebay.json)
- Checked 15. Verified 15, including 2 corrected. Rejected 0.
- marketplace-ebay-07: the category is "Food Trucks, Trailers & Carts", not just "Food Trucks". I fixed the claim and both table rows.
- marketplace-ebay-09: the 13.25% rate on "Coins & Paper Money" excludes Bullion (Bullion is 13.6% or 7%), and the trading card categories now use eBay's names. I fixed the claim and the table row.
- Arithmetic error fixed: the page said "$0.30 is ... 0.04% of a $1,000 sale". A $1,000 order pays the $0.40 fee, so the text now says "$0.40 is 0.04% of a $1,000 sale".
- Uncited sentence corrected: the page said the Selling fees page also lists "vehicle fees", which the fetched page does not show. It now names reserve price and other upgrades, real estate fees, the dispute fee and the currency conversion charge.
- Description changed from "every listed exception" to "the main exceptions", because the Bullion and NFT rows are not on the page.
- I recomputed all three worked-example tables ($25 scenarios, price scaling, Athletic Shoes threshold). Everything else was correct.

## /marketplaces/etsy/ (marketplace-etsy.json)
- Checked 18. Verified 18. Rejected 0.
- I recomputed both worked tables and they are correct. On the $100 row, the 10.0% is now shown as the exact 9.95%.
- Ids match both ways.

## /marketplaces/shopify/ (marketplace-shopify.json)
- Checked 11. Verified 11, including 1 corrected. Rejected 0.
- marketplace-shopify-08: the page says "up to 5" and "up to 15" staff accounts, but the fetched page says "5 additional" and "15 additional". I corrected the claim, the evidence and the MDX sentence.
- I recomputed all worked examples and they are correct: card fees at $25, the per-order plan cost, the Basic-to-Grow breakeven of 1,000 orders, premium cards at $1.18, the in-person and third-party rows, and the yearly savings of $120, $312 and $1,200.

## /guides/etsy-offsite-ads-economics/ (etsy-offsite-ads-economics.json)
- Checked 15. Verified 15. Rejected 0.
- Wording fixed: "at any time on a rolling 365-day basis" is now "at any time" (cites claim -14), measured against prior-365-day sales (cites -05). The fetched page says sales are calculated on the first day of the month, so "rolling" was not supported.
- I recomputed the cap thresholds ($666.67 and $833.33), the eight-price table, the fee-stack tables and the threshold example. All are correct; the $100 row now shows the exact 24.95%.

## /guides/ebay-etsy-for-amazon-sellers/ (ebay-etsy-for-amazon-sellers.json)
- Checked 30. Verified 30. Rejected 0.
- Amazon and Walmart rates checked against sell.amazon.com/pricing and the Walmart referral fees page: Home and Kitchen 15% with a $0.30 minimum, Consumer Electronics 8%, Clothing 5/10/17%, Walmart Apparel 5/10/15%, Professional plan $39.99, Individual $0.99 per item, fee-base definitions, and Walmart's zero setup or monthly fees. FBA and WFS ($3.45 at 1 lb or less) checked on their own pages.
- Summary bullet corrected: it said only eBay includes sales tax. It now says eBay's fee base and Etsy's processing fee both include sales tax.
- I recomputed the comparison table, the remaining-amount and percentage table, the $30 shipping table, the tax case, the category examples and the volume and plan breakeven. All are correct.

## /tools/margin-calculator/ (tool-margin-calculator-70 to -84 and the matching rows in data/fee-presets.json)
- Checked 15. Verified 15, including 2 corrected. Rejected 0.
- tool-margin-calculator-72 and -78 have the same corrections as marketplace-ebay-09 and -07. I updated the matching preset `category` labels in fee-presets.json; the rates were already correct.
- I edited only the eBay, Etsy and Shopify objects, at text level, re-reading each file just before writing. verifier-V3's 69 Amazon and Walmart objects were not touched.

## Other checks
- No experience claims, affiliate or AI mentions, or forbidden sources.
- Frontmatter is valid; titles are 70 characters or fewer and descriptions are 140–160 characters.
- tools/gate-claims.mjs reports no errors for these pages or claim files. Its 443 errors belong to other agents' pages, which are still drafted.
- Possible length issue for whoever owns these guides: both may be under the 1,100-word minimum, depending on how tables and components are counted. Prose only comes to about 970 words (Offsite Ads guide) and 1,010 words (comparison guide). I did not add content.
