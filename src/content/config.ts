import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        tag: z.string(),
        // 允许 tagColor 为空，默认为 default
        tagColor: z.enum(['orange', 'red', 'default']).optional(),
        description: z.string().optional(),
    }),
});

export const collections = {
    'news': newsCollection,
};