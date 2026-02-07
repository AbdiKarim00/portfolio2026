'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'
import { siteConfig } from '@/lib/site-config'

export default function PortfolioContact() {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 pb-12 border-b border-border/40">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
            {t.contact.title}
          </h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="py-8 border-t border-border/40">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                {t.contact.email}
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg text-foreground hover:text-accent transition-colors font-light"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="py-8 border-t border-border/40">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                {t.contact.phone}
              </h3>
              <a
                href={siteConfig.phoneHref}
                className="text-lg text-foreground hover:text-accent transition-colors font-light"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div className="py-8 border-t border-border/40">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-medium">
                {t.contact.followMe}
              </h3>
              <div className="flex gap-6">
                {[
                  { name: 'LinkedIn', url: siteConfig.social.linkedin },
                  { name: 'Instagram', url: siteConfig.social.instagram },
                  { name: 'WhatsApp', url: siteConfig.social.whatsapp },
                ].filter(s => s.url).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors font-light text-sm"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 border-l border-border/40 pl-16">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide"
              >
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-2 border-b border-border/40 bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors font-light"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide"
              >
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-2 border-b border-border/40 bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors font-light"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide"
              >
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-0 py-2 border-b border-border/40 bg-transparent text-foreground focus:outline-none focus:border-accent transition-colors resize-none font-light"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? t.status.sending : t.contact.send}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm mt-4">{t.status.success}</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm mt-4">{errorMessage || t.status.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
