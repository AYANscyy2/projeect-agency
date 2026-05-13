"use client"
import * as React from "react"
import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { Services } from "@/components/landing/services"
import { About } from "@/components/landing/about"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const scrollRefs = {
    container: useRef<HTMLDivElement>(null),
    navbar: useRef<HTMLDivElement>(null),
    hero: useRef<HTMLDivElement>(null),
    stats: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    footer: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {

    gsap.set(scrollRefs.container.current, {
      opacity: 1
    })
    const tl = gsap.timeline();
    tl.from(scrollRefs.navbar.current, {
      yPercent: -100,
      duration: 1,
      ease: "linear",

    })

  }, [])

  return (
    <div ref={scrollRefs.container} className="min-h-screen opacity-0 flex flex-col bg-surface">
      <div ref={scrollRefs.navbar} className="fixed top-0 left-0 bg-white z-50 w-full"><Navbar /></div>
      <div ref={scrollRefs.hero} className="border-b-2"><Hero /></div>
      {/* <div ref={scrollRefs.stats}><Stats /></div> */}
      <div id="services" ref={scrollRefs.services}><Services /></div>
      <div id="about" ref={scrollRefs.about}><About /></div>
      <div id="pricing" ref={scrollRefs.pricing}><Pricing /></div>
      <div id="faq" ref={scrollRefs.faq}><FAQ /></div>
      <div id="contact" ref={scrollRefs.contact}><Contact /></div>
      <div ref={scrollRefs.footer}><Footer /></div>
    </div>
  )
}
