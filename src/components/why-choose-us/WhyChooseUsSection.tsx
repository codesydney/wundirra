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
      <div className="grid md:grid-cols-2 gap-8 h-[800px]">
        <div className="relative flex items-center justify-center h-full">
          <Image
            src="/assets/wundirraLogo.png"
            alt="Some picture here"
            width={800}
            height={800}
            className="rounded-lg object-cover max-h-full w-auto"
          />
        </div>
        <div className="flex flex-col h-full overflow-hidden">
          <SectionTitle>Why choose us ?</SectionTitle>
          <p className="mb-6">
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
