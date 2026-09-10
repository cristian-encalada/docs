'use client'

import { ReactNode } from 'react'
import { Authors, allAuthors } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import SocialIcon from '@/components/social-icons'
import ThemeAwareAvatar from '@/components/ThemeAwareAvatar'
import Card from '@/components/Card'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import webProjectsData from '@/data/webProjectsData'
import softwareProjectsData from '@/data/softwareProjectsData'
import gamedevProjectsData from '@/data/gamedevProjectsData'
import tagData from 'app/[locale]/tag-data.json'
import { formatDate } from 'pliny/utils/formatDate'
import { slug } from 'github-slugger'
import { useTranslation } from 'app/[locale]/i18n/client'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import type { GameDevProject } from '@/data/projectTypes'
import profileData from '@/data/profileData'
import ProfileTimeline from '@/components/ProfileTimeline'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'

interface Props {
  locale: LocaleTypes
  enrichedGameDevProjects?: GameDevProject[]
}

export default function SinglePageLayout({ locale, enrichedGameDevProjects }: Props) {
  const { t: tAbout } = useTranslation(locale, 'about')
  const { t: tProjects } = useTranslation(locale, 'projects')
  const { t: tHome } = useTranslation(locale, 'home')

  // Get author data for About section
  const author = allAuthors.find(
    (a) => a.slug.includes('default') && a.language === locale
  ) as Authors

  const gamedevProjects = enrichedGameDevProjects ?? gamedevProjectsData[locale]
  const profile = profileData[locale]

  // Featured projects for home page: LucidNav (gamedev), TagNCount (software), 3D Web App (web)
  const projectArray = [
    gamedevProjects[0], // LucidNav
    softwareProjectsData[locale][0], // TagNCount
    webProjectsData[locale].find((p) => p.title === '3D Web App'), // 3D Web App
  ].filter((p): p is NonNullable<typeof p> => p !== undefined) // Remove any undefined values

  // Get blog posts data
  const posts = allCoreContent(sortPosts(allBlogs))
  const filteredPosts = posts.filter((post) => post.language === locale)
  const displayPosts = filteredPosts.slice(0, 5) // Show first 5 posts

  const tagCountMap = tagData[locale]

  return (
    <div className="min-w-0 space-y-16 pt-20">
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
                <ThemeAwareAvatar
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
              <div className="flex flex-wrap items-center gap-3 pt-6">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
                <SocialIcon kind="github" href={author.github} />
                <SocialIcon kind="linkedin" href={author.linkedin} />
                <SocialIcon kind="twitter" href={author.twitter} />
                <a
                  href={siteMetadata.resume}
                  download
                  aria-label={tAbout('resume')}
                  className="rounded-md border border-primary-500 px-3 py-1 text-sm font-medium text-primary-600 transition hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-950"
                >
                  {tAbout('resume')}
                </a>
                <a
                  href={siteMetadata.resumeDocx}
                  download
                  aria-label={tAbout('resumeEditable')}
                  className="text-sm font-medium text-gray-600 underline decoration-gray-300 underline-offset-4 transition hover:text-primary-600 dark:text-gray-300 dark:decoration-gray-600 dark:hover:text-primary-400"
                >
                  {tAbout('resumeEditable')}
                </a>
              </div>
            </div>
            <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
              <MDXLayoutRenderer code={author.body.code} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {tAbout('experience')}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {tAbout('experienceDescription')}
            </p>
          </div>
          <div className="py-12">
            <ProfileTimeline items={profile.experience} ariaLabel={tAbout('experienceTimeline')} />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="scroll-mt-24">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {tAbout('certifications')}
            </h1>
          </div>
          <div className="grid gap-6 py-12 md:grid-cols-2">
            {profile.certifications.map((certification) => (
              <article
                key={certification.name}
                className="rounded-lg border border-gray-200 p-6 dark:border-gray-700"
              >
                <p className="text-sm font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {certification.issuer}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {certification.name}
                </h2>
                {(certification.issued || certification.expires) && (
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {[certification.issued, certification.expires].filter(Boolean).join(' · ')}
                  </p>
                )}
                <p className="mt-4 text-gray-600 dark:text-gray-300">{certification.description}</p>
                {certification.image && (
                  <a
                    href={certification.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block overflow-hidden rounded-md border border-gray-200 dark:border-gray-700"
                  >
                    <Image
                      src={certification.image}
                      alt={`${certification.name} certificate`}
                      width={995}
                      height={1288}
                      className="h-48 w-full object-cover object-top"
                    />
                  </a>
                )}
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  {tAbout('viewCredential')} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {tAbout('skills')}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {tAbout('skillsDescription')}
            </p>
          </div>
          <div className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(profile.skills).map(([category, skills]) => (
              <article
                key={category}
                className="rounded-lg border border-gray-200 p-6 dark:border-gray-700"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{category}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
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
            <p className="pt-2">
              <Link
                href={`/${locale}/projects`}
                className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {tProjects('viewAllProjects')} →
              </Link>
            </p>
          </div>
          <div className="w-full min-w-0 py-12">
            <div className="flex min-w-0 flex-col">
              {projectArray.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  video={project.video}
                  image={project.thumbnail ?? project.image}
                  href={project.href}
                  t={tProjects}
                  params={{ locale: locale }}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
                  previewUrl={project.previewUrl}
                  demoUrl={project.category === 'software' ? project.demoUrl : undefined}
                  paperUrl={project.category === 'software' ? project.paperUrl : undefined}
                  downloads={project.category === 'gamedev' ? project.downloads : undefined}
                  platform={project.category === 'gamedev' ? project.platform : undefined}
                  gameVersion={project.category === 'gamedev' ? project.gameVersion : undefined}
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
