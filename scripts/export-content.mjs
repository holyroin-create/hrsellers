import { guides } from '../src/data/guides.mjs';
import { reviews } from '../src/data/reviews.mjs';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');

// Guides → one JSON per guide. Migrate table rows [[..]] -> [{cells:[..]}]
guides.forEach((g, i) => {
  const blocks = (g.blocks || []).map(b => {
    if (b.type === 'table' && Array.isArray(b.rows)) {
      return { ...b, rows: b.rows.map(r => Array.isArray(r) ? { cells: r } : r) };
    }
    return b;
  });
  const out = { ...g, blocks, order: i + 1 };
  fs.writeFileSync(path.join(root, 'src/cms-content/guides', g.slug + '.json'), JSON.stringify(out, null, 2));
});

// Reviews → one JSON per review
reviews.forEach((r, i) => {
  const out = { ...r, order: i + 1 };
  fs.writeFileSync(path.join(root, 'src/cms-content/reviews', r.slug + '.json'), JSON.stringify(out, null, 2));
});

console.log('Exported', guides.length, 'guides and', reviews.length, 'reviews to JSON.');
