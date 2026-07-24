export const Schema = z.object({
  莉莉温娜: z.object({
    当前形态: z.string().prefault('精灵圣女伪装').transform(v => ['精灵圣女伪装', '魔神显露', '巨大化魔神', '终焉母神', '宇宙级存在'].includes(v) ? v : '精灵圣女伪装'),
    魔神核心完整度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(35),
    虚无魔石融合度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    圣剑吸收度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    身体规模: z.string().prefault('少女体型').transform(v => ['少女体型', '三米巨躯', '五米魔神', '十米终焉体', '星球级', '宇宙级'].includes(v) ? v : '少女体型'),
    核心受损度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
  }).prefault({}),

  阿塞尔: z.object({
    生存状态: z.string().prefault('正常').transform(v => ['正常', '负伤', '重伤', '濒死', '被俘', '魔神宠物'].includes(v) ? v : '正常'),
    圣剑觉醒度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    圣力储备: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(20),
    被污染度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
  }).prefault({}),

  王国军: z.object({
    主力状态: z.string().prefault('宴会警戒').transform(v => ['宴会警戒', '局部混乱', '后花园交战', '主力驰援', '阵线崩溃', '残部抵抗', '全面覆灭'].includes(v) ? v : '宴会警戒'),
  }).prefault({}),

  战场: z.object({
    场景阶段: z.string().prefault('和平仪式').transform(v => ['和平仪式', '宴会试探', '索恩被诱导', '魔神显露', '阿塞尔追击', '骑士团崩溃', '王国军驰援', '水晶茧恢复', '圣剑突入', '魔神完整化', '世界吞噬', '宇宙吞噬'].includes(v) ? v : '和平仪式'),
    世界毁灭度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
  }).prefault({}),

  体内空间: z.object({
    阿塞尔所在位置: z.string().prefault('外部战场').transform(v => ['外部战场', '莉莉温娜掌中', '乳房表面', '阴道入口', '阴道深处', '子宫口前', '子宫核心附近', '被排出体外'].includes(v) ? v : '外部战场'),
    子宫核心状态: z.string().prefault('未显现').transform(v => ['未显现', '虚无魔石融合中', '圣剑融合中', '完整化', '创世核心'].includes(v) ? v : '未显现'),
  }).prefault({}),

  互动进程: z.object({
    分支路线: z.string().prefault('原作毁灭线').transform(v => ['原作毁灭线', '阿塞尔逆转线', '王国残存线', '莉莉温娜支配线', '共生契约线', '宇宙吞噬线'].includes(v) ? v : '原作毁灭线'),
    危机等级: z.string().prefault('宫廷阴谋').transform(v => ['宫廷阴谋', '魔神袭击', '王城灾厄', '国家灭亡', '星球危机', '宇宙终焉'].includes(v) ? v : '宫廷阴谋'),
    下一事件触发: z.string().prefault('莉莉温娜接近索恩').transform(v => ['莉莉温娜接近索恩', '阿塞尔追入花园', '粉雾扩散', '王国军驰援', '水晶茧生成', '圣剑觉醒', '子嗣诞生', '乳茧展开', '圣剑被吸收', '黑洞开启'].includes(v) ? v : '莉莉温娜接近索恩'),
  }).prefault({}),

  能力: z.object({
    粉雾转化: z.object({ 已解锁: z.boolean().prefault(false), 覆盖范围: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0), 转化人数: z.coerce.number().prefault(0) }).prefault({}),
    魔力护膜: z.object({ 已激活: z.boolean().prefault(false), 强度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0), 裂纹程度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0) }).prefault({}),
    高压乳炮: z.object({ 已解锁: z.boolean().prefault(false), 威力: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0), 冷却: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0) }).prefault({}),
    吞噬吸引: z.object({ 已解锁: z.boolean().prefault(false), 吸力强度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0), 已吞噬数量: z.coerce.number().prefault(0) }).prefault({}),
    脐核光束: z.object({ 已解锁: z.boolean().prefault(false), 精准度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0), 威力: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0) }).prefault({}),
    子嗣孕育: z.object({ 已解锁: z.boolean().prefault(false), 当前孕育数: z.coerce.number().prefault(0), 已诞生子嗣: z.record(z.string(), z.string()).prefault({}) }).prefault({}),
    乳汁分身: z.object({ 已解锁: z.boolean().prefault(false), 当前分身数: z.coerce.number().prefault(0), 稳定度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0) }).prefault({}),
    宇宙级吞噬: z.object({ 已解锁: z.boolean().prefault(false) }).prefault({}),
  }).prefault({}),

  翅膀: z.object({
    翅膀状态: z.string().prefault('未显现').transform(v => ['未显现', '腰背异动', '黑翼萌生', '双翼展开', '遮天翼形态', '宇宙级翼形态'].includes(v) ? v : '未显现'),
    翅膀类型: z.string().prefault('无').transform(v => ['无', '漆黑恶魔翼', '巨型魔神翼', '遮天双翼', '星界母神翼'].includes(v) ? v : '无'),
    翅膀展开度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    翅膀规模: z.string().prefault('无').transform(v => ['无', '身高等长', '身高三倍', '覆盖战场', '遮蔽天空', '星界尺度'].includes(v) ? v : '无'),
    翅膀根部位置: z.string().prefault('无').transform(v => ['无', '肩胛', '背脊', '腰间', '腰背连接处'].includes(v) ? v : '无'),
    翅膀颜色: z.string().prefault('无').transform(v => ['无', '漆黑', '黑紫', '霓虹暗影', '星尘黑'].includes(v) ? v : '无'),
    翅膀魔力活性: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    翅膀飞行能力: z.string().prefault('无').transform(v => ['无', '悬浮辅助', '低空滞空', '高空飞行', '穿越云层', '星界移动'].includes(v) ? v : '无'),
    翅膀压迫感: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    翅膀遮蔽范围: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    翅膀拍动风压: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    翅膀完整度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    翅膀与核心同步率: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    翅膀触发来源: z.string().prefault('未触发').transform(v => ['未触发', '虚无魔石融合', '核心突破', '圣剑刺激', '魔神完整化', '宇宙级进化'].includes(v) ? v : '未触发'),
    翅膀当前动作: z.string().prefault('无').transform(v => ['无', '收拢', '半展开', '完全展开', '拍动', '包裹身体', '穿云飞行', '遮蔽天空'].includes(v) ? v : '无'),
    翅膀叙事标记: z.record(z.string(), z.string()).prefault({}),
  }).prefault({}),
}).prefault({
  莉莉温娜: {},
  阿塞尔: {},
  王国军: {},
  战场: {},
  体内空间: {},
  互动进程: {},
  能力: {},
  翅膀: {},
});

export type Schema = z.output<typeof Schema>;
