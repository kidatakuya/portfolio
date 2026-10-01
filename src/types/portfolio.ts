export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectArchitecture {
  rendering: string;
  stateManagement: string;
  styling: string;
  keyChallenge: string;
  solution: string;
  bundleImpact?: string;
}

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'nextjs-fullstack' | 'perf-architecture' | 'design-systems' | 'webgl-motion';
  categoryLabel: string;
  role: string;
  year: string;
  timeline: string;
  summary: string;
  fullDescription: string;
  thumbnail: string;
  tags: string[];
  featured: boolean;
  metrics: ProjectMetric[];
  architecture: ProjectArchitecture;
  technicalHighlights: string[];
  codeSnippet: CodeSnippet;
  demoType: 'rendering-comparator' | 'token-studio' | 'webgl-physics' | 'state-machine';
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface HeroMetric {
  value: string;
  label: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  englishName: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  availableForWork: boolean;
  availabilityText: string;
  email: string;
  github: string;
  twitter: string;
  linkedin: string;
  avatarUrl: string;
  philosophy: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  heroMetrics: HeroMetric[];
  projects: Project[];
  skills: SkillCategory[];
  experiences: Experience[];
}
