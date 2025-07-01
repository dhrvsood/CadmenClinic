import fs from 'fs'
import path from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseUrl = 'https://www.cadmenclinic.ca'

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

const links = pageLinks

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: baseUrl })

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  )

  fs.writeFileSync('./public/sitemap.xml', xml)
}

generateSitemap()
  .then(() => console.log('Sitemap generated successfully'))
  .catch((error) => console.error('Error generating sitemap:', error))
