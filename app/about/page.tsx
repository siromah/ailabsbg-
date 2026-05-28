import Link from 'next/link'
import { ArrowRight, Target, Users, Zap, Heart } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/15 via-transparent to-transparent" />
        <div className="section-shell relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-fuchsia-400 mb-4">
              За нас
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Практичен AI за{' '}
              <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                реални хора.
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-[#05050a]">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Мисия</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Вярваме, че AI не е само за технически екипи и големи компании.
                  Всеки професионалист може да използва AI, за да работи по-бързо,
                  по-умно и по-креативно. Мисията ни е да направим това достъпно
                  на български език и с фокус върху реалното прилагане.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Защо съществуваме?</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Пазарът е пълен с курсове, които обещават магия. Ние не
                  обещаваме магия. Обещаваме система. Практически умения, които
                  можеш да приложиш още днес, и общност, която те подкрепя, когато
                  заседнеш.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">За кого е това?</h2>
                <p className="text-zinc-400 leading-relaxed">
                  За маркетолози, предприемачи, фрийлансъри, програмисти,
                  дизайнери и всеки, който иска да използва AI в ежедневната си
                  работа. Не е нужно да си tech експерт. Нужно е само желание за
                  растеж.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Target, title: 'Фокус върху резултати', desc: 'Всеки урок, prompt и workshop има конкретна цел — да ти спести време или да увеличи приходите.' },
                { icon: Users, title: 'Български контекст', desc: 'Не превеждаме западни курсове. Създаваме съдържание за българския пазар, език и култура.' },
                { icon: Zap, title: 'Бързо прилагане', desc: 'Няма 10-часови курсове. Къси, конкретни уроци, които прилагаш веднага.' },
                { icon: Heart, title: 'Честност пред hype', desc: 'Казваме ти кога AI работи и кога — не. Без празни обещания.' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-white/[0.14] transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-fuchsia-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="section-shell text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Започни днес
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Не чакай перфектния момент. Започни с безплатните ресурси и се
            присъедини към общността, когато си готов.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-xl shadow-violet-600/20"
          >
            Включи се безплатно <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
