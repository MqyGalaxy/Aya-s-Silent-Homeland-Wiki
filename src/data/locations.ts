import type { MapLocation } from '../types';

export const locations: MapLocation[] = [
    {
        id: 'vault139',
        name: '139号避难所',
        code: '139', // 
        status: 'SAFE',
        threat: '无',
        description: '139号避难所是由河童们在博丽神社后山中的一座天然山洞中秘密建造，在异变爆发后成为了我们最后的据点。目前139号避难所收容了大量摇摇欲坠的幸存者，勉强通过设施内部的工业设备自给自足。为了打破担惊受怕的地下生活，在河城荷取的领导下，139号避难所开始了第三次回归幻想乡的远征。',
        screenshot: '/src/assets/images/game/139.png',
        x: '88%',
        y: '37.5%',
        type: 'safe'
    },
    {
        id: 'shrine',
        name: '博丽神社旧址',
        code: '博丽', 
        status: 'CAUTION',
        threat: '低',
        description: '曾经是幻想乡的巫女——博丽灵梦的住所。这位解决了幻想乡诸多异变的传奇，却在这一次异变中不知去向。尽管我们并没有在这里找到她，但神社确实一个不错的前哨基地选址。',
        screenshot: '/src/assets/images/game/博丽神社.png',
        x: '81.5%',
        y: '41%',
        type: 'caution'
    },
    {
        id: 'koumakann',
        name: '红魔馆',
        code: '红魔', 
        status: 'WARNING',
        threat: '高',
        description: '自从这座洋馆的主人 蕾米莉亚·斯卡蕾特 带领着她的部下们在异变爆发前夕入驻了139号避难所后，这座原本威严庄重的红魔馆便成为了尸变体的乐园。但奇怪的是，这位吸血鬼大小姐身边的同伴似乎并非所有人都选择了离开。',
        screenshot: '/src/assets/images/game/红魔馆.png',
        x: '46.55%',
        y: '48%',
        type: 'warning'
    },
    {
        id: '???',
        name: '?????',
        code: '???', 
        status: 'DANGER',
        threat: '极端',
        description: '这一片区域被雷暴覆盖。伴随着季风防御系统刺耳轰鸣的警报下，你知道就算做好万分准备，也几乎不可能在这样恶劣的天气与聚集在此的尸变体围攻下存活下来。',
        screenshot: '',
        x: '35.25%',
        y: '45%',
        type: 'danger'
    }
];