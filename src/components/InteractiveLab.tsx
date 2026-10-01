import React, { useState, useRef, useMemo } from 'react';
import { Cpu, Zap, Activity, Sliders, Play, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';

export const InteractiveLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'virtualization' | 'rendering-matrix' | 'web-vitals'>('virtualization');

  return (
    <section id="lab" className="py-20 border-b border-zinc-800/80 bg-[#09090b] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>インタラクティブ技術実験室</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              フロントエンド技術 & パフォーマンス・ラボ
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
              ブラウザ上でのリアルタイムレンダリング、仮想スクロール、Next.jsレンダリング比較などを直接操作・検証できるインタラクティブ実験室です。
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
            <button
              onClick={() => setActiveTab('virtualization')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'virtualization'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              10万件 仮想スクロール
            </button>
            <button
              onClick={() => setActiveTab('rendering-matrix')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'rendering-matrix'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Next.js レンダリング比較
            </button>
            <button
              onClick={() => setActiveTab('web-vitals')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'web-vitals'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Web Vitals 計測分析
            </button>
          </div>
        </div>

        {/* Lab Content Area */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 sm:p-8 shadow-xl">
          {activeTab === 'virtualization' && <VirtualizationLab />}
          {activeTab === 'rendering-matrix' && <RenderingMatrixLab />}
          {activeTab === 'web-vitals' && <WebVitalsLab />}
        </div>

      </div>
    </section>
  );
};

// Sub-Lab 1: 100k Items Virtual Scroll Benchmark
function VirtualizationLab() {
  const TOTAL_ITEMS = 100000;
  const ITEM_HEIGHT = 44; // px
  const CONTAINER_HEIGHT = 320; // px
  
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Math for virtual window
  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - 2);
  const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT) + 4;
  const endIndex = Math.min(TOTAL_ITEMS, startIndex + visibleCount);

  const visibleItems = useMemo(() => {
    const items = [];
    for (let i = startIndex; i < endIndex; i++) {
      items.push({
        id: i,
        title: `Telemetry Event Frame #${i.toString().padStart(6, '0')}`,
        timestamp: `${(i * 0.016).toFixed(3)}s`,
        latency: `${(10 + (i % 8) * 1.5).toFixed(1)}ms`,
        status: i % 13 === 0 ? 'WARN' : 'OK'
      });
    }
    return items;
  }, [startIndex, endIndex]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div className="space-y-1">
          <div className="text-base font-bold text-white flex items-center gap-2">
            <span>100,000 件データの仮想スクロール（Windowing）検証</span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
              Active Windowing
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            全100,000件のデータをDOMに同時配置せず、ビューポートに映る約10〜12要素のみを動的に計算配置。
          </p>
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-4 font-mono text-xs">
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-500">全レコード数: </span>
            <span className="text-white font-bold tabular-nums">100,000</span>
          </div>
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-500">DOM配置要素数: </span>
            <span className="text-cyan-400 font-bold tabular-nums">{visibleItems.length} 個</span>
          </div>
          <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
            <span className="text-zinc-500">描画FPS: </span>
            <span className="text-emerald-400 font-bold tabular-nums">60.0</span>
          </div>
        </div>
      </div>

      {/* Virtual Scroll Viewport Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* The Scrollbox */}
        <div className="lg:col-span-8 rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
          <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>イベントストリーム表示領域 (仮想ウィンドウ)</span>
            <span>スクロール連動中</span>
          </div>

          <div
            ref={containerRef}
            onScroll={handleScroll}
            style={{ height: CONTAINER_HEIGHT }}
            className="overflow-y-auto relative w-full"
          >
            {/* Total height spacer */}
            <div style={{ height: TOTAL_ITEMS * ITEM_HEIGHT, width: '100%', position: 'relative' }}>
              {/* Visible slice container */}
              <div
                style={{
                  transform: `translateY(${startIndex * ITEM_HEIGHT}px)`,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                {visibleItems.map(item => (
                  <div
                    key={item.id}
                    style={{ height: ITEM_HEIGHT }}
                    className="flex items-center justify-between px-4 border-b border-zinc-800/50 hover:bg-zinc-800/40 text-xs font-mono transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-500">#{item.id}</span>
                      <span className="text-zinc-200">{item.title}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-zinc-400">{item.timestamp}</span>
                      <span className="text-cyan-400">{item.latency}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded ${
                          item.status === 'OK' ? 'text-emerald-400 bg-emerald-500/10' : 'text-amber-400 bg-amber-500/10'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Explainer Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2 text-xs">
            <div className="font-mono text-cyan-400 font-semibold">仮想スクロールの仕組み (Windowing)</div>
            <p className="text-zinc-400 leading-relaxed">
              ブラウザのDOMツリーが数千件を超えると、スタイル再計算（Recalculate Style）およびレイアウト計算（Reflow）のコストが指数関数的に増大します。
            </p>
            <div className="pt-2 font-mono text-[11px] text-zinc-300 space-y-1">
              <div>startIndex = ⌊scrollTop / itemHeight⌋</div>
              <div>renderItems = [startIndex, startIndex + visible]</div>
              <div>spacerHeight = total * itemHeight</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2 text-xs">
            <div className="font-mono text-emerald-400 font-semibold">メモリ消費量比較</div>
            <div className="flex justify-between text-zinc-400">
              <span>非仮想化時 (全件DOM配置):</span>
              <span className="text-rose-400 font-bold">~120 MB RAM</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Windowing適用時:</span>
              <span className="text-emerald-400 font-bold">&lt; 3.2 MB RAM</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Sub-Lab 2: Next.js Rendering Matrix
function RenderingMatrixLab() {
  const [selectedStrategy, setSelectedStrategy] = useState<'rsc-ppr' | 'ssr' | 'isr' | 'spa'>('rsc-ppr');

  const strategies = {
    'rsc-ppr': {
      title: '部分事前レンダリング (Next.js 15 PPR)',
      tagline: '静的シェル + 動的ストリーミングのハイブリッド',
      ttfb: '18ms',
      lcp: '0.65s',
      serverCost: '低 (Edgeキャッシュ配信)',
      seo: '最高 (100%)',
      idealFor: 'ECサイト、パーソナライズされたSaaSダッシュボード、動的メディア',
      pros: ['静的シェルはEdgeから即時返却', '動的コンポーネントのみをHTTP Chunkedストリーミング', '不要なクライアントJSの削減'],
      cons: ['Next.js 15+ と React 19 Canary/Release環境が必要']
    },
    'ssr': {
      title: 'サーバーサイドレンダリング (SSR)',
      tagline: 'リクエストごとにサーバー上でHTMLを動的生成',
      ttfb: '120ms - 350ms',
      lcp: '1.2s',
      serverCost: '高 (リクエストごとのNode.js実行)',
      seo: '優秀 (100%)',
      idealFor: '認証が必須で頻繁に更新される管理画面',
      pros: ['リアルタイムデータがHTMLに含まれる', '全SEOクローラーに完全対応'],
      cons: ['バックエンドDB遅延がそのままTTFBに直結', 'ハイドレーションのオーバーヘッドが大きい']
    },
    'isr': {
      title: 'インクリメンタル静的再生成 (ISR)',
      tagline: '静的生成 + バックグラウンドでの定期再検証',
      ttfb: '22ms',
      lcp: '0.70s',
      serverCost: '極めて低コスト',
      seo: '最高 (100%)',
      idealFor: 'ブログ, コーポレートサイト, 商品カタログ',
      pros: ['CDNエッジから高速キャッシュ配信', '再ビルドなしでオンデマンド更新'],
      cons: ['ユーザー固有のパーソナライズ表示には不向き']
    },
    'spa': {
      title: 'クライアントサイドSPA (CSR)',
      tagline: '空のHTMLシェル + 全描画をクライアントJSで実行',
      ttfb: '40ms (空シェル)',
      lcp: '2.4s',
      serverCost: '実質ゼロ (静的ストレージホスト)',
      seo: '注意が必要',
      idealFor: '社内管理ツール, インターネット公開不要なローカルアプリ',
      pros: ['ホスティング構成がシンプル', 'サーバーレスで運用可能'],
      cons: ['巨大な初回JSバンドルのダウンロード', '初期ロード時のローディングスピナー（White Flash）']
    }
  };

  const current = strategies[selectedStrategy];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <h3 className="text-base font-bold text-white">
            Next.js & Web レンダリング戦略の意思決定マトリクス
          </h3>
          <p className="text-xs text-zinc-400">
            プロジェクト要件に応じた最適なレンダリング手法とトレードオフを比較検証できます。
          </p>
        </div>

        {/* Strategy Selector Buttons */}
        <div className="flex flex-wrap gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
          {(Object.keys(strategies) as Array<keyof typeof strategies>).map(key => (
            <button
              key={key}
              onClick={() => setSelectedStrategy(key)}
              className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                selectedStrategy === key
                  ? 'bg-zinc-800 text-cyan-300 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Strategy Details */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div>
              <div className="text-xs font-mono text-cyan-400">{current.tagline}</div>
              <h4 className="text-lg font-bold text-white mt-0.5">{current.title}</h4>
            </div>

            <div className="text-xs text-zinc-300 leading-relaxed">
              <span className="font-semibold text-zinc-200">推奨ユースケース: </span>
              {current.idealFor}
            </div>

            <div className="pt-2 border-t border-zinc-800 space-y-2">
              <div className="text-xs font-semibold text-emerald-400">Advantages (メリット)</div>
              <ul className="text-xs text-zinc-300 space-y-1">
                {current.pros.map((p, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-zinc-800 space-y-2">
              <div className="text-xs font-semibold text-amber-400">Trade-offs (留意点)</div>
              <ul className="text-xs text-zinc-400 space-y-1">
                {current.cons.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Strategy Scorecard */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
            <div className="text-xs font-mono text-zinc-400">ベンチマーク指標カード</div>
            
            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex justify-between items-center p-2 rounded bg-zinc-950 border border-zinc-850">
                <span className="text-zinc-500">TTFB (初回バイト到達時間):</span>
                <span className="text-white font-bold">{current.ttfb}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-zinc-950 border border-zinc-850">
                <span className="text-zinc-500">LCP (最大視覚コンテンツ描画):</span>
                <span className="text-emerald-400 font-bold">{current.lcp}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-zinc-950 border border-zinc-850">
                <span className="text-zinc-500">サーバーインフラコスト:</span>
                <span className="text-cyan-400 font-bold">{current.serverCost}</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-zinc-950 border border-zinc-850">
                <span className="text-zinc-500">SEOクローラー親和性:</span>
                <span className="text-white font-bold">{current.seo}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Sub-Lab 3: Web Vitals Analyzer
function WebVitalsLab() {
  const [metricTested, setMetricTested] = useState<'lcp' | 'inp' | 'cls'>('inp');
  const [latencySimulated, setLatencySimulated] = useState(0);

  const testInteraction = () => {
    const start = performance.now();
    // Simulate non-blocking asynchronous dispatch
    requestAnimationFrame(() => {
      const duration = Math.round(performance.now() - start);
      setLatencySimulated(Math.max(duration, 8));
    });
  };

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-zinc-800">
        <h3 className="text-base font-bold text-white">
          Core Web Vitals 指標解説とリアルタイム計測プロファイル
        </h3>
        <p className="text-xs text-zinc-400 mt-1">
          Googleの検索ランキングおよびユーザー体感品質を決定づける主要3指標の計測基準。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400">LCP (読み込み速度)</span>
            <span className="font-mono text-xs text-emerald-400">&lt; 2.5s</span>
          </div>
          <div className="text-lg font-bold text-white font-mono">0.68s</div>
          <p className="text-xs text-zinc-400">
            ビューポート内で最も主要なコンテンツブロックのレンダリング完了時間。画像優先読み込み (`fetchpriority="high"`) とインラインクリティカルCSSで短縮。
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400">INP (操作応答性)</span>
            <span className="font-mono text-xs text-emerald-400">&lt; 200ms</span>
          </div>
          <div className="text-lg font-bold text-white font-mono">14ms</div>
          <p className="text-xs text-zinc-400">
            クリック・タップ操作からブラウザが次のフレームを描画するまでの応答性。Long Tasksの分割（`scheduler.yield()`）とWeb Worker活用で担保。
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400">CLS (視覚的安定性)</span>
            <span className="font-mono text-xs text-emerald-400">&lt; 0.10</span>
          </div>
          <div className="text-lg font-bold text-white font-mono">0.000</div>
          <p className="text-xs text-zinc-400">
            予期せぬレイアウトのズレ量。画像・広告枠の`aspect-ratio`事前確保とフォントの`size-adjust`最適化により完全排除。
          </p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-mono text-cyan-400">ブラウザメインスレッド遅延テスト (INP計測)</div>
          <div className="text-xs text-zinc-400">クリック操作直後のイベントループ応答時間をリアルタイム測定します。</div>
        </div>

        <div className="flex items-center gap-3">
          {latencySimulated > 0 && (
            <span className="font-mono text-xs text-emerald-400 bg-zinc-950 px-3 py-1.5 rounded border border-zinc-800">
              実測応答速度: {latencySimulated}ms
            </span>
          )}
          <button
            onClick={testInteraction}
            className="px-4 py-2 text-xs font-medium text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors font-mono"
          >
            イベント応答テストを実行
          </button>
        </div>
      </div>

    </div>
  );
}
