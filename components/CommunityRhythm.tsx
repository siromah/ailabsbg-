import { Calendar } from 'lucide-react'

const items = [
  {
    day: 'Понеделник',
    title: 'Нов урок',
    desc: 'Практически видео урок с конкретен инструмент или техника.',
  },
  {
    day: 'Сряда',
    title: 'Prompt Drop',
    desc: 'Нови 3–5 тествани prompts за конкретна индустрия или задача.',
  },
  {
    day: 'Петък',
    title: 'Live Q&A',
    desc: 'Задавай въпросите си на живо. Демонстрации и импровизация.',
  },
  {
    day: 'Уикенд',
    title: 'Предизвикателство',
    desc: 'Седмично challenge за упражнение. Споделяй резултатите.',
  },
]

export default function CommunityRhythm() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Седмичен <span className="text-violet-400">ритъм</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#13131f] border border-white/10 hover:border-violet-500/30 transition"
            >
              <div className="flex items-center gap-2 text-violet-400 text-sm font-semibold mb-3">
                <Calendar size={14} />
                {item.day}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
