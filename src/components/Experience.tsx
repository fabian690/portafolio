import { motion } from "framer-motion";
import { Briefcase, Code2, Calendar } from "lucide-react";
import { useLanguage } from "../store/languageStore";

export default function Experience() {
    const { t } = useLanguage();
    
    const rawJobs = t('experience.jobs');
    const experiences = Array.isArray(rawJobs) ? rawJobs.map((job: any, index: number) => ({
        ...job,
        id: index + 1,
        icon: index === 0 ? <Briefcase className="w-5 h-5 text-accent" /> : <Code2 className="w-5 h-5 text-accent" />
    })) : [];

    return (
        <section id="experiencia" className="py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                    {t('experience.title')}
                </h2>
                <p className="text-text-secondary text-lg max-w-2xl">
                    {t('experience.subtitle')}
                </p>
            </motion.div>

            <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-16">
                {experiences.map((exp: any, index: number) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-4 md:-left-5 top-1 w-8 h-8 md:w-10 md:h-10 bg-bg-primary border border-border-primary rounded-full flex items-center justify-center z-10">
                            {exp.icon}
                        </div>

                        {/* Content */}
                        <div className="group bg-card-bg border border-border-primary rounded-2xl p-6 md:p-8 hover:bg-zinc-900/10 hover:border-accent transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-lg font-medium text-text-secondary mt-1">
                                        {exp.company}
                                    </h4>
                                </div>
                                <div className="flex items-center gap-2 text-text-secondary bg-card-bg px-3 py-1.5 rounded-full border border-border-primary shrink-0 self-start">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm font-medium">{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-text-primary/80 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            <ul className="space-y-3">
                                {exp.achievements.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                                        <span className="text-text-secondary leading-relaxed text-sm md:text-base">
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
