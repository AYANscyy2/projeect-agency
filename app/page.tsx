"use client"
import * as React from "react"
import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { Services } from "@/components/landing/services"
import { About } from "@/components/landing/about"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const scrollRefs = {
    navbar: useRef<HTMLDivElement>(null),
    hero: useRef<HTMLDivElement>(null),
    stats: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    footer: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(scrollRefs.navbar.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",

    })

  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <div ref={scrollRefs.navbar}><Navbar /></div>
      <div ref={scrollRefs.hero}><Hero /></div>
      <div ref={scrollRefs.stats}><Stats /></div>
      <div ref={scrollRefs.services}><Services /></div>
      <div ref={scrollRefs.about}><About /></div>
      <div ref={scrollRefs.pricing}><Pricing /></div>
      <div ref={scrollRefs.faq}><FAQ /></div>
      <div ref={scrollRefs.footer}><Footer /></div>
    </div>
  )
}
