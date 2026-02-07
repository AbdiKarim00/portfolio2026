'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'

export default function PortfolioAbout() {
  const { language } = useLanguage()
  const t = translations[language]
  const experience = [
    {
      position: 'Brand Identity Designer',
      company: 'Mecha Travel Group, Kenya',
      period: 'Previous Role',
      description:
        'Developed brand guidelines, designed logos for new subsidiaries, created social media graphics and advertisements. Collaborated with marketing teams to ensure brand consistency across all platforms.',
    },
    {
      position: 'Junior Graphic Designer',
      company: 'Freelance, Kenya',
      period: 'Recent',
      description:
        'Designed visually appealing graphics for diverse clients across print and digital media. Collaborated on projects, assisted with client presentations, and ensured timely delivery of creative solutions.',
    },
    {
      position: 'Creative Designer',
      company: 'Sydney Romantics Ltd, Remote',
      period: '2020 – Present',
      description:
        'Spearheaded creation of impactful marketing materials including brochures, flyers, and product catalogs, increasing customer engagement and brand visibility by 15%.',
    },
  ]

  const skills = [
    'Brand Identity',
    'Logo Design',
    'Social Media Graphics',
    'Marketing Materials',
    'Print Design',
    'Digital Design',
    'Content Creation',
    'Design Software',
    'Creativity',
    'Attention to Detail',
  ]

  const languages = ['English', 'Swahili', 'Mandarin']

  const handleDownloadCV = () => {
    // Update the path below to match your CV location
    // Example: '/documents/Abdikarim_Singir_CV.pdf'
    // See PORTFOLIO_SETUP.md for detailed instructions
    const cvPath = '/documents/Abdikarim_Singir_CV.pdf'
    const link = document.createElement('a')
    link.href = cvPath
    link.download = 'Abdikarim_Singir_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header with minimalist aesthetic */}
        <div className="mb-24 pb-12 border-b border-border/40">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 tracking-tight">
            {t.about.title}
          </h2>
          <div className="w-12 h-px bg-accent mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
            {t.about.subtitle}
          </p>
        </div>

        {/* Main content with Chinese minimalist layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          {/* Left: Personal statement */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {/* Background section */}
              <div className="py-12 border-t border-border/40">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
                  {t.about.background}
                </h3>
                <p className="text-lg text-foreground leading-relaxed font-light mb-4">
                  {t.about.backgroundText1}
                </p>
                <p className="text-lg text-foreground leading-relaxed font-light">
                  {t.about.backgroundText2}
                </p>
              </div>

              {/* Experience section */}
              <div className="py-12 border-t border-border/40">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 font-medium">
                  {t.about.experience}
                </h3>
                <div className="space-y-10">
                  {experience.map((job, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-2 h-2 bg-accent rounded-full" />
                      <h4 className="text-foreground font-medium mb-1">
                        {job.position}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {job.company}
                      </p>
                      <p className="text-xs text-muted-foreground/70 mb-3 uppercase tracking-wide">
                        {job.period}
                      </p>
                      <p className="text-base text-foreground/80 leading-relaxed font-light">
                        {job.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: CV Download and Quick Info */}
          <div className="space-y-12">
            {/* CV Download Card */}
            <div className="bg-secondary/50 p-8 border border-border/40 sticky top-24">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-medium">
                {t.about.downloadCV}
              </h3>
              <p className="text-sm text-foreground/70 mb-6 font-light leading-relaxed">
                {t.about.cvSubtitle}
              </p>
              <Button
                onClick={handleDownloadCV}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-6 mb-4 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                {t.about.downloadCV}
              </Button>
              <p className="text-xs text-muted-foreground/60">
                {t.about.cvFormat}
              </p>
            </div>

            {/* Skills section */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
                {t.about.coreSkills}
              </h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-foreground/80 py-2 border-b border-border/40 pb-2 last:border-b-0 font-light"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages section */}
            <div className="pt-6 border-t border-border/40">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
                {t.about.languages}
              </h3>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="text-sm text-foreground/80 py-2 border-b border-border/40 pb-2 last:border-b-0 font-light"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Upload Guidance Section */}
        <div className="mt-24 pt-24 border-t border-border/40">
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight">
            {t.about.projectGuide}
          </h3>
          <div className="w-8 h-px bg-accent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                  {t.about.howToAdd}
                </h4>
                <div className="space-y-4 text-base text-foreground/80 font-light leading-relaxed">
                  <p>
                    {t.about.projectLocation} <code className="bg-secondary/50 px-2 py-1 rounded text-sm">lib/portfolio-data.ts</code> {t.about.projectFile}
                  </p>
                  <p>
                    {t.about.projectInstructions} <code className="bg-secondary/50 px-1 rounded text-xs">PORTFOLIO_SETUP.md</code>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 p-8 border border-border/40">
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-medium">
                {t.about.projectStructure}
              </h4>
              <pre className="text-xs text-foreground/70 overflow-x-auto font-mono leading-relaxed">
{`{
  id: 1,
  title: "Project Name",
  category: "Brand Identity",
  description: "Brief description",
  image: "/images/project.jpg",
  details: "Full case study"
}`}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="py-8 border-l-2 border-accent pl-6">
              <h5 className="font-medium text-foreground mb-3">{t.about.uploadImages}</h5>
              <p className="text-sm text-foreground/70 font-light leading-relaxed">
                {t.about.uploadImagesDesc} <code className="bg-secondary/50 px-1 rounded text-xs">/public/images</code> {t.about.uploadImagesDesc2}
              </p>
            </div>

            <div className="py-8 border-l-2 border-accent pl-6">
              <h5 className="font-medium text-foreground mb-3">{t.about.editProjectData}</h5>
              <p className="text-sm text-foreground/70 font-light leading-relaxed">
                {t.about.editProjectDataDesc}
              </p>
            </div>

            <div className="py-8 border-l-2 border-accent pl-6">
              <h5 className="font-medium text-foreground mb-3">{t.about.customizeDetails}</h5>
              <p className="text-sm text-foreground/70 font-light leading-relaxed">
                {t.about.customizeDetailsDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
