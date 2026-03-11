"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { CertificateCard } from "../components/tools/certificate-card"
import { url } from "inspector/promises"

const certificates = [
  {
    titleKey: "angBasTitle",
    icon: "/certificates/angular-logo.png",
    image: "/certificates/cert-angular-basics.png",
    link:"https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzE5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTkxNjUxM18xMDIwNzk4Ml8xNzcyNTcyODA0MTA4LnBuZyIsInVzZXJuYW1lIjoiRGFuaWVsbGEgQ2FiYWxsZXJvIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4207%2FAngular-Basics%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1557490433981536465&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVL3TPsqhKNC1JMUyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAA82G8RBAAAA"
  },
  {
    titleKey: "reaBegTitle",
    icon: "/certificates/react-logo.png",
    image: "/certificates/cert-react-beginner.png",
    link:"https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTk0OTAxMF8xMDIwNzk4Ml8xNzczMjQzMjYwMTM3LnBuZyIsInVzZXJuYW1lIjoiRGFuaWVsbGEgQ2FiYWxsZXJvIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4215%2FReactJS%2520for%2520Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1557490433981536465&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVD8vyK8qIyMwrNEyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAJP5IURBAAAA"
  },
  {
    titleKey: "engC1Title",
    icon: "/certificates/cambridge.png",
    image: "/certificates/cert-C1-en.png?height=300&width=400",
  },
  {
    titleKey: "catC1Title",
    icon: "/certificates/logo-gen-cat.png",
    image: "/certificates/cert-C1-cat.png",
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
