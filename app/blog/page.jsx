import { projects } from "@/data/projects"
import Link from "next/link"
import Image from "next/image"

export default function BlogList() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">All Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.slug} className="bg-white shadow rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <Link href={`/blogs/${project.slug}`} className="text-indigo-600 hover:underline">
                View More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
