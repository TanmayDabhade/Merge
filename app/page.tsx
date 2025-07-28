import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="text-white py-32 px-6 bg-gradient-to-b from-zinc-900 to-black min-h-[70vh] flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Find & Contribute to Open Source
          </h1>
          <p className="text-muted-foreground mb-8 text-xl md:text-2xl">
            Discover projects that need your skills. Share your own and build in public.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <Link href="/explore">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold shadow-md hover:scale-105 transition-transform">
                Explore Projects
              </Button>
            </Link>
            <Link href="/submit">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-primary hover:bg-primary/10 hover:scale-105 transition-transform">
                Post a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
