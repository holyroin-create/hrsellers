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
    date: '2026-09-22',
    title: 'CBP Entry Type 13 voluntary test begins',
    what: 'A voluntary electronic test for international mail shipments valued at $2,500 or less is scheduled to begin. Reported as announced; confirm status with CBP before relying on it.',
    who: 'Importers using international mail',
    status: 'Upcoming',
    short: 'CBP Entry Type 13 voluntary test opens for mail imports',
  },
  {
    date: '2026-06-24',
    title: 'De minimis suspension codified by regulation',
    what: 'CBP moved the de minimis suspension from administrative action into regulation through interim final rules. Reporting points to a statutory repeal following in 2027.',
    who: 'Every importer of low-value goods',
    status: 'In force',
    short: 'De minimis suspension written into regulation',
  },
  {
    date: '2026-02-20',
    title: 'Supreme Court ruling on IEEPA tariffs',
    what: 'The Court struck down tariffs issued under IEEPA authority. This did not restore de minimis, which rests on separate legal authority — a distinction widely misreported at the time.',
    who: 'Importers; caused significant confusion',
    status: 'In force',
    short: 'IEEPA tariffs struck down — de minimis unaffected',
  },
  {
    date: '2026-01-15',
    title: 'US FBA fulfillment fee changes take effect',
    what: 'Amazon stated an average increase of $0.08 per unit. Selling price became an input to the fulfillment fee for the first time. Referral percentages and storage rates unchanged. Removal, disposal and liquidation fees restructured.',
    who: 'All US FBA sellers',
    status: 'In force',
    short: 'US FBA fees up $0.08/unit average; price now an input',
  },
  {
    date: '2026-01-01',
    title: 'European fee reductions apply',
    what: 'Amazon lowered European fees by an average of £0.15 / €0.17 per unit for 2026, including FBA parcel reductions, wider Low-Price FBA eligibility, and referral cuts in several high-volume categories.',
    who: 'Sellers in Amazon European stores',
    status: 'In force',
    short: 'European FBA fees cut by £0.15 / €0.17 per unit',
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
    what: 'The $800 duty-free threshold was suspended for every country of origin, closing the country-hopping route. This is the step most sellers missed, because 2025 coverage focused on China.',
    who: 'Every cross-border seller',
    status: 'In force',
    short: '$800 threshold suspended for every country of origin',
  },
  {
    date: '2025-05-02',
    title: 'De minimis eliminated for China and Hong Kong',
    what: 'Executive Order 14256 removed de minimis eligibility for Chinese and Hong Kong origin goods. Qualifying parcels became subject to an ad valorem tariff or a flat per-shipment fee.',
    who: 'Sellers importing from China or Hong Kong',
    status: 'In force',
    short: 'De minimis removed for China and Hong Kong origin goods',
  },
];

/* The most recent entry that is already in force — powers the Fee Watch module. */
export const LATEST_IN_FORCE = POLICY.find((e) => e.status === 'In force')!;
export const NEXT_UPCOMING = POLICY.find((e) => e.status === 'Upcoming');
