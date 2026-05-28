'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'За кого е AILABS?',
    a: 'За всеки, който иска да използва AI по-ефективно в работата си — маркетинг, програмиране, дизайн, предприемачество, фрийланс.',
  },
  {
    q: 'Нужни ли са ми технически умения?',
    a: 'Не. Съдържанието е структурирано така, че да започнеш от нулата и да напредваш стъпка по стъпка.',
  },
  {
    q: 'Кога стартирате?',
    a: 'Първата версия стартира в следващите няколко седмици. Запиши се в листата, за да си сред първите.',
  },
  {
    q: 'Ще има ли записи на live сесиите?',
    a: 'Да, всички Pro членове получават достъп до записите и материалите завинаги.',
  },
  {
    q: 'Мога ли да отменя абонамента си?',
    a: 'Да, можеш да спреш абонамента по всяко време без скрити такси.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Често задавани въпроси
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#13131f] border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-lg pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-neutral-500 transition shrink-0 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-neutral-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
