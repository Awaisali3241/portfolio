"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Users, Zap, Settings } from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills one by one
          const timer = setInterval(() => {
            setAnimatedSkills((prev) => {
              if (prev.length < technicalSkills.length) {
                return [...prev, prev.length]
              }
              clearInterval(timer)
              return prev
            })
          }, 100)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const technicalSkills = [
    { name: "GoLang", level: 90, color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", level: 95, color: "from-yellow-500 to-yellow-600" },
    { name: "Java", level: 85, color: "from-red-500 to-red-600" },
    { name: "PostgreSQL", level: 88, color: "from-blue-600 to-blue-700" },
    { name: "GHL", level: 92, color: "from-green-500 to-green-600" },
    { name: "SQL", level: 90, color: "from-purple-500 to-purple-600" },
    { name: "Docker", level: 80, color: "from-blue-400 to-blue-500" },
    { name: "Python", level: 85, color: "from-green-600 to-green-700" },
    { name: "Android Dev", level: 75, color: "from-green-500 to-green-600" },
    { name: "HTML/CSS", level: 95, color: "from-orange-500 to-orange-600" },
    { name: "PHP", level: 80, color: "from-purple-600 to-purple-700" },
  ]

  const softSkills = [
    {
      name: "Customer Engagement",
      icon: <Users className="w-6 h-6" />,
      description: "Building strong client relationships",
    },
    {
      name: "Workflow Automation",
      icon: <Zap className="w-6 h-6" />,
      description: "Optimizing processes for efficiency",
    },
    {
      name: "CRM Management",
      icon: <Database className="w-6 h-6" />,
      description: "Managing customer data effectively",
    },
    {
      name: "Sales Strategy",
      icon: <Settings className="w-6 h-6" />,
      description: "Developing effective sales approaches",
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
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
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                A comprehensive overview of my technical skills and professional capabilities
              </p>
            </div>

            <div className="grid xl:grid-cols-2 gap-16">
              {/* Technical Skills */}
              <div>
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <Code className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Technical Skills</h3>
                </div>

                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ease-out ${
                        animatedSkills.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                          style={{
                            width: animatedSkills.includes(index) ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Soft Skills</h3>
                </div>

                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    >
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105 cursor-default shadow-lg hover:shadow-xl border border-gray-200 group">
                        <div className="flex items-start">
                          <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <div className="text-purple-600 group-hover:text-blue-600 transition-colors duration-300">
                              {skill.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h4>
                            <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-3xl p-10 shadow-xl border border-gray-100">
                <div className="max-w-4xl mx-auto">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning Journey</h4>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    I'm constantly expanding my skill set and staying up-to-date with the latest technologies and
                    industry best practices. My passion for learning drives me to tackle new challenges and deliver
                    innovative solutions.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {["Always Learning", "Problem Solver", "Team Player", "Innovation Focused"].map((trait, index) => (
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
