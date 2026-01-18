import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Huawei Work Experience | Cristi Miloiu",
  description: "Internship experience at Huawei Enterprise GSC: Enterprise storage protocols and Linux administration.",
  keywords: ["Huawei", "Internship", "Storage", "Linux", "Server Administration"]
}

export default function HuaweiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-gray-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

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
                    <h1 className="text-4xl sm:text-5xl font-light tracking-tight">System Engineering Intern</h1>
                    <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full">July 2022 — Sept 2022</span>
                </div>
                <div className="text-2xl text-muted-foreground font-light">
                    @ <a href="https://www.huawei.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5">Huawei Enterprise GSC</a>
                </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Gained deep technical expertise in enterprise storage solutions and server administration.
            </p>
            </header>

            <section className="space-y-12 animate-fade-in-up delay-100">
            <div className="grid gap-8">
                <h2 className="text-xl font-medium tracking-wide border-l-2 border-foreground pl-4">Key Responsibilities</h2>
                
                <div className="grid gap-6">
                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">💾</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Storage Protocols</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Worked extensively with enterprise storage protocols including SAN (Storage Area Network) and NAS (Network Attached Storage), as well as RAID configurations for data redundancy and performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🐧</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Linux Administration</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Performed Linux server administration tasks, managing resources and ensuring system stability in an enterprise environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-medium tracking-wide">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                {["Linux", "SAN/NAS", "RAID", "Enterprise Server Administration"].map((tech) => (
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
