import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Genezio Work Experience | Cristi Miloiu",
  description: "Detailed breakdown of my work as a Software Engineer at Genezio, including AI agents, cloud architecture, and deployment automation.",
  keywords: ["Genezio", "Software Engineer", "AI Agents", "Cloud Architecture", "AWS", "FastAPI", "Next.js"]
}

export default function GenezioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 sm:p-20 font-sans">
      <div className="max-w-2xl mx-auto space-y-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <header className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h1 className="text-3xl sm:text-4xl font-light">Software Engineer</h1>
            <span className="text-muted-foreground font-mono text-sm">2023 — Present</span>
          </div>
          <div className="text-xl text-muted-foreground">@ Genezio</div>
        </header>

        <section className="space-y-8 leading-relaxed text-muted-foreground">
          <p className="text-lg text-foreground">
            Made 5000+ GitHub contributions last year, delivering key enhancements across the platform.
          </p>

          <ul className="space-y-6 list-none">
            <li className="flex gap-4">
              <span className="text-2xl mt-1">🔧</span>
              <div>
                <strong className="text-foreground block mb-1">AI Agent Simulation</strong>
                Building red/blue team agents to simulate conversations, attacks, and edge cases for testing enterprise customer support AI bots.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl mt-1">📦</span>
              <div>
                <strong className="text-foreground block mb-1">Serverless Deployment</strong>
                Enable deployment for Lambda Functions, FastAPI, Flask, Django with ASGI & WSGI integration.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl mt-1">🚀</span>
              <div>
                <strong className="text-foreground block mb-1">Next.js Architecture</strong>
                Transitioned Next.js deployment architecture from OpenNext (AWS Lambda-based) to an out-of-the-box solution for improved scalability and simplicity.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl mt-1">🔐</span>
              <div>
                <strong className="text-foreground block mb-1">Authentication System</strong>
                Created an authentication system with SDK support for GoogleAuth and Email & Password.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl mt-1">📚</span>
              <div>
                <strong className="text-foreground block mb-1">Developer Experience</strong>
                Authored technical docs, articles, and sample projects to enhance developer experience.
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-8">
            {["FastAPI", "Next.js", "AWS", "Remix", "NestJS", "Python", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm border border-border rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
