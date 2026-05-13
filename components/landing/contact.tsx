"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger, SplitText)

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

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
          start: "top 90%",
        },
        yPercent: 100,
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      })
    })

    if (formRef.current) {
      gsap.from(formRef.current.querySelectorAll("div"), {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      })
    }
  }, [])

  return (
    <section ref={containerRef} id="contact" className="bg-primary text-on-primary w-full py-20 md:py-32 border-t-2 border-on-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section Label */}
        <p className="font-inter text-[13px] uppercase tracking-[0.1em] text-[#a3a3a3] font-bold mb-8 reveal-text">
          Contact Us
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="font-anton text-[56px] md:text-[88px] uppercase leading-[0.9] text-on-primary reveal-text">
              LET&apos;S BUILD THE FUTURE.
            </h2>
            <p className="font-inter text-[18px] text-[#a3a3a3] max-w-md leading-relaxed reveal-text">
              Ready to scale? Drop us a line. We respond to every inquiry within 24 hours. No fluff, just results.
            </p>
            <div className="mt-4 flex flex-col gap-2 reveal-text">
              <span className="font-inter text-[14px] uppercase font-bold tracking-widest text-[#777]">EMAIL US</span>
              <a href="mailto:hello@agencyname.com" className="font-anton text-[24px] md:text-[32px] hover:underline text-on-primary">HELLO@AGENCY.COM</a>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-inter text-[12px] uppercase font-bold tracking-widest text-[#777]">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="YOUR NAME"
                className="bg-transparent border-b-2 border-[#333] py-4 font-inter text-[18px] uppercase focus:outline-none focus:border-on-primary transition-colors placeholder:text-[#333] text-on-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-inter text-[12px] uppercase font-bold tracking-widest text-[#777]">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="YOUR@EMAIL.COM"
                className="bg-transparent border-b-2 border-[#333] py-4 font-inter text-[18px] uppercase focus:outline-none focus:border-on-primary transition-colors placeholder:text-[#333] text-on-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-inter text-[12px] uppercase font-bold tracking-widest text-[#777]">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="TELL US ABOUT YOUR PROJECT"
                className="bg-transparent border-b-2 border-[#333] py-4 font-inter text-[18px] uppercase focus:outline-none focus:border-on-primary transition-colors placeholder:text-[#333] text-on-primary resize-none"
              />
            </div>

            <div className="mt-4">
              <Button variant="inverse" className="w-full py-6 group">
                <span>SEND MESSAGE</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
