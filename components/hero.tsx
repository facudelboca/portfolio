import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="animate-fade-in-up">
        <div className="mb-8 relative inline-block">
            <img
              src="/Foto.jpg"
              alt="Facundo Del Boca"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-accent/20 shadow-xl mx-auto"
            />
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance tracking-tight">
            Facundo Del Boca
          </h1>
          <p className="text-2xl sm:text-3xl text-muted-foreground mb-6">Desarrollador Full Stack</p>
          <p className="text-lg sm:text-xl text-accent font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
            Apasionado por crear experiencias digitales excepcionales. Curioso por aprender y mejorar día a día.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
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
              <a href="#about">Contactar Ahora</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {["React", "Java", "TypeScript", "Python", "Node.js", "Docker", "AWS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-accent/30 text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
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
      </div>
    </section>
  )
}
