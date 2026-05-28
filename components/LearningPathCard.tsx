import { Zap, Clock, BookOpen, TrendingUp, Briefcase, PenTool, Workflow, User, Rocket } from 'lucide-react'

interface LearningPathCardProps {
  title: string
  desc: string
  lessons: number
  duration: string
  level: string
  color: string
  icon: string
}

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Clock,
  BookOpen,
  TrendingUp,
  Briefcase,
  PenTool,
  Workflow,
  User,
  Rocket,
}

export default function LearningPathCard({
  title,
  desc,
  lessons,
  duration,
  level,
  color,
  icon,
}: LearningPathCardProps) {
  const Icon = iconMap[icon] || Zap

  return (
    <div className="group relative p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-white/[0.14] transition overflow-hidden">
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-60 group-hover:opacity-100 transition`}
      />
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 flex items-center justify-center`}
        >
          <Icon size={18} className="text-white" />
        </div>
        <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
          {level}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-300 transition">
        {title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">{desc}</p>
      <div className="flex items-center gap-4 text-xs text-zinc-500">
        <span className="flex items-center gap-1">
          <BookOpen size={12} /> {lessons} урока
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {duration}
        </span>
      </div>
    </div>
  )
}
