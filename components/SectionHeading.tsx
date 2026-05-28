interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-violet-400 mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
