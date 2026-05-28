import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import WorkshopCard from '@/components/WorkshopCard'
import { WORKSHOPS } from '@/lib/data'

export default function WorkshopsPage() {
  const upcoming = WORKSHOPS.slice(0, 4)
  const past = WORKSHOPS.slice(4)

  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/15 via-transparent to-transparent" />
        <div className="section-shell relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-4">
              Workshops
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Учим на живо,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                строим реални проекти.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Практически сесии с експерти, където изграждаме workflows,
              automation и content системи на живо. Задавай въпроси и виж
              процеса.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-[#05050a]">
        <div className="section-shell">
          <SectionHeading
            title="Предстоящи workshops"
            subtitle="Запази място. Местата са ограничени за качествена работа."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {upcoming.map((w) => (
              <WorkshopCard key={w.id} {...w} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="section-shell">
          <SectionHeading
            title="Минали сесии"
            subtitle="Записите са достъпни за Pro и Premium членове."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {past.map((w) => (
              <WorkshopCard key={w.id} {...w} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Не пропускай следващия"
        subtitle="Запиши се в листата и получавай покани първи."
      />
    </>
  )
}
