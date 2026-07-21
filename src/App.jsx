import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Globe,
  Headphones,
  Mail,
  MessageCircle,
  Megaphone,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  MessagesSquare,
  ArrowRight,
} from 'lucide-react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServiceCard from './components/ServiceCard'
import SectionHeader from './components/SectionHeader'
import Reveal from './components/Reveal'
import Counter from './components/Counter'
import logo from './callora.jpg'

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
  { title: 'Hiring Solution', icon: Users, description: 'Connect businesses with skilled candidates through streamlined hiring and talent support.' },
]

const reasons = [
  { title: 'Fast Delivery', icon: Rocket, text: 'Focused execution with quick turnaround and polished results.' },
  { title: 'Expert Team', icon: Sparkles, text: 'Experienced people who understand modern digital and AI needs.' },
  { title: 'Affordable', icon: ShieldCheck, text: 'Premium-looking work without unnecessary complexity or overhead.' },
  { title: '24/7 Support', icon: Headphones, text: 'Always easy to reach when a lead is ready or a client needs help.' },
  { title: 'Modern Technology', icon: Globe, text: 'Built with a clean stack that stays fast, responsive, and current.' },
  { title: 'Scalable Solutions', icon: Code2, text: 'Simple systems that can grow with the business instead of slowing it down.' },
]

