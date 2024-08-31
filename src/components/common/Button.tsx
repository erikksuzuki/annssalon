import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  size?: 'md' | 'lg'
  className?: string
  secondaryColor?: boolean
  shadow?: boolean
  children?: ReactNode
  onClick?: any
  href?: string
  newWindow?: boolean
}

const Button = ({
  size = 'md',
  className,
  secondaryColor = false,
  shadow = false,
  children = 'Click Here',
  onClick,
  href,
  newWindow = false,
}: ButtonProps) => {
  const ConditionalWrapper = ({ children }: { children: ReactNode }) => {
    if (!href) return <>{children}</>
    if (href)
      return (
        <Link className="w-full" href={href} target={newWindow ? '_blank' : ''}>
          {children}
        </Link>
      )
  }
  return (
    <ConditionalWrapper>
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
          { 'text-[rgb(154,18,119)]': secondaryColor },
          className
        )}
      >
        {children}
      </button>
    </ConditionalWrapper>
  )
}

export default Button
