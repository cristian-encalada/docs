import { redirect } from 'next/navigation'
import { LocaleTypes } from './i18n/settings'

type Props = {
  params: { locale: LocaleTypes }
}

export default async function Page({ params: { locale } }: Props) {
  redirect(`/${locale}/about`)
}
