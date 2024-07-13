'use client'

import { FC, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { BsSend } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import Button from '@/components/shared/Button'
import { contactSchema } from '@/schema'

const ContactForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef<any>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  })

  const handleFormSubmit = async () => {
    if (form.current) {
      setIsLoading(true)
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )
        toast.success('Message sent successfully')
        reset()
      } catch (error) {
        console.error('Error sending email:', error)
        toast.error('Failed to send message. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <form
      ref={form}
      className="space-y-4"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <label className="form-control">
        <div className="label">
          <span className="label-text text-[16px] text-white">
            Name <span className="text-wun-primary">*</span>
          </span>
        </div>
        <input
          type="text"
          {...register('name')}
          name="name"
          placeholder="Your name"
          className={`input input-bordered w-full ${
            errors.name
              ? 'border-2 border-wun-primary focus:border-transparent focus:outline-wun-primary focus:ring-2 focus:ring-wun-primary'
              : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-gray-300 text-white'
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
          name="email"
          placeholder="example@email.com"
          className={`input input-bordered w-full ${
            errors.email
              ? 'border-2 border-wun-primary focus:border-transparent focus:outline-wun-primary focus:ring-2 focus:ring-wun-primary'
              : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-gray-300 text-white'
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
          <span className="label-text text-white text-[16px]">
            Message <span className="text-wun-primary">*</span>
          </span>
        </div>
        <textarea
          {...register('message')}
          name="message"
          placeholder="Type your message here..."
          className={`textarea textarea-bordered h-24 ${
            errors.message
              ? 'border-2 border-wun-primary focus:border-transparent focus:outline-wun-primary focus:ring-2 focus:ring-wun-primary'
              : 'border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-gray-300 text-white'
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
      <Button type="primary" isLoading={isLoading} classOverride="w-full">
        {isLoading ? (
          <span className="text-white">Sending...</span>
        ) : (
          'Send message'
        )}
        {!isLoading && <BsSend className="ml-2" />}
      </Button>
    </form>
  )
}

export default ContactForm
