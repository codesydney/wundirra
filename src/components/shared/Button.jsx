export default function Button({ children, type, handleClick, classOveride }) {
  const baseClasses =
    'p-2 px-4 rounded text-custom-light group transition-all duration-200'

  if (type === 'primary-hollow') {
    return (
      <button
        onClick={handleClick}
        className={`
            ${baseClasses}
             border-2 border-solid border-wun-primary text-wun-primary hover:bg-wun-primary hover:text-custom-light hover:border-transparent
            ${classOveride || ''}
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
            ${classOveride || ''}
          `}
    >
      {children}
    </button>
  )
}
