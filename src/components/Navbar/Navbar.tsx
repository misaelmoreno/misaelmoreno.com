/* 
 * This file defines the Navbar component for the application.
 * The Navbar component includes a logo, a menu icon, and a list of sections.
 * It allows users to navigate to different sections of the application and toggle the menu visibility.
 */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Flag from '@/components/Flag/Flag';
import type { Locale } from '@/context/Language';
import '@/styles/Navbar.scss';
import { useSectionsContext } from '@/context/Sections';
import { useLanguage } from '@/context/Language';
import { getUiText } from '@/data/ui';

interface NavbarProps {
  onSectionClick: (index: number) => void;
}

/* 
 * The Navbar component renders the navigation bar with a logo and a menu.
 * It manages the state of the menu (open or closed) and handles user interactions.
 */
const Navbar: React.FC<NavbarProps> = ({ onSectionClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { sections } = useSectionsContext();
  const { locale } = useLanguage();
  const switchTo = locale === 'es' ? 'en' : 'es';

  /* 
   * Toggles the menu state between open and closed.
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  /* 
   * Closes the menu by setting the menu state to false.
   */
  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* 
   * Scrolls the window to the top smoothly.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <Image loading="eager" src="/images/logo.webp" alt={getUiText('logoAlt', locale)} width={90} height={40} onClick={scrollToTop} style={{ cursor: 'pointer' }} />
        </div>
        <div className="navbar__menu-icon" onClick={toggleMenu}>
          <div className="navbar__menu-icon-separator" />
          <div className="navbar__menu-icon-bars">☰</div>
        </div>
      </nav>
      {menuOpen && (
        <div className="navbar__menu">
          <ul className="navbar__menu-list">
            {sections.map((section, index) => (
              <li key={section.id} className="navbar__menu-item" onClick={() => { onSectionClick(index); closeMenu(); }}>
                {section.title}
              </li>
            ))}
          </ul>
          <div className="navbar__menu-lang">
            <Link href={`/${switchTo}`}>
              <Flag locale={switchTo as Locale} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
