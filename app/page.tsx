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
import AnimatedGradientBackground from "@/components/tools/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ThemeProvider>
        <LanguageProvider>
          <AnimatedGradientBackground />
          <MainContent />
        </LanguageProvider>
      </ThemeProvider>
    </main>
  )
}

function MainContent() {
  return (
    <main className="min-h-screen bg-portfolio-gradient">
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
