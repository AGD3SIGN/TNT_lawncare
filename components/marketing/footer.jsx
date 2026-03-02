import { Phone, Mail, MapPin } from "lucide-react"

const serviceAreas = [
  "Downtown",
  "Oakwood Heights",
  "Maple Grove",
  "Pine Valley",
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a2e] text-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white"
            >
              GreenEdge
            </a>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Professional lawn care services for homeowners who value quality 
              and reliability.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:5555555555"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  (555) 555-5555
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@greenedge.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  info@greenedge.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="h-4 w-4" />
                  Local Town, State
                </span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-white/70 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {currentYear} GreenEdge Lawn Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
