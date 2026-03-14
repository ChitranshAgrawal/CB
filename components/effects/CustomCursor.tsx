"use client"

/**
 * CustomCursor - Clean cyan cursor with trailing particles
 * No mix-blend-difference (removes reddish artifacts)
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  driftX: number
  driftY: number
  dur: number
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const idRef = useRef(0)
  const lastSpawnRef = useRef(0)

  const spawnParticle = useCallback((x: number, y: number) => {
    const now = Date.now()
    if (now - lastSpawnRef.current < 55) return
    lastSpawnRef.current = now

    const id = idRef.current++
    setParticles((prev) => [
      ...prev.slice(-22),
      {
        id,
        x: x + (Math.random() - 0.5) * 14,
        y: y + (Math.random() - 0.5) * 14,
        size: 2.5 + Math.random() * 2.5,
        driftX: (Math.random() - 0.5) * 28,
        driftY: -(20 + Math.random() * 28),
        dur: 1 + Math.random() * 0.5,
      },
    ])

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id))
    }, 1600)
  }, [])

  useEffect(() => {
    const canUseCustomCursor =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setIsEnabled(canUseCustomCursor)

    if (!canUseCustomCursor) {
      return
    }

    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = ''
    }
  }, [])

  useEffect(() => {
    if (!isEnabled) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      spawnParticle(e.clientX, e.clientY)
      const t = e.target as HTMLElement
      setIsHovering(
        t.tagName === 'BUTTON' || t.tagName === 'A' || !!t.closest('button') || !!t.closest('a')
      )
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [isEnabled, spawnParticle])

  if (!isEnabled) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996] rounded-full"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: 'spring', stiffness: 90, damping: 18, mass: 0.6 }}
        style={{ width: 40, height: 40 }}
      >
        <motion.div
          className="w-full h-full rounded-full border border-[#00D4FF]/50"
          animate={{ scale: isHovering ? 1.7 : 1 }}
          transition={{ duration: 0.2 }}
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
            boxShadow: '0 0 12px 2px rgba(0,212,255,0.08)',
          }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border border-[#00D4FF]/25"
        animate={{ x: pos.x - 12, y: pos.y - 12 }}
        transition={{ type: 'spring', stiffness: 200, damping: 24, mass: 0.4 }}
        style={{ width: 24, height: 24 }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{ x: pos.x - 5, y: pos.y - 5 }}
        transition={{ type: 'spring', stiffness: 600, damping: 35, mass: 0.2 }}
      >
        <motion.div
          className="rounded-full"
          animate={{ scale: isHovering ? 1.8 : 1 }}
          transition={{ duration: 0.15 }}
          style={{
            width: 10,
            height: 10,
            background: '#00D4FF',
            boxShadow: '0 0 10px 3px rgba(0,212,255,0.7)',
          }}
        />
      </motion.div>

      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="fixed top-0 left-0 pointer-events-none z-[9995] rounded-full"
            initial={{
              opacity: 0.75,
              scale: 1,
              x: p.x - p.size / 2,
              y: p.y - p.size / 2,
            }}
            animate={{
              opacity: 0,
              scale: 0.2,
              x: p.x - p.size / 2 + p.driftX,
              y: p.y - p.size / 2 + p.driftY,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: p.dur, ease: 'easeOut' }}
            style={{
              width: p.size,
              height: p.size,
              background: '#00D4FF',
              boxShadow: `0 0 ${p.size * 2}px ${p.size}px rgba(0,212,255,0.3)`,
            }}
          />
        ))}
      </AnimatePresence>
    </>
  )
}
