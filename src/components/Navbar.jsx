import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react'
import logo from '../callora.jpg'

export default function Navbar({ navLinks = [], scrolled = false, whatsappHref }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const items = navLinks.map((item) => {
    if (typeof item === 'string') {
      return { label: item, href: `#${item.toLowerCase()}` }
    }
    return item
  })

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/15 bg-[#0C1446]/90 shadow-2xl backdrop-blur-xl'
          : 'border-b border-white/10 bg-[#0C1446]/70 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2B5C92] to-[#B3CDE0] shadow-[0_4px_12px_rgba(43,92,146,0.5)]">
            <img src={logo} alt="CALLORA Logo" className="h-10 w-10 rounded-full object-cover" width="40" height="40" />
          </div>
          <div>
            <p className="text-base font-extrabold tracking-[0.28em] text-white">CALLORA</p>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#B3CDE0]/80">BPO & AI Solutions</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.18em] text-white/85 transition hover:text-[#B3CDE0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-[#B3CDE0]/30 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10 sm:inline-flex sm:items-center sm:gap-2"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          ) : null}

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-soft backdrop-blur transition hover:bg-white/20 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-[#0C1446]/95 px-6 py-6 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {items.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-[#B3CDE0] transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#B3CDE0]/40 bg-[#2B5C92]/40 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
