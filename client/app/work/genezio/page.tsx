import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/work/genezio" },
  title: "Genezio - Tech Lead & PO | Cristi Miloiu",
  description:
    "Tech Lead & PO at Genezio: engineering leadership, roadmap input and prioritization, SOC 2 compliance, and shipping core product lines.",
  keywords: [
    "Genezio",
    "Technical Lead",
    "Product Owner",
    "Engineering Leadership",
    "SOC 2",
    "Vanta",
    "Code Review",
    "AI Agents",
    "FastAPI",
    "AWS",
  ],
}

export default function GenezioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <main className="max-w-5xl mx-auto px-6 py-20 relative z-10">
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
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight">Tech Lead & PO</h1>
              <span className="text-muted-foreground font-mono text-sm border border-border px-3 py-1 rounded-full">
                2026 - Present
              </span>
            </div>
            <div className="text-2xl text-muted-foreground font-light">
              @{" "}
              <a
                href="https://genezio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5"
              >
                Genezio
              </a>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
            Genezio is an AI market intelligence platform that shows brands how ChatGPT, Gemini, and other AI assistants perceive and recommend them, trusted by Fortune 500 companies such as CBRE and by teams at Vodafone, Bitdefender, and Erste Group. I lead the engineering team, help shape the roadmap,
            decide what gets prioritized or deprioritized, and own technical SOC 2 compliance. At the same time, I personally build the platform&apos;s largest features end to end. Top
            contributor, with 8,000+ GitHub contributions in the last year.
          </p>
          <p className="text-sm text-muted-foreground">
            Previously:{" "}
            <Link href="/work/genezio-engineer" className="text-foreground hover:underline">
              Software Engineer @ Genezio (2023 - 2026)
            </Link>
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
                    <h3 className="font-medium text-foreground">Team & Product</h3>
                    <p className="text-primary/70 leading-relaxed text-sm">
                      Leading the engineering team and acting as Product Owner: helping shape the roadmap, scoping
                      features, and deciding what gets prioritized or deprioritized based on customer feedback, Sales input, and my own product judgment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl p-2 bg-background rounded-lg border border-border">🔒</span>
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">SOC 2, Security & RFPs</h3>
                    <ul className="list-disc pl-4 space-y-1.5 text-primary/70 leading-relaxed text-sm">
                      <li>Owning SOC 2 Type II compliance in Vanta.</li>
                      <li>
                        Leading platform security end to end: identity and access (SSO, RBAC, scoped API keys), hardening of
                        the API surface (SSRF, CORS, rate limiting), audit logging, and security review of every release.
                      </li>
                      <li>
                        Completing the technical and security sections of enterprise RFPs for banks, telecom groups, and
                        multinationals.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl p-2 bg-background rounded-lg border border-border">🚀</span>
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Major Features I Built</h3>
                    <ul className="list-disc pl-4 space-y-1.5 text-primary/70 leading-relaxed text-sm">
                      <li>
                        Data collection engine that runs real conversations at scale across 9 AI assistants (ChatGPT, Claude,
                        Gemini, Perplexity and more) and extracts answers, cited sources, product recommendations, and ads by reverse-engineering their streaming responses.
                      </li>
                      <li>
                        Public REST API (100+ endpoints) and MCP server that let customers and their AI agents query the platform, with scoped
                        API keys, rate limiting, and audit logging. I also built its developer documentation site, with an
                        OpenAPI reference and search.
                      </li>
                      <li>Enterprise SSO with Keycloak (SAML, per-domain configs) on top of the Casbin RBAC I designed.</li>
                      <li>
                        AI Shopping, end to end: captures the products and retailers that AI assistants recommend, merges them
                        into canonical SKUs, and classifies them with an LLM, so brands see how their products rank against
                        competitors.
                      </li>
                      <li>
                        Drove the migration to a monorepo with shared libraries, and led the rebuild of CI/CD into a pipeline that
                        deploys 20+ services to HashiCorp Nomad in dependency order.
                      </li>
                      <li>
                        Launched two new products: ChatGPT Ads Intelligence, which shows brands who advertises inside ChatGPT in
                        their market, and Agent Analytics, which shows which AI crawlers read their website and which pages get
                        cited.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl p-2 bg-background rounded-lg border border-border">🤝</span>
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Cross-Functional Collaboration</h3>
                    <ul className="list-disc pl-4 space-y-1.5 text-primary/70 leading-relaxed text-sm">
                      <li>
                        Working directly with the co-founders on product strategy and priorities, translating fast-moving, ambiguous ideas into a
                        clear technical plan the team can deliver.
                      </li>
                      <li>
                        Partnering with Sales on enterprise deals: owning incoming customer requests, joining technical calls
                        with strategic customers, and translating their needs into concrete features.
                      </li>
                      <li>
                        Supporting Marketing with technical input on product launches, positioning, and content about new
                        features.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl p-2 bg-background rounded-lg border border-border">✅</span>
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Team Growth, Reviews & Releases</h3>
                    <p className="text-primary/70 leading-relaxed text-sm">
                      Helping the engineers grow through mentoring and hands-on feedback. Owning code reviews and production
                      releases, and running weekly planning and sync meetings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 border border-border rounded-xl bg-secondary/5 hover:border-foreground/20 hover:bg-secondary/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl p-2 bg-background rounded-lg border border-border">💰</span>
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Cost Optimization</h3>
                    <p className="text-primary/70 leading-relaxed text-sm">
                      Owning cloud and LLM costs: moving high-volume prompts to smaller models, shifting workloads from the
                      priority tier to standard and batch processing on Azure OpenAI, structuring prompts for caching, and
                      right-sizing production services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-medium tracking-wide">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Azure AI Foundry",
                "Azure OpenAI",
                "Azure Blob Storage",
                "Python",
                "Go",
                "TypeScript",
                "FastAPI",
                "Next.js",
                "React",
                "PostgreSQL",
                "Redis",
                "MongoDB",
                "LanceDB",
                "Docker",
                "HashiCorp Nomad",
                "GitHub Actions",
                "AWS",
                "Keycloak",
                "Casbin",
                "OpenAI",
                "Anthropic",
                "Langfuse",
                "MCP",
                "Sentry",
                "Grafana",
                "Vanta",
              ].map((tech) => (
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
