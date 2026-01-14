"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} YourName. {t.rights}
        </p>
        <p className="text-gray-500 text-sm">
          <span className="text-gray-400">{t.about}</span> {t.builtWith} <span className="text-gray-300">React</span> &{" "}
          <span className="text-gray-300">Next.js</span> (App Router), <span className="text-gray-300">TypeScript</span>
          , <span className="text-gray-300">Tailwind CSS</span>, <span className="text-gray-300">shadcn/ui</span>,{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Vercel
          </a>{" "}
          {t.hosting}.
        </p>
      </div>
    </footer>
  )
}
