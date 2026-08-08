export type ModelKey = 'ra' | 'oa' | 'wholesale' | 'pl' | 'dropship';

export const MODELS: Record<ModelKey, { name: string; short: string; capital: string; margin: string; blurb: string }> = {
  ra: {
    name: 'Retail arbitrage',
    short: 'RA',
    capital: '$100 – $2,000',
    margin: 'Thin; commonly cited at 5–15% net',
    blurb: 'Buying clearance and markdown stock from physical stores and reselling it. Lowest cost of entry and the fastest route to a first sale, but it scales only as fast as you can physically walk shelves, and it builds no asset you could ever sell.',
  },
  oa: {
    name: 'Online arbitrage',
    short: 'OA',
    capital: '$500 – $2,000',
    margin: 'Thin; similar to retail arbitrage',
    blurb: 'The same idea without leaving the house: sourcing discounted stock from online retailers. Better suited to people with time and patience for screen work than to people who like driving. Same ceiling as retail arbitrage, same lack of a durable asset.',
  },
  wholesale: {
    name: 'Wholesale',
    short: 'Wholesale',
    capital: '$1,000 – $10,000',
    margin: 'Around 8–15% net in commonly cited figures',
    blurb: 'Buying established branded products in bulk from authorised distributors and reselling them. More predictable than arbitrage and genuinely scalable, but it lives or dies on supplier relationships — which means cold outreach, account applications, and being taken seriously as a business.',
  },
  pl: {
    name: 'Private label',
    short: 'PL',
    capital: '$2,500 – $25,000 (sources disagree sharply)',
    margin: 'Highest of the models; 15–30% cited for FBA generally',
    blurb: 'Sourcing a generic product, branding it, and owning the listing. The only model on this list that builds something you could eventually sell. Also the slowest to first revenue, the most capital-hungry, and the one where a single bad product decision can consume your entire budget.',
  },
  dropship: {
    name: 'Dropshipping',
    short: 'Dropshipping',
    capital: 'Under $500 – $2,000',
    margin: 'Thinnest; commonly cited at 5–15%',
    blurb: 'Listing products you do not hold and having a supplier ship them. Lowest capital requirement and lowest margin. Amazon\'s drop shipping policy has strict conditions on who must appear as the seller of record on packing slips and invoices — read it before you build anything on this model.',
  },
};

type Opt = { label: string; w: Partial<Record<ModelKey, number>>; flag?: string };
export type Q = { id: string; q: string; help?: string; options: Opt[] };

