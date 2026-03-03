import { Phone, Mail, MapPin } from "lucide-react"

const serviceAreas = [
  "Benton",
  "Bryant",
  "Shannon Hills",
  "Bauxite",
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
              TNT Lawns
            </a>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Lawn Care with a BANG! Serving Benton, Arkansas and surrounding areas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:5019461922"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  (501) 946-1922
                </a>
              </li>
              <li>
                <a
                  href="mailto:tntlawns23@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  tntlawns23@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="h-4 w-4" />
                  Benton, Arkansas
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
            © {currentYear} TNT Lawns. All rights reserved. | Developed by <a href="https://www.brandonjosephtorres.com" className="hover:text-white transition-colors">Brandon Torres</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
