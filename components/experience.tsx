"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-8 w-8 text-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t.experience.title}</h2>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          {t.experience.items.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker with Briefcase icon */}
              <div className="absolute left-0 -translate-x-1/2 top-1.5 p-2 rounded-full bg-card border border-border group-hover:border-accent text-muted-foreground group-hover:text-accent transition-all duration-300 shadow-sm z-10">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Card */}
              <Card className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border bg-card text-card-foreground">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                      {exp.roleType && (
                        <Badge variant="outline" className="text-xs border-accent/40 text-accent bg-accent/10 font-medium px-2 py-0.5">
                          {exp.roleType}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-2.5 py-1 rounded-md self-start sm:self-auto border">
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc list-outside ml-5 text-muted-foreground leading-relaxed mb-6 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
