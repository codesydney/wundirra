import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { BsSend } from 'react-icons/bs'

const ContactSection: React.FC = () => {
  return (
    <section className="border-t border-b border-wun-primary">
      <div className="max-w-6xl mx-auto relative">
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wun-primary"
          style={{ transform: 'translateX(-50%)' }}
        ></div>

        <div className="grid md:grid-cols-2">
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
                <span className="bg-wun-primary text-white py-2 px-4 rounded">
                  example@email.com
                </span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-white mr-3" />
                <span className="text-white">
                  20 George Street, Sydney 2000
                </span>
              </div>
            </div>
          </div>

          <div className="p-12 md:pl-8">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-white">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-2 border rounded text-white border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-white">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="youremail@email.com"
                  className="w-full p-2 border rounded text-white border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 text-white">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+61 123 456 789"
                  className="w-full p-2 border rounded text-white border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-white">
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full p-2 border rounded text-white border-gray-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-wun-primary text-white py-2 px-4 rounded flex items-center justify-center hover:bg-[#2563EB] transition duration-300"
              >
                Send Message
                <BsSend className="text-white ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
