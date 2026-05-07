import { cn } from '@/lib/utils'
import React from 'react'

const Heading = ({
  children,
  className,
  as = 'h2',
}: {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2'
}) => {
  const Tag = as
  return (
    <Tag
      className={cn(
        'text-3xl md:text-4xl font-bold text-slate leading-[1] tracking-tight',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export default Heading
