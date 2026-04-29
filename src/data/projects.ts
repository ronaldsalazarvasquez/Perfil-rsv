import projectsData from './projects.json';

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  problem?: string;
  solution?: string;
  scope?: string;
  impact: string;
  category?: string;
  tags: string[];
  image: string;
  gallery?: ProjectMedia[];
  demoLink: string | null;
  features?: string[];
}

export const projects: ProjectData[] = projectsData as ProjectData[];
