import { Calendar, Clock, Users } from 'lucide-react'

interface WorkshopCardProps {
  title: string
  date: string
  time: string
  duration: string
  level: string
  desc: string
}

export default function WorkshopCard({
  title,
  date,
  time,
  duration,
  level,
  desc,
}: WorkshopCardProps) {
  return (
    <div className="group p-6 md:p-8 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-violet-500/30 transition">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex flex-col items-center justify-center text-violet-400">
          <span className="text-[13px] font-bold leading-none">{date.split(' ')[0]}</span>
          <span className="text-[9px] font-semibold uppercase tracking-wider">{date.split(' ')[1]}</span>
        </div>
        <div>
          <div className="text-sm font-medium text-zinc-300 flex items-center gap-1.5">
            <Clock size={12} /> {time}
          </div>
          <div className="text-xs text-zinc-500">{duration}</div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-300 transition">
        {title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">{desc}</p>

      <div className="flex items-center gap-3">
        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
          {level}
        </span>
        <span className="text-xs text-zinc-500 flex items-center gap-1">
          <Users size={12} /> Zoom
        </span>
      </div>
    </div>
  )
}
