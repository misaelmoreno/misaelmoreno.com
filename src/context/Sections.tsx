'use client';

/* 
 * This file defines a context for managing sections within the application.
 * It provides a context provider component and a custom hook to access the context.
 * The context includes the list of sections, the currently active section, 
 * and a function to set the active section.
 */

import { createContext, useContext, useState, ReactNode } from 'react';
import { sections as initialSections } from '@/data/sections';
import { Section, SectionsContextProps } from '@/interfaces/sections';

/* 
 * Creates a context to hold sections data and related functions.
 */
const SectionsContext = createContext<SectionsContextProps | undefined>(undefined);

/* 
 * Provides the sections context to its children.
 * Manages the state of sections and the active section.
 */
export const SectionsProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<Section[]>(initialSections);

  /* 
   * Sets the active section based on the provided id.
   * Updates the sections state to reflect the active section.
   */
  const setActiveSection = (id: number) => {
    setSections(prevSections =>
      prevSections.map(section => ({ ...section, active: section.id === id }))
    );
  };

  const activeSection = sections.find(section => section.active);

  return (
    <SectionsContext.Provider value={{ sections, activeSection, setActiveSection }}>
      {children}
    </SectionsContext.Provider>
  );
};

/* 
 * Custom hook to access the sections context.
 * Throws an error if used outside of the SectionsProvider.
 */
export const useSectionsContext = () => {
  const context = useContext(SectionsContext);
  if (!context) throw new Error('useSectionsContext must be used within a SectionsProvider');
  return context;
};
