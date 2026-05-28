import Link from 'next/link'
import { Zap } from 'lucide-react'

const footerLinks = {
  Продукт: [
    { label: 'Академия', href: '/academy' },
    { label: 'Общност', href: '/community' },
    { label: 'Prompt Library', href: '/prompts' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'Цени', href: '/pricing' },
  ],
  Ресурси: [
    { label: 'Блог', href: '#' },
    { label: 'Guides', href: '/resources' },
    { label: 'Templates', href: '/resources' },
    { label: 'Tools', href: '/resources' },
  ],
  Компания: [
    { label: 'За нас', href: '/about' },
    { label: 'Контакт', href: '/join' },
    { label: 'Включи се', href: '/join' },
  ],
  Правни: [
    { label: 'Условия', href: '#' },
    { label: 'Поверителност', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07070a]">
      <div className="section-shell py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">AILABS</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Практическа AI академия и общност за хора, които искат реални
              умения, не празна теория.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-violet-400 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © 2025 AILABS. Всички права запазени.
          </p>
          <p className="text-xs text-zinc-600">
            Практична AI общност за България.
          </p>
        </div>
      </div>
    </footer>
  )
}
