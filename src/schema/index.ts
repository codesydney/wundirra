import * as yup from 'yup'

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  email: yup.string().required('Email is required').email('Invalid email'),
  phone: yup.string(),
  message: yup.string().required('Message is required'),
})

export { contactSchema }
