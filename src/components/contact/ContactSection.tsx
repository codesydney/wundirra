'use client'

import { FC, useState } from 'react'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'

const ContactSection: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (formData: any) => {
    console.info('Form data:', formData)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <section className="border-t border-b border-wun-primary">
      <div className="max-w-6xl mx-auto relative">
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wun-primary"
          style={{ transform: 'translateX(-50%)' }}
        ></div>

        <div className="grid md:grid-cols-2">
          <ContactInfo />
          <div className="p-12 md:pl-8">
            <ContactForm onSubmit={onSubmit} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
