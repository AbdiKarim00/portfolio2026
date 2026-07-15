import React from "react"
import type { Metadata } from 'next'
import { LanguageProvider } from '@/components/language-provider'
import { siteConfig } from '@/lib/site-config'

import './globals.css'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: Object.values(siteConfig.social).filter(Boolean),
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Abdikarim Singir – Senior Graphic Designer',
  description: 'Senior graphic designer specializing in brand identity, digital design, and marketing materials. Creating meaningful visual experiences for global brands.',
  keywords: ['graphic designer', 'brand identity', 'logo design', 'visual design', 'Nairobi', 'Kenya', 'portfolio'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Abdikarim Singir – Senior Graphic Designer',
    description: 'Senior graphic designer specializing in brand identity, digital design, and marketing materials. Creating meaningful visual experiences for global brands.',
    url: siteConfig.url,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdikarim Singir – Senior Graphic Designer',
    description: 'Senior graphic designer specializing in brand identity, digital design, and marketing materials. Creating meaningful visual experiences for global brands.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
