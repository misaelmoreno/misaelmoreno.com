import type { Locale } from '@/context/Language';
import type { JobDetails } from '@/interfaces/career';

const career: Record<Locale, JobDetails[]> = {
  es: [
    { company: "Softtek", title: "Arquitecto de Software FrontEnd - Grupo Inditex", employmentType: "Jornada completa", duration: "jul. 2024 - actualidad", location: "Madrid, Madrid", remote: true, responsibilities: [
        "Diseño y optimización de aplicaciones y librerías reutilizables para React.",
        "Consolidación de proyectos mediante microfrontends.",
        "Soporte a equipos de desarrollo y participación en iniciativas de mejora continua en la arquitectura de nuestras aplicaciones."
      ], skills: ["React.js", "GitHub", "Microsoft Azure", "Integración continua y entrega continua (CI/CD)", "Jest"] },
    { company: "Softtek", title: "Analista Desarrollador Senior FrontEnd - Grupo Inditex", employmentType: "Jornada completa", duration: "oct. 2022 - jul. 2024", location: "Madrid, Comunidad de Madrid, España", remote: true, responsibilities: [
        "Análisis y desarrollo para la migración de software de gestión y automatización de almacenes de tecnologías legacy a microservicios en React.",
        "Testing con Jest e integración continua con GitHub."
      ], skills: ["Jest", "React.js", "GitHub", "JIRA", "Integración continua y entrega continua (CI/CD)"] },
    { company: "Avansis", title: "Jefe de Proyecto & Desarrollador Full Stack", employmentType: "Jornada completa", duration: "dic. 2021 - oct. 2022", location: "Madrid, Comunidad de Madrid, España", remote: true, responsibilities: [
        "Responsable técnico de un equipo de 3 personas.",
        "Analista y programador para un software de campus online basado en .NET Core con Entity Framework 6, JWT, MySQL, ReactJS y React Native."
      ], skills: ["React Native", "MySQL", "React.js", "Gestión de API", "Entity Framework (EF) Core", "GitHub", "Material-UI", ".NET Core", "JSON Web Token (JWT)", "Linux"] },
    { company: "Avansis", title: "Desarrollador Full Stack .NET + React", employmentType: "Jornada completa", duration: "jul. 2021 - dic. 2021", location: "Madrid, Comunidad de Madrid, España", remote: true, responsibilities: [
        "Desarrollador Full Stack en C# .NET 5 y ReactJS para software de gestión de personal y recruitment basado en .NET Core con Entity Framework 6, MySQL, autentificación JWT, etc."
      ], skills: ["React Native", "MySQL", "React.js", "Gestión de API", "Entity Framework (EF) Core", "GitHub", "Material-UI", ".NET Core", "JSON Web Token (JWT)", "Linux"] },
    { company: "Consultor tecnológico independiente", title: "Desarrollador Full Stack .NET + React - Grupo Dominion / The Phone House", employmentType: "Autónomo", duration: "nov. 2019 - jul. 2021", location: "Madrid, Comunidad de Madrid, España", remote: true, responsibilities: [
        "Desarrollador Full Stack en C# .NET + ReactJS para Grupo Dominion / The Phone House.",
        "Desarrollo de software CRM y API para Home Services, proyecto en Azure App Services."
      ], skills: ["React.js", "GitHub", ".NET Core", "Microsoft Azure"] },
    { company: "Consultor tecnológico independiente", title: "Desarrollador Full Stack .NET + AngularJS - Universidad San Pablo CEU", employmentType: "Autónomo", duration: "sept. 2018 - nov. 2019", location: "Madrid, Comunidad de Madrid, España", remote: true, responsibilities: [
        "Desarrollador Full Stack en C# .NET Framework + AngularJS.",
        "Desarrollo de herramientas online de gestión de contenido, portal de transparencia y gestión de leads."
      ], skills: ["Microsoft SQL Server", "AngularJS", ".NET Framework"] },
    { company: "Proyecto99.com", title: "Desarrollador Full Stack", employmentType: "Jornada completa", duration: "sept. 2017 - ago. 2018", location: "Madrid, Comunidad de Madrid, España", remote: true, responsibilities: [
        "Desarrollador y consultor independiente para portal de servicios de E-commerce, web corporativa y desarrollo a medida."
      ], skills: ["Microsoft SQL Server", "MySQL", "AngularJS", "React.js", ".NET Core", ".NET Framework"] },
    { company: "Grupo Assista", title: "Desarrollador Full Stack .NET + Angular", employmentType: "Jornada completa", duration: "dic. 2015 - sept. 2017", location: "Madrid, Comunidad de Madrid, España", remote: false, responsibilities: [
        "Desarrollador C# .NET en entorno Azure para software CRM.",
        "Creación de servicios web, integración de APIs de terceros y desarrollos front con AngularJS."
      ], skills: ["Microsoft SQL Server", "AngularJS", "TFS", "Microsoft Azure", ".NET Framework", "ASP.NET Web API"] },
    { company: "Agencia MilViajes", title: "Jefe de Proyecto, líder técnico", employmentType: "Jornada completa", duration: "dic. 2009 - dic. 2014", location: "Toledo, Castilla-La Mancha, España", remote: false, responsibilities: [
        "Responsable técnico de un equipo de 5 a 10 personas.",
        "Desarrollo de E-Commerce, integración de APIs de terceros y creación de servicios web con VB .NET, jQuery y Bootstrap."
      ], skills: ["Microsoft SQL Server", "Voz sobre IP (VoIP)", "SOAP", "Active Server Pages", "jQuery", "Google Workspace", "Bootstrap", "Visual Basic .NET (NET)"] },
    { company: "Agencia MilViajes", title: "Desarrollador Full Stack ASP + JS", employmentType: "Jornada completa", duration: "feb. 2007 - dic. 2009", location: "Toledo, Castilla-La Mancha, España", remote: false, responsibilities: [
        "Desarrollo de software de gestión de expedientes y e-commerce de paquetes turísticos en línea."
      ], skills: ["Microsoft SQL Server", "Voz sobre IP (VoIP)", "SOAP", "Active Server Pages", "jQuery", "Google Workspace", "Bootstrap", "Visual Basic .NET (NET)"] },
    { company: "Gabinete JF", title: "Consultor y desarrollador de software", employmentType: "Jornada completa", duration: "2003 - 2007", location: "Toledo, Castilla-La Mancha, España", remote: false, responsibilities: [
        "Consultoría de aplicaciones de gestión (SAGE, ICG, Eurowin).",
        "Programación a medida e implementación de servidores de telefonía IP con VBA, SIP, y Linux Trixbox."
      ], skills: ["Grupo Sage", "Voz sobre IP (VoIP)", "Active Server Pages", "Directorio activo", "Visual Basic for Applications (VBA)", "VBScript"] },
    { company: "T-Systems Iberia", title: "Técnico de soporte", employmentType: "Jornada completa", duration: "2005", location: "Madrid, Comunidad de Madrid, España", remote: false, responsibilities: [
        "Mantenimiento y configuración de grandes redes, servidores Active Directory y Exchange."
      ], skills: ["Servicio de soporte técnico", "Gestión de redes", "Active Server Pages", "Directorio activo", "Control remoto", "VBScript"] },
    { company: "gedas iberia (VW Group)", title: "Técnico de soporte", employmentType: "Jornada completa", duration: "2001 - 2002", location: "Barcelona, Cataluña, España", remote: false, responsibilities: [
        "Gestión de incidencias, administración remota de redes, monitorización de recursos y desarrollo con herramientas de monitorización y automatización con ASP Clásico."
      ], skills: ["IBM Tivoli", "Gestión de redes", "Active Server Pages", "Soporte técnico", "Directorio activo", "Control remoto"] }
  ],
  en: [
    { company: "Softtek", title: "Front-End Software Architect - Inditex Group", employmentType: "Full-time", duration: "Jul 2024 - Present", location: "Madrid, Spain", remote: true, responsibilities: [
        "Design and optimization of reusable React applications and libraries.",
        "Project consolidation using microfrontends.",
        "Support development teams and take part in continuous improvement initiatives for our application architecture."
      ], skills: ["React.js", "GitHub", "Microsoft Azure", "CI/CD", "Jest"] },
    { company: "Softtek", title: "Senior Front-End Developer - Inditex Group", employmentType: "Full-time", duration: "Oct 2022 - Jul 2024", location: "Madrid, Spain", remote: true, responsibilities: [
        "Analysis and development for migrating warehouse management software from legacy technologies to React microservices.",
        "Testing with Jest and continuous integration with GitHub."
      ], skills: ["Jest", "React.js", "GitHub", "JIRA", "CI/CD"] },
    { company: "Avansis", title: "Project Lead & Full Stack Developer", employmentType: "Full-time", duration: "Dec 2021 - Oct 2022", location: "Madrid, Spain", remote: true, responsibilities: [
        "Technical lead of a 3-person team.",
        "Analyst and programmer for an online campus software based on .NET Core with Entity Framework 6, JWT, MySQL, ReactJS and React Native."
      ], skills: ["React Native", "MySQL", "React.js", "API Management", "Entity Framework (EF) Core", "GitHub", "Material-UI", ".NET Core", "JSON Web Token (JWT)", "Linux"] },
    { company: "Avansis", title: "Full Stack Developer .NET + React", employmentType: "Full-time", duration: "Jul 2021 - Dec 2021", location: "Madrid, Spain", remote: true, responsibilities: [
        "Full Stack developer in C# .NET 5 and ReactJS for personnel management and recruitment software based on .NET Core with Entity Framework 6, MySQL, JWT authentication, etc."
      ], skills: ["React Native", "MySQL", "React.js", "API Management", "Entity Framework (EF) Core", "GitHub", "Material-UI", ".NET Core", "JSON Web Token (JWT)", "Linux"] },
    { company: "Independent technology consultant", title: "Full Stack Developer .NET + React - Grupo Dominion / The Phone House", employmentType: "Freelance", duration: "Nov 2019 - Jul 2021", location: "Madrid, Spain", remote: true, responsibilities: [
        "Full Stack developer in C# .NET + ReactJS for Grupo Dominion / The Phone House.",
        "Development of CRM software and API for Home Services, project on Azure App Services."
      ], skills: ["React.js", "GitHub", ".NET Core", "Microsoft Azure"] },
    { company: "Independent technology consultant", title: "Full Stack Developer .NET + AngularJS - Universidad San Pablo CEU", employmentType: "Freelance", duration: "Sep 2018 - Nov 2019", location: "Madrid, Spain", remote: true, responsibilities: [
        "Full Stack developer in C# .NET Framework + AngularJS.",
        "Development of online content management tools, transparency portal and lead management."
      ], skills: ["Microsoft SQL Server", "AngularJS", ".NET Framework"] },
    { company: "Proyecto99.com", title: "Full Stack Developer", employmentType: "Full-time", duration: "Sep 2017 - Aug 2018", location: "Madrid, Spain", remote: true, responsibilities: [
        "Independent developer and consultant for an E-commerce services portal, corporate website and custom developments."
      ], skills: ["Microsoft SQL Server", "MySQL", "AngularJS", "React.js", ".NET Core", ".NET Framework"] },
    { company: "Grupo Assista", title: "Full Stack Developer .NET + Angular", employmentType: "Full-time", duration: "Dec 2015 - Sep 2017", location: "Madrid, Spain", remote: false, responsibilities: [
        "C# .NET developer in Azure environment for CRM software.",
        "Creation of web services, third-party API integration and front-end developments with AngularJS."
      ], skills: ["Microsoft SQL Server", "AngularJS", "TFS", "Microsoft Azure", ".NET Framework", "ASP.NET Web API"] },
    { company: "Agencia MilViajes", title: "Project Manager, Tech Lead", employmentType: "Full-time", duration: "Dec 2009 - Dec 2014", location: "Toledo, Spain", remote: false, responsibilities: [
        "Technical lead of a team of 5 to 10 people.",
        "Development of E-Commerce, third-party API integration and web services with VB .NET, jQuery and Bootstrap."
      ], skills: ["Microsoft SQL Server", "Voice over IP (VoIP)", "SOAP", "Active Server Pages", "jQuery", "Google Workspace", "Bootstrap", "Visual Basic .NET (NET)"] },
    { company: "Agencia MilViajes", title: "Full Stack Developer ASP + JS", employmentType: "Full-time", duration: "Feb 2007 - Dec 2009", location: "Toledo, Spain", remote: false, responsibilities: [
        "Development of case management software and online package travel e-commerce."
      ], skills: ["Microsoft SQL Server", "Voice over IP (VoIP)", "SOAP", "Active Server Pages", "jQuery", "Google Workspace", "Bootstrap", "Visual Basic .NET (NET)"] },
    { company: "Gabinete JF", title: "Consultant and Software Developer", employmentType: "Full-time", duration: "2003 - 2007", location: "Toledo, Spain", remote: false, responsibilities: [
        "Consulting for management applications (SAGE, ICG, Eurowin).",
        "Custom programming and implementation of IP telephony servers with VBA, SIP and Linux Trixbox."
      ], skills: ["Sage Group", "Voice over IP (VoIP)", "Active Server Pages", "Active Directory", "Visual Basic for Applications (VBA)", "VBScript"] },
    { company: "T-Systems Iberia", title: "Support Technician", employmentType: "Full-time", duration: "2005", location: "Madrid, Spain", remote: false, responsibilities: [
        "Maintenance and configuration of large networks, Active Directory servers and Exchange."
      ], skills: ["Technical support", "Network management", "Active Server Pages", "Active Directory", "Remote control", "VBScript"] },
    { company: "gedas iberia (VW Group)", title: "Support Technician", employmentType: "Full-time", duration: "2001 - 2002", location: "Barcelona, Spain", remote: false, responsibilities: [
        "Incident management, remote network administration, resource monitoring and development with classic ASP monitoring and automation tools."
      ], skills: ["IBM Tivoli", "Network management", "Active Server Pages", "Technical support", "Active Directory", "Remote control"] }
  ]
};
export { career };
