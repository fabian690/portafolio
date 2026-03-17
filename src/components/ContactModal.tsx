import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../store/languageStore";

export default function ContactModal() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            document.body.style.overflow = "hidden";
        };

        window.addEventListener("open-contact-modal", handleOpen);
        return () => window.removeEventListener("open-contact-modal", handleOpen);
    }, []);

    const close = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
        setTimeout(() => setStatus("idle"), 300); // Reset status after animation
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xgolnwzz", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(close, 3000); // Auto close after 3 seconds
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary/80 backdrop-blur-sm p-4"
                    onClick={close}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg bg-bg-primary border border-border-primary rounded-2xl shadow-2xl overflow-hidden relative"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-border-primary/50 bg-card-bg">
                            <div>
                                <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                                    <Send size={20} className="text-accent" />
                                    {t('contact.title')}
                                </h3>
                                <p className="text-text-secondary text-sm mt-1">
                                    {t('contact.subtitle')}
                                </p>
                            </div>
                            <button
                                onClick={close}
                                className="text-text-secondary hover:text-text-primary transition-colors p-2 -mr-2 rounded-full hover:bg-zinc-800"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 relative">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-16 h-16 bg-accent-muted text-accent rounded-full flex items-center justify-center mb-4 border border-accent/20">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-text-primary mb-2">{t('contact.successTitle')}</h4>
                                        <p className="text-text-secondary">
                                            {t('contact.successMessage')}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5 col-span-2 md:col-span-1">
                                                <label htmlFor="name" className="text-sm font-medium text-text-secondary">
                                                    {t('contact.formName')}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    placeholder={t('contact.formNamePlaceholder')}
                                                    className="w-full bg-card-bg border border-border-primary rounded-lg px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all font-sans"
                                                />
                                            </div>
                                            <div className="space-y-1.5 col-span-2 md:col-span-1">
                                                <label htmlFor="email" className="text-sm font-medium text-text-secondary">
                                                    {t('contact.formEmail')}
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="tu@correo.com"
                                                    className="w-full bg-card-bg border border-border-primary rounded-lg px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all font-sans"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="message" className="text-sm font-medium text-text-secondary">
                                                {t('contact.formMessage')}
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                placeholder={t('contact.formMessagePlaceholder')}
                                                className="w-full bg-card-bg border border-border-primary rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none font-sans"
                                            />
                                        </div>

                                        {status === "error" && (
                                            <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                                {t('contact.errorMessage')}
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full bg-text-primary hover:bg-white text-bg-primary font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 size={18} className="animate-spin" />
                                                    {t('contact.formSending')}
                                                </>
                                            ) : (
                                                <>
                                                    {t('contact.formSubmit')}
                                                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>

                                        <p className="text-xs text-text-secondary/50 text-center mt-4">
                                            {t('contact.formNotice')}
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
