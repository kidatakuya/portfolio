import React from "react";
import { Settings, ArrowUpRight, Menu, X } from "lucide-react";
import { PersonalInfo } from "../types/portfolio";

interface HeaderProps {
  personalInfo: PersonalInfo;
  onOpenConfig: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  personalInfo,
  onOpenConfig,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#09090b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark (Top Bar Contract) */}
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-zinc-100 hover:text-white transition-colors"
        >
          {personalInfo.name}{" "}
          <span className="text-zinc-500 font-mono text-xs font-normal">
            / エンドエンジニア
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <a href="#works" className="hover:text-zinc-100 transition-colors">
            制作実績
          </a>
          <a
            href="#architecture"
            className="hover:text-zinc-100 transition-colors"
          >
            設計指針
          </a>
          <a href="#lab" className="hover:text-zinc-100 transition-colors">
            技術ラボ
          </a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">
            技術スタック
          </a>
          <a
            href="#experience"
            className="hover:text-zinc-100 transition-colors"
          >
            職務経歴
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConfig}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors whitespace-nowrap"
            title="ポートフォリオ設定・作品情報のカスタマイズ"
          >
            <Settings className="w-3.5 h-3.5 text-cyan-400" />
            <span>作品・データ設定</span>
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-colors whitespace-nowrap font-medium"
          >
            <span>お問い合わせ</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white"
            aria-label="ナビゲーションメニューを開閉"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#09090b] px-4 py-4 space-y-3">
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            制作実績
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            設計指針
          </a>
          <a
            href="#lab"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            技術ラボ
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            技術スタック
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            職務経歴
          </a>
          <div className="pt-2 border-t border-zinc-800 flex justify-between items-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs text-cyan-400 font-medium"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
