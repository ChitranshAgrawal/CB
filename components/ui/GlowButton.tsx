"use client"

/**
 * GlowButton - Refined CTA button with glow variants
 * More premium rectangular design with hover-only effects
 */

import { motion } from 'framer-motion'
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    children, 
    icon, 
    iconPosition = 'right',
    className, 
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-7 py-3.5 text-base',
      lg: 'px-9 py-4 text-lg',
    }

    const baseClasses = cn(
      'group relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:ring-offset-2 focus:ring-offset-[#020B18]',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'rounded-[10px]', // More premium rectangular shape
      sizeClasses[size]
    )

    const variantClasses = {
      primary: cn(
        'bg-[#00D4FF] text-[#020B18]',
        'hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]',
        'active:scale-[0.98]'
      ),
      ghost: cn(
        'bg-[#0A1628] text-[#00D4FF] border border-[#00D4FF]/60',
        'hover:bg-[#00D4FF]/5 hover:border-[#00D4FF] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]',
        'active:scale-[0.98]'
      ),
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {/* Shimmer overlay - only visible on hover for primary variant */}
        {variant === 'primary' && (
          <span className="absolute inset-0 overflow-hidden rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="absolute inset-0 shimmer opacity-40" />
          </span>
        )}
        
        <span className="relative flex items-center gap-2">
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </span>
      </motion.button>
    )
  }
)

GlowButton.displayName = 'GlowButton'
