import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Desarrollo Web",
    company: "Grupo Denovo",
    period: "Nvoiembre 2020 - Abril 2021",
    description:
      "Desarrollo de sitio web responsive para la empresa constructora De Novo, implementado con HTML, CSS y JavaScript, optimizando rendimiento y usabilidad",
    technologies: ["HTML", "CSS", "Javascript", "Git", "Bootstrap"],
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

              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

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
