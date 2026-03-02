
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin } from "lucide-react"

const areas = [
  "Downtown",
  "Oakwood Heights",
  "Maple Grove",
  "Pine Valley",
  "Riverside",
  "Cedar Hills",
  "Willow Creek",
  "Sunset Ridge",
]

export function ServiceArea() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Service Area
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-balance"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Proudly Serving Our Local Community
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Based in Local Town, I provide lawn care services throughout the surrounding 
            neighborhoods. Not sure if you're in my service area? Just ask!
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-border"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
