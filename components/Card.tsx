import React from 'react'
import Link from './Link'
import { LocaleTypes } from 'app/[locale]/i18n/settings'

interface CardProps {
  title: string
  description: string
  video: string
  href?: string
  t: (key: string) => string
  params: { locale: LocaleTypes }
}

const Card: React.FC<CardProps> = ({ title, description, video, href, t, params: { locale } }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className="overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"
    >
      {video &&
        (href ? (
          <Link
            href={href.startsWith('http') ? href : `/${locale}${href}`}
            aria-label={`${t('linkto')}${title}`}
          >
            <video
              width="100%"
              height="165"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover object-center md:h-36 lg:h-48"
            >
              <source src={video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </Link>
        ) : (
          <video
            width="100%"
            height="165"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover object-center md:h-36 lg:h-48"
          >
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
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
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href.startsWith('http') ? href : `/${locale}${href}`}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`${t('linkto')}${title}`}
          >
            {t('learn')} &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
