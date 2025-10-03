import projectsData from '../data/projects.json';

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  pubDate: string;
  content: string;
}

export function getProjects(lang: string = 'en'): Project[] {
  return projectsData.projects.map(project => ({
    ...project,
    title: project.title[lang as keyof typeof project.title] || project.title.en,
    description: project.description[lang as keyof typeof project.description] || project.description.en,
    content: project.content[lang as keyof typeof project.content] || project.content.en,
  }));
}

export function getProjectById(id: string, lang: string = 'en'): Project | undefined {
  const project = projectsData.projects.find(p => p.id === id);
  if (!project) return undefined;
  
  return {
    ...project,
    title: project.title[lang as keyof typeof project.title] || project.title.en,
    description: project.description[lang as keyof typeof project.description] || project.description.en,
    content: project.content[lang as keyof typeof project.content] || project.content.en,
  };
}
