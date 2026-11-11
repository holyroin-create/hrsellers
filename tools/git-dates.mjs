// Keeps each page's "Updated" date (frontmatter `modified`) in step with real edits.
// For every page it finds the last git commit that MODIFIED the file (the commit that first added it does
// not count, so uploading the whole project does not make every page look updated). If that commit is newer
// than the date in the frontmatter, the build uses the commit date. Dates are never invented or moved back.
// Runs only in CI (GitHub Actions sets CI=true) and only with full history (checkout fetch-depth: 0).
import fs from 'node:fs'; import path from 'node:path'; import { execFileSync } from 'node:child_process';
import { ROOT } from './lib.mjs';

const git = (args) => { try { return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return null; } };
if (process.env.CI !== 'true') { console.log('git-dates: not CI, skipped'); process.exit(0); }
if (git(['rev-parse', '--is-inside-work-tree']) !== 'true') { console.log('git-dates: no git repository, skipped'); process.exit(0); }
if (git(['rev-parse', '--is-shallow-repository']) === 'true') { console.log('git-dates: shallow clone, skipped (set fetch-depth: 0)'); process.exit(0); }

let changed = 0;
for (const col of ['guides', 'marketplaces', 'reviews']) {
  const dir = path.join(ROOT, 'src/content', col); if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.mdx'))) {
    const rel = `src/content/${col}/${f}`;
    const d = git(['log', '-1', '--diff-filter=M', '--format=%cs', '--', rel]);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d || '')) continue;
    const file = path.join(ROOT, rel); const src = fs.readFileSync(file, 'utf8');
    const m = src.match(/^modified:\s*"?(\d{4}-\d{2}-\d{2})"?\s*$/m);
    if (!m || d <= m[1]) continue;
    fs.writeFileSync(file, src.replace(m[0], `modified: "${d}"`));
    changed++; console.log(`git-dates: ${rel} ${m[1]} -> ${d}`);
  }
}
console.log(`git-dates: ${changed} page(s) updated from git history`);
