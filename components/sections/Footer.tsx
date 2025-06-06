import React from 'react'
import { Button } from '../ui/button'
import { Code, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="border-t border-border bg-background py-12 mx-8 md:mx-16">
            <div className="container">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        <span className="font-semibold">Sabra</span>
                    </div>
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} Sabra. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer