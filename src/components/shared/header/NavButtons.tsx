'use client'

import { FC } from 'react'
import Button from '@/components/shared/Button'

const NavButtons: FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="">
      <Button handleClick={scrollToContact}>Contact</Button>
    </div>
  )
}

export default NavButtons
