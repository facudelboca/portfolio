import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Sobre mí</h2>
        <Card className="p-6 sm:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estudiante de último año de Ingeniería en Sistemas de Información (UTN FRC) con inglés avanzado (C1). Actualmente me desempeño como desarrollador en Kenility, colaborando en la migración de sistemas monolíticos a microservicios.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Además, cuento con trayectoria en el desarrollo de proyectos independientes Full Stack, diseñando soluciones a medida desde el modelado de bases de datos hasta la integración de pasarelas de pago y logística.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
