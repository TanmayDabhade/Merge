"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

type Project = {
  id: string
  slug: string
  title: string
  description: string
  tags: string[]
  github: string
  difficulty: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-zinc-900 text-white border border-border shadow-md rounded-2xl transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-2">
          <Link href={`/project/${project.slug}`}>
            <h2 className="text-xl font-semibold hover:underline cursor-pointer">
              {project.title}
            </h2>
          </Link>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              GitHub <ExternalLink size={14} />
            </Button>
          </a>
        </div>

        <p className="text-muted-foreground mb-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, index) => {
            let colorClass = "";
            switch (tag.toLowerCase()) {
              case "react":
                colorClass = "bg-blue-600 text-white";
                break;
              case "python":
                colorClass = "bg-yellow-500 text-black";
                break;
              case "tailwind":
                colorClass = "bg-cyan-500 text-black";
                break;
              case "tensorflow":
                colorClass = "bg-orange-500 text-white";
                break;
              case "beginner":
                colorClass = "bg-green-600 text-white";
                break;
              case "intermediate":
                colorClass = "bg-yellow-600 text-black";
                break;
              case "advanced":
                colorClass = "bg-red-600 text-white";
                break;
              default:
                colorClass = "bg-zinc-700 text-white";
            }
            return (
              <Badge key={index} className={colorClass}>{tag}</Badge>
            );
          })}
        </div>

        <div className="text-sm text-muted-foreground text-right">
          Difficulty: {project.difficulty}
        </div>
      </CardContent>
    </Card>
  )
}
