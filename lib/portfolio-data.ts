/**
 * Portfolio Projects Collection
 *
 * Each project carries bilingual content (English + 中文) under `en` / `zh`.
 * Use `getProjectContent(project, language)` to read the right variant.
 * Shared, language-neutral fields (id, image, year, gallery) live on Project.
 */

import type { Language } from '@/lib/translations'

export interface ProjectMetrics {
  label: string
  value: string
  description?: string
}

export interface ProjectProcessStep {
  title: string
  description: string
}

export interface ProjectContent {
  title: string
  category: string
  description: string
  details: string
  tags: string[]
  client: string
  role: string
  timeline: string
  challenge: string
  solution: string
  results: string
  metrics: ProjectMetrics[]
  process: ProjectProcessStep[]
}

export interface Project {
  id: number
  image: string
  year?: string
  gallery?: string[]
  en: ProjectContent
  zh: ProjectContent
}

export function getProjectContent(project: Project, lang: Language): ProjectContent {
  return project[lang] ?? project.en
}

export const projects: Project[] = [
  {
    id: 1,
    image: '/images/Mecha/logo.jpeg',
    year: '2023',
    gallery: [
      '/images/Mecha/mockup-1.jpeg',
      '/images/Mecha/mockup-2.jpeg',
      '/images/Mecha/mockup-3.jpeg',
      '/images/Mecha/mockup-4.jpeg',
      '/images/Mecha/mockup-5.jpeg',
      '/images/Mecha/mockup-6.jpeg',
    ],
    en: {
      title: 'Brand Identity – Mecha Travel Group',
      category: 'Brand Identity',
      description: 'Complete brand identity redesign for established travel company, including modern logo refresh, comprehensive brand guidelines, and digital marketing assets',
      details: 'Revitalized Mecha Travel Group\'s brand identity to better position them in the competitive travel market. The project included a contemporary logo redesign that maintains brand recognition while appealing to younger demographics, comprehensive brand guidelines ensuring consistency across all platforms, and digital assets optimized for social media and web presence.',
      tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
      client: 'Mecha Travel Group',
      role: 'Brand Strategist & Designer',
      timeline: '4 Months',
      challenge: 'Mecha Travel Group had a legacy brand that felt dated and disconnected from the modern "experience-first" traveler. They needed to modernize their image to appeal to millennials and Gen Z while retaining the trust of their established older clientele.',
      solution: 'We executed a careful brand evolution rather than a revolution. The new logo retains the core equity of the original mark but simplifies it for digital legibility. We introduced a vibrant, adventurous color palette inspired by global destinations. The new visual system focuses on immersive photography and clean typography, putting the travel experience front and center.',
      results: 'The rebrand contributed to a 25% increase in social media engagement and a 15% rise in bookings from the under-35 demographic. The consistent brand guidelines have streamlined their marketing operations, reducing design time for new campaigns.',
      metrics: [
        { label: 'Social Engagement', value: '+25%', description: 'Increase in engagement on Instagram and TikTok' },
        { label: 'Youth Booking', value: '+15%', description: 'Growth in under-35 customer segment' },
        { label: 'Brand Equity', value: 'Retained', description: 'Maintained loyalty of existing 10+ year clients' },
      ],
      process: [
        { title: 'Audit', description: 'Audited existing brand assets and identified friction points for digital users.' },
        { title: 'Evolution', description: 'Redesigned logo to be mobile-first while keeping legacy recognition.' },
        { title: 'Expansion', description: 'Created flexible templates for social media and travel itineraries.' },
      ],
    },
    zh: {
      title: '品牌识别 – Mecha Travel Group',
      category: '品牌识别',
      description: '为成熟旅游公司进行的完整品牌识别重塑，包含现代标识焕新、全面的品牌规范，以及数字营销素材',
      details: '为 Mecha Travel Group 重塑品牌识别，使其在竞争激烈的旅游市场中更具优势。项目包括更贴近年轻群体的现代标识焕新、确保各平台一致性的全面品牌规范，以及针对社交媒体与线上展示优化的数字素材。',
      tags: ['标志设计', '品牌规范', '视觉识别'],
      client: 'Mecha Travel Group',
      role: '品牌策略师兼设计师',
      timeline: '4 个月',
      challenge: 'Mecha Travel Group 拥有略显陈旧、与现代“体验至上”旅行者脱节的品牌形象。他们需要在吸引千禧一代与 Z 世代的同时，保留老客户群体的信任。',
      solution: '我们采取了审慎的品牌演进而非彻底革命。新标识保留了原有标志的核心资产，同时简化以提升数字可读性；并引入受全球目的地启发的鲜明冒险色调。新视觉系统以沉浸式摄影与清爽排版为核心，让旅行体验成为主角。',
      results: '此次重塑带来社交媒体互动提升 25%，35 岁以下客群预订增长 15%。一致的品牌规范也简化了他们的营销运作，缩短了新 campaign 的设计时间。',
      metrics: [
        { label: '社媒互动', value: '+25%', description: 'Instagram 与 TikTok 上的互动提升' },
        { label: '年轻客群预订', value: '+15%', description: '35 岁以下客户群体增长' },
        { label: '品牌资产', value: '保留', description: '维系了合作十年以上老客户的忠诚度' },
      ],
      process: [
        { title: '审计', description: '审计现有品牌资产，识别数字用户体验中的摩擦点。' },
        { title: '演进', description: '重新设计移动端优先的标识，同时保留原有认知度。' },
        { title: '扩展', description: '为社交媒体与旅行行程创建灵活的模板。' },
      ],
    },
  },
  {
    id: 2,
    image: '/images/BestBaby/logo.png',
    year: '2023',
    gallery: [],
    en: {
      title: 'Brand Identity – BestBaby',
      category: 'Brand Identity',
      description: 'Complete brand identity and marketing materials for baby products brand',
      details: 'Developed comprehensive brand identity for BestBaby, a premium baby products company. The project included logo design, business card creation, and promotional poster design. The visual identity combines warmth and trustworthiness with modern aesthetics.',
      tags: ['Brand Identity', 'Advertising', 'Digital Design'],
      client: 'BestBaby',
      role: 'Creative Director',
      timeline: '2 Months',
      challenge: 'BestBaby needed to launch in a saturated market dominated by big players. The challenge was to create a brand that felt instantly established, safe, and caring, yet distinctively modern and premium compared to mass-market competitors.',
      solution: 'We chose a soft, sophisticated pastel palette that breaks away from primary colors. The logo utilizes rounded, organic shapes to evoke softness and safety. We developed a "caring companion" brand voice and a visual style that uses authentic, emotional photography of parents and children, rather than staged studio shots.',
      results: 'Successful launch in 5 local boutiques and an online store. First-quarter sales exceeded targets by 20%. The brand packaging has been cited by customers as a key differentiator on the shelf.',
      metrics: [
        { label: 'Launch Success', value: '5', description: 'Retail partnerships secured at launch' },
        { label: 'Sales Target', value: '120%', description: 'Q1 sales performance vs target' },
      ],
      process: [
        { title: 'Market Analysis', description: 'Identified the "Modern Premium" gap in the local baby product market.' },
        { title: 'Concept Development', description: 'Developed the "Soft Safety" visual language.' },
        { title: 'Packaging Design', description: 'Applied identity to product packaging for maximum shelf impact.' },
      ],
    },
    zh: {
      title: '品牌识别 – BestBaby',
      category: '品牌识别',
      description: '为母婴产品品牌打造的完整品牌识别与营销物料',
      details: '为高端母婴品牌 BestBaby 打造完整的品牌识别。项目包含标志设计、名片制作与促销海报设计。视觉识别将温暖、可信赖与现代美感融为一体。',
      tags: ['品牌识别', '广告', '数字设计'],
      client: 'BestBaby',
      role: '创意总监',
      timeline: '2 个月',
      challenge: 'BestBaby 需要在一个由大品牌主导的饱和市场中推出。挑战在于打造一个既能让人立刻感到成熟、安全、贴心，又相较大众竞品独具现代与高端气质的品牌。',
      solution: '我们选用柔和而精致、跳脱原色的粉彩配色。标志采用圆润有机的形状以传递柔软与安全。我们塑造了“贴心伙伴”的品牌语调，并以父母与孩子的真实情感摄影取代摆拍棚拍。',
      results: '成功进驻 5 家本地精品店并开设线上店铺。第一季度销售额超出目标 20%。品牌包装被客户视为货架上的关键差异化因素。',
      metrics: [
        { label: '上市成果', value: '5', description: '发布时达成的零售合作' },
        { label: '销售目标', value: '120%', description: '第一季度销售额相对目标的表现' },
      ],
      process: [
        { title: '市场分析', description: '识别本地母婴市场的“现代高端”空白。' },
        { title: '概念开发', description: '打造“柔和安心”的视觉语言。' },
        { title: '包装设计', description: '将识别应用于产品包装，最大化货架冲击力。' },
      ],
    },
  },
  {
    id: 3,
    image: '/images/TYPNI/TYPNI.jpg',
    year: '2023',
    gallery: [],
    en: {
      title: 'Publication Design – TYPNI',
      category: 'Publication Design',
      description: 'Editorial design and layout for academic publication',
      details: 'Designed and formatted comprehensive academic publication for TYPNI, focusing on readability, professional presentation, and adherence to academic publishing standards.',
      tags: ['Editorial Design', 'Publication Design', 'Typography'],
      client: 'TYPNI Institute',
      role: 'Editorial Designer',
      timeline: '1 Month',
      challenge: 'Transforming dense, complex academic text into a readable, engaging publication without compromising its scholarly integrity.',
      solution: 'Utilized a classic grid system with ample white space to improve readability. Selected a high-legibility serif font for body text paired with a modern sans-serif for headers to create hierarchy.',
      results: 'The publication was praised for its clarity and professionalism by the review board.',
      metrics: [
        { label: 'Readability', value: 'High', description: 'Feedback from academic review board' },
        { label: 'Pages', value: '45', description: 'Typeset and formatted pages' },
      ],
      process: [
        { title: 'Typesetting', description: 'Established styles for headers, body, quotes, and footnotes.' },
        { title: 'Layout', description: 'Applied grid system and placed charts/figures.' },
      ],
    },
    zh: {
      title: '出版设计 – TYPNI',
      category: '出版设计',
      description: '学术出版物的编辑设计与排版',
      details: '为 TYPNI 设计并排版完整的学术出版物，聚焦于可读性、专业呈现，并遵循学术出版规范。',
      tags: ['编辑设计', '出版设计', '字体排印'],
      client: 'TYPNI Institute',
      role: '编辑设计师',
      timeline: '1 个月',
      challenge: '将密集、复杂的学术文本转化为可读且引人入胜的出版物，同时不损害其学术严谨性。',
      solution: '采用经典网格系统与充足留白来提升可读性；正文选用高易读衬线字体，标题搭配现代无衬线字体，建立清晰层级。',
      results: '该出版物因其清晰与专业获得了评审委员会的好评。',
      metrics: [
        { label: '可读性', value: 'High', description: '来自学术评审委员会的反馈' },
        { label: '页数', value: '45', description: '排版与格式化的页数' },
      ],
      process: [
        { title: '排版样式', description: '为标题、正文、引文与脚注确立样式。' },
        { title: '版式', description: '套用网格系统并放置图表与插图。' },
      ],
    },
  },
  {
    id: 4,
    image: '/images/BiashARA/landing_page.jpeg',
    year: '2024',
    gallery: [
      '/images/BiashARA/statistics.jpeg',
      '/images/BiashARA/introduction.jpeg',
    ],
    en: {
      title: 'Online Platform – BiashAra',
      category: 'Product Design',
      description: 'An online platform designed to support Kenyan entrepreneurs in turning their ideas into thriving businesses.',
      details: 'BiashAra is an online platform designed to support Kenyan entrepreneurs in turning their ideas into thriving businesses. It provides a structured path from business idea to successful launch, offering local insights and resources tailored for the Kenyan market.',
      tags: ['Product Design', 'UI/UX', 'Web Platform', 'Fintech'],
      client: 'United People Global',
      role: 'Lead Product Designer',
      timeline: '3 Months',
      challenge: 'Kenyan entrepreneurs often lack a structured, accessible roadmap to transform raw ideas into viable businesses, facing fragmented resources and lack of local market context.',
      solution: 'Designed a comprehensive ecosystem that guides users through a linear progression from ideation to launch. The platform integrates educational tools, local market data, and networking opportunities into an intuitive, mobile-first interface accessible to entrepreneurs at all stages.',
      results: 'The platform has successfully connected entrepreneurs with vital resources and mentorship, fostering a growing community of business owners.',
      metrics: [
        { label: 'User Engagement', value: 'High', description: 'Active daily users on the platform' },
        { label: 'Resource Access', value: '100+', description: 'Local business resources available' },
      ],
      process: [
        { title: 'Guidance', description: 'BiashAra offers tools and guidance to help entrepreneurs refine their business plans.' },
        { title: 'Resources', description: 'Users can access local insights and a variety of resources.' },
        { title: 'Ecosystem', description: 'The platform links entrepreneurs with potential clients, industry experts, and financial institutions to facilitate growth.' },
      ],
    },
    zh: {
      title: '线上平台 – BiashAra',
      category: '产品设计',
      description: '一个旨在支持肯尼亚创业者将想法转化为蓬勃发展企业的在线平台。',
      details: 'BiashAra 是一个旨在支持肯尼亚创业者将想法转化为成功企业的在线平台。它提供从商业构想到成功上线的结构化路径，并针对肯尼亚市场提供本地洞察与资源。',
      tags: ['产品设计', 'UI/UX', '网络平台', '金融科技'],
      client: 'United People Global',
      role: '首席产品设计师',
      timeline: '3 个月',
      challenge: '肯尼亚创业者往往缺乏结构化、可获取的路径，将原始想法转化为可行企业，并面临资源分散与缺乏本地市场语境的困境。',
      solution: '设计了一套完整的生态系统，引导用户沿从构想到上线的线性进程推进。平台将教育工具、本地市场数据与社交机会整合进直观、移动端优先的界面，服务于各阶段的创业者。',
      results: '该平台已成功将创业者与关键资源及导师连接，培育出不断壮大的企业主社群。',
      metrics: [
        { label: '用户参与度', value: 'High', description: '平台上的日活跃用户' },
        { label: '资源获取', value: '100+', description: '可获取的本地商业资源' },
      ],
      process: [
        { title: '指导', description: 'BiashAra 提供工具与指导，帮助创业者完善商业计划。' },
        { title: '资源', description: '用户可获取本地洞察与各类资源。' },
        { title: '生态', description: '平台将创业者与潜在客户、行业专家及金融机构连接，促进成长。' },
      ],
    },
  },
]

/**
 * Professional Credentials
 *
 * Comprehensive CV available for download containing detailed work history,
 * client testimonials, and complete portfolio documentation.
 */

export const cvConfig = {
  cvPath: '/documents/Abdikarim_Singir_CV.pdf',
  cvFileName: 'Abdikarim_Singir_CV.pdf',
  lastUpdated: '2024',
}

/**
 * Design Philosophy
 *
 * Every project begins with understanding of client's vision and business objectives.
 * Through collaborative discovery and strategic thinking, I transform concepts into
 * compelling visual narratives that resonate with target audiences and drive results.
 */
