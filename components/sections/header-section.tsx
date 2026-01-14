"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

import { useTheme } from "@/contexts/theme-context"

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [activeItem, setActiveItem] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const navItems = [
    { label: t.nav.home, href: "#home", key: "home" },
    { label: t.nav.about, href: "#about", key: "about" },
    { label: t.nav.projects, href: "#projects", key: "projects" },
    { label: t.nav.skills, href: "#skills", key: "skills" },
    { label: t.nav.experience, href: "#experience", key: "experience" },
    { label: t.nav.certificates, href: "#certificates", key: "certificates" },
    { label: t.nav.contact, href: "#contact", key: "contact" },
  ]

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="hidden md:flex items-center gap-1 bg-secondary/80 backdrop-blur-md rounded-full px-2 py-2 border border-border/50">
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            onClick={() => setActiveItem(item.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeItem === item.key ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-secondary/80 backdrop-blur-md rounded-full"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-1/2 -translate-x-1/2 bg-secondary/95 backdrop-blur-md rounded-2xl p-4 border border-border/50 min-w-[200px]">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => {
                setActiveItem(item.key)
                setMobileMenuOpen(false)
              }}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeItem === item.key ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Theme toggle - fixed position */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 bg-secondary/80 backdrop-blur-md rounded-full border border-border/50"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </header>
  )
}
