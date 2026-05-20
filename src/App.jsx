import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Globe,
  Headphones,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Megaphone,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  MessagesSquare,
} from 'lucide-react'
import { useState, useEffect } from 'react'

const contact = {
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '918085890496',
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER || '+91 8085890496',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'callora330@gmail.com',
}

const services = [
  { title: 'LLM Training', icon: BrainCircuit, description: 'Fine-tune language models and create domain-aware AI workflows that fit the business.' },
  { title: 'AI Agent Bots', icon: Bot, description: 'Deploy smart assistants for lead qualification, customer support, and automation.' },
  { title: 'Social Media Management', icon: Megaphone, description: 'Run polished content systems that build brand presence and drive engagement.' },
  { title: 'Digital Marketing', icon: Sparkles, description: 'Turn clicks into growth with performance campaigns and conversion-focused strategy.' },
  { title: 'Web Development', icon: Code2, description: 'Launch fast, premium websites that feel modern, credible, and easy to use.' },
  { title: 'App Development', icon: Smartphone, description: 'Create mobile experiences that look refined and support real business use cases.' },
  { title: 'BPO / Call Center', icon: Headphones, description: 'Scale customer operations with trained teams, clear processes, and quality control.' },
  { title: 'Chat Support', icon: MessagesSquare, description: 'Offer instant, human-feeling support with smooth handoffs and clean response loops.' },
  { title: 'Email Support', icon: Mail, description: 'Keep inbox communication professional, timely, and easy to manage.' },
  { title: 'Data Analytics', icon: BarChart3, description: 'Surface actionable insights with dashboards, reporting, and practical measurement.' },
]

const reasons = [
  { title: 'Fast Delivery', icon: Rocket, text: 'Focused execution with quick turnaround and polished results.' },
  { title: 'Expert Team', icon: Sparkles, text: 'Experienced people who understand modern digital and AI needs.' },
  { title: 'Affordable', icon: ShieldCheck, text: 'Premium-looking work without unnecessary complexity or overhead.' },
  { title: '24/7 Support', icon: Headphones, text: 'Always easy to reach when a lead is ready or a client needs help.' },
  { title: 'Modern Technology', icon: Globe, text: 'Built with a clean stack that stays fast, responsive, and current.' },
  { title: 'Scalable Solutions', icon: Code2, text: 'Simple systems that can grow with the business instead of slowing it down.' },
]

