import type { Locale } from '@/context/Language';
const slides: Record<Locale, { title: string; subtitle: string; imagePath: string }[]> = {
  es: [
    { title: 'Misael Moreno', subtitle: 'Arquitecto de software y Consultor de IA', imagePath: '/images/slider/1.webp' },
    { title: 'Experiencia', subtitle: '25 años de experiencia profesional', imagePath: '/images/slider/2.webp' },
    { title: 'Habilidades', subtitle: 'Desarrollo, formación, reclutamiento', imagePath: '/images/slider/3.webp' }
  ],
  en: [
    { title: 'Misael Moreno', subtitle: 'Software Architect & AI Consultant', imagePath: '/images/slider/1.webp' },
    { title: 'Experience', subtitle: '25 years of professional experience', imagePath: '/images/slider/2.webp' },
    { title: 'Skills', subtitle: 'Development, training, recruitment', imagePath: '/images/slider/3.webp' }
  ]
};

export { slides };
