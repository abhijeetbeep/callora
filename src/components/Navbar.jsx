import { motion } from 'framer-motion'
import { Menu, Sparkles } from 'lucide-react'

export default function Navbar({ navLinks, scrolled }) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/75 shadow-soft backdrop-blur-2xl' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="text-lg font-semibold tracking-[0.28em] text-slate-900">CALLARO</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">AI Agency</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-indigo-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex"
          >
            Book Consultation
          </a>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/75 text-slate-700 shadow-soft backdrop-blur transition hover:-translate-y-0.5 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
