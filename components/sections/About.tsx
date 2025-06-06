import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import { SpinningTextButton } from '../spinning-text-button'

const About = () => {
    return (
        <section id="about" className="py-20 mx-8 md:mx-16">
            <div className="container">
                <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-6">About me</h2>
                        <p className="text-muted-foreground mb-4">
                            I'm a full-stack developer with over 8 years of experience building products for clients across
                            various industries. I specialize in creating fast, responsive, and intuitive web applications using
                            modern technologies.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            My approach combines technical expertise with a strong focus on user experience and business goals. I
                            believe in writing clean, maintainable code that scales with your business.
                        </p>
                        <div className="flex gap-4">
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
                    <div className="relative">
                        <div className="aspect-[4/5] w-4/5 mx-auto overflow-hidden rounded-2xl bg-muted">
                            <Image
                                src="/placeholder.svg?height=600&width=600"
                                alt="Alex Morgan"
                                width={600}
                                height={600}
                                className="object-cover"
                            />
                        </div>

                        {/* Spinning Text Button */}
                        <div className="absolute -bottom-6 -left-6">
                            <SpinningTextButton href="#contact" />
                        </div>

                        <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-20 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About