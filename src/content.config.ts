import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    code: z.string(), // e.g. 'PRJ-01'
    category: z.enum(["mobile", "backend", "tools", "web"]),
    status: z.string(), // e.g. 'PRODUCTION · APP STORE', 'OPEN SOURCE · RELEASED'
    year: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    techStack: z.array(z.string()),
    specs: z.array(z.string()),
    image: z.string().optional(),
    externalHref: z.string().optional(),
    externalLabel: z.string().optional(),
    secondaryExternalHref: z.string().optional(),
    secondaryExternalLabel: z.string().optional(),
    canonicalPath: z.string(), // e.g. '/fm-dictionary/'
  }),
});

export const collections = {
  projects,
};
