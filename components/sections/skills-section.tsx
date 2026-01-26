"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const skills = [
  "C#",
  "Unity",
  "Git",
  "GitHub",
  "TypeScript",
  "PHP",
  "React",
  "Next.js",
  "JavaScript",
  "Flutter",
  "Dart",
  "HTML",
  "CSS",
  "Tailwind",
  "MySQL",
  "MongoDB",
  "MariaDB",
  "Supabase",
  "Python",
  "Shadcn",
  "Framer Motion",
]

export function Skills() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="skills" className="py-20 px-4">
      <div className=" max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">{t.skills.title}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 bg-[#1e2033] border border-gray-700/50 rounded-lg text-gray-300 text-sm font-medium hover:border-gray-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      {/* Divider line */}
      {/* 
      <div className="w-[2px] h-24 bg-muted-foreground rounded-full mx-auto" /> 
      */}
    </section>
  )
}
