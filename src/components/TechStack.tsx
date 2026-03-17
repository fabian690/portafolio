import { motion } from "framer-motion";
import { Monitor, Server, Database } from "lucide-react";
import { useLanguage } from "../store/languageStore";

export default function TechStack() {
    const { t } = useLanguage();
    
    const categorias = [
        {
            titulo: t('techStack.categories.frontend'),
            Icono: Monitor,
            herramientas: ["React", "Vue", "Angular", "Astro", "Tailwind CSS"]
        },
        {
            titulo: t('techStack.categories.backend'),
            Icono: Server,
            herramientas: ["Spring Boot", "Node.js", "Express", "NestJS"]
        },
        {
            titulo: t('techStack.categories.infrastructure'),
            Icono: Database,
            herramientas: ["Docker", "Docker Swarm", "Git", "PostgreSQL", "MongoDB"]
        }
    ];

    return (
        <section className="py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-text-primary mb-16"
            >
                {t('techStack.title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {categorias.map((categoria, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-6 bg-card-bg p-3 rounded-lg border border-border-primary inline-flex self-start">
                            <categoria.Icono className="w-5 h-5 text-accent" />
                            <h3 className="text-lg font-medium text-text-primary/90">
                                {categoria.titulo}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {categoria.herramientas.map((herramienta, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 bg-card-bg text-text-secondary text-sm rounded-md hover:bg-accent-muted hover:text-accent transition-colors cursor-default border border-border-primary"
                                >
                                    {herramienta}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}