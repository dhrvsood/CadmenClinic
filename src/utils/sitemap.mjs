import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import fs from 'fs'
import { groq } from 'next-sanity'
import path from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2023-07-14',
  useCdn: false
})

export async function generateSitemap() {
  const baseUrl = 'https://www.imagelabmedspa.com'
  const pages = [
    '/',
    '/about',
    '/book-now',
    '/conditions',
    '/membership',
    '/services',
    '/service-areas',
    '/botox',
    '/blog',
  ]

  const pageLinks = pages.map((page) => {
    const path = page
      .replace('pages', '')
      .replace('.js', '')
      .replace('.mdx', '')
      .replace('src/', '')

    return path === './index'
      ? { url: '/', changefreq: 'monthly', priority: 0.5 }
      : { url: path, changefreq: 'monthly', priority: 0.5 }
  })

  const serviceSlugsQuery = groq`*[_type == "service"] {
  "slug": slug.current
  }`

  const serviceAreasSlugsQuery = groq`*[_type == "serviceareas"] {
    "slug": slug.current
  }`

  const botoxPagesSlugsQuery = groq`*[_type == "botoxpages"] {
    "slug": slug.current
  }`

  const blogPagesSlugsQuery = groq`*[_type == "blogpages"] {
    "slug": slug.current
  }`

  const dynamicPages = await client.fetch(serviceSlugsQuery)
  const dynamicAreasPages = await client.fetch(serviceAreasSlugsQuery)
  const dynamicBotoxPages = await client.fetch(botoxPagesSlugsQuery)
  const dynamicBlogPages = await client.fetch(blogPagesSlugsQuery);

  const servicesLinks = dynamicPages.map((page) => ({
    url: `/services/${page.slug}`,
    changefreq: 'monthly',
    priority: 0.5
  }))

  const serviceAreasLinks = dynamicAreasPages.map((page) => ({
    url: `/service-areas/${page.slug}`,
    changefreq: 'monthly',
    priority: 0.5
  }))

  const botoxPagesLinks = dynamicBotoxPages.map((page) => ({
    url: `/botox/${page.slug}`,
    changefreq: 'monthly',
    priority: 0.5
  }))

  const dynamicBlogPagesLinks = dynamicBlogPages.map(page => ({
    url: `/blog/${page.slug}`,
    changefreq: 'monthly',
    priority: 0.5
  }))

  const links = [
    ...pageLinks,
    ...servicesLinks,
    ...serviceAreasLinks,
    ...botoxPagesLinks,
    ...dynamicBlogPagesLinks
  ]

  const stream = new SitemapStream({ hostname: baseUrl })

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  )

  fs.writeFileSync('./public/sitemap.xml', xml)
}

generateSitemap()
  .then(() => console.log('Sitemap generated successfully'))
  .catch((error) => console.error('Error generating sitemap:', error))
