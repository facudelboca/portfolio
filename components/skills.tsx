import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "HTML/CSS", "Tailwind CSS", "Javascript", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Java", "Python", "Node.js"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Vercel"],
  },
  {
    category: "Otros",
    skills: ["REST APIs", "MySQL", "Testing", "Agile/Scrum", "UI/UX"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Habilidades</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
