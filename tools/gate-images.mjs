// Gate: every image in the build is local, sized, alt-texted, within budget, and registered with a verified license.
import fs from 'node:fs'; import path from 'node:path';
import { ROOT, read, walk, Report } from './lib.mjs';
const r = new Report('images');
const man = JSON.parse(read('data/images.json')); const files = new Set();
const OK = /^(public domain|pd|cc0|cc by( \d\.\d)?|cc-by( \d\.\d)?|unsplash license)$/i;
for (const m of man) {
  for (const k of ['image_id', 'file', 'source_url', 'author', 'license', 'license_url', 'accessed', 'alt', 'attribution']) if (!m[k]) r.err(`images.json ${m.image_id}: missing ${k}`);
  if (/(^|[^a-z])(sa|nc|nd)([^a-z]|$)|gfdl|fair use|unsplash\+|premium/i.test(m.license) && !/^cc0$/i.test(m.license)) r.err(`${m.image_id}: license ${m.license} not allowed`);
  if (!OK.test(m.license.trim()) && !/^CC BY [234]\.\d$/i.test(m.license.trim()) && !/^public domain/i.test(m.license)) r.warn(`${m.image_id}: unusual license label "${m.license}" — check`);
  if (m.status === 'verified' && (!m.license_verified_by || m.license_verified_by === m.selected_by)) r.err(`${m.image_id}: license not independently verified`);
  if (m.no_faces_or_marks_confirmed !== true) r.err(`${m.image_id}: no faces/marks confirmation`);
  for (const w of [480, 960, 1600]) { const p = path.join(ROOT, 'public', `${m.file}-${w}.webp`); files.add(`${m.file}-${w}.webp`); if (!fs.existsSync(p)) r.err(`${m.image_id}: missing ${m.file}-${w}.webp`); else if (fs.statSync(p).size > { 480: 60e3, 960: 140e3, 1600: 260e3 }[w]) r.err(`${m.file}-${w}.webp over budget`); }
  if (fs.existsSync(path.join(ROOT, 'public', `${m.file}-1920.webp`))) files.add(`${m.file}-1920.webp`);
}
for (const f of walk('public', '')) { const rel = f.replace(/^public\//, ''); if (/\.(jpe?g|png|webp|avif|gif)$/i.test(rel) && !rel.startsWith('og/') && !files.has(rel)) r.err(`public/${rel} is not in the manifest`); }
const verified = new Set(man.filter((m) => m.status === 'verified').flatMap((m) => [480, 960, 1600, 1920].map((w) => `/${m.file}-${w}.webp`)));
for (const f of walk('dist', '.html')) {
  const h = read(f); if (/http-equiv="refresh"/.test(h)) continue;
  if (/class="ph/.test(h)) r.err(`${f}: photo placeholder present`);
  for (const m of h.matchAll(/<img\b[^>]*>/g)) {
    const t = m[0], src = (t.match(/\bsrc="([^"]+)"/) || [])[1] || '';
    if (!/\balt(="|[\s/>])/.test(t)) r.err(`${f}: <img ${src}> without alt`);
    if (!/\bwidth="\d+"/.test(t) || !/\bheight="\d+"/.test(t)) r.err(`${f}: <img ${src}> without width/height`);
    if (/^https?:/.test(src)) r.err(`${f}: hotlinked ${src}`);
    else if (src.startsWith('/photos/') && !verified.has(src)) r.err(`${f}: ${src} not a verified photo`);
  }
}
console.log(`  ${man.length} photos in manifest, ${man.filter((m) => m.status === 'verified').length} verified`);
r.done();
