import { FC } from 'react'
import HeroSection from '@/components/hero/HeroSection'
import HeroSlider from '@/components/hero/HeroSlider'
import AboutSection from '@/components/about/AboutSection'
import ExpertiseSection from '@/components/expertise/ExpertiseSection'
import WhyChooseUsSection from '@/components/why-choose-us/WhyChooseUsSection'

const Home: FC = () => {
  return (
    <div>
      <HeroSection />
      <HeroSlider />
      <AboutSection />
      <ExpertiseSection />
      <WhyChooseUsSection />
    </div>
  )
}

export default Home
