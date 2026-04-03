'use client'

import { useMemo, useState } from 'react'
import Card from '@/components/Card'
import { useTranslation } from 'app/[locale]/i18n/client'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import type { Project, ProjectCategory } from '@/data/projectTypes'

interface ProjectsLayoutProps {
  projects: Project[]
  category: ProjectCategory
  locale: LocaleTypes
}

export default function ProjectsLayout({ projects, category, locale }: ProjectsLayoutProps) {
  const { t } = useTranslation(locale, 'projects')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date')

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach((p) => p.tags?.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [projects])

  const filteredProjects = useMemo(() => {
    const filtered = selectedTag ? projects.filter((p) => p.tags?.includes(selectedTag)) : projects

    return [...filtered].sort((a, b) => {
      if (sortBy === 'date') return (b.date || '').localeCompare(a.date || '')
      return a.title.localeCompare(b.title)
    })
  }, [projects, selectedTag, sortBy])

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {t(`categories.${category}.title`)}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {t(`categories.${category}.description`)}
        </p>
      </div>

      <div className="space-y-4 py-6">
        {allTags.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
              {t('filterByTag')}
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedTag(null)}
                className={`rounded-full border px-3 py-1 text-sm transition-colors dark:border-gray-600 ${
                  !selectedTag
                    ? 'border-primary-500 bg-primary-500 text-white'
                    : 'border-gray-300 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                }`}
              >
                {t('all')}
              </button>
              {allTags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full border px-3 py-1 text-sm transition-colors dark:border-gray-600 ${
                    selectedTag === tag
                      ? 'border-primary-500 bg-primary-500 text-white'
                      : 'border-gray-300 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {filteredProjects.length} {t('projectCount')}
          </p>
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="sr-only">{t('sortByDate')}</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
            >
              <option value="date">{t('sortByDate')}</option>
              <option value="title">{t('sortByTitle')}</option>
            </select>
          </label>
        </div>
      </div>

      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {filteredProjects.map((project) => (
            <Card
              key={`${category}-${project.title}`}
              title={project.title}
              description={project.description}
              video={project.video}
              image={project.image}
              href={project.href}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              previewUrl={project.previewUrl}
              documentation={'documentation' in project ? project.documentation : undefined}
              demoUrl={'demoUrl' in project ? project.demoUrl : undefined}
              paperUrl={'paperUrl' in project ? project.paperUrl : undefined}
              downloads={'downloads' in project ? project.downloads : undefined}
              platform={'platform' in project ? project.platform : undefined}
              gameVersion={'gameVersion' in project ? project.gameVersion : undefined}
              t={t}
              params={{ locale }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
