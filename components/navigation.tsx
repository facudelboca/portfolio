"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Educación", href: "#education" },
  { name: "Certificados", href: "#certifications" },
  { name: "Idiomas", href: "#languages" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm -z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors rounded-md hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
