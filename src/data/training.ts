import type { Locale } from '@/context/Language';
import type { TrainingDetails } from '@/interfaces/training';

const training: Record<Locale, TrainingDetails[]> = {
  es: [
    { institution: 'GitHub Inc.', title: 'Github Fundations', type: 'Certificación', date: 'jul. 2024', image: '/images/training/github.webp' },
    { institution: 'Microsoft', title: 'Microsoft Certified: Azure Fundamentals', type: 'Certificación', date: 'dic. 2023', credentialId: '624784E19E85B2FD', image: '/images/training/microsoft.webp' },
    { institution: 'Ministerio de Trabajo y Economía Social', title: 'Programación con lenguajes orientados a objetos y bases de datos relacionales (Certificación profesional nivel III)', type: 'Certificación', date: 'abr. 2023', credentialId: 'IFCD0112', image: '/images/training/ministerio-trabajo.webp' },
    { institution: 'Ministerio de Trabajo y Economía Social', title: 'Desarrollo de aplicaciones con tecnologías Web (Certificación profesional nivel III)', type: 'Certificación', date: 'feb. 2023', credentialId: 'IFCD0210', image: '/images/training/ministerio-trabajo.webp' },
    { institution: 'Tajamar', title: 'Programa de Especialización en Cloud Computing Linux Azure', type: 'Certificación', date: 'dic. 2021', credentialId: 'IFCT026PO', image: '/images/training/tajamar.webp' },
    { institution: 'Escuela Tecnológica Informática de Castilla La Mancha', title: 'Metodología de la programación', type: 'Formación', date: '2000 - 2001', description: 'Esta formación abarca los fundamentos esenciales de la programación, proporcionando una base sólida en lógica y estructuras de datos, y profundiza en la programación en C y Visual Basic para el desarrollo de aplicaciones y la automatización de tareas empresariales. Además, incluye la administración de servidores IBM AS/400.', image: '/images/training/escuela-tecnologica-informatica.webp' }
  ],
  en: [
    { institution: 'GitHub Inc.', title: 'Github Fundations', type: 'Certification', date: 'Jul 2024', image: '/images/training/github.webp' },
    { institution: 'Microsoft', title: 'Microsoft Certified: Azure Fundamentals', type: 'Certification', date: 'Dec 2023', credentialId: '624784E19E85B2FD', image: '/images/training/microsoft.webp' },
    { institution: 'Ministry of Labour and Social Economy', title: 'Programming with Object-Oriented Languages and Relational Databases (Professional Certificate Level III)', type: 'Certification', date: 'Apr 2023', credentialId: 'IFCD0112', image: '/images/training/ministerio-trabajo.webp' },
    { institution: 'Ministry of Labour and Social Economy', title: 'Web Application Development (Professional Certificate Level III)', type: 'Certification', date: 'Feb 2023', credentialId: 'IFCD0210', image: '/images/training/ministerio-trabajo.webp' },
    { institution: 'Tajamar', title: 'Specialization Program in Cloud Computing Linux Azure', type: 'Certification', date: 'Dec 2021', credentialId: 'IFCT026PO', image: '/images/training/tajamar.webp' },
    { institution: 'Escuela Tecnológica Informática de Castilla La Mancha', title: 'Programming Methodology', type: 'Training', date: '2000 - 2001', description: 'This course covers the essential fundamentals of programming, providing a solid foundation in logic and data structures. It delves into programming in C and Visual Basic for application development and business task automation. It also includes IBM AS/400 server administration.', image: '/images/training/escuela-tecnologica-informatica.webp' }
  ]
};

export { training };
