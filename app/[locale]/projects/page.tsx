import { Metadata } from 'next'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from '../i18n/server'
import { LocaleTypes } from '../i18n/settings'
import ProjectsOverviewCard from '@/components/ProjectsOverviewCard'
import webProjectsData from '@/data/webProjectsData'
import electronicsProjectsData from '@/data/electronicsProjectsData'
import softwareProjectsData from '@/data/softwareProjectsData'
import gamedevProjectsData from '@/data/gamedevProjectsData'

type Props = {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'projects')
  return genPageMetadata({
    title: t('title'),
    params: { locale: locale },
  })
}

export default async function Projects({ params: { locale } }: Props) {
  const { t } = await createTranslation(locale, 'projects')

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {t('title')}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {t('overviewDescription')}
        </p>
      </div>
      <div className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectsOverviewCard
            category="web"
            projectCount={webProjectsData[locale].length}
            locale={locale}
            t={t}
          />
          <ProjectsOverviewCard
            category="electronics"
            projectCount={electronicsProjectsData[locale].length}
            locale={locale}
            t={t}
          />
          <ProjectsOverviewCard
            category="software"
            projectCount={softwareProjectsData[locale].length}
            locale={locale}
            t={t}
          />
          <ProjectsOverviewCard
            category="gamedev"
            projectCount={gamedevProjectsData[locale].length}
            locale={locale}
            t={t}
          />
        </div>
      </div>
    </div>
  )
}
