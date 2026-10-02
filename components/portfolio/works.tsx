import Image from 'next/image'
import { GITHUB_URL } from '@/lib/site'
import { ArrowUpRight, SectionLabel } from './section-label'

type Work = {
  id: string
  title: string
  meta: string
  url: string
  image: string
  alt: string
  description: string
  stack: string
}

const WORKS: Work[] = [
  {
    id: 'W-01',
    title: 'Traceboard',
    meta: 'DEVELOPER TOOL / 2026',
    url: 'traceboard.local/session/9f82',
    image: '/images/traceboard.png',
    alt: 'Traceboardのログとレイテンシを表示するダッシュボード画面',
    description: '複数環境のフロントエンドログを時系列で比較できる、開発者向けデバッグダッシュボード。',
    stack: 'React / TypeScript / WebSocket',
  },
  {
    id: 'W-02',
    title: 'Kissa Atlas',
    meta: 'CULTURE ARCHIVE / 2025',
    url: 'kissa-atlas.jp/tokyo',
    image: '/images/kissa-atlas.png',
    alt: 'Kissa Atlasの喫茶店アーカイブのトップ画面',
    description: '街の喫茶店を、写真・音・短い記録で残す個人アーカイブ。読み心地と余白を重視して設計。',
    stack: 'Next.js / MDX / Mapbox',
  },
  {
    id: 'W-03',
    title: 'Pulse Grid',
    meta: 'DATA VISUALIZATION / 2025',
    url: 'pulse-grid.dev/explore',
    image: '/images/pulse-grid.png',
    alt: 'Pulse Gridの都市移動データを可視化したダッシュボード画面',
    description: '公開データから都市の移動傾向を探索するインタラクティブ・ビジュアライゼーション。',
    stack: 'D3.js / Canvas / Vite',
  },
  {
    id: 'W-04',
    title: 'Compose / 12',
    meta: 'UI EXPERIMENT / 2024',
    url: 'compose12.tools/grid/07',
    image: '/images/compose-12.png',
    alt: 'Compose / 12のグリッドとタイポグラフィ編集画面',
    description: '12種類のグリッドルールを切り替えながら、タイポグラフィを試せるブラウザツール。',
    stack: 'React / CSS Grid / Zustand',
  },
]

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="group">
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="block">
        <div className="overflow-hidden rounded-md border border-line-strong bg-panel">
          <div className="flex items-center gap-4 border-b border-line px-4 py-2.5">
            <span aria-hidden="true" className="flex gap-1.5">
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
            </span>
            <span className="truncate font-mono text-[10px] text-dim">{work.url}</span>
          </div>
          <div className="relative">
            <Image
              src={work.image || '/placeholder.svg'}
              alt={work.alt}
              width={1280}
              height={800}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-[16/10] h-auto w-full object-cover transition-opacity group-hover:opacity-90"
            />
            <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-[2px] bg-base/90 px-2 py-1 font-mono text-[9px] tracking-[0.08em] text-ink">
              <span aria-hidden="true" className="size-1.5 bg-cyan" />
              LIVE PREVIEW
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-between font-mono text-[9px] tracking-[0.1em]">
          <span className="text-cyan">{work.id}</span>
          <span className="text-dim">{work.meta}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <h3 className="text-[26px] font-medium text-ink transition-colors group-hover:text-cyan">{work.title}</h3>
          <ArrowUpRight className="size-3 text-sub" />
        </div>
        <p className="mt-3 text-[13px] leading-[1.8] text-sub">{work.description}</p>
        <p className="mt-3 font-mono text-[10px] text-dim">{work.stack}</p>
      </a>
    </article>
  )
}

export function Works() {
  const left = WORKS.filter((_, i) => i % 2 === 0)
  const right = WORKS.filter((_, i) => i % 2 === 1)

  return (
    <section id="works" aria-labelledby="works-title" className="scroll-mt-24 border-b border-line bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 lg:py-[120px]">
        <SectionLabel no="03" label="PERSONAL WORKS / LAB" />
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="works-title" className="text-[30px] font-black leading-[1.3] tracking-[0.02em] md:text-[44px]">
            小さくつくり、深く試す。
          </h2>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="font-mono text-[9px] tracking-[0.1em] text-dim">PUBLIC REPOSITORIES / 18</p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-[3px] border border-line-strong px-5 py-3 text-[13px] font-bold text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              GitHubアカウントを見る
              <ArrowUpRight className="size-3 text-cyan" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-x-7">
          <div className="flex flex-col gap-14 md:gap-16">
            {left.map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
          <div className="flex flex-col gap-14 md:mt-16 md:gap-16">
            {right.map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-between font-mono text-[10px] tracking-[0.1em]">
          <span className="text-dim">END OF SELECTED WORKS</span>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">
            {'MORE EXPERIMENTS → GITHUB'}
          </a>
        </div>
      </div>
    </section>
  )
}
