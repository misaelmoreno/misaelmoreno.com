/* 
 * This file defines the SectionImg component, which is used to display a section with an image and a title.
 * The component is styled using the SectionImg.scss file and utilizes the Next.js Image component for optimized image loading.
 */

'use client';

import React from 'react';
import '@/styles/SectionImg.scss';
import Image from 'next/image';
import { SectionImgProps } from '@/interfaces/sections';

// SectionImg component displays an image with a title in a styled section.
const SectionImg: React.FC<SectionImgProps> = ({ img, title }) => {
    return (
        <div className="sectionimg">
            <div className="sectionimg__image">
                <Image loading="lazy" className="sectionimg__image-img" src={img} alt={title} width={1920} height={1080} />
                <div className="sectionimg__image-border" />
            </div>
            <div className="sectionimg__content-title">
                <h1 className="sectionimg__content-title-text">{title}</h1>
                <div className="sectionimg__content-title-line" />
            </div>
        </div>
    );
};

export default SectionImg;
