"use client"

/**
 * Contact - Full-width contact section with form and details
 * Includes offer line, form with validation, and contact information
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowButton } from '@/components/ui/GlowButton'

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  budget: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const projectTypes = [
  'Business Website',
  'E-commerce Website',
  'Custom Web Application',
  'CRM / Portal',
  'Website Redesign',
  'Other',
]

const budgetRanges = [
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000+',
  'Not Sure',
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@cbinfotech.in',
    href: 'mailto:hello@cbinfotech.in',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
]

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (formData.phone && !/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const inputClasses = `
    w-full px-4 py-3 rounded-lg
    bg-[#0D2137] border border-[#1A3A5C]/50
    text-white placeholder:text-[#7BC8FF]/50
    focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]
    transition-all duration-200
  `

  const errorClasses = 'border-red-500/50 focus:border-red-500 focus:ring-red-500'

  return (
    <section id="contact" className="relative py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020B18] via-[#0A1628] to-[#020B18]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ready to Build Something Extraordinary?"
          subtitle="Let's discuss your project and bring your vision to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center rounded-2xl bg-[#0A1628]/80 border border-[#1A3A5C]/50 p-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-[#00D4FF]" />
                  </div>
                  <h3 
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-[#B8D4E8]">
                    We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-[#00D4FF] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`${inputClasses} ${errors.phone ? errorClasses : ''}`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                {/* Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select Budget Range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project *"
                    rows={5}
                    className={`${inputClasses} resize-none ${errors.message ? errorClasses : ''}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <GlowButton
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<Send size={18} />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </GlowButton>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#0A1628]/60 border border-[#1A3A5C]/30 hover:border-[#00D4FF]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div>
                  <div className="text-sm text-[#7BC8FF] mb-1">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white hover:text-[#00D4FF] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map or additional content */}
            {/* <div className="relative h-48 rounded-xl overflow-hidden bg-[#0A1628]/60 border border-[#1A3A5C]/30">
              <div className="absolute inset-0 grid-pattern opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#00D4FF] mx-auto mb-2" />
                  <p className="text-[#B8D4E8]">Serving clients worldwide</p>
                  <p className="text-sm text-[#7BC8FF]">Based in India</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
