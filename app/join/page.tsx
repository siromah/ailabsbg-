import { CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import WaitlistForm from '@/components/WaitlistForm'

export default function JoinPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/15 via-transparent to-transparent" />
        <div className="section-shell relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-violet-400 mb-4">
              Включи се
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Запази мястото си.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Първата партида стартира скоро. Бъди сред първите, които получават
              достъп до академията, общността и ресурсите.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4">
        <div className="section-shell">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold">Какво получаваш?</h2>
              <div className="space-y-4">
                {[
                  'Достъп до безплатните уроци и ресурси',
                  'Седмичен newsletter с нови prompts и техники',
                  'Приоритетен достъп до live workshops',
                  'Възможност за надграждане до Pro и Premium',
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300">{b}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-[#0f0f14] border border-white/[0.08]">
                <p className="text-xs text-zinc-500">
                  Не спамим. Не продаваме данни. Можеш да се отпишеш по всяко
                  време.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="p-8 rounded-3xl bg-[#0f0f14] border border-white/[0.08]">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
