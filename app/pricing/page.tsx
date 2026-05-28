import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import PricingCard from '@/components/PricingCard'
import { PRICING_PLANS } from '@/lib/data'

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/15 via-transparent to-transparent" />
        <div className="section-shell relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-violet-400 mb-4">
              Цени
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Прозрачно и{' '}
              <span className="gradient-text">честно.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Започни безплатно. Надгради, когато си готов. Без скрити такси.
              Без договори.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="section-shell">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-8">Често задавани въпроси за цените</h3>
            <div className="space-y-4">
              {[
                { q: 'Мога ли да сменя план по всяко време?', a: 'Да. Можеш да надградиш или да намалиш плана си по всяко време. Промените влизат в сила следващия цикъл.' },
                { q: 'Има ли възстановяване на суми?', a: 'Да, предлагаме 14-дневна гаранция. Ако не си доволен, връщаме парите без въпроси.' },
                { q: 'Какво се случва, ако спра абонамента?', a: 'Запазваш достъп до безплатното съдържание. Записите и материалите от платените планове остават достъпни до края на платения период.' },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#0f0f14] border border-white/[0.08]">
                  <h4 className="font-semibold mb-2">{item.q}</h4>
                  <p className="text-sm text-zinc-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Още не си сигурен?"
        subtitle="Започни безплатно. Не е нужна кредитна карта."
      />
    </>
  )
}
