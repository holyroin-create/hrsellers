export type PolicyEntry = {
  date: string;
  title: string;
  what: string;
  who: string;
  status: 'In force' | 'Upcoming' | 'Superseded by the change itself';
  short: string;
};

/* Newest first. `short` is the ticker headline — keep it under ~60 characters. */
export const POLICY: PolicyEntry[] = [
  {
    date: '2026-10-15',
    title: 'Holiday peak fulfillment fee window opens',
    what: 'Peak fulfillment fees apply from October 15, 2026 to January 14, 2027 across FBA, Remote Fulfillment, MCF and Buy with Prime, averaging $0.32 per unit over non-peak rates in the US, with the 3.5% fuel and logistics surcharge applied on top. Announced by Amazon on July 7, 2026.',
    who: 'All US and Canada FBA, MCF and Buy with Prime sellers',
    status: 'Upcoming',
    short: 'Peak fulfillment fee: Oct 15 to Jan 14, avg +$0.32/unit',
  },
  {
    date: '2026-09-22',
    title: 'CBP Entry Type 13 voluntary test begins',
    what: 'A voluntary electronic test for international mail shipments valued at $2,500 or less begins, per the Federal Register notice of June 24, 2026 (91 FR 38007). Participation is voluntary; the postal informal entry requirement continues.',
    who: 'Importers using international mail',
    status: 'Upcoming',
    short: 'CBP Entry Type 13 voluntary test opens for mail imports',
  },
  {
    date: '2026-08-04',
    title: 'TikTok Shop US referral fee raised to 8%',
    what: 'Trade reports date an increase in the standard US referral fee from 6% to 8% for most non-food categories to August 4, 2026, with beauty and some electronics sub-categories above that. TikTok has issued no press release; the referral line in your own settlement statement is the record.',
    who: 'US TikTok Shop sellers',
    status: 'In force',
    short: 'TikTok Shop referral fee: 6% to 8% on most US categories',
  },
  {
    date: '2026-07-30',
    title: 'FBA New Selection Program: referral-fee cap on new ASINs',
    what: 'For new-to-FBA branded parent ASINs, the referral fee is capped at 10% on the first 100 units and 5% on the next 100, with 120 days of free storage, returns processing and liquidations on those units. Introductory terms run through October 31, 2026.',
    who: 'Professional sellers launching branded ASINs',
    status: 'In force',
    short: 'New Selection: referral fee capped at 10% then 5% on first 200 units',
  },
  {
    date: '2026-07-27',
    title: 'Amazon product titles capped at 75 characters',
    what: 'Titles in every category except books, music and video are limited to 75 characters including spaces. A new Item Highlights field carries up to 125 indexed characters. Titles over the limit are rewritten by Amazon; brand-registered sellers get 14 days to review. Announced June 10, 2026.',
    who: 'All Amazon sellers outside media categories',
    status: 'In force',
    short: 'Amazon titles: 75-character cap, Item Highlights field added',
  },
  {
    date: '2026-07-24',
    title: 'Postal informal entry required for mail imports',
    what: "CBP's interim final rule requires a postal informal entry — bond, 10-digit HTS code and duty calculation — before release of international mail shipments, with a compliance date of October 22, 2026. The $80 / $160 / $200 flat per-package option ended February 28, 2026.",
    who: 'Anyone importing by international mail',
    status: 'In force',
    short: 'Mail imports now need a bonded informal entry before release',
  },
  {
    date: '2026-07-06',
    title: 'Seller Fulfilled Prime speed thresholds raised',
    what: 'Standard-size SFP offers must show one-day delivery on 40% of Prime page views, two-day on 75% and five-day on 90%. Weekend page views are excluded from speed metrics until October 17, 2026. Announced May 26, 2026.',
    who: 'Seller Fulfilled Prime sellers',
    status: 'In force',
    short: 'SFP: 40% one-day, 75% two-day delivery required',
  },
  {
    date: '2026-06-24',
    title: 'De minimis suspension codified by regulation',
    what: 'CBP published interim final rules moving the de minimis suspension into regulation (19 CFR 10.151 for all modes other than mail; 19 CFR 145.31 for postal). The statutory repeal under the One Big Beautiful Bill Act follows on July 1, 2027.',
    who: 'Every importer of low-value goods',
    status: 'In force',
    short: 'De minimis suspension written into regulation',
  },
  {
    date: '2026-04-17',
    title: '3.5% fuel and logistics surcharge on FBA fees',
    what: "A 3.5% surcharge applies to every FBA fulfillment fee in the US and Canada and to Remote Fulfillment from the US; Buy with Prime and Multi-Channel Fulfillment followed on May 2. Calculated on the fulfillment fee, not the sale price; Amazon's stated average is $0.17 per unit. Temporary, with no end date given.",
    who: 'All US and Canada FBA, MCF and Buy with Prime sellers',
    status: 'In force',
    short: '3.5% fuel surcharge on every FBA fulfillment fee since April 17',
  },
  {
    date: '2026-03-31',
    title: 'Amazon ends commingled inventory',
    what: 'Brand owners with the Brand Representative role in Brand Registry may use manufacturer barcodes on products with valid GTINs. All resellers must apply an Amazon barcode (FNSKU) to every unit sent to FBA. Announced at Amazon Accelerate, September 17, 2025.',
    who: 'All FBA sellers; largest effect on resellers',
    status: 'In force',
    short: 'Commingling ended; FNSKU labels mandatory for resellers',
  },
  {
    date: '2026-03-12',
    title: 'DD+7 payout reserve applied to North America accounts',
    what: 'Funds are held until seven days after the latest estimated delivery date rather than after shipment. Sellers on legacy shipment-date or zero-reserve arrangements saw payouts slow by roughly a week.',
    who: 'North America sellers',
    status: 'In force',
    short: 'Payouts now held until 7 days after delivery (DD+7)',
  },
  {
    date: '2026-02-28',
    title: 'Flat per-package postal duty option ends',
    what: 'The $80 / $160 / $200 flat specific-duty option for postal shipments, available for six months after the August 29, 2025 suspension, expired. All postal shipments are assessed ad valorem.',
    who: 'Anyone importing by international mail',
    status: 'In force',
    short: '$80/$160/$200 flat postal duty option expired',
  },
  {
    date: '2026-02-02',
    title: 'Walmart New-Seller Savings 2026 opens',
    what: "Walmart's program for stores going live after 1 February 2026 runs to 31 January 2027: tiered discounts of 20-40% off base referral fees by GMV, up to $2,000 in WFS credits, and up to $1,500 in advertising credits. Requires opt-in on the payments page after go-live, per Walmart's terms.",
    who: 'New Walmart Marketplace sellers',
    status: 'In force',
    short: 'Walmart: 20-40% off referral fees for new sellers, to Jan 2027',
  },
  {
    date: '2026-02',
    title: 'Supreme Court ruling on IEEPA tariffs',
    what: 'The Court struck down tariffs issued under IEEPA authority. This did not restore de minimis, which rests on separate legal authority — a distinction widely misreported at the time.',
    who: 'Importers; caused significant confusion',
    status: 'In force',
    short: 'IEEPA tariffs struck down — de minimis unaffected',
  },
  {
    date: '2026-01-15',
    title: 'US FBA fulfillment fee changes take effect',
    what: 'Amazon stated an average increase of $0.08 per unit. Selling price became an input to the fulfillment fee through three bands (under $10, $10–$50, over $50). The low-inventory-level fee moved to seller-FNSKU level and into bulky tiers; a 15-month aged-inventory tier was added. Referral percentages and monthly storage base rates unchanged.',
    who: 'All US FBA sellers',
    status: 'In force',
    short: 'US FBA fees up $0.08/unit average; price now an input',
  },
  {
    date: '2026-01-01',
    title: 'US FBA prep and labeling services end; European fee reductions apply',
    what: 'In the US, Amazon discontinued FBA prep and item-labeling services; inventory must arrive shelf-ready. In Europe, Amazon lowered fees by an average of £0.15 / €0.17 per unit, including FBA parcel reductions, wider Low-Price FBA eligibility and referral cuts in several high-volume categories.',
    who: 'US FBA sellers (prep); sellers in Amazon European stores (fees)',
    status: 'In force',
    short: 'US FBA prep services end; European fees cut £0.15 / €0.17',
  },
  {
    date: '2025-10',
    title: 'Amazon announces 2026 US fee update',
    what: "Roughly three months' notice given ahead of the January change. Amazon stated no new FBA fee types would be introduced for 2026.",
    who: 'All US FBA sellers',
    status: 'Superseded by the change itself',
    short: 'Amazon gives three months notice on 2026 US fees',
  },
  {
    date: '2025-08-29',
    title: 'De minimis suspension extended to all countries',
    what: 'Executive Order 14324 suspended the $800 duty-free threshold for every country of origin, closing the country-hopping route. This is the step most sellers missed, because 2025 coverage focused on China.',
    who: 'Every cross-border seller',
    status: 'In force',
    short: '$800 threshold suspended for every country of origin',
  },
  {
    date: '2025-05-02',
    title: 'De minimis eliminated for China and Hong Kong',
    what: 'Executive Order 14256 removed de minimis eligibility for Chinese and Hong Kong origin goods. Qualifying parcels became subject to an ad valorem tariff or, for postal shipments, a flat per-package duty (the flat option later expired on February 28, 2026).',
    who: 'Sellers importing from China or Hong Kong',
    status: 'In force',
    short: 'De minimis removed for China and Hong Kong origin goods',
  },
];

/* The most recent entry that is already in force — powers the Fee Watch module. */
export const LATEST_IN_FORCE = POLICY.find((e) => e.status === 'In force')!;
export const NEXT_UPCOMING = [...POLICY].reverse().find((e) => e.status === 'Upcoming');
