/* 
 * This file defines the AboutMe component, which is a section of the website 
 * that provides information about the individual. It includes an image and 
 * text content that is dynamically split into paragraphs.
 */

'use client';

import React from 'react';
import '@/styles/AboutMe.scss';
import { aboutMe } from '@/data/aboutMe';
import Image from 'next/image';

/* 
 * The AboutMe component renders a section with an image and text content 
 * about the individual. The text content is split into paragraphs for better readability.
 */
const AboutMe: React.FC = () => {
    return (
            <div className="about-me">
                <div className="about-me__image-container">
                    <Image loading="eager" src="/images/about-me.webp" alt="Sobre mí" className="about-me__image" width="600" height="639" />
                </div>
                <div className="about-me__content">
                    {aboutMe.split('\n').map((paragraph, index) => (
                        <p key={index} className="about-me__paragraph">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
    );
};

export default AboutMe;
