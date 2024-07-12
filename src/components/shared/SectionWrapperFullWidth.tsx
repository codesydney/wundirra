import { FC, ReactNode } from 'react'

type SectionWrapperFullWidthProps = {
  children: ReactNode
  customClass?: string
}

const SectionWrapperFullWidth: FC<SectionWrapperFullWidthProps> = ({
  children,
  customClass,
}) => {
  return <section className={`${customClass}`}>{children}</section>
}

export default SectionWrapperFullWidth
