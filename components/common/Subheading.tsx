import { cn } from '@/lib/utils'

const Subheading = ({
  children,
  className,
  as = 'h5',
}: {
  children: React.ReactNode
  className?: string
  as?: 'h5' | 'p'
}) => {
  const Tag = as
  return (
    <Tag
      className={cn(
        'mt-4 text-gray-light text-base leading-normal font-medium',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export default Subheading
