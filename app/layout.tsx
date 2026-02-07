import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdikarim Singir – Senior Graphic Designer',
  description: 'Senior graphic designer specializing in brand identity, digital design, and marketing materials. Creating meaningful visual experiences for global brands.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
