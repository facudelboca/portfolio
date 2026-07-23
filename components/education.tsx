import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Ingeniería en Sistemas de Información",
    institution: "Universidad Tecnológica Nacional (UTN FRC)",
    period: "Marzo de 2021 - Diciembre de 2026",
    description: "Estudiante de último año de la carrera. Promedio general: 8,48",
  },
  {
    degree: "Bachiller en Lenguas (Formación Bilingüe)",
    institution: "Colegio Cinco Ríos",
    period: "Marzo de 2009 - Diciembre de 2020",
    description: "",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Educación</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-lg text-muted-foreground">{edu.institution}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
