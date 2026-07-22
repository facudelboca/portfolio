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
      "Sitio Web Corporativo (Empresa Constructora): Desarrollo y mantenimiento, implementando mejoras visuales y funcionales orientadas a la experiencia de usuario y optimización del sitio (grupo-denovo.com).",
      "Sistema de Compras (Empresa Constructora): Diseño y desarrollo integral de un sistema interno desde cero. Construcción del backend con Java y Spring Boot, garantizando una API REST robusta y segura.",
      "Plataforma E-commerce: Desarrollo Full Stack del cliente web e infraestructura backend sobre Firebase. Programación de flujos a medida y funciones serverless/cloud con Node.js (www.shim.com.ar)."
    ],
    technologies: ["Java", "Spring Boot", "Node.js", "Firebase", "APIs RESTful", "HTML", "CSS", "Javascript", "Git"],
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experiencia Laboral</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>

              <ul className="list-disc list-outside ml-5 text-muted-foreground leading-relaxed mb-4 space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
