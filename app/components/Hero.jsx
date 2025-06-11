"use client"

import { useState, useEffect } from "react"
import { Download, Mail, ArrowDown, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/30 to-purple-50/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl pulse-slow"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full blur-3xl pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/5 to-purple-300/5 rounded-full blur-3xl pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image */}
          <div className="w-36 h-36 mx-auto mb-8 relative group">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 pulse-slow group-hover:animate-none transition-all duration-300">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/awais.png"
                  alt="Awais Ali"
                  className="w-32 h-32 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            {/* Floating dots */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">Awais Ali</h1>

          <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            SEO | SEM Specialist
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Driving growth through data-driven Search & Paid strategies
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Helping businesses grow through targeted traffic, lead generation, and performance marketing.
            Marketing graduate from Hazara University, scaling brands with SEO, Google Ads, and Semantic SEO strategies.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/awaisali-seospecialist/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:aliawan3241@gmail.com"
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/awais-resume.pdf"
              download
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-3 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium mb-2">Scroll Down</span>
                <ArrowDown className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
