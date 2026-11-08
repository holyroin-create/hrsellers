export function citeOrder(body: string, heroClaim?: string): string[] {
  const ids: string[] = [];
  if (heroClaim) ids.push(heroClaim);
  const re = /(?:<C\s+id|claim)\s*[=:]\s*\{?\s*["']([A-Za-z0-9_.-]+)["']/g;
  let m;
  while ((m = re.exec(body))) if (!ids.includes(m[1])) ids.push(m[1]);
  return ids;
}
