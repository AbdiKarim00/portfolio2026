/**
 * Site Configuration
 * 
 * Update these values with your actual information.
 * These are used across the portfolio for consistent contact info and social links.
 */

export const siteConfig = {
  name: 'Abdikarim Singir',
  title: 'Senior Graphic Designer',

  // Contact Information
  email: 'abdulkarimsingir@gmail.com',
  phone: '+254 113 334 370',
  phoneHref: 'tel:+254113334370',

  // Social Media Links
  // Set to null or empty string to hide a link
  social: {
    linkedin: 'https://linkedin.com/in/abdikarim-osman-singir-a7787a317',
    instagram: 'https://instagram.com/a_kusco',
    whatsapp: 'https://wa.me/254113334370',
  },

  // Header logo (Chinese characters)
  logo: '辛格',
}

export type SocialPlatform = keyof typeof siteConfig.social
