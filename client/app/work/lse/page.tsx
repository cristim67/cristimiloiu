import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "LSE Work Experience | Cristi Miloiu",
  description: "Work as Technical Coordinator at League of Electronics Students (LSE), managing IT teams and delivering web applications.",
  keywords: ["LSE", "Technical Coordinator", "Leadership", "Web Development", "React", "Node.js"]
}

export default function LsePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

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
                    <h1 className="text-4xl sm:text-5xl font-light tracking-tight">Technical Coordinator</h1>
                    <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full">Oct 2022 — July 2024</span>
                </div>
                <div className="text-2xl text-muted-foreground font-light">
                    @ <a href="https://lsebucuresti.org/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5">League of Electronics Students</a>
                </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Managed the IT Department and coordinated a team of 50+ members.  Focused on training volunteers in web development fundamentals and delivering impactful applications for the student community.
            </p>
            </header>

            <section className="space-y-12 animate-fade-in-up delay-100">
            <div className="grid gap-8">
                <h2 className="text-xl font-medium tracking-wide border-l-2 border-foreground pl-4">Key Responsibilities</h2>
                
                <div className="grid gap-6">
                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">👥</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Team Management & Training</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Managed the IT Department, training volunteers in web development fundamentals and GitHub workflows. fostered a collaborative environment for learning and development.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">💻</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Project Delivery</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Delivered key web applications including the organization website, APV (charitable platform, 500+ users), BBETTI (voting platform, 1,000+ users), and Laundry Reservation system (700+ users).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-medium tracking-wide">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Node.js", "GitHub", "Tailwind CSS", "PostgreSQL", "Sequelize"].map((tech) => (
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
