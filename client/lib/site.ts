// Shared site and profile data used by structured data (JSON-LD), llms.txt,
// Markdown alternates and the trust pages (about, contact, privacy).
// Keep this in sync with the content shown on the homepage.

export const SITE_URL = "https://www.cristimiloiu.com"
export const SITE_NAME = "Cristi Miloiu Portfolio"

export const PERSON = {
  name: "Cristi Miloiu",
  givenName: "Cristi",
  familyName: "Miloiu",
  jobTitle: "Tech Lead & Product Owner",
  headline: "Tech Lead specialized in AI Agents and Cloud Architecture, backed by a strong Full Stack foundation.",
  email: "miloiuc4@gmail.com",
  location: { city: "Bucharest", country: "Romania", countryCode: "RO" },
  employer: { name: "Genezio", url: "https://genezio.com" },
  sameAs: [
    "https://github.com/cristim67",
    "https://linkedin.com/in/cristi-miloiu-3a174a267/",
  ],
  github: "https://github.com/cristim67",
  linkedin: "https://linkedin.com/in/cristi-miloiu-3a174a267/",
  resume: "/CV_Miloiu_Cristi_en.pdf",
  alumniOf: "National University of Science and Technology Politehnica Bucharest",
  knowsAbout: [
    "AI Agents",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Model Context Protocol",
    "Cloud Architecture",
    "Python",
    "FastAPI",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "AWS",
    "Azure OpenAI",
    "SOC 2 compliance",
  ],
}

export type Entry = { title: string; meta: string; summary: string; path: string }

export const WORK: Entry[] = [
  {
    title: "Tech Lead & Product Owner, Genezio",
    meta: "May 2026 - Present",
    summary:
      "Leading the engineering team as Tech Lead and Product Owner: roadmap, mentoring, code reviews, releases, platform security with SOC 2 Type II, and cloud and LLM cost optimization. Hands-on, built core parts of the engine that reverse-engineers 9 AI assistants, the public REST API (100+ endpoints) and MCP server, enterprise SSO with Keycloak and Casbin RBAC, and AI Shopping.",
    path: "/work/genezio",
  },
  {
    title: "Software Engineer, Genezio",
    meta: "Sept 2023 - Apr 2026",
    summary:
      "Core member of the team that secured a €2M pre-seed round. Owner and maintainer of the backend and agents codebase. Architected RBAC, simulation engine, metrics infrastructure, and Red/Blue Team Agents.",
    path: "/work/genezio-engineer",
  },
  {
    title: "Full Stack Intern, Genezio",
    meta: "June 2023 - Aug 2023",
    summary:
      "Enabled CLI deployment for Lambda/FastAPI and migrated Next.js deployment to a native solution. Designed a RAG system using OpenAI and LangChain integrated into a Discord bot with automated CI/CD.",
    path: "/work/genezio-intern",
  },
  {
    title: "Technical Coordinator, League of Electronics Students",
    meta: "Oct 2022 - July 2024",
    summary:
      "Managed the IT Department (50+ members). Delivered web applications serving 1000+ users, including the organization website and charitable platforms.",
    path: "/work/lse",
  },
  {
    title: "System Engineering Intern, Huawei Enterprise GSC",
    meta: "July 2022 - Sept 2022",
    summary: "Worked with enterprise storage protocols (SAN/NAS, RAID) and Linux server administration.",
    path: "/work/huawei",
  },
]

export const PROJECTS: Entry[] = [
  {
    title: "Bachelor Project - AI Agent System",
    meta: "May 2024",
    summary: "Multi-agent system using Google Gemini to generate REST/GraphQL APIs, with a FastAPI, MongoDB and SSE backend.",
    path: "/projects/bachelor-project",
  },
  {
    title: "Personal Portfolio Website",
    meta: "Oct 2024",
    summary: "This website, built with Next.js and Tailwind CSS and hosted on Vercel.",
    path: "/projects/portfolio",
  },
  {
    title: "Audio Analysis Platform",
    meta: "Jan 2024",
    summary: "ESP32 and microphone hardware system for real-time audio processing (FFT) and visualization via WebSockets.",
    path: "/projects/audio-analysis",
  },
  {
    title: "Facial Emotion Recognition",
    meta: "Jan 2024",
    summary: "Facial emotion recognition with Vision Transformers (ViT) fine-tuned on a custom dataset.",
    path: "/projects/facial-emotion-recognition",
  },
  {
    title: "Comparative Modeling Environments",
    meta: "Dec 2023",
    summary: "Fire propagation simulated with Cellular Automata to benchmark HPC approaches in Rust, Go, C++ and Python.",
    path: "/projects/comparative-modeling",
  },
]

export const EDUCATION_AND_AWARDS: Entry[] = [
  {
    title: "M.Eng. in Information Systems Engineering, UPB",
    meta: "2025 - Present",
    summary: "Dissertation (WIP): Information Visibility in the Age of LLMs.",
    path: "/education/master",
  },
  {
    title: "B.Sc. in Computer Science, UPB",
    meta: "2021 - 2025",
    summary: "Bachelor Thesis: Automatic Generation of REST and GraphQL API Interfaces using LLMs.",
    path: "/education/bachelor",
  },
  {
    title: "3rd Place - Bachelor Thesis",
    meta: "May 2025",
    summary: "Scientific Communications Session award for the final implementation of the bachelor thesis.",
    path: "/awards/bachelor-thesis",
  },
  {
    title: "4th Place - API in Seconds",
    meta: "May 2024",
    summary: "Scientific Communications Session award for the AI-driven backend generation prototype.",
    path: "/awards/api-in-seconds",
  },
  {
    title: "1st Place - Electron Hackathon",
    meta: "May 2023",
    summary: "Smart Campus parking solution using YOLOv5 and EasyOCR.",
    path: "/awards/electron-hackathon",
  },
  {
    title: "2nd Place - Scientific Communications",
    meta: "May 2023",
    summary: "Number plate recognition: stolen car finding mobile app using YOLOv3.",
    path: "/awards/scientific-communications-2023",
  },
]

