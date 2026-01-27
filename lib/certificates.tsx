"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { CertificateCard } from "../components/tools/certificate-card"

const certificates = [
  {
    titleKey: "cert1Title",
    icon: "/placeholder.svg?height=32&width=32",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://example.com/cert1",
  },
  {
    titleKey: "cert2Title",
    icon: "/placeholder.svg?height=32&width=32",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://example.com/cert2",
  },
  {
    titleKey: "cert3Title",
    icon: "/placeholder.svg?height=32&width=32",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://example.com/cert3",
  },
  {
    titleKey: "cert4Title",
    icon: "/placeholder.svg?height=32&width=32",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://example.com/cert4",
  },
  {
    titleKey: "cert5Title",
    icon: "/placeholder.svg?height=32&width=32",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://example.com/cert5",
  },
  {
    titleKey: "cert6Title",
    icon: "/placeholder.svg?height=32&width=32",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://example.com/cert6",
  },
]

export function Certificates() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t.certificates.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={t.certificates[cert.titleKey as keyof typeof t.certificates] as string}
              icon={cert.icon}
              image={cert.image}
              link={cert.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
