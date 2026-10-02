import Link from 'next/link'
import { GITHUB_URL } from '@/lib/site'
import { ArrowUpRight } from './section-label'

type Token = { text: string; tone?: 'kw' | 'str' | 'cm' | 'plain' }

const CODE_LINES: Token[][] = [
  [{ text: 'type', tone: 'kw' }, { text: ' Engineer = {' }],
  [{ text: '  name: ' }, { text: '"高橋 蓮"', tone: 'str' }, { text: ';' }],
  [{ text: '  role: ' }, { text: '"Frontend Engineer"', tone: 'str' }, { text: ';' }],
  [{ text: '  focus: [' }],
  [{ text: '    ' }, { text: '"Design Systems"', tone: 'str' }, { text: ',' }],
  [{ text: '    ' }, { text: '"Performance"', tone: 'str' }, { text: ',' }],
  [{ text: '    ' }, { text: '"Accessible UI"', tone: 'str' }],
  [{ text: '  ];' }],
  [{ text: '  ship: ' }, { text: 'true', tone: 'kw' }, { text: ';' }],
  [{ text: '};' }],
  [{ text: '// ideas → maintainable interfaces', tone: 'cm' }],
]

const toneClass: Record<NonNullable<Token['tone']>, string> = {
  kw: 'text-cyan',
  str: 'text-[#e9d9a6]',
  cm: 'text-dim',
  plain: 'text-ink',
}

function CodeWindow() {
  return (
    <div className="w-full">
      <div className="mb-3 flex justify-between font-mono text-[10px] tracking-[0.08em] text-dim">
        <span>FIG. 001 / SOURCE PROFILE</span>
        <span className="hidden sm:inline">{'35.6762° N, 139.6503° E'}</span>
      </div>

      <div className="overflow-hidden rounded-md border border-line-strong bg-panel">
        <div className="flex items-center gap-4 border-b border-line px-4 py-3">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
          </span>
          <span className="truncate rounded-sm bg-base px-3 py-1 font-mono text-[10px] text-dim">
            portfolio.local/components/intro.tsx
          </span>
        </div>

        <div className="flex border-b border-line">
          <span className="flex items-center gap-2 border-b border-cyan px-4 py-2.5 font-mono text-[11px] text-ink">
            <span className="text-[10px] font-bold text-cyan">TS</span>
            intro.tsx
          </span>
        </div>

        <pre className="overflow-x-auto px-4 py-5 font-mono text-[12px] leading-[2.1] md:text-[13px]">
          <code>
            {CODE_LINES.map((line, i) => (
              <span key={i} className="flex">
                <span aria-hidden="true" className="w-10 shrink-0 select-none text-dim">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  {line.map((token, j) => (
                    <span key={j} className={toneClass[token.tone ?? 'plain']}>
                      {token.text}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </code>
        </pre>

        <div className="flex items-center justify-between bg-cyan px-4 py-1.5 font-mono text-[10px] text-base">
          <span>{'⎇ main*'}</span>
          <span>TypeScript React · UTF-8 · Ln 11, Col 29</span>
        </div>
      </div>

      <div className="mt-3 flex justify-between font-mono text-[10px] tracking-[0.08em] text-dim">
        <span>
          BUILD STATUS: <span className="text-cyan">PASSING</span>
        </span>
        <span className="flex items-center gap-1.5">
          SCROLL TO INSPECT <span className="text-cyan">↓</span>
        </span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line bg-base">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 py-20 md:px-10 lg:grid-cols-[1fr_440px] lg:gap-16 lg:py-[140px]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-[3px] border border-cyan/30 bg-cyan-deep px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-cyan">
            <span aria-hidden="true" className="h-3 w-[3px] bg-cyan" />
            FRONTEND_ENGINEER.TSX
          </p>

          <h1 id="hero-title" className="mt-6">
            <span className="block text-[52px] font-black leading-[1.1] tracking-[0.04em] text-ink md:text-[72px]">
              高橋 蓮
            </span>
            <span className="block text-[36px] font-black leading-[1.1] tracking-[0.01em] text-[#6b7680] md:text-[56px]">
              REN TAKAHASHI
            </span>
          </h1>

          <p className="mt-6 text-[15px] font-bold tracking-[0.08em] text-cyan">
            フロントエンドエンジニア
          </p>

          <p className="mt-5 max-w-[500px] text-[16px] leading-[1.9] text-sub md:text-[17px]">
            複雑な要件を、速く・使いやすく・育てやすいインターフェースへ。プロダクトの意図を読み解き、設計から実装まで一貫して形にします。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 rounded-[3px] bg-cyan px-5 py-3 text-[13px] font-bold text-base transition-opacity hover:opacity-90"
            >
              実務実績を見る
              <ArrowUpRight />
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[3px] border border-line-strong px-5 py-3 text-[13px] font-bold text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              GitHubを開く
              <ArrowUpRight />
            </a>
          </div>

          <p className="mt-8 text-[11px] text-dim">※ 掲載内容はポートフォリオ用の架空サンプルです</p>
        </div>

        <CodeWindow />
      </div>
    </section>
  )
}
