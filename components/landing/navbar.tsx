import * as React from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b-2 bg-surface sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[88px] flex items-center justify-between">
        {/* Logo */}
        <div className="font-anton text-[32px] uppercase tracking-wide text-primary leading-none mt-1">
          AGENCY.dev
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex gap-8 items-center mt-1">
          <a href="#services" className="font-inter text-[14px] font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1">Services</a>
          <a href="#about" className="font-inter text-[14px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary pb-1 transition-colors">About</a>
          <a href="#work" className="font-inter text-[14px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary pb-1 transition-colors">Work</a>
          <a href="#pricing" className="font-inter text-[14px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary pb-1 transition-colors">Pricing</a>
          <a href="#faq" className="font-inter text-[14px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary pb-1 transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <Button variant="primary" className="hidden lg:inline-flex px-8 py-3 text-[14px] tracking-widest" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          TALK TO US
        </Button>
      </div>
    </header>
  )
}
