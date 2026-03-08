"use client"

/**
 * Portfolio - Grid of project cards with hover effects
 * Showcases work with technology tags and overlay interactions
 */

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration and inventory management.',
    image: '/portfolio/ecommerce.jpg',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    color: '#00D4FF',
  },
  {
    title: 'Healthcare Portal',
    description: 'Patient management system with appointment scheduling and telemedicine.',
    image: '/portfolio/healthcare.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    color: '#4A9EFF',
  },
  {
    title: 'Real Estate CRM',
    description: 'Custom CRM for property listings, lead management, and analytics.',
    image: '/portfolio/realestate.jpg',
    tags: ['Next.js', 'Prisma', 'Redis'],
    color: '#7BC8FF',
  },
  {
    title: 'EdTech Platform',
    description: 'Learning management system with video courses and progress tracking.',
    image: '/portfolio/edtech.jpg',
    tags: ['React', 'AWS', 'GraphQL'],
    color: '#00D4FF',
  },
  {
    title: 'FinTech Dashboard',
    description: 'Real-time financial analytics dashboard with advanced visualizations.',
    image: '/portfolio/fintech.jpg',
    tags: ['Next.js', 'D3.js', 'WebSocket'],
    color: '#4A9EFF',
  },
  {
    title: 'Restaurant App',
    description: 'Food ordering platform with real-time order tracking and POS integration.',
    image: '/portfolio/restaurant.jpg',
    tags: ['React Native', 'Node.js', 'Socket.io'],
    color: '#7BC8FF',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020B18] via-[#0A1628]/50 to-[#020B18]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Work Speaks"
          subtitle="Successful projects across diverse industries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-[#0A1628] border border-[#1A3A5C]/50 hover:border-[#00D4FF]/30 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-[#0D2137] to-[#0A1628] overflow-hidden">
                {/* Gradient overlay based on project color */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}30, transparent)` 
                  }}
                />
                
                {/* Placeholder pattern */}
                <div className="absolute inset-0 grid-pattern opacity-40" />
                
                {/* Project icon/visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-20 h-20 rounded-xl opacity-30"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}50)`,
                      boxShadow: `0 0 40px ${project.color}30`
                    }}
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#020B18]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00D4FF] text-[#020B18] font-semibold"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 
                  className="text-lg font-semibold text-white mb-2 group-hover:text-[#00D4FF] transition-colors"
                  style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-[#B8D4E8] mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded bg-[#0D2137] text-[#7BC8FF] border border-[#1A3A5C]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
