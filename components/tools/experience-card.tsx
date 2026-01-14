"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface ExperienceItemProps {
  title: string
  subtitle: string
  dateRange: string
  body: string
  icon: ReactNode
  index: number
}

export function ExperienceItem({ title, subtitle, dateRange, body, icon, index }: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isLeft = index % 2 === 0

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
      className={`relative flex items-start gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      style={{
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        transition: "transform 0.5s ease-out",
      }}
    >
      {/* Content */}
      <div className={`w-[calc(50%-2rem)] ${isLeft ? "text-right" : "text-left"}`}>
        <h3 className="text-lg font-bold text-white uppercase tracking-wide">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
        <p className="text-sm text-gray-500 mt-1">{dateRange}</p>
        <p className="text-sm text-gray-300 mt-3 leading-relaxed">{body}</p>
      </div>

      {/* Icon Circle - Centered */}
      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1e2033] border border-gray-600 flex items-center justify-center z-10">
        {icon}
      </div>

      {/* Empty space for the other side */}
      <div className="w-[calc(50%-2rem)]" />
    </div>
  )
}
