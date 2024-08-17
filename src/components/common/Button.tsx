import clsx from 'clsx'

interface ButtonProps {
  size?: 'md' | 'lg'
  secondaryColor?: boolean
  shadow?: boolean
  onClick?: any
}

const Button = ({
  size = 'md',
  secondaryColor = false,
  shadow = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        transitionProperty: 'all',
        transitionDuration: '150ms',
        transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        boxShadow: shadow
          ? '0 10px 15px -3px rgb(194 12 141 / 0.5), 0 4px 6px -4px rgb(194 12 141 / 0.5)'
          : 'none',
      }}
      className={clsx(
        'mt-4 font-bold rounded-md hover:bg-[#EA0C9E] hover:text-[#fff]',
        { 'text-lg px-9 py-4': size === 'lg' },
        { 'text-base px-8 py-3': size === 'md' },
        { 'bg-[rgb(194,12,141)]': !secondaryColor },
        { 'text-[#fff]': !secondaryColor },
        { 'bg-[rgba(194,12,141,0.2)]': secondaryColor },
        { 'text-[rgb(154,18,119)]': secondaryColor }
      )}
    >
      Book Now
    </button>
  )
}

export default Button
