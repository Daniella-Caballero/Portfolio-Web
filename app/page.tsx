"use client"

import { Header } from "@/components/sections/header-section"
import { ThemeProvider, useTheme } from "@/contexts/theme-context"
import { Hero } from "@/components/sections/hero-section"
import { About } from "@/components/sections/about-section"
import { Projects } from "@/lib/projects"
import { Skills } from "@/components/sections/skills-section"
import { Experience } from "@/lib/experience"
import { Certificates } from "@/lib/certificates"
import { Contact } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer-section"
import { LanguageToggle } from "@/components/tools/language-toggle"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeToggleButton } from "@/components/tools/theme-toggle-button"

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}

function MainContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2d1f4e] via-[#1a1b2e] to-background">
      <LanguageToggle />
      <ThemeToggleButton />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}
