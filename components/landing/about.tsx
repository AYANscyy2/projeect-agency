"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const stats = [
  { value: "2018", label: "Founded" },
  { value: "40+", label: "Team Members" },
  { value: "12", label: "Countries Served" },
]

export function About() {
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
          start: "top 90%",
        },
        yPercent: 100,
        stagger: 0.05,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      })
    })
  }, [])

  return (
    <section ref={containerRef} className="bg-surface-container-low w-full py-20 md:py-32 border-t-2 border-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section Label */}
        <p className="font-inter text-[13px] uppercase tracking-[0.1em] text-on-surface-variant font-bold mb-3 reveal-text">
          About Us
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* LEFT — Headline + Body */}
          <div className="flex flex-col gap-8">
            <h2 className="font-anton text-[36px] sm:text-[56px] md:text-[80px] uppercase text-primary leading-[0.9] reveal-text">
              WE ARE<br />BUILT FOR<br />BUILDERS.
            </h2>

            <div className="flex flex-col gap-5 border-l-4 border-primary pl-4 sm:pl-6">
              <p className="font-inter text-[16px] sm:text-[18px] text-on-surface leading-relaxed reveal-text">
                We are a team of engineers, strategists, and designers obsessed
                with one thing: building software that actually works. Not
                demos. Not prototypes. Production-grade systems that scale.
              </p>
              <p className="font-inter text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed reveal-text">
                Since 2018 we've partnered with startups and enterprises across
                12 countries to ship products that survive real-world demand.
                No hand-waving. No fluff. Just execution.
              </p>
            </div>

            {/* Mini Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t-2 border-b-2 border-primary divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-primary mt-4">
              {/* {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center py-4 sm:py-6 gap-1">
                  <span className="font-anton text-[36px] md:text-[48px] leading-none text-primary reveal-text">{s.value}</span>
                  <span className="font-inter text-[11px] sm:text-[12px] uppercase tracking-[0.08em] text-on-surface-variant font-bold reveal-text">{s.label}</span>
                </div>
              ))} */}
            </div>
          </div>

          {/* RIGHT — Image with offset + tag */}
          <div className="flex flex-col gap-10">
            {/* Image block */}
            <div className="relative w-full">
              <div className="absolute top-3 -left-3 sm:top-4 sm:-left-4 lg:top-5 lg:-left-5 w-full h-full bg-primary z-0"></div>
              <div className="relative z-10 w-full aspect-[3/2] border-2 border-primary overflow-hidden bg-black">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Our team collaborating"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            {/* Values List */}
            <div className="flex flex-col border-t-2 border-primary">
              {[
                { num: "01", title: "Radical Transparency", body: "You see everything — budgets, timelines, blockers. No surprises." },
                { num: "02", title: "Ownership Mentality", body: "We treat your product as if our own names are on the line." },
                { num: "03", title: "Velocity Without Shortcuts", body: "Speed matters. But we never trade quality for a faster ship date." },
              ].map((v) => (
                <div key={v.num} className="flex gap-4 sm:gap-6 py-6 border-b-2 border-primary group cursor-default">
                  <span className="font-inter text-[13px] font-bold text-outline tracking-widest pt-1 shrink-0 reveal-text">{v.num}</span>
                  <div>
                    <h4 className="font-anton text-[20px] sm:text-[22px] uppercase text-primary leading-none mb-2 group-hover:underline underline-offset-4 reveal-text">{v.title}</h4>
                    <p className="font-inter text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed reveal-text">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
