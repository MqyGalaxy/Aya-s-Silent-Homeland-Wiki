import type { Character } from '../types';

export const characters: Character[] = [
    {
        id: 'aya',
        name: '射命丸 文',
        nameEn: 'AYA SHAMEIMARU',
        role: '战地记者 // 机动型',
        desc: '幻想乡最速记者，擅长快速穿插战场获取情报。既然不如冲锋枪，但是突击步枪单发伤害较高，属于万金油的武器。',
        weapon: '突击步枪 (ASSAULT RIFLE)',
        stats: [80, 95, 40, 70],
        img: 'https://via.placeholder.com/500x800/222/555?text=AYA+ART'
    },
    {
        id: 'momiji',
        name: '犬走 椛',
        nameEn: 'MOMIJI INUBASHIRI',
        role: '巡逻哨戒 // 防御型',
        desc: '白狼天狗的优秀护卫，提供坚实的防线。擅长近距离爆发火力和阵地防守。',
        weapon: '霰弹枪 (SHOTGUN)',
        stats: [60, 50, 90, 60],
        img: 'https://via.placeholder.com/500x800/222/555?text=MOMIJI+ART'
    },
    {
        id: 'nue',
        name: '封兽 鵺',
        nameEn: 'HOUJUU NUE',
        role: '赌场老千 // 潜行型',
        desc: '正体不明的妖怪，擅长伪装与潜入破坏。在阴影中给予敌人致命一击。',
        weapon: '冲锋枪 (SMG)',
        stats: [75, 80, 30, 90],
        img: 'https://via.placeholder.com/500x800/222/555?text=NUE+ART'
    },
    {
        id: 'reisen',
        name: '铃仙·U·因幡',
        nameEn: 'REISEN U. INABA',
        role: '月战老兵 // 专业型',
        desc: '经历过月面战争的老兵，精通各种战术装备。能适应各种复杂的战场环境。',
        weapon: '月球步枪 (LUNAR RIFLE)',
        stats: [70, 60, 60, 95],
        img: 'https://via.placeholder.com/500x800/222/555?text=REISEN+ART'
    }
];