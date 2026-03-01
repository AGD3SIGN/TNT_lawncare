"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const stats = [
  { value: 150, suffix: "+", label: "Lawns Serviced" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Hours of Work" },
]

function AnimatedCounter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-owner.jpg"
                alt="GreenEdge Lawn Care owner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>

            {/* Stats Card - Overlapping the image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-6 right-0 sm:-right-6 lg:-right-4 bg-white rounded-2xl shadow-xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div 
                      className="text-3xl sm:text-4xl font-bold text-primary tracking-tight"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix}
                        duration={2000 + index * 200}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:pl-8 mt-16 lg:mt-0"
          >
            <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-medium rounded-full mb-4">
              About Me
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              Young, Reliable, and Serious About Quality
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Being young doesn't mean cutting corners—it means bringing energy, 
                dedication, and a fresh perspective to every lawn I care for. I started 
                this business because I believe in earning trust through hard work and 
                consistent results.
              </p>
              <p>
                When you hire me, you're not just getting lawn care. You're supporting 
                a local young entrepreneur who takes personal pride in making your 
                property look its best. I treat every yard as if it were my own.
              </p>
            </div>

            {/* Value propositions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Locally owned & operated",
                "Reliable scheduling",
                "Strong work ethic",
                "Personal attention",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                    <svg className="w-3 h-3 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
