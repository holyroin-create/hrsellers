import fs from 'node:fs';
export type Img = { image_id: string; file: string; width: number; height: number; author: string; license: string; license_url: string; source_url: string; attribution: string; alt: string; caption: string; status: string; library: string };
let cache: Map<string, Img> | null = null;
export function images() {
  if (cache) return cache;
  cache = new Map();
  const list: Img[] = fs.existsSync('data/images.json') ? JSON.parse(fs.readFileSync('data/images.json', 'utf8')) : [];
  for (const i of list) if (i.status === 'verified' || (process.env.ALLOW_UNVERIFIED_IMAGES === '1' && i.status === 'selected')) cache.set(i.image_id, i);
  return cache;
}
export const img = (id?: string) => (id ? images().get(id) : undefined);
