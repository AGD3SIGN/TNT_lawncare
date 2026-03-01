"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero-lawn.jpg"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        {/* Dark Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e14]/95 via-[#0a2e14]/80 to-[#0a2e14]/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Reliable Lawn Care From a Local Young Professional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl text-pretty"
          >
            Experience the difference of working with someone who takes pride in every yard. 
            Consistent service, attention to detail, and a commitment to making your lawn look its best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8 h-12"
            >
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 hover:bg-white/20 text-white font-medium text-base px-8 h-12"
            >
              <a href="tel:5555555555" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call or Text
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
