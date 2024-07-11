import Image from 'next/image'
import { FaPhoneAlt } from 'react-icons/fa'
import LinkButton from '../shared/LinkButton'
import SectionWrapper from '@/components/shared/SectionWrapper'

export default function HeroSection() {
  return (
    <SectionWrapper customClass="pb-0 md:pb-0 lg:pb-0">
      <div className="mt-8 md:mt-12 relative xl:mt-20">
        <div className="max-w-[800px] mx-auto relative z-10">
          <h1 className="text-center text-4xl font-semibold sm:text-5xl lg:text-6xl mb-6 capitalize">
            <span className="bg-gradient-to-r from-wun-primary via-wun-primary via-20% to-custom-light bg-clip-text text-transparent">
              Driving positive
            </span>{' '}
            outcomes
            <br className="hidden sm:block" /> through{' '}
            <span className="bg-gradient-to-r from-wun-primary via-wun-primary via-20% to-custom-light bg-clip-text text-transparent">
              expert advice
            </span>
            <br className="hidden sm:block" /> and{' '}
            <span className="bg-gradient-to-r from-wun-primary via-wun-primary via-20% to-custom-light bg-clip-text text-transparent">
              mentoring.
            </span>
          </h1>
          <p className=" text-center max-w-[600px] mx-auto mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            obcaecati odit. Asperiores, autem! Blanditiis cupiditate voluptates
            rerum assumenda cum dignissimos alias porro animi, esse asperiores.
            Reiciendis soluta molestiae cupiditate adipisci?
          </p>
          <div className="flex justify-center gap-6 items-center">
            <LinkButton href="/">Reach out!</LinkButton>
            <LinkButton
              type="underline-primary"
              classOverride="flex items-center gap-2 px-0 rounded-none"
              href="/"
            >
              <FaPhoneAlt /> 04010203045
            </LinkButton>
          </div>
          {/* Relative container for the butterfly assests */}
          <div className="flex space-between relative">
            <Image
              width={50}
              height={50}
              src="/assets/wundirralogobutterfly.png"
              alt=""
              className="absolute bottom-[50px] sm:left-[50px] md:bottom-[120px] rotate-12"
            />
            <Image
              width={50}
              height={50}
              src="/assets/wundirralogobutterfly.png"
              alt=""
              className="absolute right-[10px] md:right-[120px] sm:bottom-[10px] -rotate-12"
            />
          </div>
          {/* container for content below buttons (none there yet) */}
          <div className="py-10 lg:py-16 xl:py-24 relative"></div>
        </div>

        {/* Three hero images, hidden on devices < 1024px */}
        <div className="hidden lg:block max-h-[250px] w-[200px] xl:w-[250px] xl:max-h-[400px] absolute bottom-0 -left-8 rounded-r-[30px] overflow-hidden">
          <Image
            width={500}
            height={500}
            src="/assets/stock1.avif"
            alt="image text alt"
            className=""
          />
        </div>
        <div className="hidden lg:block  max-h-[200px] w-[200px] xl:w-[250px] xl:max-h-[300px] absolute top-0 -right-8 rounded-l-[30px] overflow-hidden">
          <Image
            width={300}
            height={300}
            src="/assets/stock2.avif"
            alt="image text alt"
            className="object-center"
          />
        </div>
        <div className="hidden lg:block  max-h-[300px] w-[200px] xl:w-[250px] xl:max-h-[250px] absolute bottom-0 -right-8 rounded-l-[30px] overflow-hidden">
          <Image
            width={300}
            height={300}
            src="/assets/stock3.avif"
            alt="image text alt"
            className="object-center"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
