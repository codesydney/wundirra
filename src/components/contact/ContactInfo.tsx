import { FC } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ContactInfo: FC = () => {
  return (
    <div className="p-12 md:pr-8">
      <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
      <p className="text-white mb-6">
        Any question? We would be happy to help you!
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <FaPhone className="text-white mr-3" />
          <span className="text-white">02 9999 9999</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-white mr-3" />
          <a
            href="mailto:example@email.com"
            className="bg-wun-primary/80 hover:bg-wun-primary text-custom-light p-2 px-4 rounded transition-all duration-200 cursor-pointer"
          >
            example@email.com
          </a>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-white mr-3" />
          <span className="text-white">20 George Street, Sydney 2000</span>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
