"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

export function Services() {
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
    <section ref={containerRef} className="bg-surface py-20 md:py-32 w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="font-inter text-[13px] uppercase tracking-[0.1em] text-on-surface-variant font-bold mb-3 reveal-text">Capabilities</h2>
          <h3 className="font-anton text-[40px] sm:text-[56px] md:text-[80px] uppercase text-primary leading-[0.9] reveal-text">What We Do.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          
          {/* Card 1 */}
          <div className="relative group h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-primary translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 md:translate-x-4 md:translate-y-4 z-0 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <div className="relative z-10 bg-white border-2 border-primary p-6 sm:p-8 md:p-10 h-full flex flex-col gap-6 md:gap-8 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
               <svg className="w-10 h-10 md:w-12 md:h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <rect x="2" y="4" width="20" height="16" strokeLinejoin="miter" strokeLinecap="square" />
                 <line x1="2" y1="10" x2="22" y2="10" strokeLinecap="square" />
                 <line x1="9" y1="10" x2="9" y2="20" strokeLinecap="square" />
               </svg>
               <div>
                 <h4 className="font-anton text-[28px] sm:text-[32px] uppercase text-primary mb-3 leading-none reveal-text">Web Platforms</h4>
                 <p className="font-inter text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed reveal-text">
                   Architecting scalable, responsive web ecosystems that drive user engagement and conversion.
                 </p>
               </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative group h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-primary translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 md:translate-x-4 md:translate-y-4 z-0 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <div className="relative z-10 bg-white border-2 border-primary p-6 sm:p-8 md:p-10 h-full flex flex-col gap-6 md:gap-8 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
               <svg className="w-10 h-10 md:w-12 md:h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <rect x="6" y="2" width="12" height="20" strokeLinejoin="miter" strokeLinecap="square" />
                 <line x1="18" y1="7" x2="19" y2="7" strokeLinecap="square" strokeWidth={3} />
                 <line x1="18" y1="10" x2="19" y2="10" strokeLinecap="square" strokeWidth={3} />
               </svg>
               <div>
                 <h4 className="font-anton text-[28px] sm:text-[32px] uppercase text-primary mb-3 leading-none reveal-text">Mobile Apps</h4>
                 <p className="font-inter text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed reveal-text">
                   Building native-quality mobile experiences that live in your customers' pockets.
                 </p>
               </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="relative group h-full md:col-span-2 lg:col-span-1">
            <div className="absolute top-0 left-0 w-full h-full bg-primary translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 md:translate-x-4 md:translate-y-4 z-0 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <div className="relative z-10 bg-white border-2 border-primary p-6 sm:p-8 md:p-10 h-full flex flex-col gap-6 md:gap-8 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
               <svg className="w-10 h-10 md:w-12 md:h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinejoin="round" strokeLinecap="round" d="M17.5 19H9a5 5 0 0 1-1.41-9.8 6 6 0 0 1 11.53 1.05 4.5 4.5 0 0 1-1.62 8.75z" />
               </svg>
               <div>
                 <h4 className="font-anton text-[28px] sm:text-[32px] uppercase text-primary mb-3 leading-none reveal-text">Cloud Systems</h4>
                 <p className="font-inter text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed reveal-text">
                   Deploying robust, secure infrastructure that handles millions of requests without breaking a sweat.
                 </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
