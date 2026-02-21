import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactModal() {
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
            // REPLACE THIS URL with your actual Formspree endpoint URL
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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={close}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden relative"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-zinc-800/50 bg-zinc-900/20">
                            <div>
                                <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                                    <Send size={20} className="text-emerald-400" />
                                    Ponte en contacto
                                </h3>
                                <p className="text-zinc-400 text-sm mt-1">
                                    Envíame un mensaje y te responderé lo antes posible.
                                </p>
                            </div>
                            <button
                                onClick={close}
                                className="text-zinc-500 hover:text-white transition-colors p-2 -mr-2 rounded-full hover:bg-zinc-800"
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
                                        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-4 border border-emerald-500/20">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h4>
                                        <p className="text-zinc-400">
                                            Gracias por escribirme. Me pondré en contacto contigo pronto.
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
                                                <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    placeholder="Tu nombre completo"
                                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all font-sans"
                                                />
                                            </div>
                                            <div className="space-y-1.5 col-span-2 md:col-span-1">
                                                <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                                                    Correo Electrónico
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="tu@correo.com"
                                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all font-sans"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                                                Mensaje
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                placeholder="¿En qué puedo ayudarte?"
                                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none font-sans"
                                            />
                                        </div>

                                        {status === "error" && (
                                            <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                                Hubo un error al enviar el mensaje. Por favor, intenta nuevamente más tarde.
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full bg-zinc-100 hover:bg-white text-zinc-900 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 size={18} className="animate-spin" />
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    Enviar Mensaje
                                                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>

                                        <p className="text-xs text-zinc-600 text-center mt-4">
                                            Desarrollado con Formspree. No comparto tu información.
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
