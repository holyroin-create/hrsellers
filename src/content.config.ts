import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const hero = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('stat'), figure: z.string(), label: z.string(), claim: z.string() }),
  z.object({ kind: z.literal('flow'), steps: z.array(z.string()).min(2).max(6), claim: z.string().optional() }),
  z.object({ kind: z.literal('timeline'), items: z.array(z.object({ date: z.string(), label: z.string() })).min(2).max(6), claim: z.string() }),
  z.object({ kind: z.literal('compare'), unit: z.string().default(''), rows: z.array(z.object({ label: z.string(), value: z.number() })).min(2).max(6), claim: z.string() }),
]);

const page = z.object({
  title: z.string().max(90),
  description: z.string().min(80).max(200),
  category: z.enum(['Import & customs', 'Marketplace fees', 'Product compliance', 'Operations & accounting']),
  published: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  modified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  lastVerified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  minutes: z.number().int().positive(),
  summary: z.array(z.string()).min(2).max(6),
  hero,
  related: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  reviewedBy: z.string().optional(),
  reviewedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
});

export const collections = {
  guides: defineCollection({ loader: glob({ pattern: '*.mdx', base: './src/content/guides' }), schema: page }),
  marketplaces: defineCollection({ loader: glob({ pattern: '*.mdx', base: './src/content/marketplaces' }), schema: page }),
};
