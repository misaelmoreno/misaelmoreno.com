/* 
 * This file defines a Section component for the project.
 * The Section component is a reusable UI component that 
 * represents a section of a webpage, including a title, 
 * subtitle, decorative elements, and content. It uses 
 * forwardRef to expose the DOM node to parent components.
 */

import React, { forwardRef } from 'react';
import '@/styles/Section.scss';
import type { SectionProps } from '@/interfaces/props';

/* 
 * The Section component renders a section element with 
 * various child elements such as title, subtitle, and content.
 * It uses forwardRef to allow parent components to access 
 * the section's DOM node.
 */
const Section = forwardRef<HTMLElement, SectionProps>(({ title, subtitle, children }, ref) => {
    return (
        <section className="section" ref={ref}>
            <div className="section__subtitle">{subtitle}</div>
            <div className="section__title">{title}</div>
            <div className="section__deco" data-title={title} />
            <div className="section__content">{children}</div>
            <div className="section__separator" />
        </section>
    );
});

Section.displayName = 'Section';

export default Section;
