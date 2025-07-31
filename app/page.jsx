import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Technologies from "./components/Technologies"


export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
