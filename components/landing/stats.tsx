"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll(".stat-text")
    
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
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      })
    })
  }, [])

  return (
    <section ref={containerRef} className="bg-primary text-on-primary w-full border-t-2 border-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 divide-x-0 lg:divide-x-2 divide-[#333333]">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="font-anton text-[56px] lg:text-[72px] leading-none mb-3 stat-text">150+</div>
            <div className="font-inter text-[13px] uppercase tracking-[0.1em] text-[#a3a3a3] font-bold stat-text">Projects Delivered</div>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="font-anton text-[56px] lg:text-[72px] leading-none mb-3 stat-text">99.9%</div>
            <div className="font-inter text-[13px] uppercase tracking-[0.1em] text-[#a3a3a3] font-bold stat-text">Uptime Maintained</div>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="font-anton text-[56px] lg:text-[72px] leading-none mb-3 stat-text">45</div>
            <div className="font-inter text-[13px] uppercase tracking-[0.1em] text-[#a3a3a3] font-bold stat-text">Industry Awards</div>
          </div>
          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="font-anton text-[56px] lg:text-[72px] leading-none mb-3 stat-text">24/7</div>
            <div className="font-inter text-[13px] uppercase tracking-[0.1em] text-[#a3a3a3] font-bold stat-text">Dedicated Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
