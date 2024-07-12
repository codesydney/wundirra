'use client'

import { FC } from 'react'
import Image from 'next/Image'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionTitle from '@/components/shared/SectionTitle'

const WhyChooseUsSection: FC = () => {
  return (
    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <Image
            src="/assets/stock1.avif"
            alt="Some picture here"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        <div>
          <SectionTitle>Why choose us ?</SectionTitle>
          <p className="mb-6 text-gray-600">
            We are always ready to help by providing the best service for you.
            We believe a good place to live can make your life better.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WhyChooseUsSection
