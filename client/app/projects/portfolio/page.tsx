import Link from "next/link"
import { ArrowLeft, Globe } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Personal Portfolio Website | Cristi Miloiu",
  description: "A modern, high-performance portfolio website built with Next.js and Tailwind CSS. Optimized for speed and security.",
  keywords: ["Portfolio", "Next.js", "Tailwind CSS", "Vercel", "Cloudflare"]
}

export default function PortfolioProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <main className="max-w-3xl mx-auto px-6 py-20 relative z-10">
            <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group mb-12"
            >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
            </Link>

            <header className="space-y-6 mb-16 animate-fade-in-up">
            <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-3xl sm:text-5xl font-light tracking-tight">Personal Portfolio</h1>
                    <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full whitespace-nowrap">Oct 2024</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                    <Link href="https://cristimiloiu.com" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2 border-b border-transparent hover:border-foreground pb-0.5">
                        <Globe className="w-4 h-4" /> Live Site
                    </Link>
                </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A minimalist, high-performance personal portfolio website designed to showcase my work and skills. 
            </p>
            </header>

            <section className="space-y-12 animate-fade-in-up delay-100">
            <div className="grid gap-8">
                <h2 className="text-xl font-medium tracking-wide border-l-2 border-foreground pl-4">Key Features</h2>
                
                <div className="grid gap-6">
                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">⚡</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Performance & Design</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Developed using Next.js and Tailwind CSS for a modern, responsive user interface. Clean, minimalist aesthetic with dark mode support and smooth animations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🔒</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Deployment & Security</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Optimized for speed and security, deployed on Vercel with Cloudflare for DNS management and DDOS protection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-medium tracking-wide">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Tailwind CSS", "Vercel", "Cloudflare"].map((tech) => (
                    <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-mono text-muted-foreground bg-secondary/20 border border-border rounded-md hover:text-foreground hover:border-foreground/30 transition-colors duration-200 cursor-default"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
            </section>
        </main>
    </div>
  )
}
