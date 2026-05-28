import { Frown, Clock, Globe, BookOpen } from 'lucide-react'

const problems = [
  {
    icon: Frown,
    text: 'Всички курсове са на английски и не се отнасят за българския пазар',
  },
  {
    icon: Clock,
    text: 'Губиш часове в експерименти, вместо да имаш готови работещи процеси',
  },
  {
    icon: Globe,
    text: 'Информацията се променя всеки ден и няма кой да те ориентира',
  },
  {
    icon: BookOpen,
    text: 'Твърде много теория, твърде малко практика',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 px-4 bg-[#08080c]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Загубен в океана от{' '}
          <span className="text-neutral-500">AI информация?</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#13131f] border border-white/5"
            >
              <item.icon
                className="text-violet-400 shrink-0 mt-1"
                size={22}
              />
              <p className="text-lg text-neutral-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
