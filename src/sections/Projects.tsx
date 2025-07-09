/* 
 * This file defines the Projects component, which is responsible for rendering 
 * a list of projects. Each project includes a title, duration, description, 
 * and an optional link to read more about the project. The data for the projects 
 * is imported from a separate file.
 */

'use client';

import React from 'react';
import '@/styles/Projects.scss';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/Language';
import { getUiText } from '@/data/ui';

/* 
 * The Projects component renders a list of projects. Each project is displayed 
 * with its title, duration, description, and an optional link to read more.
 */
const Projects: React.FC = () => {
    const { locale } = useLanguage();
    return (
        <div className="projects">
            {projects[locale].map((project, index) => (
                <div key={index} className="projects__item">
                    <div className="projects__item-header">
                        <div className="projects__item-title">{project.title}</div>
                        <p className="projects__item-duration">{project.duration}</p>
                    </div>
                    <p className="projects__item-description">{project.description}</p>
                    {project.link && (
                        <a href={project.link} className="projects__item-link" target="_blank" rel="noopener noreferrer">
                            {getUiText('readMore', locale)}
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Projects;
