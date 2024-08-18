import clsx from 'clsx'
import { ReactNode } from 'react'

interface SubHeadingProps {
  children?: ReactNode
  size?: 'sm' | 'md'
  className?: string
}

const SubHeading = ({
  children = 'Heading goes here',
  size = 'md',
  className,
}: SubHeadingProps) => {
  return (
    <figcaption
      className={clsx(
        'uppercase tracking-widest font-extrabold',
        { 'text-sm': size === 'md' },
        { 'text-xs': size === 'sm' },
        className
      )}
    >
      {children}
    </figcaption>
  )
}

export default SubHeading
