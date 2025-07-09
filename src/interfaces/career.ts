/*
 * This file defines the structure of job details for a career-related feature
 * in the project. It includes an interface that outlines the necessary
 * information for a job position, such as company name, job title, employment
 * type, duration, location, remote status, responsibilities, and required skills.
 */

export interface JobDetails {
  company: string;
  title: string;
  employmentType: string;
  duration: string;
  location: string;
  remote: boolean;
  responsibilities: string[];
  skills: string[];}
