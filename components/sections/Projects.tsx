import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Github } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

const Projects = () => {
    return (
        <section id="projects" className="py-20 mx-8 md:mx-16">
            <div className="container">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground">
                        A selection of my recent work across different industries and technologies.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                            <Image
                                src="/placeholder.svg?height=400&width=800"
                                alt="Project 1"
                                width={800}
                                height={400}
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold">E-commerce Platform</h3>
                                <Badge>Web App</Badge>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                A full-featured e-commerce platform with product management, cart functionality, and payment
                                processing.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <Badge variant="outline">Next.js</Badge>
                                <Badge variant="outline">TypeScript</Badge>
                                <Badge variant="outline">Stripe</Badge>
                                <Badge variant="outline">PostgreSQL</Badge>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="outline" size="sm">
                                    View Project
                                </Button>
                                <Button variant="ghost" size="sm">
                                    <Github className="mr-2 h-4 w-4" />
                                    Source Code
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                            <Image
                                src="/placeholder.svg?height=400&width=800"
                                alt="Project 2"
                                width={800}
                                height={400}
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold">SaaS Dashboard</h3>
                                <Badge>Web App</Badge>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                A comprehensive analytics dashboard for SaaS businesses with real-time data visualization and
                                reporting.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <Badge variant="outline">React</Badge>
                                <Badge variant="outline">D3.js</Badge>
                                <Badge variant="outline">Node.js</Badge>
                                <Badge variant="outline">MongoDB</Badge>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="outline" size="sm">
                                    View Project
                                </Button>
                                <Button variant="ghost" size="sm">
                                    <Github className="mr-2 h-4 w-4" />
                                    Source Code
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-12 text-center">
                    <Button variant="outline">
                        View all projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Projects