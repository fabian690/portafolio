import { useState, useEffect } from "react";
import { Moon, Sun, Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";

const themeColors = [
    { name: "Esmeralda", color: "#34d399" }, // emerald-400
    { name: "Cielo", color: "#38bdf8" },    // sky-400
    { name: "Violeta", color: "#a78bfa" },  // violet-400
    { name: "Rosa", color: "#fb7185" },     // rose-400
    { name: "Ambar", color: "#fbbf24" },    // amber-400
    { name: "Blanco", color: "#ffffff" },   // pure white
];

export default function ThemeSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState("dark");
    const [currentAccent, setCurrentAccent] = useState("#34d399");

    useEffect(() => {
        const theme = localStorage.getItem("theme") || "dark";
        const accent = localStorage.getItem("accent") || "#34d399";
        setCurrentTheme(theme);
        setCurrentAccent(accent);
    }, []);

    const toggleTheme = () => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setCurrentTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        
        if (newTheme === "light" && currentAccent === "#ffffff") {
            setAccent("#34d399");
        }
    };

    const setAccent = (color: string) => {
        if (currentTheme === "light" && color === "#ffffff") return;

        setCurrentAccent(color);
        document.documentElement.style.setProperty("--accent", color);
        localStorage.setItem("accent", color);

        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        document.documentElement.style.setProperty("--accent-muted", `rgba(${r}, ${g}, ${b}, 0.1)`);
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
            <LanguageToggle />
            
            <button
                onClick={toggleTheme}
                className="p-3 bg-card-bg backdrop-blur-md border border-border-primary rounded-full text-text-primary hover:text-accent transition-all shadow-lg group"
                aria-label="Alternar tema"
            >
                {currentTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span className="absolute right-full mr-4 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Modo {currentTheme === "dark" ? "Claro" : "Oscuro"}
                </span>
            </button>

            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-card-bg backdrop-blur-md border border-border-primary rounded-full text-text-primary hover:text-accent transition-all shadow-lg group"
                    style={{ color: currentAccent }}
                    aria-label="Cambiar color de acento"
                >
                    <Palette size={20} />
                    <span className="absolute right-full mr-4 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Color de acento
                    </span>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.9 }}
                            className="absolute right-full mr-4 top-0 bg-card-bg backdrop-blur-md border border-border-primary rounded-2xl p-4 shadow-2xl min-w-[150px]"
                        >
                            <p className="text-xs font-bold text-text-secondary mb-3 uppercase tracking-wider">Colores</p>
                            <div className="grid grid-cols-3 gap-3">
                                {themeColors.map((item) => {
                                    const isDisabled = currentTheme === "light" && item.color === "#ffffff";
                                    return (
                                        <button
                                            key={item.color}
                                            onClick={() => setAccent(item.color)}
                                            disabled={isDisabled}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 relative ${isDisabled ? 'opacity-20 cursor-not-allowed' : ''}`}
                                            style={{ backgroundColor: item.color }}
                                            title={item.name}
                                        >
                                            {currentAccent === item.color && (
                                                <Check size={14} className={item.color === "#ffffff" ? "text-black" : "text-white"} />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
