'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import PromptCard from '@/components/PromptCard'
import { PROMPTS, CATEGORIES } from '@/lib/data'

export default function PromptsPage() {
  const [activeCat, setActiveCat] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = PROMPTS.filter((p) => {
    const matchesCat = activeCat === 'all' || p.cat === activeCat
    const matchesSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.text.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/15 via-transparent to-transparent" />
        <div className="section-shell relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-orange-400 mb-4">
              Prompt Library
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Готови prompts,{' '}
              <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                тествани в битка.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Не губи време в експерименти. Копирай, персонализирай и използвай
              директно. Всеки prompt е тестван в реални бизнес сценарии.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sticky top-16 z-40 bg-[#07070a]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="section-shell">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Търси prompt..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#0f0f14] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/30 transition"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                    activeCat === cat.id
                      ? 'bg-violet-600 text-white'
                      : 'bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08] border border-white/[0.06]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="section-shell">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <PromptCard key={p.id} title={p.title} category={p.cat} text={p.text} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-500">Няма намерени prompts.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Искаш още?"
        subtitle="Pro членовете получават достъп до 100+ prompts и седмични updates."
      />
    </>
  )
}
