import Link from "next/link"
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Facial Emotion Recognition | Cristi Miloiu",
  description: "High-performance Facial Emotion Recognition (FER) system using Vision Transformers (ViT) and advanced optimization techniques.",
  keywords: ["FER", "Computer Vision", "Vision Transformers", "PyTorch", "Deep Learning", "Streamlit"]
}

export default function FerProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

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
                    <h1 className="text-3xl sm:text-5xl font-light tracking-tight">Facial Emotion Recognition</h1>
                    <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full whitespace-nowrap">Jan 2024</span>
                </div>
                 <div className="flex items-center gap-4 text-muted-foreground">
                    <Link href="https://github.com/cristim67/aspicv-project" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2 border-b border-transparent hover:border-foreground pb-0.5">
                        <Github className="w-4 h-4" /> View Source
                    </Link>
                </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A state-of-the-art computer vision system capable of accurately detecting and classifying human facial emotions.
            </p>
            </header>

            <section className="space-y-12 animate-fade-in-up delay-100">
            <div className="grid gap-8">
                <h2 className="text-xl font-medium tracking-wide border-l-2 border-foreground pl-4">Key Features</h2>
                
                <div className="grid gap-6">
                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">👁️</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Vision Transformers (ViT)</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Built a high-performance model using Vision Transformers (ViT), fine-tuned on a custom dataset to achieve superior accuracy compared to traditional CNNs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <span className="text-2xl p-2 bg-background rounded-lg border border-border">🎯</span>
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Advanced Optimization</h3>
                                <p className="text-primary/70 leading-relaxed text-sm">
                                    Implemented advanced optimization techniques including Mixup, Label Smoothing, and Test Time Augmentation (TTA) to improve model generalization and robustness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-medium tracking-wide">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "Vision Transformers", "Streamlit", "Docker"].map((tech) => (
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
