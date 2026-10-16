import { SectionLabel } from './section-label'

type Project = {
  title: string
  period: string
  tags: string[]
  description: string
}

type Employment = {
  company: string
  period: string
  role: string
  summary: string
  projects: Project[]
}

const EMPLOYMENTS: Employment[] = [
  {
    company: '株式会社トライビート',
    period: '2023.10 — 2026.09',
    role: 'フロントエンドエンジニア',
    summary:
      'React・Next.jsを中心としたWebアプリケーションやサイトの開発・保守を担当。要件に応じてCSR・SSR・Server Componentsを使い分け、TypeScriptのLint・型定義ルールに準拠した実装と、再利用性の高いUI設計に取り組みました。',
    projects: [
      {
        title: '主要Webアプリの開発・保守',
        period: '2023.10 — 2026.09',
        tags: ['React', 'Next.js', 'TypeScript', 'useMemo'],
        description:
          'CSRを中心に、通信など必要な箇所ではサーバーサイド処理を活用。大量データを扱う座席表画面で、useMemoによる表示ロジックのメモ化を行い、不要な再計算と再レンダリングの負荷を抑えて表示遅延・操作性を改善しました。',
      },
      {
        title: 'LPサイトの制作・更新',
        period: '2024.04 — 2024.05',
        tags: ['HTML5', 'CSS', 'JavaScript'],
        description:
          '新人エンジニアにHTML構造化、CSS命名規則、画像最適化の方針を共有。特定端末で発生したブラウザクラッシュについて、低スペック端末でのCSSレンダリング負荷によるメモリ圧迫を特定し、スタイルを見直して解消しました。',
      },
      {
        title: '自社コーポレートサイトのリニューアル',
        period: '2025.06 — 2025.09',
        tags: ['Nuxt.js', 'TypeScript', 'HTML5', 'CSS'],
        description:
          'メンバーとして技術選定から参画。チームの技術要件に合わせてNuxt.jsを選定し、サイトのリニューアルを実施しました。',
      },
      {
        title: 'モビリティショーのLP制作・更新',
        period: '期間記載なし',
        tags: ['HTML5', 'CSS', 'JavaScript'],
        description:
          'タイトなスケジュールの中でチームと連携して制作を進行し、イベント期間中の更新作業にも対応。イベント運用をトラブルなく遂行しました。',
      },
      {
        title: '航空会社のサービス予約サイト制作',
        period: '2025.09 — 2026.09',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        description:
          '一部項目をサーバー側で処理する構成を取り入れ、Server Componentsを活用した予約サイトの設計・実装を担当しました。',
      },
      {
        title: 'モビリティショーLPの外部委託対応',
        period: '2026.02 — 2026.09',
        tags: ['Astro', 'HTML5', 'CSS', 'JavaScript'],
        description:
          '委託先がAstro環境で直接開発できない制約に対し、共通ナビゲーションを独立したJavaScriptモジュールとしてビルドし、レイアウトテンプレートと合わせて提供する方式を提案・構築しました。',
      },
    ],
  },
  {
    company: '株式会社電通プロモーションエグゼ',
    period: '2022.04 — 2023.09',
    role: 'プログラマー',
    summary:
      '立ち上げ直後の第一期メンバーとしてテクニカルチームに参画し、大手飲料・食品メーカーなどのLP・商品サイト制作と運用更新を担当。Vanilla JavaScriptによるスクラッチのアニメーション実装、短納期から長期まで複数案件の並行対応、マークアップ品質の維持に取り組みました。',
    projects: [
      {
        title: '大手食品メーカーのLP制作・更新（1ページ）',
        period: '2022.05 — 2022.11',
        tags: ['HTML5', 'CSS', 'JavaScript'],
        description:
          'LPの制作・更新を担当。デザイナーの要望に合わせ、Vanilla JavaScriptでアニメーションや動的な表現を実装しました。',
      },
      {
        title: '詳細不明案件',
        period: '2022.06 — 2022.08',
        tags: [],
        description: '案件の詳細情報は未記載です。',
      },
      {
        title: 'グルメイベントのLP制作・更新',
        period: '数日',
        tags: ['HTML5', 'CSS', 'JavaScript'],
        description:
          '短期間の制作・更新案件に対応。複数案件を並行しながら、コーディング品質を保って進行しました。',
      },
      {
        title: '大手飲料メーカーのLP制作',
        period: '数日',
        tags: ['HTML5', 'CSS', 'JavaScript'],
        description:
          '短納期のLP制作に対応。Vanilla JavaScriptを用いたフロントエンド実装を担当しました。',
      },
      {
        title: '飲料メーカーの商品サイト制作',
        period: '約1週間',
        tags: ['HTML5', 'CSS', 'JavaScript'],
        description:
          '商品サイトの制作に対応。デザイン要件に沿った実装と表示品質の維持に取り組みました。',
      },
      {
        title: 'イベントLP制作',
        period: '約1週間',
        tags: ['HTML5', 'CSS', 'JavaScript'],
        description:
          'イベント向けLPを制作。短いスケジュールに合わせて実装を進めました。',
      },
      {
        title: '商社メーカーの仮想サイト制作・更新',
        period: '約6ヶ月〜1年（時期詳細不明）',
        tags: ['HTML5', 'CSS', 'JavaScript'],
        description:
          '半年以上にわたる可能性のある制作・更新案件を担当。短納期案件と並行しながら継続的に対応しました。',
      },
    ],
  },
  {
    company: '瓜生製作株式会社',
    period: '2016.04 — 2018.10',
    role: '機械加工職',
    summary:
      '奈良工場にて約2年半、電動ドリルなどのパワーツール向けアルミ部品の製造に従事。図面の読み取りから加工プログラムの理解、CNC旋盤の操作まで一貫して担当しました。',
    projects: [
      {
        title: 'パワーツール向けアルミ部品のCNC加工・最終仕上げ',
        period: '2016.04 — 2018.10',
        tags: ['CNC旋盤', '精密加工', '品質管理'],
        description:
          '焼き入れ処理後の最終仕上げ工程を担当。ミクロン単位の精度が求められる部品に対して、緻密な機械操作と効率的な段取り、安全確認を徹底し、不良品の防止と製品の品質担保・安定供給に貢献しました。',
      },
    ],
  },
]

