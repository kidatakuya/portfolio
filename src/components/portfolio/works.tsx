import Image from 'next/image'
import { ArrowUpRight, SectionLabel } from './section-label'

type Work = {
  id: string
  title: string
  meta: string
  url: string
  image?: string
  alt?: string
  description: string
  stack?: string
}

const WORKS: Work[] = [
  {
    id: 'W-01',
    title: 'なんとコーン 農園サイト',
    meta: 'AGRICULTURE WEBSITE / 2026',
    url: 'https://nantocorn.vercel.app/',
    image: '/images/nantocorn.png',
    alt: '夕暮れのとうもろこし畑を大きく見せる農園サイトのトップページ',
    description:
      'とうもろこし・玉ねぎ農家のWebサイト。Next.jsのSSGでページを生成し、microCMSの記事公開をWebhook経由でVercelの再デプロイにつなげ、更新内容をサイトに反映します。',
    stack: 'Next.js / microCMS / SSG / Vercel Webhook',
  },
  {
    id: 'W-02',
    title: 'Nawate',
    meta: 'CROP MANAGEMENT / 2026',
    url: 'https://nawate.vercel.app/',
    description: 'プロジェクトを作成し、作物ごとの状態を一つひとつ管理できるサービス。',
  },
]

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="group">
      <a href={work.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="overflow-hidden rounded-md border border-line-strong bg-panel">
          <div className="flex items-center gap-4 border-b border-line px-4 py-2.5">
            <span aria-hidden="true" className="flex gap-1.5">
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
            </span>
            <span className="truncate font-mono text-[10px] text-dim">{work.url}</span>
          </div>
          {work.image ? (
            <div className="relative">
              <Image
                src={work.image}
                alt={work.alt ?? ''}
                width={1280}
                height={800}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[16/10] h-auto w-full object-cover transition-opacity group-hover:opacity-90"
              />
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-[2px] bg-base/90 px-2 py-1 font-mono text-[9px] tracking-[0.08em] text-ink">
                <span aria-hidden="true" className="size-1.5 bg-cyan" />
                VISIT SITE
              </span>
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="flex aspect-[16/10] flex-col items-center justify-center bg-panel px-6 text-center transition-colors group-hover:bg-base"
            >
              <span className="font-mono text-[10px] tracking-[0.18em] text-cyan">CROP MANAGEMENT</span>
              <span className="mt-4 text-4xl font-semibold tracking-wide text-ink">Nawate</span>
              <span className="mt-3 text-[13px] text-sub">作物の状態を、ひとつずつ。</span>
            </div>
          )}
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
        {work.stack && <p className="mt-3 font-mono text-[10px] text-dim">{work.stack}</p>}
      </a>
    </article>
  )
}

export function Works() {
  return (
    <section id="works" aria-labelledby="works-title" className="scroll-mt-24 border-b border-line bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 lg:py-[120px]">
        <SectionLabel no="03" label="PERSONAL PROJECT / WEB" />
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="works-title" className="text-[30px] font-black leading-[1.3] tracking-[0.02em] md:text-[44px]">
            農の現場を支えるプロダクト。
          </h2>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="font-mono text-[9px] tracking-[0.1em] text-dim">PERSONAL PROJECTS / 02</p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-14">
          {WORKS.map((w) => (
            <WorkCard key={w.id} work={w} />
          ))}
        </div>

        <div className="mt-16 flex justify-between font-mono text-[10px] tracking-[0.1em]">
          <span className="text-dim">END OF PERSONAL PROJECTS</span>
          <span className="text-cyan">02 / 02</span>
        </div>
      </div>
    </section>
  )
}
