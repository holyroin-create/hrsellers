import fs from 'node:fs';
import path from 'node:path';

export type Claim = {
  claim_id: string; claim: string; page: string; source_url: string; publisher: string;
  source_type: string; accessed: string; evidence?: string; archive_url?: string;
  produced_by?: string; verified_by?: string; status: string; verifier_note?: string;
};

let cache: Map<string, Claim> | null = null;
export function allClaims(): Map<string, Claim> {
  if (cache) return cache;
  cache = new Map();
  const dir = path.resolve('data/claims');
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
    const arr: Claim[] = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    for (const c of arr) cache.set(c.claim_id, c);
  }
  return cache;
}
export function claim(id: string): Claim {
  const c = allClaims().get(id);
  if (!c) throw new Error(`Unknown claim id: ${id}`);
  if (c.status !== 'verified' && process.env.ALLOW_UNVERIFIED !== '1') throw new Error(`Claim ${id} is not verified (status: ${c.status})`);
  return c;
}
export function claimsForPage(pagePath: string): Claim[] {
  return [...allClaims().values()].filter((c) => c.page === pagePath && (c.status === 'verified' || process.env.ALLOW_UNVERIFIED === '1'));
}
export function fmtDate(d: string) {
  const [y, m, day] = d.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, day)).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
export function hostOf(u: string) { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } }

/* Citation numbers are per SOURCE (unique URL), in order of first citation on the page. */
const numCache = new WeakMap<string[], Map<string, number>>();
export function sourceGroups(order: string[]) {
  const groups: { url: string; c: Claim; ids: string[] }[] = [];
  for (const id of order) {
    const c = allClaims().get(id); if (!c) continue;
    let g = groups.find((x) => x.url === c.source_url);
    if (!g) { g = { url: c.source_url, c, ids: [] }; groups.push(g); }
    g.ids.push(id);
  }
  return groups;
}
export function citeNum(order: string[], id: string): number {
  let m = numCache.get(order);
  if (!m) { m = new Map(); sourceGroups(order).forEach((g, i) => g.ids.forEach((x) => m!.set(x, i + 1))); numCache.set(order, m); }
  return m.get(id) ?? 0;
}