const counters = [
  { label: 'Clients', value: 100, suffix: '+' },
  { label: 'Projects', value: 250, suffix: '+' },
  { label: 'Support', value: 24, suffix: '/7' },
  { label: 'Satisfaction', value: 99, suffix: '%' },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

const StarParticles = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map((_, idx) => ({
      id: idx,
      size: (idx % 3) * 1 + 1.5,
      x: (idx * 17) % 100,
      y: (idx * 23) % 100,
      duration: (idx % 5) + 3,
      delay: (idx % 4) * 0.8,
      isTwinkle: idx % 2 === 0,
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
            boxShadow: '0 0 6px rgba(255,255,255,0.8)',
          }}
          animate={{
            y: [0, -25, 0],
            opacity: star.isTwinkle ? [0.2, 1, 0.2] : [0.4, 0.8, 0.4],
            scale: star.isTwinkle ? [0.8, 1.2, 0.8] : 1,
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}

const AbstractBlobs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      <motion.div
        className="absolute -top-40 -left-40 w-[45vw] h-[45vw] rounded-[40%] bg-gradient-to-br from-[#B3CDE0]/10 to-transparent blur-[100px]"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-[20%] -right-40 w-[55vw] h-[55vw] rounded-[45%] bg-gradient-to-bl from-[#2B5C92]/15 to-transparent blur-[100px]"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: services[0].title,
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent('Hi CALLORA, I would like to discuss a project.')}`
  const mailtoBase = `mailto:${contact.email}?subject=${encodeURIComponent('New project inquiry from CALLORA')}`
  const telHref = `tel:${contact.phoneNumber.replace(/[^+\d]/g, '')}`

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

      setForm({ name: '', email: '', service: services[0].title, message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-starry-premium text-white font-sans">
      <div className="grid-overlay" />
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <StarParticles />
      <AbstractBlobs />

      <Navbar navLinks={navLinks} scrolled={scrolled} whatsappHref={whatsappHref} />

      <main className="relative z-20 pt-20 sm:pt-24">
        {/* Brand Badge */}
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-8 lg:px-10">
          <Reveal delay={0.1}>
            <div className="glass-panel-premium flex w-fit items-center gap-3.5 rounded-full px-5 py-3 sm:px-7 sm:py-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2B5C92] to-[#B3CDE0] shadow-[0_8px_20px_rgba(43,92,146,0.5)]">
                <img
                  src={logo}
                  alt="CALLORA"
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover"
                  width="44"
                  height="44"
                />
              </div>
              <div className="leading-none">
                <p className="text-base sm:text-[1.2rem] font-extrabold tracking-[0.28em] text-white">CALLORA</p>
                <div className="mt-1 flex items-center gap-2 sm:gap-3">
                  <span className="h-px w-5 sm:w-8 bg-gradient-to-r from-[#2B5C92] to-[#B3CDE0]" />
                  <p className="text-[0.6rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.4em] text-[#B3CDE0]">
                    BPO & AI SOLUTIONS
                  </p>
                  <span className="h-px w-5 sm:w-8 bg-gradient-to-r from-[#B3CDE0] to-[#2B5C92]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero Section */}
        <section id="home" className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1.1fr,0.9fr] lg:gap-12 lg:py-20">
          <div className="order-1 flex w-full items-center">
            <div className="w-full max-w-[45rem]">
              <Reveal delay={0.2}>
                <div className="mb-6 flex items-start gap-3.5">
                  <div className="h-20 sm:h-24 w-1.5 rounded-full bg-gradient-to-b from-[#B3CDE0] via-[#2B5C92] to-transparent shadow-[0_12px_30px_rgba(179,205,224,0.3)]" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B3CDE0]">
                      Trusted by startups • 24/7 support • AI-powered
                    </p>
                    <p className="mt-1.5 max-w-md text-xs sm:text-sm leading-relaxed text-[#B3CDE0]/70">
                      Helping businesses scale with smart support, automation, and digital services.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[4.2rem]">
                  <span className="block">AI-Powered Business</span>
                  <span className="block text-gradient-premium">Support Solutions</span>
                </h1>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="mt-6 max-w-xl text-base sm:text-xl leading-relaxed text-[#B3CDE0]/90">
                  <span className="font-bold text-white">Human support.</span>{' '}
                  <span className="font-bold text-[#B3CDE0]">Enterprise speed.</span> Helping businesses scale with smart support, automation, and digital services.
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                  <a
                    className="btn-premium inline-flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base cursor-pointer"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Contact on WhatsApp
                  </a>

                  <a
                    className="btn-outline-premium inline-flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold cursor-pointer"
                    href={telHref}
                  >
                    <Phone className="h-5 w-5" />
                    Call Us
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-[40rem]">
                  {[
                    ['Smart People', 'Talented professionals dedicated to your success.'],
                    ['Better Results', 'Data-driven solutions that drive real business growth.'],
                  ].map(([t, txt]) => (
                    <div key={t} className="glass-card-premium flex items-start gap-4 p-4 sm:p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2B5C92]/30 text-[#B3CDE0] ring-1 ring-[#B3CDE0]/20 shadow-sm">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm sm:text-base">{t}</p>
                        <p className="mt-1 text-xs text-[#B3CDE0]/70 leading-relaxed">{txt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* RIGHT: Command Center Mockup */}
          <div className="order-2 flex w-full items-center justify-center">
            <Reveal delay={0.4} className="w-full max-w-[42rem]">
              <div className="relative z-30 mx-auto w-full">
                <div className="glass-panel-premium p-2 sm:p-3">
                  <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0C1446]/50 p-5 sm:p-7 shadow-inner backdrop-blur-md">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#B3CDE0]">
                          Support Command Center
                        </p>
                        <p className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                          24/7 Human + AI Operations
                        </p>
                      </div>
                      <div className="w-fit rounded-full border border-[#B3CDE0]/30 bg-[#2B5C92]/30 px-3 py-1 text-xs font-bold text-white shadow-sm">
                        Online
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:gap-5 lg:grid-cols-2">
                      <div className="glass-card-premium p-5 sm:p-6">
                        <div className="relative flex flex-col gap-3.5">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2B5C92] to-[#B3CDE0] text-[#0C1446] shadow-lg">
                            <Headphones className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Human Support</p>
                            <p className="mt-1 text-lg font-bold text-white">Reliable & Fast</p>
                            <p className="mt-1.5 text-xs leading-relaxed text-[#B3CDE0]/80">
                              Enterprise support experience with direct response and clear routing.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:gap-5">
                        <div className="glass-card-premium p-4 sm:p-5">
                          <div className="flex items-center justify-between text-xs font-semibold text-[#B3CDE0]">
                            <span>Automation</span>
                            <span className="font-bold text-white">72%</span>
                          </div>
                          <div className="mt-3 h-2 rounded-full bg-white/10">
                            <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-[#2B5C92] to-[#B3CDE0] shadow-md" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="glass-card-premium flex flex-col items-center justify-center p-4 text-center">
                            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">
                              Active
                            </p>
                            <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">+120</p>
                          </div>
                          <div className="glass-card-premium flex flex-col items-center justify-center p-4 text-center">
                            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">
                              Response
                            </p>
                            <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">24/7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Counter Stats Section */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {counters.map((c) => (
              <Counter key={c.label} label={c.label} value={c.value} suffix={c.suffix} />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="glass-panel-premium px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <SectionHeader
              eyebrow="Services"
              title="Focused services that move the needle quickly"
              description="A concise set of premium services designed for growth, automation, and customer operations."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <Reveal key={service.title} delay={0.05 * (idx % 6)}>
                  <ServiceCard service={service} index={idx} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="glass-panel-premium px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Simple reasons to trust the team and move quickly."
              description="The goal is not complexity. The goal is a premium, dependable experience that makes the next step obvious."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {reasons.map((item, idx) => (
                <Reveal key={item.title} delay={0.1 * (idx % 3)}>
                  <article className="glass-card-premium group p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2B5C92] to-[#B3CDE0] text-[#0C1446] shadow-lg transition duration-500 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(179,205,224,0.4)]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#B3CDE0]/80">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="glass-panel-premium px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <SectionHeader
              eyebrow="Contact"
              title="Make contacting effortless."
              description="Tap WhatsApp, call directly, email instantly, or send a short inquiry. The contact area is the primary conversion path on the page."
            />

            <div className="mt-10 overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-[#0C1446] via-[#2B5C92] to-[#0C1446] px-6 py-5 sm:px-8 sm:py-6 text-white shadow-2xl border border-[#B3CDE0]/20">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/90">
                  Human support. Enterprise response. 24/7 availability.
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#B3CDE0]">
                  Fast contact options for calls, WhatsApp, and email.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr,1.1fr]">
              <div className="space-y-6 sm:space-y-8">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <ContactCard icon={MessageCircle} title="WhatsApp" text="Start a direct chat" href={whatsappHref} />
                  <ContactCard icon={Phone} title="Call" text="Open dialer instantly" href={telHref} />
                  <ContactCard icon={Mail} title="Email" text="Open mail app" href={mailtoBase} />
                </div>

                <div className="glass-card-premium p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Contact Details</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[20px] bg-white/5 p-4 border border-white/10">
                      <p className="text-[10px] font-bold text-[#B3CDE0] uppercase tracking-widest">Phone</p>
                      <p className="mt-1.5 font-bold text-white text-xs sm:text-sm break-words">{contact.phoneNumber}</p>
                    </div>
                    <div className="rounded-[20px] bg-white/5 p-4 border border-white/10">
                      <p className="text-[10px] font-bold text-[#B3CDE0] uppercase tracking-widest">Email</p>
                      <p className="mt-1.5 font-bold text-white text-xs sm:text-sm break-all">{contact.email}</p>
                    </div>
                    <div className="rounded-[20px] bg-white/5 p-4 border border-white/10">
                      <p className="text-[10px] font-bold text-[#B3CDE0] uppercase tracking-widest">WhatsApp</p>
                      <p className="mt-1.5 font-bold text-white text-xs sm:text-sm">Fast direct chat</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="glass-panel-premium p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B3CDE0]">Simple Lead Form</p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">Send a short inquiry</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#B3CDE0]/80">
                  This form works with Formspree when set up, or opens your mail app directly.
                </p>

                <form className="mt-6 grid gap-4 sm:gap-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name">
                      <input
                        required
                        value={form.name}
                        onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                        className="glass-input-premium w-full px-4 py-3.5 text-sm font-medium"
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                        className="glass-input-premium w-full px-4 py-3.5 text-sm font-medium"
                        placeholder="you@company.com"
                      />
                    </Field>
                  </div>

                  <Field label="Service">
                    <select
                      value={form.service}
                      onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
                      className="glass-input-premium w-full px-4 py-3.5 text-sm font-medium appearance-none"
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
                      className="glass-input-premium w-full px-4 py-3.5 text-sm font-medium resize-none"
                      placeholder="Tell us what you need"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-2 inline-flex items-center justify-center gap-3 btn-premium px-6 py-4 text-sm sm:text-base font-bold shadow-xl transition disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                    <Send className="h-5 w-5" />
                  </button>

                  {status === 'success' ? (
                    <p className="mt-2 text-xs sm:text-sm font-bold text-[#B3CDE0] bg-[#2B5C92]/20 p-3 rounded-xl border border-[#2B5C92]/40 text-center">
                      Your inquiry has been submitted!
                    </p>
                  ) : null}
                  {status === 'error' ? (
                    <p className="mt-2 text-xs sm:text-sm font-bold text-red-300 bg-red-900/20 p-3 rounded-xl border border-red-900/40 text-center">
                      Something went wrong. Try WhatsApp or email instead.
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer navLinks={navLinks} contact={contact} />
    </div>
  )
}

function ContactCard({ icon: Icon, title, text, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group glass-card-premium flex items-center gap-4 p-4 sm:p-5"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2B5C92]/30 text-[#B3CDE0] ring-1 ring-[#B3CDE0]/20 shadow-sm transition duration-500 group-hover:rotate-6 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1">
        <p className="font-bold text-white text-base">{title}</p>
        <p className="mt-0.5 text-xs font-medium text-[#B3CDE0]/70">{text}</p>
      </div>
      <ArrowRight className="h-4 w-4 text-[#B3CDE0]/50 transition-all group-hover:translate-x-1 group-hover:text-[#B3CDE0]" />
    </a>
  )
}

function Field({ label, children }) {
  return (
    <label className="grid gap-1.5 text-xs font-bold text-[#B3CDE0]">
      <span className="uppercase tracking-wider text-[10px]">{label}</span>
      {children}
    </label>
  )
}

export default App