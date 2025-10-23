/* 
  This file defines the main layout component for the application. 
  It includes the structure and meta information for the HTML document, 
  as well as the main sections of the layout, such as the slider and content sections.
*/
import React from 'react';
import type { Metadata } from 'next';
import '@/styles/Layout.scss';
import { Locale } from '@/context/Language';
import { meta } from '@/data/meta';
import ClientLayout from './client-layout';

/* 
  generateStaticParams generates static paths for both supported locales.
  This enables static generation at build time for better performance.
*/
export async function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' },
  ];
}

/* 
  generateMetadata generates metadata for SEO optimization.
  This runs on the server and ensures proper indexing by search engines.
*/
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const metaText = meta[locale];
  
  return {
    title: metaText.title,
    description: metaText.description,
    authors: [{ name: 'Misael Moreno' }],
    keywords: metaText.keywords,
    openGraph: {
      title: metaText.ogTitle,
      description: metaText.ogDescription,
      images: ['/images/about-me.webp'],
      type: 'website',
      url: 'https://www.misaelmoreno.com',
    },
    alternates: {
      canonical: `https://www.misaelmoreno.com/${locale}`,
      languages: {
        'es': 'https://www.misaelmoreno.com/es',
        'en': 'https://www.misaelmoreno.com/en',
      },
    },
    icons: {
      icon: '/images/favicon.webp',
    },
  };
}

/* 
  Layout is the main Server Component that wraps the application layout.
  It delegates client-side interactivity to the ClientLayout component.
*/
export default async function Layout({ 
  children, 
  params 
}: { 
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;

  return (
    <html lang={locale}>
      <body>
        <ClientLayout locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
