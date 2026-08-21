"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FolderGit2, X, ChevronLeft, ChevronRight } from "lucide-react"
import posthog from "posthog-js"

interface GalleryItem {
  url: string
  description: string
}

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  image: string
  type: "professional" | "personal"
  gallery?: GalleryItem[]
}

const projects: Project[] = [
  {
    title: "Sistema de compras",
    description:
      "Sistema web para una constructora que optimiza la cadena de suministros mediante el control de pedidos, digitalización de remitos y automatización de alertas por correo para agilizar el flujo de trabajo.",
    technologies: ["Spring Boot (Java)", "React", "TailwindCSS", "MySQL", "Git", "Railway"],
    githubUrl: "", // Deja vacío si no quieres mostrar el repo
    liveUrl: "", // Agrega la URL de la demo aquí
    image: "/p-compras.jpg",
    type: "professional",
    gallery: [
      { url: "/c1.jpg", description: "Pantalla de inicio de sesión y autenticación de usuarios." },
      { url: "/c2.jpg", description: "Panel principal: Resumen general y control del estado de pedidos." },
      { url: "/c3.jpg", description: "Registro de Pedidos: Formulario para la solicitud de nuevos materiales." },
      { url: "/c4.jpg", description: "Administración: Configuración y generación de reportes personalizados." },
      { url: "/c5.jpg", description: "Recepción de Pedidos: Visualización de entregas y carga de archivos adjuntos." },
    ],
  },
  {
    title: "SHIM E-commerce",
    description:
      "E-commerce para indumentaria médica con catálogo de variantes, personalización de bordados y cotización automática de logística. Incluye checkout seguro y un panel administrativo con analíticas en tiempo real.",
    technologies: ["React", "Node.js", "Cloud Firestore (NoSQL)", "Firebase", "Vite", "Git", "Cloudflare"],
    githubUrl: "",
    liveUrl: "https://www.shim.com.ar/",
    image: "/p-shim.jpg",
    type: "professional",
  },
  {
    title: "Planificador de menús",
    description:
      "Planificador de menú semanal y lista de compras inteligente. Permite diseñar planes de alimentación, consolidar ingredientes automáticamente mediante equivalencias de unidades y previsualizar e importar recetas internacionales traducidas al español en tiempo real.",
    technologies: ["React", "Node.js (Express)", "PostgreSQL", "Prisma ORM", "Vercel", "Git"],
    githubUrl: "https://github.com/facudelboca/mealcrafter",
    liveUrl: "https://mealcrafter.vercel.app",
    image: "/p-mealcrafter.jpg",
    type: "personal",
  },
  {
    title: "Gestor de gastos",
    description:
      "Aplicación de finanzas personales que registra, edita y categoriza transacciones en tiempo real. Cuenta con gráficos interactivos y un dashboard dinámico para el análisis visual del balance financiero.",
    technologies: ["Spring Boot (Java)", "PostgreSQL","React", "Docker", "Git"],
    githubUrl: "https://github.com/facudelboca/gestorgastos",
    liveUrl: "",
    image: "/p-gastos.jpg",
    type: "personal",
    gallery: [
      { url: "/g1.jpg", description: "Pantalla de inicio de sesión y acceso seguro a la cuenta." },
      { url: "/g2.jpg", description: "Panel general: Resumen de saldos, cuentas y registro de transacciones." },
      { url: "/g3.jpg", description: "Historial de Transacciones: Listado detallado y cronológico de movimientos." },
      { url: "/g4.jpg", description: "Planificación Financiera: Seguimiento de operaciones y metas de ahorro." },
      { url: "/g5.jpg", description: "Evolución Mensual: Gráficos interactivos de ingresos y egresos." },
      { url: "/g6.jpg", description: "Administración: Configuración de cuentas y categorías personalizadas." },
    ],
  },
]

export function Projects() {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem[] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectTitle, setProjectTitle] = useState("")

  const openGallery = (gallery: GalleryItem[], title: string) => {
    setSelectedGallery(gallery)
    setCurrentIndex(0)
    setProjectTitle(title)
    
    // Capturar evento personalizado en PostHog
    posthog.capture("gallery_opened", { project: title })
  }

  const closeGallery = () => {
    setSelectedGallery(null)
  }

  const nextImage = () => {
    if (!selectedGallery) return
    setCurrentIndex((prev) => (prev + 1) % selectedGallery.length)
  }

  const prevImage = () => {
    if (!selectedGallery) return
    setCurrentIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length)
  }

  useEffect(() => {
    if (!selectedGallery) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % selectedGallery.length)
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length)
      } else if (e.key === "Escape") {
        setSelectedGallery(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedGallery])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          <FolderGit2 className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Proyectos</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow pt-0 pb-0 gap-0 flex flex-col justify-between">
              <div>
                <div className="aspect-[1534/695] w-full overflow-hidden bg-muted relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover block"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <Badge
                      className={`backdrop-blur-md border ${
                        project.type === "professional"
                          ? "bg-accent/80 border-accent/30 text-white"
                          : "bg-muted/80 border-border/30 text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {project.type === "professional"
                        ? "Cliente Real"
                        : "Proyecto Personal"}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 pb-0">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex gap-2">
                  {project.githubUrl ? (
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  ) : null}

                  {project.liveUrl ? (
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver demo
                      </a>
                    </Button>
                  ) : project.gallery ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openGallery(project.gallery!, project.title)}
                      className="flex-1 bg-transparent cursor-pointer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver más
                    </Button>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/facudelboca" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Ver más en GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Modal de la Galería */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={closeGallery} />
          
          {/* Floating close button */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Cerrar galería"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Gallery Content */}
          <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center max-h-[95vh] animate-scale-up">
            {/* Image & Navigation */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src={selectedGallery[currentIndex].url}
                alt={selectedGallery[currentIndex].description}
                className="max-w-full max-h-[72vh] sm:max-h-[78vh] object-contain transition-all duration-300 select-none rounded-lg shadow-2xl border border-white/10"
              />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Description & Page Indicators */}
            <div className="mt-4 text-center px-4 max-w-2xl">
              <p className="text-sm sm:text-base font-medium text-white/90 leading-relaxed drop-shadow-md">
                {selectedGallery[currentIndex].description}
              </p>
              
              {/* Image dots indicator */}
              <div className="flex justify-center gap-2 mt-3">
                {selectedGallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 w-1.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? "bg-accent w-4" : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Ir a la imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
