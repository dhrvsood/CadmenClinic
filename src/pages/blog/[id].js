import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Image from "next/image"
import Container from "@/components/container"
import { NextSeo } from "next-seo"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

export async function getStaticPaths() {
  const blogDir = path.join(process.cwd(), "src/doc/blog")
  const files = fs.readdirSync(blogDir)

  const paths = files.map((filename) => ({
    params: { id: filename.replace(".md", "") },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const blogDir = path.join(process.cwd(), "src/doc/blog")
  const filePath = path.join(blogDir, params.id + ".md")

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return { props: { frontmatter: data, content, id: params.id } }
}

export default function BlogPost({ frontmatter, content }) {
  return (
    <>
      <NextSeo
        title={`${frontmatter.title} | CADMEN Clinic`}
        description={frontmatter.description || "Blog post"}
        openGraph={{
          title: frontmatter.title,
          description: frontmatter.description || "Blog post",
          images: [{ url: frontmatter.image }],
        }}
      />

      <section className="my-20">
        <Container>
          <section className='overflow-hidden mb-5 mt-10'>
          <Container>
            <div className='grid h-full md:h-[530px] md:grid-cols-2 lg:h-[550px] '>
              <div className='order-2 flex h-full flex-col justify-center space-y-5 bg-gray-100 px-5 py-5 md:order-1 md:py-0 lg:px-10'>
                <h1 className='font-display text-4xl font-light tracking-wide md:text-5xl xl:text-6xl'>
                  {frontmatter.title}
                </h1>
              </div>
              <div className='order-1 h-[250px] md:order-2 md:h-full'>
                <Image
                  draggable='false'
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  sizes='100vw'
                  className='h-full w-full object-cover object-center'
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="mx-5 md:mx-5 lg:mx-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="text-4xl font-bold mt-8 mb-4 leading-tight"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-3xl font-semibold mt-6 mb-3 leading-snug"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-2xl font-semibold mt-5 mb-2 leading-snug"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  className="my-4 leading-relaxed text-gray-800"
                  {...props}
                />
              ),
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  className="text-black underline hover:text-beaver"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc pl-6 my-4 space-y-2"
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  className="list-decimal pl-6 my-4 space-y-2"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li className="leading-relaxed" {...props} />
              ),
              table: ({ node, ...props }) => (
                <table
                  className="border-collapse border border-gray-300 my-6 w-full"
                  {...props}
                />
              ),
              th: ({ node, ...props }) => (
                <th
                  className="border border-gray-300 px-3 py-2 bg-gray-100 text-left font-medium"
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <td
                  className="border border-gray-300 px-3 py-2"
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-4"
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }) =>
                inline ? (
                  <code
                    className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
                    {...props}
                  />
                ) : (
                  <pre
                    className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"
                  >
                    <code {...props} />
                  </pre>
                ),
            }}
          >
            {content}
          </ReactMarkdown>
        </section>
        </Container>
      </section>
    </>
  )
}
