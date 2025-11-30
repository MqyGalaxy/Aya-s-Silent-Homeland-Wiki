import type { Character } from '../types';

export const characters: Character[] = [
    {
        id: 'aya',
        name: '射命丸 文',
        nameEn: 'AYA SHAMEIMARU',
        role: '战地记者 // 机动型',
        desc: '曾经的一线天狗记者，在鬼犄异变爆发时因为失去了飞行能力坠落昏迷。时隔半年时间再次苏醒，却发现曾经的幻想乡和其中的同伴们已经变了一番模样。但她从未放弃寻找异变背后的真相。',
        weapon: '冲锋枪 - SUBMRCHINE GUN',
        stats: [0, 0, 0, 0],
        img: '/src/assets/images/game/文文_人物剪影.png'
    },
    {
        id: 'momiji',
        name: '犬走 椛',
        nameEn: 'MOMIJI INUBASHIRI',
        role: '巡逻哨戒 // 防御型',
        desc: '曾经的白狼天狗护卫，一直跟随在射命丸文身后的可靠后辈。在异变发生的半年间逐渐适应了作为139避难所的特勤部队成员的使命，总是会挺身而出为队友抵挡威胁。',
        weapon: '霰弹枪 - SHOTGUN',
        stats: [0, 0, 0, 0],
        img: '/src/assets/images/game/椛椛_人物剪影.png'
    },
    {
        id: 'nue',
        name: '封兽 鵺',
        nameEn: 'HOUJUU NUE',
        role: '赌场老千 // 潜行型',
        desc: '正体不明的妖怪，也许正因为其原本的能力所积累的经验，在如今怪异横行的幻想乡中依旧能够来去自如。鬼犄异变影响的许多人与妖怪，但像封兽鵺这样依旧能够享受当下的存在可不多见。',
        weapon: '狙击枪 - SNIPER RIFLE',
        stats: [0, 0, 0, 0],
        img: '/src/assets/images/game/鵺鵺_人物剪影.png'
    },
    {
        id: 'reisen',
        name: '铃仙·U·因幡',
        nameEn: 'REISEN U. INABA',
        role: '月战老兵 // 专业型',
        desc: '经历过月面战争的老兵，精通各种来自月人技术的战术装备。其独一无二的战斗经验能适应各种复杂的战场环境，在139号避难所中可是难得一见。',
        weapon: '突击步枪 - ASSAULT RIFLE',
        stats: [0, 0, 0, 0],
        img: '/src/assets/images/game/铃仙_人物剪影.png'
    }
];