import { FC } from 'react'
import HeroSection from '@/components/hero/HeroSection'
import HeroSlider from '@/components/hero/HeroSlider'
import AboutSection from '@/components/about/AboutSection'
import ExpertiseSection from '@/components/expertise/ExpertiseSection'
import WhyChooseUsSection from '@/components/why-choose-us/WhyChooseUsSection'
import ContactSection from '@/components/contact/ContactSection'
import FooterSection from '@/components/footer/FooterSection'

const Home: FC = () => {
  return (
    <div>
      <HeroSection />
      <HeroSlider />
      <AboutSection />
      <ExpertiseSection />
      <WhyChooseUsSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default Home
