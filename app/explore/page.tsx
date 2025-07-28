import ProjectCard from "@/components/ProjectCard"
import { dummyProjects } from "@/lib/dummyProjects"

export default function ExplorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-white text-center">Explore Open Source Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {dummyProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
