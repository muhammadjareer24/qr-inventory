import { cn } from '@/lib/utils'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

const Header = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        'mb-12',
        centered && 'text-center mx-auto max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-black mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-500 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Header
