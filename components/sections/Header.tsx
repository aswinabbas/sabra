'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useTheme } from "next-themes"
import { Github, Linkedin, Menu, Moon, Sun, Twitter, X } from 'lucide-react'


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        const handleSectionChange = () => {
            const sections = ["home", "about", "education", "skills", "projects", "contact"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section === "home" ? "hero" : section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("scroll", handleSectionChange)
        handleSectionChange() // Set initial active section

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("scroll", handleSectionChange)
        }
    }, [])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "mx-8 md:mx-16 mt-4" : ""
                }`}
        >
            <div
                className={`transition-all duration-300 ${isScrolled
                    ? "rounded-full border border-border bg-background/80 backdrop-blur-sm shadow-lg"
                    : "border-b border-border bg-background/80 backdrop-blur-sm"
                    }`}
            >
                <div className="container flex h-12 items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        SB
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="#hero"
                            className={`relative text-sm hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "home" ? "text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            Home
                            {activeSection === "home" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                        </Link>
                        <Link
                            href="#about"
                            className={`relative text-sm hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "about" ? "text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            About
                            {activeSection === "about" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                        </Link>
                        <Link
                            href="#education"
                            className={`text-sm hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "education" ? "text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            Education
                            {activeSection === "education" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                        </Link>
                        <Link
                            href="#skills"
                            className={`text-sm hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "skills" ? "text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            Skills
                            {activeSection === "skills" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                        </Link>
                        <Link
                            href="#projects"
                            className={`text-sm hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "projects" ? "text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            Projects
                            {activeSection === "projects" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                        </Link>
                        <Link
                            href="#contact"
                            className={`text-sm hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "contact" ? "text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            Contact
                            {activeSection === "contact" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                        </Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="text-muted-foreground hover:text-foreground h-8 w-8"
                        >
                            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>
                        <span className="hidden lg:block text-sm font-medium text-muted-foreground">developer</span>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMobileMenu}
                            className="md:hidden text-muted-foreground hover:text-foreground h-8 w-8"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
                    <div className="container h-full flex flex-col">
                        <div className="flex items-center justify-between h-12 mt-4">
                            <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeMobileMenu}>
                                AM
                            </Link>
                            <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                                <X className="h-5 w-5" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </div>
                        <nav className="flex flex-col items-center justify-center gap-8 flex-1">
                            <Link
                                href="#hero"
                                className={`text-lg hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "home" ? "text-foreground" : "text-muted-foreground"
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                Home
                                {activeSection === "home" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                            </Link>
                            <Link
                                href="#about"
                                className={`text-lg hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "about" ? "text-foreground" : "text-muted-foreground"
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                About
                                {activeSection === "about" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                            </Link>
                            <Link
                                href="#education"
                                className={`text-lg hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "education" ? "text-foreground" : "text-muted-foreground"
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                Education
                                {activeSection === "education" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                            </Link>
                            <Link
                                href="#skills"
                                className={`text-lg hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "skills" ? "text-foreground" : "text-muted-foreground"
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                Skills
                                {activeSection === "skills" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                            </Link>
                            <Link
                                href="#projects"
                                className={`text-lg hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "projects" ? "text-foreground" : "text-muted-foreground"
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                Projects
                                {activeSection === "projects" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                            </Link>
                            <Link
                                href="#contact"
                                className={`text-lg hover:text-foreground transition-colors flex items-center gap-2 ${activeSection === "contact" ? "text-foreground" : "text-muted-foreground"
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                Contact
                                {activeSection === "contact" && <div className="w-2 h-2 rounded-full bg-orange-400"></div>}
                            </Link>
                        </nav>
                        <div className="flex justify-center gap-4 py-6">
                            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Button>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </Button>
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header