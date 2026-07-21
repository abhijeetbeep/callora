export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B3CDE0]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#B3CDE0]/80 max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  )
}
