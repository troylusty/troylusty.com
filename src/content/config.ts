import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
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
    }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
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
    }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    article: z.string().url().optional(),
  }),
});

const education = defineCollection({
  type: "content",
  schema: z.object({
    institution: z.string(),
    qualification: z.string(),
    grades: z.array(z.string()),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    isOpen: z.boolean().optional(),
  }),
});

const skills = defineCollection({
  type: "content",
  schema: z.object({
    type: z.string(),
    title: z.string(),
    icon: z.string(),
  }),
});

export const collections = { posts, projects, work, education, skills };
