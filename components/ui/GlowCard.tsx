"use client"

/**
 * GlowCard - Reusable glass morphism card with glow effect
 * Used for services, pricing, testimonials, and other card layouts
 */

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  hoverGlow?: boolean
  glowColor?: 'cyan' | 'blue'
  delay?: number
}

export function GlowCard({ 
  children, 
  className,
  hoverGlow = true,
  glowColor = 'cyan',
  delay = 0,
}: GlowCardProps) {
  const glowClasses = {
    cyan: 'hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]',
    blue: 'hover:border-[#4A9EFF]/50 hover:shadow-[0_0_30px_rgba(74,158,255,0.2)]',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverGlow ? { y: -5, scale: 1.02 } : undefined}
      className={cn(
        'relative rounded-xl p-6',
        'bg-[#0A1628]/80 backdrop-blur-sm',
        'border border-[#1A3A5C]/50',
        'transition-all duration-300',
        hoverGlow && glowClasses[glowColor],
        className
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  )
}
