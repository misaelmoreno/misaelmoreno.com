import type { Locale } from '@/context/Language';

export const ui = {
  logoAlt: { es: 'Logotipo', en: 'Logo' },
  readMore: { es: 'Leer más', en: 'Read more' },
  remote: { es: ' (Remoto)', en: ' (Remote)' },
  aboutAlt: { es: 'Sobre mí', en: 'About me' }
} as const;

export type UITextKey = keyof typeof ui;

export const getUiText = (key: UITextKey, locale: Locale) => ui[key][locale];
