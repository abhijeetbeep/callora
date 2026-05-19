import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index }) {
  const Icon = service.icon

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-[1px] shadow-soft backdrop-blur"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="relative flex h-full flex-col rounded-[27px] bg-white/90 p-6">
        <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.glow} text-slate-900 shadow-glow transition duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">0{index + 1}</p>
            <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          </div>
          <p className="text-sm leading-7 text-slate-600">{service.description}</p>
        </div>
        <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition group-hover:translate-x-1">
          Learn More <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  )
}
