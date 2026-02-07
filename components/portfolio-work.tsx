'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'
import { projects } from '@/lib/portfolio-data'

export default function PortfolioWork() {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(projects.map((p) => p.category))]

  const filtered =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

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
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-xl overflow-hidden bg-secondary border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-64 md:h-80 bg-muted overflow-hidden">
                {project.image && !project.image.includes('project-') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
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
                        {project.category}
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>

              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full mb-4">
                  <span className="text-xs font-medium text-accent">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
