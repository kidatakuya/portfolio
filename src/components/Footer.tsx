import React from 'react';
import { PersonalInfo } from '../types/portfolio';
import { Github, Twitter, Linkedin, Mail, ArrowUp, Settings } from 'lucide-react';

interface FooterProps {
  personalInfo: PersonalInfo;
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ personalInfo, onOpenConfig }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] py-12 text-zinc-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-white">
              {personalInfo.name} ({personalInfo.englishName})
            </div>
            <p className="text-zinc-500 max-w-md">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="X Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors p-1"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} {personalInfo.name} ({personalInfo.englishName}). All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenConfig}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <Settings className="w-3 h-3" />
              <span>作品・プロフィール設定</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span>Next.js & React 19 アーキテクチャ準拠</span>
            <button
              onClick={scrollToTop}
              className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>トップへ戻る</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
