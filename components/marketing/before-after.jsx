
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowLeftRight } from "lucide-react"

const transformations = [
  {
    id: 1,
    before: "/images/before-lawn.jpg",
    after: "/images/after-lawn.jpg",
    title: "Complete Lawn Transformation",
    location: "Maple Street, Local Town",
  },
]

function BeforeAfterSlider({ before, after, title, location }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] rounded-xl overflow-hidden cursor-ew-resize select-none shadow-lg"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (full background) */}
        <img
          src={after || "/placeholder.svg"}
          alt="After lawn care"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Before Image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={before || "/placeholder.svg"}
            alt="Before lawn care"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ArrowLeftRight className="h-5 w-5 text-primary" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-foreground/80 backdrop-blur-sm text-background text-sm font-medium rounded-full">
          Before
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-sm font-medium rounded-full">
          After
        </div>
      </div>

      {/* Caption */}
      <div className="text-center">
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  )
}

export function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance"
            style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
          >
            See the Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Drag the slider to see the transformation. Quality results that speak for themselves.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {transformations.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              before={item.before}
              after={item.after}
              title={item.title}
              location={item.location}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
