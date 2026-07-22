import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Sobre mí</h2>
        <Card className="p-6 sm:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estudiante de último año de Ingeniería en Sistemas de Información (UTN FRC) enfocado en el desarrollo Backend con Java (Spring Boot) y Node.js. Me enfoco en el desarrollo de APIs REST eficientes, el modelado de datos y la resolución de problemas mediante soluciones de software escalables.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cuento con experiencia práctica desarrollando sistemas en producción tanto en empresas de software (Kenility) como en proyectos independientes (freelance).
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
