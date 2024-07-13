import { FC, ReactNode, MouseEventHandler } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  classOverride?: string
  isLoading?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  handleClick,
  classOverride,
  isLoading = false,
}) => {
  const baseClasses =
    'btn p-2 px-4 rounded text-custom-light group transition-all duration-200 flex items-center justify-center'

  const getButtonClasses = () => {
    if (type === 'primary-hollow') {
      return `
        ${baseClasses}
        border-2 border-solid border-wun-primary text-wun-primary hover:bg-wun-primary hover:text-custom-light hover:border-transparent
        ${classOverride || ''}
      `
    }
    return `
      ${baseClasses}
      bg-wun-primary/80 hover:bg-wun-primary
      ${classOverride || ''}
    `
  }

  return (
    <button
      onClick={handleClick}
      className={getButtonClasses()}
      disabled={isLoading}
    >
      {isLoading && <span className="loading loading-spinner mr-2"></span>}
      {children}
    </button>
  )
}

export default Button
