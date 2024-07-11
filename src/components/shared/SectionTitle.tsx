import { FC, ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="md:text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-8 lg:mb-16">
      {children}
    </h2>
  )
}

export default SectionTitle
