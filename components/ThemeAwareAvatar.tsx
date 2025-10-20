'use client'

import { useTheme } from 'next-themes'
import Image from '@/components/Image'
import { useEffect, useState } from 'react'

interface ThemeAwareAvatarProps {
  width: number
  height: number
  className: string
  alt: string
}

export default function ThemeAwareAvatar({ width, height, className, alt }: ThemeAwareAvatarProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return (
      <div 
        className={className}
        style={{ width, height }}
        aria-label={alt}
      />
    )
  }

  return (
    <Image
      src={
        resolvedTheme === 'dark'
          ? '/static/images/ce_logo_dark.svg'
          : '/static/images/ce_logo_light.svg'
      }
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}
