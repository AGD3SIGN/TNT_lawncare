"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className={cn(
                "text-xl sm:text-2xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-primary" : "text-primary-foreground"
              )}
            >
              GreenEdge
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-secondary",
                    isScrolled
                      ? "text-foreground"
                      : "text-primary-foreground/90"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                <a href="#contact">Free Quote</a>
              </Button>
            </div>

            {/* Mobile Menu Button & CTA */}
            <div className="flex items-center gap-3 md:hidden">
              <Button
                asChild
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                <a href="#contact">Free Quote</a>
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  "p-2 rounded-lg border transition-colors",
                  isScrolled
                    ? "text-foreground border-border hover:bg-muted"
                    : "text-primary-foreground border-white/30 hover:bg-white/10"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            {/* Dark overlay background */}
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm" />
            
            {/* Menu content */}
            <div className="relative h-full flex flex-col">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between px-4 py-5">
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold tracking-tight text-white"
                >
                  GreenEdge
                </a>
                <div className="flex items-center gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                  >
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Free Quote
                    </a>
                  </Button>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Divider line */}
              <div className="mx-4 h-px bg-white/20" />

              {/* Navigation links */}
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex-1 flex flex-col justify-start px-4 pt-8"
              >
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      className="block text-xl font-medium text-white hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Phone number */}
                <motion.a
                  href="tel:5555555555"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className="flex items-center gap-3 mt-8 text-lg font-medium text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  (555) 555-5555
                </motion.a>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
