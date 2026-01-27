"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function About() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
      <p className="text-foreground leading-relaxed">
        {t.about.description.split(t.about.role)[0]}
        <span className="font-semibold text-foreground">{t.about.role}</span>
        {t.about.description.split(t.about.role)[1]}
      </p>
    </section>
  )
}
