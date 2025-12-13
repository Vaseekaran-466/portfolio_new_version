export default function ProjectCard({ title, description, href, tags = [] }) {
  const isExternal = /^https?:\/\//.test(href)

  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/10">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>

      {tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-5">
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
        >
          View
          <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </article>
  )
}
