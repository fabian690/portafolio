import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Language } from '../lib/i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('es');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
            setLanguageState(savedLang);
        } else {
            // Try to detect browser language
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'en') {
                setLanguageState('en');
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
    };

    const t = (path: string) => {
        const keys = path.split('.');
        let result: any = translations[language];
        
        for (const key of keys) {
            if (result && result[key] !== undefined) {
                result = result[key];
            } else {
                return path; // Fallback to key name
            }
        }
        
        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
