"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { portfolioData } from "@/lib/data"
import { ExternalLink, Github, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="h-96 cursor-pointer"
                style={{
                  animationDelay: `${index * 150}ms`,
                  perspective: "1000px",
                }}
                onPointerEnter={() => setHoveredProject(index)}
                onPointerLeave={() =>
                  setHoveredProject((current) => (current === index ? null : current))
                }
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      hoveredProject === index ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front - Image Side */}
                  <div
                    className="absolute w-full h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-xl overflow-hidden hover:shadow-2xl dark:hover:shadow-2xl transition-shadow duration-300"
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>

                  {/* Back - Content Side */}
                  <div
                    className="absolute w-full h-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-xl p-6 overflow-y-auto hover:shadow-2xl dark:hover:shadow-2xl transition-shadow duration-300"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>

                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      {project.highlights.length > 0 && (
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                            >
                              <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="w-full flex gap-2 pt-4">
                        {project.github && (
                          <Link href={project.github} target="_blank" className="flex-1">
                            <Button
                              variant="outline"
                              size="lg"
                              className="w-full"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </Link>
                        )}
                        {project.demo && (
                          <Link href={project.demo} target="_blank" className="flex-1">
                            <Button
                              size="lg"
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
