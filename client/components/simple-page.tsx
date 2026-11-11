import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Shared shell for plain text pages (about, contact), matching the
// look of the work and project detail pages.
export function SimplePage({
  title,
  intro,
  children,
}: {
  title: string
  intro: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <main className="max-w-3xl mx-auto px-6 py-20 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <header className="space-y-6 mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight">{title}</h1>
          <div className="text-lg text-muted-foreground leading-relaxed">{intro}</div>
        </header>

        <div className="space-y-10 animate-fade-in-up delay-100 text-muted-foreground leading-relaxed [&_h2]:text-xl [&_h2]:font-medium [&_h2]:tracking-wide [&_h2]:text-foreground [&_h2]:border-l-2 [&_h2]:border-foreground [&_h2]:pl-4 [&_h2]:mb-4 [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_p+p]:mt-4">
          {children}
        </div>

        <nav aria-label="Site pages" className="mt-16 pt-8 border-t border-border flex flex-wrap gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>
      </main>
    </div>
  )
}
