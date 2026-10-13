export type Language = 'es' | 'en';

export interface GalleryItem {
  url: string;
  description: string;
}

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  type: "professional" | "personal";
  gallery?: GalleryItem[];
}

export interface ExperienceData {
  title: string;
  company: string;
  period: string;
  roleType?: string;
  description: string[];
  technologies: string[];
}

export interface EducationData {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificationData {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

export interface LanguageSkillData {
  name: string;
  level: string;
  proficiency: number;
  certificate?: string;
}

export interface SkillCategoryData {
  category: string;
  skills: string[];
}

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Educación",
      certifications: "Certificados",
      languages: "Idiomas",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Facundo Del Boca",
      role: "Desarrollador Backend",
      bio: "Especializado en el diseño y desarrollo de APIs robustas, arquitecturas escalables y soluciones de software utilizando Java (Spring Boot) y Node.js.",
      viewProjects: "Ver Proyectos",
      contactMe: "Contactar Ahora",
      cvUrl: "/CV_Facundo_Del_Boca_Backend_Developer.pdf",
      cvTitle: "Descargar CV (Español)",
    },
    about: {
      title: "Sobre mí",
      p1: "Estudiante de último año de Ingeniería en Sistemas de Información (UTN FRC) con inglés avanzado (C1), actualmente en búsqueda activa de nuevas oportunidades laborales para aportar valor y seguir creciendo profesionalmente.",
      p2: "Cuento con experiencia en desarrollo backend y arquitecturas de microservicios, así como en proyectos Full Stack independientes, diseñando soluciones a medida desde el modelado de bases de datos hasta la integración de pasarelas de pago y logística.",
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          title: "Desarrollador Backend",
          company: "Kenility",
          period: "Abril 2026 - Agosto 2026",
          roleType: "Prácticas",
          description: [
            "Participé en el proceso de migración de un sistema monolítico hacia una arquitectura de microservicios, integrando un equipo enfocado en un servicio específico del dominio.",
            "Desarrollé y mantuve APIs REST, colaborando en la implementación de endpoints, resolución de bugs y tareas de refactorización.",
            "Colaboré en la integración con bases de datos y en el aseguramiento de buenas prácticas de código dentro de un entorno de trabajo ágil.",
          ],
          technologies: ["Java", "Spring Boot", "Microservicios", "APIs RESTful", "Bases de Datos", "Git", "Metodologías Ágiles"],
        },
        {
          title: "Desarrollador Full Stack",
          company: "SHIM",
          period: "Marzo 2026 - Abril 2026",
          roleType: "Freelance",
          description: [
            "Desarrollo integral de plataforma e-commerce con catálogo de variantes, personalización de bordados y cotización automática de logística.",
            "Construcción de la infraestructura y backend sobre Firebase / Cloud Functions con Node.js, implementando checkout seguro y flujos de pago.",
            "Diseño de panel administrativo con métricas y analíticas de ventas en tiempo real.",
          ],
          technologies: ["React", "Node.js", "Firebase", "Cloud Firestore", "Vite", "Cloudflare", "Git"],
        },
        {
          title: "Desarrollador Full Stack",
          company: "De Novo S.A.S",
          period: "Agosto 2025 - Febrero 2026",
          description: [
            "Sistema de Compras: Diseño y desarrollo integral de un sistema interno desde cero. Construcción del backend con Java y Spring Boot, garantizando una API REST robusta y segura para el control de pedidos y remitos.",
            "Sitio Web Corporativo: Desarrollo y mantenimiento del sitio institucional, implementando mejoras de rendimiento, arquitectura y experiencia de usuario.",
          ],
          technologies: ["Java", "Spring Boot", "MySQL", "APIs RESTful", "React", "Tailwind CSS", "Git"],
        },
      ] as ExperienceData[],
    },
    education: {
      title: "Educación",
      items: [
        {
          degree: "Ingeniería en Sistemas de Información",
          institution: "Universidad Tecnológica Nacional (UTN FRC)",
          period: "Marzo de 2021 - Diciembre de 2026",
          description: "Estudiante de último año de la carrera. Promedio general: 8,48",
        },
        {
          degree: "Bachiller en Lenguas (Formación Bilingüe)",
          institution: "Colegio Cinco Ríos",
          period: "Marzo de 2009 - Diciembre de 2020",
          description: "",
        },
      ] as EducationData[],
    },
    certifications: {
      title: "Certificados",
      viewCredential: "Ver credencial",
      items: [
        {
          name: "Certificate in Advanced English (CAE) - Nivel C1",
          issuer: "Cambridge English",
          date: "2020",
          credentialUrl: "/StatementOfResult.pdf",
        },
        {
          name: "Universidad Java",
          issuer: "Udemy",
          date: "2025",
          credentialUrl: "https://www.udemy.com/certificate/UC-87d67d79-25be-4a23-aef5-6f8c53bc0055/",
        },
        {
          name: "Cloud Practitioner Essentials",
          issuer: "Amazon Web Services",
          date: "2026",
          credentialUrl: "/Certificate.pdf",
        },
        {
          name: "Introducción a la Ciberseguridad",
          issuer: "Cisco",
          date: "2025",
          credentialUrl: "/Ciberseguridad.pdf",
        },
      ] as CertificationData[],
    },
    languages: {
      title: "Idiomas",
      items: [
        {
          name: "Español",
          level: "Nativo",
          proficiency: 100,
        },
        {
          name: "Inglés",
          level: "C1 - Avanzado",
          proficiency: 90,
          certificate: "Certificate in Advanced English (CAE) - Cambridge",
        },
      ] as LanguageSkillData[],
    },
    skills: {
      title: "Habilidades",
      categories: [
        {
          category: "Backend & Bases de Datos",
          skills: ["Java", "Spring Boot", "Node.js", "APIs RESTful", "MySQL", "PostgreSQL", "Cloud Firestore (NoSQL)", "Firebase"],
        },
        {
          category: "Frontend",
          skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap"],
        },
        {
          category: "DevOps & Cloud",
          skills: ["Git / GitHub", "Docker", "CI/CD", "Cloudflare", "Railway", "Vercel"],
        },
      ] as SkillCategoryData[],
    },
    projects: {
      title: "Proyectos",
      realClient: "Proyecto Comercial",
      personalProject: "Proyecto Personal",
      code: "Código",
      demo: "Ver demo",
      viewMore: "Ver más",
      viewMoreGithub: "Ver más en GitHub",
      closeGallery: "Cerrar galería",
      prevImage: "Imagen anterior",
      nextImage: "Siguiente imagen",
      items: [
        {
          title: "Sistema de compras",
          description:
            "Sistema web para una constructora que optimiza la cadena de suministros mediante el control de pedidos, digitalización de remitos y automatización de alertas por correo para agilizar el flujo de trabajo.",
          technologies: ["Spring Boot (Java)", "React", "TailwindCSS", "MySQL", "Git", "Railway"],
          githubUrl: "",
          liveUrl: "",
          image: "/p-compras.jpg",
          type: "professional",
          gallery: [
            { url: "/c1.jpg", description: "Pantalla de inicio de sesión y autenticación de usuarios." },
            { url: "/c2.jpg", description: "Panel principal: Resumen general y control del estado de pedidos." },
            { url: "/c3.jpg", description: "Registro de Pedidos: Formulario para la solicitud de nuevos materiales." },
            { url: "/c4.jpg", description: "Administración: Configuración y generación de reportes personalizados." },
            { url: "/c5.jpg", description: "Recepción de Pedidos: Visualización de entregas y carga de archivos adjuntos." },
          ],
        },
        {
          title: "SHIM E-commerce",
          description:
            "E-commerce para indumentaria médica con catálogo de variantes, personalización de bordados y cotización automática de logística. Incluye checkout seguro y un panel administrativo con analíticas en tiempo real.",
          technologies: ["React", "Node.js", "Cloud Firestore (NoSQL)", "Firebase", "Vite", "Git", "Cloudflare"],
          githubUrl: "",
          liveUrl: "https://www.shim.com.ar/",
          image: "/p-shim.jpg",
          type: "professional",
        },
        {
          title: "Planificador de menús",
          description:
            "Planificador de menú semanal y lista de compras inteligente. Permite diseñar planes de alimentación, consolidar ingredientes automáticamente mediante equivalencias de unidades y previsualizar e importar recetas internacionales traducidas al español en tiempo real.",
          technologies: ["React", "Node.js (Express)", "PostgreSQL", "Prisma ORM", "Vercel", "Git"],
          githubUrl: "https://github.com/facudelboca/mealcrafter",
          liveUrl: "https://mealcrafter.vercel.app",
          image: "/p-mealcrafter.jpg",
          type: "personal",
        },
        {
          title: "Gestor de gastos",
          description:
            "Aplicación de finanzas personales que registra, edita y categoriza transacciones en tiempo real. Cuenta con gráficos interactivos y un dashboard dinámico para el análisis visual del balance financiero.",
          technologies: ["Spring Boot (Java)", "PostgreSQL", "React", "Docker", "Git"],
          githubUrl: "https://github.com/facudelboca/gestorgastos",
          liveUrl: "",
          image: "/p-gastos.jpg",
          type: "personal",
          gallery: [
            { url: "/g1.jpg", description: "Pantalla de inicio de sesión y acceso seguro a la cuenta." },
            { url: "/g2.jpg", description: "Panel general: Resumen de saldos, cuentas y registro de transacciones." },
            { url: "/g3.jpg", description: "Historial de Transacciones: Listado detallado y cronológico de movimientos." },
            { url: "/g4.jpg", description: "Planificación Financiera: Seguimiento de operaciones y metas de ahorro." },
            { url: "/g5.jpg", description: "Evolución Mensual: Gráficos interactivos de ingresos y egresos." },
            { url: "/g6.jpg", description: "Administración: Configuración de cuentas y categorías personalizadas." },
          ],
        },
      ] as ProjectData[],
    },
    contact: {
      title: "Contacto",
      subtitle: "¡Hablemos! Estoy disponible para nuevas oportunidades laborales, proyectos freelance o simplemente para conectar.",
      socialCardTitle: "Redes y Ubicación",
      locationLabel: "Ubicación",
      locationValue: "Córdoba, Argentina",
      emailCardTitle: "Escríbeme por correo",
      emailCardSubtitle: "Puedes copiar mi dirección de email aquí abajo con un solo clic:",
      copy: "Copiar",
      copied: "¡Copiado!",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Facundo Del Boca",
      role: "Backend Developer",
      bio: "Specialized in designing and building robust APIs, scalable architectures, and software solutions using Java (Spring Boot) and Node.js.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      cvUrl: "/CV_Facundo_Del_Boca_Backend_Developer_English.pdf",
      cvTitle: "Download Resume (English)",
    },
    about: {
      title: "About Me",
      p1: "Final-year Information Systems Engineering student at Universidad Tecnológica Nacional (UTN FRC) with advanced English proficiency (C1), currently actively seeking new professional opportunities to contribute value and continue growing as a developer.",
      p2: "I have experience in backend development and microservices architectures, as well as independent Full Stack projects where I designed custom solutions ranging from database modeling to payment gateway and logistics integrations.",
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Backend Developer",
          company: "Kenility",
          period: "March 2026 - August 2026",
          roleType: "Internship",
          description: [
            "Contributed to migrating a legacy monolithic system into a microservices architecture within a dedicated domain service team.",
            "Developed and maintained RESTful APIs, implementing new endpoints, resolving bugs, and performing code refactoring.",
            "Assisted in database integrations and ensured high code quality and best practices within an agile team environment.",
          ],
          technologies: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "Databases", "Git", "Agile Methodologies"],
        },
        {
          title: "Full Stack Developer",
          company: "SHIM",
          period: "March 2026 - April 2026",
          roleType: "Freelance",
          description: [
            "Full Stack development of an e-commerce platform with product variant catalogs, custom embroidery options, and automated shipping calculations.",
            "Engineered backend infrastructure on Firebase and Cloud Functions with Node.js, integrating secure checkout and payment gateways.",
            "Created an administrative management dashboard with real-time sales and order analytics.",
          ],
          technologies: ["React", "Node.js", "Firebase", "Cloud Firestore", "Vite", "Cloudflare", "Git"],
        },
        {
          title: "Full Stack Developer",
          company: "Grupo Denovo",
          period: "August 2025 - February 2026",
          description: [
            "Purchasing & Supply Chain System: Designed and built an internal end-to-end management system from scratch. Developed a robust and secure RESTful API backend using Java and Spring Boot for purchase orders and delivery tracking.",
            "Corporate Website: Developed and maintained the corporate website, implementing UI/UX enhancements and performance optimizations.",
          ],
          technologies: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "React", "Tailwind CSS", "Git"],
        },
      ] as ExperienceData[],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Information Systems Engineering",
          institution: "Universidad Tecnológica Nacional (UTN FRC)",
          period: "March 2021 - December 2026",
          description: "Final-year engineering student. Overall GPA: 8.48 / 10",
        },
        {
          degree: "High School Diploma in Languages (Bilingual Education)",
          institution: "Colegio Cinco Ríos",
          period: "March 2009 - December 2020",
          description: "",
        },
      ] as EducationData[],
    },
    certifications: {
      title: "Certifications",
      viewCredential: "View Credential",
      items: [
        {
          name: "Certificate in Advanced English (CAE) - Level C1",
          issuer: "Cambridge English",
          date: "2020",
          credentialUrl: "/StatementOfResult.pdf",
        },
        {
          name: "Java Masterclass (Universidad Java)",
          issuer: "Udemy",
          date: "2025",
          credentialUrl: "https://www.udemy.com/certificate/UC-87d67d79-25be-4a23-aef5-6f8c53bc0055/",
        },
        {
          name: "Cloud Practitioner Essentials",
          issuer: "Amazon Web Services",
          date: "2026",
          credentialUrl: "/Certificate.pdf",
        },
        {
          name: "Introduction to Cybersecurity",
          issuer: "Cisco",
          date: "2025",
          credentialUrl: "/Ciberseguridad.pdf",
        },
      ] as CertificationData[],
    },
    languages: {
      title: "Languages",
      items: [
        {
          name: "Spanish",
          level: "Native",
          proficiency: 100,
        },
        {
          name: "English",
          level: "C1 - Advanced",
          proficiency: 90,
          certificate: "Certificate in Advanced English (CAE) - Cambridge",
        },
      ] as LanguageSkillData[],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          category: "Backend & Databases",
          skills: ["Java", "Spring Boot", "Node.js", "RESTful APIs", "MySQL", "PostgreSQL", "Cloud Firestore (NoSQL)", "Firebase"],
        },
        {
          category: "Frontend",
          skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap"],
        },
        {
          category: "DevOps & Cloud",
          skills: ["Git / GitHub", "Docker", "CI/CD", "Cloudflare", "Railway", "Vercel"],
        },
      ] as SkillCategoryData[],
    },
    projects: {
      title: "Projects",
      realClient: "Commercial Project",
      personalProject: "Personal Project",
      code: "Code",
      demo: "Live Demo",
      viewMore: "View Details",
      viewMoreGithub: "View More on GitHub",
      closeGallery: "Close gallery",
      prevImage: "Previous image",
      nextImage: "Next image",
      items: [
        {
          title: "Purchasing & Supply Chain System",
          description:
            "Web system for a construction firm that streamlines supply chains via order management, delivery note digitization, and automated email alerts to expedite workflows.",
          technologies: ["Spring Boot (Java)", "React", "TailwindCSS", "MySQL", "Git", "Railway"],
          githubUrl: "",
          liveUrl: "",
          image: "/p-compras.jpg",
          type: "professional",
          gallery: [
            { url: "/c1.jpg", description: "Login screen & user authentication." },
            { url: "/c2.jpg", description: "Main dashboard: Overview and order status tracking." },
            { url: "/c3.jpg", description: "Order Registration: Request form for new materials." },
            { url: "/c4.jpg", description: "Administration: Custom configuration and report generation." },
            { url: "/c5.jpg", description: "Order Reception: Delivery tracking and document uploads." },
          ],
        },
        {
          title: "SHIM Medical E-Commerce",
          description:
            "Medical apparel e-commerce platform with variant catalog, custom embroidery options, and automated shipping calculations. Includes secure checkout and real-time analytics dashboard.",
          technologies: ["React", "Node.js", "Cloud Firestore (NoSQL)", "Firebase", "Vite", "Git", "Cloudflare"],
          githubUrl: "",
          liveUrl: "https://www.shim.com.ar/",
          image: "/p-shim.jpg",
          type: "professional",
        },
        {
          title: "Smart Meal Planner",
          description:
            "Weekly meal planner and intelligent grocery list generator. Enables personalized meal planning, unit-converted ingredient aggregation, and real-time preview and translation of international recipes.",
          technologies: ["React", "Node.js (Express)", "PostgreSQL", "Prisma ORM", "Vercel", "Git"],
          githubUrl: "https://github.com/facudelboca/mealcrafter",
          liveUrl: "https://mealcrafter.vercel.app",
          image: "/p-mealcrafter.jpg",
          type: "personal",
        },
        {
          title: "Expense & Finance Manager",
          description:
            "Personal finance application to record, edit, and categorize transactions in real-time. Features interactive charts and a dynamic dashboard for visual financial health analysis.",
          technologies: ["Spring Boot (Java)", "PostgreSQL", "React", "Docker", "Git"],
          githubUrl: "https://github.com/facudelboca/gestorgastos",
          liveUrl: "",
          image: "/p-gastos.jpg",
          type: "personal",
          gallery: [
            { url: "/g1.jpg", description: "Login screen and secure account access." },
            { url: "/g2.jpg", description: "Overview Dashboard: Balances, accounts, and recent transactions." },
            { url: "/g3.jpg", description: "Transaction History: Chronological and filtered ledger of financial movements." },
            { url: "/g4.jpg", description: "Financial Planning: Budget tracking and savings goals." },
            { url: "/g5.jpg", description: "Monthly Trends: Interactive income vs expense charts." },
            { url: "/g6.jpg", description: "Settings: Account and custom category management." },
          ],
        },
      ] as ProjectData[],
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect! I am open to new career opportunities, freelance projects, or simply networking.",
      socialCardTitle: "Social & Location",
      locationLabel: "Location",
      locationValue: "Córdoba, Argentina",
      emailCardTitle: "Send me an email",
      emailCardSubtitle: "You can copy my email address below with just one click:",
      copy: "Copy",
      copied: "Copied!",
    },
  },
};
