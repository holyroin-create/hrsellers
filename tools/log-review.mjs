// Record a REAL editor review after the editor has read the page against its sources.
// Usage: node tools/log-review.mjs /guides/<slug>/ "what was checked / changed"
// Never run this for a page that was not actually reviewed.
import fs from 'node:fs';
const [url, notes = ''] = process.argv.slice(2);
const cfg = JSON.parse(fs.readFileSync('site.config.json', 'utf8'));
if (!/^\/(guides|marketplaces|reviews)\/[a-z0-9-]+\/$/.test(url || '')) { console.error('URL like /guides/<slug>/ required'); process.exit(1); }
const [, col, slug] = url.split('/');
if (!fs.existsSync(`src/content/${col}/${slug}.mdx`)) { console.error('No such page: ' + url); process.exit(1); }
const log = JSON.parse(fs.readFileSync('data/editor-reviews.json', 'utf8'));
const date = new Date().toISOString().slice(0, 10);
log.push({ url, reviewer: cfg.editorName, date, notes });
fs.writeFileSync('data/editor-reviews.json', JSON.stringify(log, null, 1) + '\n');
console.log(`Logged review of ${url} by ${cfg.editorName} on ${date}`);
