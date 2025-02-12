import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        updated: z.date().optional(),
        draft: z.boolean().optional(),
        image: z.object({
          url: image(),
          alt: z.string(),
        }),
        tags: z.array(z.string()),
        extraAuthors: z.array(z.string()).optional(),
        categories: z.array(z.string()),
      })
      .merge(rssSchema),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        updated: z.date().optional(),
        draft: z.boolean().optional(),
        image: z.object({
          url: image(),
          alt: z.string(),
        }),
        tags: z.array(z.string()),
        extraAuthors: z.array(z.string()).optional(),
        categories: z.array(z.string()),
        featured: z.boolean().optional(),
        collection: z.boolean().optional(),
        includeHero: z.boolean().optional(),
      })
      .merge(rssSchema),
});

export const collections = { posts, projects };
