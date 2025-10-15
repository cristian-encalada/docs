'use client'

import { useTheme } from 'next-themes'
import Image from '@/components/Image'

interface ThemeAwareAvatarProps {
  width: number
  height: number
  className: string
  alt: string
}

export default function ThemeAwareAvatar({ width, height, className, alt }: ThemeAwareAvatarProps) {
  const { resolvedTheme } = useTheme()

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
