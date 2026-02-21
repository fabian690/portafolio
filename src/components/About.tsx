import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center"
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8">
                        Sobre mí
                    </h2>
                    <div className="space-y-6 text-lg text-zinc-400">
                        <p className="leading-relaxed">
                            Más allá del código, me destaco por mi capacidad de <strong>liderazgo y comunicación</strong>. En proyectos como <em>Tariquia</em>, lideré al equipo de desarrollo, asegurando no solo la calidad técnica, sino también la cohesión del grupo y el cumplimiento de objetivos.
                        </p>
                        <p className="leading-relaxed">
                            Disfruto arquitecturar soluciones completas, desde la base de datos hasta el pixel final en el frontend, siempre buscando la escalabilidad y la mejor experiencia de usuario.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-12 mb-12">
                        <div>
                            <span className="block text-4xl font-bold text-zinc-100 mb-1">3+</span>
                            <span className="text-zinc-500 text-sm">Años de experiencia</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-zinc-100 mb-1">10+</span>
                            <span className="text-zinc-500 text-sm">Proyectos completados</span>
                        </div>
                    </div>

                    <div className="border-t border-zinc-800/50 pt-8">
                        <h3 className="text-lg font-medium text-zinc-100 mb-4 flex items-center gap-2">
                            <span className="text-emerald-400">🌍</span> Idiomas
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 bg-zinc-900/50 border border-emerald-500/20 px-3 py-2 rounded-lg">
                                <span className="text-zinc-200 font-medium">Español</span>
                                <span className="text-xs text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full">Nativo</span>
                            </div>
                            <div className="flex items-center gap-2 bg-zinc-900/30 border border-zinc-800 px-3 py-2 rounded-lg">
                                <span className="text-zinc-300 font-medium">Inglés</span>
                                <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">Lectura / Escucha</span>
                            </div>
                            <div className="flex items-center gap-2 bg-zinc-900/30 border border-zinc-800 px-3 py-2 rounded-lg">
                                <span className="text-zinc-300 font-medium">Portugués</span>
                                <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">Lectura / Escucha</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                            Foto de Perfil
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}