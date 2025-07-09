/*
 * This file defines TypeScript interfaces for various components used in the project.
 * These interfaces specify the structure and types of props that the components expect to receive.
 * The purpose of this file is to ensure type safety and improve code readability and maintainability.
 */

export interface MenuProps {
  onSectionClick: (index: number) => void;
}

export interface NavbarProps {
  onSectionClick: (index: number) => void;
}

export interface SectionProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}
import type { Slide } from './slide';

export interface SliderProps {
  slides: Slide[];
  autoplay?: boolean;
  delay?: number;
}
