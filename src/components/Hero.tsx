import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react";


export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
            <motion.div style={{ y, opacity }} className="z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 mb-6"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-zinc-400 text-sm font-medium tracking-wide bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
                        Disponible para trabajar
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-50 mb-6"
                >
                    Hola, soy <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Fabian Lopez.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed"
                >
                    Desarrollador Full-Stack. Transformo tus ideas en software rápido, escalable y fácil de usar.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mt-8"
                >
                    <a
                        href="https://github.com/LuisFaLo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-zinc-900 text-zinc-400 rounded-full hover:bg-zinc-800 hover:text-zinc-50 transition-colors border border-zinc-800 hover:border-zinc-700"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/luis-lopez-032490349/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-zinc-900 text-zinc-400 rounded-full hover:bg-zinc-800 hover:text-zinc-50 transition-colors border border-zinc-800 hover:border-zinc-700"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-10 z-10 flex flex-wrap gap-4"
            >
                <a
                    href="#proyectos"
                    className="relative overflow-hidden px-6 py-3 bg-zinc-100 text-zinc-950 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all inline-block shadow-[0_0_20px_rgba(52,211,153,0.1)] group text-center flex-1 sm:flex-none"
                >
                    <span className="relative z-10">Ver proyectos</span>
                    <div className="absolute inset-0 shimmer-button rounded-full pointer-events-none"></div>
                </a>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.dispatchEvent(new Event('open-contact-modal'));
                    }}
                    className="px-6 py-3 bg-zinc-900/50 text-zinc-50 rounded-full font-medium hover:bg-zinc-900 border border-zinc-800 transition-colors inline-flex items-center gap-2"
                >
                    <Mail size={18} />
                    Email
                </a>
                <a
                    href="https://wa.me/59165809614?text=Hola%20Fabian,%20vi%20tu%20portafolio%20y%20me%20interesa%20tu%20perfil.%20%C2%BFPodr%C3%ADamos%20hablar%20sobre%20una%20oportunidad?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-500/10 text-emerald-400 rounded-full font-medium hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors inline-flex items-center gap-2"
                >
                    <MessageCircle size={18} />
                    WhatsApp
                </a>
                <a
                    href="/cv.pdf"
                    download="CV_Jhosua_Caucota.pdf"
                    className="px-6 py-3 bg-emerald-500/10 text-emerald-400 rounded-full font-medium hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors inline-flex items-center gap-2"
                >
                    <Download size={18} />
                    Descargar CV
                </a>
            </motion.div>
        </section>
    );
}