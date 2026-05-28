import Link from 'next/link'
import { ArrowRight, Trophy, Calendar, MessageCircle, Star, Users, Target } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import { COMMUNITY_RHYTHM, COMMUNITY_FEATURES } from '@/lib/data'

export default function CommunityPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent" />
        <div className="section-shell relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-emerald-400 mb-4">
              Общност
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Учим заедно,{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                растем заедно.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Практическа общност от професионалисти, които споделят ресурси,
              решават задачи и празнуват победи заедно. Не си сам в това.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-[#05050a]">
        <div className="section-shell">
          <SectionHeading
            title="Какво включва общността?"
            subtitle="Всичко, от което имаш нужда, за да прилагаш AI ежедневно."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMUNITY_FEATURES.map((f, i) => {
              const icons = [Trophy, Calendar, MessageCircle, Star, Users, Target]
              const Icon = icons[i] || Trophy
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-white/[0.14] transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="section-shell">
          <SectionHeading
            title="Седмичен ритъм"
            subtitle="Знаеш какво да очакваш всяка седмица. Никакви изненади."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMMUNITY_RHYTHM.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border bg-opacity-10 ${item.color} backdrop-blur-sm`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                  {item.day}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-[#05050a]">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Правила, които пазят качеството
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Споделяй резултати, не обещания', desc: 'Всяка публикация трябва да включва конкретен резултат, screenshot или learning.' },
                  { title: 'Помагай, не критикуй', desc: 'Constructive feedback е добре дошъл, но започваш с позитивно.' },
                  { title: 'Няма spam', desc: 'Промоции и affiliate links са забранени без одобрение.' },
                  { title: 'Бъди активен', desc: 'Ако не участваш 30 дни, мястото ти може да бъде дадено на някой от листата.' },
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-emerald-400">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{r.title}</h3>
                      <p className="text-sm text-zinc-400">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <div className="text-zinc-400">записали се досега</div>
              </div>
              <div className="space-y-3">
                {[
                  'Средно 3.5 урока седмично',
                  '85% прилагат наученото в рамките на 7 дни',
                  'Средно спестено време: 6 часа седмично',
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/join"
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-semibold transition"
                >
                  Присъедини се <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Готов да станеш част от общността?"
        subtitle="Запази мястото си днес. Пускаме първата партида скоро."
      />
    </>
  )
}
