import React, { useState } from 'react';
import { PortfolioData, Project } from '../types/portfolio';
import { X, Save, RotateCcw, Download, Copy, Check, Plus, Trash2, Edit3, Eye } from 'lucide-react';

interface PortfolioConfigModalProps {
  isOpen: boolean;
  data: PortfolioData;
  onClose: () => void;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const PortfolioConfigModal: React.FC<PortfolioConfigModalProps> = ({
  isOpen,
  data,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'export'>('profile');
  const [copiedExport, setCopiedExport] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleProfileChange = (key: keyof PortfolioData['personalInfo'], value: any) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [key]: value,
      },
    }));
  };

  const handleProjectUpdate = (projectId: string, field: keyof Project, value: any) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(p => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          [field]: value,
        };
      }),
    }));
  };

  const handleProjectArchitectureUpdate = (projectId: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.map(p => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          architecture: {
            ...p.architecture,
            [field]: value,
          },
        };
      }),
    }));
  };

  const handleAddProject = () => {
    const newId = `proj-${Date.now()}`;
    const newProj: Project = {
      id: newId,
      slug: `new-project-${Date.now()}`,
      title: 'New Featured Project',
      subtitle: 'Next.js 15 & Modern Web Architecture',
      category: 'nextjs-fullstack',
      categoryLabel: 'Next.js & Edge',
      role: 'Frontend Architect',
      year: '2026',
      timeline: '3 months',
      summary: 'プロジェクトの概要と解決した課題をここに記述します。',
      fullDescription: 'アーキテクチャの背景と導入した技術スタックの詳細。',
      thumbnail: formData.projects[0]?.thumbnail || '',
      tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
      featured: true,
      metrics: [
        { label: 'LCP', value: '0.7s', detail: 'サブ秒レンダリング' },
        { label: 'INP', value: '12ms', detail: '超低遅延インタラクション' },
        { label: 'Bundle', value: '38kB', detail: 'gzip圧縮後' },
      ],
      architecture: {
        rendering: 'Next.js App Router + Streaming SSR',
        stateManagement: 'TanStack Query + Zustand',
        styling: 'Tailwind CSS v4',
        keyChallenge: '大量のリアルタイムデータと低遅延UIの両立。',
        solution: 'Web Workerによるバックグラウンド計算と仮想化リストの採用。',
        bundleImpact: 'JSペイロード -60%',
      },
      technicalHighlights: [
        'React Server Componentsによるゼロバンドル化',
        'Partial Prerenderingによる静的シェル高速配信',
      ],
      codeSnippet: {
        filename: 'src/app/example.tsx',
        language: 'typescript',
        code: `export default function Page() {\n  return <div>Custom Implementation</div>;\n}`,
        description: 'カスタム実装コードの説明',
      },
      demoType: 'rendering-comparator',
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
    };

    setFormData(prev => ({
      ...prev,
      projects: [newProj, ...prev.projects],
    }));
    setEditingProjectId(newId);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('このプロジェクトを削除しますか？')) {
      setFormData(prev => ({
        ...prev,
        projects: prev.projects.filter(p => p.id !== id),
      }));
    }
  };

  const handleSaveAndApply = () => {
    onSave(formData);
    onClose();
  };

  const handleCopyExportCode = () => {
    const code = `import { PortfolioData } from '../types/portfolio';\n\nexport const initialPortfolioData: PortfolioData = ${JSON.stringify(
      formData,
      null,
      2
    )};`;
    navigator.clipboard.writeText(code);
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  const handleDownloadTS = () => {
    const code = `import { PortfolioData } from '../types/portfolio';\n\nexport const initialPortfolioData: PortfolioData = ${JSON.stringify(
      formData,
      null,
      2
    )};\n`;
    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolioData.ts';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl rounded-2xl border border-zinc-800 bg-[#09090b] text-zinc-100 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>ポートフォリオ設定スタジオ (Customize Studio)</span>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Live Config
              </span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              プロフィール、作品一覧、技術詳細を自由にカスタマイズし、即座に画面へ反映できます。
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 px-6 border-b border-zinc-800 bg-zinc-900/50">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            基本プロフィール
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'projects'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            作品・プロジェクト ({formData.projects.length})
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors ${
              activeTab === 'export'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            データ書き出し / Export
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">お名前 (Japanese Name)</label>
                  <input
                    type="text"
                    value={formData.personalInfo.name}
                    onChange={e => handleProfileChange('name', e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">ローマ字表記 (English Name)</label>
                  <input
                    type="text"
                    value={formData.personalInfo.englishName}
                    onChange={e => handleProfileChange('englishName', e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-mono text-zinc-400">肩書・専門領域 (Role / Specialization)</label>
                  <input
                    type="text"
                    value={formData.personalInfo.role}
                    onChange={e => handleProfileChange('role', e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-mono text-zinc-400">自己紹介文 (Bio Summary)</label>
                  <textarea
                    rows={3}
                    value={formData.personalInfo.bio}
                    onChange={e => handleProfileChange('bio', e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">連絡先メールアドレス (Email)</label>
                  <input
                    type="email"
                    value={formData.personalInfo.email}
                    onChange={e => handleProfileChange('email', e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">活動拠点 (Location)</label>
                  <input
                    type="text"
                    value={formData.personalInfo.location}
                    onChange={e => handleProfileChange('location', e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-mono text-zinc-400">開発哲学 (Core Engineering Philosophy)</label>
                  <input
                    type="text"
                    value={formData.personalInfo.philosophy}
                    onChange={e => handleProfileChange('philosophy', e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">
                  登録済み作品数: {formData.projects.length}件
                </span>
                <button
                  onClick={handleAddProject}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors font-mono"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>新規作品を追加</span>
                </button>
              </div>

              <div className="space-y-4">
                {formData.projects.map((proj, pIdx) => {
                  const isEditing = editingProjectId === proj.id;
                  return (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-zinc-500">#{pIdx + 1}</span>
                          <span className="text-sm font-bold text-white">{proj.title}</span>
                          <span className="text-xs font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                            {proj.categoryLabel}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingProjectId(isEditing ? null : proj.id)}
                            className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800"
                            title="詳細を編集"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            className="p-1.5 text-rose-400 hover:text-rose-300 rounded hover:bg-zinc-800"
                            title="削除"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Summary preview */}
                      <p className="text-xs text-zinc-400">
                        {proj.subtitle}
                      </p>

                      {/* Expandable Project Edit Form */}
                      {isEditing && (
                        <div className="pt-3 border-t border-zinc-800 space-y-4 text-xs font-mono">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-zinc-500">プロジェクト名</label>
                              <input
                                type="text"
                                value={proj.title}
                                onChange={e => handleProjectUpdate(proj.id, 'title', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-white"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-zinc-500">カテゴリラベル</label>
                              <input
                                type="text"
                                value={proj.categoryLabel}
                                onChange={e => handleProjectUpdate(proj.id, 'categoryLabel', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-white"
                              />
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                              <label className="text-zinc-500">サブタイトル / 技術的要約</label>
                              <input
                                type="text"
                                value={proj.subtitle}
                                onChange={e => handleProjectUpdate(proj.id, 'subtitle', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-white"
                              />
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                              <label className="text-zinc-500">技術的課題 (Bottleneck)</label>
                              <input
                                type="text"
                                value={proj.architecture.keyChallenge}
                                onChange={e => handleProjectArchitectureUpdate(proj.id, 'keyChallenge', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-white"
                              />
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                              <label className="text-zinc-500">解決策 (Architectural Solution)</label>
                              <input
                                type="text"
                                value={proj.architecture.solution}
                                onChange={e => handleProjectArchitectureUpdate(proj.id, 'solution', e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-white"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Export Tab */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <div className="text-xs font-mono text-cyan-400 font-semibold">
                  TypeScript 設定ファイルの書き出し
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  ここで編集した内容はブラウザのローカルストレージに自動保存されますが、リポジトリにコミットするために <code className="text-zinc-200">src/data/portfolioData.ts</code> として直接ダウンロードまたはクリップボードにコピーできます。
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={handleDownloadTS}
                    className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors font-mono"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>portfolioData.ts をダウンロード</span>
                  </button>

                  <button
                    onClick={handleCopyExportCode}
                    className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors font-mono"
                  >
                    {copiedExport ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>TypeScript コードをコピー</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              if (confirm('初期デモデータにリセットしますか？')) {
                onReset();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-rose-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>初期状態に戻す (Reset)</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              キャンセル
            </button>
            <button
              onClick={handleSaveAndApply}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors font-mono shadow-sm"
            >
              <Save className="w-3.5 h-3.5" />
              <span>変更を保存して反映 (Apply Changes)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
