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

export interface ProjectMetrics {
  label: string
  value: string
  description?: string
}

export interface ProjectProcessStep {
  title: string
  description: string
  image?: string
}

export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  details: string
  year?: string
  tags?: string[]
  challenge?: string
  solution?: string
  results?: string
  client?: string
  role?: string
  timeline?: string
  metrics?: ProjectMetrics[]
  process?: ProjectProcessStep[]
  gallery?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Brand Identity – Glistenspace Cleaners',
    category: 'Brand Identity',
    description: 'Complete brand identity system for a corporate office cleaning company, including logo, business cards, vehicle branding, and marketing materials.',
    image: '/images/glistenspace/logo.jpg',
    details: 'Developed a comprehensive brand identity for Glistenspace Cleaners, a professional corporate office cleaning service. The project included logo design, business card design, poster designs, roll-up banners, and vehicle branding. The visual identity conveys professionalism, cleanliness, and reliability—key values for their B2B clientele.',
    year: '2023',
    tags: ['Logo Design', 'Business Cards', 'Vehicle Branding', 'Print Design'],
    client: 'Glistenspace Cleaners',
    role: 'Lead Brand Designer',
    timeline: '3 Months',
    challenge: 'Glistenspace needed to stand out in a crowded market of cleaning services. They required a visual identity that communicated trust, premium quality, and corporate professionalism without appearing sterile or generic. The challenge was to create a cohesive system that worked equally well on a business card as it did on a moving vehicle.',
    solution: 'We developed a clean, modern visual language using a palette of trustworthy blues and pristine whites. The logo symbol combines a sparkle motif with architectural geometry, suggesting "cleaning for built environments." The typography is strong and legible, reinforcing reliability. We extended this identity across all touchpoints, ensuring that every interaction—from a handed business card to a van passing on the street—communicated the same promise of excellence.',
    results: 'The new identity has helped Glistenspace secure contracts with three major corporate parks within six months of launch. The cohesive fleet branding has served as a powerful mobile billboard, generating 40% of their inbound inquiries.',
    metrics: [
      { label: 'Client Acquisition', value: '+40%', description: 'Increase in inbound inquiries via fleet branding' },
      { label: 'Market Reach', value: '3', description: 'Major corporate contracts secured in 6 months' },
      { label: 'Brand Consistency', value: '100%', description: 'Unified visual language across all assets' }
    ],
    process: [
      {
        title: 'Discovery & Strategy',
        description: 'Analyzed local competitors and defined the "Corporate Premium" positioning strategy.'
      },
      {
        title: 'Visual Exploration',
        description: 'Explored concepts focusing on "Sparkle," "Shield," and "Structure" motifs.'
      },
      {
        title: 'Refinement & System',
        description: 'Selected the geometric sparkle direction and built the comprehensive design system.'
      }
    ],
    gallery: [
      '/images/glistenspace/business-card.jpg',
      '/images/glistenspace/van.jpg',
      '/images/glistenspace/rollup.jpg'
    ]
  },
  {
    id: 2,
    title: 'Brand Identity – Mecha Travel Group',
    category: 'Brand Identity',
    description: 'Complete brand identity redesign for established travel company, including modern logo refresh, comprehensive brand guidelines, and digital marketing assets',
    image: '/images/Mecha/logo.jpeg',
    details: 'Revitalized Mecha Travel Group\'s brand identity to better position them in the competitive travel market. The project included a contemporary logo redesign that maintains brand recognition while appealing to younger demographics, comprehensive brand guidelines ensuring consistency across all platforms, and digital assets optimized for social media and web presence.',
    year: '2023',
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
      { label: 'Brand Equity', value: 'Retained', description: 'Maintained loyalty of existing 10+ year clients' }
    ],
    process: [
      {
        title: 'Audit',
        description: 'Audited existing brand assets and identified friction points for digital users.'
      },
      {
        title: 'Evolution',
        description: 'Redesigned logo to be mobile-first while keeping legacy recognition.'
      },
      {
        title: 'Expansion',
        description: 'Created flexible templates for social media and travel itineraries.'
      }
    ],
    gallery: [
      '/images/Mecha/mockup-1.jpeg',
      '/images/Mecha/mockup-2.jpeg',
      '/images/Mecha/mockup-3.jpeg',
      '/images/Mecha/mockup-4.jpeg',
      '/images/Mecha/mockup-5.jpeg',
      '/images/Mecha/mockup-6.jpeg'
    ]
  },
  {
    id: 3,
    title: 'Brand Identity – BestBaby',
    category: 'Brand Identity',
    description: 'Complete brand identity and marketing materials for baby products brand',
    image: '/images/BestBaby/logo.png',
    details: 'Developed comprehensive brand identity for BestBaby, a premium baby products company. The project included logo design, business card creation, and promotional poster design. The visual identity combines warmth and trustworthiness with modern aesthetics.',
    year: '2023',
    tags: ['Brand Identity', 'Advertising', 'Digital Design'],
    client: 'BestBaby',
    role: 'Creative Director',
    timeline: '2 Months',
    challenge: 'BestBaby needed to launch in a saturated market dominated by big players. The challenge was to create a brand that felt instantly established, safe, and caring, yet distinctively modern and premium compared to mass-market competitors.',
    solution: 'We chose a soft, sophisticated pastel palette that breaks away from primary colors. The logo utilizes rounded, organic shapes to evoke softness and safety. We developed a "caring companion" brand voice and a visual style that uses authentic, emotional photography of parents and children, rather than staged studio shots.',
    results: 'Successful launch in 5 local boutiques and an online store. First-quarter sales exceeded targets by 20%. The brand packaging has been cited by customers as a key differentiator on the shelf.',
    metrics: [
      { label: 'Launch Success', value: '5', description: 'Retail partnerships secured at launch' },
      { label: 'Sales Target', value: '120%', description: 'Q1 sales performance vs target' }
    ],
    process: [
      {
        title: 'Market Analysis',
        description: 'Identified the "Modern Premium" gap in the local baby product market.'
      },
      {
        title: 'Concept Development',
        description: 'Developed the "Soft Safety" visual language.'
      },
      {
        title: 'Packaging Design',
        description: 'Applied identity to product packaging for maximum shelf impact.'
      }
    ],
    gallery: []
  },
  {
    id: 4,
    title: 'Publication Design – TYPNI',
    category: 'Publication Design',
    description: 'Editorial design and layout for academic publication',
    image: '/images/TYPNI/TYPNI.pdf',
    details: 'Designed and formatted comprehensive academic publication for TYPNI, focusing on readability, professional presentation, and adherence to academic publishing standards.',
    year: '2023',
    tags: ['Editorial Design', 'Publication Design', 'Typography'],
    client: 'TYPNI Institute',
    role: 'Editorial Designer',
    timeline: '1 Month',
    challenge: 'Transforming dense, complex academic text into a readable, engaging publication without compromising its scholarly integrity.',
    solution: 'Utilized a classic grid system with ample white space to improve readability. Selected a high-legibility serif font for body text paired with a modern sans-serif for headers to create hierarchy.',
    results: 'The publication was praised for its clarity and professionalism by the review board.',
    metrics: [
      { label: 'Readability', value: 'High', description: 'Feedback from academic review board' },
      { label: 'Pages', value: '45', description: 'Typeset and formatted pages' }
    ],
    process: [
      {
        title: 'Typesetting',
        description: 'Established styles for headers, body, quotes, and footnotes.'
      },
      {
        title: 'Layout',
        description: 'Applied grid system and placed charts/figures.'
      }
    ],
    gallery: []
  },
  {
    id: 5,
    title: 'Online Platform – BiashAra',
    category: 'Product Design',
    description: 'An online platform designed to support Kenyan entrepreneurs in turning their ideas into thriving businesses.',
    image: '/images/BiashAra/cover.jpg',
    details: 'BiashAra is an online platform designed to support Kenyan entrepreneurs in turning their ideas into thriving businesses. It provides a structured path from business idea to successful launch, offering local insights and resources tailored for the Kenyan market.',
    year: '2024',
    tags: ['Product Design', 'UI/UX', 'Web Platform', 'Fintech'],
    client: 'United People Global',
    role: 'Lead Product Designer',
    timeline: '3 Months',
    challenge: 'Kenyan entrepreneurs often lack a structured, accessible roadmap to transform raw ideas into viable businesses, facing fragmented resources and lack of local market context.',
    solution: 'Designed a comprehensive ecosystem that guides users through a linear progression from ideation to launch. The platform integrates educational tools, local market data, and networking opportunities into an intuitive, mobile-first interface accessible to entrepreneurs at all stages.',
    results: 'The platform has successfully connected entrepreneurs with vital resources and mentorship, fostering a growing community of business owners.',
    metrics: [
      { label: 'User Engagement', value: 'High', description: 'Active daily users on the platform' },
      { label: 'Resource Access', value: '100+', description: 'Local business resources available' }
    ],
    process: [
      {
        title: 'Guidance',
        description: 'BiashAra offers tools and guidance to help entrepreneurs refine their business plans.'
      },
      {
        title: 'Resources',
        description: 'Users can access local insights and a variety of resources.'
      },
      {
        title: 'Ecosystem',
        description: 'The platform links entrepreneurs with potential clients, industry experts, and financial institutions to facilitate growth.'
      }
    ],
    gallery: [
      '/images/BiashAra/dashboard.jpg',
      '/images/BiashAra/mobile.jpg'
    ]
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
