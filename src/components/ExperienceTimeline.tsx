import React from 'react';
import { Experience } from '../types/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 tracking-wider">
            職歴 & 開発実績
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            フロントエンド職務経歴
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            プロダクトの技術負債解消、アーキテクチャ刷新、および開発速度の向上に寄与した職務経歴です。
          </p>
        </div>

        {/* Timeline items */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:border-zinc-700/80 transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-850 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-cyan-400 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                {/* Zero-Pill Metadata */}
                <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono text-zinc-400 tracking-wider">
                  主要な技術的成果・組織貢献
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies unboxed list */}
              <div className="pt-3 border-t border-zinc-850 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="text-zinc-500">使用技術:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tech} className="text-zinc-300">
                    {tech}{tIdx < exp.technologies.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
