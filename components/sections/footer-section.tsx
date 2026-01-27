"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="py-8 px-4 border-t border-foreground/50">
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Daniella. {t.rights}
        </p>
        <p className="text-muted-foreground text-sm">
          <span className="text-muted-foreground">{t.about}</span> {t.builtWith} <span className="text-foreground">React</span> &{" "}
          <span className="text-muted-foreground">Next.js</span> (App Router), <span className="text-foreground">TypeScript</span>
          , <span className="text-muted-foreground">Tailwind CSS</span>, <span className="text-foreground">shadcn/ui</span>,{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Vercel
          </a>{" "}
          {t.hosting}.
        </p>
      </div>
    </footer>
  )
}
