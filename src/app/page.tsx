import { FC } from 'react'
import HeroSection from '@/components/hero/HeroSection'
import HeroSlider from '@/components/hero/HeroSlider'
import AboutSection from '@/components/about/AboutSection'
import ExpertiseSection from '@/components/expertise/ExpertiseSection'
import WhyChooseUsSection from '@/components/why-choose-us/WhyChooseUsSection'
import ContactSection from '@/components/contact/ContactSection'

const Home: FC = () => {
  return (
    <div>
      <HeroSection />
      <HeroSlider />
      <AboutSection />
      <ExpertiseSection />
      <WhyChooseUsSection />
      <ContactSection />
    </div>
  )
}

export default Home
