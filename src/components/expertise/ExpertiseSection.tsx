'use client'

import { FC } from 'react'
import { FaRibbon } from 'react-icons/fa'
import Image from 'next/image'
import SectionWrapper from '../shared/SectionWrapper'
import SectionTitle from '../shared/SectionTitle'
import Button from '@/components/shared/Button'
import { scrollToContact } from '@/helpers'

const expertiseData = [
  {
    text: 'Youth work',
    icon: FaRibbon,
    href: '',
  },
  {
    text: 'Domestic violence',
    icon: FaRibbon,
    href: '',
  },
  {
    text: 'Justice & Criminology',
    icon: FaRibbon,
    href: '',
  },
  {
    text: 'Cultural safety & community engagement',
    icon: FaRibbon,
    href: '',
  },
  {
    text: 'Women empowerment',
    icon: FaRibbon,
    href: '',
  },
  {
    text: 'Trauma & healing',
    icon: FaRibbon,
    href: '',
  },
  {
    text: 'Learning & development',
    icon: FaRibbon,
    href: '',
  },
  {
    text: 'Key note speaking & NFP consulting',
    icon: FaRibbon,
    href: '',
  },
]
const ExpertiseSection: FC = () => {
  return (
    <SectionWrapper>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        <SectionTitle customClass="col-span-2 text-3xl text-center mb-0 lg:mb-0 md:justify-self-start self-center md:text-6xl lg:text-7xl md:text-left">
          Our Areas Of{' '}
          <span className="bg-gradient-to-r from-wun-primary via-wun-primary via-20% to-custom-light bg-clip-text text-transparent">
            Expertise
          </span>
        </SectionTitle>
        {expertiseData &&
          expertiseData.map((expertise, index) => {
            const Icon = expertise?.icon ? expertise.icon : null
            return (
              <div
                key={index}
                className="p-4 md:py-8 lg:py-12 bg-custom-light/10 rounded-lg backdrop-blur-xl border-solid border-[1px] border-custom-light/60 flex flex-col gap-8 items-center"
              >
                {Icon ? (
                  <div className="w-fit rounded-full relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-wun-primary before:to-wun-primary/0 before:blur-[20px] before:rounded-full ">
                    <div className="p-4 w-fit rounded-full relative z-10">
                      <Icon className="text-custom-light w-10 h-10" />
                    </div>
                  </div>
                ) : (
                  <div className="w-fit rounded-full relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-wun-primary before:to-wun-primary/0 before:blur-[20px] before:rounded-full ">
                    <div className="p-4 w-fit rounded-full relative z-10">
                      <Image
                        src={expertise?.href}
                        width={50}
                        height={50}
                        alt={`${expertise.text} icon`}
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                )}
                <h3 className="text-center font-medium lg:text-xl">
                  {expertise?.text}
                </h3>
              </div>
            )
          })}
        <div className="col-span-2 bg-custom-light rounded-lg overflow-hidden border-solid border-[1px] border-wun-primary ">
          <div className="h-full p-4 py-8 md:p-8 lg:py-12 bg-gray-200  backdrop-blur-xl flex flex-col gap-8">
            <div className="">
              <h3 className="mb-2 text-2xl font-bold text-wun-primary">
                Need Our Expertise?
              </h3>
            </div>
            <div className="self-start">
              <Button handleClick={scrollToContact}>Lets Connect!</Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ExpertiseSection
