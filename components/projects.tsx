import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FolderGit2 } from "lucide-react"

const projects = [
  {
    title: "Sistema de compras",
    description:
      "Sistema web de gestión de compras para una empresa constructora, que permite registrar y controlar pedidos de materiales, subir remitos y archivos, y enviar notificaciones automáticas por email.",
    technologies: ["Spring Boot (Java)", "React", "TailwindCSS", "MySQL", "Git", "Railway"],
    githubUrl: "", // Deja vacío si no quieres mostrar el repo
    liveUrl: "", // Agrega la URL de la demo aquí
    image: "/DNCompras.jpg",
  },

  {
    title: "Simulación de Ausentismo Laboral en una Línea de Producción",
    description:
      "Este proyecto modela y simula escenarios de ausentismo dentro de un entorno industrial utilizando la simulacion de Montecarlo, con el objetivo de analizar el impacto del faltante de personal en la operación. Permite ejecutar múltiples corridas para observar estadísticas relevantes (promedios, distribuciones, tiempos, etc.).",
    technologies: ["C#", "WinForms", ".NET"],
    githubUrl: "https://github.com/facudelboca/TP3-Simulacion",
    liveUrl: "",
    image: "/TPSim.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          <FolderGit2 className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Proyectos</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.githubUrl ? (
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled className="flex-1 bg-transparent">
                      <Github className="mr-2 h-4 w-4" />
                      Código no disponible
                    </Button>
                  )}

                  {project.liveUrl ? (
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled className="flex-1 bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo no disponible
                    </Button>
                  )}
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
    </section>
  )
}
