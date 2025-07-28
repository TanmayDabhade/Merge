"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    tags: "",
    difficulty: "",
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted:", formData)
    alert("Project submitted! (Dummy action)")
    router.push("/explore")
  }

  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-black gap-10 px-2">
      <div className="w-full max-w-xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">Submit Your Open Source Project</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-zinc-200">Project Title</Label>
            <Input name="title" id="title" value={formData.title} onChange={handleChange} required className="mt-2 bg-black/80 text-white border-zinc-700 placeholder:text-zinc-500" />
          </div>

          <div>
            <Label htmlFor="description" className="text-zinc-200">Description</Label>
            <Textarea name="description" id="description" value={formData.description} onChange={handleChange} required className="mt-2 bg-black/80 text-white border-zinc-700 placeholder:text-zinc-500" />
          </div>

          <div>
            <Label htmlFor="github" className="text-zinc-200">GitHub Repository URL</Label>
            <Input name="github" id="github" value={formData.github} onChange={handleChange} required className="mt-2 bg-black/80 text-white border-zinc-700 placeholder:text-zinc-500" />
          </div>

          <div>
            <Label htmlFor="tags" className="text-zinc-200">Tags (comma-separated)</Label>
            <Input name="tags" id="tags" value={formData.tags} onChange={handleChange} className="mt-2 bg-black/80 text-white border-zinc-700 placeholder:text-zinc-500" />
          </div>

          <div>
            <Label htmlFor="difficulty" className="text-zinc-200">Difficulty</Label>
            <Input name="difficulty" id="difficulty" value={formData.difficulty} onChange={handleChange} className="mt-2 bg-black/80 text-white border-zinc-700 placeholder:text-zinc-500" />
          </div>

          <Button type="submit" className="w-full py-3 text-lg font-semibold rounded-xl bg-primary text-primary-foreground shadow-lg hover:scale-[1.02] transition-transform">Submit Project</Button>
        </form>
      </div>
      {/* Live Preview Card */}
      <div className="w-full max-w-md bg-zinc-900/90 rounded-2xl shadow-xl border border-zinc-800 p-8 text-white flex flex-col gap-4 min-h-[350px]">
        <h2 className="text-2xl font-bold mb-2">Live Preview</h2>
        <div>
          <div className="text-lg font-semibold mb-1">{formData.title || <span className='text-zinc-500'>Project Title</span>}</div>
          <div className="text-zinc-400 mb-3 min-h-[48px]">{formData.description || <span className='text-zinc-600'>Project description will appear here.</span>}</div>
          <div className="mb-2">
            <span className="font-medium">GitHub:</span>{' '}
            {formData.github ? (
              <a href={formData.github} target="_blank" rel="noopener noreferrer" className="text-primary underline break-all">{formData.github}</a>
            ) : (
              <span className="text-zinc-600">GitHub repo URL</span>
            )}
          </div>
          <div className="mb-2">
            <span className="font-medium">Tags:</span>{' '}
            {formData.tags ? (
              formData.tags.split(',').map((tag, idx) => (
                <span key={idx} className="inline-block bg-zinc-800 text-zinc-200 rounded px-2 py-0.5 text-xs mr-1">{tag.trim()}</span>
              ))
            ) : (
              <span className="text-zinc-600">No tags</span>
            )}
          </div>
          <div>
            <span className="font-medium">Difficulty:</span>{' '}
            {formData.difficulty ? (
              <span className="inline-block bg-zinc-800 text-zinc-200 rounded px-2 py-0.5 text-xs">{formData.difficulty}</span>
            ) : (
              <span className="text-zinc-600">Not specified</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
