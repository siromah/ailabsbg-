'use client'

import { useState, FormEvent } from 'react'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    ai_level: '',
    main_goal: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const validate = () => {
    if (!form.name.trim()) return 'Въведете име'
    if (!form.email.trim()) return 'Въведете имейл'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return 'Невалиден имейл'
    return ''
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    const err = validate()
    if (err) {
      setError(err)
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Грешка при записване')
      setSuccess(true)
      setForm({ name: '', email: '', role: '', ai_level: '', main_goal: '' })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-md mx-auto p-8 rounded-2xl bg-[#0f0f14] border border-white/[0.08] text-center">
        <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Успешно записване!</h3>
        <p className="text-zinc-400">
          Ще те уведомим, когато пуснем първата версия.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
      {error && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-xl border border-red-500/20">
          <AlertCircle size={16} /> {error}
        </div>
      )}
      <input
        type="text"
        placeholder="Име"
        className="w-full bg-[#0f0f14] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Имейл"
        className="w-full bg-[#0f0f14] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <select
        className="w-full bg-[#0f0f14] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition appearance-none"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="" className="bg-[#0f0f14]">Каква е твоята роля?</option>
        <option value="marketing" className="bg-[#0f0f14]">Маркетинг</option>
        <option value="developer" className="bg-[#0f0f14]">Програмист</option>
        <option value="designer" className="bg-[#0f0f14]">Дизайнер</option>
        <option value="founder" className="bg-[#0f0f14]">Предприемач</option>
        <option value="freelancer" className="bg-[#0f0f14]">Фрийлансър</option>
        <option value="other" className="bg-[#0f0f14]">Друго</option>
      </select>
      <select
        className="w-full bg-[#0f0f14] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition appearance-none"
        value={form.ai_level}
        onChange={(e) => setForm({ ...form, ai_level: e.target.value })}
      >
        <option value="" className="bg-[#0f0f14]">Ниво с AI</option>
        <option value="beginner" className="bg-[#0f0f14]">Начинаещ — почти не съм ползвал</option>
        <option value="some" className="bg-[#0f0f14]">Напреднал — ползвам от време на време</option>
        <option value="advanced" className="bg-[#0f0f14]">Опитен — искам да оптимизирам workflow-а си</option>
      </select>
      <select
        className="w-full bg-[#0f0f14] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition appearance-none"
        value={form.main_goal}
        onChange={(e) => setForm({ ...form, main_goal: e.target.value })}
      >
        <option value="" className="bg-[#0f0f14]">Основна цел</option>
        <option value="work" className="bg-[#0f0f14]">По-бърза работа</option>
        <option value="business" className="bg-[#0f0f14]">Стартиране/растеж на бизнес</option>
        <option value="career" className="bg-[#0f0f14]">Кариерно развитие</option>
        <option value="content" className="bg-[#0f0f14]">Създаване на съдържание</option>
        <option value="automation" className="bg-[#0f0f14]">Автоматизация на процеси</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-violet-600/20"
      >
        {loading && <Loader2 className="animate-spin" size={18} />}
        {loading ? 'Записване...' : 'Запази място'}
      </button>
    </form>
  )
}
