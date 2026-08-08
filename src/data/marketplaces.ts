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

const ACCESSED = '2026-08-08';

export const MARKETPLACES: Marketplace[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'amazon',
    name: 'Amazon',
    short: 'Highest fee stack, deepest demand. Nine separate charges before advertising.',
    eyebrow: 'Marketplace',
    h1: 'Selling on Amazon: the 2026 fee stack, line by line',
    lede: 'Amazon is not one fee. It is a referral percentage, a fulfilment fee that now varies with your selling price, a surcharge on top of that fee, an inbound placement charge, two storage regimes, an aged-inventory penalty, a low-stock penalty and a returns charge. Modelling it as "about 15% plus fulfilment" is how sellers arrive at a loss they did not forecast.',
    checked: ACCESSED,
    headline: [
      { k: 'Account', v: '$39.99 / month', note: 'Professional plan; Individual plan charges per item sold instead' },
      { k: 'Referral fee', v: '6%–45% of sale price', note: 'Category dependent; most categories 8%–15%' },
      { k: 'Fulfilment (FBA)', v: 'From roughly $3.20 per unit', note: 'By size tier, weight — and, since 2026, by price band' },
      { k: 'Price bands', v: 'under $10 / $10–$50 / over $50', note: 'New in 2026: your selling price is an input to the fulfilment fee' },
      { k: 'Fuel & logistics surcharge', v: '3.5% on the fulfilment fee', note: 'Reported as effective 17 April 2026 — verify before modelling' },
      { k: 'Inbound placement', v: '$0 to roughly $1.58 per unit', note: 'Zero if you accept Amazon-optimised splits across more centres' },
      { k: 'Storage, Jan–Sep', v: 'roughly $0.78–$0.87 / cu ft / month', note: 'Sources disagree — see contested figures below' },
      { k: 'Storage, Oct–Dec', v: 'roughly $2.40 / cu ft / month', note: 'Standard size; about three times the off-peak rate' },
      { k: 'Low-inventory-level fee', v: 'roughly $0.89–$1.10 per unit', note: 'Charged while a SKU sits below the historical supply threshold' },
    ],
    fulfilment: {
      title: 'FBA, and the three fees people forget',
      intro: 'The fulfilment fee is the number everyone quotes. It is rarely the number that decides whether a SKU works. Three charges sit outside it and behave differently.',
      rows: [
        { k: 'Inbound placement', v: 'Per unit, at shipment creation', note: 'Sending to one centre costs the most; accepting five or more destinations can take it to zero, at the cost of higher freight' },
        { k: 'Low-inventory-level fee', v: 'Per unit sold, while understocked', note: 'Reported to apply at FNSKU level in 2026 — one thin variant can charge the whole listing' },
        { k: 'Aged inventory surcharge', v: 'Escalating by age band', note: 'The decision point is around day 150, not day 181' },
      ],
    },
    gotchas: [
      {
        title: 'Your repricer is now wrong',
        body: 'Selling price entered the fulfilment fee calculation in 2026 through three price bands. Raise a $49 item to $52 to protect margin and you may cross a band and take a second increase. Any repricing rule that treats fulfilment cost as fixed is running a model that no longer describes the platform.',
      },
      {
        title: 'The average is not your number',
        body: 'Amazon put the 2026 US increase at $0.08 per unit on average. Third-party readings of the published tables put small standard-size items between $0.12 and $0.51 depending on price tier. An average across a catalogue as wide as Amazon\u2019s says nothing about one SKU.',
      },
      {
        title: 'Reimbursement is no longer insurance at retail value',
        body: 'Since 31 March 2025, inventory lost before a customer orders is reimbursed at sourcing cost, not sale price — and the definition excludes freight and duty. For imported goods this is the largest exclusion in the policy.',
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
        { k: 'FBA fulfilment (illustrative, standard size)', v: '−$5.60', tone: 'cost' },
        { k: 'Fuel & logistics surcharge at 3.5% of fulfilment', v: '−$0.20', tone: 'cost' },
        { k: 'Inbound placement (minimal split, illustrative)', v: '−$0.45', tone: 'cost' },
        { k: 'Monthly storage, allocated per unit (illustrative)', v: '−$0.10', tone: 'cost' },
        { k: 'Professional plan, allocated over 500 units', v: '−$0.08', tone: 'cost' },
      ],
      net: '$14.82',
      rate: '40.7% of the sale price, before advertising, returns and cost of goods',
    },
    contested: [
      { claim: 'Off-peak storage rate', detail: 'One 2026 rate breakdown gives $0.78 per cubic foot for standard size, another gives $0.87. Check Seller Central before modelling.' },
      { claim: 'Low-inventory-level threshold', detail: 'Published guidance splits between 28 days and 35 days of historical supply. The difference moves your reorder trigger by a week.' },
      { claim: 'Fuel and logistics surcharge', detail: 'Reported as 3.5% from 17 April 2026 by one rate card and not mentioned at all by several others published the same quarter.' },
    ],
    fits: [
      'Products with proven, steady demand where Prime placement is the deciding factor',
      'Sellers who can hold enough stock to stay above the low-inventory threshold without over-committing capital',
      'Standard-size, light items where the fulfilment fee stays a small share of the sale price',
    ],
    againstIt: [
      'Heavy, bulky or low-price items, where fulfilment and surcharges consume the margin',
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
      { k: 'Tiered categories', v: 'Rate changes at a price threshold', note: 'Jewellery reported as 20% up to $250, then 5% above — marginal, not flat' },
      { k: 'WFS fulfilment', v: 'From $3.45 per unit', note: 'Scales by the greater of unit weight or dimensional weight, plus 0.25 lb packaging, rounded up' },
      { k: 'Dimensional divisor', v: 'cubic inches ÷ 139', note: 'Different from the divisors used by common carriers — check your own boxes' },
      { k: 'Storage, Jan–Sep', v: '$0.75 / cu ft / month', note: 'Below Amazon\u2019s off-peak rate' },
      { k: 'Storage, Q4', v: '+$1.50 / cu ft after 30 days', note: 'An effective $2.25; still below Amazon\u2019s peak' },
      { k: 'Long-term storage', v: 'up to $7.50 / cu ft / month', note: 'Top band reported as introduced 30 June 2026 for the oldest inventory' },
      { k: 'Low-stock penalty', v: 'None reported', note: 'No equivalent of Amazon\u2019s low-inventory-level fee' },
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
        body: 'A flat $1.00 on items retailing below $10 does not scale with price, so it lands hardest exactly where margin is thinnest. The standard response is to bundle low-price SKUs into multipacks that clear the $10 line — which changes your dimensional weight, so run the fulfilment fee again after bundling.',
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
        { k: 'WFS fulfilment (2 lb band, illustrative)', v: '−$4.95', tone: 'cost' },
        { k: 'Storage, allocated per unit (illustrative)', v: '−$0.09', tone: 'cost' },
        { k: 'Monthly subscription', v: '$0.00' },
        { k: 'Payment processing', v: '$0.00' },
      ],
      net: '$16.21',
      rate: '35.2% of the sale price, before advertising, returns and cost of goods',
    },
    contested: [
      { claim: 'WFS versus FBA cost', detail: 'One comparison puts WFS around 15% cheaper on average than FBA. That is an average across weight bands and does not survive contact with a specific SKU. Run both.' },
      { claim: 'New-seller savings figures', detail: 'Headline totals for the new-seller programme vary widely between sources and are time-limited. Confirm terms in Seller Center rather than from a blog.' },
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
      { k: 'Final value fee', v: '13.6% for most categories', note: 'Raised by 0.35 points effective 14 February 2025 — older guides are stale' },
      { k: 'Fee base', v: 'Item + handling + buyer-paid shipping + sales tax', note: 'This is the part most sellers get wrong' },
      { k: 'Per-order fee', v: '$0.30 on orders up to $10, $0.40 above', note: 'Flat, so it bites hardest on low-price items' },
      { k: 'Category exceptions', v: 'roughly 3% to 15.3%', note: 'Books and media reported higher; guitars and heavy equipment lower' },
      { k: 'Insertion fee', v: 'First 250 listings free, then $0.35', note: 'Per month; Store subscribers get larger allowances' },
      { k: 'Payment processing', v: 'Included', note: 'Managed payments folded processing into the final value fee — do not add a separate PayPal-style charge' },
      { k: 'High return-rate surcharge', v: '+5% on final value fees', note: 'Applied in affected categories when the not-as-described rate is rated very high' },
    ],
    fulfilment: {
      title: 'You fulfil it, which changes the whole calculation',
      intro: 'eBay does not run a first-party fulfilment network for general sellers. Your shipping cost is a real cost you pay, not a fee eBay deducts — and it enters the fee base if the buyer pays it.',
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
        body: 'A flat $0.30 to $0.40 is negligible on a $200 sale and material on a $6 one. On a $12 item the fixed charge alone is over three percent. If your catalogue skews cheap, the effective rate is meaningfully above the headline.',
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
      'Sellers who already control their own fulfilment and want no storage exposure',
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
    h1: 'Selling on TikTok Shop: why a 6% referral fee costs about 30%',
    lede: 'TikTok Shop advertises the cheapest commission of any major US marketplace. It is also the one where the headline number tells you least, because the channel does not work without creator commissions, and those are a cost you set yourself and pay on top.',
    checked: ACCESSED,
    headline: [
      { k: 'Account', v: '$0 / month', note: 'No subscription, no listing fee' },
      { k: 'Referral fee', v: '6% of most US categories', note: 'Select jewellery reported at 5%' },
      { k: 'New-seller promotion', v: 'Reported 3% for 30 days', note: 'Conditional on a first sale within 60 days of onboarding — an introductory rate, not your rate' },
      { k: 'Payment processing', v: 'Reported as included', note: 'Some sources report a separate 1.02%–3.78% processing line; sources conflict' },
      { k: 'Creator commission', v: '10%–30%, set by you', note: 'Beauty reported highest, tech lowest; live sessions command a premium' },
      { k: 'Fulfilled by TikTok', v: 'Roughly $2.86–$4.28 per unit', note: 'Per-unit cost falls as basket size rises' },
      { k: 'Independent shipping', v: 'Ended 31 March 2026 for US sellers', note: 'FBT, Upgraded TikTok Shipping or Collections by TikTok only' },
      { k: 'Refund administration fee', v: 'Reported as 20% of the referral fee, capped $5 per SKU', note: 'Charged on returns — a return costs you twice' },
      { k: 'Settlement delay', v: 'Roughly 15 days standard', note: 'Faster for top-rated shops, materially slower for flagged accounts' },
    ],
    fulfilment: {
      title: 'You no longer choose your own carrier',
      intro: 'The largest operational change of 2026 is not a fee. US sellers lost the option to ship independently with their own carrier labels on 31 March 2026, which removes rate negotiation from the equation.',
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
        body: 'Because FBT prices per unit and the per-unit rate falls as the order grows, bundling and cross-sell move fulfilment cost directly. On a channel where a single video can drive thousands of single-unit orders, this is one of the few costs you control.',
      },
      {
        title: 'The promotional rate teaches you the wrong number',
        body: 'A new seller who models margin during the introductory referral period is modelling a rate that expires. Price against the standard rate and treat the promotion as a temporary contribution to cash, not to unit economics.',
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
        { k: 'Referral fee at 6%', v: '−$3.00', tone: 'cost' },
        { k: 'Creator commission at 15%', v: '−$7.50', tone: 'cost' },
        { k: 'FBT fulfilment (single unit, illustrative)', v: '−$4.28', tone: 'cost' },
        { k: 'Payment processing (illustrative, where charged separately)', v: '−$0.51', tone: 'cost' },
      ],
      net: '$34.71',
      rate: '30.6% of the sale price, before advertising, returns and cost of goods',
    },
    contested: [
      { claim: 'Referral rate', detail: 'The weight of 2026 sources gives 6% for most US categories. At least one calculator states 8%. Treat 6% as the working figure and confirm in Seller Center.' },
      { claim: 'Payment processing', detail: 'Some sources state the 6% includes processing with no separate charge; others itemise 1.02%–3.78%. Check your own settlement statement rather than a published table.' },
      { claim: 'FBT starting price', detail: 'Published starting rates range from $2.86 to $4.28 per unit depending on basket size assumptions. Model your actual average order composition.' },
    ],
    fits: [
      'Visually demonstrable products where a short video does the selling',
      'Impulse price points with enough margin to carry a creator commission',
      'Sellers who can bundle, because basket size directly reduces per-unit fulfilment',
    ],
    againstIt: [
      'Considered purchases that need specification comparison rather than demonstration',
      'Thin-margin goods — a 6% fee plus a 15% commission is over a fifth of the sale price before fulfilment',
      'Anyone who needs predictable demand; this channel is spiky by design',
    ],
    sources: [
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
      { k: 'Offsite Ads cap', v: 'Reported at $100 per attributed order', note: 'Limits the damage on high-value items' },
      { k: 'Currency conversion', v: 'Reported at 2.5% over market rate', note: 'Applies when your listing and bank currencies differ' },
    ],
    fulfilment: {
      title: 'You ship it, and shipping is inside the fee base',
      intro: 'Etsy has no first-party fulfilment network for general sellers. Shipping is your cost and your logistics — but what you charge the buyer is taxed by the transaction fee.',
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
        body: 'A multi-quantity listing charges $0.20 again for each additional unit as the listing auto-renews. Sellers modelling a single $0.20 across a hundred units are out by nearly twenty dollars per hundred sales — small in isolation, structural on low-price goods.',
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
      'Digital downloads, where there is no fulfilment cost and the fee stack is the entire cost of sale',
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
];

export const bySlug = (slug: string) => MARKETPLACES.find((m) => m.slug === slug);
