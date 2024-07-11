import { FC } from 'react'
import HeroSection from '@/components/hero/HeroSection'
import HeroSlider from '@/components/hero/HeroSlider'
import AboutSection from '@/components/about/AboutSection'
const Home: FC = () => {
  return (
    <div>
      <HeroSection />
      <HeroSlider />
      <AboutSection />
    </div>
  )
}

export default Home
