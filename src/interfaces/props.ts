/* 
 * This file defines TypeScript interfaces for various components used in the project.
 * These interfaces specify the structure and types of props that the components expect to receive.
 * The purpose of this file is to ensure type safety and improve code readability and maintainability.
 */

/* 
 * Interface for Menu component props.
 * It includes a callback function that is triggered when a section is clicked.
 */
interface MenuProps {
    onSectionClick: (index: number) => void;
}

/* 
 * Interface for Navbar component props.
 * It includes a callback function that is triggered when a section is clicked.
 */
interface NavbarProps {
    onSectionClick: (index: number) => void;
}

/* 
 * Interface for Section component props.
 * It includes a title, a subtitle, and optionally, children elements.
 */
interface SectionProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

/* 
 * Interface for Slider component props.
 * It includes an array of slides, and optionally, autoplay and delay settings.
 */
interface SliderProps {
    slides: Slide[];
    autoplay?: boolean;
    delay?: number;
}