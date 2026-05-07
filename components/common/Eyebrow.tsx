import { cn } from '@/lib/utils'

const Eyebrow = ({
  children,
  className,
  as = 'p',
}: {
  children: React.ReactNode
  className?: string
  as?: 'p'
}) => {
  const Tag = as
  return (
    <Tag
      className={cn(
        'text-xs font-medium uppercase tracking-widest text-black mb-1',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export default Eyebrow
