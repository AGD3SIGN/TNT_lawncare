
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    rating: 5,
    quote:
      "Finally found someone reliable! My lawn has never looked better, and he shows up exactly when he says he will.",
    name: "Sarah M.",
    location: "Oakwood Heights",
  },
  {
    rating: 5,
    quote:
      "Impressive work ethic for such a young person. Polite, professional, and does excellent work. Highly recommend!",
    name: "Robert K.",
    location: "Maple Grove",
  },
  {
    rating: 5,
    quote:
      "It's refreshing to work with someone who actually cares about doing a good job. Our neighbors keep asking who does our lawn.",
    name: "Jennifer L.",
    location: "Pine Valley",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-secondary text-secondary" : "text-muted"
          }`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="bg-card rounded-xl p-6 shadow-sm border border-border"
    >
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-4 text-card-foreground leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-background">
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
            What Neighbors Are Saying
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it—hear from homeowners in our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
