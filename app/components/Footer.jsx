"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
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
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Zain Ul Abideen
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Frontend | Backend Developer passionate about creating innovative solutions and building scalable
                applications with modern technologies.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="mailto:chxain10@gmail.com"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/zain-ul-abideen-7605b487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
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
                    className="block w-full text-gray-400 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4 text-gray-400">
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <a href="mailto:chxain10@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                    chxain10@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Location</p>
                  <p>Islamabad, Pakistan</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Status</p>
                  <span className="inline-flex items-center px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm flex items-center mb-4 md:mb-0">
                © {currentYear} Zain Ul Abideen. Made with{" "}
                <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
                in Islamabad, Pakistan
              </p>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-400 hover:text-white hover:border-white rounded-full px-4 py-2 transition-all duration-300 hover:scale-105"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
