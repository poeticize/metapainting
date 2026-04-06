import { defineCollection, z } from 'astro:content';

const paintings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    participants: z.number().optional(),
    date: z.string().optional(),
    venue: z.string().optional(),
    dimensions: z.string().optional(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(99),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string(),
    thumbnailDark: z.string().optional(),
    phases: z.array(z.object({
      label: z.string(),
      description: z.string(),
      images: z.array(z.string()),
    })).default([]),
  }),
});

export const collections = { paintings };
