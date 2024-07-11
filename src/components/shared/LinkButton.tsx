import Link from 'next/link'
import { FC, ReactNode } from 'react'

type LinkButtonProps = {
  children: ReactNode
  type?: string
  href: string
  classOverride?: string
}

const LinkButton: FC<LinkButtonProps> = ({
  children,
  type,
  href,
  classOverride,
}) => {
  const baseClasses =
    'p-2 px-4 rounded text-custom-light group transition-all duration-200'

  if (type === 'underline-primary') {
    return (
      <Link
        href={href}
        className={`
            ${baseClasses}
             border-b-2 border-solid border-wun-primary text-wun-primary  hover:text-wun-primary/80 hover:border-wun-primary/80
            ${classOverride || ''}
          `}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`
            ${baseClasses}
            bg-wun-primary/80 hover:bg-wun-primary
            ${classOverride || ''}
          `}
    >
      {children}
    </Link>
  )
}

export default LinkButton
