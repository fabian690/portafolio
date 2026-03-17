import { motion } from "framer-motion";
import perfilImg from '../assets/Me.jpeg';
import { useLanguage } from "../store/languageStore";

export default function About() {
    const { t } = useLanguage();

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
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                        {t('about.title')}
                    </h2>
                    <div className="space-y-6 text-lg text-text-secondary">
                        <p className="leading-relaxed">
                            {t('about.p1')}
                        </p>
                        <p className="leading-relaxed">
                            {t('about.p2')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-12 mb-12">
                        <div>
                            <span className="block text-4xl font-bold text-text-primary mb-1">3+</span>
                            <span className="text-text-secondary text-sm">{t('about.expYears')}</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-text-primary mb-1">10+</span>
                            <span className="text-text-secondary text-sm">{t('about.projectsCompletados')}</span>
                        </div>
                    </div>

                    <div className="border-t border-border-primary/50 pt-8">
                        <h3 className="text-lg font-medium text-text-primary mb-4 flex items-center gap-2">
                            <span className="text-accent">🌍</span> {t('about.languages')}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 bg-card-bg border border-accent/20 px-3 py-2 rounded-lg">
                                <span className="text-text-primary font-medium">{t('about.spanish')}</span>
                                <span className="text-xs text-accent/80 bg-accent-muted px-2 py-0.5 rounded-full">{t('about.spanishLevel')}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-card-bg border border-border-primary px-3 py-2 rounded-lg">
                                <span className="text-text-secondary font-medium">{t('about.english')}</span>
                                <span className="text-xs text-text-secondary/50 bg-border-primary px-2 py-0.5 rounded-full">{t('about.englishLevel')}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-card-bg border border-border-primary px-3 py-2 rounded-lg">
                                <span className="text-text-secondary font-medium">{t('about.portuguese')}</span>
                                <span className="text-xs text-text-secondary/50 bg-border-primary px-2 py-0.5 rounded-full">{t('about.portugueseLevel')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-bg-primary border border-border-primary rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-border-primary to-card-bg" />
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                            <img src={perfilImg.src} alt="Foto de perfil" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}