import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from "lucide-react";

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

const proyectos = [
  {
    titulo: "Tariquia - Repositorio Académico",
    descripcion: "Plataforma universitaria para la gestión de archivos de profesores y administración de préstamos de tablets.",
    stack: ["Spring Boot", "React", "PostgreSQL", "Docker Swarm"],
    enlace: "https://tariquiarepo.uajms.edu.bo/tariquiarepo/",
    tipo: "web",
    imagenes: [tariquiaLogin, tariquiaPrincipal, tariquiaEstudiantes, tariquiaReportes]
  },
  {
    titulo: "Tariquia - App Móvil",
    descripcion: "Aplicación móvil complementaria para consulta rápida de recursos y gestión de perfil de usuario en el campus.",
    stack: ["React Native", "Spring Boot", "Android"],
    enlace: null,
    tipo: "mobile",
    imagenes: [appLogin, appInicio, appPrincipal, appMaterias, appDescargas]
  },
  {
    titulo: "Sistema de Gestión para Gimnasio",
    descripcion: "Plataforma integral para el control de membresías, usuarios y administración general del recinto deportivo.",
    stack: ["Vue", "Node.js", "MongoDB"],
    enlace: null,
    tipo: "web",
    imagenes: [gymLogin, gymPrincipal, gymMembresias, gymGrafica]
  },
  {
    titulo: "Clínica de Laboratorio",
    descripcion: "Sistema de gestión para el control de pacientes, órdenes de exámenes y resultados clínicos. Enfocado en la optimización de tiempos.",
    stack: ["Angular", "NestJS", "PostgreSQL"],
    enlace: null,
    tipo: "web",
    imagenes: [],
    estado: "En desarrollo"
  }
];

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; projectId: number; imageIndex: number }>({
    isOpen: false,
    projectId: 0,
    imageIndex: 0,
  });

  const openLightbox = (projectId: number, imageIndex: number) => {
    setLightbox({ isOpen: true, projectId, imageIndex });
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = "auto";
  };

  // Helper to safely get image source
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
        className="text-3xl md:text-4xl font-bold text-zinc-100 mb-16"
      >
        Proyectos Destacados
      </motion.h2>

      <div className="flex flex-col gap-24">
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            proyecto={proyecto}
            index={index}
            onImageClick={(imgIndex) => openLightbox(index, imgIndex)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-2"
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
                      setLightbox(prev => ({ ...prev, imageIndex: (prev.imageIndex - 1 + imgs.length) % imgs.length }));
                    }}
                    className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const imgs = proyectos[lightbox.projectId].imagenes;
                      setLightbox(prev => ({ ...prev, imageIndex: (prev.imageIndex + 1) % imgs.length }));
                    }}
                    className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight size={40} />
                  </button>
                </>
              )}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
              {lightbox.imageIndex + 1} / {proyectos[lightbox.projectId].imagenes.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ proyecto, index, onImageClick }: { proyecto: any, index: number, onImageClick: (i: number) => void }) {
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

  // Helper to safely get image source
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
      {/* Glow effect behind the card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />

      {/* Visual: Image Carousel or Placeholder */}
      <div className={`relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-all duration-500 md:-rotate-2 md:group-hover:rotate-0 ${isMobileApp ? "aspect-[9/16] max-w-[280px] mx-auto md:mx-0 shadow-2xl" : "aspect-video w-full"
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
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-zinc-900/80 text-zinc-200 rounded-full hover:bg-zinc-800 transition-colors z-10 opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-zinc-900/80 text-zinc-200 rounded-full hover:bg-zinc-800 transition-colors z-10 opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {proyecto.imagenes.map((_: any, i: number) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentImageIndex ? 'bg-white' : 'bg-zinc-600'}`}
                    />
                  ))}
                </div>
              </>
            )}
            {/* Hover hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/carousel:opacity-10 pointer-events-none transition-opacity bg-black">
              <span className="text-white font-medium">Click para ampliar</span>
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-zinc-700 font-medium text-lg">Próximamente</span>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h3 className="text-2xl font-medium text-zinc-100 group-hover:text-white transition-colors">
            {proyecto.titulo}
          </h3>
          {proyecto.titulo.includes("Tariquia") && !proyecto.titulo.includes("App") && (
            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20">
              Team Lead
            </span>
          )}
          {proyecto.estado === "En desarrollo" && (
            <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full border border-amber-500/20 animate-pulse">
              En desarrollo
            </span>
          )}
        </div>

        <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
          {proyecto.descripcion}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {proyecto.stack.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm rounded-md"
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
              className="text-sm font-medium text-zinc-100 hover:text-white transition-colors flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Ver Demo Live
            </a>
          )}
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-2"
          >
            <Github size={18} />
            Ver Código
          </a>
        </div>
      </div>
    </motion.div>
  );
}