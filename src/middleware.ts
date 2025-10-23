import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['es', 'en'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale && pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, images, etc)
    '/((?!_next|api|images|favicon.webp).*)',
  ],
};
