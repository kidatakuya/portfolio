import { ArrowUpRight, SectionLabel } from './section-label'

const PROJECTS = [
  {
    id: 'P-01',
    period: '2025.04 — 2026.03',
    category: 'B2B / OPERATIONS',
    title: '業務オペレーション管理画面の刷新',
    tags: ['React', 'TypeScript', 'TanStack Query', 'Storybook'],
    summary:
      '増改築を重ねた管理画面を、利用頻度と業務フローから再構成。段階的な移行を前提に、共通コンポーネントと画面テンプレートを整備しました。',
    scope: 'フロントエンド設計 / UI実装 / テスト基盤 / コードレビュー',
    outcome: '主要操作の完了時間を28%短縮。画面追加時の実装工数を約40%削減。',
  },
  {
    id: 'P-02',
    period: '2024.08 — 2025.03',
    category: 'DESIGN SYSTEM',
    title: 'プロダクト横断UI基盤の立ち上げ',
    tags: ['React', 'CSS Variables', 'Storybook', 'Chromatic'],
    summary:
      '3つのWebプロダクトで異なっていたUI実装を棚卸しし、トークン・コンポーネント・ドキュメントを段階的に統合しました。',
    scope: '技術選定 / コンポーネント実装 / Figma連携 / 導入支援',
    outcome: '重複実装を削減し、アクセシビリティ監査の基準適合率を72%から96%へ改善。',
  },
  {
    id: 'P-03',
    period: '2023.10 — 2024.07',
    category: 'MEDIA / PERFORMANCE',
    title: 'コンテンツサイトの表示速度改善',
    tags: ['Next.js', 'Web Vitals', 'Cloudflare', 'Playwright'],
    summary:
      '配信経路・画像・JavaScriptの実行コストを計測し、Core Web Vitalsを指標に優先順位をつけて改善を実施しました。',
    scope: '計測設計 / Next.js実装 / CDN最適化 / モニタリング',
    outcome: 'LCPを3.8秒から1.9秒へ改善。検索流入後の直帰率を相対11%低減。',
  },
]

const CAPABILITIES = ['要件整理', 'UI ARCHITECTURE', 'ACCESSIBILITY', 'PERFORMANCE', 'TESTING', 'TEAM ENABLEMENT']

export function Projects() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24 border-b border-line bg-base">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 lg:py-[120px]">
        <SectionLabel no="02" label="EXPERIENCE / SELECTED PROJECTS" />
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="experience-title"
            className="max-w-[720px] text-[30px] font-black leading-[1.35] tracking-[0.02em] md:text-[44px]"
          >
            事業の前進を支える、実務の設計と実装。
          </h2>
          <div className="lg:w-[225px]">
            <p className="font-mono text-[9px] tracking-[0.1em] text-dim">SELECTED ENGAGEMENTS</p>
            <p className="mt-2 font-mono text-[26px] font-medium text-ink">03 PROJECTS</p>
            <p className="mt-2 text-[10px] text-dim">守秘義務に配慮した架空のサンプル実績です。</p>
          </div>
        </div>

        <ol className="mt-14 border-t border-line-strong">
          {PROJECTS.map((p) => (
            <li
              key={p.id}
              className="grid gap-6 border-b border-line-strong py-10 md:grid-cols-[60px_1fr] lg:grid-cols-[72px_1fr_260px_1fr] lg:gap-8"
            >
              <p className="font-mono text-[11px] font-bold text-cyan">{p.id}</p>

              <div>
                <p className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.06em]">
                  <span className="text-dim">{p.period}</span>
                  <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
                  <span className="text-cyan">{p.category}</span>
                </p>
                <h3 className="mt-4 text-[20px] font-bold leading-[1.5] text-ink md:text-[22px]">{p.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-[2px] bg-panel px-2.5 py-1 font-mono text-[10px] text-sub">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[13px] leading-[1.9] text-sub md:col-start-2 lg:col-start-auto">{p.summary}</p>

              <div className="md:col-start-2 lg:col-start-auto">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.1em] text-dim">担当 / SCOPE</p>
                    <p className="mt-2 text-[12px] text-sub">{p.scope}</p>
                  </div>
                  <ArrowUpRight className="size-3 shrink-0 text-dim" />
                </div>
                <div className="mt-5 border-l-2 border-cyan pl-4">
                  <p className="font-mono text-[9px] tracking-[0.1em] text-cyan">成果 / OUTCOME</p>
                  <p className="mt-2 text-[13px] font-bold leading-[1.75] text-ink">{p.outcome}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-mono text-[10px] tracking-[0.08em]">
          <span className="text-dim">{'CAPABILITIES //'}</span>
          {CAPABILITIES.map((c) => (
            <span key={c} className="text-sub">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
