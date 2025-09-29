import { Metadata } from 'next'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from './i18n/server'
import SinglePageLayout from '@/components/SinglePageLayout'
import { LocaleTypes } from './i18n/settings'

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
  return <SinglePageLayout locale={locale} />
}
