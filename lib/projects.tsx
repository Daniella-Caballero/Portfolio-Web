"use client"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { ProjectCard } from "../components/tools/project-card"

const projects = [
  {
    titleKey: "project1Title",
    bodyKey: "project1Body",
    tags: ["REACT", "NEXT.JS","SYMFONY", "TYPESCRIPT", "VERCEL", "GIT", "GITHUB", "CSS", "TAILWIND", "SHADCN",],
    image: "projects/influencer-website.png",
    url: "https://tonireboredo.es",
  },
  {
    titleKey: "project2Title",
    bodyKey: "project2Body",
    tags: ["Unity", "C#", "Game Development"],
    image: "projects/minimal.png",
    url: "https://daniellacaballero.itch.io/minimal",
  },
  {
    titleKey: "project3Title",
    bodyKey: "project3Body",
    tags: ["Unity", "C#", "Game Development"],
    image: "projects/cutterang.png",
    url: "https://daniellacaballero.itch.io/cutterang"
  },
]

export function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-balance text-center mb-12">{t.projects.title}</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.titleKey}
              title={t.projects[project.titleKey as keyof typeof t.projects]}
              body={t.projects[project.bodyKey as keyof typeof t.projects]}
              tags={project.tags}
              image={project.image}
              index={index}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
