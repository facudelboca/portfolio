import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Sobre mí</h2>
        <Card className="p-6 sm:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soy un estudiante avanzado de Ingeniería en Sistemas de Información, actualmente cursando quinto año.
              Apasionado por la tecnología y cómo nos ayuda a facilitar la vida de las personas, busco una oportunidad
              para seguir creciendo profesionalmente, aprendiendo y aportando valor siendo parte de un equipo de
              desarrollo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Con experiencia en desarrollo full-stack, trabajando tanto en el frontend como en el backend,
              siempre buscando las mejores soluciones para cada proyecto.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
