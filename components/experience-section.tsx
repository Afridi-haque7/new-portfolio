"use client"

import { useInView } from "react-intersection-observer"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { portfolioData } from "@/lib/data"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 to-purple-600 hidden md:block" />

            {portfolioData.experience.map((exp, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block" />

                <Card className="ml-0 md:ml-20 p-6 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 group-hover:scale-110 transition-transform duration-300">
                            <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {exp.position}
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mt-1 font-semibold">
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 ml-14">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 ml-14">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
