import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-8">
          <Zap size={14} className="text-violet-400" />
          Първата практическа AI общност в България
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
          Научи AI.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400">
            Реални умения.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Практически курсове, готови prompts и общност от професионалисти. За
          хора, които искат да работят по-бързо и по-умно с изкуствен интелект.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="group flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]"
          >
            Запази място
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </a>
          <a
            href="#offer"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg text-neutral-300 hover:text-white hover:bg-white/5 transition border border-white/10"
          >
            Виж какво включва
          </a>
        </div>
      </div>
    </section>
  )
}
