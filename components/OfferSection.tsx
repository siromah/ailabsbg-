import { Check } from 'lucide-react'

const items = [
  'Структурирани практически уроци за ChatGPT, Midjourney, Claude и други',
  'Библиотека от 100+ тествани prompts за маркетинг, бизнес и продуктивност',
  'Седмични live сесии с въпроси и демонстрации на реални казуси',
  'Готови templates и workflows, които можеш да ползваш веднага',
  'Затворена общност от професионалисти в България',
  'Достъп до нови инструменти и техники преди всички останали',
]

export default function OfferSection() {
  return (
    <section id="offer" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Какво получаваш като <span className="text-violet-400">член</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition"
            >
              <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={14} className="text-violet-400" />
              </div>
              <p className="text-neutral-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
