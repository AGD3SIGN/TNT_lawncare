
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-28 bg-primary">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight text-balance"
          style={{ fontSize: "clamp(1.875rem, 5vw, 3rem)" }}
        >
          Let's Take Care of Your Lawn
        </h2>
        <p className="mt-4 text-primary-foreground/85 text-lg max-w-2xl mx-auto">
          Ready to enjoy a beautifully maintained yard without the hassle? 
          Get started with a free, no-obligation quote today.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-10 h-14 shadow-lg hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300"
          >
            <a href="#contact">Request a Free Quote</a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
