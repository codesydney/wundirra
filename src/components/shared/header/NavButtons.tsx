'use client'

import { FC } from 'react'
import Button from '@/components/shared/Button'
import { scrollToContact } from '@/helpers'

const NavButtons: FC = () => {
  return (
    <div className="">
      <Button handleClick={scrollToContact}>Contact</Button>
    </div>
  )
}

export default NavButtons
