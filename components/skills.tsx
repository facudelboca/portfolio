import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Server, Layout, Cloud } from "lucide-react"

const skillCategories = [
  {
    category: "Backend & Bases de Datos",
    icon: Server,
    skills: ["Java", "Spring Boot", "Node.js", "APIs RESTful", "MySQL", "PostgreSQL", "Cloud Firestore (NoSQL)", "Firebase"],
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Git / GitHub", "Docker", "CI/CD", "Cloudflare", "Railway", "Vercel"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Habilidades</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all flex flex-col gap-4 border bg-card text-card-foreground">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-2.5 transition-all duration-200 hover:bg-primary hover:text-primary-foreground cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

