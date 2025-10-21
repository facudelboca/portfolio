import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    name: "Certificate in Advanced English (CAE) - Nivel C1",
    issuer: "Cambridge English",
    date: "2020",
    credentialUrl: "#",
  },

  {
    name: "Universidad Java",
    issuer: "Udemy",
    date: "2025",
    credentialUrl: "https://www.udemy.com/certificate/UC-87d67d79-25be-4a23-aef5-6f8c53bc0055/",
  },


]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Award className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Certificaciones</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-foreground text-pretty">{cert.name}</h3>
                <Badge variant="outline" className="ml-2 shrink-0">
                  {cert.date}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4">{cert.issuer}</p>

              <Button variant="ghost" size="sm" asChild className="w-full">
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                  Ver credencial
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
