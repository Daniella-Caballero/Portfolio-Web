"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function Header() {
  const [activeItem, setActiveItem] = useState("home")

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, key: string) => {
    e.preventDefault()
    setActiveItem(key)
    
    // Usar Lenis para smooth scroll
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    
    if (element && (window as any).lenis) {
      (window as any).lenis.scrollTo(element)
    }
  }

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "projects",
      "skills",
      "experience",
      "certificates",
      "contact",
    ];
    const handleScroll = () => {
      let current = "home";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveItem(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
            onClick={(e) => handleNavClick(e, item.href, item.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeItem === item.key ? "bg-muted-primary text-foreground" : "text-muted-foreground hover:text-foreground"
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
              onClick={(e) => {
                handleNavClick(e, item.href, item.key)
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
    </header>
  )
}
