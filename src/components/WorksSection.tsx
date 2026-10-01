import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ExternalLink, Layers, Terminal, Sparkles, ArrowRight, Activity, Cpu } from 'lucide-react';

interface WorksSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'すべての実績' },
    { id: 'nextjs-fullstack', label: 'Next.js & エッジ' },
    { id: 'design-systems', label: 'デザインシステム & a11y' },
    { id: 'webgl-motion', label: 'WebGL & 高速描画' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="works" className="py-20 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Natural editorial title case, no // prefix */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 tracking-wider">
              本番実績 & 技術ケーススタディ
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              主要な開発プロジェクト
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
              各プロジェクトのレンダリング戦略、状態管理の決定理由、Core Web Vitals実測値、および技術的トレードオフを深掘りしています。
            </p>
          </div>

          {/* Interactive filter tabs: Functional buttons with click handlers */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl border border-zinc-800/90 bg-zinc-950 hover:border-zinc-700/80 transition-all duration-300 flex flex-col overflow-hidden ${
                  isFirst ? 'lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                <div className={`grid ${isFirst ? 'lg:grid-cols-12' : 'grid-cols-1'} h-full`}>
                  
                  {/* Visual Asset Container */}
                  <div className={`relative overflow-hidden bg-zinc-900 ${isFirst ? 'lg:col-span-7' : 'h-64'}`}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 min-h-[260px]"
                    />
                    
                    {/* Visual Overlay Scrim for high contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

                    {/* Category overlay */}
                    <div className="absolute top-4 left-4 font-mono text-[11px] text-zinc-300 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-800">
                      {project.categoryLabel}
                    </div>

                    {/* Quick Demo Trigger overlay button */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg backdrop-blur-sm transition-colors shadow-lg"
                    >
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      <span>技術詳細・デモ検証</span>
                    </button>
                  </div>

                  {/* Editorial & Technical Content Container */}
                  <div className={`p-6 sm:p-8 flex flex-col justify-between space-y-6 ${isFirst ? 'lg:col-span-5' : ''}`}>
                    <div className="space-y-4">
                      
                      {/* Zero-Pill Metadata Discipline: Clean unboxed text with typographic separators */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                        <span>{project.role}</span>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span>{project.year}</span>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span>{project.timeline}</span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-zinc-300 mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Technical Key Challenge & Solution Snapshot */}
                      <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2 text-xs">
                        <div className="flex items-start gap-2">
                          <span className="font-mono text-zinc-500 shrink-0">課題:</span>
                          <span className="text-zinc-300">{project.architecture.keyChallenge}</span>
                        </div>
                        <div className="flex items-start gap-2 pt-1 border-t border-zinc-800/60">
                          <span className="font-mono text-cyan-400 shrink-0">解決:</span>
                          <span className="text-zinc-200 font-medium">{project.architecture.solution}</span>
                        </div>
                      </div>

                      {/* Real Benchmarks Display */}
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                            <div className="font-mono text-sm font-bold text-white tabular-nums">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-zinc-400 truncate mt-0.5" title={m.label}>
                              {m.label.split(' ')[0]}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Clean Tech Tags: Unboxed text separated with dots */}
                      <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-zinc-400">
                        {project.tags.map((tag, tIdx) => (
                          <React.Fragment key={tag}>
                            <span className="text-zinc-300">{tag}</span>
                            {tIdx < project.tags.length - 1 && (
                              <span aria-hidden="true" className="text-zinc-600">/</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>アーキテクチャ詳細・コードを見る</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-400 hover:text-white p-1"
                          title="Open live link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
