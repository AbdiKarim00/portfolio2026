'use client'

import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'

export default function PortfolioHero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-px bg-accent mb-6" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6 leading-tight tracking-tight">
            {t.hero.title}
          </h1>

          <div className="w-1 h-12 bg-accent mx-auto" />

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <a
            href="#work"
            className="px-8 py-4 bg-accent text-accent-foreground font-medium rounded-none hover:bg-accent/90 transition-all duration-300"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-foreground text-foreground font-medium rounded-none hover:bg-foreground/5 transition-all duration-300"
          >
            {t.contact.title}
          </a>
        </div>
      </div>
    </section>
  )
}
