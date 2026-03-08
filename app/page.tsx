/**
 * CB InfoTech - Main Landing Page
 * Premium full-stack web development company website
 * Engineering the Digital Future
 */

import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { TechStack } from '@/components/sections/TechStack'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Portfolio } from '@/components/sections/Portfolio'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { ParticleBackground } from '@/components/effects/ParticleBackground'
import { CustomCursor } from '@/components/effects/CustomCursor'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#020B18]">
      {/* Global effects */}
      <ParticleBackground />
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Page sections */}
      <Hero />
      <Services />
      <TechStack />
      <WhyChooseUs />
      {/* <Portfolio /> */}
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
