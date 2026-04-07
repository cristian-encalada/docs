import { Metadata } from 'next'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from '../../i18n/server'
import { LocaleTypes } from '../../i18n/settings'
import ProjectsLayout from '@/layouts/ProjectsLayout'
import gamedevProjectsData from '@/data/gamedevProjectsData'
import { fetchModDownloads } from '@/lib/curseforge'

export const revalidate = 3600

type Props = {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'projects')
  return genPageMetadata({
    title: `${t('title')} — ${t('categories.gamedev.title')}`,
    params: { locale },
  })
}

export default async function GameDevProjectsPage({ params: { locale } }: Props) {
  const lucidNavDownloads = await fetchModDownloads(1484807)

  const enrichedProjects = gamedevProjectsData[locale].map((project) =>
    project.title === 'LucidNav' && lucidNavDownloads !== null
      ? { ...project, downloads: lucidNavDownloads }
      : project
  )

  return <ProjectsLayout projects={enrichedProjects} category="gamedev" locale={locale} />
}