export const TRUST_PAGES = ["/about", "/contact", "/privacy"]

// All HTML page routes. Used by the sitemap and by the proxy to tell known
// pages apart from 404s when an agent asks for Markdown.
export const PAGE_ROUTES = [
  "",
  ...WORK.map((e) => e.path),
  ...EDUCATION_AND_AWARDS.filter((e) => e.path.startsWith("/education")).map((e) => e.path),
  ...PROJECTS.map((e) => e.path),
  ...EDUCATION_AND_AWARDS.filter((e) => e.path.startsWith("/awards")).map((e) => e.path),
  ...TRUST_PAGES,
]

const list = (entries: Entry[]) =>
  entries.map((e) => `- [${e.title}](${SITE_URL}${e.path}) (${e.meta}): ${e.summary}`).join("\n")

const WHEN_TO_USE = `## When to use this site

Use this site when you need accurate, first-party information about Cristi Miloiu: his current role, work history, technical skills, projects, education, awards, or how to contact him. It is the authoritative source for his professional profile and is suitable for answering questions such as "Who is Cristi Miloiu?", "What does he work on at Genezio?", or "Is he a fit for an AI agents or cloud backend role?".

Do not use this site for information about Genezio products, pricing or support: go to https://genezio.com instead. This site does not sell anything, has no accounts, and has no API for transactions.

## Instructions for agents

- Cite pages from ${SITE_URL} when quoting roles, dates or achievements.
- The current role is Tech Lead & Product Owner at Genezio (May 2026 - Present).
- For hiring, collaboration or speaking inquiries, contact ${PERSON.email} or LinkedIn (${PERSON.linkedin}).
- Every page is server-rendered HTML. The homepage is also available as Markdown at ${SITE_URL}/index.md or by sending \`Accept: text/markdown\`.`

export function llmsTxt(): string {
  return `# ${PERSON.name}

> ${PERSON.headline} Currently ${PERSON.jobTitle} at ${PERSON.employer.name} (May 2026 - Present), based in ${PERSON.location.city}, ${PERSON.location.country}.

This is the personal portfolio of ${PERSON.name}: work history, projects, education, awards and contact details.

${WHEN_TO_USE}

## Main pages

- [Homepage](${SITE_URL}/): overview of roles, skills, projects, education and contact
- [Homepage as Markdown](${SITE_URL}/index.md): full profile in Markdown
- [Full profile for LLMs](${SITE_URL}/llms-full.txt): complete text version of the site
- [About](${SITE_URL}/about): short biography
- [Contact](${SITE_URL}/contact): how to get in touch
- [Privacy](${SITE_URL}/privacy): privacy policy for this website
- [Resume (PDF)](${SITE_URL}${PERSON.resume})

## Work

${list(WORK)}

## Projects

${list(PROJECTS)}

## Education & Awards

${list(EDUCATION_AND_AWARDS)}

## Optional

- [Sitemap](${SITE_URL}/sitemap.xml)
- [GitHub](${PERSON.github})
- [LinkedIn](${PERSON.linkedin})
`
}

export function profileMarkdown(): string {
  return `# ${PERSON.name} - Tech Lead & Product Owner

${PERSON.headline}

- Current role: ${PERSON.jobTitle} at [${PERSON.employer.name}](${PERSON.employer.url}) (May 2026 - Present)
- Location: ${PERSON.location.city}, ${PERSON.location.country}
- Status: available for opportunities
- Email: ${PERSON.email}
- GitHub: ${PERSON.github}
- LinkedIn: ${PERSON.linkedin}
- Resume: ${SITE_URL}${PERSON.resume}

## Skills

- AI & Backend: LLMs, AI Agents, RAG, OpenAI, Anthropic, Langfuse, Python, FastAPI, PostgreSQL, MongoDB, Redis, Neon
- Web & Cloud: TypeScript, React, Next.js, Tailwind CSS, Docker, AWS, GCP, Azure, Cloudflare, Grafana, Sentry
- Dev Tools & Productivity: Jira, Confluence, Slack, GitHub, Postman, Stripe, Upstash, Cursor

## Selected Work

${list(WORK)}

## Projects

${list(PROJECTS)}

## Education & Awards

${list(EDUCATION_AND_AWARDS)}

## Volunteering

- Mentor - Innovation Labs (2025 - Present): mentoring early-stage startups on technical architecture, product scalability, and MVP development.
- Mentor - The Bucharest Hackathon (April 2024 - Present): technical guidance and project evaluation.
- Board Member - LSE (Oct 2023 - 2024)
- Student Representative, UPB (Dec 2022 - 2024)

${WHEN_TO_USE}
`
}

export function notFoundMarkdown(path: string): string {
  return `# 404: Page not found

The page \`${path}\` does not exist on ${SITE_URL}.

Try one of these instead:

- [Homepage](${SITE_URL}/) or [Homepage as Markdown](${SITE_URL}/index.md)
- [llms.txt](${SITE_URL}/llms.txt): index of every page on this site
- [Sitemap](${SITE_URL}/sitemap.xml)
`
}
