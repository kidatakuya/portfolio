import React from 'react';
import { SkillCategory } from '../types/portfolio';
import { Check, Code2, Cpu, Sparkles, Layers } from 'lucide-react';

interface TechnicalStackProps {
  skillCategories: SkillCategory[];
}

export const TechnicalStack: React.FC<TechnicalStackProps> = ({ skillCategories }) => {
  return (
    <section id="skills" className="py-20 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 tracking-wider">
            技術領域 & エコシステム
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            フロントエンド技術スタック & ツール群
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            プロダクション開発において実践してきたフロントエンド技術領域と、それぞれの適用文脈です。
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/70 hover:border-zinc-700/80 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Natural editorial indexing */}
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-zinc-500">
                    0{index + 1}. 技術領域
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    本番実績あり
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills list */}
                <div className="space-y-2.5 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-850 hover:bg-zinc-900/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{skill.name}</span>
                        </div>
                        <div className="text-[11px] text-zinc-400 pl-5">
                          {skill.context}
                        </div>
                      </div>

                      <div className="font-mono text-[11px] text-zinc-400 self-end sm:self-center pl-5 sm:pl-0">
                        {skill.level}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
