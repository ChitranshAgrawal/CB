"use client"

/**
 * Pricing - Three-tier pricing cards with glass morphism design
 * Professional tier highlighted as most popular
 */

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowButton } from '@/components/ui/GlowButton'

const pricingTiers = [
  {
    name: 'Starter',
    price: '₹10,000',
    description: 'Perfect for small businesses getting started online',
    features: [
      'Responsive Business Website',
      'Up to 5 Pages',
      'Contact Form Integration',
      '1 Month Free Support',
      'Basic SEO Setup',
    ],
    popular: false,
    note: 'Launch your dream website — No hidden costs.',
  },
  {
    name: 'Professional',
    price: '₹25,000',
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      'Everything in Starter',
      'E-commerce or Custom Features',
      'CMS Integration',
      '3 Months Support & Maintenance',
      'Advanced SEO',
    ],
    popular: true,
    note: null,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale applications and complex requirements',
    features: [
      'Full Custom Web Application',
      'CRM / Portal Development',
      'Server Setup & Deployment',
      'AMC (Annual Maintenance Contract)',
      'Priority Support',
    ],
    popular: false,
    note: null,
  },
]

export function Pricing() {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="relative py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020B18] via-[#0A1628]/50 to-[#020B18]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Transparent Pricing"
          subtitle="Choose the perfect plan for your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                tier.popular
                  ? 'bg-[#0A1628] border-2 border-[#00D4FF]/50 shadow-[0_0_30px_rgba(0,212,255,0.2)]'
                  : 'bg-[#0A1628]/80 border border-[#1A3A5C]/50 hover:border-[#00D4FF]/30'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#00D4FF] text-[#020B18] text-sm font-semibold">
                    <Sparkles size={14} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier name */}
              <h3 
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span 
                  className={`text-4xl md:text-5xl font-bold ${
                    tier.popular ? 'text-[#00D4FF] text-glow-cyan' : 'text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
                >
                  {tier.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#B8D4E8] mb-6">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-[#00D4FF]" />
                    </div>
                    <span className="text-sm text-[#B8D4E8]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <GlowButton
                variant={tier.popular ? 'primary' : 'ghost'}
                className="w-full"
                onClick={handleScrollToContact}
              >
                Get Started
              </GlowButton>

              {/* Note for Starter */}
              {tier.note && (
                <p className="mt-4 text-xs text-center text-[#7BC8FF] italic">
                  {tier.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
