"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  words?: string[]
  className?: string
}

const DEFAULT_WORDS = ["BARBARIKA'S EXCLUSIVE", "INVESTOR EVENTS"]

export function ParticleTextEffect({ words = DEFAULT_WORDS, className = "" }: AnimatedTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 500) // Half second fade out, then change word
      
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className={`text-center ${className}`}>
      <h1 
        className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white transition-all duration-500 ease-in-out ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}
        style={{
          fontFamily: 'var(--font-tourney), sans-serif',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          textShadow: '0 4px 20px rgba(0,0,0,0.8)',
          position: 'relative',
          display: 'flex',
          padding: '1rem 2rem',
          border: '3px solid #FF3B30',
          borderRadius: '1rem',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          minHeight: '120px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {words[currentWordIndex]}
      </h1>
    </div>
  )
}


