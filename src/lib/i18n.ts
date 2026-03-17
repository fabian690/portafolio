export type Language = 'es' | 'en';

export const translations = {
    es: {
        nav: {
            experience: "Experiencia",
            projects: "Proyectos",
            about: "Sobre mí",
            contact: "Contacto",
        },
        hero: {
            available: "Disponible para trabajar",
            greeting: "Hola, soy",
            name: "Fabian Lopez.",
            role: "Desarrollador Full-Stack.",
            description: "Transformo tus ideas en software rápido, escalable y fácil de usar.",
            viewProjects: "Ver proyectos",
            email: "Email",
            whatsapp: "WhatsApp",
            downloadCV: "Descargar CV",
            cvPath: "/cv-es.pdf",
            cvFilename: "CV_Fabian_Lopez_ES.pdf",
        },
        experience: {
            title: "Experiencia Profesional",
            subtitle: "Mi trayectoria profesional combinando proyectos institucionales a gran escala con soluciones a medida para el sector privado.",
            jobs: [
                {
                    role: "Desarrollador Full-Stack & Líder Técnico",
                    company: "Universidad Autónoma Juan Misael Saracho (UAJMS)",
                    period: "2025 - Presente",
                    description: "Participación integral en todo el ciclo de vida del software universitario (Tariquía). Liderazgo técnico en la arquitectura de soluciones desde cero.",
                    achievements: [
                        "Diseño y modelado de bases de datos relacionales robustas.",
                        "Desarrollo de Backend estructurado y creación de APIs RESTful.",
                        "Creación de interfaces de usuario receptivas (Frontend) para la web.",
                        "Desarrollo de la aplicación móvil oficial.",
                        "Despliegue de servicios y aplicaciones utilizando Docker para entornos escalables.",
                    ],
                },
                {
                    role: "Desarrollador de Software Freelance",
                    company: "Trabajo Independiente",
                    period: "2023 - Presente",
                    description: "Consultoría y desarrollo de software a medida para clientes del sector privado, abarcando desde la concepción hasta el despliegue en producción.",
                    achievements: [
                        "Desarrollo de un Sistema de Gestión Integral para un Laboratorio Clínico.",
                        "Creación de sistemas de gestión para negocios físicos (ej., Gimnasios).",
                        "Gestión directa de requerimientos con los clientes corporativos.",
                        "Entrega de soluciones que optimizan procesos clave en tiempo récord.",
                    ],
                }
            ]
        },
        projects: {
            title: "Proyectos Destacados",
            statusDevelopment: "En desarrollo",
            statusSoon: "Próximamente",
            hoverZoom: "Click para ampliar",
            demoBtn: "Ver Demo Live",
            codeBtn: "Ver Código",
            items: [
                {
                    titulo: "Tariquia - Repositorio Académico",
                    descripcion: "Plataforma universitaria para la gestión de archivos de profesores y administración de préstamos de tablets.",
                },
                {
                    titulo: "Tariquia - App Móvil",
                    descripcion: "Aplicación móvil complementaria para consulta rápida de recursos y gestión de perfil de usuario en el campus.",
                },
                {
                    titulo: "Sistema de Gestión para Gimnasio",
                    descripcion: "Plataforma integral para el control de membresías, usuarios y administración general del recinto deportivo.",
                },
                {
                    titulo: "Clínica de Laboratorio",
                    descripcion: "Sistema de gestión para el control de pacientes, órdenes de exámenes y resultados clínicos. Enfocado en la optimización de tiempos.",
                }
            ]
        },
        techStack: {
            title: "Stack Tecnológico",
            categories: {
                frontend: "Frontend",
                backend: "Backend",
                infrastructure: "Infraestructura & Datos"
            }
        },
        about: {
            title: "Sobre mí",
            p1: "Más allá del código, me destaco por mi capacidad de liderazgo y comunicación. En proyectos como Tariquia, lideré al equipo de desarrollo, asegurando no solo la calidad técnica, sino también la cohesión del grupo y el cumplimiento de objetivos.",
            p2: "Disfruto arquitecturar soluciones completas, desde la base de datos hasta el pixel final en el frontend, siempre buscando la escalabilidad y la mejor experiencia de usuario.",
            expYears: "Años de experiencia",
            projectsCompletados: "Proyectos completados",
            languages: "Idiomas",
            spanish: "Español",
            spanishLevel: "Nativo",
            english: "Inglés",
            englishLevel: "Lectura / Escucha",
            portuguese: "Portugués",
            portugueseLevel: "Lectura / Escucha",
        },
        contact: {
            title: "Ponte en contacto",
            subtitle: "Envíame un mensaje y te responderé lo antes posible.",
            successTitle: "¡Mensaje enviado!",
            successText: "Gracias por escribirme. Me pondré en contacto contigo pronto.",
            nameLabel: "Nombre",
            namePlaceholder: "Tu nombre completo",
            emailLabel: "Correo Electrónico",
            emailPlaceholder: "tu@correo.com",
            messageLabel: "Mensaje",
            messagePlaceholder: "¿En qué puedo ayudarte?",
            sendBtn: "Enviar Mensaje",
            sendingBtn: "Enviando...",
            errorText: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente más tarde.",
            footerInfo: "Desarrollado con Formspree. No comparto tu información.",
        },
        footer: {
            rights: "Todos los derechos reservados.",
        },
        themeSelector: {
            modeLight: "Modo Claro",
            modeDark: "Modo Oscuro",
            accentColor: "Color de acento",
            language: "Idioma",
        }
    },
    en: {
        nav: {
            experience: "Experience",
            projects: "Projects",
            about: "About",
            contact: "Contact",
        },
        hero: {
            available: "Available for work",
            greeting: "Hi, I'm",
            name: "Fabian Lopez.",
            role: "Full-Stack Developer.",
            description: "I transform your ideas into fast, scalable, and user-friendly software.",
            viewProjects: "View Projects",
            email: "Email",
            whatsapp: "WhatsApp",
            downloadCV: "Download CV",
            cvPath: "/cv-en.pdf",
            cvFilename: "CV_Fabian_Lopez_EN.pdf",
        },
        experience: {
            title: "Professional Experience",
            subtitle: "My professional journey combining large-scale institutional projects with tailored solutions for the private sector.",
            jobs: [
                {
                    role: "Full-Stack Developer & Technical Lead",
                    company: "Autonomous University Juan Misael Saracho (UAJMS)",
                    period: "2025 - Present",
                    description: "Full involvement in the entire lifecycle of university software (Tariquía). Technical leadership in architecting solutions from scratch.",
                    achievements: [
                        "Design and modeling of robust relational databases.",
                        "Structured Backend development and creation of RESTful APIs.",
                        "Creation of responsive user interfaces (Frontend) for the web.",
                        "Development of the official mobile application.",
                        "Deployment of services and applications using Docker for scalable environments.",
                    ],
                },
                {
                    role: "Freelance Software Developer",
                    company: "Self-Employed",
                    period: "2023 - Present",
                    description: "Consulting and custom software development for private sector clients, from conception to production deployment.",
                    achievements: [
                        "Development of a Comprehensive Management System for a Clinical Laboratory.",
                        "Creation of management systems for physical businesses (e.g., Gyms).",
                        "Direct management of requirements with corporate clients.",
                        "Delivery of solutions that optimize key processes in record time.",
                    ],
                }
            ]
        },
        projects: {
            title: "Featured Projects",
            statusDevelopment: "In Development",
            statusSoon: "Coming Soon",
            hoverZoom: "Click to enlarge",
            demoBtn: "View Live Demo",
            codeBtn: "View Code",
            items: [
                {
                    titulo: "Tariquia - Academic Repository",
                    descripcion: "University platform for managing teacher files and tablet loan administration.",
                },
                {
                    titulo: "Tariquia - Mobile App",
                    descripcion: "Complementary mobile app for quick resource consultation and campus profile management.",
                },
                {
                    titulo: "Gym Management System",
                    descripcion: "Comprehensive platform for membership control, user management, and sports facility administration.",
                },
                {
                    titulo: "Clinical Laboratory System",
                    descripcion: "Management system for patient control, test orders, and clinical results. Focused on time optimization.",
                }
            ]
        },
        techStack: {
            title: "Tech Stack",
            categories: {
                frontend: "Frontend",
                backend: "Backend",
                infrastructure: "Infrastructure & Data"
            }
        },
        about: {
            title: "About Me",
            p1: "Beyond code, I stand out for my leadership and communication skills. In projects like Tariquia, I led the development team, ensuring not only technical quality but also group cohesion and goal fulfillment.",
            p2: "I enjoy architecting complete solutions, from the database to the final pixel on the frontend, always seeking scalability and the best user experience.",
            expYears: "Years of experience",
            projectsCompletados: "Completed projects",
            languages: "Languages",
            spanish: "Spanish",
            spanishLevel: "Native",
            english: "English",
            englishLevel: "Reading / Listening",
            portuguese: "Portuguese",
            portugueseLevel: "Reading / Listening",
        },
        contact: {
            title: "Get in touch",
            subtitle: "Send me a message and I'll get back to you as soon as possible.",
            successTitle: "Message sent!",
            successText: "Thanks for writing. I'll get in touch with you soon.",
            nameLabel: "Name",
            namePlaceholder: "Your full name",
            emailLabel: "Email Address",
            emailPlaceholder: "you@email.com",
            messageLabel: "Message",
            messagePlaceholder: "How can I help you?",
            sendBtn: "Send Message",
            sendingBtn: "Sending...",
            errorText: "There was an error sending the message. Please try again later.",
            footerInfo: "Powered by Formspree. I don't share your information.",
        },
        footer: {
            rights: "All rights reserved.",
        },
        themeSelector: {
            modeLight: "Light Mode",
            modeDark: "Dark Mode",
            accentColor: "Accent Color",
            language: "Language",
        }
    }
};
