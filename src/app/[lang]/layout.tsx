/* 
  This file defines the main layout component for the application. 
  It includes the structure and meta information for the HTML document, 
  as well as the main sections of the layout, such as the slider and content sections.
*/

'use client';

import React from 'react';
import '@/styles/Layout.scss';
import Slider from '@/components/Slider/Slider';
import { slides } from '@/data/slider';
import SectionImg from '@/components/SectionImg/SectionImg';
import { SectionsProvider, useSectionsContext } from '@/context/Sections';
import { LanguageProvider, Locale } from '@/context/Language';
import { meta } from '@/data/meta';

interface LayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

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
  Layout is the main functional component that wraps the entire application layout.
  It provides the Sections context and includes meta tags for SEO, 
  as well as the main structure of the HTML document.
*/
const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  const locale = params.lang as Locale;
  const metaText = meta[locale];
  return (
    <LanguageProvider defaultLocale={locale}>
    <SectionsProvider>
      <html lang={locale}>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={metaText.description} />
          <meta name="author" content="Misael Moreno" />
          <meta name="keywords" content={metaText.keywords} />
          <meta property="og:title" content={metaText.ogTitle} />
          <meta property="og:description" content={metaText.ogDescription} />
          <meta property="og:image" content="/images/about-me.webp" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.misaelmoreno.com" />
          <link rel="canonical" href="https://www.misaelmoreno.com" />
          <link rel="icon" type="image/png" href="/images/favicon.webp" />
          <title>{metaText.title}</title>
        </head>
        <body>
          <Slider slides={slides[locale]} autoplay delay={5000} />
          <LayoutContent>{children}</LayoutContent>
        </body>
      </html>
    </SectionsProvider>
    </LanguageProvider>
  );
};

export default Layout;
