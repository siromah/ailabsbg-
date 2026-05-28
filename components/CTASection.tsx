import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export default function CTASection({
  title = 'Готов да започнеш?',
  subtitle = 'Запази мястото си в първата партида. Стартираме скоро.',
}: CTASectionProps) {
  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-b from-violet-600/10 to-transparent border border-violet-500/20 glow-violet">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
            {subtitle}
          </p>
          <Link
            href="/join"
            className="group inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition shadow-xl shadow-violet-600/25"
          >
            Включи се сега
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
