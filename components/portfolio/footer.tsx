import Link from 'next/link'
import { GITHUB_URL, LINKEDIN_URL, ZENN_URL } from '@/lib/site'
import { ArrowUpRight } from './section-label'

const SOCIALS = [
  { label: 'GitHub', href: GITHUB_URL, accent: true },
  { label: 'LinkedIn', href: LINKEDIN_URL, accent: false },
  { label: 'Zenn', href: ZENN_URL, accent: false },
]

export function Footer() {
  return (
    <footer className="bg-base">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-[3px] bg-cyan font-mono text-[11px] font-bold text-base">
            RT
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-bold text-ink">高橋 蓮 / Frontend Engineer</span>
            <span className="font-mono text-[9px] tracking-[0.1em] text-dim">FICTIONAL SAMPLE PORTFOLIO</span>
          </span>
        </Link>

        <ul className="flex items-center gap-8">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 font-mono text-[12px] hover:underline ${
                  s.accent ? 'text-cyan' : 'text-sub'
                }`}
              >
                {s.label}
                <ArrowUpRight />
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[9px] leading-[1.8] tracking-[0.08em] text-dim md:text-right">
          © 2026 REN TAKAHASHI · SAMPLE
          <br />
          BUILT WITH TYPE / GRID / CURIOSITY
        </p>
      </div>
    </footer>
  )
}
