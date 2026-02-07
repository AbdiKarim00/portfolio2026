'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'

export default function PortfolioHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="#" className="text-2xl font-light text-foreground tracking-tight">
          辛格
        </Link>

        <div className="hidden md:flex gap-12 items-center">
          <Link
            href="#work"
            className="text-sm font-light text-foreground hover:text-accent transition-colors tracking-wide"
          >
            {t.nav.work}
          </Link>
          <Link
            href="#about"
            className="text-sm font-light text-foreground hover:text-accent transition-colors tracking-wide"
          >
            {t.nav.about}
          </Link>
          <Link
            href="#services"
            className="text-sm font-light text-foreground hover:text-accent transition-colors tracking-wide"
          >
            {t.nav.services}
          </Link>
          <Link
            href="#contact"
            className="text-sm font-light text-foreground hover:text-accent transition-colors tracking-wide"
          >
            {t.nav.contact}
          </Link>

          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-xs font-medium border border-border/40 rounded-full text-foreground hover:border-accent hover:text-accent transition-all"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <div className="w-6 h-0.5 bg-foreground transition-all"></div>
          <div className="w-6 h-0.5 bg-foreground transition-all"></div>
          <div className="w-6 h-0.5 bg-foreground transition-all"></div>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-secondary/30">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="#work"
              className="text-sm font-light text-foreground hover:text-accent"
            >
              {t.nav.work}
            </Link>
            <Link
              href="#about"
              className="text-sm font-light text-foreground hover:text-accent"
            >
              {t.nav.about}
            </Link>
            <Link
              href="#services"
              className="text-sm font-light text-foreground hover:text-accent"
            >
              {t.nav.services}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-light text-foreground hover:text-accent"
            >
              {t.nav.contact}
            </Link>
            <button
              onClick={toggleLanguage}
              className="mt-4 px-3 py-2 text-xs font-medium border border-border/40 rounded-full text-foreground hover:border-accent hover:text-accent transition-all w-fit"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
