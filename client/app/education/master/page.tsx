import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "M.Eng. Education | Cristi Miloiu",
  description: "Master's degree in Information and Computing Systems Engineering at UPB.",
  keywords: ["Master's Degree", "UPB", "Information Systems", "LLMs", "Education"]
}

export default function MasterEducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <main className="max-w-3xl mx-auto px-6 py-20 relative z-10">
            <Link 
            href="/#thoughts" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group mb-12"
            >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Education & Awards
            </Link>

            <header className="space-y-6 mb-16 animate-fade-in-up">
            <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-3xl sm:text-4xl font-light tracking-tight">M.Eng. in Information & Computing Systems</h1>
                    <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full whitespace-nowrap">Oct 2025 — Present</span>
                </div>
                <div className="text-xl text-muted-foreground font-light">
                    @ <a href="https://upb.ro/en/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5">National University of Science and Technology Politehnica Bucharest</a>
                </div>
            </div>
            </header>

            <section className="space-y-12 animate-fade-in-up delay-100">
            <div className="grid gap-8">
                <h2 className="text-xl font-medium tracking-wide border-l-2 border-foreground pl-4">Details</h2>
                
                <div className="grid gap-6">
                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🎓</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Faculty</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Faculty of Electronics, Telecommunications and Information Technology
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🔬</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Dissertation (WIP)</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    <strong>Topic:</strong> Information Visibility in the Age of LLMs.
                                    <br />
                                    Researching the impact of Large Language Models on information dissemination and visibility in the digital age.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>
    </div>
  )
}
