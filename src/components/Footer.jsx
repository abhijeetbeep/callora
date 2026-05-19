import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function Footer({ navLinks, socials }) {
  return (
    <footer className="border-t border-white/70 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-indigo-300 via-cyan-300 to-violet-300" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr,0.9fr,0.9fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-glow">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-semibold tracking-[0.28em] text-slate-900">CALLARO</p>
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">AI Agency</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Premium AI solutions, automation, development, and customer operations designed for modern growth.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {navLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="inline-flex items-center gap-1 transition hover:text-slate-900">
                    {item} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Social</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-slate-900">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/70 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CALLARO. All rights reserved.</p>
          <p>Luxury AI experiences with modern clarity.</p>
        </div>
      </div>
    </footer>
  )
}
