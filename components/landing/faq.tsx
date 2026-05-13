import { Plus } from "lucide-react"
import * as React from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const faqs = [
  {
    q: "How fast can you start?",
    a: "We can kick off discovery within 48 hours of signing. Our onboarding sprint takes 1 week, after which your dedicated team is heads-down building. No queues, no hand-offs to an account manager — your engineers are available from day one.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every engagement includes a 30-day stabilisation period at no extra cost. Beyond that, our retainer plans cover ongoing maintenance, monitoring, security patches, and feature velocity — at whichever cadence suits your roadmap.",
  },
  {
    q: "What technologies do you specialise in?",
    a: "Our core stack spans TypeScript, React, Next.js, Node, Go, and PostgreSQL on the frontend and backend. For infrastructure we use AWS, GCP, and Kubernetes. We'll adopt your existing stack where it makes sense — we're not dogmatic.",
  },
  {
    q: "Is my IP protected?",
    a: "Absolutely. All IP produced during an engagement is assigned to you in full — no carve-outs. We sign NDAs before discovery begins, and our standard MSA includes explicit IP-transfer clauses reviewed by our legal team.",
  },
]

export function FAQ() {
  const [open, setOpen] = React.useState<number | null>(null)
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
    <section ref={containerRef} className="bg-surface w-full py-20 md:py-32 border-t-2 border-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="font-anton text-[36px] sm:text-[56px] md:text-[80px] uppercase text-primary leading-[0.9] mb-12 md:mb-16 reveal-text">
          Common Questions.
        </h2>

        {/* Accordion */}
        <div className="flex flex-col border-t-2 border-primary">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="border-b-2 border-primary">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-inter text-[14px] md:text-[16px] font-bold uppercase tracking-[0.06em] text-primary group-hover:underline underline-offset-4 reveal-text">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <Plus className="w-5 h-5 text-primary" />
                  </span>
                </button>

                {/* Answer panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                >
                  <p className="font-inter text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
