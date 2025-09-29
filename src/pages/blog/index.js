import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Container from "@/components/container"
import { NextSeo } from "next-seo"

export async function getStaticProps() {
  const removeMd = require('remove-markdown')
  const blogDir = path.join(process.cwd(), "src/doc/blog")
  console.log(blogDir)
  const files = fs.readdirSync(blogDir)

  const posts = files.map((filename) => {
    const id = filename.replace(".md", "")
    const markdown = fs.readFileSync(path.join(blogDir, filename), "utf-8")
    const { data, content } = matter(markdown)
    const blurb = removeMd(content).substring(0, 100) + "..."

    return {
      id,
      title: data.title,
      category: data.category,
      image: data.image,
      blurb: blurb,
    }
  })

  return { props: { posts } }
}

export default function BlogIndex({ posts }) {
  const [filter, setFilter] = useState("All")
  const categories = ["All", ...new Set(posts.map((p) => p.category))]

  const filtered = filter === "All" ? posts : posts.filter((p) => p.category === filter)

  return (
    <>
      <NextSeo
        title={`Blog | CADMEN Clinic`}
        description='Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Toronto medspa, tailored to enhance your beauty & wellness. See more.'
        openGraph={{
          url: 'https://www.cadmenclinic.ca/blog',
          title: 'Our Services | See All Premium Treatments | CADMEN Clinic',
          description:
            'Explore our services including Botox, fillers, laser hair removal & PRP therapy at our Toronto medspa, tailored to enhance your beauty & wellness. See more.',
          images: [
            {
              url: 'https://www.cadmenclinic.ca/media/clinic_interior.jpg',
              width: 800,
              height: 800,
              alt: 'Interior of CADMEN Clinic',
              type: 'image/jpeg'
            }
          ],
          siteName: 'CADMEN Clinic'
        }}
      />
      <section className='mt-10 bg-wildSand px-5 py-20'>
        <Container>
          <div className='grid items-center gap-10 space-y-5'>
            <h3 className='text-center flex items-center justify-center font-display text-4xl font-light text-teal-900 md:text-6xl'>
              Our Blog
            </h3>
          </div>
        </Container>
      </section>
      <section className="py-10">
        <Container>
          {/* Category Dropdown */}
          <div className="flex justify-center mb-8">
            <select
              className="border rounded px-3 py-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {filtered.map((post) => (
              <div key={post.id} className="relative group rounded shadow-md overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-5">
                  <span className="text-sm text-gray-500">{post.category}</span>
                  <h2 className="text-2xl font-semibold mt-2">{post.title}</h2>
                  <p className="text-gray-600 mt-2">{post.blurb}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block mt-4 text-beaver hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
