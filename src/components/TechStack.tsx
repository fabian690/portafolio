import { motion } from "framer-motion";
import { Monitor, Server, Database } from "lucide-react";

const categorias = [
    {
        titulo: "Frontend",
        Icono: Monitor,
        herramientas: ["React", "Vue", "Angular", "Astro", "Tailwind CSS"]
    },
    {
        titulo: "Backend",
        Icono: Server,
        herramientas: ["Spring Boot", "Node.js", "Express", "NestJS"]
    },
    {
        titulo: "Infraestructura & Datos",
        Icono: Database,
        herramientas: ["Docker", "Docker Swarm", "Git", "PostgreSQL", "MongoDB"]
    }
];

export default function TechStack() {
    return (
        <section className="py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-zinc-100 mb-16"
            >
                Stack Tecnológico
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
                        <div className="flex items-center gap-3 mb-6 bg-zinc-900/40 p-3 rounded-lg border border-zinc-800 inline-flex self-start">
                            <categoria.Icono className="w-5 h-5 text-emerald-400" />
                            <h3 className="text-lg font-medium text-zinc-200">
                                {categoria.titulo}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {categoria.herramientas.map((herramienta, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 bg-zinc-900/50 text-zinc-400 text-sm rounded-md hover:bg-zinc-900/80 hover:text-zinc-200 transition-colors cursor-default border border-zinc-800/50"
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