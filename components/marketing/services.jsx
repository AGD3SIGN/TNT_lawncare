"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Scissors, TreeDeciduous, Leaf, Sprout, Wind } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Lawn Mowing",
    description:
      "Professional, consistent cuts that keep your lawn healthy and looking sharp all season long.",
  },
  {
    icon: TreeDeciduous,
    title: "Edging & Trimming",
    description:
      "Clean, precise edges along driveways, walkways, and flower beds for that polished look.",
  },
  {
    icon: Leaf,
    title: "Seasonal Cleanup",
    description:
      "Spring and fall cleanup services to prepare your yard for the changing seasons.",
  },
  {
    icon: Sprout,
    title: "Weed Control",
    description:
      "Keep your lawn pristine with targeted weed removal and prevention treatments.",
  },
  {
    icon: Wind,
    title: "Leaf Removal",
    description:
      "Thorough leaf removal to protect your lawn and maintain your property's curb appeal.",
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-primary group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-card-foreground mb-2">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance"
            style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
          >
            Services That Keep Your Lawn Looking Its Best
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From regular maintenance to seasonal care, I offer comprehensive lawn services 
            tailored to your property's needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
