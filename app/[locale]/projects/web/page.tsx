import { Metadata } from 'next'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from '../../i18n/server'
import { LocaleTypes } from '../../i18n/settings'
import ProjectsLayout from '@/layouts/ProjectsLayout'
import webProjectsData from '@/data/webProjectsData'

type Props = {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'projects')
  return genPageMetadata({
    title: `${t('title')} — ${t('categories.web.title')}`,
    params: { locale },
  })
}

export default async function WebProjectsPage({ params: { locale } }: Props) {
  return <ProjectsLayout projects={webProjectsData[locale]} category="web" locale={locale} />
}
