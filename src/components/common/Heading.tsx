import clsx from 'clsx'
import { type ReactNode } from 'react'

interface HeadingProps {
  children?: ReactNode
  capitalized?: boolean
  size?: 'sm' | 'md' | 'xl'
  className?: string
}

const Heading = ({
  children,
  capitalized = true,
  size = 'md',
  className,
}: HeadingProps) => {
  return (
    <h3
      className={clsx(
        'font-sedan',
        { capitalize: capitalized },
        { 'text-theme-heading-md': size === 'xl' },
        { 'text-theme-heading-xs': size === 'md' },
        { 'text-theme-xl': size === 'sm' },
        className
      )}
    >
      {children}
    </h3>
  )
}

export default Heading
