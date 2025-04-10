import React from 'react'
import Link from './Link'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { GithubIcon, techStackIcons } from './icons/tech-stack'

interface CardProps {
  title: string
  description: string
  video: string
  href?: string
  t: (key: string) => string
  params: { locale: LocaleTypes }
  techStack?: Array<{
    name: string
    icon?: string
    color?: string
  }>
  githubUrl?: string
  previewUrl?: string
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  video,
  href,
  t,
  params: { locale },
  techStack = [],
  githubUrl,
  previewUrl,
}) => (
  <article className="group mb-16 flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0">
    <div className="w-full md:w-1/2">
      <div className="col-span-6 row-span-5 flex transform flex-col items-center gap-8 overflow-clip rounded-xl shadow-xl transition duration-500 ease-in-out sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
        {video && (
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            playsInline
            className="h-56 w-full object-cover object-center transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
          >
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
    <div className="w-full md:w-1/2 md:max-w-lg">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {href ? (
          <Link
            href={href.startsWith('http') ? href : `/${locale}${href}`}
            aria-label={`${t('linkto')}${title}`}
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      {techStack.length > 0 && (
        <ul className="mb-2 flex flex-row flex-wrap gap-2">
          {techStack.map((tech, index) => {
            const TechIcon = techStackIcons[tech.name as keyof typeof techStackIcons]
            return (
              <li key={index}>
                <span className="flex items-center gap-x-2 rounded-full px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200">
                  {TechIcon && (
                    <div className="flex h-5 w-5 items-center justify-center">
                      <TechIcon className="size-5 flex-shrink-0" />
                    </div>
                  )}
                  <span className="font-medium">{tech.name}</span>
                </span>
              </li>
            )
          })}
        </ul>
      )}
      <div className="mt-2 text-gray-700 dark:text-gray-400">{description}</div>
      <footer className="mt-4 flex items-end justify-start gap-x-4">
        {githubUrl && (
          <a
            target="_blank"
            href={githubUrl}
            className="group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border border-gray-300 bg-gray-100 px-3 py-2 text-base text-gray-800 transition hover:border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <GithubIcon className="size-5" />
            Code
          </a>
        )}
        {previewUrl && (
          <a
            target="_blank"
            href={previewUrl}
            className="group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border border-gray-300 bg-gray-100 px-3 py-2 text-base text-gray-800 transition hover:border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            Preview
          </a>
        )}
      </footer>
    </div>
  </article>
)

export default Card
