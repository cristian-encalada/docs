'use client'

import { ReactNode } from 'react'
import { useTheme } from 'next-themes'
import { Authors, allAuthors } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Card from '@/components/Card'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import projectsData from '@/data/projectsData'
import tagData from 'app/[locale]/tag-data.json'
import { formatDate } from 'pliny/utils/formatDate'
import { slug } from 'github-slugger'
import { useTranslation } from 'app/[locale]/i18n/client'
import { LocaleTypes } from 'app/[locale]/i18n/settings'

interface Props {
  locale: LocaleTypes
}

export default function SinglePageLayout({ locale }: Props) {
  const { resolvedTheme } = useTheme()
  const { t: tAbout } = useTranslation(locale, 'about')
  const { t: tProjects } = useTranslation(locale, 'projects')
  const { t: tHome } = useTranslation(locale, 'home')

  // Get author data for About section
  const author = allAuthors.find(
    (a) => a.slug.includes('default') && a.language === locale
  ) as Authors

  // Get projects data
  const projectArray = projectsData[locale]

  // Get blog posts data
  const posts = allCoreContent(sortPosts(allBlogs))
  const filteredPosts = posts.filter((post) => post.language === locale)
  const displayPosts = filteredPosts.slice(0, 5) // Show first 5 posts

  const tagCountMap = tagData[locale]

  return (
    <div className="space-y-16 pt-20">
      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {tAbout('about')}
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center space-x-2 pt-8">
              {author.avatar && (
                <Image
                  src={
                    resolvedTheme === 'dark'
                      ? '/static/images/ce_logo_dark.svg'
                      : '/static/images/ce_logo_light.svg'
                  }
                  alt="avatar"
                  width={192}
                  height={192}
                  className="h-48 w-48 rounded-full"
                />
              )}
              <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
                {author.name}
              </h3>
              <div className="text-gray-500 dark:text-gray-400">{author.occupation}</div>
              <div className="text-gray-500 dark:text-gray-400">{author.company}</div>
              <div className="flex space-x-3 pt-6">
                <SocialIcon kind="mail" href={`mailto:${author.email}`} />
                <SocialIcon kind="github" href={author.github} />
                <SocialIcon kind="linkedin" href={author.linkedin} />
                <SocialIcon kind="twitter" href={author.twitter} />
              </div>
            </div>
            <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
              <MDXLayoutRenderer code={author.body.code} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {tAbout('projects')}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {tProjects('description')}
            </p>
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
                  t={tProjects}
                  params={{ locale: locale }}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
                  previewUrl={project.previewUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="scroll-mt-24">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {tAbout('blog')}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {tAbout('blogDescription')}
            </p>
          </div>
          <div className="py-12">
            <div>
              <ul>
                {displayPosts.map((post) => {
                  const { path, date, title, summary, tags, language } = post
                  if (language === locale) {
                    return (
                      <li key={path} className="py-5">
                        <article className="flex flex-col space-y-2 xl:space-y-0">
                          <dl>
                            <dt className="sr-only">{tHome('pub')}</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>{formatDate(date, language)}</time>
                            </dd>
                          </dl>
                          <div className="space-y-3">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                  href={`/${locale}/${path}`}
                                  className="text-gray-900 dark:text-gray-100"
                                >
                                  {title}
                                </Link>
                              </h2>
                              <div className="flex flex-wrap">
                                {tags?.map((tag) => (
                                  <Tag key={tag} text={tag} params={{ locale: locale }} />
                                ))}
                              </div>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                              {summary}
                            </div>
                          </div>
                        </article>
                      </li>
                    )
                  }
                })}
              </ul>
              {filteredPosts.length > 5 && (
                <div className="pt-6">
                  <Link
                    href={`/${locale}/blog`}
                    className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    {tAbout('viewAllPosts')} →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
