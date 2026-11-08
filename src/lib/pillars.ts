export const PILLARS = {
  importing: { name: 'Importing to the US', short: 'Importing', photo: 'pillar-importing', icon: 'ship', blurb: 'Entry types, bonds, classification, origin, valuation and the duties that stack on one shipment.' },
  fees: { name: 'Marketplace fees', short: 'Fees', photo: 'pillar-fees', icon: 'tag', blurb: 'What Amazon, Walmart, eBay, Etsy and Shopify charge, from their own fee pages, worked through.' },
  compliance: { name: 'Product compliance', short: 'Compliance', photo: 'pillar-compliance', icon: 'shield', blurb: 'Certificates of conformity, hazmat shipping, review rules, barcodes and trademarks.' },
  money: { name: 'Money & tax', short: 'Money & tax', photo: 'pillar-money', icon: 'dollar', blurb: 'Inventory accounting, cost of goods sold, Form 1099-K and sales tax obligations.' },
} as const;
export type PillarKey = keyof typeof PILLARS;
