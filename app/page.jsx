import { Header } from "@/components/marketing/header"
import { Hero } from "@/components/marketing/hero"
import { Services } from "@/components/marketing/services"
import { BeforeAfter } from "@/components/marketing/before-after"
import { About } from "@/components/marketing/about"
import { Testimonials } from "@/components/marketing/testimonials"
import { ServiceArea } from "@/components/marketing/service-area"
import { CTA } from "@/components/marketing/cta"
import { ContactForm } from "@/components/marketing/contact-form"
import { Footer } from "@/components/marketing/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <About />
        <Testimonials />
        <ServiceArea />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
