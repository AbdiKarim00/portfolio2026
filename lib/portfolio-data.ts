/**
 * Portfolio Projects Data
 * 
 * HOW TO ADD YOUR PROJECTS:
 * 
 * 1. PREPARE YOUR IMAGES
 *    - Save your project images to: /public/images/
 *    - Recommended size: 1200×800px (16:9 aspect ratio)
 *    - Formats: JPG, PNG (JPG recommended for faster loading)
 *    - Example: /public/images/project-branding.jpg
 * 
 * 2. ADD PROJECT TO ARRAY BELOW
 *    - Copy the structure from existing projects
 *    - Replace with your actual project details
 *    - Ensure all fields are populated
 * 
 * 3. SAVE AND PREVIEW
 *    - Changes appear automatically in the preview
 *    - No rebuild needed
 * 
 * 4. PROJECT CATEGORIES
 *    Popular categories: Brand Identity, Digital Design, Print Design, 
 *    Social Media, Packaging, Web Design, Illustration, Marketing
 *
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
    // Additional images available:
    // - /images/glistenspace/business-card.jpg
    // - /images/glistenspace/poster-1.jpg
    // - /images/glistenspace/poster-2.jpg
    // - /images/glistenspace/rollup.jpg
    // - /images/glistenspace/van.jpg
  },
  {
    id: 2,
    title: 'Brand Identity – Mecha Travel Group',
    category: 'Brand Identity',
    description: 'Comprehensive brand identity system including logo design, brand guidelines, and visual assets',
    image: '/images/project-2.jpg',
    details:
      'Developed complete brand identity system for travel company. Created logo design reflecting modern and trustworthy values, established color palette and typography guidelines for consistent brand application across all touchpoints.',
    year: '2023',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
  },
  {
    id: 3,
    title: 'Social Media Campaign – Digital Presence',
    category: 'Social Media',
    description: 'Complete social media graphics and advertisement designs for brand awareness',
    image: '/images/project-3.jpg',
    details:
      'Designed 40+ social media graphics for campaign launch. Created cohesive visual language across Instagram, Facebook, and LinkedIn, resulting in 15% increase in engagement and improved brand recognition.',
    year: '2023',
    tags: ['Social Media', 'Advertising', 'Digital Design'],
  },
]

/**
 * CV DOWNLOAD SETUP
 * 
 * HOW TO ADD YOUR CV:
 * 
 * 1. PREPARE YOUR CV FILE
 *    - Create your CV in PDF format (recommended)
 *    - Name: Your_Name_CV.pdf (or any clear name)
 *    - File size: Keep under 5MB for optimal loading
 * 
 * 2. UPLOAD CV FILE
 *    - Place CV in: /public/documents/ or /public/files/
 *    - Create the folder if it doesn't exist
 *    - Example: /public/documents/Abdikarim_Singir_CV.pdf
 * 
 * 3. UPDATE CV PATH
 *    - Go to: components/portfolio-about.tsx
 *    - Find: handleDownloadCV function
 *    - Update: link.href = 'path-to-your-cv.pdf'
 *    - Replace with: link.href = '/documents/Abdikarim_Singir_CV.pdf'
 * 
 * 4. UPDATE FILE NAME (Optional)
 *    - Change: link.download = 'Abdikarim_Singir_CV.pdf'
 *    - To match your file name
 * 
 * TROUBLESHOOTING:
 * - File not downloading? Check the file path is correct
 * - 404 error? Ensure CV file is in public folder
 * - Path example: /public/documents/your-cv.pdf → href="/documents/your-cv.pdf"
 *
 */

export const cvConfig = {
  // Update these values to match your CV setup
  cvPath: '/documents/Abdikarim_Singir_CV.pdf',
  cvFileName: 'Abdikarim_Singir_CV.pdf',
  lastUpdated: '2024',
}

/**
 * STEP-BY-STEP: UPDATING YOUR PORTFOLIO
 *
 * ── Adding a New Project ──────────────────────────────
 * 1. Add high-quality image to /public/images/
 * 2. Create new object in projects array with:
 *    - Unique id number (increment from last)
 *    - Compelling title
 *    - Category (use existing or new)
 *    - Brief description (1-2 sentences)
 *    - Image path (/images/your-image.jpg)
 *    - Detailed case study text
 *    - Year and optional tags
 * 3. Save file and preview updates automatically
 *
 * ── Reordering Projects ─────────────────────────────
 * 1. Simply reorder the objects in the projects array
 * 2. Top projects appear first in portfolio
 *
 * ── Featured vs. Hidden Projects ─────────────────────
 * 1. Currently all projects are visible
 * 2. To hide a project: Add featured: false to object
 * 3. Filter in portfolio-work.tsx if needed
 *
 * ── Updating CV ────────────────────────────────────
 * 1. Create updated CV as PDF
 * 2. Upload to /public/documents/your-cv.pdf
 * 3. Update cvPath in cvConfig above
 * 4. Update lastUpdated date
 *
 */
