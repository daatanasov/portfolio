import {StaticImageData} from 'next/image';
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type Experience = {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  link: string | null; // URL for live project or GitHub
}

export interface Education {
  id: number;
  educationalInstitutions: string;
  city: string;
  description: string;
  yearStart: number;
  yearEnd: number | string;
  specilization: string;
}

type TechnologyLevel = 'Beginner' | 'Intermediate' | 'Advanced';
type LanguageLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native';

interface Technology {
  name: string;
  level: TechnologyLevel | LanguageLevel;
}

export interface Technologies {
  [category: string]: Technology[];
}
type ProjectStatus = 'Live' | 'InProgress' | 'Not Deployed';
type ProjectCreation = 'Team' | 'Solo';

interface BaseProject {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  projectStatus: ProjectStatus;
  projectCreation: ProjectCreation;
}

interface LiveProject extends BaseProject {
  projectStatus: 'Live';
  link: string; // Required when projectStatus is "Live"
}

interface InProgressOrNotDeployedProject extends BaseProject {
  projectStatus: 'InProgress' | 'Not Deployed';
  link?: never; // Disallow link for these statuses
}

interface PrivateProject extends BaseProject {
  gitRepoStatus: 'Private';
  gitLink?: never; // Explicitly disallow `gitLink`
}

interface PublicProject extends BaseProject {
  gitRepoStatus: 'Public';
  gitLink: string; // Required when `gitRepoStatus` is `Public`
}

export type DetailedProjects =
  | (LiveProject & PrivateProject)
  | (LiveProject & PublicProject)
  | (InProgressOrNotDeployedProject & PrivateProject)
  | (InProgressOrNotDeployedProject & PublicProject);
