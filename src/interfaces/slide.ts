/*
 * This file defines the Slide interface, which represents the structure of a slide object.
 * Each slide contains a title, a subtitle, and an image path.
 * This interface is used throughout the project to ensure consistency and type safety
 * when working with slide objects.
 */

export interface Slide {
  title: string;
  subtitle: string;
  imagePath: string;}
