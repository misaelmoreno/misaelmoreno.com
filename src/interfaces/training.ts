/*
 * This file defines the structure of the TrainingDetails interface.
 * The TrainingDetails interface is used to represent the details of a training session or certification.
 * It includes information such as the institution, title, type, date, description,
 * credential ID, and image.
 */

export interface TrainingDetails {
  institution: string;
  title: string;
  type: 'Formación' | 'Certificación' | 'Training' | 'Certification';
  date: string;
  description?: string;
  credentialId?: string;
  image: string;
}
