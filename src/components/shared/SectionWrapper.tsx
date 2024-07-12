import { FC, ReactNode } from 'react'

type SectionWrapperProps = {
  children: ReactNode
  customClass?: string
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, customClass }) => {
  return (
    <section
      className={`
        px-2 md:px-8 py-8 md:py-12 lg:py-16 max-w-[1440px] mx-auto 
        ${customClass || ''}
      `}
    >
      {children}
    </section>
  )
}

export default SectionWrapper
