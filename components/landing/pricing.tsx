"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger, SplitText)

const plans = [
  {
    tier: "MVP",
    price: "$4.9K",
    unit: "/project",
    features: [
      "Clickable UI/UX Prototype",
      "Core Feature Development",
      "Basic User Authentication",
      "Mobile-Responsive Design",
      "4-6 Week Delivery"
    ],
    cta: "Start MVP",
    featured: false,
  },
  {
    tier: "Growth",
    price: "$9.9K",
    unit: "/mo",
    features: [
      "Full-Stack Web Application",
      "SEO & Performance Optimization",
      "Custom Admin Dashboard",
      "3rd-Party API Integrations",
      "Ongoing Technical Support"
    ],
    cta: "Join Growth",
    featured: true,
    badge: "Popular",
  },
  {
    tier: "E-commerce Site",
    price: "$12.5K",
    unit: "/project",
    features: [
      "Shopify or Custom Storefront",
      "Secure Payment Gateway Setup",
      "Inventory Management System",
      "Cart Abandonment Recovery",
      "High-Converting Checkout Flow"
    ],
    cta: "Build My Store",
    featured: false,
  },
  {
    tier: "Enterprise Custom",
    price: "VAR",
    unit: "/quote",
    features: [
      "Tailored Microservices Architecture",
      "Legacy System Migration",
      "Advanced Security & Compliance",
      "Dedicated Project Manager",
      "24/7 Priority Concierge"
    ],
    cta: "Talk Sales",
    featured: false,
  },
];

export function Pricing() {
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
    <section ref={containerRef} className="bg-primary text-on-primary w-full py-20 md:py-32 border-t-2 border-on-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section Label */}
        <p className="font-inter text-[13px] uppercase tracking-[0.1em] text-[#a3a3a3] font-bold mb-3 text-center reveal-text">
          Pricing & Plans
        </p>

        {/* Header */}
        <div className="text-center mb-12 md:mb-20 flex flex-col items-center gap-4">
          <h2 className="font-anton text-[36px] sm:text-[56px] md:text-[88px] uppercase leading-[0.9] text-on-primary reveal-text">
            Choose Your pricing.
          </h2>
          <p className="font-inter text-[16px] sm:text-[18px] text-[#a3a3a3] max-w-md leading-relaxed reveal-text">
            Scalable pricing for teams at every stage of their journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-5 items-stretch">
          {plans.map((plan) => (
            <div key={plan.tier} className="relative flex flex-col">

              {/* Featured offset shadow */}
              {plan.featured && (
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-full h-full bg-on-primary z-0 pointer-events-none" />
              )}

              <div
                className={`relative z-10 flex flex-col border-2 p-6 sm:p-7 h-full gap-6 ${plan.featured
                  ? "bg-on-primary text-primary border-on-primary"
                  : "bg-transparent text-on-primary border-[#3a3a3a]"
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span className="font-inter text-[11px] uppercase tracking-[0.1em] font-bold bg-primary text-on-primary px-3 py-1 w-fit reveal-text">
                    {plan.badge}
                  </span>
                )}

                {/* Tier name */}
                <p
                  className={`font-inter text-[13px] uppercase tracking-[0.1em] font-bold reveal-text ${plan.featured ? "text-[#777]" : "text-[#a3a3a3]"
                    }`}
                >
                  {plan.tier}
                </p>

                {/* Price */}
                <div className="flex items-end gap-0.5 leading-none">
                  <span className="font-anton text-[40px] sm:text-[52px] md:text-[60px] leading-none reveal-text">{plan.price}</span>
                  <span
                    className={`font-inter text-[13px] sm:text-[14px] uppercase font-bold tracking-widest mb-1 sm:mb-2 reveal-text ${plan.featured ? "text-[#777]" : "text-[#a3a3a3]"
                      }`}
                  >
                    {plan.unit}
                  </span>
                </div>

                {/* Divider */}
                <hr className={`border-0 border-t ${plan.featured ? "border-primary/10" : "border-[#3a3a3a]"}`} />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-primary" : "text-[#a3a3a3]"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                      </svg>
                      <span
                        className={`font-inter text-[13px] uppercase tracking-[0.06em] font-bold reveal-text ${plan.featured ? "text-primary" : "text-[#d0d0d0]"
                          }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.featured ? "primary" : "outline"}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
