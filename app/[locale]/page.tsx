import { Metadata } from 'next'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from './i18n/server'
import SinglePageLayout from '@/components/SinglePageLayout'
import { LocaleTypes } from './i18n/settings'
import gamedevProjectsData from '@/data/gamedevProjectsData'
import { fetchModDownloads } from '@/lib/curseforge'

export const revalidate = 3600

type Props = {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'about')
  return genPageMetadata({
    title: t('about'),
    params: { locale: locale },
  })
}

export default async function Page({ params: { locale } }: Props) {
  const lucidNavDownloads = await fetchModDownloads(1484807)

  const enrichedGameDevProjects = gamedevProjectsData[locale].map((project) =>
    project.title === 'LucidNav' && lucidNavDownloads !== null
      ? { ...project, downloads: lucidNavDownloads }
      : project
  )

  return <SinglePageLayout locale={locale} enrichedGameDevProjects={enrichedGameDevProjects} />
}
