import { useReducedMotion } from 'framer-motion'
import { FiCheckCircle, FiCode, FiDownload, FiMapPin, FiServer, FiZap } from 'react-icons/fi'

import BackToTop from './components/BackToTop.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Reveal from './components/Reveal.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Section from './components/Section.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import { portfolio } from './data/portfolio.js'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  const reduceMotion = useReducedMotion()
  const year = new Date().getFullYear()

  const email = String(portfolio?.contact?.email ?? '')

  const socialsBase = Array.isArray(portfolio?.socials) ? portfolio.socials : []
  const socials = socialsBase.some((s) => s?.icon === 'mail')
    ? socialsBase
    : [...socialsBase, { label: 'Email', href: `mailto:${email}`, icon: 'mail' }]

  const stats = Array.isArray(portfolio?.stats) ? portfolio.stats : []
  const services = Array.isArray(portfolio?.services) ? portfolio.services : []
  const experience = Array.isArray(portfolio?.experience) ? portfolio.experience : []
  const education = Array.isArray(portfolio?.education) ? portfolio.education : []
  const certifications = Array.isArray(portfolio?.certifications) ? portfolio.certifications : []
  const projects = Array.isArray(portfolio?.projects) ? portfolio.projects : []

  const skillGroups = Array.isArray(portfolio?.skillGroups) ? portfolio.skillGroups : null
  const skillsFlat = Array.isArray(portfolio?.skills) ? portfolio.skills : []

  const serviceIcons = [FiCode, FiServer, FiZap]

  const onContactSubmit = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') ?? '')
    const fromEmail = String(form.get('email') ?? '')
    const message = String(form.get('message') ?? '')

    const subject = `Portfolio contact from ${name || 'someone'}`
    const body = `Name: ${name}\nEmail: ${fromEmail}\n\n${message}`

    if (!email) return

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="relative min-h-dvh bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-white">
      <ScrollProgress />

      <Navbar brand={portfolio.brand} links={navLinks} resumeUrl={portfolio.resumeUrl} />

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-[0.22]" />
        <div className="blob absolute -top-48 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="blob2 absolute top-24 right-[-120px] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <main className="relative mx-auto w-full max-w-6xl px-4">
        <Section id="home">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-sky-300/90">
                  <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden />
                  Hello, I&apos;m
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                    {portfolio.name}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  {portfolio.headline}
                </p>
              </Reveal>

              {portfolio.tagline ? (
                <Reveal delay={0.14}>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300/90">
                    {portfolio.tagline}
                  </p>
                </Reveal>
              ) : null}

              <Reveal delay={0.18}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow hover:bg-sky-400"
                  >
                    Contact Me
                  </a>

                  <a
                    href="#projects"
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    View Projects
                  </a>

                  {portfolio.resumeUrl ? (
                    <a
                      href={portfolio.resumeUrl}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                      target={/^https?:\/\//.test(portfolio.resumeUrl) ? '_blank' : undefined}
                      rel={/^https?:\/\//.test(portfolio.resumeUrl) ? 'noreferrer' : undefined}
                    >
                      <FiDownload aria-hidden />
                      Resume
                    </a>
                  ) : null}
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-6">
                  <SocialLinks items={socials} />
                </div>
              </Reveal>

              {(portfolio.location || portfolio.availability) && (
                <Reveal delay={0.26}>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                    {portfolio.location ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                        <FiMapPin aria-hidden className="text-slate-200" />
                        {portfolio.location}
                      </span>
                    ) : null}
                    {portfolio.availability ? (
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                        {portfolio.availability}
                      </span>
                    ) : null}
                  </div>
                </Reveal>
              )}
            </div>

            <div
              className={
                "rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8" +
                (reduceMotion ? '' : ' will-change-transform')
              }
              style={
                reduceMotion
                  ? undefined
                  : {
                      animation: 'blob 10s ease-in-out infinite',
                      animationDelay: '-2s',
                    }
              }
            >
              <Reveal>
                <div className="space-y-4">
                  <div className="h-2 w-24 rounded-full bg-sky-400/80" />

                  <p className="text-sm leading-6 text-slate-300">
                    Edit your portfolio content in{' '}
                    <code className="rounded bg-black/30 px-1">src/data/portfolio.js</code>.
                  </p>

                  {stats.length ? (
                    <div className="grid gap-3 sm:grid-cols-3">
                      {stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-2xl border border-white/10 bg-slate-950/30 p-4"
                        >
                          <p className="text-xl font-semibold text-white">{s.value}</p>
                          <p className="mt-1 text-xs text-slate-300">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section id="about">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
          </Reveal>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm leading-7 text-slate-300 sm:text-base">{portfolio.about}</p>
            </Reveal>

            <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">Highlights</p>
              <ul className="mt-3 grid gap-2">
                {(portfolio.highlights ?? []).map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-slate-300">
                    <FiCheckCircle aria-hidden className="mt-0.5 text-sky-300" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        <Section id="skills">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white">Skills</h2>
          </Reveal>

          {skillGroups ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((g) => (
                <Reveal
                  key={g.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-base font-semibold text-white">{g.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-6 flex flex-wrap gap-2">
              {skillsFlat.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </Section>

        {services.length ? (
          <Section id="services">
            <Reveal>
              <h2 className="text-2xl font-semibold text-white">What I Do</h2>
              <p className="mt-2 text-sm text-slate-300">
                A few ways I can help you build and ship modern web products.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {services.map((s, idx) => {
                const Icon = serviceIcons[idx % serviceIcons.length]

                return (
                  <Reveal
                    key={s.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex rounded-xl border border-white/10 bg-sky-500/10 p-3 text-sky-300">
                        <Icon aria-hidden className="text-lg" />
                      </span>
                      <h3 className="text-base font-semibold text-white">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{s.description}</p>
                  </Reveal>
                )
              })}
            </div>
          </Section>
        ) : null}

        <Section id="experience">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <h3 className="text-base font-semibold text-white">Work / Learning</h3>
              </Reveal>

              <div className="mt-4 space-y-5 border-l border-white/10 pl-6">
                {experience.map((x) => (
                  <Reveal key={`${x.role}-${x.period}`} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-sky-400"
                    />
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-base font-semibold text-white">{x.role}</h4>
                        <span className="text-xs text-slate-300">{x.period}</span>
                      </div>
                      <p className="mt-1 text-sm text-slate-300">{x.company}</p>
                      {x.points?.length ? (
                        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
                          {x.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <h3 className="text-base font-semibold text-white">Education</h3>
              </Reveal>

              <div className="mt-4 space-y-5 border-l border-white/10 pl-6">
                {education.map((e) => (
                  <Reveal key={`${e.degree}-${e.period}`} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-fuchsia-400"
                    />
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-base font-semibold text-white">{e.degree}</h4>
                        <span className="text-xs text-slate-300">{e.period}</span>
                      </div>
                      <p className="mt-1 text-sm text-slate-300">{e.school}</p>
                      {e.details ? (
                        <p className="mt-3 text-sm leading-6 text-slate-300">{e.details}</p>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </div>

              {certifications.length ? (
                <Reveal className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h4 className="text-base font-semibold text-white">Certifications</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {certifications.map((c) => (
                      <span
                        key={`${c.title}-${c.year}`}
                        className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-200"
                      >
                        {c.title} • {c.issuer} • {c.year}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ) : null}
            </div>
          </div>
        </Section>

        <Section id="projects">
          <Reveal className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">Projects</h2>
              <p className="mt-2 text-sm text-slate-300">Some things I&apos;ve built recently.</p>
            </div>
            <a href="#contact" className="text-sm font-medium text-sky-300 hover:text-sky-200">
              Want to collaborate? →
            </a>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard
                  title={p.title}
                  description={p.description}
                  href={p.href}
                  tags={p.tags}
                />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-2 text-sm text-slate-300">
              Send a message — this opens your email app (mailto).
            </p>
          </Reveal>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm leading-7 text-slate-300">
                Update your email in{' '}
                <code className="rounded bg-black/30 px-1">src/data/portfolio.js</code>.
              </p>
              <p className="mt-4 text-sm text-slate-300">
                Email: <span className="text-white">{email || 'your.email@example.com'}</span>
              </p>
              <div className="mt-5">
                <SocialLinks items={socials} />
              </div>
            </Reveal>

            <Reveal>
              <form
                onSubmit={onContactSubmit}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="grid gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm text-slate-200">Name</span>
                    <input
                      name="name"
                      required
                      className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm text-slate-200">Email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm text-slate-200">Message</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="resize-none rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                      placeholder="Tell me about your project..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-1 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400"
                    disabled={!email}
                    title={!email ? 'Set your email in src/data/portfolio.js' : undefined}
                  >
                    Send
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </Section>

        <footer className="border-t border-white/10 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-400">
              © {year} {portfolio.brand} | Built with React + Vite + Tailwind + Motion
            </p>
            <div className="text-xs text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Crafted with care
              </span>
            </div>
          </div>
        </footer>
      </main>

      <BackToTop />
    </div>
  )
}
