import React from 'react';
import { Layers, Zap, ShieldCheck, Cpu, Code2, ArrowRight } from 'lucide-react';

export const ArchitectureDeepDive: React.FC = () => {
  return (
    <section id="architecture" className="py-20 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>設計思想 & アーキテクチャ原則</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            フロントエンド設計指針
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            保守性、開発速度、そしてCore Web Vitalsの完全達成を両立するために採用している中核的な技術指針です。
          </p>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 flex flex-col justify-between space-y-4 hover:border-zinc-700/80 transition-colors">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400">01. ストリーミング & PPR</div>
              <h3 className="text-base font-bold text-white">
                部分事前レンダリング (PPR)
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                静的ヘッダーやレイアウトをEdgeから即時（TTFB &lt;30ms）返却し、動的データのみをReact Suspense境界経由でHTTPチャンクストリーミング。初期描画遅延を根絶します。
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
              Next.js 15 · Edge Runtime · RSC
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 flex flex-col justify-between space-y-4 hover:border-zinc-700/80 transition-colors">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400">02. パフォーマンスバジェット</div>
              <h3 className="text-base font-bold text-white">
                メインスレッド負荷の最小化
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                50msを超えるLong Tasksを排除。`scheduler.yield()`による協調的マルチタスキング、Web Workerによる重い差分計算の退避でINP &lt;16msを保証します。
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
              INP 最適化 · Web Workers
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 flex flex-col justify-between space-y-4 hover:border-zinc-700/80 transition-colors">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400">03. デザイントークン & A11Y</div>
              <h3 className="text-base font-bold text-white">
                ゼロランタイムスタイリング
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                CSS-in-JSのランタイムオーバーヘッドを廃止し、Tailwind CSS v4とCSSカスタムプロパティを融合。WAI-ARIA APGに完全準拠したアクセシブルなトークン駆動UI。
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
              Tailwind CSS · Radix Primitives
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 flex flex-col justify-between space-y-4 hover:border-zinc-700/80 transition-colors">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400">04. 品質ゲート自動化</div>
              <h3 className="text-base font-bold text-white">
                多層テスト & ビジュアルリグレッション
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                PlaywrightによるE2E・ビジュアルリグレッションテスト、およびaxe-coreによるa11y自動検査をCIパイプラインで自動化し、品質低下を未然に防止。
              </p>
            </div>
            <div className="pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
              Playwright · Vitest · axe-core
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
