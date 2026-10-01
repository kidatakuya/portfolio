/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  getStoredPortfolioData, 
  saveStoredPortfolioData, 
  resetStoredPortfolioData 
} from './data/portfolioData';
import { PortfolioData, Project } from './types/portfolio';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorksSection } from './components/WorksSection';
import { ArchitectureDeepDive } from './components/ArchitectureDeepDive';
import { InteractiveLab } from './components/InteractiveLab';
import { TechnicalStack } from './components/TechnicalStack';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Footer } from './components/Footer';
import { WorkDetailModal } from './components/WorkDetailModal';
import { PortfolioConfigModal } from './components/PortfolioConfigModal';
import { PerformanceHUD } from './components/PerformanceHUD';

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(getStoredPortfolioData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const handleSaveData = (newData: PortfolioData) => {
    setPortfolioData(newData);
    saveStoredPortfolioData(newData);
  };

  const handleResetData = () => {
    const defaultData = resetStoredPortfolioData();
    setPortfolioData(defaultData);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* 3-Zone Top Navigation Bar */}
      <Header
        personalInfo={portfolioData.personalInfo}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Claim-to-Proof Adjacency & Architecture Visualizer */}
        <Hero
          personalInfo={portfolioData.personalInfo}
          heroMetrics={portfolioData.heroMetrics}
          onOpenConfig={() => setIsConfigOpen(true)}
        />

        {/* Selected Works (Bento Grid + Zero-Pill Metadata) */}
        <WorksSection
          projects={portfolioData.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Technical Architecture Principles & Playbook */}
        <ArchitectureDeepDive />

        {/* Interactive Engineering Lab (100k Virtualization, Next.js Matrix, Web Vitals) */}
        <InteractiveLab />

        {/* Technical Stack & Ecosystem Competencies */}
        <TechnicalStack skillCategories={portfolioData.skills} />

        {/* Career Experience & Quantitative Track Record */}
        <ExperienceTimeline experiences={portfolioData.experiences} />
      </main>

      {/* Footer */}
      <Footer
        personalInfo={portfolioData.personalInfo}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Technical Case Study Deep-Dive Modal */}
      <WorkDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* User In-App Portfolio Customizer & Data Exporter */}
      <PortfolioConfigModal
        isOpen={isConfigOpen}
        data={portfolioData}
        onClose={() => setIsConfigOpen(false)}
        onSave={handleSaveData}
        onReset={handleResetData}
      />

      {/* Live Client Telemetry & FPS HUD */}
      <PerformanceHUD />
    </div>
  );
}
