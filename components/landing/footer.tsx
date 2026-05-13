"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll(".reveal-text")

    elements.forEach((el) => {
      const split = new SplitText(el, {
        type: "lines,words",
        wordsClass: "words",
        linesClass: "line",
      })

      gsap.set(split.lines, { overflow: "hidden" })

      gsap.from(split.words, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
        yPercent: 100,
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1,
      })
    })
  }, [])

  return (
    <footer ref={containerRef} className="bg-primary text-on-primary w-full border-t-2 border-[#333333]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <div className="font-anton text-[32px] sm:text-[36px] md:text-[44px] uppercase leading-none text-on-primary reveal-text">
              AGENCY.dev
            </div>
            <p className="font-inter text-[14px] sm:text-[15px] text-[#a3a3a3] leading-relaxed max-w-xs reveal-text">
              Building the digital engines that power industry leaders.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-10 h-10 border-2 border-[#555] flex items-center justify-center text-on-primary hover:border-on-primary hover:bg-on-primary hover:text-primary transition-colors">
                <span className="font-inter text-[12px] font-bold uppercase tracking-widest reveal-text">TW</span>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-[#555] flex items-center justify-center text-on-primary hover:border-on-primary hover:bg-on-primary hover:text-primary transition-colors">
                <span className="font-inter text-[12px] font-bold uppercase tracking-widest reveal-text">LI</span>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-[#555] flex items-center justify-center text-on-primary hover:border-on-primary hover:bg-on-primary hover:text-primary transition-colors">
                <span className="font-inter text-[12px] font-bold uppercase tracking-widest reveal-text">IG</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter text-[13px] uppercase tracking-[0.1em] font-bold text-[#a3a3a3] mb-1 reveal-text">Navigation</h4>
            <a href="#services" className="font-inter text-[14px] uppercase tracking-[0.06em] font-bold text-on-primary hover:underline underline-offset-4 reveal-text">Services</a>
            <a href="#about" className="font-inter text-[14px] uppercase tracking-[0.06em] font-bold text-on-primary hover:underline underline-offset-4 reveal-text">About</a>
            <a href="#services" className="font-inter text-[14px] uppercase tracking-[0.06em] font-bold text-on-primary hover:underline underline-offset-4 reveal-text">Work</a>
            <a href="#pricing" className="font-inter text-[14px] uppercase tracking-[0.06em] font-bold text-on-primary hover:underline underline-offset-4 reveal-text">Pricing</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter text-[13px] uppercase tracking-[0.1em] font-bold text-[#a3a3a3] mb-1 reveal-text">Legal</h4>
            <a href="#" className="font-inter text-[14px] uppercase tracking-[0.06em] font-bold text-on-primary hover:underline underline-offset-4 reveal-text">Privacy Policy</a>
            <a href="#" className="font-inter text-[14px] uppercase tracking-[0.06em] font-bold text-on-primary hover:underline underline-offset-4 reveal-text">Terms</a>
            <a href="#" className="font-inter text-[14px] uppercase tracking-[0.06em] font-bold text-on-primary hover:underline underline-offset-4 reveal-text">Cookies</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter text-[13px] uppercase tracking-[0.1em] font-bold text-[#a3a3a3] mb-1 reveal-text">Contact</h4>
            <a href="mailto:hello@agencyname.com" className="font-inter text-[14px] uppercase tracking-[0.06em] font-bold text-on-primary hover:underline underline-offset-4 break-all reveal-text">HELLO@AGENCYNAME.COM</a>
            <span className="font-inter text-[14px] uppercase tracking-[0.06em] font-bold text-on-primary reveal-text">+1 (800) TECH-WIN</span>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#333333]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
          <p className="font-inter text-[12px] uppercase tracking-[0.08em] text-[#777] text-center font-bold reveal-text">
            © 2024  AGENCY.dev. NO COMPROMISE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
