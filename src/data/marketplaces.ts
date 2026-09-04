/**
 * Marketplace fee reference.
 *
 * Every rate here carries the date it was checked. Marketplace fee schedules
 * change on their own timetable and published third-party rate cards go stale
 * quickly — the `checked` field is the point of this file. If a figure is
 * disputed across sources, that is recorded in `contested` rather than
 * resolved silently.
 */

export type FeeRow = { k: string; v: string; note?: string };
export type Example = { label: string; rows: { k: string; v: string; tone?: 'cost' | 'gain' }[]; net: string; rate: string };

export type Marketplace = {
 slug: string;
 name: string;
 short: string;
 eyebrow: string;
 h1: string;
 lede: string;
 checked: string;
 headline: FeeRow[];
 fulfilment: { title: string; intro: string; rows: FeeRow[] };
 gotchas: { title: string; body: string }[];
 example: Example;
 contested?: { claim: string; detail: string }[];
 fits: string[];
 againstIt: string[];
 sources: { title: string; publisher: string; href: string; accessed: string }[];
};

const ACCESSED = '2026-09-05';

export const MARKETPLACES: Marketplace[] = [
 /* ------------------------------------------------------------------ */
 {
  slug: 'amazon',
  name: 'Amazon',
  short: 'Highest fee stack, deepest demand. Nine separate charges before advertising.',
  eyebrow: 'Marketplace',
  h1: 'Selling on Amazon: the 2026 fee stack, line by line',
  lede: 'Amazon is not one fee. It is a referral percentage, a fulfillment fee that now varies with your selling price, a surcharge on top of that fee, an inbound placement charge, two storage regimes, an aged-inventory penalty, a low-stock penalty and a returns charge. Modelling it as "about 15% plus fulfillment" is how sellers arrive at a loss they did not forecast.',
  checked: ACCESSED,
  headline: [
   { k: 'Account', v: '$39.99 / month', note: 'Professional plan; Individual plan charges per item sold instead' },
   { k: 'Referral fee', v: '6%–45% of sale price', note: 'Category dependent; most categories 8%–15%' },
   { k: 'Fulfillment (FBA)', v: 'From roughly $3.20 per unit', note: 'By size tier, weight — and, since 2026, by price band' },
   { k: 'Price bands', v: 'under $10 / $10–$50 / over $50', note: 'New in 2026: your selling price is an input to the fulfillment fee' },
   { k: 'Fuel & logistics surcharge', v: '3.5% on the fulfillment fee', note: 'Effective April 17, 2026 (Amazon announcement of April 2); applies on top of the peak fee too' },
   { k: 'Inbound placement', v: '$0 to roughly $1.90 per unit', note: 'Zero on Amazon-optimized splits (five or more identical cartons per SKU); minimal-split fees by size, weight and region' },
   { k: 'Storage, Jan–Sep', v: '$0.78 / cu ft / month', note: 'Standard size; unchanged for 2026. A widely copied $0.87 figure is wrong' },
   { k: 'Storage, Oct–Dec', v: '$2.40 / cu ft / month', note: 'Standard size; about three times the off-peak rate' },
   { k: 'Low-inventory-level fee', v: 'roughly $0.32–$1.11 per unit (standard size)', note: 'Charged per unit shipped while an FNSKU sits under 28 historical days of supply on both the 30- and 90-day windows' },
  ],
  fulfilment: {
   title: 'FBA, and the three fees people forget',
   intro: 'The fulfillment fee is the number everyone quotes. It is rarely the number that decides whether a SKU works. Three charges sit outside it and behave differently.',
   rows: [
    { k: 'Inbound placement', v: 'Per unit, at shipment creation', note: 'Sending to one center costs the most; accepting five or more destinations can take it to zero, at the cost of higher freight' },
    { k: 'Low-inventory-level fee', v: 'Per unit sold, while understocked', note: 'Applied at seller-FNSKU level since January 15, 2026 — one thin variant is charged on its own units, not the whole listing' },
    { k: 'Aged inventory surcharge', v: 'Escalating by age band', note: 'The decision point is around day 150, not day 181' },
   ],
  },
  gotchas: [
   {
    title: 'Your repricer is now wrong',
    body: 'Selling price entered the fulfillment fee calculation in 2026 through three price bands. Raise a $49 item to $52 to protect margin and you may cross a band and take a second increase. Any repricing rule that treats fulfillment cost as fixed is running a model that no longer describes the platform.',
   },
   {
    title: 'The average is not your number',
    body: 'Amazon put the 2026 US increase at $0.08 per unit on average. Third-party readings of the published tables put small standard-size items between $0.12 and $0.51 depending on price tier. An average across a catalog as wide as Amazon\u2019s says nothing about one SKU.',
   },
   {
    title: 'Reimbursement is no longer insurance at retail value',
    body: 'Since March 31, 2025, inventory lost before a customer orders is reimbursed at sourcing cost, not sale price — and the definition excludes freight and duty. For imported goods this is the largest exclusion in the policy.',
   },
   {
    title: 'Q4 storage is a scheduling problem',
    body: 'October to December storage runs roughly three times the rest of the year. Pulling excess out in late September and sending back a measured quantity in early October is a real lever, provided removal fees and return freight are in the calculation.',
   },
  ],
  example: {
   label: 'A 2 lb standard-size item priced at $25, sold through FBA',
   rows: [
    { k: 'Sale price', v: '$25.00' },
    { k: 'Referral fee at 15%', v: '−$3.75', tone: 'cost' },
    { k: 'FBA fulfillment (illustrative, standard size)', v: '−$5.60', tone: 'cost' },
    { k: 'Fuel & logistics surcharge at 3.5% of fulfillment', v: '−$0.20', tone: 'cost' },
    { k: 'Inbound placement (minimal split, illustrative)', v: '−$0.45', tone: 'cost' },
    { k: 'Monthly storage, allocated per unit (illustrative)', v: '−$0.10', tone: 'cost' },
    { k: 'Professional plan, allocated over 500 units', v: '−$0.08', tone: 'cost' },
   ],
   net: '$14.82',
   rate: '40.7% of the sale price, before advertising, returns and cost of goods',
  },
  contested: [
   { claim: 'Per-unit fulfillment increase', detail: 'Amazon states an average of $0.08 per unit for 2026; third-party readings of the tables put individual size tiers anywhere from +$0.12 to +$0.51. Your Fee Preview report is the only figure that describes your catalog.' },
   { claim: 'Inbound placement per-unit ranges', detail: 'Published readings of the 2026 minimal-split card differ by a few cents per band; the Send to Amazon screen shows the exact figure before you commit.' },
  ],
  fits: [
   'Products with proven, steady demand where Prime placement is the deciding factor',
   'Sellers who can hold enough stock to stay above the low-inventory threshold without over-committing capital',
   'Standard-size, light items where the fulfillment fee stays a small share of the sale price',
  ],
  againstIt: [
   'Heavy, bulky or low-price items, where fulfillment and surcharges consume the margin',
   'Slow movers, which now carry storage cost, aged-inventory exposure and a reduced reimbursement value',
   'High-margin or one-of-a-kind goods, where sourcing-cost reimbursement understates what a loss actually costs you',
  ],
  sources: [
   { title: 'Update to U.S. referral and Fulfillment by Amazon fees for 2026', publisher: 'Amazon Selling Partners', href: 'https://sellingpartners.aboutamazon.com/update-to-u-s-referral-and-fulfillment-by-amazon-fees-for-2026', accessed: ACCESSED },
   { title: '2026 Amazon FBA fee changes: full rate card for sellers', publisher: 'Goat Consulting', href: 'https://www.goatconsulting.com/amazon-fulfillment/amazon-fba-fee-changes-for-2026', accessed: ACCESSED },
   { title: 'Amazon 2026 fees breakdown: FBA, referral, inbound placement', publisher: 'Brandwoven', href: 'https://gobrandwoven.com/resources/articles/amazon-2026-fees-breakdown-fba-referral-inbound-placement/', accessed: ACCESSED },
   { title: 'Amazon FBA fees in 2026: a seller\u2019s complete cost breakdown', publisher: 'ConnectBooks', href: 'https://www.connectbooks.com/blog-posts/amazon-fba-fees-2026', accessed: ACCESSED },
   { title: 'Amazon 2026 FBA fees: what sellers need to know', publisher: 'SellerEngine', href: 'https://sellerengine.com/amazon-2026-fba-fees/', accessed: ACCESSED },
  ],
 },

 /* ------------------------------------------------------------------ */
 {
  slug: 'walmart',
  name: 'Walmart',
  short: 'No subscription, simpler stack, thinner traffic. The under-$10 surcharge catches value sellers.',
  eyebrow: 'Marketplace',
  h1: 'Selling on Walmart: WFS economics and the fees that are not obvious',
  lede: 'Walmart charges no monthly subscription, no listing fee and no separate payment processing fee. That makes the headline cheaper than Amazon and the arithmetic genuinely simpler. The complications are elsewhere: tiered referral categories, a flat surcharge on sub-$10 items, and a long-term storage band that escalates hard.',
  checked: ACCESSED,
  headline: [
   { k: 'Account', v: '$0 / month', note: 'No subscription, no listing fee, no separate payment processing charge' },
   { k: 'Referral fee', v: '6%–20% of sale price', note: 'Most categories 15%; consumer electronics reported at 8%, computers at 6%' },
   { k: 'Tiered categories', v: 'Rate changes at a price threshold', note: 'Jewelry 20% up to $250, then 5% above — marginal, not flat' },
   { k: 'WFS fulfillment', v: 'From $3.45 per unit', note: 'Scales by the greater of unit weight or dimensional weight, plus 0.25 lb packaging, rounded up' },
   { k: 'Dimensional divisor', v: 'cubic inches ÷ 139', note: 'Different from the divisors used by common carriers — check your own boxes' },
   { k: 'Storage, Jan–Sep', v: '$0.75 / cu ft / month', note: 'Below Amazon\u2019s off-peak rate' },
   { k: 'Storage, Q4', v: '+$1.50 / cu ft after 30 days', note: 'An effective $2.25; still below Amazon\u2019s peak' },
   { k: 'Long-term storage', v: 'up to $7.50 / cu ft / month', note: 'For the oldest inventory, per third-party readings of the WFS schedule; confirm the band dates in Seller Center' },
   { k: 'Low-stock penalty', v: 'None', note: 'No equivalent of Amazon\u2019s low-inventory-level fee on the WFS schedule' },
  ],
  fulfilment: {
   title: 'WFS surcharges stack on top of the weight fee',
   intro: 'The weight-based fee is only the base. Flat surcharges add on standard items and they are additive, not alternatives.',
   rows: [
    { k: 'Apparel', v: '+$0.50 per unit' },
    { k: 'Hazmat', v: '+$0.50 per unit' },
    { k: 'Items retailing under $10', v: '+$1.00 per unit', note: 'On a $9 item this is an 11-point margin hit before the referral fee' },
    { k: 'Oversize dimensions', v: '+$3.00 to +$20.00 per unit' },
    { k: 'Big & bulky', v: '$155 + $0.80 per lb above 90 lb', note: 'Applies above the standard limits; uses actual unit weight rounded up' },
   ],
  },
  gotchas: [
   {
    title: 'The under-$10 surcharge is the value seller\u2019s problem',
    body: 'A flat $1.00 on items retailing below $10 does not scale with price, so it lands hardest exactly where margin is thinnest. The standard response is to bundle low-price SKUs into multipacks that clear the $10 line — which changes your dimensional weight, so run the fulfillment fee again after bundling.',
   },
   {
    title: 'Your referral category is set by contract, not by the listing',
    body: 'Walmart applies referral rates from the contract categories in the Marketplace Retailer Agreement, not the category you pick during item setup. Mismatches happen, particularly on bulk uploads. If you believe the rate is wrong, open a case in Seller Center with the item ID and the category you think applies.',
   },
   {
    title: 'Tiered categories are marginal, not flat',
    body: 'Where a category is tiered, the higher rate applies only up to the threshold and the lower rate applies above it. Applying the headline percentage to the whole sale price overstates the fee, sometimes by a large amount on high-value items.',
   },
   {
    title: 'Promotional rates expire',
    body: 'Walmart has run new-seller incentives that reduce referral fees substantially for a limited window. Building a margin model on a promotional rate means the model breaks on a date you did not put in it. Model the standard rate; treat the discount as upside.',
   },
  ],
  example: {
   label: 'The same 2 lb item priced at $25, sold through WFS',
   rows: [
    { k: 'Sale price', v: '$25.00' },
    { k: 'Referral fee at 15%', v: '−$3.75', tone: 'cost' },
    { k: 'WFS fulfillment (2 lb band, illustrative)', v: '−$4.95', tone: 'cost' },
    { k: 'Storage, allocated per unit (illustrative)', v: '−$0.09', tone: 'cost' },
    { k: 'Monthly subscription', v: '$0.00' },
    { k: 'Payment processing', v: '$0.00' },
   ],
   net: '$16.21',
   rate: '35.2% of the sale price, before advertising, returns and cost of goods',
  },
  contested: [
   { claim: 'WFS versus FBA cost', detail: 'One comparison puts WFS around 15% cheaper on average than FBA. That is an average across weight bands and does not survive contact with a specific SKU. Run both.' },
   { claim: 'New-seller savings figures', detail: 'Headline totals for the new-seller program vary widely between sources and are time-limited. Confirm terms in Seller Center rather than from a blog.' },
  ],
  fits: [
   'Sellers already running Amazon inventory who want a second demand channel without a second subscription',
   'Mid-price standard goods, where the absence of a monthly fee and the lower storage rate compound',
   'Long-holding inventory in Q4, where Walmart\u2019s peak storage rate is materially below Amazon\u2019s',
  ],
  againstIt: [
   'Sub-$10 products, unless bundled past the surcharge threshold',
   'Very old inventory, where the top long-term storage band is punitive',
   'Sellers who need traffic volume immediately — Walmart\u2019s marketplace is smaller than Amazon\u2019s',
  ],
  sources: [
   { title: 'Walmart WFS fees 2026: fulfillment, storage and surcharge breakdown', publisher: 'WarehousingCosts', href: 'https://warehousingcosts.com/guides/walmart-wfs-fees', accessed: ACCESSED },
   { title: 'Walmart seller fees: what you\u2019ll actually pay in 2026', publisher: 'Feedvisor', href: 'https://feedvisor.com/university/walmart-seller-fees/', accessed: ACCESSED },
   { title: 'Walmart seller fees explained: what you\u2019ll actually pay in 2026', publisher: 'WallScout', href: 'https://www.wallscout.io/blog/walmart-seller-fees-2026', accessed: ACCESSED },
   { title: 'Walmart fee calculator (rate file dated 2026-07-04)', publisher: 'Calcrux', href: 'https://calcrux.com/tools/ecommerce/walmart-fee-calculator', accessed: ACCESSED },
  ],
 },

 /* ------------------------------------------------------------------ */
 {
  slug: 'ebay',
  name: 'eBay',
  short: 'One fee covers commission and payment processing — but it is charged on shipping and tax too.',
  eyebrow: 'Marketplace',
  h1: 'Selling on eBay: what the 13.6% is actually charged on',
  lede: 'eBay\u2019s fee structure looks simple and is widely misquoted, because the percentage is not applied to the item price. It is applied to the total amount of the sale — item, handling, buyer-paid shipping and sales tax included. That is why sellers who calculate 13.6% of their listing price consistently under-forecast the deduction.',
  checked: ACCESSED,
  headline: [
   { k: 'Account', v: '$0 without a Store', note: 'Store subscriptions are optional and buy free listings and lower rates' },
   { k: 'Final value fee', v: '13.6% for most categories', note: 'Raised by 0.35 points effective February 14, 2025 — older guides are stale' },
   { k: 'Fee base', v: 'Item + handling + buyer-paid shipping + sales tax', note: 'This is the part most sellers get wrong' },
   { k: 'Per-order fee', v: '$0.30 on orders up to $10, $0.40 above', note: 'Flat, so it bites hardest on low-price items' },
   { k: 'Category exceptions', v: 'roughly 3% to 15.3%', note: 'Books and media reported higher; guitars and heavy equipment lower' },
   { k: 'Insertion fee', v: 'First 250 listings free, then $0.35', note: 'Per month; Store subscribers get larger allowances' },
   { k: 'Payment processing', v: 'Included', note: 'Managed payments folded processing into the final value fee — do not add a separate PayPal-style charge' },
   { k: 'High return-rate surcharge', v: '+5% on final value fees', note: 'Applied in affected categories when the not-as-described rate is rated very high' },
  ],
  fulfilment: {
   title: 'You fulfil it, which changes the whole calculation',
   intro: 'eBay does not run a first-party fulfillment network for general sellers. Your shipping cost is a real cost you pay, not a fee eBay deducts — and it enters the fee base if the buyer pays it.',
   rows: [
    { k: 'Shipping paid by buyer', v: 'Adds to the fee base', note: 'Charging shipping separately and building it into the price produce the same fee' },
    { k: 'Shipping paid by you', v: 'Your cost, outside the fee', note: 'eBay label discounts are real but not always the cheapest — compare' },
    { k: 'Sales tax collected', v: 'Adds to the fee base', note: 'Tax is not your revenue but it raises the fee charged on the order' },
   ],
  },
  gotchas: [
   {
    title: 'Free shipping is not free of fees',
    body: 'Because the fee base includes buyer-paid shipping, building shipping into a higher item price and charging it separately produce identical final value fees. The choice is a conversion decision, not a fee-avoidance one.',
   },
   {
    title: 'The per-order fee is a low-price tax',
    body: 'A flat $0.30 to $0.40 is negligible on a $200 sale and material on a $6 one. On a $12 item the fixed charge alone is over three percent. If your catalog skews cheap, the effective rate is meaningfully above the headline.',
   },
   {
    title: 'Returns performance is priced',
    body: 'An item-not-as-described rate rated very high attracts an additional five percent on final value fees in affected categories. Accurate condition notes and honest photographs are a fee control, not just customer service.',
   },
   {
    title: 'Category rates diverge more than on other platforms',
    body: 'The spread across eBay categories is wide — low single digits for some heavy equipment, above fifteen percent for books and media. Two sellers can both be "on eBay" and face very different economics.',
   },
  ],
  example: {
   label: 'A $50 item with $5 buyer-paid shipping, standard category, no Store',
   rows: [
    { k: 'Item price', v: '$50.00' },
    { k: 'Buyer-paid shipping', v: '$5.00' },
    { k: 'Fee base', v: '$55.00' },
    { k: 'Final value fee at 13.6%', v: '−$7.48', tone: 'cost' },
    { k: 'Per-order fee', v: '−$0.40', tone: 'cost' },
    { k: 'Postage you actually buy', v: '−$5.00', tone: 'cost' },
   ],
   net: '$42.12',
   rate: '15.8% of the item price in eBay fees, before the postage you pay',
  },
  contested: [
   { claim: 'Headline rate', detail: 'Sources quote 13.25%, 13.6% and "12%–15%" for most categories, largely because they were written at different points around the February 2025 increase. Check the current rate for your category before pricing.' },
   { claim: 'Per-order fee', detail: 'Some guides give a flat $0.40, others the two-tier $0.30 / $0.40 structure. The two-tier version appears in the more recent sources.' },
  ],
  fits: [
   'Used, refurbished, vintage and one-of-a-kind goods that other marketplaces restrict',
   'Higher-price items, where the flat per-order fee disappears into the percentage',
   'Sellers who already control their own fulfillment and want no storage exposure',
  ],
  againstIt: [
   'Low-price, high-volume items, where the fixed per-order fee compounds',
   'Books and media, where the category rate runs above the standard',
   'Anyone with a weak returns record — the surcharge is real and it stacks',
  ],
  sources: [
   { title: 'eBay final value fees explained (2026)', publisher: 'FlowLister', href: 'https://flowlister.com/blog/ebay-final-value-fees-explained/', accessed: ACCESSED },
   { title: 'eBay seller fees 2026: complete cost guide', publisher: 'FlowLister', href: 'https://flowlister.com/blog/ebay-seller-fees-guide/', accessed: ACCESSED },
   { title: 'eBay seller fees 2026: 13.6% + $0.40 per sale', publisher: 'Taxomate', href: 'https://taxomate.com/blog/ebay-seller-fees', accessed: ACCESSED },
   { title: 'eBay seller fees 2026: final value & order fees', publisher: 'Underpriced', href: 'https://www.underpriced.app/blog/ebay-seller-fees-2026', accessed: ACCESSED },
  ],
 },

 /* ------------------------------------------------------------------ */
 {
  slug: 'tiktok-shop',
  name: 'TikTok Shop',
  short: 'Lowest headline rate of the five, and the highest real one once creators are paid.',
  eyebrow: 'Marketplace',
  h1: 'Selling on TikTok Shop: why an 8% referral fee costs about a third',
  lede: 'TikTok Shop advertises the cheapest commission of any major US marketplace. It is also the one where the headline number tells you least, because the channel does not work without creator commissions, and those are a cost you set yourself and pay on top.',
  checked: ACCESSED,
  headline: [
   { k: 'Account', v: '$0 / month', note: 'No subscription, no listing fee' },
   { k: 'Referral fee', v: '8% on most non-food US categories', note: 'Raised from 6% on August 4, 2026 per trade reports (no TikTok press release); beauty above 8%, select jewelry below. Several published guides still state 6% — confirm in your own settlement' },
   { k: 'New-seller promotion', v: 'Reported 3% for 30 days', note: 'Conditional on a first sale within 60 days of onboarding — an introductory rate, not your rate' },
   { k: 'Payment processing', v: 'Included in the referral fee (US)', note: 'TikTok Shop US charges no separate processing line; guides showing 1.02%–3.78% describe other markets' },
   { k: 'Creator commission', v: '10%–30%, set by you', note: 'Beauty reported highest, tech lowest; live sessions command a premium' },
   { k: 'Fulfilled by TikTok', v: 'Roughly $2.86–$4.28 per unit', note: 'Per-unit cost falls as basket size rises' },
   { k: 'Independent shipping', v: 'Ended March 31, 2026 for US sellers', note: 'FBT, Upgraded TikTok Shipping or Collections by TikTok only' },
   { k: 'Refund administration fee', v: ' 20% of the referral fee, capped $5 per SKU', note: 'Charged on returns — a return costs you twice' },
   { k: 'Settlement delay', v: 'Roughly 15 days standard', note: 'Faster for top-rated shops, materially slower for flagged accounts' },
  ],
  fulfilment: {
   title: 'You no longer choose your own carrier',
   intro: 'The largest operational change of 2026 is not a fee. US sellers lost the option to ship independently with their own carrier labels on March 31, 2026, which removes rate negotiation from the equation.',
   rows: [
    { k: 'Fulfilled by TikTok (FBT)', v: 'Per-unit, cheaper at larger baskets', note: 'Storage is free for a limited window, then charged' },
    { k: 'Upgraded TikTok Shipping', v: 'TikTok-arranged carriers', note: 'Your labels, their rates' },
    { k: 'Collections by TikTok', v: 'Scheduled pickup model' },
    { k: 'Own carrier account', v: 'No longer available to US sellers' },
   ],
  },
  gotchas: [
   {
    title: 'Basket size is a margin lever, not a nice-to-have',
    body: 'Because FBT prices per unit and the per-unit rate falls as the order grows, bundling and cross-sell move fulfillment cost directly. On a channel where a single video can drive thousands of single-unit orders, this is one of the few costs you control.',
   },
   {
    title: 'The promotional rate teaches you the wrong number',
    body: 'A new seller who models margin during the introductory referral period is modeling a rate that expires. Price against the standard rate and treat the promotion as a temporary contribution to cash, not to unit economics.',
   },
   {
    title: 'A return costs you the sale and a fee',
    body: 'Reported practice is that the referral fee reverses on a return but an administration charge applies, and creator commission clawback depends on where the return falls relative to the settlement window. Returns after payout are recovered from you.',
   },
   {
    title: 'Virality is an inventory problem',
    body: 'One creator video can produce more orders overnight than a month of steady demand. Cancellations from stockouts damage the shop performance score, which in turn affects how much of return shipping you pay. The failure mode here is success.',
   },
  ],
  example: {
   label: 'A $50 product sold through a creator at 15% commission, fulfilled by FBT',
   rows: [
    { k: 'Sale price', v: '$50.00' },
    { k: 'Referral fee at 8%', v: '−$4.00', tone: 'cost' },
    { k: 'Creator commission at 15%', v: '−$7.50', tone: 'cost' },
    { k: 'FBT fulfillment (single unit, illustrative)', v: '−$4.28', tone: 'cost' },
    { k: 'Payment processing (illustrative, where charged separately)', v: '−$0.51', tone: 'cost' },
   ],
   net: '$33.71',
   rate: '32.6% of the sale price, before advertising, returns and cost of goods',
  },
  contested: [
   { claim: 'Referral rate', detail: 'Recent reporting dates an increase to 8% for most non-food categories to August 4, 2026, months after the 1.8% promotional rate ended in January. Several guides still publish 6%. Treat 8% as the working figure and confirm against your own settlement statement.' },
   { claim: 'Payment processing', detail: 'Some sources state the 6% includes processing with no separate charge; others itemise 1.02%–3.78%. Check your own settlement statement rather than a published table.' },
   { claim: 'FBT starting price', detail: 'Published starting rates range from $2.86 to $4.28 per unit depending on basket size assumptions. Model your actual average order composition.' },
  ],
  fits: [
   'Visually demonstrable products where a short video does the selling',
   'Impulse price points with enough margin to carry a creator commission',
   'Sellers who can bundle, because basket size directly reduces per-unit fulfillment',
  ],
  againstIt: [
   'Considered purchases that need specification comparison rather than demonstration',
   'Thin-margin goods — an 8% fee plus a 15% commission is nearly a quarter of the sale price before fulfillment',
   'Anyone who needs predictable demand; this channel is spiky by design',
  ],
  sources: [
   { title: 'TikTok Shop fees 2026: the full cost breakdown (4 Aug 2026 increase to 8%)', publisher: 'Moras', href: 'https://moras.ai/blog/tiktok-shop-fees', accessed: ACCESSED },
   { title: 'TikTok Shop seller costs in the US (2026)', publisher: 'FastMoss', href: 'https://www.fastmoss.com/blog/tiktok-shop-seller-costs-in-the-us-2026-fees-creator-commissions-fulfillment-returns-real-profit/', accessed: ACCESSED },
   { title: 'TikTok Shop fees 2026: the complete seller fee guide', publisher: 'Dashboardly', href: 'https://www.dashboardly.io/post/tiktok-shop-fees-2026-the-complete-seller-fee-guide', accessed: ACCESSED },
   { title: 'TikTok Shop fees 2026: complete seller cost breakdown', publisher: 'TikAdSuite', href: 'https://tikadsuite.com/blog/tiktok-shop-fees/', accessed: ACCESSED },
   { title: 'TikTok Shop affiliate commission: 2026 rates, fees & payouts', publisher: 'Hamster Garage', href: 'https://www.hamstergarage.com/article/tiktok-shop-affiliate-commission-rates-fees-payouts', accessed: ACCESSED },
  ],
 },

 /* ------------------------------------------------------------------ */
 {
  slug: 'etsy',
  name: 'Etsy',
  short: 'Three small fees that look cheap until Offsite Ads becomes mandatory.',
  eyebrow: 'Marketplace',
  h1: 'Selling on Etsy: three fees, and the fourth one you cannot refuse',
  lede: 'Etsy\u2019s core fees are modest and easy to calculate. The number that changes the picture is Offsite Ads — optional below a revenue threshold, mandatory above it, and charged at a rate that dwarfs everything else when it applies.',
  checked: ACCESSED,
  headline: [
   { k: 'Account', v: '$0 / month', note: 'Etsy Plus is optional at around $10 per month and does not reduce fees' },
   { k: 'Listing fee', v: '$0.20 per listing', note: 'Charged again on renewal, and per additional unit sold from a multi-quantity listing' },
   { k: 'Transaction fee', v: '6.5% of the total', note: 'Raised from 5%; includes the shipping you charge the buyer' },
   { k: 'Payment processing (US)', v: '3% + $0.25 per transaction', note: 'Charged separately from the transaction fee, unlike eBay' },
   { k: 'Payment processing (UK)', v: '4% + £0.20', note: 'Rates vary by the country of your bank account' },
   { k: 'Offsite Ads, under $10k', v: '15% of the attributed order', note: 'Optional at this level — you can switch it off' },
   { k: 'Offsite Ads, $10k and above', v: '12% of the attributed order', note: 'Mandatory once trailing 365-day sales cross the threshold' },
   { k: 'Offsite Ads cap', v: '$100 per attributed order', note: 'Per Etsy\u2019s Fees & Payments Policy; limits the damage on high-value items' },
   { k: 'Currency conversion', v: 'Reported at 2.5% over market rate', note: 'Applies when your listing and bank currencies differ' },
  ],
  fulfilment: {
   title: 'You ship it, and shipping is inside the fee base',
   intro: 'Etsy has no first-party fulfillment network for general sellers. Shipping is your cost and your logistics — but what you charge the buyer is taxed by the transaction fee.',
   rows: [
    { k: 'Buyer-paid shipping', v: 'Inside the 6.5% transaction fee' },
    { k: 'Sales tax collected', v: 'Outside the transaction fee, inside payment processing', note: 'Etsy charges processing on tax it collects, but not the transaction fee' },
    { k: 'Etsy shipping labels', v: 'Discounted, not always cheapest', note: 'Worth comparing against independent label services on heavier parcels' },
   ],
  },
  gotchas: [
   {
    title: 'The $10,000 threshold changes your business, not just your rate',
    body: 'Below roughly $10,000 in trailing 365-day sales, Offsite Ads is optional at 15%. Above it the rate falls to 12% and participation becomes mandatory. Crossing the threshold means a share of your orders permanently carries a double-digit advertising charge you did not choose.',
   },
   {
    title: 'The listing fee is per unit sold, not per listing created',
    body: 'A multi-quantity listing charges $0.20 again for each additional unit as the listing auto-renews. Sellers modeling a single $0.20 across a hundred units are out by nearly twenty dollars per hundred sales — small in isolation, structural on low-price goods.',
   },
   {
    title: 'Two percentage fees, not one',
    body: 'Unlike eBay, Etsy charges the transaction fee and payment processing separately. The working combined figure for a US seller is around 9.5% plus fixed charges. Guides quoting "6.5%" are quoting one of two percentages.',
   },
   {
    title: 'Currency conversion is a real line for non-US sellers',
    body: 'If your listings and your bank account are in different currencies, a conversion charge over the market rate applies on top of everything else, and it is in addition to any charge your own bank applies.',
   },
  ],
  example: {
   label: 'A $30 item with $5 shipping, US seller, no Offsite Ads attribution',
   rows: [
    { k: 'Item + shipping', v: '$35.00' },
    { k: 'Transaction fee at 6.5%', v: '−$2.28', tone: 'cost' },
    { k: 'Payment processing, 3% + $0.25', v: '−$1.30', tone: 'cost' },
    { k: 'Listing fee', v: '−$0.20', tone: 'cost' },
   ],
   net: '$31.22',
   rate: '10.8% of the order total — but roughly 24% if the same order is attributed to Offsite Ads at 15%',
  },
  contested: [
   { claim: 'Effective take rate', detail: 'Published figures range from "roughly 10%" to "20–30%". The difference is almost entirely whether Offsite Ads is included. Both can be true; ask which one the article is describing.' },
   { claim: 'Offsite Ads threshold and cap', detail: 'The $10,000 trailing-revenue threshold and the per-order cap are consistently reported but are Etsy policy and subject to change. Confirm in Shop Manager.' },
  ],
  fits: [
   'Handmade, vintage, craft supply and personalised goods, which the audience actively searches for',
   'Digital downloads, where there is no fulfillment cost and the fee stack is the entire cost of sale',
   'Small sellers below the Offsite Ads threshold who want to keep advertising optional',
  ],
  againstIt: [
   'Mass-produced goods, which sit awkwardly against Etsy\u2019s handmade positioning and its policy enforcement',
   'Very low-price items, where two fixed charges plus two percentages compound badly',
   'Sellers approaching $10,000 who have not modelled what mandatory Offsite Ads does to their margin',
  ],
  sources: [
   { title: 'Etsy seller fees 2026: complete breakdown', publisher: 'Craftybase', href: 'https://craftybase.com/blog/the-complete-guide-to-etsy-fees', accessed: ACCESSED },
   { title: 'Etsy fees complete guide 2026: all costs for Etsy sellers', publisher: 'EcomCalcTools', href: 'https://ecomcalctools.com/blog/etsy-fees-complete-guide/', accessed: ACCESSED },
   { title: 'Etsy fees explained: every fee you\u2019re paying in 2026', publisher: 'Marmalead', href: 'https://blog.marmalead.com/etsy-fees-explained/', accessed: ACCESSED },
   { title: 'Etsy fees 2026: every seller cost explained', publisher: 'FeeCalculator', href: 'https://feecalculator.pro/etsy-fees-2026/', accessed: ACCESSED },
  ],
 },

 /* ------------------------------------------------------------------ */
 {
  slug: 'aliexpress',
  name: 'AliExpress',
  short: 'Among the lowest headline fees anywhere. Sources cannot agree whether the rate follows the category or the order value.',
  eyebrow: 'Marketplace',
  h1: 'Selling on AliExpress: the 2026 fee structure, and the disagreement inside it',
  lede: 'No subscription and no listing fee, with a commission most sources put between 5% and 8%. That much is consistent. What is not consistent is what determines the rate — half the published guidance says product category, and one 2026 account says order value, with a 12% band above $200. Those describe different businesses, and the difference decides whether mid-ticket products work here at all.',
  checked: ACCESSED,
  headline: [
   { k: 'Account', v: 'No monthly subscription', note: ' commission-only for international sellers; no per-listing fee' },
   { k: 'Commission', v: '5%–8% of sale price', note: 'Most sources; varying by product category' },
   { k: 'Commission — alternative account', v: '5% under $30 · 8% $30–$200 · 12% above $200', note: 'One 2026 source describes tiers by order value instead of category — see contested below' },
   { k: 'Payment processing', v: 'roughly 1%–3.4%', note: 'Sources give 1%–3% and 2.4%–3.4%; varies by payment method and buyer location' },
   { k: 'Combined cost', v: 'roughly 7%–11.4% of sale price', note: 'Commission plus processing, per two 2026 calculators' },
   { k: 'Items under $2.99', v: 'No commission reported', note: 'Described as a deliberate move to keep the low-price catalog flowing' },
   { k: 'Settlement', v: 'Reported 15-day hold', note: 'One source puts sale-to-bank at 20–30 days including withdrawal' },
   { k: 'Annual platform fee', v: 'Reported for some seller types', note: 'Described as category-dependent, with reductions or partial refunds at sales thresholds' },
  ],
  fulfilment: {
   title: 'Choice, and what it changed',
   intro: 'AliExpress Choice is reported to have become the default managed shipping and fulfillment layer in 2026. That moves delivery promises out of your control and into the platform\u2019s — which is an advantage when it works and an exposure when it does not.',
   rows: [
    { k: 'AliExpress Choice', v: 'Managed shipping and fulfillment', note: ' the default layer in 2026 rather than an option' },
    { k: 'Growth Grants', v: 'Up to 100% of logistics fees for 90 days', note: 'Reported thresholds: 97% on-time dispatch, $22 average order value, return rate no higher than 4.1%' },
    { k: 'Delivery promise', v: 'Set by the path each product uses', note: 'Reporting warns that a mismatch between promise and real lead time is the fastest route to refunds' },
   ],
  },
  gotchas: [
   {
    title: 'The de minimis change lands here too',
    body: 'Reporting names the end of duty-free treatment for China-direct parcels into the US as one of the three changes that matter most on this platform in 2026. If your model depended on low-value parcels entering the US without duty, that model no longer describes the arrangement — the same change covered in our de minimis guide.',
   },
   {
    title: 'The commission structure is genuinely unsettled',
    body: 'Category-based 5%\u20138% and value-based 5/8/12% are not two readings of one rule. If the tiered account is correct, a $250 order carries 12% rather than the 5%\u20138% you modelled — and mid-ticket resale, the $30 to $200 band, carries a fee layer that reporting says did not meaningfully exist before. Verify in Seller Center before pricing.',
   },
   {
    title: 'Cash is slow',
    body: 'A reported 15-day settlement hold, with one source putting total sale-to-bank at 20 to 30 days once withdrawal timelines are counted. Against the same problem on Amazon under DD+7, this is not unusual — but it is a working capital requirement, not a detail.',
   },
   {
    title: 'The new-seller waiver is real and temporary',
    body: 'One 2026 account describes no commission during the first six months or the first hundred sales for new sellers. A launch that looks profitable on waived fees is not a test of whether the product works at the standing rate.',
   },
  ],
  example: {
   label: 'A $40 home and garden item, sold with commission at 6% and processing at 3%',
   rows: [
    { k: 'Sale price', v: '$40.00' },
    { k: 'Commission at 6% (illustrative, category-based)', v: '\u2212$2.40', tone: 'cost' },
    { k: 'Payment processing at 3%', v: '\u2212$1.20', tone: 'cost' },
   ],
   net: '$36.40',
   rate: '9.0% of the sale price, before shipping, returns and cost of goods',
  },
  contested: [
   { claim: 'What determines the commission rate', detail: 'Most published guidance says product category, at 5%\u20138%. One 2026 source describes tiers by order value \u2014 roughly 5% under $30, 8% from $30 to $200, and 12% above $200. These are not compatible, and the difference is largest exactly where mid-ticket sellers operate.' },
   { claim: 'Payment processing rate', detail: 'Given as 1%\u20133% by one source and 2.4%\u20133.4% by another, both published in 2026. Combined cost estimates land between 6% and 11.4% as a result.' },
   { claim: 'Store or platform fee', detail: 'One source describes a $1,500 fixed store fee, others describe no subscription at all and only an annual technical service fee for some categories. Regional and seller-type differences are the likely explanation \u2014 confirm for your own registration route.' },
  ],
  fits: [
   'Niche or hard-to-find products sourced cheaply, where a low fee base matters more than platform demand',
   'Sellers in markets where domestic e-commerce infrastructure is limited and global reach is the point',
   'Electronics and tools, where the reported commission sits at the low end of the range',
  ],
  againstIt: [
   'Premium and branded goods \u2014 reporting describes the marketplace as skewing toward value pricing',
   'Anyone who needs fast cash flow, given the reported settlement hold',
   'Mid-ticket products, if the value-tiered commission account is the correct one',
  ],
  sources: [
   { title: 'AliExpress seller fees 2026 \u2014 complete fee breakdown for every category', publisher: 'ProfitCalcu', href: 'https://profitcalcu.com/blog/aliexpress-seller-fees-2026/', accessed: ACCESSED },
   { title: 'AliExpress fee calculator 2026 (commission 5%\u20138% plus processing 2.4%\u20133.4%; combined 7.9%\u201311.4%)', publisher: 'ProfitCalcu', href: 'https://profitcalcu.com/aliexpress/', accessed: ACCESSED },
   { title: 'AliExpress changes 2026: new fees, US duties and Choice rules', publisher: 'ShopAppy', href: 'https://shopappy.com/ecommerce/aliexpress/aliexpress-changes-2026', accessed: ACCESSED },
   { title: 'How AliExpress seller fees work \u2014 complete guide 2026', publisher: 'World of Calculator', href: 'https://worldofcalculator.com/how-aliexpress-seller-fees-work/', accessed: ACCESSED },
   { title: 'How to sell on AliExpress: fees and step-by-step guide', publisher: 'CedCommerce', href: 'https://cedcommerce.com/blog/how-to-open-aliexpress-seller-account-to-sell-on-aliexpress/', accessed: ACCESSED },
   { title: 'How to sell on AliExpress from the United States in 2026', publisher: 'AliHelper', href: 'https://alihelper.net/blog/en/how-to-sell-on-aliexpress-from-united-states/', accessed: ACCESSED },
  ],
 },

 /* ------------------------------------------------------------------ */
 {
  slug: 'shopify',
  name: 'Shopify',
  short: 'Not a marketplace. No referral fee and no demand — you pay a subscription and buy every visitor yourself.',
  eyebrow: 'Platform',
  h1: 'Selling on Shopify: what it costs, and what it does not give you',
  lede: 'Every other page in this section describes a fee taken out of a sale somebody else sent you. Shopify inverts that: there is no referral fee, and there is no traffic. The plan price is the number people compare and the smallest line on the bill \u2014 card processing dominates at any real volume, and the published plan prices themselves disagree because half the sources quote annual billing without saying so.',
  checked: ACCESSED,
  headline: [
   { k: 'Starter', v: '$5 / month', note: 'Checkout link only \u2014 not a full storefront' },
   { k: 'Basic', v: '$39 / month monthly, ~$29 annual', note: 'Sources also give $27; annual billing explains most of the spread' },
   { k: 'Grow', v: '$105 / month monthly, ~$79 annual', note: 'Renamed from "Shopify" in 2026; one source gives $72' },
   { k: 'Advanced', v: '$399 / month monthly, ~$299 annual', note: ' topping out around $1M a year in sales' },
   { k: 'Plus', v: 'From $2,300 / month', note: 'Contract-based; reported on a 3-year term billed yearly' },
   { k: 'Card processing (Basic)', v: '2.9% + 30\u00a2 online', note: '2.6% + 10\u00a2 in person, via Shopify Payments' },
   { k: 'Card processing (Grow)', v: '2.7% + 30\u00a2 online', note: '2.5% + 10\u00a2 in person' },
   { k: 'Card processing (Advanced)', v: '2.5% + 30\u00a2 online', note: 'One source gives 2.4% + 10\u00a2 in person' },
   { k: 'Third-party gateway surcharge', v: '2% Basic \u00b7 1% Grow \u00b7 0.6% Advanced', note: 'On top of whatever your gateway charges. Zero if you use Shopify Payments' },
  ],
  fulfilment: {
   title: 'There is no fulfillment fee, and that is the point',
   intro: 'Shopify does not hold your inventory or ship your orders. Fulfillment is whatever you arrange \u2014 your own warehouse, a 3PL, or Amazon Multi-Channel Fulfillment routing your FBA stock to Shopify orders. The cost sits outside the platform entirely.',
   rows: [
    { k: 'Fulfillment fee', v: 'None charged by the platform', note: 'You pay a 3PL, or you pack it yourself' },
    { k: 'Routing FBA stock here', v: 'Possible through MCF', note: 'One inventory pool; note the peak surcharge runs October 15 to January 14 on MCF too' },
    { k: 'Apps', v: 'Reported $350\u2013$1,400 / month for mid-market brands', note: 'The line most first-time modellers omit entirely' },
   ],
  },
  gotchas: [
   {
    title: 'The third-party gateway surcharge is the expensive mistake',
    body: 'Sell $20,000 a month through PayPal on Basic and you pay PayPal\u2019s rate plus Shopify\u2019s 2% penalty \u2014 roughly $400 a month for not using Shopify Payments. Reporting\u2019s own verdict on whether that is worth it: almost never.',
   },
   {
    title: 'The plan fee is not the cost',
    body: 'At $30,000 a month in revenue on Basic, one worked example puts the bill at $39 in subscription and roughly $900 in card processing. The plan is 4% of the total. Comparing platforms on subscription price compares the wrong number.',
   },
   {
    title: 'Traffic is the whole problem',
    body: 'A marketplace fee buys you demand. Shopify does not. Reporting across the diversification literature is consistent that marketplace rank does not transfer \u2014 a brand with strong Amazon placement and no independent audience does not automatically sell on its own site.',
   },
   {
    title: 'You become the sales tax collector',
    body: 'Marketplace facilitator laws put sales tax collection on Amazon, Walmart and eBay. On your own store, that obligation is yours in every state where you have nexus \u2014 including states where FBA inventory created it.',
   },
   {
    title: 'Basic includes no staff accounts',
    body: ' unchanged since 2024: the store owner is the only login on Basic. Staff need Grow, or a collaborator invitation through a free Partner account.',
   },
  ],
  example: {
   label: 'A $100 order on the Basic plan through Shopify Payments, with the subscription allocated over 300 orders',
   rows: [
    { k: 'Sale price', v: '$100.00' },
    { k: 'Card processing at 2.9% + 30\u00a2', v: '\u2212$3.20', tone: 'cost' },
    { k: 'Plan fee, allocated over 300 orders', v: '\u2212$0.13', tone: 'cost' },
    { k: 'Apps, allocated (illustrative, lean stack)', v: '\u2212$0.30', tone: 'cost' },
   ],
   net: '$96.37',
   rate: '3.6% of the sale price \u2014 before the cost of acquiring the customer, which is the real number here',
  },
  contested: [
   { claim: 'Plan prices', detail: 'Basic is given as $39, $29 and $27; Grow as $105, $79 and $72; Advanced as $399 and $299. Monthly against annual billing explains most of it, but several sources do not say which they are quoting \u2014 check the billing term before comparing.' },
   { claim: 'The Agentic plan', detail: 'One 2026 source lists a new Agentic plan at $0 per month among six tiers. Others describe five plans and do not mention it. Treat it as unconfirmed until you see it on Shopify\u2019s own pricing page.' },
   { claim: 'App spend', detail: 'One source puts a mid-market app stack at $350\u2013$1,400 a month; another describes beginner stores staying under $50 a month all-in. Both are plausible for different businesses, which is why an average is useless here.' },
  ],
  fits: [
   'Brands with an existing audience \u2014 email list, social following, or repeat customers who already know the name',
   'Sellers wanting the customer relationship and the data that marketplaces do not hand over',
   'Anyone whose margin is being consumed by referral fees on a product that does not need marketplace discovery',
  ],
  againstIt: [
   'Sellers expecting marketplace demand to follow them \u2014 reporting is consistent that it does not',
   'Anyone treating it as a volume replacement rather than a margin and data play',
   'Businesses without the capacity to take on sales tax collection in every nexus state',
  ],
  sources: [
   { title: 'Shopify pricing (2026): plans, fees and real cost breakdown', publisher: 'Commerce-UI', href: 'https://commerce-ui.com/insights/shopify-pricing', accessed: ACCESSED },
   { title: 'Shopify pricing plans 2026: complete cost breakdown', publisher: 'Craftshift', href: 'https://craftshift.com/shopify-pricing-plans-2026-complete-breakdown/', accessed: ACCESSED },
   { title: 'Shopify pricing (2026): plans, fees and real costs', publisher: 'Shero Commerce', href: 'https://sherocommerce.com/blogs/insights/shopify-pricing', accessed: ACCESSED },
   { title: 'Shopify pricing: plans and fees explained (2026 updated)', publisher: 'Skailama', href: 'https://www.skailama.com/blog/shopify-pricing-plan', accessed: ACCESSED },
   { title: 'Shopify pricing 2026: every plan, fee and hidden cost explained', publisher: 'Startup Launch Page', href: 'https://www.startuplaunchpage.com/blog/shopify-pricing-2026', accessed: ACCESSED },
   { title: 'Shopify pricing 2026: which plan to choose?', publisher: 'Ecomm.design', href: 'https://ecomm.design/shopify-pricing-guide/', accessed: ACCESSED },
  ],
 },
];

export const bySlug = (slug: string) => MARKETPLACES.find((m) => m.slug === slug);
