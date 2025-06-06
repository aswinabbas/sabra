"use client"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface SpinningTextButtonProps {
  href: string
  text?: string
}

export function SpinningTextButton({ href, text = "Let's talk • Let's talk • " }: SpinningTextButtonProps) {
  return (
    <div className="relative w-32 h-32">
      {/* Spinning text circle */}
      <div className="absolute inset-0 w-full h-full animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="circle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
            className="text-foreground"
          />
          <text className="text-[8px] uppercase tracking-widest fill-current">
            <textPath href="#circle" className="text-foreground">
              {text.repeat(2)}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center button */}
      <Link
        href={href}
        className="absolute inset-0 flex items-center justify-center w-16 h-16 m-auto bg-background border border-border rounded-full hover:bg-muted transition-colors duration-200"
      >
        <ArrowUpRight className="w-5 h-5" />
      </Link>
    </div>
  )
}
