import fs from 'node:fs';
import path from 'node:path';
export type Claim = { claim_id: string; claim: string; page: string; source_url: string; publisher: string; source_type: string; accessed: string; evidence?: string; status: string; verified_by?: string; produced_by?: string };
let cache: Map<string, Claim> | null = null;
export function allClaims() {
  if (cache) return cache;
  cache = new Map();
  const dir = path.resolve('data/claims');
  if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json'))) for (const c of JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) as Claim[]) cache.set(c.claim_id, c);
  return cache;
}
export const unverifiedAllowed = () => process.env.ALLOW_UNVERIFIED === '1';
export function claim(id: string): Claim {
  const c = allClaims().get(id);
  if (!c) throw new Error(`Unknown claim id: ${id}`);
  if (c.status !== 'verified' && !unverifiedAllowed()) throw new Error(`Claim ${id} is not verified (${c.status})`);
  return c;
}
export const isVerified = (id: string) => allClaims().get(id)?.status === 'verified' || (unverifiedAllowed() && allClaims().has(id));
export function fmtDate(d: string, short = false) {
  const [y, m, day] = d.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, day)).toLocaleDateString('en-US', { month: short ? 'short' : 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
export const hostOf = (u: string) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } };
/** ids in order of first appearance in an MDX body (hero/keyfacts/faq ids first). */
export function citeOrder(body: string, pre: string[] = []) {
  const ids: string[] = [...pre];
  const re = /(?:<C\s+id|claims?)\s*[=:]\s*\{?\s*\[?\s*["']([A-Za-z0-9_.-]+)["']/g; let m;
  while ((m = re.exec(body))) if (!ids.includes(m[1])) ids.push(m[1]);
  // also catch additional ids inside claims arrays
  const re2 = /claims\s*:\s*\[([^\]]*)\]/g; let n;
  while ((n = re2.exec(body))) for (const x of n[1].matchAll(/["']([A-Za-z0-9_.-]+)["']/g)) if (!ids.includes(x[1])) ids.push(x[1]);
  return ids;
}
/** Sources grouped by URL; citation numbers are per source. */
export function sourceGroups(order: string[]) {
  const groups: { url: string; c: Claim; ids: string[] }[] = [];
  for (const id of order) { const c = allClaims().get(id); if (!c) continue; let g = groups.find((x) => x.url === c.source_url); if (!g) { g = { url: c.source_url, c, ids: [] }; groups.push(g); } g.ids.push(id); }
  return groups;
}
const numCache = new WeakMap<string[], Map<string, number>>();
export function citeNum(order: string[], id: string) {
  let m = numCache.get(order);
  if (!m) { m = new Map(); sourceGroups(order).forEach((g, i) => g.ids.forEach((x) => m!.set(x, i + 1))); numCache.set(order, m); }
  return m.get(id) ?? 0;
}
