import clsx from 'clsx'
import { type ReactNode } from 'react'

interface HeadingProps {
  children?: ReactNode
  capitalized?: boolean
  className?: string
}

const Heading = ({ children, capitalized = true, className }: HeadingProps) => {
  return (
    <h3
      className={clsx(
        'text-2xl font-sedan',
        { capitalize: capitalized },
        className
      )}
    >
      {children}
    </h3>
  )
}

export default Heading
