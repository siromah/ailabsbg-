'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface PromptCardProps {
  title: string
  category: string
  text: string
}

export default function PromptCard({ title, category, text }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const categoryColors: Record<string, string> = {
    productivity: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    marketing: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    sales: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    content: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    business: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    automation: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  }

  const catLabel: Record<string, string> = {
    productivity: 'Продуктивност',
    marketing: 'Маркетинг',
    sales: 'Продажби',
    content: 'Съдържание',
    business: 'Бизнес',
    automation: 'Автоматизация',
  }

  return (
    <div className="group p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-violet-500/30 transition flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
            categoryColors[category] || 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
          }`}
        >
          {catLabel[category] || category}
        </span>
        <button
          onClick={copy}
          className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition text-zinc-400 hover:text-white"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-violet-300 transition">
        {title}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed line-clamp-4 flex-1">{text}</p>
    </div>
  )
}
