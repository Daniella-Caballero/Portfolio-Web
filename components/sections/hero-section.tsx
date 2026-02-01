"use client"

import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { useIsMobile } from "@/hooks/use-mobile"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const isMobile = useIsMobile()

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element && (window as any).lenis) {
      (window as any).lenis.scrollTo(element)
    }
  }

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <Avatar className="w-28 h-28 border-4 border-primary/30 mb-8">
        <AvatarImage src="/pfp.jpg?height=112&width=112" />
        <AvatarFallback className="text-2xl">JD</AvatarFallback>
      </Avatar>

      <h1 className="text-2xl md:text-4xl text-center max-w-5xl leading-relaxed text-balance">
        <span className="text-foreground">{t.hero.greeting}</span>
        <span className="text-foreground">{t.hero.intro}</span>
        <span className="font-bold text-foreground">{t.hero.role}</span>
        {!isMobile && <br />}
        <span className="text-foreground">{t.hero.withText}</span>
        {isMobile && <br />}
        <span className="font-bold text-foreground">{t.hero.years}</span>
        <span className="text-foreground">{t.hero.expText}</span>
        {!isMobile && <br />}
        <span className="italic text-muted-foreground">{t.hero.puzzles}</span>
        {!isMobile && <br />}
        <span className="text-foreground">{t.hero.focusText}</span>
        <span className="font-bold underline underline-offset-4 text-foreground">{t.hero.focus}</span>
        <span className="text-foreground">.</span>
      </h1>

      <div className="grid grid-rows-3 gap-2 mt-10 justify-center items-center">

        {/* Row 1 */}
        <div className="flex justify-center">
          <Button className="rounded-full text-xl md:text-2xl w-full h-full flex justify-center items-center" asChild>
            <a href="#contact" onClick={handleContactClick}>
              <span className="text-xl m-2 md:text-2xl font-semibold ">{t.buttons.contact}</span>
              <ArrowRight style={{ width: 35, height: 35 }} className="" />
            </a>
          </Button>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center items-center ">
          <Button variant="secondary" className="w-min h-full text-lg rounded-full bg-muted" asChild>
            <a href="/CV.pdf" download="Daniel_Caballero_CV.pdf">
              {t.buttons.cv}
              <Download style={{ width: 25, height: 25 }} />
            </a>
          </Button>
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-center gap-6">
          <Button variant="secondary" size="icon" className="p-7 bg-muted rounded-full" asChild>
            <a href="https://www.linkedin.com/in/daniella-caballero" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg style={{ width: 25, height: 25 }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </Button>
          <Button variant="secondary" size="icon" className="p-7 bg-muted rounded-full" asChild>
            <a href="https://github.com/Daniella-Caballero" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg style={{ width: 25, height: 25 }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </Button>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-[2px] h-24 bg-muted-foreground mt-16 rounded-full " />
    </section>
  )
}
