"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function Certifications() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Award className="h-8 w-8 text-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t.certifications.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.certifications.items.map((cert, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border bg-card text-card-foreground flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="text-lg font-bold text-foreground text-pretty">{cert.name}</h3>
                  <Badge variant="outline" className="shrink-0 bg-muted/50">
                    {cert.date}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6">{cert.issuer}</p>
              </div>

              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full bg-card/60 border-border hover:border-accent hover:bg-accent hover:text-white font-medium transition-all duration-200"
              >
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                  {t.certifications.viewCredential}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
