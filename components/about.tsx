"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">{t.about.title}</h2>
        <Card className="p-6 sm:p-8 border bg-card text-card-foreground">
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {t.about.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {t.about.p2}
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
