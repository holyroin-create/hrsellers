import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Fees & reimbursements', 'Shipping & logistics', 'Getting started', 'Scaling', 'Software']),
    published: z.string(),
    modified: z.string().optional(),
    minutes: z.number(),
    ledger: z.string().optional(),
    ledgerKind: z.enum(['recovered', 'cost']).optional(),
    numbered: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
