'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'
import { projects, getProjectContent, type Project } from '@/lib/portfolio-data'

export default function PortfolioWork() {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const categories = [
    'all',
    ...new Set(
      projects.map((p) => getProjectContent(p, language).category)
    ),
  ]

  const filtered =
    selectedCategory === 'all'
      ? projects
      : projects.filter(
          (p) => getProjectContent(p, language).category === selectedCategory
        )

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="work" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 pb-12 border-b border-border/40">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
            {t.work.title}
          </h2>
          <div className="w-12 h-px bg-accent mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
            {t.work.subtitle}
          </p>
        </div>

        <div className="flex gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === cat
                  ? 'bg-foreground text-background'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              {cat === 'all' ? t.work.all : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => {
            const c = getProjectContent(project, language)
            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelected(project)
                  }
                }}
                className="group cursor-pointer rounded-xl overflow-hidden bg-secondary border border-border hover:border-accent/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="relative h-64 md:h-80 bg-muted overflow-hidden">
                  {project.image && !project.image.endsWith('.pdf') ? (
                    <Image
                      src={project.image}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-muted flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-accent/30 mb-4">
                          {String(project.id).padStart(2, '0')}
                        </div>
                        <p className="text-muted-foreground font-medium text-sm">
                          {c.category}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>

                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full mb-4">
                    <span className="text-xs font-medium text-accent">
                      {c.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {c.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {c.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={getProjectContent(selected, language).title}
        >
          <div
            className="relative my-12 w-full max-w-4xl rounded-xl border border-border bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label={t.project.close}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-muted"
            >
              <X size={18} />
            </button>

            <div className="relative h-64 md:h-80 bg-muted overflow-hidden rounded-t-xl">
              {selected.image && !selected.image.endsWith('.pdf') ? (
                <Image
                  src={selected.image}
                  alt={getProjectContent(selected, language).title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-muted flex items-center justify-center">
                  <div className="text-6xl font-bold text-accent/30">
                    {String(selected.id).padStart(2, '0')}
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 md:p-12 space-y-10">
              {(() => {
                const c = getProjectContent(selected, language)
                return (
                  <>
                    <div>
                      <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full mb-4">
                        <span className="text-xs font-medium text-accent">
                          {c.category}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
                        {c.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-light">
                        {c.description}
                      </p>
                    </div>

                    {(c.client || c.role || c.timeline || selected.year) && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {c.client && (
                          <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-medium">
                              {t.project.client}
                            </p>
                            <p className="text-sm text-foreground/80 font-light">{c.client}</p>
                          </div>
                        )}
                        {c.role && (
                          <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-medium">
                              {t.project.role}
                            </p>
                            <p className="text-sm text-foreground/80 font-light">{c.role}</p>
                          </div>
                        )}
                        {c.timeline && (
                          <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-medium">
                              {t.project.timeline}
                            </p>
                            <p className="text-sm text-foreground/80 font-light">{c.timeline}</p>
                          </div>
                        )}
                        {selected.year && (
                          <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-medium">Year</p>
                            <p className="text-sm text-foreground/80 font-light">{selected.year}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {c.details && (
                      <p className="text-base text-foreground/80 leading-relaxed font-light">
                        {c.details}
                      </p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {c.challenge && (
                        <div className="border-t border-border/40 pt-6">
                          <h4 className="text-sm uppercase tracking-widest text-accent mb-3 font-medium">
                            {t.project.challenge}
                          </h4>
                          <p className="text-sm text-foreground/80 leading-relaxed font-light">
                            {c.challenge}
                          </p>
                        </div>
                      )}
                      {c.solution && (
                        <div className="border-t border-border/40 pt-6">
                          <h4 className="text-sm uppercase tracking-widest text-accent mb-3 font-medium">
                            {t.project.solution}
                          </h4>
                          <p className="text-sm text-foreground/80 leading-relaxed font-light">
                            {c.solution}
                          </p>
                        </div>
                      )}
                      {c.results && (
                        <div className="border-t border-border/40 pt-6">
                          <h4 className="text-sm uppercase tracking-widest text-accent mb-3 font-medium">
                            {t.project.results}
                          </h4>
                          <p className="text-sm text-foreground/80 leading-relaxed font-light">
                            {c.results}
                          </p>
                        </div>
                      )}
                    </div>

                    {c.metrics && c.metrics.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {c.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="bg-secondary/50 border border-border/40 rounded-lg p-6"
                          >
                            <p className="text-3xl font-light text-accent mb-2">{metric.value}</p>
                            <p className="text-sm font-medium text-foreground mb-1">{metric.label}</p>
                            {metric.description && (
                              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                                {metric.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {c.process && c.process.length > 0 && (
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
                          {t.project.process}
                        </h4>
                        <div className="space-y-6">
                          {c.process.map((step, index) => (
                            <div key={step.title} className="flex gap-4">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-accent/40 text-accent text-sm flex items-center justify-center">
                                {index + 1}
                              </div>
                              <div>
                                <h5 className="text-foreground font-medium mb-1">{step.title}</h5>
                                <p className="text-sm text-foreground/70 font-light leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selected.gallery && selected.gallery.length > 0 && (
                      <div>
                        <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
                          {t.project.gallery}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selected.gallery.map((src) => (
                            <div
                              key={src}
                              className="relative h-56 bg-muted rounded-lg overflow-hidden border border-border/40"
                            >
                              {src && !src.endsWith('.pdf') ? (
                                <Image
                                  src={src}
                                  alt={c.title}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 640px) 100vw, 448px"
                                />
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
