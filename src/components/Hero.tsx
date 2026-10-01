import React from 'react';
import { ArrowRight, Code2, Cpu, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { PersonalInfo, HeroMetric } from '../types/portfolio';

interface HeroProps {
  personalInfo: PersonalInfo;
  heroMetrics: HeroMetric[];
  onOpenConfig: () => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, heroMetrics, onOpenConfig }) => {
  const [activeTab, setActiveTab] = React.useState<'pipeline' | 'vitals'>('pipeline');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-zinc-800/60 bg-grid-pattern">
      {/* Subtle radial ambient gradient (subdued, <10% accent) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status / Availability line: Clean unboxed metadata with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {personalInfo.availabilityText}
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{personalInfo.location}</span>
            </div>

            {/* Primary Headline with text-wrap: balance */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
                低遅延なWeb体験とスケーラブルなUIアーキテクチャの探求。
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
                {personalInfo.bio}
              </p>
            </div>

            {/* Key Engineering Philosophy */}
            <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800/80 font-mono text-xs text-zinc-400 flex items-center gap-3">
              <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                <span className="text-zinc-500">開発指針: </span>
                <span className="text-zinc-200">「{personalInfo.philosophy}」</span>
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all shadow-sm active:scale-[0.98]"
              >
                <span>制作実績を見る</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#lab"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>技術ラボを試す</span>
              </a>

              <button
                onClick={onOpenConfig}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 underline underline-offset-4 transition-colors"
              >
                <span>[作品・経歴を編集する]</span>
              </button>
            </div>

            {/* Claim-to-Proof Adjacency: Quantitative Metrics */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-zinc-300">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 leading-tight">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Architectural Pipeline Visualizer & Terminal Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/60">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">
                    arch-inspector.config.ts
                  </span>
                </div>
                
                {/* Mode toggle */}
                <div className="flex items-center gap-1 bg-zinc-950 p-0.5 rounded-md border border-zinc-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'pipeline'
                        ? 'bg-zinc-800 text-cyan-300'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    パイプライン
                  </button>
                  <button
                    onClick={() => setActiveTab('vitals')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'vitals'
                        ? 'bg-zinc-800 text-cyan-300'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    Web Vitals実測値
                  </button>
                </div>
              </div>

              {/* Terminal Viewport Content */}
              <div className="p-5 font-mono text-xs space-y-4">
                {activeTab === 'pipeline' ? (
                  <div className="space-y-3">
                    <div className="text-zinc-500">
                      // Next.js 15 Streaming SSR + Edge Runtime
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                        <span className="text-cyan-400 font-bold">01.</span>
                        <div className="space-y-0.5">
                          <div className="text-zinc-200 font-semibold flex items-center gap-2">
                            <span>Edge Route Handler</span>
                            <span className="text-[10px] text-emerald-400 font-normal">TTFB 22ms</span>
                          </div>
                          <div className="text-zinc-400 text-[11px]">
                            CDNキャッシュ + Geo-routed KVストアで静的シェル即座返却
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                        <span className="text-cyan-400 font-bold">02.</span>
                        <div className="space-y-0.5">
                          <div className="text-zinc-200 font-semibold flex items-center gap-2">
                            <span>React Server Component (RSC)</span>
                            <span className="text-[10px] text-cyan-400 font-normal">Zero-Bundle</span>
                          </div>
                          <div className="text-zinc-400 text-[11px]">
                            ヘビーなパーサーやマークダウン処理をサーバー側で完全完結
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                        <span className="text-cyan-400 font-bold">03.</span>
                        <div className="space-y-0.5">
                          <div className="text-zinc-200 font-semibold flex items-center gap-2">
                            <span>Selective Island Hydration</span>
                            <span className="text-[10px] text-amber-400 font-normal">INP &lt;16ms</span>
                          </div>
                          <div className="text-zinc-400 text-[11px]">
                            インタラクティブなUIのみを部分ハイドレーション（useIdle/useInView）
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 border-t border-zinc-800">
                      <span>稼働ステータス: 最適化完了</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        本番運用水準
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-zinc-500">
                      // 実環境ユーザー計測 (RUM) & ラボベンチマーク
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-zinc-300">
                      <div className="p-2.5 rounded bg-zinc-900/70 border border-zinc-800">
                        <div className="text-zinc-500 text-[10px]">LCP (目標 &lt;2.5s)</div>
                        <div className="text-emerald-400 text-lg font-bold">0.68s</div>
                        <div className="text-[10px] text-zinc-400">実ユーザー P95値</div>
                      </div>
                      <div className="p-2.5 rounded bg-zinc-900/70 border border-zinc-800">
                        <div className="text-zinc-500 text-[10px]">INP (目標 &lt;200ms)</div>
                        <div className="text-emerald-400 text-lg font-bold">14ms</div>
                        <div className="text-[10px] text-zinc-400">メインスレッド待機 0ms</div>
                      </div>
                      <div className="p-2.5 rounded bg-zinc-900/70 border border-zinc-800">
                        <div className="text-zinc-500 text-[10px]">CLS (目標 &lt;0.10)</div>
                        <div className="text-emerald-400 text-lg font-bold">0.000</div>
                        <div className="text-[10px] text-zinc-400">レイアウトズレ完全ゼロ</div>
                      </div>
                      <div className="p-2.5 rounded bg-zinc-900/70 border border-zinc-800">
                        <div className="text-zinc-500 text-[10px]">JS ランタイムバンドル</div>
                        <div className="text-cyan-400 text-lg font-bold">48.2 kB</div>
                        <div className="text-[10px] text-zinc-400">gzip圧縮・Tree-shake済</div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-zinc-900/40 text-[11px] text-zinc-400">
                      すべてのCore Web Vitals指標（LCP/INP/CLS）においてGoogleの「良好（Good）」基準を余裕をもって達成。
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom decorative bar */}
              <div className="px-4 py-2 border-t border-zinc-800/80 bg-zinc-950 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  SPA Performance: 60 FPS
                </span>
                <span>TypeScript 5.x · React 19</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
