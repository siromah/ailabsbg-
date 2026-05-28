import Link from 'next/link'
import { ArrowRight, Zap, Users, BookOpen, MessageSquare, Wrench, TrendingUp, Frown, Clock, Globe, AlertTriangle } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import PromptCard from '@/components/PromptCard'
import WorkshopCard from '@/components/WorkshopCard'
import LearningPathCard from '@/components/LearningPathCard'
import PricingCard from '@/components/PricingCard'
import { PROMPTS, WORKSHOPS, LEARNING_PATHS, PRICING_PLANS, FAQS, COMMUNITY_RHYTHM } from '@/lib/data'
import FAQ from '@/components/FAQ'

export default function Home() {
  const featuredPrompts = PROMPTS.slice(0, 3)
  const featuredWorkshops = WORKSHOPS.slice(0, 3)
  const featuredPaths = LEARNING_PATHS.slice(0, 4)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />

        <div className="section-shell relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-400 mb-8">
                <Zap size={12} className="text-violet-400" />
                Първата практическа AI общност в България
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
                Научи AI,{' '}
                <span className="gradient-text">като практик.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed mb-10">
                Практически уроци, готови prompts, live workshops и общност от
                професионалисти. За хора, които искат реални умения, не празна
                теория.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link
                  href="/join"
                  className="group inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-7 py-3.5 rounded-2xl font-semibold transition shadow-xl shadow-violet-600/20"
                >
                  Започни безплатно
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  href="/academy"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-zinc-300 hover:text-white border border-white/[0.1] hover:border-white/[0.18] transition bg-white/[0.02]"
                >
                  Виж програмата
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Users size={14} /> 200+ записали се
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span>Марти 2025</span>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="p-5 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-violet-500/30 transition">
                  <BookOpen size={20} className="text-violet-400 mb-3" />
                  <div className="text-sm font-semibold mb-1">Академия</div>
                  <div className="text-xs text-zinc-500">8 learning paths</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-emerald-500/30 transition">
                  <MessageSquare size={20} className="text-emerald-400 mb-3" />
                  <div className="text-sm font-semibold mb-1">Общност</div>
                  <div className="text-xs text-zinc-500">Weekly challenges</div>
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="p-5 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-orange-500/30 transition">
                  <Zap size={20} className="text-orange-400 mb-3" />
                  <div className="text-sm font-semibold mb-1">Prompts</div>
                  <div className="text-xs text-zinc-500">100+ готови</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#0f0f14] border border-white/[0.08] hover:border-cyan-500/30 transition">
                  <Wrench size={20} className="text-cyan-400 mb-3" />
                  <div className="text-sm font-semibold mb-1">Workshops</div>
                  <div className="text-xs text-zinc-500">Live сесии</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 md:py-32 px-4 bg-[#05050a]">
        <div className="section-shell">
          <SectionHeading
            label="Проблем"
            title="Защо повечето хора не напредват с AI?"
            subtitle="Всеки ден излиза нов инструмент, нов трик, нов курс... а ти оставаш със същите проблеми."
          />
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Frown, title: 'Курсове на английски', text: '90% от качественото съдържание не се отнася за българския пазар и реалност.' },
              { icon: Clock, title: 'Твърде много теория', text: 'Гледаш 10 часа видео, но не знаеш как да приложиш наученото в твоята работа.' },
              { icon: Globe, title: 'Информационен шум', text: 'Инструментите се променят всеки ден. Няма кой да те ориентира кое работи и кое — не.' },
              { icon: AlertTriangle, title: 'Липса на имплементация', text: 'Знаеш какво е ChatGPT, но нямаш система, workflow и подкрепа, за да го използваш ежедневно.' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.06] hover:border-white/[0.12] transition"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 md:py-32 px-4">
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-violet-400 mb-4">
                Решение
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Академия + общност +{' '}
                <span className="gradient-text">практика.</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                AILABS не е поредният курс. Това е екосистема, в която учиш,
                прилагаш и получаваш обратна връзка. Всяка седмица има нова
                тема, нов prompt и live сесия, където решаваме реални задачи.
              </p>
              <div className="space-y-4">
                {[
                  'Структурирани learning paths за всяка роля',
                  'Готова библиотека от тествани prompts',
                  'Live workshops с реални казуси',
                  'Общност, която държи отговорност',
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 text-zinc-300">
                    <TrendingUp size={16} className="text-emerald-400" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: '8', label: 'Learning Paths' },
                { num: '100+', label: 'Prompts' },
                { num: '12', label: 'Workshops' },
                { num: '24/7', label: 'Общност' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#0f0f14] border border-white/[0.08] text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.num}
                  </div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY PREVIEW */}
      <section className="py-24 md:py-32 px-4 bg-[#05050a]">
        <div className="section-shell">
          <SectionHeading
            label="Академия"
            title="Избери своя път"
            subtitle="От основи до автоматизация. Всяка пътека е съставена от кратки, практически уроци."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {featuredPaths.map((path) => (
              <LearningPathCard key={path.id} {...path} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition"
            >
              Виж всички пътеки <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMMUNITY PREVIEW */}
      <section className="py-24 md:py-32 px-4">
        <div className="section-shell">
          <SectionHeading
            label="Общност"
            title="Не учиш сам"
            subtitle="Практическа общност от професионалисти, които споделят ресурси, задават въпроси и празнуват победи заедно."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {COMMUNITY_RHYTHM.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border bg-opacity-10 ${item.color} backdrop-blur-sm`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
                  {item.day}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition"
            >
              Научи повече за общността <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROMPTS PREVIEW */}
      <section className="py-24 md:py-32 px-4 bg-[#05050a]">
        <div className="section-shell">
          <SectionHeading
            label="Prompt Library"
            title="Не започвай от нулата"
            subtitle="Копирай, персонализирай и изпълнявай. 100+ тествани prompts за маркетинг, продажби, бизнес и продуктивност."
          />
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {featuredPrompts.map((p) => (
              <PromptCard key={p.id} title={p.title} category={p.cat} text={p.text} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition"
            >
              Разгледай цялата библиотека <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WORKSHOPS PREVIEW */}
      <section className="py-24 md:py-32 px-4">
        <div className="section-shell">
          <SectionHeading
            label="Workshops"
            title="Учим на живо"
            subtitle="Практически сесии, където изграждаме реални проекти. Задавай въпроси и виж как експертите мислят."
          />
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {featuredWorkshops.map((w) => (
              <WorkshopCard key={w.id} {...w} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/workshops"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition"
            >
              Виж всички workshops <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24 md:py-32 px-4 bg-[#05050a]">
        <div className="section-shell">
          <SectionHeading
            label="Цени"
            title="Прозрачно и честно"
            subtitle="Започни безплатно. Надгради, когато си готов."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-4">
        <div className="section-shell max-w-3xl">
          <SectionHeading
            label="FAQ"
            title="Често задавани въпроси"
          />
          <FAQ />
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection />
    </>
  )
}
