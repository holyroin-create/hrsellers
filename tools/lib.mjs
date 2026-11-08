import fs from 'node:fs';
import path from 'node:path';
export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
export const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
export function walk(dir, ext) {
  const out = []; const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return out;
  for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p, ext)); else if (!ext || p.endsWith(ext)) out.push(p);
  }
  return out;
}
export function claims() {
  const m = new Map();
  for (const f of walk('data/claims', '.json')) for (const c of JSON.parse(read(f))) {
    if (m.has(c.claim_id)) throw new Error(`Duplicate claim id ${c.claim_id} in ${f}`);
    m.set(c.claim_id, { ...c, _file: f });
  }
  return m;
}
export function citedIds(body) {
  const ids = []; const re = /(?:<C\s+id|claim)\s*[=:]\s*\{?\s*["']([A-Za-z0-9_.-]+)["']/g; let m;
  while ((m = re.exec(body))) if (!ids.includes(m[1])) ids.push(m[1]);
  return ids;
}
export class Report {
  constructor(name) { this.name = name; this.errors = []; this.warnings = []; }
  err(m) { this.errors.push(m); } warn(m) { this.warnings.push(m); }
  done() {
    for (const w of this.warnings) console.log(`  warn  ${w}`);
    for (const e of this.errors) console.log(`  ERROR ${e}`);
    console.log(`[${this.name}] ${this.errors.length} error(s), ${this.warnings.length} warning(s)`);
    if (this.errors.length) process.exit(1);
  }
}
