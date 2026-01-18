import Link from "next/link"
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bachelor Project - AI Agent System | Cristi Miloiu",
  description: "A multi-agent system using Google Gemini to generate REST/GraphQL APIs. Architected with FastAPI, MongoDB, and SSE.",
  keywords: ["AI Agents", "Gemini", "FastAPI", "MongoDB", "REST API", "GraphQL", "Bachelor Project"]
}

export default function BachelorProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

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
                    <h1 className="text-3xl sm:text-5xl font-light tracking-tight">Bachelor Project</h1>
                    <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full whitespace-nowrap">May 2024</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                    <Link href="https://github.com/cristim67/bachelor-project" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2 border-b border-transparent hover:border-foreground pb-0.5">
                        <Github className="w-4 h-4" /> View Source
                    </Link>
                </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A sophisticated multi-agent system designed to automatically generate functional REST and GraphQL API interfaces using Large Language Models.
            </p>
            </header>

            <section className="space-y-12 animate-fade-in-up delay-100">
            <div className="grid gap-8">
                <h2 className="text-xl font-medium tracking-wide border-l-2 border-foreground pl-4">Key Features</h2>
                
                <div className="grid gap-6">
                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🤖</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Multi-Agent Architecture</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Built using Google Gemini and an LLM Provider Factory pattern. Deploys specialized agents to analyze requirements and generate code for REST/GraphQL APIs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">⚡</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Real-time Streaming Backend</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Architected the backend with FastAPI and MongoDB, utilizing Server-Sent Events (SSE) to stream generation progress and agent activities to the frontend in real-time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🚀</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Automated DevOps</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Integrated automated deployments via Genezio for serverless scaling. Implemented Langfuse for detailed observability, tracing, and cost analysis of LLM usage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-medium tracking-wide">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                {["Python", "FastAPI", "React", "MongoDB", "Gemini", "AWS", "Docker", "Genezio", "Langfuse"].map((tech) => (
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
