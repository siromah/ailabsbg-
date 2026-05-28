import Link from 'next/link'
import { ArrowRight, Wrench, FileText, CheckSquare, Package } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import { RESOURCES } from '@/lib/data'

export default function ResourcesPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent" />
        <div className="section-shell relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-4">
              Ресурси
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Всичко, от което имаш{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                нужда, за да започнеш.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Безплатни гайдове, шаблони, чеклисти и tool директория. Спести
              време и започни с правилните инструменти.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-[#05050a]">
        <div className="section-shell">
          <SectionHeading
            title="Библиотека от ресурси"
            subtitle="Изтегли и използвай веднага. Обновяваме редовно."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESOURCES.map((r, i) => {
              const icons = [Wrench, FileText, CheckSquare, FileText, Package, FileText]
              const Icon = icons[i] || FileText
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-violet-500/30 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                      {r.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-300 transition">
                    {r.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{r.desc}</p>
                  <button className="text-sm font-medium text-violet-400 hover:text-violet-300 transition flex items-center gap-1">
                    Изтегли <ArrowRight size={14} />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                AI Tools Directory
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Куриран списък с инструменти, които действително използваме.
                Без спонсорирани препоръки. Без hype. Само това, което работи.
              </p>
              <div className="space-y-3">
                {[
                  { name: 'ChatGPT', use: 'General purpose AI, writing, analysis' },
                  { name: 'Claude', use: 'Long-form content, business writing, nuance' },
                  { name: 'Make.com', use: 'Visual automation without code' },
                  { name: 'Perplexity', use: 'AI-powered research' },
                  { name: 'Midjourney', use: 'Image generation for marketing' },
                  { name: 'ElevenLabs', use: 'Voice cloning and audio' },
                ].map((tool, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="font-medium text-sm">{tool.name}</span>
                    <span className="text-xs text-zinc-500">{tool.use}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4">Искаш достъп до всички ресурси?</h3>
              <p className="text-zinc-400 mb-6">
                Pro и Premium членовете получават пълен достъп до templates,
                workflows, source files и advanced guides.
              </p>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Включи се <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
