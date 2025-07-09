/*
 * This file defines the structure of a ProjectDetails interface.
 * The interface is used to represent the details of a project,
 * including its title, duration, description, and an optional link.
 */

export interface ProjectDetails {
  title: string;
  duration: string;
  description: string;
  link?: string;
}
