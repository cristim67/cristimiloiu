import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Genezio Work Experience | Cristi Miloiu",
  description: "Detailed breakdown of my work as a Software Engineer at Genezio, including AI agents, cloud architecture, and deployment automation.",
  keywords: ["Genezio", "Software Engineer", "AI Agents", "Cloud Architecture", "AWS", "FastAPI", "Next.js"]
}

export default function GenezioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

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
                    <h1 className="text-4xl sm:text-5xl font-light tracking-tight">Software Engineer</h1>
                    <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full">2023 — Present</span>
                </div>
                <div className="text-2xl text-muted-foreground font-light">
                    @ <a href="https://genezio.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5">Genezio</a>
                </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Core member of the team that secured a €2M pre-seed round for a serverless cloud platform, later pivoting to develop LLM brand visibility and enterprise AI agent testing solutions. 
                Owner & Maintainer of the backend and agents codebase, delivering 5000+ contributions last year.
            </p>
            </header>

            <section className="space-y-12 animate-fade-in-up delay-100">
            <div className="grid gap-8">
                <h2 className="text-xl font-medium tracking-wide border-l-2 border-foreground pl-4">Key Responsibilities</h2>
                
                <div className="grid gap-6">
                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🤖</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">AI Agents & Simulation</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Engineered Red/Blue Team Agents to simulate adversarial attacks and automate functional testing. Built the daily simulation engine that executes user-defined scenarios and captures comprehensive interaction data.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🔐</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Security & Access Control</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Architected the RBAC system using Casbin to handle secure permissions and multi-account management. Designed and implemented secure authentication flows ensuring enterprise-grade security.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">📊</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Infrastructure & Metrics</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Implemented the Metrics infrastructure with robust caching for real-time analytics.  Orchestrated platform releases, ensuring stability and quality assurance in production environments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">👥</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Leadership & Mentorship</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Led interviewing, onboarding, and mentorship processes for interns and juniors, enforcing high code quality standards and fostering a culture of technical excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-medium tracking-wide">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                {["Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "React", "Tailwind CSS", "AWS", "S3", "Langfuse", "Casbin", "Docker", "Grafana"].map((tech) => (
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
