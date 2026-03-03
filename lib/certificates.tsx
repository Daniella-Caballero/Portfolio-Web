"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { CertificateCard } from "../components/tools/certificate-card"

const certificates = [
  {
    titleKey: "cert2Title",
    icon: "/certificates/cambridge.png",
    image: "/certificates/cert-C1-en.png?height=300&width=400",
  },
  {
    titleKey: "cert1Title",
    icon: "/certificates/logo-gen-cat.png",
    image: "/certificates/cert-C1-cat.png",
  },
  {
    titleKey: "cert3Title",
    icon: "/certificates/angular-logo.png",
    image: "/certificates/cert-angular-basics.png",
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
              //link={cert.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
