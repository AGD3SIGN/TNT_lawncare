"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

const serviceOptions = [
  "Lawn Mowing",
  "Edging & Trimming",
  "Seasonal Cleanup",
  "Weed Control",
  "Leaf Removal",
  "Multiple Services",
]

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = (formData) => {
    const newErrors = {}
    if (!formData.get("name")?.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.get("phone")?.trim()) {
      newErrors.phone = "Phone number is required"
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const validationErrors = validateForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-6">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Thank You!
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Your quote request has been received. I'll get back to you within 
              24 hours to discuss your lawn care needs.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance"
            style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
          >
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form below and I'll get back to you within 24 hours with 
            a personalized quote for your property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:5555555555"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>(555) 555-5555</span>
                </a>
                <a
                  href="mailto:info@greenedge.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>info@greenedge.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Local Town, State</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className={cn(
                      "h-12",
                      errors.name && "border-destructive focus-visible:ring-destructive/50"
                    )}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    className={cn(
                      "h-12",
                      errors.phone && "border-destructive focus-visible:ring-destructive/50"
                    )}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="text-sm font-medium text-foreground"
                  >
                    Address <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="123 Main St, Local Town"
                    className="h-12"
                  />
                </div>

                {/* Service Needed */}
                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-foreground"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your lawn care needs, yard size, or any questions you have..."
                    rows={4}
                    className="min-h-[120px]"
                  />
                </div>
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 h-12"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner className="mr-2" />
                      Sending...
                    </>
                  ) : (
                    "Request Free Quote"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
