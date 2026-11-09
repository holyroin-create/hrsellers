import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const page = z.object({
  title: z.string().max(80),
  description: z.string().min(100).max(170),
  pillar: z.enum(['importing', 'fees', 'compliance', 'money', 'operations']),
  type: z.enum(['guide', 'reference']).default('guide'),
  published: date, modified: date, lastVerified: date,
  minutes: z.number().int().positive(),
  noindex: z.boolean().optional(),
  photo: z.object({ subject: z.string(), alt: z.string(), image: z.string().optional() }),
  keyFacts: z.array(z.object({ label: z.string(), value: z.string(), claim: z.string() })).min(2).max(6),
  summary: z.array(z.string()).min(2).max(6),
  faq: z.array(z.object({ q: z.string(), a: z.string(), claims: z.array(z.string()).default([]) })).default([]),
  related: z.array(z.string()).default([]),
  reviewedBy: z.string().optional(), reviewedDate: date.optional(),
  draft: z.boolean().default(false),
});
export const collections = {
  guides: defineCollection({ loader: glob({ pattern: '*.mdx', base: './src/content/guides' }), schema: page }),
  marketplaces: defineCollection({ loader: glob({ pattern: '*.mdx', base: './src/content/marketplaces' }), schema: page }),
  reviews: defineCollection({ loader: glob({ pattern: '*.mdx', base: './src/content/reviews' }), schema: page }),
};
