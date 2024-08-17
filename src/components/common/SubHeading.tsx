import clsx from 'clsx'
import { ReactNode } from 'react'

interface SubHeadingProps {
  children?: ReactNode
  className?: string
}

const SubHeading = ({
  children = 'Heading goes here',
  className,
}: SubHeadingProps) => {
  return (
    <h3
      className={clsx('uppercase tracking-widest text-sm font-bold', className)}
    >
      {children}
    </h3>
  )
}

export default SubHeading
