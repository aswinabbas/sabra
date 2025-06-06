import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-muted/50 w-full">
            <div className="container px-8 md:px-16">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Expertise</h2>
                    <p className="text-muted-foreground">
                        I work with a range of technologies to deliver robust and scalable solutions for web and mobile
                        applications.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
                    <Card>
                        <CardContent className="p-6">
                            <div className="mb-4 rounded-full bg-muted p-2.5 w-10 h-10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                            <p className="text-muted-foreground mb-4">
                                Building responsive and interactive user interfaces with modern frameworks.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">React</Badge>
                                <Badge variant="secondary">Next.js</Badge>
                                <Badge variant="secondary">TypeScript</Badge>
                                <Badge variant="secondary">Tailwind CSS</Badge>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <div className="mb-4 rounded-full bg-muted p-2.5 w-10 h-10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                                    <path d="M8 16h.01" />
                                    <path d="M8 20h.01" />
                                    <path d="M12 18h.01" />
                                    <path d="M12 22h.01" />
                                    <path d="M16 16h.01" />
                                    <path d="M16 20h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                            <p className="text-muted-foreground mb-4">
                                Creating robust APIs and server-side applications with scalable architecture.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Node.js</Badge>
                                <Badge variant="secondary">Express</Badge>
                                <Badge variant="secondary">PostgreSQL</Badge>
                                <Badge variant="secondary">GraphQL</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Skills