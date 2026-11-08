import fs from 'node:fs';
import { allClaims } from './claims';
export type LogEntry = { id: string; date: string; effective?: string; agency: string; title: string; summary: string; url: string; claim_ids: string[] };
export function policyLog(): LogEntry[] {
  const f = 'data/policy-log.json';
  if (!fs.existsSync(f)) return [];
  const all: LogEntry[] = JSON.parse(fs.readFileSync(f, 'utf8'));
  const claims = allClaims();
  return all.filter((e) => e.claim_ids.every((id) => claims.get(id)?.status === 'verified') || process.env.ALLOW_UNVERIFIED === '1').sort((a, b) => b.date.localeCompare(a.date));
}
export type Rate = { label: string; value: string; claim_id: string; href: string };
export function rateboard(): Rate[] {
  const f = 'data/rateboard.json';
  if (!fs.existsSync(f)) return [];
  const claims = allClaims();
  return (JSON.parse(fs.readFileSync(f, 'utf8')) as Rate[]).filter((r) => claims.get(r.claim_id)?.status === 'verified');
}
export const CATS = [
  { name: 'Import & customs', id: 'import-customs', d: 'Entry types, bonds, classification, origin, valuation and the duties that stack on one shipment.' },
  { name: 'Marketplace fees', id: 'marketplace-fees', d: 'What each platform charges, from its own fee pages, worked through on a hypothetical item.' },
  { name: 'Product compliance', id: 'product-compliance', d: 'Certificates of conformity, hazardous materials in shipping, and the federal rule on reviews.' },
  { name: 'Operations & accounting', id: 'operations-accounting', d: 'Inventory, cost of goods sold and the records the IRS expects.' },
];
