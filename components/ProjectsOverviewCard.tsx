import Link from './Link'
import { LocaleTypes } from 'app/[locale]/i18n/settings'

const categoryIcons = {
  web: '🌐',
  electronics: '🔧',
  software: '🤖',
  gamedev: '🎮',
}

interface Props {
  category: 'web' | 'electronics' | 'software' | 'gamedev'
  projectCount: number
  locale: LocaleTypes
  t: (key: string) => string
}

export default function ProjectsOverviewCard({ category, projectCount, locale, t }: Props) {
  return (
    <Link href={`/${locale}/projects/${category}`}>
      <div className="group rounded-xl border-2 border-gray-200 p-6 transition-all hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-500">
        <div className="mb-4 text-6xl">{categoryIcons[category]}</div>
        <h3 className="mb-2 text-2xl font-bold">{t(`categories.${category}.title`)}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {t(`categories.${category}.description`)}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {projectCount} {t('projectCount')}
          </span>
          <span className="text-primary-500 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  )
}
