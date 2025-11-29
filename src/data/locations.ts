import type { MapLocation } from '../types';

export const locations: MapLocation[] = [
    {
        id: 'vault139',
        name: '139号避难所',
        code: '139', // 
        status: 'SAFE',
        threat: '无',
        description: '我们目前的据点。虽然设施老旧，但这是在这片废土中唯一能称之为家的地方。包含了集结区、食堂和大堂。',
        screenshot: 'https://placehold.co/1920x1080/1a1a1d/4ade80?text=Vault+139+Interior',
        x: '30%',
        y: '40%',
        type: 'safe'
    },
    {
        id: 'road',
        name: '妖怪兽道',
        code: '妖道', 
        status: 'CAUTION',
        threat: '低',
        description: '连接各个区域的主要干道。虽然视野开阔，但偶尔会有迷失的妖精出没，适合新手特勤进行实弹训练。',
        screenshot: 'https://placehold.co/1920x1080/2a2a10/ff9c00?text=Beast+Road+View',
        x: '50%',
        y: '30%',
        type: 'warning'
    },
    {
        id: 'shrine',
        name: '博丽神社旧址',
        code: '博丽', 
        status: 'DANGER',
        threat: '极端',
        description: '曾经是维持幻想乡结界的核心，现在被高浓度的灵力风暴笼罩。已确认有不明高能实体反应，禁止单人前往。',
        screenshot: 'https://placehold.co/1920x1080/2a1010/c91a1a?text=Shrine+Ruins',
        x: '65%',
        y: '60%',
        type: 'danger'
    }
];