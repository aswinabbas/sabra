import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden mx-8 md:mx-16">
            {/* Lattice Background */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
                        backgroundSize: "40px 40px",
                    }}
                ></div>
            </div>

            <div className="container relative">
                <div className="mx-auto max-w-3xl text-center">
                    <Badge className="mb-4 bg-muted text-muted-foreground hover:bg-muted">Available for work</Badge>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                        Crafting digital experiences with code and creativity
                    </h1>
                    <p className="mb-10 text-xl text-muted-foreground">
                        Full-stack developer specializing in building exceptional digital experiences that combine elegant
                        design with powerful functionality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="rounded-full px-8">
                            View my work
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>
    )
}

export default Hero