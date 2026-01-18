import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scientific Session 2023 Award | Cristi Miloiu",
  description: "2nd Place at Scientific Communications Session for Stolen Car Finder app.",
  keywords: ["Award", "Scientific Session", "Stolen Car Finder", "YOLOv3", "Computer Vision"]
}

export default function ScientificSession2023Page() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-slate-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

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
                    <h1 className="text-3xl sm:text-4xl font-light tracking-tight">2nd Place — Scientific Communications Session</h1>
                    <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full whitespace-nowrap">May 2023</span>
                </div>
                 <div className="text-xl text-muted-foreground font-light">
                    @ National University of Science and Technology Politehnica Bucharest
                </div>
            </div>
            </header>

            <section className="space-y-12 animate-fade-in-up delay-100">
            <div className="grid gap-8">
                <h2 className="text-xl font-medium tracking-wide border-l-2 border-foreground pl-4">Project: Stolen Car Finder</h2>
                
                <div className="grid gap-6">
                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🚓</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Mobile App for Finding Stolen Cars</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Built a mobile application designed to help locate stolen vehicles using crowd-sourced computer vision scanning.
                                </p>
                                <ul className="list-disc list-inside text-primary/70 leading-relaxed text-sm mt-3 space-y-1">
                                    <li>Utilized <strong>YOLOv3</strong> and custom color transformation algorithms for license plate recognition.</li>
                                    <li>Implemented specific image processing pipelines with <strong>OpenCV</strong>.</li>
                                    <li>Integrated <strong>geolocation tracking</strong> and automated email alerts for positive matches.</li>
                                </ul>
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
