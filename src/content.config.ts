import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      cover: image(),
      images: z.array(image()).default([]),
      tags: z.array(z.string()).default([]),
      status: z.enum(['completado', 'en desarrollo', 'tesis']),
      year: z.number(),
      role: z.string(),
      featured: z.boolean().default(false),
      repoUrl: z.string().url().optional(),
      repoVisibility: z.enum(['public', 'private']).default('public'),
      demoUrl: z.string().url().optional(),
      videoUrl: z.string().url().optional(),
    }),
});

export const collections = { projects };
