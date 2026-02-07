'use client'

import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'
import { siteConfig } from '@/lib/site-config'

export default function PortfolioFooter() {
  const { language } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: siteConfig.social.linkedin },
    { name: 'Instagram', url: siteConfig.social.instagram },
    { name: 'WhatsApp', url: siteConfig.social.whatsapp },
  ].filter(link => link.url)

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-light mb-4 tracking-tight">{siteConfig.name}</h3>
            <p className="text-sm text-background/80 leading-relaxed font-light">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-sm uppercase tracking-wide">{t.footer.navigation}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#work" className="hover:text-accent transition-colors font-light">
                  {t.nav.work}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors font-light">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors font-light">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors font-light">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-sm uppercase tracking-wide">{t.footer.social}</h4>
            <ul className="space-y-3 text-sm">
              {socialLinks.length > 0 ? (
                socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-background/50 font-light">Coming soon</li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-sm uppercase tracking-wide">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent transition-colors font-light"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-accent transition-colors font-light"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-background/70">
          <p>&copy; {currentYear} {siteConfig.name}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
