import Link from 'next/link'
import { ArrowRight, BookOpen, Check } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import LearningPathCard from '@/components/LearningPathCard'
import { LEARNING_PATHS } from '@/lib/data'

export default function AcademyPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/15 via-transparent to-transparent" />
        <div className="section-shell relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-violet-400 mb-4">
              Академия
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Практически умения,{' '}
              <span className="gradient-text">не теория.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Всяка пътека е съставена от къси, конкретни уроци, които можеш да
              прилагаш веднага. Без празни приказки. Само реални техники.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-[#05050a]">
        <div className="section-shell">
          <SectionHeading
            title="Learning Paths"
            subtitle="Избери област, която те интересува, и започни с първия урок днес."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {LEARNING_PATHS.map((path) => (
              <LearningPathCard key={path.id} {...path} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Как работи обучението?
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Къси уроци', desc: 'Всеки урок е 10–25 минути. Гледаш, прилагаш, продължаваш.' },
                  { title: 'Практически задачи', desc: 'След всеки урок има конкретна задача, която решаваш с AI.' },
                  { title: 'Обратна връзка', desc: 'Споделяш резултатите в общността и получаваш feedback.' },
                  { title: 'Сертификати', desc: 'Завършваш пътека и получаваш сертификат за LinkedIn.' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-zinc-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-[#0f0f14] border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <BookOpen size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Текущата програма</div>
                  <div className="text-sm text-zinc-500">8 пътеки · 36 урока</div>
                </div>
              </div>
              <div className="space-y-3">
                {LEARNING_PATHS.slice(0, 5).map((path, i) => (
                  <div key={path.id} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-600 font-mono">0{i + 1}</span>
                      <span className="text-sm font-medium">{path.title}</span>
                    </div>
                    <span className="text-xs text-zinc-500">{path.lessons} урока</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link
                  href="/join"
                  className="flex items-center justify-center gap-2 w-full bg-violet-600 hover:bg-violet-500 text-white py-3 rounded-xl font-semibold transition"
                >
                  Започни сега <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Готов да започнеш?"
        subtitle="Първите 3 урока са безплатни. Не е нужна кредитна карта."
      />
    </>
  )
}
