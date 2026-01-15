import type { Locale } from '@/context/Language';

export const meta = {
  es: {
    description: 'Arquitecto de Software Full-Stack con experiencia en desarrollo frontend y backend, especializado en tecnologías web y cloud, actualmente trabajando en el Grupo Inditex.',
    keywords: 'Arquitecto de Software, Full-Stack, React, .NET, Inditex, Desarrollo Web, Cloud, CI/CD, Microservicios',
    ogTitle: 'Misael Moreno - Arquitecto de Software & Consultor de IA',
    ogDescription: 'Con más de 20 años de experiencia en desarrollo de software, actualmente soy Arquitecto de Software Full-Stack en el Grupo Inditex, especializado en soluciones completas desde el frontend hasta el backend.',
    title: 'Misael Moreno - Arquitecto de Software & Consultor de IA'
  },
  en: {
    description: 'Full-Stack Software Architect with experience in frontend and backend development, specialized in web and cloud technologies, currently working for the Inditex Group.',
    keywords: 'Software Architect, Full-Stack, React, .NET, Inditex, Web Development, Cloud, CI/CD, Microservices',
    ogTitle: 'Misael Moreno - Software Architect & AI Consultant',
    ogDescription: 'With more than 20 years of software development experience, I am currently a Full-Stack Software Architect at the Inditex Group, specializing in end-to-end solutions.',
    title: 'Misael Moreno - Software Architect & AI Consultant'
  }
} as Record<Locale, { description: string; keywords: string; ogTitle: string; ogDescription: string; title: string }>;
