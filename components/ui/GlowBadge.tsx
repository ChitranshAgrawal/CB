"use client"

/**
 * GlowBadge - Pill/chip component with subtle glow animation
 * Used for offer tags and highlighted labels
 */

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface GlowBadgeProps {
  children: ReactNode
  className?: string
  pulse?: boolean
  icon?: ReactNode
}

export function GlowBadge({ 
  children, 
  className,
  pulse = true,
  icon,
}: GlowBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'inline-flex items-center gap-2 px-5 py-2.5 rounded-full',
        'bg-[#0A1628]/80 backdrop-blur-sm',
        'border border-[#00D4FF]/25',
        'text-[#00D4FF] text-sm font-medium',
        pulse && 'badge-pulse',
        className
      )}
    >
      {icon && <span className="text-[#00D4FF]/80">{icon}</span>}
      {children}
    </motion.div>
  )
}
