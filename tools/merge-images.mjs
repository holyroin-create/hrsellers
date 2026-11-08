// Merge per-editor manifests (data/images-*.json, excluding images.json) into data/images.json.
// Fails on duplicate image_id or duplicate source photo.
import fs from 'node:fs';
const files = fs.readdirSync('data').filter((f) => /^images-.+\.json$/.test(f));
const out = []; const ids = new Map(); const srcs = new Map(); let bad = 0;
for (const f of files) for (const e of JSON.parse(fs.readFileSync(`data/${f}`, 'utf8'))) {
  const src = (e.original_url || '').split('?')[0];
  if (ids.has(e.image_id)) { console.error(`duplicate image_id ${e.image_id} (${ids.get(e.image_id)} / ${f})`); bad++; continue; }
  if (src && srcs.has(src)) { console.error(`same photo used twice: ${src} (${srcs.get(src)} / ${e.image_id})`); bad++; }
  ids.set(e.image_id, f); if (src) srcs.set(src, e.image_id); out.push(e);
}
const prev = fs.existsSync('data/images.json') ? JSON.parse(fs.readFileSync('data/images.json', 'utf8')) : [];
const keep = new Map(prev.map((e) => [e.image_id, e]));
const merged = out.map((e) => { const p = keep.get(e.image_id); return p && p.original_url === e.original_url && p.status === 'verified' ? p : e; });
fs.writeFileSync('data/images.json', JSON.stringify(merged.sort((a, b) => a.image_id.localeCompare(b.image_id)), null, 1));
console.log(`merge-images: ${merged.length} entries from ${files.length} files, ${bad} problem(s)`);
process.exit(bad ? 1 : 0);
