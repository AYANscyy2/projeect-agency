import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="border-b-2 bg-surface z-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] sm:h-[88px] flex items-center justify-between">
        {/* Logo */}
        <div className="font-anton text-[24px] sm:text-[32px] uppercase tracking-wide text-primary leading-none mt-1 shrink-0">
          AGENCY.dev
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex gap-8 items-center mt-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-inter text-[14px] font-bold uppercase tracking-widest transition-colors pb-1 ${
                link.href === "#services" 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button 
            variant="primary" 
            className="px-8 py-3 text-[14px] tracking-widest" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            TALK TO US
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-primary" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[72px] sm:top-[88px] bg-surface z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <nav className="flex flex-col items-center justify-start min-h-full gap-6 p-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-anton text-[32px] uppercase text-primary tracking-tight"
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant="primary" 
            className="w-full mt-4 py-5 text-[16px] tracking-widest"
            onClick={() => {
              setIsMenuOpen(false)
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            TALK TO US
          </Button>
        </nav>
      </div>
    </header>
  )
}

