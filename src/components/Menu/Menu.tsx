/* 
  This file defines the Menu component for the application.
  The Menu component displays a list of sections and highlights the active section.
  It uses the Sections context to get the list of sections and the currently active section.
  When a section is clicked, it triggers the onSectionClick callback passed as a prop.
*/

'use client';

import React from 'react';
import '@/styles/Menu.scss';
import { useSectionsContext } from '@/context/Sections';
import type { MenuProps } from '@/interfaces/props';

/* 
  The Menu component renders a list of sections.
  It highlights the active section and handles section click events.
*/
const Menu: React.FC<MenuProps> = ({ onSectionClick }) => {
  const { sections, activeSection } = useSectionsContext();

  return (
    <div className="menu">
      <ul className="menu__list">
        {sections.map((item, index) => (
          <li
            key={item.id}
            className={`menu__item ${activeSection === item ? 'menu__item--active' : ''}`}
            onClick={() => onSectionClick(index)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
