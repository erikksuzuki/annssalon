import clsx from 'clsx'
import { type ReactNode } from 'react'

interface HeadingProps {
  children?: ReactNode
  capitalized?: boolean
  size?: 'sm' | 'md'
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
        { 'text-2xl': size === 'md' },
        { 'text-xl': size === 'sm' },
        className
      )}
    >
      {children}
    </h3>
  )
}

export default Heading
