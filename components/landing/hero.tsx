import * as React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Hero() {

  const mainHeaad = useRef<HTMLHeadingElement>(null)
  const img = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const para = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    const split = new SplitText(mainHeaad.current, {
      type: "lines,words",
      wordsClass: "words",
      linesClass: "line",
    })

    gsap.set(container.current, {
      opacity: 1
    })

    gsap.set(split.lines, {
      overflow: "hidden",
    })

    const tl = gsap.timeline()
    tl.from(split.words, {
      yPercent: 100,
      stagger: 0.1,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.2
    })

    tl.to(img.current, {
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power2.out",
    }, 0)
    tl.from(para.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }, 0.5)

  }, [])


  return (
    <main ref={container} className="flex-1 opacity-0  max-w-[1400px] mx-auto w-full px-6 md:px-12 py-16 md:py-24 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Text Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 ref={mainHeaad} className="overflow-hidden font-anton text-[64px] md:text-[88px] lg:text-[104px] leading-[0.95] uppercase text-primary tracking-[-0.02em]">
            WE BUILD
            SOFTWARE THAT
            WORKS FOR YOUR
            BUSINESS.
          </h1>
          <p ref={para} className="font-inter text-[18px] md:text-[20px] text-on-surface-variant max-w-[540px] leading-[1.6]">
            High-performance digital solutions engineered for scale, speed, and
            undeniable impact. We don't just write code; we build the engine for your
            next phase of growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button
              variant="primary"
              className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-3 group"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>START YOUR PROJECT</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            {/* <Button
              variant="secondary"
              className="w-full sm:w-auto px-8 py-4 !bg-white"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW OUR WORK
            </Button> */}
          </div>
        </div>

        {/* Image */}
        <div ref={img} className="relative translate-y-50 opacity-0 mt-8 lg:mt-0 w-full max-w-[560px] mx-auto lg:ml-auto">
          {/* Offset Black Square */}
          <div className="absolute top-4 -right-4 lg:top-6 lg:-right-6 w-full h-full bg-primary z-0"></div>
          {/* Main Image Container */}
          <div className="relative z-10 bg-black w-full aspect-[4/5] overflow-hidden">
            <Image
              src="https://ik.imagekit.io/bkt3emitco/High%20contrast%20server%20rack.svg?updatedAt=1778567039644"
              alt="High contrast server rack"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}
