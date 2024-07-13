'use client'

import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { BsSend } from 'react-icons/bs'
import Button from '@/components/shared/Button'
import { contactSchema } from '@/schema'

const ContactSection: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  })

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
                <span className="text-white">
                  20 George Street, Sydney 2000
                </span>
              </div>
            </div>
          </div>

          <div className="p-12 md:pl-8">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-[16px] text-white">
                    Name <span className="text-wun-primary">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Your name"
                  className={`input input-bordered w-full ${
                    errors.name
                      ? 'border-2 border-wun-primary focus:border-transparent focus:outline-wun-primary focus:ring-2 focus:ring-wun-primary'
                      : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary text-white'
                  } focus:outline-primary`}
                />
                {errors.name && (
                  <div className="label">
                    <span className="label-text-alt text-wun-primary">
                      {errors.name.message}
                    </span>
                  </div>
                )}
              </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text text-[16px] text-white">
                    Email <span className="text-wun-primary">*</span>
                  </span>
                </div>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="example@email.com"
                  className={`input input-bordered w-full ${
                    errors.email
                      ? 'border-2 border-wun-primary focus:border-transparent focus:outline-wun-primary focus:ring-2 focus:ring-wun-primary'
                      : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary text-white'
                  } focus:outline-primary`}
                />
                {errors.email && (
                  <div className="label">
                    <span className="label-text-alt text-wun-primary">
                      {errors.email.message}
                    </span>
                  </div>
                )}
              </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text text-[16px] text-white">
                    Phone number
                  </span>
                </div>
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="02 9999 9999"
                  className="input input-bordered w-full border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary text-white"
                />
              </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text text-white text-[16px]">
                    Message <span className="text-wun-primary">*</span>
                  </span>
                </div>
                <textarea
                  {...register('message')}
                  placeholder="Type your message here..."
                  className={`textarea textarea-bordered h-24 ${
                    errors.email
                      ? 'border-2 border-wun-primary focus:border-transparent focus:outline-wun-primary focus:ring-2 focus:ring-wun-primary'
                      : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary text-white'
                  } focus:outline-primary`}
                ></textarea>
                {errors.message && (
                  <div className="label">
                    <span className="label-text-alt text-wun-primary">
                      {errors.message.message}
                    </span>
                  </div>
                )}
              </label>
              <Button
                type="primary"
                isLoading={isLoading}
                classOverride="w-full"
              >
                {isLoading ? (
                  <span className="text-white">Sending...</span>
                ) : (
                  'Send Message'
                )}
                {!isLoading && <BsSend className="ml-2" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
