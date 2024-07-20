import { FC } from 'react'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'

const ContactSection: FC = () => {
  return (
    <section
      className="border-t border-b border-wun-primary"
      id="contact-section"
    >
      <div className="max-w-6xl mx-auto relative">
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wun-primary"
          style={{ transform: 'translateX(-50%)' }}
        ></div>

        <div className="grid md:grid-cols-2">
          <ContactInfo />
          <div className="p-12 md:pl-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
