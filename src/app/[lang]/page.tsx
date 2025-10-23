/* 
 * This file defines the main page component for the application.
 * The Server Component handles static generation while delegating
 * interactive features to the ClientPage component.
 */

import React from 'react';
import '@/styles/Page.scss';
import ClientPage from './client-page';

/* 
 * generateStaticParams generates static paths for both supported locales.
 * This enables static generation at build time for optimal performance.
 */
export async function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' },
  ];
}

/* 
 * Page is a Server Component that renders the ClientPage.
 * This pattern ensures optimal performance with SSR while maintaining interactivity.
 */
export default async function Page() {
  return <ClientPage />;
}
