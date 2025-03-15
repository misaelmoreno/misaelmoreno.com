/* 
 * This file defines TypeScript interfaces for the sections of a website.
 * It includes interfaces for individual sections, the context for managing sections,
 * and properties for section images. These interfaces are used to ensure type safety
 * and consistency across the project when dealing with section-related data.
 */

import { FC } from "react";

/* 
 * Interface representing a single section of the website.
 * It includes properties for the section's ID, title, subtitle, image, JSX content, and active status.
 */
export interface Section {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    jsx: FC;
    active: boolean;
}

/* 
 * Interface for the context properties used to manage sections.
 * It includes an array of sections, the currently active section, and a method to set the active section.
 */
export interface SectionsContextProps {
    sections: Section[];
    activeSection: Section | undefined;
    setActiveSection: (id: number) => void;
}

/* 
 * Interface for the properties of a section image.
 * It includes the image URL and the title of the section.
 */
export interface SectionImgProps {
    img: string;
    title: string;
}