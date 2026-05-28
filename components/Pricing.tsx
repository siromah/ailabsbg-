import { Check } from 'lucide-react'

const free = [
  'Достъп до общността',
  '3 безплатни урока',
  'Седмичен newsletter',
]

const pro = [
  'Всички уроци и курсове',
  'Пълна библиотека от prompts',
  'Записи на live сесиите',
  'Templates и workflows',
  'Приоритетна поддръжка',
  'Ранен достъп до нови инструменти',
]

export default function Pricing() {
  return (
    <section className="py-24 px-4 bg-[#08080c]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Цени
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-[#13131f] border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Стартер</h3>
            <div className="text-4xl font-bold mb-6">Безплатно</div>
            <ul className="space-y-3 mb-8">
              {free.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <Check size={16} className="text-emerald-400" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="block w-full text-center py-3 rounded-xl border border-white/10 text-neutral-300 hover:bg-white/5 transition font-medium"
            >
              Присъедини се
            </a>
          </div>

          <div className="relative p-8 rounded-3xl bg-[#13131f] border border-violet-500/50 shadow-[0_0_60px_-15px_rgba(139,92,246,0.25)]">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-violet-600 text-xs font-semibold">
              Предстои
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-2">
              29 лв
              <span className="text-lg text-neutral-500 font-normal">
                /месец
              </span>
            </div>
            <p className="text-sm text-neutral-500 mb-6">
              Ранен достъп с отстъпка за първите 100 члена.
            </p>
            <ul className="space-y-3 mb-8">
              {pro.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <Check size={16} className="text-violet-400" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="block w-full text-center py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition font-semibold"
            >
              Запази ранен достъп
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
