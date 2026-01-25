"use client"

import { useInView } from "react-intersection-observer"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { portfolioData } from "@/lib/data"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 to-purple-600 hidden md:block" />

            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block" />

                <Card className="ml-0 md:ml-20 p-6 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {edu.location}
                          </p>
                        </div>
                      </div>

                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                      )}

                      {edu.achievements.length > 0 && (
                        <div className="space-y-2 pt-2">
                          {edu.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <Award className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Badge className="bg-linear-to-r from-blue-600 to-purple-600 text-white border-none px-4 py-1 shrink-0">
                      {edu.period}
                    </Badge>
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
