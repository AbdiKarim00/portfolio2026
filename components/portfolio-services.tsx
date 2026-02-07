'use client'

import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'

export default function PortfolioServices() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      title: t.services.brandIdentity,
      description: t.services.brandDesc,
    },
    {
      title: t.services.socialMedia,
      description: t.services.socialDesc,
    },
    {
      title: t.services.marketingMaterials,
      description: t.services.marketingDesc,
    },
    {
      title: t.services.illustrations,
      description: t.services.illustrationsDesc,
    },
    {
      title: t.services.contentCreation,
      description: t.services.contentDesc,
    },
    {
      title: t.services.consulting,
      description: t.services.consultingDesc,
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 pb-12 border-b border-border/40">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
            {t.services.title}
          </h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border-l-2 border-accent/40 hover:border-accent transition-all duration-300 group"
            >
              <h3 className="text-lg font-medium text-foreground mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
