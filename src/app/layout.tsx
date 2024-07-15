import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ToasterProvider from '@/providers/ToasterProvider'
import Header from '@/components/shared/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wundirra',
  description:
    'Providing tailored consulting, training, mentoring, and cultural safety expertise to empower women, particularly First Nations women, to thrive and achieve their full potential.',
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-custom-dark`}>
        <Header />
        <main>{children}</main>
        <ToasterProvider />
      </body>
    </html>
  )
}

export default RootLayout
