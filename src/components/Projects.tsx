import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../store/languageStore";

// Tariquia Web
import tariquiaLogin from "../assets/loginTariquiaRepo.png";
import tariquiaPrincipal from "../assets/pantallaprincipalTariquia.png";
import tariquiaEstudiantes from "../assets/pantallaestudiantestariquia.png";
import tariquiaReportes from "../assets/reportestariquia.png";

// Gym System
import gymLogin from "../assets/loginGYM.png";
import gymPrincipal from "../assets/pantallaPrincipalGym.png";
import gymMembresias from "../assets/membresiasgym.png";
import gymGrafica from "../assets/graficaprogresogym.png";

// Tariquia App
import appLogin from "../assets/applogin.png";
import appInicio from "../assets/appInicio.png";
import appPrincipal from "../assets/apppantallaprincipal.png";
import appMaterias from "../assets/appMaterias.png";
import appDescargas from "../assets/appdescargas.png";

const projectImages = [
  [tariquiaLogin, tariquiaPrincipal, tariquiaEstudiantes, tariquiaReportes],
  [appLogin, appInicio, appPrincipal, appMaterias, appDescargas],
  [gymLogin, gymPrincipal, gymMembresias, gymGrafica],
  []
];

export default function Projects() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; projectId: number; imageIndex: number }>({
    isOpen: false,
    projectId: 0,
    imageIndex: 0,
  });

  const rawProjects = t('projects.items');
  const proyectos = Array.isArray(rawProjects) ? rawProjects.map((p: any, i: number) => ({
    ...p,
    imagenes: projectImages[i] || [],
    stack: i === 0 ? ["Spring Boot", "React", "PostgreSQL", "Docker Swarm"] :
           i === 1 ? ["React Native", "Spring Boot", "Android"] :
           i === 2 ? ["Vue", "Node.js", "MongoDB"] :
           ["Angular", "NestJS", "PostgreSQL"],
    enlace: i === 0 ? "https://tariquiarepo.uajms.edu.bo/tariquiarepo/" : null,
    tipo: i === 1 ? "mobile" : "web",
    estado: i === 3 ? "En desarrollo" : null
  })) : [];

  const openLightbox = (projectId: number, imageIndex: number) => {
    setLightbox({ isOpen: true, projectId, imageIndex });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = "auto";
  };

  const getImgSrc = (img: any) => {
    if (!img) return "";
    return typeof img === "string" ? img : img.src;
  };

  return (
    <section id="proyectos" className="py-32 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-text-primary mb-16"
      >
        {t('projects.title')}
      </motion.h2>

      <div className="flex flex-col gap-24">
        {proyectos.map((proyecto: any, index: number) => (
          <ProjectCard
            key={index}
            proyecto={proyecto}
            index={index}
            onImageClick={(imgIndex: number) => openLightbox(index, imgIndex)}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary/90 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors p-2"
            >
              <X size={32} />
            </button>

            <div
              className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={`${lightbox.projectId}-${lightbox.imageIndex}`}
                src={getImgSrc(proyectos[lightbox.projectId].imagenes[lightbox.imageIndex])}
                alt="Full screen project image"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {proyectos[lightbox.projectId].imagenes.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const imgs = proyectos[lightbox.projectId].imagenes;
                      setLightbox((prev: any) => ({ ...prev, imageIndex: (prev.imageIndex - 1 + imgs.length) % imgs.length }));
                    }}
                    className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const imgs = proyectos[lightbox.projectId].imagenes;
                      setLightbox((prev: any) => ({ ...prev, imageIndex: (prev.imageIndex + 1) % imgs.length }));
                    }}
                    className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight size={40} />
                  </button>
                </>
              )}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-primary/80 font-medium bg-bg-primary/50 px-4 py-2 rounded-full backdrop-blur-md">
              {lightbox.imageIndex + 1} / {proyectos[lightbox.projectId].imagenes.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ proyecto, index, onImageClick }: { proyecto: any, index: number, onImageClick: (i: number) => void }) {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (proyecto.imagenes.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % proyecto.imagenes.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (proyecto.imagenes.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + proyecto.imagenes.length) % proyecto.imagenes.length);
    }
  };

  const getImgSrc = (img: any) => {
    if (!img) return "";
    return typeof img === "string" ? img : img.src;
  };

  const isMobileApp = proyecto.tipo === "mobile";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group grid md:grid-cols-2 gap-8 items-center relative"
    >
      <div className={`relative rounded-2xl overflow-hidden bg-card-bg border border-border-primary group-hover:border-accent transition-all duration-500 md:-rotate-2 md:group-hover:rotate-0 ${isMobileApp ? "aspect-[9/16] max-w-[280px] mx-auto md:mx-0 shadow-2xl" : "aspect-video w-full"
        }`}>
        {proyecto.imagenes.length > 0 ? (
          <div className="relative w-full h-full group/carousel cursor-zoom-in" onClick={() => onImageClick(currentImageIndex)}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={getImgSrc(proyecto.imagenes[currentImageIndex])}
                alt={`${proyecto.titulo} screenshot ${currentImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain p-2"
              />
            </AnimatePresence>

            {proyecto.imagenes.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-card-bg text-text-secondary rounded-full hover:text-text-primary transition-colors z-10 opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-card-bg text-text-secondary rounded-full hover:text-text-primary transition-colors z-10 opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {proyecto.imagenes.map((_: any, i: number) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentImageIndex ? 'bg-text-primary' : 'bg-text-secondary/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/carousel:opacity-10 pointer-events-none transition-opacity bg-bg-primary">
              <span className="text-text-primary font-medium">{t('projects.hoverZoom')}</span>
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-border-primary to-card-bg opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-text-secondary font-medium text-lg">{t('projects.statusSoon')}</span>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h3 className="text-2xl font-medium text-text-primary group-hover:text-accent transition-colors">
            {proyecto.titulo}
          </h3>
          {proyecto.titulo.includes("Tariquia") && !proyecto.titulo.includes("App") && (
            <span className="px-2 py-0.5 bg-accent-muted text-accent text-xs font-medium rounded-full border border-accent/20">
              Team Lead
            </span>
          )}
          {proyecto.estado === "En desarrollo" && (
            <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full border border-amber-500/20 animate-pulse">
              {t('projects.statusDevelopment')}
            </span>
          )}
        </div>

        <p className="text-text-secondary text-lg mb-6 leading-relaxed">
          {proyecto.descripcion}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {proyecto.stack.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-card-bg border border-border-primary text-text-secondary text-sm rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {proyecto.estado !== "En desarrollo" && proyecto.enlace && (
            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-primary hover:text-accent transition-colors flex items-center gap-2"
            >
              <ExternalLink size={18} />
              {t('projects.demoBtn')}
            </a>
          )}
          <a
            href="#"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
          >
            <Github size={18} />
            {t('projects.codeBtn')}
          </a>
        </div>
      </div>
    </motion.div>
  );
}