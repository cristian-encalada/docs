import { Metadata } from 'next'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from '../i18n/server'
import { LocaleTypes } from '../i18n/settings'

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
  const projectArray = projectsData[locale]
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('title')}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t('description')}</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectArray.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                video={project.video}
                href={project.href}
                t={t}
                params={{ locale: locale }}
                techStack={project.techStack}
                githubUrl={project.githubUrl}
                previewUrl={project.previewUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
