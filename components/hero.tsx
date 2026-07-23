import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start order-2 lg:order-1 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight leading-tight">
              Facundo Del Boca
            </h1>
            <p className="text-2xl sm:text-3xl text-muted-foreground mb-6 font-medium">
              Backend Developer Junior
            </p>
            <p className="text-lg sm:text-xl text-accent font-medium max-w-2xl mb-8 leading-relaxed">
              Estudiante de Ingeniería en Sistemas enfocado en el desarrollo Backend con Java (Spring Boot) y Node.js. Apasionado por la creación de APIs REST eficientes y soluciones de software escalables.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 w-full">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
                asChild
              >
                <a href="#projects">Ver Proyectos</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-muted-foreground/30 hover:border-accent hover:text-accent font-semibold px-8 py-6 text-lg bg-transparent"
                asChild
              >
                <a href="#contact">Contactar Ahora</a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
                <a href="https://github.com/facudelboca" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
                <a href="https://www.linkedin.com/in/facundodelboca" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
                <a href="mailto:facundodelboca@gmail.com">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-6 w-6" />
                  <span className="sr-only">CV</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-accent to-primary opacity-25 blur-lg group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <img
                src="/Foto.jpg"
                alt="Facundo Del Boca"
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-accent/20 shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
