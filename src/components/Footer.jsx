import { ArrowUpRight, Phone, Mail, MessageCircle } from 'lucide-react'
import logo from '../callora.jpg'

export default function Footer({ navLinks = [], socials = [], contact = {} }) {
  const items = navLinks.map((item) => {
    if (typeof item === 'string') {
      return { label: item, href: `#${item.toLowerCase()}` }
    }
    return item
  })

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#0C1446]/90 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C1446] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr,1fr,1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="CALLORA Logo" className="h-10 w-10 rounded-full object-cover" width="40" height="40" />
              <p className="text-2xl font-extrabold tracking-tight text-white">CALLORA</p>
            </div>
            <p className="mt-5 max-w-md text-xs leading-relaxed text-[#B3CDE0]/80 font-medium">
              Premium AI and digital solutions for modern businesses seeking operational speed, smart customer support, and scalable growth.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Quick Links</p>
            <ul className="mt-6 space-y-3 text-xs font-semibold text-white/90">
              {items.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="inline-flex items-center gap-1 transition hover:text-[#B3CDE0]">
                    {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Contact & Social</p>
            <div className="mt-6 space-y-3 text-xs font-semibold text-white/90">
              {contact?.phoneNumber && (
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#B3CDE0]" /> {contact.phoneNumber}
                </p>
              )}
              {contact?.email && (
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#B3CDE0]" /> {contact.email}
                </p>
              )}
              {socials.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href?.startsWith('http') ? '_blank' : undefined}
                      rel={social.href?.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-white/10"
                    >
                      {social.icon ? <social.icon className="h-3.5 w-3.5" /> : null}
                      {social.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-[#B3CDE0]/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CALLORA. All rights reserved.</p>
          <p>Luxury AI & BPO solutions with modern clarity.</p>
        </div>
      </div>
    </footer>
  )
}
