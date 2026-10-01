import { PortfolioData } from '../types/portfolio';

// Generated image assets
import heroMockupImg from '../assets/images/portfolio_hero_mockup_1790854066778.jpg';
import webglImg from '../assets/images/project_webgl_engine_1790854080753.jpg';
import designSystemImg from '../assets/images/project_design_system_1790854092182.jpg';
import avatarImg from '../assets/images/avatar_engineer_1790854103293.jpg';

export const initialPortfolioData: PortfolioData = {
  personalInfo: {
    name: '木田 拓也',
    englishName: 'Takuya Kida',
    role: 'リードフロントエンドエンジニア / Webパフォーマンス設計',
    tagline: 'Next.js、モダンReact、アクセシブルなデザインシステムによる低遅延Webアーキテクチャの実現',
    bio: '大規模Webサービスのフロントエンド基盤設計、Core Web Vitals改善、および社内デザインシステムのリードを務めるフロントエンドエンジニア。SSR/Streamingアーキテクチャの選定から、ピクセルパーフェクトなインタラクション実装まで一貫して手がけます。',
    location: '東京都 (リモート / ハイブリッド対応)',
    availableForWork: true,
    availabilityText: '2026年Q4案件・技術顧問を受付中',
    email: 'kida.takuya.1234@gmail.com',
    github: 'https://github.com',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
    avatarUrl: avatarImg,
    philosophy: 'デフォルトで高速。堅牢な設計。すべてのユーザーにアクセシブル。'
  },
  heroMetrics: [
    {
      value: '100',
      label: 'Core Web Vitals',
      description: 'LCP 0.72s · INP <16ms · CLS 0.00'
    },
    {
      value: '-58%',
      label: 'バンドル削減実績',
      description: 'RSC移行 & 依存関係のツリーシェイキング'
    },
    {
      value: '10M+',
      label: '本番配信スケール',
      description: '月間1,000万超のアクティブユーザー配信'
    },
    {
      value: '60fps',
      label: '描画パフォーマンス',
      description: 'ジャンクゼロのハードウェア加速UI'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      slug: 'strata-analytics-engine',
      title: 'Strata Cloud Analytics',
      subtitle: 'Next.js 15 App Router & Edge Streaming を駆使したリアルタイム時系列ダッシュボード',
      category: 'nextjs-fullstack',
      categoryLabel: 'Next.js & エッジストリーミング',
      role: 'フロントエンドリード / 基盤設計',
      year: '2026',
      timeline: '6ヶ月',
      summary: '1秒あたり5万件のイベントを視覚化するBtoB SaaS。RSC（React Server Components）とPartial Prerendering（PPR）を活用し、初回ロード時間とデータストリーミングを極限まで高速化。',
      fullDescription: '従来型SPAで課題となっていた初回バンドル肥大化（2.8MB）を、Next.js App RouterとServer Componentsに刷新することで410KBまで削減。リアルタイムWebSocket通信層をWeb Workerへオフロードし、メインスレッドのブロッキング時間を0msに維持しました。',
      thumbnail: heroMockupImg,
      tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Web Workers', 'PPR'],
      featured: true,
      metrics: [
        { label: 'LCP (初回最大描画時間)', value: '0.68s', detail: '刷新前の2.4sから71%短縮' },
        { label: 'INP (操作応答遅延)', value: '14ms', detail: 'Good閾値(200ms)を大幅にクリア' },
        { label: '初回JSペイロード', value: '48.2 kB', detail: 'gzip圧縮後・エッジ配信' }
      ],
      architecture: {
        rendering: 'ハイブリッド: 静的シェル + Edge Streaming PPR (部分事前レンダリング)',
        stateManagement: 'TanStack Query v5 によるサーバーキャッシュ + useOptimistic による楽観的UI更新',
        styling: 'Tailwind CSS v4 (ゼロランタイム)',
        keyChallenge: '数万ポイントのデータポイント再描画時に60fpsを維持しつつ、ユーザーの操作（ソート・フィルタリング）をブロックしないこと。',
        solution: 'Canvas 2DコンテキストとOffscreenCanvasを採用し、データ集約ロジックをDedicated Web Workerでバックグラウンド実行。',
        bundleImpact: 'JSバンドルサイズ -74% (2.8MB -> 720KB 非圧縮比)'
      },
      technicalHighlights: [
        'React 19 Server ActionsとキャッシュタグによるISRライクな選択的再検証',
        'OffscreenCanvasによる重いチャート描画のUIスレッド完全分離',
        'Server-Sent Events (SSE) による差分ストリーミング'
      ],
      codeSnippet: {
        filename: 'src/app/dashboard/analytics-stream.tsx',
        language: 'typescript',
        code: `// Next.js 15 Streaming SSR with Suspense Boundary
import { Suspense } from 'react';
import { MetricsSkeleton } from '@/components/skeletons';
import { RealtimeMetricIsland } from '@/components/islands/metric-island';

export default async function AnalyticsStream({ orgId }: { orgId: string }) {
  // Edge Workerで静的シェルを即座に返却
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Suspense fallback={<MetricsSkeleton count={3} />}>
        <RealtimeMetricIsland 
          streamUrl={\`/api/telemetry/\${orgId}/stream\`} 
          thresholdMs={16}
        />
      </Suspense>
    </div>
  );
}`,
        description: 'Edge Workerで即座にスケルトンシェルを返却し、非同期でデータをChunked Transfer Encodingストリーミングする構成。'
      },
      demoType: 'rendering-comparator',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 'proj-2',
      slug: 'prism-design-system',
      title: 'Prism Design System & Tokens',
      subtitle: '40以上のプロダクト横断で利用されるアクセシブルな次世代コンポーネント基盤',
      category: 'design-systems',
      categoryLabel: 'デザインシステム & a11y',
      role: 'デザインシステム設計リード',
      year: '2025 - 2026',
      timeline: '8ヶ月',
      summary: 'WAI-ARIA APGに完全準拠し、ゼロランタイムのTailwind CSS + CVA（Class Variance Authority）で構成されたマルチブランド対応デザインシステム。',
      fullDescription: 'Figma Tokens（Style Dictionary）からCSSカスタムプロパティを自動生成するCIパイプラインを構築。カラーコントラスト比WCAG AAA検証やキーボードナビゲーションの自動E2Eテスト（Playwright）を導入し、開発組織全体の品質向上に寄与しました。',
      thumbnail: designSystemImg,
      tags: ['Design Tokens', 'Tailwind CSS', 'Radix UI', 'Storybook', 'WCAG AAA', 'CI/CD'],
      featured: true,
      metrics: [
        { label: '登録コンポーネント数', value: '68+', detail: '完全アクセシブルなUIプリミティブ' },
        { label: '社内採用率', value: '94%', detail: '全42リポジトリで順次導入' },
        { label: 'アクセシビリティ監査', value: '100/100', detail: 'Lighthouse & axe-core検証済' }
      ],
      architecture: {
        rendering: 'Radix UI によるHeadlessプリミティブ + ポリモーフィックなReactコンポーネント',
        stateManagement: 'Compound Component パターン (Context API + 非制御デフォルト/制御可能オーバーライド)',
        styling: 'Tailwind CSS + CSSカスタムプロパティ駆動のテーマ設計',
        keyChallenge: 'デザインシステムの更新時に依存プロダクトで予期せぬスタイルの衝突やバンドル肥大化を防ぐこと。',
        solution: 'ツリーシェイキング可能なesm個別エントリと、セマンティックバージョニングによる自動ビジュアルリグレッションテスト。',
        bundleImpact: '個別インポート時 1コンポーネントあたり平均 1.8kB'
      },
      technicalHighlights: [
        'Radix UIコアとFigma Tokens（JSON）を自動同期するCLIツール開発',
        '全コンポーネントにおける厳密なキーボードフォーカス管理とスクリーンリーダーアナウンス',
        'Storybook + Chromatic + Playwrightによる多重ビジュアルリグレッション監視'
      ],
      codeSnippet: {
        filename: 'packages/ui/src/primitives/button.tsx',
        language: 'typescript',
        code: `import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        primary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:scale-[0.98]',
        subtle: 'bg-zinc-900/60 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white',
        destructive: 'bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20',
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
        md: 'h-10 px-4 text-sm rounded-lg gap-2',
        lg: 'h-12 px-6 text-base rounded-xl gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);`,
        description: '型安全なプロパティ定義とTailwind CSSコンフリクト解決を行うCVAプリミティブ。'
      },
      demoType: 'token-studio',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 'proj-3',
      slug: 'chronos-webgl-canvas',
      title: 'Chronos Spatial & WebGL Experience',
      subtitle: 'Three.js / WebGL による滑らかな60fps物理演算とインタラクティブ空間演出',
      category: 'webgl-motion',
      categoryLabel: 'WebGL & 高速描画',
      role: 'クリエイティブデベロッパー / WebGL専門',
      year: '2025',
      timeline: '4ヶ月',
      summary: 'モバイルブラウザでもバッテリー消費を抑えつつ60fpsを維持するカスタムシェーダーとパーティクル物理シミュレーション。',
      fullDescription: 'InstancedMeshを活用して20,000個のパーティクルを1ドローコールでレンダリング。IntersectionObserverによる画面外レンダリング停止（GPUスリープ）や、端末のGPU性能に応じた動的解像度スケーリング（Dynamic DPR）を実装。',
      thumbnail: webglImg,
      tags: ['Three.js', 'GLSL Shaders', 'InstancedMesh', 'Web Audio API', 'Performance'],
      featured: true,
      metrics: [
        { label: '描画フレームレート', value: '60 FPS', detail: 'ローエンド端末でもドロップなし' },
        { label: 'ドローコール数', value: '1 call', detail: 'InstancedMeshによるバッチ描画' },
        { label: 'GPUメモリ消費', value: '<22 MB', detail: 'テクスチャアトラスの徹底圧縮' }
      ],
      architecture: {
        rendering: 'GLSLカスタムシェーダー + Three.js シーングラフ',
        stateManagement: 'requestAnimationFrame ticker ループ + デルタタイムクランプ',
        styling: 'Canvas部分はCSSオーバーヘッドゼロ、UIオーバーレイにTailwind CSS採用',
        keyChallenge: 'モバイル端末における発熱・過度なバッテリー消費を防ぎつつ、滑らかな空間表現を両立すること。',
        solution: 'ユーザーが操作を止めた3秒後にフレームレートを可変落とし（60fps -> 24fps -> 0fps idle）、操作検知で即座に60fpsへ復帰。',
        bundleImpact: 'Three.jsモジュラーインポートにより 120kB gzipに抑制'
      },
      technicalHighlights: [
        'GLSLカスタムシェーダーによるGPU上でのパーティクルベクトル演算',
        'Dynamic Resolution Scalingによるフレームドロップ自動防止アルゴリズム',
        'Web Audio APIと同期した低遅延オーディオリアクティブ処理'
      ],
      codeSnippet: {
        filename: 'src/lib/webgl/adaptive-renderer.ts',
        language: 'typescript',
        code: `// Dynamic DPI & Render Loop Optimization
export class AdaptiveRenderer {
  private lastTime = 0;
  private isIdle = false;

  public render(delta: number) {
    if (this.isIdle) return;
    
    // タブ切り替え時の差分異常値を抑制
    const clampedDelta = Math.min(delta, 0.033);
    this.updateParticles(clampedDelta);
    this.gl.render(this.scene, this.camera);
  }

  public handleUserActivity() {
    this.isIdle = false;
    this.resetIdleTimer();
  }
}`,
        description: 'タブ切り替え時の差分異常値を抑制し、アイドル時のGPUリソースを解放するアダプティブレンダラー。'
      },
      demoType: 'webgl-physics',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com'
    }
  ],
  skills: [
    {
      title: 'フレームワーク & アーキテクチャ',
      description: 'モダンWebにおけるレンダリング戦略と大規模アプリケーション設計',
      skills: [
        { name: 'Next.js 15 / 14 (App Router)', level: 'エキスパート', context: 'RSC, Streaming, Server Actions, PPR' },
        { name: 'React 19 / 18', level: 'エキスパート', context: 'Hooks, Suspense, Concurrent Mode, Compiler' },
        { name: 'TypeScript', level: 'エキスパート', context: '厳格型定義, Generics, AST, 型安全API' },
        { name: 'アーキテクチャ設計', level: 'アドバンスド', context: 'Clean Architecture, FSD, Micro-frontends' }
      ]
    },
    {
      title: 'パフォーマンス & Web Vitals',
      description: 'Lighthouse 100・サブ秒ロード・60fpsを実現する計測と最適化',
      skills: [
        { name: 'Core Web Vitals (LCP/INP/CLS)', level: 'エキスパート', context: 'Chrome DevTools, CrUX, RUM計測' },
        { name: 'バンドル最適化', level: 'エキスパート', context: 'Tree-shaking, Dynamic Imports, Webpack/Vite' },
        { name: 'メインスレッド負荷分散', level: 'アドバンスド', context: 'Web Workers, Comlink, OffscreenCanvas' },
        { name: 'Edge & CDN 配信戦略', level: 'アドバンスド', context: 'Cloudflare Workers, Vercel Edge, Cache-Control' }
      ]
    },
    {
      title: 'スタイリング & デザインシステム',
      description: '保守性とアクセシビリティ（a11y）を両立したUI基盤',
      skills: [
        { name: 'Tailwind CSS v4 / v3', level: 'エキスパート', context: 'Zero runtime, カスタムプラグイン, @theme' },
        { name: 'デザイントークン設計', level: 'エキスパート', context: 'Style Dictionary, Figma Tokens, CSS Variables' },
        { name: 'Radix UI / Headless Primitives', level: 'エキスパート', context: 'WAI-ARIA APG準拠, 完全キーボード操作' },
        { name: 'Framer Motion & アニメーション', level: 'アドバンスド', context: 'GPU加速, レイアウトアニメーション' }
      ]
    },
    {
      title: 'テスト & 開発者体験 (DX)',
      description: '継続的インテグレーションと品質担保の自動化',
      skills: [
        { name: 'Playwright & E2Eテスト', level: 'アドバンスド', context: 'クロスブラウザ, ビジュアルリグレッション' },
        { name: 'Vitest / Testing Library', level: 'エキスパート', context: 'ユニット・統合テスト, Mock Service Worker' },
        { name: 'CI/CD & モノレポ運用', level: 'アドバンスド', context: 'Turborepo, GitHub Actions, Changesets' },
        { name: 'Storybook & Chromatic', level: 'エキスパート', context: 'ドキュメント自動生成, コンポーネント駆動' }
      ]
    }
  ],
  experiences: [
    {
      company: 'テック企業 (例: ユーザー設定可能)',
      role: 'スタッフフロントエンドエンジニア / Webアーキテクト',
      period: '2024年 - 現在',
      location: '東京都 (ハイブリッド)',
      description: '全社共通フロントエンド基盤の技術選定およびデザインシステム開発をリード。30名規模の開発チームにおけるパフォーマンス標準化を推進。',
      highlights: [
        'Next.js App Router移行プロジェクトを統括し、全プロダクトのCore Web Vitals Pass率を48%から96%へ向上',
        'Design System推進により、新規機能のUI開発速度を約35%短縮',
        '月間1,000万PVのメディア基盤においてSSRレンダリングコストを40%削減'
      ],
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Playwright', 'Turborepo']
    },
    {
      company: 'フィンテック企業 (例: ユーザー設定可能)',
      role: 'シニアフロントエンド開発者',
      period: '2022年 - 2024年',
      location: '東京都 (フルリモート)',
      description: 'リアルタイム金融資産管理プラットフォームのフロントエンド開発を担当。マイクロ秒精度のWebSocketデータ更新とチャート描画を最適化。',
      highlights: [
        'Web Workerを用いた時系列データ差分計算パイプラインを設計し、メインスレッド負荷を大幅低減',
        'アクセシビリティ刷新プロジェクトを主導し、全画面でWCAG 2.1 AAを達成',
        'Storybookを用いたコンポーネントカタログとE2Eテスト網を構築'
      ],
      technologies: ['React', 'TypeScript', 'TanStack Query', 'Chart.js', 'Canvas 2D', 'Jest']
    }
  ]
};

const STORAGE_KEY = 'custom_frontend_portfolio_data_v1';

export function getStoredPortfolioData(): PortfolioData {
  if (typeof window === 'undefined') return initialPortfolioData;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialPortfolioData;
    const parsed = JSON.parse(raw);
    return {
      ...initialPortfolioData,
      ...parsed,
      personalInfo: {
        ...initialPortfolioData.personalInfo,
        ...(parsed.personalInfo || {})
      }
    };
  } catch {
    return initialPortfolioData;
  }
}

export function saveStoredPortfolioData(data: PortfolioData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save portfolio data to localStorage', err);
  }
}

export function resetStoredPortfolioData(): PortfolioData {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return initialPortfolioData;
}
