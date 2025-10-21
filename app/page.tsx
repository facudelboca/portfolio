import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Navigation } from "@/components/navigation"
import { Languages } from "@/components/languages"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Languages />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}
