'use client'

import { FC, useState } from 'react'
import { toast } from 'react-hot-toast'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'

const ContactSection: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [resetForm, setResetForm] = useState(false)

  const onSubmit = async (formData: any) => {
    console.info('Form data:', formData)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast.success('Message sent successfully', {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#FFF',
          borderColor: '#FC65C4',
          color: '#FC65C4',
        },
      })
      setResetForm(!resetForm)
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
            <ContactForm
              onSubmit={onSubmit}
              isLoading={isLoading}
              resetForm={resetForm}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
