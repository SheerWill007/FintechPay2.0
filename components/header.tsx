"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="CipherIQ home">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="text-sm font-bold">CI</span>
          </div>
          <span className="font-semibold">CipherIQ</span>
          <span className="sr-only">Fraud Analytics Platform</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm hover:text-primary">
            Features
          </a>
          <a href="#demo" className="text-sm hover:text-primary">
            Demo
          </a>
          <a href="#stats" className="text-sm hover:text-primary">
            Stats
          </a>
          <a href="#testimonials" className="text-sm hover:text-primary">
            Testimonials
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/login">
            <Button variant="outline" className="hidden md:inline-flex bg-transparent">
              Login
            </Button>
          </Link>
          <a href="#contact">
            <Button>Get Started</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
