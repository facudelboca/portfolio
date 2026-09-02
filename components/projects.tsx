"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FolderGit2, X, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import posthog from "posthog-js"
import { useLanguage } from "@/context/language-context"
import { GalleryItem } from "@/lib/translations"

export function Projects() {
  const { t } = useLanguage()
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
          <FolderGit2 className="h-8 w-8 text-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t.projects.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {t.projects.items.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 pt-0 pb-0 gap-0 flex flex-col justify-between border bg-card text-card-foreground">
              <div>
                <div className="aspect-[1534/695] w-full overflow-hidden bg-muted relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover block transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <Badge
                      className={`backdrop-blur-md border font-medium ${
                        project.type === "professional"
                          ? "bg-accent/90 border-accent/40 text-white"
                          : "bg-muted/90 border-border/40 text-muted-foreground"
                      }`}
                    >
                      {project.type === "professional"
                        ? t.projects.realClient
                        : t.projects.personalProject}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 pb-0">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex gap-2">
                  {project.githubUrl ? (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 bg-card/60 border-border hover:border-accent hover:bg-accent hover:text-white font-medium transition-all duration-200"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {t.projects.code}
                      </a>
                    </Button>
                  ) : null}

                  {project.liveUrl ? (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 bg-card/60 border-border hover:border-accent hover:bg-accent hover:text-white font-medium transition-all duration-200"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t.projects.demo}
                      </a>
                    </Button>
                  ) : project.gallery ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openGallery(project.gallery!, project.title)}
                      className="flex-1 bg-card/60 border-border hover:border-accent hover:bg-accent hover:text-white font-medium transition-all duration-200 cursor-pointer"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      {t.projects.viewMore}
                    </Button>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-border hover:border-accent hover:bg-accent hover:text-white text-foreground font-semibold px-8 py-6 text-base bg-card/60 transition-all hover:scale-105 shadow-sm"
          >
            <a href="https://github.com/facudelboca" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              {t.projects.viewMoreGithub}
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
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 hover:bg-accent text-white backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
            aria-label={t.projects.closeGallery}
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
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-accent text-white backdrop-blur-md transition-all cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
                aria-label={t.projects.prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-accent text-white backdrop-blur-md transition-all cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
                aria-label={t.projects.nextImage}
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
                    aria-label={`Slide ${idx + 1}`}
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
