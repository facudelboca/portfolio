import { Card } from "@/components/ui/card"
import { LanguagesIcon } from "lucide-react"

const languages = [
  {
    name: "Español",
    level: "Nativo",
    proficiency: 100,
  },
  {
    name: "Inglés",
    level: "C1 - Avanzado",
    proficiency: 90,
    certificate: "Certificate in Advanced English (CAE) - Cambridge",
  },
  // Agrega más idiomas aquí si es necesario
]

export function Languages() {
  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <LanguagesIcon className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Idiomas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
             
                <h3 className="text-xl font-bold text-foreground mb-1">{language.name}</h3>
                <p className="text-sm text-muted-foreground">{language.level}</p>
              
              {language.certificate && (
                <p className="text-sm text-muted-foreground mt-3 italic">{language.certificate}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
