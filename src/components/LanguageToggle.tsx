import { Globe } from "lucide-react";
import { useLanguage } from "../store/languageStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LanguageToggle() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'es', label: 'Español', flag: '🇪🇸' },
        { code: 'en', label: 'English', flag: '🇺🇸' }
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 bg-card-bg backdrop-blur-md border border-border-primary rounded-full text-text-primary hover:text-accent transition-all shadow-lg group flex items-center gap-2"
                aria-label={t('nav.language')}
            >
                <Globe size={20} />
                <span className="text-xs font-bold uppercase">{language}</span>
                
                <span className="absolute right-full mr-4 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {t('nav.language')}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        className="absolute right-full mr-4 top-0 bg-card-bg backdrop-blur-md border border-border-primary rounded-2xl p-2 shadow-2xl min-w-[120px] flex flex-col gap-1"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code as 'es' | 'en');
                                    setIsOpen(false);
                                }}
                                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors text-sm font-medium ${
                                    language === lang.code 
                                    ? 'bg-accent/10 text-accent' 
                                    : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                                }`}
                            >
                                <span className="text-base">{lang.flag}</span>
                                {lang.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
