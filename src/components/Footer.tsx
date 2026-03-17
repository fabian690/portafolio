import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../store/languageStore";

export default function Footer() {
    const { t } = useLanguage();
    
    return (
        <footer className="py-8 mt-12 border-t border-border-primary">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-text-secondary text-sm">
                    © {new Date().getFullYear()} Fabian Lopez. {t('footer.rights')}
                </p>
                <div className="flex gap-6">
                    <a href="https://github.com/LuisFaLo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors">
                        <Github size={16} />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/luis-lopez-032490349/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors">
                        <Linkedin size={16} />
                        LinkedIn
                    </a>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.dispatchEvent(new Event('open-contact-modal'));
                        }}
                        className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
                    >
                        <Mail size={16} />
                        Email
                    </a>
                    <a href="https://wa.me/59165809614?text=Hola%20Fabian,%20vi%20tu%20portafolio%20y%20me%20interesa%20tu%20perfil.%20%C2%BFPodr%C3%ADamos%20hablar%20sobre%20una%20oportunidad?" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-accent/80 hover:text-accent transition-colors">
                        <MessageCircle size={16} />
                        WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
}