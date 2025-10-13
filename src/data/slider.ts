import type { Locale } from '@/context/Language';
const slides: Record<Locale, { title: string; subtitle: string; imagePath: string }[]> = {
  es: [
    { title: 'Misael Moreno', subtitle: 'Arquitecto de software y crack de la IA', imagePath: '/images/slider/1.webp' },
    { title: 'Experiencia', subtitle: 'Más de 20 años de experiencia', imagePath: '/images/slider/2.webp' },
    { title: 'Habilidades', subtitle: 'Desarrollo, formación, reclutamiento', imagePath: '/images/slider/3.webp' }
  ],
  en: [
    { title: 'Misael Moreno', subtitle: 'Software Architect & AI Consultant', imagePath: '/images/slider/1.webp' },
    { title: 'Experience', subtitle: 'More than 20 years of experience', imagePath: '/images/slider/2.webp' },
    { title: 'Skills', subtitle: 'Development, training, recruitment', imagePath: '/images/slider/3.webp' }
  ]
};

export { slides };
