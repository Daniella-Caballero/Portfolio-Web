"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { useRef, useEffect, useState, type ReactNode } from "react"

interface ExperienceItemProps {
  title: string
  subtitle: string
  dateRange: string
  body: string
  icon: ReactNode
  index: number
  language: string
}

export function ExperienceItem({ title, subtitle, dateRange, body, icon, index, language }: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isLeft = index % 2 === 0
  const isMobile = useIsMobile()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex p-3 md:p-0 items-start md:gap-8  ${isMobile ? 'flex-col' : `${isLeft ? "flex-row" : "flex-row-reverse"}`} `}
      style={{
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        transition: "transform 0.5s ease-out",
      }}
    >
      {/* Content */}
      <div className={` ${isMobile ? "left-2 right-2 w-full pl-6 text-center" : `w-[calc(50%-2rem)] ${isLeft ? "text-right" : "text-left"}`}`}>
        <h3 className="text-lg font-bold uppercase tracking-wide">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        <p className="text-sm text-muted-foreground mt-1">{dateRange}</p>
        <p className="text-sm mt-3 leading-relaxed">
          {language === "es" && (body.includes("responsive") || body.includes("headless")) ? (
            <>
              {body.split("responsive")[0]}
              <span className="italic">{body.includes("responsive") ? "responsive" : ""}</span>
              {body.split("responsive").length > 1 && body.split("responsive")[1].split("headless")[0]}
              <span className="italic">{body.includes("headless") ? "headless" : ""}</span>
              {body.split("headless").length > 1 && body.split("headless")[1]}
            </>
          ) : (
            body
          )}
        </p>
      </div>

      {/* Icon Circle - Centered */}
      <div className="absolute md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary border border-gray-600 flex items-center justify-center z-10">
        {icon}
      </div>

      {/* Empty space for the other side */}
      <div className="w-[calc(50%-2rem)]" />
    </div>
  )
}
