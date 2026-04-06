import { defineCollection, z } from 'astro:content';

const phaseSchema = z.object({
  label: z.string(),
  description: z.string(),
  images: z.array(z.string()),
});

const paintings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    participants: z.number().optional(),
    date: z.string().optional(),
    venue: z.string().optional(),
    medium: z.string().optional(),
    dimensions: z.string().optional(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(99),
    tags: z.array(z.string()).default([]),
    photoAlbumUrl: z.string().url().optional(),
    thumbnail: z.string(),
    thumbnailAlt: z.string().optional(),
    hasBlacklight: z.boolean().default(false),
    phases: z.array(phaseSchema).default([]),
  }),
});

export const collections = { paintings };
