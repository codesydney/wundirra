'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import AccordionItem from './AccordionItem'
import { accordionData } from './accordionData'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionTitle from '@/components/shared/SectionTitle'

const WhyChooseUsSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full md:h-auto">
        <div className="relative flex flex-col h-full w-full">
          <div className="hidden lg:block lg:invisible" aria-hidden="true">
            <SectionTitle customClass="text-center lg:text-left lg:mb-8">
              Why choose{' '}
              <span
                className="bg-gradient-to-r from-wun-primary via-wun-primary via-20% to-custom-light
  bg-clip-text text-transparent"
              >
                Wundirra?
              </span>{' '}
            </SectionTitle>
            <p className="text-center lg:text-left mb-6">
              We are always ready to help by providing the best service for you.
              We believe a good place to live can make your life better.
            </p>
          </div>
          <Image
            src="/assets/wundirra.png"
            alt="Some picture here"
            width={800}
            height={800}
            className="w-[100%] h-auto max-w-[600px] mx-auto lg:max-w-unset"
          />
        </div>
        <div className="flex flex-col h-full overflow-hidden">
          <SectionTitle customClass="text-center lg:text-left lg:mb-8">
            Why choose Wundirra?
          </SectionTitle>
          <p className="text-center lg:text-left mb-6">
            We are always ready to help by providing the best service for you.
            We believe a good place to live can make your life better.
          </p>
          <div className="overflow-y-auto flex-grow">
            <div className="space-y-2">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  toggleAccordion={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WhyChooseUsSection
