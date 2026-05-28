import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  period: string
  desc: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export default function PricingCard({
  name,
  price,
  period,
  desc,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative p-8 rounded-3xl border transition flex flex-col h-full ${
        highlighted
          ? 'bg-[#0f0f14] border-violet-500/40 glow-violet'
          : 'bg-[#0a0a0f] border-white/[0.08] hover:border-white/[0.14]'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-xs font-semibold text-white">
          Най-популярен
        </div>
      )}

      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-zinc-500 mb-6">{desc}</p>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-sm text-zinc-500">{period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
            <Check
              size={16}
              className={`shrink-0 mt-0.5 ${
                highlighted ? 'text-violet-400' : 'text-emerald-400'
              }`}
            />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="/join"
        className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition ${
          highlighted
            ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/20'
            : 'bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.08]'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}
