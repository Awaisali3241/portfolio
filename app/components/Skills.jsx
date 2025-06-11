"use client"

import { useEffect, useRef, useState } from "react"
import { Settings } from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const resumeSkills = [
    "On-Page & Off-Page SEO",
    "Technical SEO Audits",
    "Local SEO",
    "Advanced Keyword Strategy",
    "E-E-A-T & Semantic SEO",
    "WordPress Management",
    "Google Ads Management",
    "Basic HTML & CSS",
    "Schema Markup",
    "Performance Analysis",
    "GA4 & Search Console",
    "Content Optimization",
    "Competitor & Market Analysis",
    "Project Management",
    "AI & Automation Integration",
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Skills</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                Key areas of expertise across digital marketing, SEO, and technical optimization.
              </p>
            </div>

            {/* Skill Grid */}
            <div>
              <div className="flex items-center mb-10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Settings className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Professional Expertise</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumeSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r from-white to-gray-50 border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="text-lg font-medium text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-3xl p-10 shadow-xl border border-gray-100">
                <div className="max-w-4xl mx-auto">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Growth-Oriented Mindset</h4>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    I bring a results-driven approach to every project—blending SEO best practices, data insights, and modern
                    tools to drive sustained growth and visibility.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {["Analytical Thinker", "Results-Driven", "Adaptable", "Team Collaborator"].map((trait, index) => (
                      <span
                        key={index}
                        className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
