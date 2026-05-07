import { cn } from '@/lib/utils'

const Container = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto max-w md:max-w-4xl lg:max-w-7xl px-6 md:px-12',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Container
