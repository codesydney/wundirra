import { FC } from 'react'
import Image from 'next/image'
import SectionTitle from '../shared/SectionTitle'
import SectionWrapper from '../shared/SectionWrapper'

const AboutSection: FC = () => {
  return (
    <SectionWrapper>
      <SectionTitle>About Wundirra Consulting</SectionTitle>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="self-center">
          <p className=" md:text-left mb-4">
            We are dedicated to providing tailored consulting, training,
            mentoring, and cultural safety expertise that addresses the unique
            challenges women face in personal, professional, and organisational
            settings.
          </p>
          <h3 className="text-xl  mb-2">
            <span className="text-wun-primary font-semibold">Our Purposes</span>{' '}
            are two fold:
          </h3>
          <ul className="mb-4">
            <li className="mb-2">
              <span className="text-wun-primary font-semibold">1. </span>
              To improve outcomes, services and programs that are uniquely
              targeted towards the needs and experiences of all women,
              particularly First Nations women, families and children
            </li>
            <li className="">
              <span className="text-wun-primary font-semibold">2. </span>
              To create a world where women are empowered to heal, create
              change, achieve their full potential, access opportunities, thrive
              in inclusive environments. achieve economic independence,
              self-determination and lead with confidence.
            </li>
          </ul>
          {/* <LinkButton href="/">Join us!</LinkButton> */}
        </div>
        <div className="flex justify-center">
          <Image
            width={600}
            height={600}
            src="/assets/aboutSection.svg"
            alt="Illustration of culturally diverse women coming together"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutSection
