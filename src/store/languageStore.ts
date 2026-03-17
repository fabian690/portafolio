import { useState, useEffect } from 'react';
import { translations, type Language } from '../lib/i18n';

// Simple store for language state using custom events
let currentLanguage: Language = 'es';

// Initialize from localStorage on the client side
if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        currentLanguage = savedLang;
        document.documentElement.lang = savedLang;
    } else {
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'en') {
            currentLanguage = 'en';
            document.documentElement.lang = 'en';
        }
    }
}

const listeners = new Set<() => void>();

export const languageStore = {
    getLanguage: () => currentLanguage,
    setLanguage: (lang: Language) => {
        currentLanguage = lang;
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
        }
        listeners.forEach(listener => listener());
    },
    subscribe: (listener: () => void) => {
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    },
    t: (path: string) => {
        const keys = path.split('.');
        let result: any = translations[currentLanguage];
        
        for (const key of keys) {
            if (result && result[key] !== undefined) {
                result = result[key];
            } else {
                return path;
            }
        }
        return result;
    }
};

export const useLanguage = () => {
    const [lang, setLang] = useState(currentLanguage);

    useEffect(() => {
        return languageStore.subscribe(() => setLang(currentLanguage));
    }, []);

    return {
        language: lang,
        setLanguage: languageStore.setLanguage,
        t: languageStore.t
    };
};
