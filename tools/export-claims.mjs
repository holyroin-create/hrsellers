// Exports the whole claims register as docs/IDDIA_KAYIT_DEFTERI.csv and .json (deliverable format).
import fs from 'node:fs'; import path from 'node:path';
import { ROOT, claims } from './lib.mjs';
const rows = [...claims().values()].map(({ _file, ...c }) => c);
const cols = ['claim_id', 'claim', 'page', 'source_url', 'publisher', 'source_type', 'accessed', 'archive_url', 'produced_by', 'verified_by', 'status', 'evidence', 'verifier_note', 'fetched_via'];
const q = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
fs.writeFileSync(path.join(ROOT, 'docs/IDDIA_KAYIT_DEFTERI.csv'), [cols.join(','), ...rows.map((r) => cols.map((k) => q(r[k])).join(','))].join('\n') + '\n');
fs.writeFileSync(path.join(ROOT, 'docs/IDDIA_KAYIT_DEFTERI.json'), JSON.stringify(rows, null, 1));
console.log(`${rows.length} claims exported`);
