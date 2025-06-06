"use client"


import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Education from "@/components/sections/Education"
import Footer from "@/components/sections/Footer"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
