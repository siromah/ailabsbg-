'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/[0.06]">
      <div className="section-shell">
        <nav className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">AILABS</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  pathname === link.href
                    ? 'text-white bg-white/[0.06]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-lg shadow-violet-600/20"
            >
              Включи се
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/[0.06] bg-[#0a0a0f]/95 backdrop-blur-xl">
          <div className="section-shell py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition ${
                  pathname === link.href
                    ? 'text-white bg-white/[0.06]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/join"
                onClick={() => setOpen(false)}
                className="block text-center bg-violet-600 hover:bg-violet-500 text-white px-5 py-3 rounded-xl text-sm font-semibold transition"
              >
                Включи се
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
