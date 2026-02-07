import PortfolioHeader from '@/components/portfolio-header'
import PortfolioHero from '@/components/portfolio-hero'
import PortfolioWork from '@/components/portfolio-work'
import PortfolioAbout from '@/components/portfolio-about'
import PortfolioServices from '@/components/portfolio-services'
import PortfolioContact from '@/components/portfolio-contact'
import PortfolioFooter from '@/components/portfolio-footer'

export default function Page() {
  return (
    <main>
      <PortfolioHeader />
      <PortfolioHero />
      <PortfolioWork />
      <PortfolioAbout />
      <PortfolioServices />
      <PortfolioContact />
      <PortfolioFooter />
    </main>
  )
}
