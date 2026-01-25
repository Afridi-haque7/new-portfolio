"use client"

import { useInView } from "react-intersection-observer"
import { Card } from "./ui/card"
import { portfolioData } from "@/lib/data"

export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
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
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioData.skills.map((skillCategory, categoryIndex) => (
                <Card
                  key={skillCategory.category}
                  className="p-6 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animationDelay: `${categoryIndex * 200}ms`,
                  }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                    {skillCategory.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block text-sm px-3 py-1 bg-blue-600/15 text-blue-600 dark:text-blue-400 rounded-full border border-blue-600/30 hover:bg-blue-600/25 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 border-none shadow-lg">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Always eager to learn new technologies and expand my skill set
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
