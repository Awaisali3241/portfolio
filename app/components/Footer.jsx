"use client"

import { Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="bg-gray-950 text-white py-16 relative overflow-hidden">
      {/* Background blur gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Personal Info */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Awais Ali
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              SEO Specialist & Digital Marketer focused on delivering performance through strategy, analytics, and automation.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="mailto:awais@example.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/awais-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <div className="space-y-3 text-sm text-gray-400">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full hover:text-white hover:underline transition-all duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right text-sm text-gray-400">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <p className="mb-2">
              <span className="text-white">Email:</span>{" "}
              <a href="mailto:awais@example.com" className="hover:text-blue-400">
                aliawan3241@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <span className="text-white">Location:</span> Islamabad, Pakistan
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Awais Ali. All rights reserved.
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-gray-700 text-gray-400 hover:text-white hover:border-white rounded-full px-4 py-2 transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
