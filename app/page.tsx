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
import SmoothScroll from "@/components/tools/smoothscroll"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-portfolio-gradient">
      <AnimatedGradientBackground />
      <ThemeProvider>
        <LanguageProvider>
          <SmoothScroll> 
            <MainContent />
          </SmoothScroll>
        </LanguageProvider>
      </ThemeProvider>
    </main>
  )
}

function MainContent() {
  return (
    <div className="relative z-10 flex flex-col">
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
    </div>
  )
}