const CAPABILITIES = [
  'REACT / NEXT.JS',
  'TYPESCRIPT',
  'CSR / SSR',
  'UI IMPLEMENTATION',
  'PERFORMANCE',
  'TEAM DEVELOPMENT',
]

const PROJECT_COUNT = EMPLOYMENTS.reduce(
  (total, employment) => total + employment.projects.length,
  0,
)

export function Projects() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24 border-b border-line bg-base">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 lg:py-[120px]">
        <SectionLabel no="02" label="EXPERIENCE / CAREER" />
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="experience-title"
            className="max-w-[720px] text-[30px] font-black leading-[1.35] tracking-[0.02em] md:text-[44px]"
          >
            会社ごとの経験と、現場で向き合った課題。
          </h2>
          <div className="lg:w-[225px]">
            <p className="font-mono text-[9px] tracking-[0.1em] text-dim">CAREER HISTORY</p>
            <p className="mt-2 font-mono text-[26px] font-medium text-ink">
              {EMPLOYMENTS.length} COMPANIES
            </p>
            <p className="mt-2 text-[10px] text-dim">
              {PROJECT_COUNT}件の担当案件を掲載しています。
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-16">
          {EMPLOYMENTS.map((employment, employmentIndex) => (
            <section
              key={employment.company}
              aria-labelledby={`company-${employmentIndex}`}
              className="border-t border-line-strong pt-8"
            >
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-cyan">
                    EMPLOYMENT / {String(employmentIndex + 1).padStart(2, '0')}
                  </p>
                  <h3
                    id={`company-${employmentIndex}`}
                    className="mt-3 text-[24px] font-bold leading-[1.5] text-ink md:text-[30px]"
                  >
                    {employment.company}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium text-sub">{employment.role}</p>
                </div>
                <p className="font-mono text-[11px] tracking-[0.06em] text-dim">
                  在籍期間：{employment.period}
                </p>
              </div>

              <p className="mt-6 max-w-[900px] text-[13px] leading-[1.9] text-sub">
                {employment.summary}
              </p>

              <ol className="mt-8 divide-y divide-line border-y border-line">
                {employment.projects.map((project, projectIndex) => (
                  <li
                    key={`${employment.company}-${project.title}`}
                    className="grid gap-3 py-6 md:grid-cols-[52px_1fr_auto] md:items-start md:gap-6"
                  >
                    <p className="font-mono text-[10px] font-bold text-cyan">
                      {String(projectIndex + 1).padStart(2, '0')}
                    </p>
                    <div>
                      <h4 className="text-[16px] font-bold leading-[1.6] text-ink">
                        {project.title}
                      </h4>
                      <p className="mt-2 text-[12px] leading-[1.9] text-sub">
                        {project.description}
                      </p>
                      {project.tags.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-[2px] bg-panel px-2.5 py-1 font-mono text-[10px] text-sub"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <p className="font-mono text-[10px] tracking-[0.04em] text-dim md:text-right">
                      {project.period}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-mono text-[10px] tracking-[0.08em]">
          <span className="text-dim">{'CAPABILITIES //'}</span>
          {CAPABILITIES.map((capability) => (
            <span key={capability} className="text-sub">
              {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
