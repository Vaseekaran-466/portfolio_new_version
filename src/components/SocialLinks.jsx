import { FiGithub, FiGlobe, FiLinkedin, FiMail } from 'react-icons/fi'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
  website: FiGlobe,
}

export default function SocialLinks({ items = [] }) {
  if (!items?.length) return null

  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item) => {
        const Icon = iconMap[item.icon] ?? FiGlobe
        const isExternal = /^https?:\/\//.test(item.href)

        return (
          <a
            key={`${item.label}-${item.href}`}
            href={item.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 hover:text-white"
          >
            <Icon aria-hidden className="text-base" />
            <span>{item.label}</span>
          </a>
        )
      })}
    </div>
  )
}
