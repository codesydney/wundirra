import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
type SectionTitleProps = {
  children: ReactNode
  customClass?: string
}

const SectionTitle: FC<SectionTitleProps> = ({ children, customClass }) => {
  const baseClass =
    'md:text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-8 lg:mb-16'
  const mergedClass = customClass
    ? twMerge(
        'md:text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-8 lg:mb-16',
        customClass,
      )
    : baseClass

  return <h2 className={mergedClass}>{children}</h2>
}

export default SectionTitle
