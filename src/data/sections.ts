import { Section } from "@/interfaces/sections";
import AboutMe from "@/sections/AboutMe";
import Career from "@/sections/Career";
import Projects from "@/sections/Projects";
import Training from "@/sections/Training";

export const sections: Section[] = [
    { id: 1, title: 'Sobre mí', subtitle: 'Información personal', active: true, image: '/images/sections/1.webp', jsx: AboutMe },
    { id: 2, title: 'Carrera', subtitle: 'Experiencia profesional', active: false, image: '/images/sections/2.webp', jsx: Career },
    { id: 3, title: 'Formación', subtitle: 'Educación académica', active: false, image: '/images/sections/3.webp', jsx: Training },
    { id: 4, title: 'Proyectos', subtitle: 'Trabajos y proyectos', active: false, image: '/images/sections/4.webp', jsx: Projects },
];