const socials = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/${contact.whatsappNumber}` },
]

// 1. STAR PARTICLE ANIMATION - Minimal, glowing dots, twinkling
const StarParticles = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }).map(() => ({
      id: Math.random(),
      size: Math.random() * 2.5 + 1, // 1px to 3.5px
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 5 + 3, // 3s to 8s
      delay: Math.random() * 5,
      isTwinkle: Math.random() > 0.4,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{ 
            width: star.size, 
            height: star.size, 
            left: `${star.x}%`, 
            top: `${star.y}%`, 
            boxShadow: '0 0 6px rgba(255,255,255,0.8)' 
          }}
          animate={{
            y: [0, -30, 0],
            opacity: star.isTwinkle ? [0.2, 1, 0.2] : [0.5, 0.9, 0.5],
            scale: star.isTwinkle ? [0.8, 1.3, 0.8] : 1,
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}

// 4. FLOWING ABSTRACT SHAPES - Soft translucent curves using Framer Motion
const AbstractBlobs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      <motion.div
        className="absolute -top-40 -left-40 w-[45vw] h-[45vw] rounded-[40%] bg-gradient-to-br from-[#B3CDE0]/10 to-transparent blur-[100px]"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[20%] -right-40 w-[55vw] h-[55vw] rounded-[45%] bg-gradient-to-bl from-[#2B5C92]/15 to-transparent blur-[100px]"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-[35%] bg-gradient-to-t from-white/5 to-transparent blur-[120px]"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B3CDE0]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-relaxed text-[#B3CDE0]/80 max-w-2xl">{text}</p>
    </div>
  )
}

function App() {
  const [form, setForm] = useState({ name: '', email: '', service: 'AI automation', message: '' })
  const [status, setStatus] = useState('idle')
  const topNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ]

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent('Hi CALLORA, I would like to discuss a project.')}`
  const mailtoBase = `mailto:${contact.email}?subject=${encodeURIComponent('New project inquiry from CALLORA')}`
  const telHref = `tel:${contact.phoneNumber.replace(/[^+\d]/g, '')}`

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    const payload = {
      name: form.name,
      email: form.email,
      service: form.service,
      message: form.message,
    }

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          throw new Error('Submission failed')
        }
      } else {
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`)
        window.location.href = `${mailtoBase}&body=${body}`
      }

      setForm({ name: '', email: '', service: 'AI automation', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-starry-premium text-white font-sans">
      {/* 2 & 3. Ambient Glows & Grid */}
      <div className="grid-overlay" />
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />
      
      {/* 1 & 4. Particles and Flowing Abstract Shapes */}
      <StarParticles />
      <AbstractBlobs />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0C1446]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-10">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#B3CDE0]">CALLORA</span>
          </a>
          <nav className="hidden items-center gap-7 sm:flex">
            {topNavLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-xs font-bold uppercase tracking-[0.18em] text-white/85 transition hover:text-[#B3CDE0]">
                {link.label}
              </a>
            ))}
          </nav>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#B3CDE0]/30 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10">
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </header>

      <main className="relative z-20 pt-16 sm:pt-18">
        <div className="mx-auto max-w-7xl px-6 pt-8 sm:px-8 lg:px-10 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel-premium ml-0 flex w-fit items-center gap-4 rounded-full px-7 py-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2B5C92] to-[#B3CDE0] shadow-[0_12px_30px_rgba(43, 92, 146,0.5)]">
              <span className="text-lg font-black tracking-[-0.08em] text-[#0C1446]">C</span>
            </div>
            <div className="leading-none">
              <p className="text-[1.2rem] font-extrabold tracking-[0.3em] text-white sm:text-[1.4rem]">CALLORA</p>
              <div className="mt-1 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-[#2B5C92] to-[#B3CDE0]" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.45em] text-[#B3CDE0] sm:text-[0.75rem]">BPO SOLUTIONS</p>
                <span className="h-px w-8 bg-gradient-to-r from-[#B3CDE0] to-[#2B5C92]" />
              </div>
            </div>
          </motion.div>
        </div>

        <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-18 sm:px-8 lg:grid-cols-[1.1fr,0.9fr] lg:gap-12 lg:py-24">
          {/* LEFT: Content */}
          <div className="order-1 flex w-full items-center">
            <div className="w-full max-w-[45rem]">
              <div className="mb-8 flex items-start gap-4">
                <div className="h-24 w-1.5 rounded-full bg-gradient-to-b from-[#B3CDE0] via-[#2B5C92] to-transparent shadow-[0_12px_30px_rgba(179, 205, 224,0.3)]" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B3CDE0]">Trusted by startups • 24/7 support • AI-powered</p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#B3CDE0]/70">Helping businesses scale with smart support, automation, and digital services.</p>
                </div>
              </div>

              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl text-5xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[4.5rem]">
                <span className="block">AI-Powered Business</span>
                <span className="block text-gradient-premium">Support Solutions</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="mt-8 max-w-xl text-xl leading-relaxed text-[#B3CDE0]/90">
                <span className="font-bold text-white">Human support.</span> <span className="text-[#B3CDE0] font-bold">Enterprise speed.</span> Helping businesses scale with smart support, automation, and digital services.
              </motion.p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <motion.a className="btn-premium inline-flex items-center gap-3 px-8 py-4 text-base cursor-pointer" href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Contact on WhatsApp
                </motion.a>

                <motion.a className="btn-outline-premium inline-flex items-center gap-3 px-8 py-4 text-base font-bold cursor-pointer" href={telHref}>
                  <Phone className="h-5 w-5" />
                  Call Us
                </motion.a>
              </div>

              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:max-w-[40rem]">
                {[
                  ['Smart People', 'Talented professionals dedicated to your success.'],
                  ['Better Results', 'Data-driven solutions that drive real business growth.'],
                ].map(([t, txt]) => (
                  <motion.div key={t} className="glass-card-premium flex items-start gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2B5C92]/30 text-[#B3CDE0] shadow-[0_14px_24px_rgba(43, 92, 146,0.3)] ring-1 ring-[#B3CDE0]/20">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{t}</p>
                      <p className="mt-1 text-sm text-[#B3CDE0]/70 leading-relaxed">{txt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Floating UI / Dashboard mockup */}
          <div className="order-2 flex w-full items-center justify-center">
            <div className="relative w-full max-w-[42rem] py-8 lg:py-10">
              <div className="relative z-30 mx-auto w-[94%]">
                <div className="glass-panel-premium p-2">
                  <div className="relative rounded-[36px] bg-[#0C1446]/40 p-7 shadow-inner backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B3CDE0]">Support Command Center</p>
                        <p className="mt-2 text-2xl font-extrabold tracking-tight text-white">24/7 Human + AI Operations</p>
                      </div>
                      <div className="rounded-full border border-[#B3CDE0]/30 bg-[#2B5C92]/30 px-4 py-1.5 text-xs font-bold text-white shadow-sm">Online</div>
                    </div>

                    <div className="mt-8 grid gap-5 lg:grid-cols-[1fr,1fr]">
                      <div className="glass-card-premium p-6">
                        <div className="relative flex flex-col gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2B5C92] to-[#B3CDE0] text-[#0C1446] shadow-lg">
                            <Headphones className="h-7 w-7" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Human Support</p>
                            <p className="mt-2 text-xl font-bold text-white">Reliable & Fast</p>
                            <p className="mt-2 text-sm leading-relaxed text-[#B3CDE0]/80">Enterprise support experience with direct response and clear routing.</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-5">
                        <div className="glass-card-premium p-5">
                          <div className="flex items-center justify-between text-sm font-semibold text-[#B3CDE0]">
                            <span>Automation</span>
                            <span className="text-white font-bold">72%</span>
                          </div>
                          <div className="mt-4 h-2 rounded-full bg-white/10">
                            <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-[#2B5C92] to-[#B3CDE0] shadow-md" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                          <div className="glass-card-premium p-5 text-center flex flex-col items-center justify-center">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Active</p>
                            <p className="mt-1 text-2xl font-extrabold text-white">+120</p>
                          </div>
                          <div className="glass-card-premium p-5 text-center flex flex-col items-center justify-center">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Response</p>
                            <p className="mt-1 text-2xl font-extrabold text-white">24/7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="glass-panel-premium px-8 py-16 sm:px-10 lg:px-14">
            <SectionTitle
              eyebrow="Services"
              title="Focused services that move the needle quickly"
              text="A concise set of premium services designed for growth, automation, and support."
            />

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="glass-card-premium p-5 group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2B5C92]/30 ring-1 ring-[#B3CDE0]/20 shadow-sm transition duration-500 group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(43, 92, 146,0.4)]">
                      <service.icon className="h-4 w-4 text-[#B3CDE0]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{service.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#B3CDE0]/80">{service.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="glass-panel-premium px-8 py-16 sm:px-10 lg:px-14">
            <SectionTitle
              eyebrow="Why Choose Us"
              title="Simple reasons to trust the team and move quickly."
              text="The goal is not complexity. The goal is a premium, dependable experience that makes the next step obvious."
            />

            <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {reasons.map((item) => (
                <article
                  key={item.title}
                  className="glass-card-premium p-5 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2B5C92] to-[#B3CDE0] text-[#0C1446] shadow-lg transition duration-500 group-hover:shadow-[0_0_35px_rgba(179, 205, 224,0.4)] group-hover:scale-110">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#B3CDE0]/80">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="glass-panel-premium px-8 py-16 sm:px-10 lg:px-14">
            <SectionTitle
              eyebrow="Contact"
              title="Make contacting effortless."
              text="Tap WhatsApp, call directly, email instantly, or send a short inquiry. The contact area is the primary conversion path on the page."
            />

            <div className="mt-12 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0C1446] via-[#2B5C92] to-[#0C1446] px-8 py-6 text-white shadow-2xl border border-[#B3CDE0]/20">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">Human support. Enterprise response. 24/7 availability.</p>
                <p className="text-sm font-medium text-white/90">Fast contact options for calls, WhatsApp, and email.</p>
              </div>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr,1.1fr]">
              <div className="space-y-8">
                <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                  <ContactCard icon={MessageCircle} title="WhatsApp" text="Start a direct chat" href={whatsappHref} />
                  <ContactCard icon={Phone} title="Call" text="Open the dialer instantly" href={telHref} />
                  <ContactCard icon={Mail} title="Email" text="Open the mail app" href={mailtoBase} />
                </div>

                <div className="glass-card-premium p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Quick Social Links</p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    {socials.map((social) => (
                      <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-md border border-white/10">
                        <social.icon className="h-4 w-4" />
                        {social.label}
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-3">
                    <div className="rounded-[24px] bg-white/5 p-5 shadow-sm border border-white/10">
                      <p className="text-xs font-bold text-[#B3CDE0] uppercase tracking-widest">Phone</p>
                      <p className="mt-2 font-bold text-white text-sm">{contact.phoneNumber}</p>
                    </div>
                    <div className="rounded-[24px] bg-white/5 p-5 shadow-sm border border-white/10">
                      <p className="text-xs font-bold text-[#B3CDE0] uppercase tracking-widest">Email</p>
                      <p className="mt-2 break-all font-bold text-white text-sm">{contact.email}</p>
                    </div>
                    <div className="rounded-[24px] bg-white/5 p-5 shadow-sm border border-white/10">
                      <p className="text-xs font-bold text-[#B3CDE0] uppercase tracking-widest">WhatsApp</p>
                      <p className="mt-2 font-bold text-white text-sm">Fast direct chat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel-premium p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Simple Lead Form</p>
                <h3 className="mt-3 text-3xl font-extrabold text-white">Send a short inquiry</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B3CDE0]/80">This form works with Formspree when you set an endpoint. Without that, it falls back to the mail app.</p>

                <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name">
                      <input
                        required
                        value={form.name}
                        onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                        className="glass-input-premium w-full px-5 py-4 font-medium"
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                        className="glass-input-premium w-full px-5 py-4 font-medium"
                        placeholder="you@company.com"
                      />
                    </Field>
                  </div>

                  <Field label="Service">
                    <select
                      value={form.service}
                      onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
                      className="glass-input-premium w-full px-5 py-4 font-medium appearance-none"
                    >
                      {services.map((service) => (
                        <option key={service.title} value={service.title} className="bg-[#0C1446] text-white">
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message">
                    <textarea
                      required
                      rows="4"
                      value={form.message}
                      onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                      className="glass-input-premium w-full px-5 py-4 font-medium resize-none"
                      placeholder="Tell us what you need"
                    />
                  </Field>

                  <button type="submit" disabled={status === 'loading'} className="mt-2 inline-flex items-center justify-center gap-3 btn-premium px-8 py-4 text-base font-bold shadow-xl transition disabled:cursor-not-allowed disabled:opacity-70">
                    {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                    <Send className="h-5 w-5" />
                  </button>

                  {status === 'success' ? <p className="mt-2 text-sm font-bold text-[#B3CDE0] bg-[#2B5C92]/20 p-3 rounded-xl border border-[#2B5C92]/40 text-center">Your message is ready to go.</p> : null}
                  {status === 'error' ? <p className="mt-2 text-sm font-bold text-red-300 bg-red-900/20 p-3 rounded-xl border border-red-900/40 text-center">Something went wrong. Try WhatsApp or email instead.</p> : null}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative mt-20 border-t border-white/10 bg-[#0C1446]/80 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C1446] pointer-events-none" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.2fr,1fr,1fr] lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2B5C92] to-[#B3CDE0] text-[#0C1446] font-black text-lg shadow-md">C</div>
              <p className="text-2xl font-extrabold tracking-tight text-white">CALLORA</p>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#B3CDE0]/80 font-medium">Premium AI and digital solutions for businesses that want a modern presence and faster lead conversion.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Quick Links</p>
            <div className="mt-6 flex flex-col gap-4 text-sm font-semibold text-white/90">
              <a href="#services" className="w-fit transition hover:text-[#B3CDE0]">Services</a>
              <a href="#why" className="w-fit transition hover:text-[#B3CDE0]">Why Choose Us</a>
              <a href="#contact" className="w-fit transition hover:text-[#B3CDE0]">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Contact</p>
            <div className="mt-6 space-y-4 text-sm font-semibold text-white/90">
              <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#B3CDE0]"/>{contact.phoneNumber}</p>
              <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#B3CDE0]"/>{contact.email}</p>
              <p className="flex items-center gap-3"><MessageCircle className="w-4 h-4 text-emerald-400"/>WhatsApp available 24/7</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ContactCard({ icon: Icon, title, text, href }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="group glass-card-premium flex items-center gap-5 p-5">
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2B5C92]/30 text-[#B3CDE0] ring-1 ring-[#B3CDE0]/20 shadow-sm transition duration-500 group-hover:rotate-6 group-hover:scale-110`}>
        <Icon className="h-6 w-6" />
      </span>
      <div className="flex-1">
        <p className="font-bold text-white text-lg">{title}</p>
        <p className="mt-1 text-sm font-medium text-[#B3CDE0]/70">{text}</p>
      </div>
      <ArrowRight className="h-5 w-5 text-[#B3CDE0]/50 transition-all group-hover:translate-x-1 group-hover:text-[#B3CDE0]" />
    </a>
  )
}

function Field({ label, children }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#B3CDE0]">
      <span className="uppercase tracking-wider text-xs">{label}</span>
      {children}
    </label>
  )
}

export default App