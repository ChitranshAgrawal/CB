"use client"

/**
 * Footer - Dark footer with 4-column grid layout
 * Includes branding, links, services, and contact info
 */

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, MessageCircle, Heart } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Business Websites',
  'E-commerce',
  'Web Applications',
  'CRM & Portals',
  'Website Redesign',
  'Maintenance',
]

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative bg-[#020B18] border-t border-[#00D4FF]/20">
      {/* Subtle particle dots background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00D4FF]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#00D4FF]/20 rounded-lg blur-md" />
                <span className="relative text-xl font-bold text-[#00D4FF]" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>CB</span>
              </div>
              <span className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>InfoTech</span>
            </div>
            
            {/* Tagline */}
            <p className="text-[#B8D4E8] text-sm mb-6 max-w-xs">
              Engineering the Digital Future. Premium web development solutions for businesses worldwide.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[#0A1628] border border-[#1A3A5C]/50 flex items-center justify-center text-[#7BC8FF] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#B8D4E8] hover:text-[#00D4FF] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[#B8D4E8] text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-[#B8D4E8]">
                <span className="text-[#7BC8FF]">Email:</span><br />
                <a href="mailto:hello@cbinfotech.in" className="hover:text-[#00D4FF] transition-colors">
                  hello@cbinfotech.in
                </a>
              </p>
              <p className="text-[#B8D4E8]">
                <span className="text-[#7BC8FF]">Phone:</span><br />
                <a href="tel:+919876543210" className="hover:text-[#00D4FF] transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="text-[#B8D4E8]">
                <span className="text-[#7BC8FF]">Location:</span><br />
                India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1A3A5C]/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#7BC8FF]">
              &copy; {new Date().getFullYear()} CB InfoTech. All rights reserved.
            </p>
            <p className="text-sm text-[#7BC8FF] flex items-center gap-1">
              Crafted with <Heart size={14} className="text-[#00D4FF] fill-[#00D4FF]" /> by CB InfoTech
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
