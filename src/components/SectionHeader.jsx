export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col gap-4 ${alignClass} max-w-3xl mx-auto`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-soft backdrop-blur">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="text-base leading-8 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  )
}
