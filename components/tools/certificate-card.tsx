"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface CertificateCardProps {
  title: string
  icon?: string
  image: string
  link?: string
}

export function CertificateCard({ title, icon, image, link }: CertificateCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <a
      ref={cardRef}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-xl overflow-hidden bg-[#1a1b2e] border border-gray-700/50 transition-transform duration-500 hover:scale-105 ${
        isVisible ? "scale-100" : "scale-90"
      }`}
    >
      {/* Header con icono y título */}
      <div className="flex items-center gap-3 p-4 bg-[#12131f]">
        <div className={`relative w-8 h-8 flex-shrink-0 ${icon ? "" : "hidden"}`}>
          <Image src={icon || "/placeholder.svg"} alt="" fill className="object-contain" />
        </div>
        <h3 className="text-white font-medium text-sm line-clamp-2 flex-1">{title}</h3>
        <ExternalLink className={`w-4 h-4 text-gray-400 opacity-0 ${link ? "group-hover:opacity-100 transition-opacity" : ""}`} />
      </div>

      {/* Imagen del certificado */}
      <div className="relative aspect-[4/3] w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
    </a>
  )
}
