'use client'

import { useEffect, useRef } from 'react'

export function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let current = 0
    const increment = end / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(timer)
      }
      if (ref.current) {
        ref.current.textContent = Math.floor(current).toString()
      }
    }, 50)

    return () => clearInterval(timer)
  }, [end])

  return (
    <>
      <span ref={ref}>0</span>
      {suffix}
    </>
  )
}
