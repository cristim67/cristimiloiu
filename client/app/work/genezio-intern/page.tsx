import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Genezio Intern Experience | Cristi Miloiu",
  description: "Internship experience at Genezio: CLI deployment, RAG systems, and CI/CD automation.",
  keywords: ["Genezio", "Internship", "CLI", "RAG", "LangChain", "OpenAI", "CI/CD"]
}

export default function GenezioInternPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <main className="max-w-3xl mx-auto px-6 py-20 relative z-10">
            <Link 
            href="/#work" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group mb-12"
            >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Work
            </Link>

            <header className="space-y-6 mb-16 animate-fade-in-up">
            <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-4xl sm:text-5xl font-light tracking-tight">Full Stack Intern</h1>
                    <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full">June 2023 — Aug 2023</span>
                </div>
                <div className="text-2xl text-muted-foreground font-light">
                    @ <a href="https://genezio.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5">Genezio</a>
                </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Streamlined developer workflows and pioneered internal AI tooling. Focused on enhancing the deployment experience and integrating Large Language Models into daily operations.
            </p>
            </header>

            <section className="space-y-12 animate-fade-in-up delay-100">
            <div className="grid gap-8">
                <h2 className="text-xl font-medium tracking-wide border-l-2 border-foreground pl-4">Key Responsibilities</h2>
                
                <div className="grid gap-6">
                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🚀</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">CLI & Deployment</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Enabled CLI deployment for Lambda Functions and FastAPI, significantly reducing deployment time. Migrated Next.js deployment from OpenNext to a native solution, improving scalability and simplicity.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🧠</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">RAG System Design</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Designed a RAG (Retrieval-Augmented Generation) system using OpenAI & LangChain for context-aware Q&A on company documentation, improving internal knowledge access.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🤖</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Discord Integration & CI/CD</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Integrated the RAG system into a Discord bot with automated CI/CD workflows using CircleCI, enabling seamless team interaction with the AI tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-medium tracking-wide">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                {["Python", "LangChain", "OpenAI API", "Next.js", "FastAPI", "Discord API", "CircleCI"].map((tech) => (
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
