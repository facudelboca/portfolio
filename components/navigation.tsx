"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.certifications, href: "#certifications" },
    { name: t.nav.languages, href: "#languages" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ]

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
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-md" : "bg-transparent"
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
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all rounded-md"
              >
                {item.name}
              </a>
            ))}

            {/* Language Switcher Desktop */}
            <div className="ml-3 pl-3 border-l border-border/80 flex items-center gap-1 bg-muted/40 p-1 rounded-lg border border-border/50">
              <Globe className="h-3.5 w-3.5 text-muted-foreground ml-1 mr-0.5" />
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-0.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  language === "es"
                    ? "bg-accent text-white shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Cambiar idioma a Español"
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-accent text-white shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Right Bar: Language Switcher & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-lg border border-border/60">
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-0.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  language === "es"
                    ? "bg-accent text-white"
                    : "text-muted-foreground"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-accent text-white"
                    : "text-muted-foreground"
                }`}
              >
                EN
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
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
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border shadow-xl">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/80"
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
