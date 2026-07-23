import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Trainee Backend Developer",
    company: "Kenility (Córdoba, Argentina)",
    period: "Mayo 2026 - Presente",
    description: [
      "Participé en el proceso de migración de un sistema monolítico hacia una arquitectura de microservicios, integrando un equipo enfocado en un servicio específico del dominio.",
      "Desarrollé y mantuve APIs REST, colaborando en la implementación de endpoints, resolución de bugs y tareas de refactorización.",
      "Colaboré en la integración con bases de datos y en el aseguramiento de buenas prácticas de código dentro de un entorno de trabajo ágil."
    ],
    technologies: ["Java", "Spring Boot", "Microservicios", "APIs RESTful", "Bases de Datos", "Git", "Metodologías Ágiles"],
  },
  {
    title: "Desarrollador de Software Freelance",
    company: "Independiente",
    period: "Septiembre 2025 - Marzo 2026",
    description: [
      "Sitio Web Corporativo (Empresa Constructora): Desarrollo y mantenimiento, implementando mejoras visuales y funcionales orientadas a la experiencia de usuario y optimización del sitio.",
      "Sistema de Compras (Empresa Constructora): Diseño y desarrollo integral de un sistema interno desde cero. Construcción del backend con Java y Spring Boot, garantizando una API REST robusta y segura.",
      "Plataforma E-commerce: Desarrollo Full Stack del cliente web e infraestructura backend sobre Firebase. Programación de flujos a medida y funciones serverless/cloud con Node.js."
    ],
    technologies: ["Java", "Spring Boot", "Node.js", "Firebase", "APIs RESTful", "React", "Javascript", "HTML", "CSS", "Git"],
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experiencia Laboral</h2>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker with Briefcase icon */}
              <div className="absolute left-0 -translate-x-1/2 top-1.5 p-2 rounded-full bg-card border border-border group-hover:border-primary text-muted-foreground group-hover:text-primary transition-all duration-300 shadow-sm z-10">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Card */}
              <Card className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border bg-card text-card-foreground">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-2.5 py-1 rounded-md self-start sm:self-auto border">
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc list-outside ml-5 text-muted-foreground leading-relaxed mb-6 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
