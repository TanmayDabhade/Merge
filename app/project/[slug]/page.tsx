import { dummyProjects } from "@/lib/dummyProjects"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

type Params = {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: Params) {
  const project = dummyProjects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <div className="flex justify-between items-start gap-4 flex-wrap">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            GitHub Repo <ExternalLink size={16} />
          </Button>
        </a>
      </div>

      <p className="text-muted-foreground mt-4 mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, idx) => (
          <Badge key={idx} variant="secondary">{tag}</Badge>
        ))}
      </div>

      <div className="text-sm text-muted-foreground">
        <strong>Difficulty:</strong> {project.difficulty}
      </div>

      {/* Placeholder for future: save, contribute buttons, comments, etc. */}
    </div>
  )
}
