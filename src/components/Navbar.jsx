import { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'

const defaultLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({
  brand = 'MyPortfolio',
  links = defaultLinks,
  resumeUrl = '',
}) {
  const [open, setOpen] = useState(false)
  const showResume = Boolean(resumeUrl && resumeUrl !== '#')

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a
          href="#home"
          className="text-base font-semibold tracking-wide text-white"
          onClick={() => setOpen(false)}
        >
          {brand}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-200/90 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {showResume ? (
            <a
              href={resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              target={/^https?:\/\//.test(resumeUrl) ? '_blank' : undefined}
              rel={/^https?:\/\//.test(resumeUrl) ? 'noreferrer' : undefined}
            >
              <FiDownload aria-hidden />
              Resume
            </a>
          ) : null}
        </div>

        <button
          type="button"
          className="md:hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="md:hidden border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}

            {showResume ? (
              <a
                href={resumeUrl}
                className="mt-1 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                target={/^https?:\/\//.test(resumeUrl) ? '_blank' : undefined}
                rel={/^https?:\/\//.test(resumeUrl) ? 'noreferrer' : undefined}
                onClick={() => setOpen(false)}
              >
                <FiDownload aria-hidden />
                Resume
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
