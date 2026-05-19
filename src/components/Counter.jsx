import { useEffect, useRef, useState } from 'react'

export default function Counter({ value, label, suffix = '' }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        let start = 0
        const duration = 1400
        const increment = Math.max(1, Math.ceil(value / 40))

        const timer = window.setInterval(() => {
          start += increment
          if (start >= value) {
            setCount(value)
            window.clearInterval(timer)
            return
          }
          setCount(start)
        }, duration / 40)

        observer.disconnect()
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="rounded-[24px] border border-white/70 bg-white/75 px-5 py-4 shadow-soft backdrop-blur">
      <div className="text-2xl font-semibold text-slate-900 sm:text-3xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">{label}</div>
    </div>
  )
}
