'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const prompts = [
  {
    title: 'Маркетинг анализ',
    desc: 'Анализирай конкурентна реклама и предложи подобрения за копито.',
    text: 'Анализирай следната Facebook реклама и дай 5 конкретни предложения за подобряване на копито, CTA и аудитория: [постави реклама]',
  },
  {
    title: 'Email създаване',
    desc: 'Напиши продуктов email с правилната структура за отваряне.',
    text: 'Напиши sales email за [продукт] към [аудитория]. Структура: 1) Hook 2) Проблем 3) Решение 4) Доказателство 5) CTA. Тон: разговорен.',
  },
  {
    title: 'Автоматизация на задачи',
    desc: 'Създай план за автоматизиране на повтарящи се бизнес процеси.',
    text: 'Имам следните повтарящи се задачи: [опиши]. Създай ми поетапен план как да ги автоматизирам с Make/Zapier + AI, включително кои инструменти да ползвам.',
  },
]

export default function PromptLibraryPreview() {
  const [copied, setCopied] = useState<number | null>(null)

  const copy = (i: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(i)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="py-24 px-4 bg-[#08080c]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Библиотека от <span className="text-emerald-400">готови prompts</span>
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          Не започвай от нулата. Копирай, персонализирай и изпълнявай директно.
        </p>
        <div className="space-y-4">
          {prompts.map((p, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-3xl bg-[#13131f] border border-white/10 hover:border-violet-500/30 transition group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-neutral-400">{p.desc}</p>
                </div>
                <button
                  onClick={() => copy(i, p.text)}
                  className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition text-sm"
                >
                  {copied === i ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                  {copied === i ? 'Копирано' : 'Копирай'}
                </button>
              </div>
              <div className="p-4 rounded-xl bg-black/30 text-sm text-neutral-300 font-mono leading-relaxed border border-white/5">
                {p.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
