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

const wikiCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        category: z.enum(['CHARACTER', 'WEAPON', 'ITEM', 'STORY', 'TUTORIAL', 'LOCATION']), // 文章分类
        description: z.string().optional(),
        cover: z.string().optional(), // 封面图/缩略图

        roleType: z.enum(['PLAYABLE', 'NPC', 'BOSS']).optional(),
        locationType: z.enum(['DEPLOYABLE', 'SAFE', 'CAUTION', 'WARNING', 'DANGER']).optional(),
        
        // --- 可选字段 (针对特定类型) ---
        // 角色/武器属性
        rarity: z.number().optional(), // 稀有度 1-5
        id_code: z.string().optional(), // 编号 (如 NO.001)
        // 武器专用
        stats: z.object({
            damage: z.string().optional(),
            fireRate: z.string().optional(),
            accuracy: z.string().optional(),
        }).optional(),
        // 地图专用
        locaInfo: z.object({
            status: z.string().optional(),
            threat: z.string().optional(),
        }).optional(),
    }),
});

export const collections = {
    'news': newsCollection,
    'wiki': wikiCollection, // 注册 wiki
};