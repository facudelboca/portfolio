"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Copy, Check, MapPin, ExternalLink } from "lucide-react"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "facundodelboca@gmail.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Contacto</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            ¡Hablemos! Estoy disponible para nuevas oportunidades laborales, proyectos freelance o simplemente para conectar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Info Card */}
          <Card className="p-6 sm:p-8 flex flex-col justify-center border bg-card text-card-foreground gap-6">
            <h3 className="text-xl font-bold text-foreground">Redes y Ubicación</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Ubicación</p>
                  <p className="text-sm">Córdoba, Argentina</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/facundodelboca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                  >
                    linkedin.com/in/facundodelboca
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                  <a
                    href="https://github.com/facudelboca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors flex items-center gap-1"
                  >
                    github.com/facudelboca
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Copy Email Card */}
          <Card className="p-6 sm:p-8 flex flex-col justify-center items-center text-center border bg-card text-card-foreground gap-6">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Mail className="h-10 w-10" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Escríbeme por correo</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                Puedes copiar mi dirección de email aquí abajo con un solo clic:
              </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row items-stretch gap-2 bg-muted p-2 rounded-lg border">
              <div className="flex-1 flex items-center justify-center sm:justify-start px-3 py-2 text-sm font-mono text-muted-foreground select-all">
                {email}
              </div>
              <Button 
                onClick={copyToClipboard}
                className="font-semibold transition-all duration-200"
                variant={copied ? "default" : "secondary"}
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    ¡Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
