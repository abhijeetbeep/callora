import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index }) {
  const Icon = service.icon
  const formattedIndex = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="glass-card-premium group relative flex flex-col justify-between p-6"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2B5C92]/30 text-[#B3CDE0] ring-1 ring-[#B3CDE0]/20 shadow-sm transition duration-500 group-hover:scale-110 group-hover:bg-[#2B5C92]/50 group-hover:shadow-[0_10px_30px_rgba(43,92,146,0.4)]">
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#B3CDE0]/60">
            {formattedIndex}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white transition group-hover:text-[#B3CDE0]">
            {service.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[#B3CDE0]/80">
            {service.description}
          </p>
        </div>
      </div>

      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B3CDE0] transition hover:text-white group-hover:translate-x-1"
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </a>
    </motion.article>
  )
}
