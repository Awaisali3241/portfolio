import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"

export default async function BlogPost({ params }) {
  const { slug } = params

  const blog = projects.find((p) => p.slug === slug)
  if (!blog) return notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{blog.category}</p>

      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full h-auto rounded-xl mb-8 object-cover"
      />

      <div className="space-y-6 text-lg text-gray-800">
        {blog.content.map((block, i) => {
          if (block.type === "heading") {
            return <h2 key={i} className="text-2xl font-semibold mt-8">{block.text}</h2>
          }
          if (block.type === "paragraph") {
            return <p key={i}>{block.text}</p>
          }
          if (block.type === "image") {
            return (
              <Image
                key={i}
                src={block.src}
                alt={block.alt}
                width={800}
                height={400}
                className="rounded-lg my-6"
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
