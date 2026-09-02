"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-8 w-8 text-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t.education.title}</h2>
        </div>

        <div className="space-y-6">
          {t.education.items.map((edu, index) => (
            <Card key={index} className="p-6 sm:p-8 hover:shadow-lg transition-shadow border bg-card text-card-foreground">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-lg text-muted-foreground">{edu.institution}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-2.5 py-1 rounded-md self-start sm:self-auto border">
                  {edu.period}
                </span>
              </div>

              {edu.description && (
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
