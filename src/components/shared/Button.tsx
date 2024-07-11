import { FC, ReactNode, MouseEventHandler } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: string
  handleClick: MouseEventHandler<HTMLButtonElement> // Ensure handleClick is a function for mouse events on button elements
  classOverride?: string
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  handleClick,
  classOverride,
}) => {
  const baseClasses =
    'p-2 px-4 rounded text-custom-light group transition-all duration-200'

  if (type === 'primary-hollow') {
    return (
      <button
        onClick={handleClick}
        className={`
            ${baseClasses}
             border-2 border-solid border-wun-primary text-wun-primary hover:bg-wun-primary hover:text-custom-light hover:border-transparent
            ${classOverride || ''}
          `}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`
            ${baseClasses}
            bg-wun-primary/80 hover:bg-wun-primary
            ${classOverride || ''}
          `}
    >
      {children}
    </button>
  )
}

export default Button
