/* 
 * This file defines the Skills component, which is a section of the website 
 * dedicated to displaying skills and knowledge. It imports necessary styles 
 * and components and uses them to render the section with a title and subtitle.
 */

'use client';

import React from 'react';
import '@/styles/Skills.scss';
import Section from '@/components/Section/Section';

/* 
 * The Skills component renders a section with a title "Habilidades" and 
 * subtitle "Conocimientos". It is intended to showcase various skills.
 */
const Skills: React.FC = () => {
    return (
        <Section title="Habilidades" subtitle="Conocimientos">
            Test
        </Section>
    );
};

export default Skills;
