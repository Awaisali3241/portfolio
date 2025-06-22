import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.slug} className="bg-white shadow rounded-xl overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <Link href={`/projects/${project.slug}`} className="text-blue-600 hover:underline">
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
