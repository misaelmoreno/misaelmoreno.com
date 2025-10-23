/* 
  This file contains the client-side layout logic.
  It includes interactive components like Slider, SectionImg, and context providers.
*/
'use client';
import React from 'react';
import Slider from '@/components/Slider/Slider';
import { slides } from '@/data/slider';
import SectionImg from '@/components/SectionImg/SectionImg';
import { SectionsProvider, useSectionsContext } from '@/context/Sections';
import { LanguageProvider, Locale } from '@/context/Language';

/* 
  LayoutContent is a functional component that renders the main content of the layout.
  It uses the active section from the Sections context to display an image and title.
*/
const LayoutContent: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { activeSection } = useSectionsContext();

  return (
    <div className="layout">
      <div className="layout__left">
        {activeSection && (
          <SectionImg img={activeSection.image} title={activeSection.title} />
        )}
      </div>
      <div className="layout__right">
        {children}
      </div>
    </div>
  );
};

/* 
  ClientLayout wraps the client-side interactive components.
  It provides the Language and Sections contexts.
*/
export default function ClientLayout({ 
  children, 
  locale 
}: { 
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <LanguageProvider defaultLocale={locale}>
      <SectionsProvider>
        <Slider slides={slides[locale]} autoplay delay={5000} />
        <LayoutContent>{children}</LayoutContent>
      </SectionsProvider>
    </LanguageProvider>
  );
}
