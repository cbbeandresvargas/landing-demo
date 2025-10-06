// Data utility functions for loading JSON data
import experienceData from '../data/experience.json';
import skillsData from '../data/skills.json';
import educationData from '../data/education.json';
import languagesData from '../data/languages.json';
import personalData from '../data/personal.json';

export type Language = 'en' | 'es';

// Experience functions
export function getExperience(lang: Language = 'en') {
  return experienceData.experience.map(exp => ({
    ...exp,
    title: exp.title[lang],
    period: exp.period[lang],
    description: exp.description[lang],
    achievements: exp.achievements[lang]
  }));
}

export function getExperienceById(id: number, lang: Language = 'en') {
  const experience = experienceData.experience.find(exp => exp.id === id);
  if (!experience) return null;
  
  return {
    ...experience,
    title: experience.title[lang],
    period: experience.period[lang],
    description: experience.description[lang],
    achievements: experience.achievements[lang]
  };
}

// Skills functions
export function getSkills(lang: Language = 'en') {
  return skillsData.skills.map(category => ({
    ...category,
    category: category.category[lang]
  }));
}

export function getSkillsByCategory(categoryId: number, lang: Language = 'en') {
  const category = skillsData.skills.find(cat => cat.id === categoryId);
  if (!category) return null;
  
  return {
    ...category,
    category: category.category[lang]
  };
}

// Education functions
export function getEducation(lang: Language = 'en') {
  return educationData.education.map(edu => ({
    ...edu,
    degree: edu.degree[lang],
    institution: edu.institution[lang],
    period: edu.period[lang],
    description: edu.description[lang]
  }));
}

export function getEducationById(id: number, lang: Language = 'en') {
  const education = educationData.education.find(edu => edu.id === id);
  if (!education) return null;
  
  return {
    ...education,
    degree: education.degree[lang],
    institution: education.institution[lang],
    period: education.period[lang],
    description: education.description[lang]
  };
}

// Languages functions
export function getLanguages(lang: Language = 'en') {
  return languagesData.languages.map(language => ({
    ...language,
    name: language.name[lang],
    level: language.level[lang]
  }));
}

// Personal info functions
export function getPersonalInfo(lang: Language = 'en') {
  return {
    ...personalData.personal,
    name: personalData.personal.name[lang],
    title: personalData.personal.title[lang],
    location: personalData.personal.location[lang],
    bio: personalData.personal.bio[lang],
    shortBio: personalData.personal.shortBio[lang]
  };
}

// Statistics functions
export function getStats() {
  return {
    yearsOfExperience: personalData.personal.yearsOfExperience,
    projectsCompleted: personalData.personal.projectsCompleted,
    happyClients: personalData.personal.happyClients,
    technologiesUsed: personalData.personal.technologiesUsed
  };
}
