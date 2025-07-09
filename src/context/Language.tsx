'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Locale = 'es' | 'en';

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children, defaultLocale }: { children: ReactNode; defaultLocale: Locale }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
