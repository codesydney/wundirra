'use client'

import { FC } from 'react'
import { Toaster } from 'react-hot-toast'

const ToasterProvider: FC = () => {
  return <Toaster position={'top-right'} />
}

export default ToasterProvider
