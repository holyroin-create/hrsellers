import { read, walk } from './lib.mjs';
console.log(walk('dist', '.html').filter((f) => !/http-equiv="refresh"/.test(read(f))).join('\n'));
