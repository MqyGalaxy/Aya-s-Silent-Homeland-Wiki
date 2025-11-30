export interface Character {
    id: string;           // 用于点击事件的唯一标识 (如 'aya')
    name: string;         // 中文名
    nameEn: string;       // 英文名
    role: string;         // 职业/定位 (如 "战地记者 // 机动型")
    desc: string;         // 详细描述
    weapon: string;       // 武器名称
    stats: [number, number, number, number]; // [火力, 机动, 防御, 战术] 数值 (0-100)
    img: string;          // 立绘图片路径
}

export interface MapLocation {
    id: string;
    name: string;
    status: string;       // 状态文本 (如 SAFE)
    threat: string;       // 威胁文本 (如 LOW)
    description: string;  // 说明文
    screenshot: string;   // 背景图
    x: string;            // 坐标 x
    y: string;            // 坐标 y
    type: 'safe' | 'caution' | 'warning' | 'danger'; // 决定颜色的字段
    code: string;
}