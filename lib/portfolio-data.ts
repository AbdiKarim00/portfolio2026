/**
 * Portfolio Projects Collection
 * 
 * This portfolio represents a curated selection of design collaborations
 * that showcase strategic thinking and creative excellence across various
 * industries and design challenges.
 * 
 * Each project demonstrates the power of thoughtful design in solving
 * real business problems and creating meaningful brand experiences.
 */

export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  details: string
  year?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Brand Identity – Glistenspace Cleaners',
    category: 'Brand Identity',
    description: 'Complete brand identity system for a corporate office cleaning company, including logo, business cards, vehicle branding, and marketing materials.',
    image: '/images/glistenspace/logo.jpg',
    details:
      'Developed a comprehensive brand identity for Glistenspace Cleaners, a professional corporate office cleaning service. The project included logo design, business card design, poster designs, roll-up banners, and vehicle branding. The visual identity conveys professionalism, cleanliness, and reliability—key values for their B2B clientele.',
    year: '2023',
    tags: ['Logo Design', 'Business Cards', 'Vehicle Branding', 'Print Design'],
  },
  {
    id: 2,
    title: 'Brand Identity – Mecha Travel Group',
    category: 'Brand Identity',
    description: 'Complete brand identity redesign for established travel company, including modern logo refresh, comprehensive brand guidelines, and digital marketing assets',
    image: '/images/Mecha/logo.jpg',
    details:
      'Revitalized Mecha Travel Group\'s brand identity to better position them in the competitive travel market. The project included a contemporary logo redesign that maintains brand recognition while appealing to younger demographics, comprehensive brand guidelines ensuring consistency across all platforms, and digital assets optimized for social media and web presence. The new identity resulted in improved brand recall and increased engagement across digital channels.',
    year: '2023',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
  },
  {
    id: 3,
    title: 'Brand Identity – BestBaby',
    category: 'Brand Identity',
    description: 'Complete brand identity and marketing materials for baby products brand',
    image: '/images/BestBaby/logo.png',
    details:
      'Developed comprehensive brand identity for BestBaby, a premium baby products company. The project included logo design, business card creation, and promotional poster design. The visual identity combines warmth and trustworthiness with modern aesthetics, appealing to new parents while maintaining professional credibility. The brand assets have been successfully deployed across digital platforms and print materials, resulting in consistent brand recognition and increased customer engagement.',
    year: '2023',
    tags: ['Brand Identity', 'Advertising', 'Digital Design'],
  },
  {
    id: 4,
    title: 'Publication Design – TYPNI',
    category: 'Publication Design',
    description: 'Editorial design and layout for academic publication',
    image: '/images/TYPNI/TYPNI.pdf',
    details: 'Designed and formatted comprehensive academic publication for TYPNI, focusing on readability, professional presentation, and adherence to academic publishing standards. The project included layout design, typography selection, and visual hierarchy optimization to ensure effective communication of complex academic content. The publication maintains consistency with institutional branding while enhancing reader experience through thoughtful design decisions.',
    year: '2023',
    tags: ['Editorial Design', 'Publication Design', 'Typography'],
  }
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
