"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/submit", label: "Submit" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full px-6 py-4 border-b border-border bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          OpenBoard
        </Link>
        <div className="flex items-center gap-4">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium hover:underline ${
                pathname === href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <Button variant="outline" size="sm">
            Login
          </Button>
        </div>
      </div>
    </nav>
  )
}
