"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import posthog from "posthog-js"
import { useLanguage } from "@/context/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start order-2 lg:order-1 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-3 tracking-tight leading-tight">
              {t.hero.greeting}
            </h1>
            <p className="text-2xl sm:text-3xl text-accent mb-5 font-semibold">
              {t.hero.role}
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground font-normal max-w-2xl mb-8 leading-relaxed">
              {t.hero.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 w-full">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-accent/25 transition-all hover:scale-105"
                asChild
              >
                <a 
                  href="#projects" 
                  onClick={() => posthog.capture('hero_cta_clicked', { target: 'projects' })}
                >
                  {t.hero.viewProjects}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border/80 hover:border-accent hover:bg-accent hover:text-white text-foreground font-semibold px-8 py-6 text-lg bg-card/40 transition-all hover:scale-105"
                asChild
              >
                <a 
                  href="#contact" 
                  onClick={() => posthog.capture('hero_cta_clicked', { target: 'contact' })}
                >
                  {t.hero.contactMe}
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-border/60 bg-card/60 text-muted-foreground hover:text-white hover:bg-accent hover:border-accent transition-all duration-200 hover:scale-110 shadow-sm"
                asChild
              >
                <a 
                  href="https://github.com/facudelboca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('social_link_clicked', { platform: 'github', location: 'hero' })}
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-border/60 bg-card/60 text-muted-foreground hover:text-white hover:bg-accent hover:border-accent transition-all duration-200 hover:scale-110 shadow-sm"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/facundodelboca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('social_link_clicked', { platform: 'linkedin', location: 'hero' })}
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-border/60 bg-card/60 text-muted-foreground hover:text-white hover:bg-accent hover:border-accent transition-all duration-200 hover:scale-110 shadow-sm"
                asChild
              >
                <a 
                  href="mailto:facundodelboca@gmail.com"
                  onClick={() => posthog.capture('social_link_clicked', { platform: 'email', location: 'hero' })}
                  title="Email"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-border/60 bg-card/60 text-muted-foreground hover:text-white hover:bg-accent hover:border-accent transition-all duration-200 hover:scale-110 shadow-sm"
                asChild
              >
                <a 
                  href={t.hero.cvUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => posthog.capture('cv_download', { location: 'hero', file: t.hero.cvUrl })}
                  title={t.hero.cvTitle}
                >
                  <FileText className="h-5 w-5" />
                  <span className="sr-only">{t.hero.cvTitle}</span>
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
