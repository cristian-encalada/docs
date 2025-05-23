import { writeFileSync, mkdirSync, promises as fs } from 'fs'
import path from 'path'
import GithubSlugger from 'github-slugger'
import { escape } from 'pliny/utils/htmlEscaper.js'
import siteMetadata from '../data/siteMetadata.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import { sortPosts } from 'pliny/utils/contentlayer.js'

const defaultLocale = 'en'

// Load tag data dynamically
const tagData = JSON.parse(await fs.readFile(path.join(process.cwd(), 'app/[locale]/tag-data.json'), 'utf-8'))

const generateRssItem = (config, post, locale) => `
  <item>
    <guid>${config.siteUrl}${defaultLocale === locale ? '' : '/' + locale}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}${defaultLocale === locale ? '' : '/' + locale}/blog/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    ${post.date && `<pubDate>${new Date(post.date).toLocaleDateString(locale)}</pubDate>`}
    <author>${config.email} (${config.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (config, posts, locale, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}${defaultLocale === locale ? '' : '/' + locale}/blog</link>
      <description>${escape(config.description)}</description>
      <language>${locale}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      ${posts.date && `<lastBuildDate>${new Date(posts[0].date).toLocaleDateString(locale)}</lastBuildDate>`}
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post, locale, defaultLocale)).join('')}
    </channel>
  </rss>
`

async function generateRSS(config, allBlogs, locale, page = 'feed.xml') {
  const filteredPosts = allBlogs.filter((post) => post.language === locale)
  const publishPosts = filteredPosts.filter((post) => post.draft !== true)

  // RSS for blog post
  if (publishPosts.length > 0) {
    const rss = generateRss(config, sortPosts(publishPosts))
    const directoryPath = path.join('public', locale);
    mkdirSync(directoryPath, { recursive: true }); // Create the directory if it doesn't exist
    writeFileSync(path.join(directoryPath, page), rss);
  }

  if (publishPosts.length > 0) {
    for (const tag of Object.keys(tagData)) {
      const filteredPosts = publishPosts.filter((post) =>
        post.tags.map((t) => GithubSlugger.slug(t)).includes(tag)
      )
      const rss = generateRss(config, filteredPosts, `tags/${tag}/${page}`)
      const rssPath = path.join('public', locale, 'tags', tag)
      mkdirSync(rssPath, { recursive: true }); // Create the directory if it doesn't exist
      writeFileSync(path.join(rssPath, page), rss)
    }
  }
}

const rss = () => {
  const locales = ['en', 'es']
  for (const locale of locales) {
    generateRSS(siteMetadata, allBlogs, locale)
  }
  console.log('RSS feed generated...')
}
export default rss
