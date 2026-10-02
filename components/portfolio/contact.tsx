import { EMAIL } from '@/lib/site'
import { ArrowUpRight, SectionLabel } from './section-label'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 border-b border-line bg-base">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 md:px-10 lg:grid-cols-[1fr_275px] lg:items-end lg:py-[120px]">
        <div>
          <SectionLabel no="04" label="CONTACT / NEXT COMMIT" />
          <h2
            id="contact-title"
            className="mt-5 text-[34px] font-black leading-[1.3] tracking-[0.02em] md:text-[56px]"
          >
            次のプロダクトを、
            <br />
            一緒に前へ。
          </h2>
          <p className="mt-8 max-w-[520px] text-[15px] leading-[1.9] text-sub">
            フロントエンド開発、UI基盤づくり、パフォーマンス改善のご相談を受け付けています。まずは課題の背景からお聞かせください。
          </p>
        </div>

        <div>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-[3px] bg-cyan px-6 py-4 text-[14px] font-bold text-base transition-opacity hover:opacity-90"
          >
            メールで連絡する
            <ArrowUpRight />
          </a>
          <div className="mt-8 flex justify-between gap-4 border-b border-line pb-3 font-mono text-[10px]">
            <span className="tracking-[0.1em] text-dim">EMAIL</span>
            <a href={`mailto:${EMAIL}`} className="text-sub hover:text-ink">
              {EMAIL}
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 rounded-[3px] bg-cyan-deep px-4 py-3 text-[11px] text-cyan">
            <span aria-hidden="true" className="size-1.5 bg-cyan" />
            通常2営業日以内に返信します
          </p>
        </div>
      </div>
    </section>
  )
}