export const QUESTIONS: Q[] = [
  { id: 'capital', q: 'How much money can you put in and not need back for at least three months?',
    help: 'Not your savings total — the amount you could lose entirely without it changing your life.',
    options: [
      { label: 'Under $500', w: { ra: 3, dropship: 3, oa: 1 }, flag: 'thin-capital' },
      { label: '$500 – $2,000', w: { ra: 3, oa: 3, wholesale: 1, dropship: 2 } },
      { label: '$2,000 – $5,000', w: { wholesale: 3, oa: 2, pl: 2 } },
      { label: '$5,000 – $15,000', w: { wholesale: 3, pl: 3 } },
      { label: 'More than $15,000', w: { pl: 4, wholesale: 2 } },
    ] },
  { id: 'contacts', q: 'Do you personally know brand owners, distributors, or category managers?',
    help: 'A real contact who would take your call — not a LinkedIn connection.',
    options: [
      { label: 'Yes, several in relevant categories', w: { wholesale: 4, pl: 1 } },
      { label: 'One or two', w: { wholesale: 2 } },
      { label: 'No, but I am comfortable cold-approaching people', w: { wholesale: 2, pl: 1 } },
      { label: 'No, and cold outreach is not for me', w: { ra: 2, oa: 3, dropship: 2 } },
    ] },
  { id: 'time', q: 'Realistically, how many hours a week can you give this?',
    options: [
      { label: 'Under 5', w: { dropship: 2, oa: 1 }, flag: 'low-time' },
      { label: '5 – 15', w: { oa: 3, ra: 2, wholesale: 1 } },
      { label: '15 – 30', w: { ra: 3, oa: 2, wholesale: 3, pl: 2 } },
      { label: 'Full time', w: { pl: 3, wholesale: 3, ra: 2 } },
    ] },
  { id: 'firstrevenue', q: 'How soon do you need the first money coming back in?',
    options: [
      { label: 'Within weeks — this needs to pay for itself fast', w: { ra: 4, oa: 3, dropship: 3 }, flag: 'needs-cash' },
      { label: 'Within a few months', w: { oa: 2, wholesale: 3 } },
      { label: 'Six months or more is fine', w: { pl: 4, wholesale: 2 } },
    ] },
  { id: 'inventoryrisk', q: 'If a product did not sell and you were stuck with the stock, how would that feel?',
    options: [
      { label: 'Unacceptable — I cannot carry unsold inventory', w: { dropship: 4, ra: 1 } },
      { label: 'Uncomfortable but survivable in small amounts', w: { ra: 3, oa: 3, wholesale: 1 } },
      { label: 'It is a normal cost of doing business', w: { wholesale: 3, pl: 3 } },
    ] },
  { id: 'stores', q: 'Can you regularly get to a decent number of physical retail stores?',
    options: [
      { label: 'Yes — plenty of stores nearby and a way to carry stock', w: { ra: 4 } },
      { label: 'Some, but it would be a hassle', w: { ra: 1, oa: 2 } },
      { label: 'No', w: { oa: 3, wholesale: 2, pl: 2, dropship: 2 } },
    ] },
  { id: 'outreach', q: 'How do you feel about emailing and calling suppliers who have never heard of you?',
    options: [
      { label: 'Fine — I have done sales or procurement work', w: { wholesale: 4, pl: 2 } },
      { label: 'Not my favourite, but I would do it', w: { wholesale: 2, pl: 1 } },
      { label: 'I would avoid it', w: { ra: 3, oa: 3, dropship: 2 } },
    ] },
  { id: 'entity', q: 'Can you set up a registered business, tax ID, and a reseller or resale certificate?',
    help: 'Most legitimate distributors will not open a wholesale account without these.',
    options: [
      { label: 'Already have them', w: { wholesale: 4, pl: 2 } },
      { label: 'Could arrange it within a month or two', w: { wholesale: 2, pl: 2 } },
      { label: 'Not realistically', w: { ra: 3, oa: 2, dropship: 1 }, flag: 'no-entity' },
    ] },
  { id: 'goal', q: 'What are you actually trying to build?',
    options: [
      { label: 'Cash flow now — I need income, not an asset', w: { ra: 3, oa: 3, dropship: 2 } },
      { label: 'A stable reselling business', w: { wholesale: 4 } },
      { label: 'A brand I could sell in a few years', w: { pl: 5 } },
      { label: 'I want to learn how this works before committing', w: { ra: 3, oa: 2 } },
    ] },
  { id: 'sourcing', q: 'How do you feel about overseas sourcing, freight forwarders and customs?',
    help: 'Since the de minimis suspension this is no longer optional knowledge for import-based models.',
    options: [
      { label: 'I have done it or work in logistics', w: { pl: 4, wholesale: 2 } },
      { label: 'Willing to learn it properly', w: { pl: 2, wholesale: 1 } },
      { label: 'I would rather stay domestic', w: { ra: 3, oa: 3, wholesale: 2 } },
    ] },
  { id: 'space', q: 'Do you have somewhere to store and prepare stock?',
    options: [
      { label: 'Yes — garage, spare room or better', w: { ra: 3, oa: 2, wholesale: 2 } },
      { label: 'A little space', w: { ra: 1, oa: 2 } },
      { label: 'None — everything would have to go straight to a warehouse', w: { pl: 2, wholesale: 2, dropship: 3 } },
    ] },
  { id: 'numbers', q: 'How comfortable are you with spreadsheets and unit economics?',
    options: [
      { label: 'Very — I build my own models', w: { pl: 3, wholesale: 3, oa: 2 } },
      { label: 'Reasonably', w: { wholesale: 2, oa: 2, ra: 1 } },
      { label: 'Not really', w: { ra: 2, dropship: 1 }, flag: 'weak-numbers' },
    ] },
  { id: 'english', q: 'How is your written English for supplier and marketplace correspondence?',
    help: 'Relevant if you are selling into the US or UK from outside it.',
    options: [
      { label: 'Fluent', w: { pl: 2, wholesale: 2 } },
      { label: 'Workable with effort', w: { wholesale: 1, oa: 1, pl: 1 } },
      { label: 'Weak — I would need help', w: { ra: 2, oa: 1 }, flag: 'language' },
    ] },
  { id: 'reserve', q: 'After your first order, could you fund a second one before the first pays out?',
    help: 'Marketplace payout cycles mean your cash is tied up longer than your inventory is.',
    options: [
      { label: 'Yes, comfortably', w: { pl: 3, wholesale: 3 } },
      { label: 'Just about', w: { wholesale: 2, oa: 2, ra: 1 } },
      { label: 'No — the first order is everything I have', w: { ra: 3, dropship: 3 }, flag: 'no-reserve' },
    ] },
  { id: 'downside', q: 'If you lost the entire first investment, what would happen?',
    options: [
      { label: 'It would be painful but nothing would break', w: { pl: 2, wholesale: 2 } },
      { label: 'It would hurt for a while', w: { wholesale: 2, oa: 2, ra: 1 } },
      { label: 'It would cause real problems', w: { ra: 2, dropship: 1 }, flag: 'cannot-lose' },
    ] },
];

export const FLAGS: Record<string, string> = {
  'thin-capital': 'Your capital is at the very bottom of what any model needs. Whatever you pick, treat the first few months as paid education rather than a business, and do not borrow to increase the budget.',
  'low-time': 'Under five hours a week is not enough for any of these models to work as a business. It is enough to learn. Be honest with yourself about which one you are doing.',
  'needs-cash': 'You need money back quickly, which rules out the models that pay best. That is a real constraint, not a failure — but it means picking the fast model deliberately rather than drifting into the slow one and running out of runway.',
  'no-entity': 'Without a registered business and a resale certificate, wholesale accounts are largely closed to you. Sorting this out is usually cheaper and faster than people expect, and it widens your options considerably.',
  'weak-numbers': 'Every model here is decided on unit economics. If spreadsheets are not your strength, that is the first thing to fix — before the first purchase, not after.',
  'language': 'If you are selling into an English-speaking market, weak written English shows up in listings, supplier negotiation and support responses. Budget for a translator or partner rather than hoping it will not matter.',
  'no-reserve': 'Putting everything into the first order is the most common way new sellers fail. Marketplace payout cycles mean your money is locked up well past the sale. Hold back a reserve even if it means a smaller first order.',
  'cannot-lose': 'If losing this money would cause real problems, the honest advice is not to invest it. No model here has a reliable enough success rate to justify risking money you cannot afford to lose.',
};
