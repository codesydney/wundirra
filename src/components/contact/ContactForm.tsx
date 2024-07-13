'use client'

import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { BsSend } from 'react-icons/bs'
import Button from '@/components/shared/Button'
import { contactSchema } from '@/schema'

interface ContactFormProps {
  onSubmit: (formData: any) => Promise<void>
  isLoading: boolean
  resetForm: boolean
}

const ContactForm: FC<ContactFormProps> = ({
  onSubmit,
  isLoading,
  resetForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  })

  useEffect(() => {
    reset()
  }, [resetForm, reset])

  return (
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
          <span className="label-text text-[16px] text-white">
            Phone number
          </span>
        </div>
        <input
          type="tel"
          {...register('phone')}
          placeholder="+61 4444 333 222"
          className="input input-bordered w-full border-2 border-gray-300 focus:border-transparent focus:ring-2 focus:ring-gray-300 text-white"
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
          'Send Message'
        )}
        {!isLoading && <BsSend className="ml-2" />}
      </Button>
    </form>
  )
}

export default ContactForm
