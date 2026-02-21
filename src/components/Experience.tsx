import { motion } from "framer-motion";
import { Briefcase, Code2, Calendar } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            id: 1,
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
            icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
        },
        {
            id: 2,
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
            icon: <Code2 className="w-5 h-5 text-sky-400" />,
        },
    ];

    return (
        <section id="experiencia" className="py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
                    Experiencia Profesional
                </h2>
                <p className="text-zinc-400 text-lg max-w-2xl">
                    Mi trayectoria profesional combinando proyectos institucionales a gran escala con soluciones a medida para el sector privado.
                </p>
            </motion.div>

            <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-16">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-4 md:-left-5 top-1 w-8 h-8 md:w-10 md:h-10 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center z-10">
                            {exp.icon}
                        </div>

                        {/* Content */}
                        <div className="group bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-lg font-medium text-zinc-400 mt-1">
                                        {exp.company}
                                    </h4>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-500 bg-zinc-950/50 px-3 py-1.5 rounded-full border border-zinc-800/50 shrink-0 self-start">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm font-medium">{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-zinc-300 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            <ul className="space-y-3">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5" />
                                        <span className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
