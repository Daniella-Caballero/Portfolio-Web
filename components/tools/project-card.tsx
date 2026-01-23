"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  body: string
  tags: string[]
  image: string
  index: number
  url?: string
}

export function ProjectCard({ title, body, tags, image, index, url }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isReversed = index % 2 !== 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio
        })
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const cardContent = (
    <div
      ref={cardRef}
      className={`flex flex-col  ${url ? "cursor-pointer" : ""} ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-8 p-6 rounded-xl bg-[#1a1b2e]/80 border border-gray-700/50 transition-transform duration-200 hover:scale-105 active:scale-100 ease-out`}
    >
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">{body}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-gray-300 bg-[#2a2b3e] rounded-full border border-gray-600/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </div>
    </div>
  )

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      {cardContent}
    </a>
  ) : cardContent
}
