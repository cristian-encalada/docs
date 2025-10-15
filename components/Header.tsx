'use client'

import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './LangSwitch'
import SearchButton from './search/SearchButton'
import { useTranslation } from 'app/[locale]/i18n/client'
import type { LocaleTypes } from 'app/[locale]/i18n/settings'

const Header = () => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, '')
  const pathname = usePathname()
  const { theme, resolvedTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('about')

  // Handle smooth scrolling to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Update URL hash
      window.history.pushState(null, '', href)
    }
  }

  // Handle initial page load with hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && ['about', 'projects', 'blog'].includes(hash)) {
      setActiveSection(hash)
      // Scroll to the section after a short delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'blog']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            // Update URL hash when scrolling
            const newHash = `#${section}`
            if (window.location.hash !== newHash) {
              window.history.pushState(null, '', newHash)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-neutral-900/80">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  {resolvedTheme === 'dark' ? (
                    <Image
                      src="/static/images/ce_logo_dark.svg"
                      alt="Cristian Encalada Logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  ) : (
                    <Image
                      src="/static/images/ce_logo_light.svg"
                      alt="Cristian Encalada Logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  )}
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  <div className="hidden text-2xl font-semibold sm:block">
                    <div>{siteMetadata.headerTitle[0]}</div>
                    <div className="text-lg">{siteMetadata.headerTitle[1]}</div>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
            {headerNavLinks.map((link) => {
              const isSelected = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`hidden font-medium ${
                    isSelected ? 'text-primary-500' : 'text-gray-900 dark:text-gray-100'
                  } cursor-pointer sm:block`}
                >
                  {t(`${link.title.toLowerCase()}`)}
                </a>
              )
            })}
            <SearchButton />
            <ThemeSwitch />
            <LangSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
