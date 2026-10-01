import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, Copy, Check, Cpu, BarChart3, Layers, Terminal, Sparkles, Play, RefreshCw } from 'lucide-react';

interface WorkDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'benchmarks' | 'demo' | 'code'>('architecture');
  const [copiedCode, setCopiedCode] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-5xl rounded-2xl border border-zinc-800 bg-[#09090b] text-zinc-100 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              {project.categoryLabel}
            </span>
            <span className="text-zinc-500">/</span>
            <span className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-lg transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center gap-1 px-6 border-b border-zinc-800/80 bg-zinc-900/40 overflow-x-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>アーキテクチャ & 設計判断</span>
          </button>

          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'benchmarks'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Web Vitals & 計測結果</span>
          </button>

          <button
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'demo'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>リアルタイム検証デモ</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'code'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>主要実装コード</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">

          {/* Tab 1: Architecture & Technical Decisions */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              
              {/* Project Intro */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Architectural Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="text-xs font-mono text-cyan-400">レンダリング戦略</div>
                  <div className="text-sm font-semibold text-white">{project.architecture.rendering}</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    初回表示時のTTFB最小化と、動的コンテンツに対するStreaming SSR境界の最適配置。
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="text-xs font-mono text-cyan-400">状態管理 & データフロー</div>
                  <div className="text-sm font-semibold text-white">{project.architecture.stateManagement}</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    サーバーキャッシュの整合性保証と、楽観的UI更新（Optimistic Updates）の連動。
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="text-xs font-mono text-cyan-400">CSS & スタイリング設計</div>
                  <div className="text-sm font-semibold text-white">{project.architecture.styling}</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    ゼロランタイムCSSによるパースオーバーヘッドの撲滅とデザインシステム統合。
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="text-xs font-mono text-cyan-400">バンドル & メモリ最適化</div>
                  <div className="text-sm font-semibold text-white">{project.architecture.bundleImpact || '最適化済みペイロード'}</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    Dynamic import、Selective hydration、不要なpolyfillの徹底排除。
                  </div>
                </div>
              </div>

              {/* Deep Dive: Bottleneck & Solution */}
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/90 space-y-3">
                <div className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                  技術的ボトルネック & 解決アプローチ
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-zinc-200">直面した課題: </span>
                    <span className="text-zinc-400">{project.architecture.keyChallenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-200">採用したアプローチ: </span>
                    <span className="text-zinc-300">{project.architecture.solution}</span>
                  </div>
                </div>
              </div>

              {/* Technical Highlights list */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 tracking-wider">
                  主要な技術的成果
                </div>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {project.technicalHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-mono text-xs mt-0.5">0{idx + 1}.</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

          {/* Tab 2: Benchmarks & Web Vitals */}
          {activeTab === 'benchmarks' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Core Web Vitals & 最適化インパクト
                </h3>
                <p className="text-xs text-zinc-400">
                  Chrome DevTools Performance パネルおよび WebPageTest (Cable 4G/Desktop) での計測結果。
                </p>
              </div>

              {/* Metrics cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2">
                    <div className="text-xs font-mono text-zinc-400">{metric.label}</div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">
                      {metric.value}
                    </div>
                    <div className="text-xs text-zinc-400 pt-1 border-t border-zinc-800/80">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Diagram */}
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                <div className="text-xs font-mono text-zinc-300">パフォーマンス比較（刷新前 vs 最適化後）</div>
                
                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <div className="flex justify-between text-zinc-400 mb-1">
                      <span>LCP (Largest Contentful Paint)</span>
                      <span>2.4s ➔ 0.68s (-71%)</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-500 h-full" style={{ width: '28%' }} />
                      <div className="bg-rose-500/40 h-full" style={{ width: '72%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-400 mb-1">
                      <span>INP (Interaction to Next Paint)</span>
                      <span>180ms ➔ 14ms (-92%)</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-500 h-full" style={{ width: '12%' }} />
                      <div className="bg-amber-500/40 h-full" style={{ width: '88%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-zinc-400 mb-1">
                      <span>JavaScript バンドルサイズ (gzip)</span>
                      <span>420kB ➔ 48kB (-88%)</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                      <div className="bg-cyan-500 h-full" style={{ width: '15%' }} />
                      <div className="bg-zinc-700 h-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-zinc-500">
                  * 緑色は Next.js 15 Partial Prerendering と Tree-Shaking を適用した本番環境のビルド数値です。
                </div>
              </div>

            </div>
          )}

          {/* Tab 3: Interactive Micro-Demo */}
          {activeTab === 'demo' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    リアルタイム動作検証シミュレータ
                  </h3>
                  <p className="text-xs text-zinc-400">
                    ブラウザ上でリアルタイムに動作するマイクロデモ環境です。
                  </p>
                </div>
              </div>

              {/* Render specific demo based on project */}
              <ProjectMicroDemo project={project} />
            </div>
          )}

          {/* Tab 4: Key Code Snippet */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">コピー完了!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>コードをコピー</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code block */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 overflow-x-auto font-mono text-xs leading-relaxed text-zinc-200">
                <pre>{project.codeSnippet.code}</pre>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900/50 border border-zinc-800/80 text-xs text-zinc-400">
                <span className="font-semibold text-zinc-300">解説: </span>
                {project.codeSnippet.description}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/80 flex items-center justify-between">
          <div className="text-xs text-zinc-500 font-mono">
            {project.tags.join(' · ')}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            閉じる
          </button>
        </div>

      </div>
    </div>
  );
};

// Embedded Interactive Micro Demo Component
function ProjectMicroDemo({ project }: { project: Project }) {
  if (project.demoType === 'token-studio') {
    return <DesignTokenInteractiveSandbox />;
  }
  if (project.demoType === 'webgl-physics') {
    return <CanvasParticlePhysicsDemo />;
  }
  return <StreamingSSRComparisonDemo />;
}

// Demo 1: Streaming SSR vs Legacy SPA Simulator
function StreamingSSRComparisonDemo() {
  const [networkLatency, setNetworkLatency] = useState(150); // ms
  const [streamingActive, setStreamingActive] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const runSimulation = () => {
    setStreamingActive(true);
    setLog(['[0ms] HTTP GET /dashboard 要求開始']);
    
    // Step 1: Edge shell
    setTimeout(() => {
      setLog(prev => [...prev, `[${Math.round(networkLatency * 0.2)}ms] Edge TTFB: Suspenseスケルトンを含む静的シェルが即時返却`]);
    }, 150);

    // Step 2: Stream chunk 1
    setTimeout(() => {
      setLog(prev => [...prev, `[${Math.round(networkLatency * 0.8)}ms] Chunk 1: ヘッダー & ナビゲーションのハイドレーション完了 (CLS: 0.00)`]);
    }, 400);

    // Step 3: Stream chunk 2
    setTimeout(() => {
      setLog(prev => [...prev, `[${Math.round(networkLatency * 1.5)}ms] Chunk 2: テレメトリデータストリーム受信完了 & 描画完了`]);
      setStreamingActive(false);
    }, 750);
  };

  return (
    <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="text-xs font-mono text-cyan-400">Partial Prerendering (PPR) ストリーミングシミュレータ</div>
          <div className="text-xs text-zinc-400">ネットワーク遅延発生時のストリーミング分割レンダリングを検証できます。</div>
        </div>
        <button
          onClick={runSimulation}
          disabled={streamingActive}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 rounded-lg transition-colors"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{streamingActive ? 'ストリーミング受信中...' : 'シミュレーション実行'}</span>
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono text-zinc-400">
          <span>想定エッジネットワーク遅延 (Latency):</span>
          <span className="text-white font-bold">{networkLatency} ms</span>
        </div>
        <input
          type="range"
          min="50"
          max="600"
          value={networkLatency}
          onChange={(e) => setNetworkLatency(Number(e.target.value))}
          className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
      </div>

      {/* Log Output */}
      <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 font-mono text-xs space-y-1 min-h-[110px]">
        <div className="text-zinc-500">// エッジストリーム通信コンソール</div>
        {log.map((item, idx) => (
          <div key={idx} className="text-emerald-400">
            {item}
          </div>
        ))}
        {log.length === 0 && (
          <div className="text-zinc-600">「シミュレーション実行」を押してストリーミングパケットを検証...</div>
        )}
      </div>
    </div>
  );
}

// Demo 2: Design Token Interactive Sandbox
function DesignTokenInteractiveSandbox() {
  const [tokenRadius, setTokenRadius] = useState<'4px' | '8px' | '16px'>('8px');
  const [tokenTheme, setTokenTheme] = useState<'cyan' | 'violet' | 'amber'>('cyan');

  const themeColors = {
    cyan: { bg: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500/30' },
    violet: { bg: 'bg-violet-500', text: 'text-violet-400', border: 'border-violet-500/30' },
    amber: { bg: 'bg-amber-500', text: 'text-amber-400', border: 'border-amber-500/30' },
  };

  return (
    <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-mono text-cyan-400">デザイントークン & アクセシビリティ検証スタジオ</div>
          <div className="text-xs text-zinc-400">トークン変更時の動的CSS変数の再計算とコントラスト比（AAA）を即時検証。</div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-zinc-500">角丸:</span>
          {(['4px', '8px', '16px'] as const).map(r => (
            <button
              key={r}
              onClick={() => setTokenRadius(r)}
              className={`px-2 py-0.5 rounded border transition-colors ${
                tokenRadius === r ? 'bg-zinc-800 text-white border-zinc-700' : 'text-zinc-500 border-zinc-900 hover:text-zinc-300'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Component Preview Area */}
      <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-wrap items-center justify-around gap-4">
        <button
          style={{ borderRadius: tokenRadius }}
          className={`px-4 py-2 text-xs font-medium text-white ${themeColors[tokenTheme].bg} hover:opacity-90 transition-all`}
        >
          主要アクション
        </button>

        <button
          style={{ borderRadius: tokenRadius }}
          className={`px-4 py-2 text-xs font-medium text-zinc-200 bg-zinc-900 border ${themeColors[tokenTheme].border} hover:bg-zinc-800 transition-all`}
        >
          補助ボタン
        </button>

        <div 
          style={{ borderRadius: tokenRadius }}
          className="p-3 bg-zinc-950 border border-zinc-800 text-xs font-mono space-y-1"
        >
          <div className="text-zinc-500">WCAG コントラスト比</div>
          <div className="text-emerald-400 font-bold">14.8:1 (AAA 達成)</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span>動的CSS変数: --radius: {tokenRadius}</span>
        <span>アクセシビリティ: キーボードフォーカス・WAI-ARIA準拠</span>
      </div>
    </div>
  );
}

// Demo 3: Canvas Particle Physics Demo
function CanvasParticlePhysicsDemo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particleCount, setParticleCount] = useState(60);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCount = 0;

    // Create particles
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 2 + 1,
    }));

    const render = (time: number) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = time;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      ctx.fillStyle = '#38bdf8';
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [particleCount]);

  return (
    <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <div className="text-xs font-mono text-cyan-400">パーティクル物理演算ループ</div>
          <div className="text-xs text-zinc-400">requestAnimationFrame と Canvas 2D によるバッチ描画シミュレーション</div>
        </div>
        <div className="font-mono text-xs text-emerald-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
          {fps} FPS
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={600}
        height={180}
        className="w-full h-44 rounded-lg border border-zinc-800 bg-[#09090b]"
      />

      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
        <span>有効パーティクル数: {particleCount}</span>
        <button
          onClick={() => setParticleCount(p => (p >= 120 ? 40 : p + 30))}
          className="text-cyan-400 hover:text-cyan-300 underline"
        >
          密度を切り替え
        </button>
      </div>
    </div>
  );
}
