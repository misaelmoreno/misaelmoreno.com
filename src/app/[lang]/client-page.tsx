/* 
 * This file contains the client-side page logic.
 * It manages the display and interaction of different sections on the page,
 * handling section visibility and scrolling through the Navbar or Menu components.
 */

'use client';

import React, { useEffect, useRef } from 'react';
import Menu from '@/components/Menu/Menu';
import Navbar from '@/components/Navbar/Navbar';
import Section from '@/components/Section/Section';
import { useSectionsContext } from '@/context/Sections';

/* 
 * ClientPage is the main functional component that manages the 
 * display and interaction of different sections on the page.
 * It uses IntersectionObserver to track which section is currently 
 * visible and updates the active section accordingly.
 */
export default function ClientPage() {
  const { sections, setActiveSection } = useSectionsContext();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  /* 
   * This useEffect hook sets up an IntersectionObserver to monitor 
   * the visibility of each section. It updates the active section 
   * based on which section is most visible in the viewport.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleSection: { id: number; visibility: number } | null = null;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);

            if (index !== -1 && sections[index]) {
              const visiblePercentage = entry.intersectionRatio;

              if (
                !mostVisibleSection ||
                (visiblePercentage > mostVisibleSection.visibility)
              ) {
                mostVisibleSection = {
                  id: sections[index].id,
                  visibility: visiblePercentage,
                };
              }
            }
          }
        });

        if (mostVisibleSection) {
          // @ts-ignore
          setActiveSection(mostVisibleSection.id); 
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), 
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach(section => {
      if (section) observer.observe(section!);
    });

    return () => {
      currentRefs.forEach(section => {
        if (section) observer.unobserve(section!);
      });
    };
  }, [sections, setActiveSection]);

  /* 
   * This function scrolls to a specific section smoothly when 
   * a section is clicked in the Navbar or Menu. It also updates 
   * the active section state.
   */
  const scrollToSection = (index: number) => {
    const currentRefs = sectionRefs.current;
    currentRefs[index]?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sections[index].id);
  };

  return (
    <div style={{ height: 'auto' }}>
      <Navbar onSectionClick={scrollToSection} />
      <Menu onSectionClick={scrollToSection} />
      {sections.map((section, index) => (
        <Section
          key={section.id}
          title={section.title}
          subtitle={section.subtitle}
          ref={(el) => { sectionRefs.current[index] = el; }}
        >
          <section.jsx />
        </Section>
      ))}
    </div>
  );
}
