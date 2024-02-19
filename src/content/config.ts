import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			url: z.string().optional(),
			description: z.string(),
			description_short: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			images: z.array(z.string()).optional(),
			img_alt: z.string().optional(),
			gallery1: z.array(z.string()).optional(),
			gallery2: z.array(z.string()).optional(),
		}),
	}),
	experience: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			description_short: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			gallery1: z.array(z.string()).optional(),
			gallery2: z.array(z.string()).optional(),
		}),
	}),
};
