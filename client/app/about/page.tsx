import Link from "next/link"
import { Metadata } from "next"
import { SimplePage } from "@/components/simple-page"
import { PERSON } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "About Cristi Miloiu: Tech Lead and Product Owner at Genezio, specialized in AI Agents and Cloud Architecture, based in Bucharest, Romania.",
}

export default function AboutPage() {
  return (
    <SimplePage
      title="About Cristi Miloiu"
      intro={
        <p>
          I am the Tech Lead and Product Owner at{" "}
          <a href={PERSON.employer.url} target="_blank" rel="noopener noreferrer">
            Genezio
          </a>{" "}
          (May 2026 - Present), specialized in AI Agents and Cloud Architecture, backed by a strong Full Stack
          foundation. I live in Bucharest, Romania.
        </p>
      }
    >
      <section>
        <h2>What I do</h2>
        <p>
          At Genezio, an AI market intelligence platform that shows brands how ChatGPT, Gemini and other AI assistants
          perceive and recommend them, I lead the engineering team, help shape the product roadmap, own technical SOC 2
          compliance and still build large features end to end. Before this role I was a Software Engineer at Genezio
          (2023 - 2026), where I owned the backend and agents codebase, and a Full Stack Intern in the summer of 2023.
        </p>
        <p>
          My day-to-day work covers LLM-based agents, backend APIs in Python and FastAPI, data stores such as PostgreSQL,
          MongoDB and Redis, and cloud infrastructure on AWS and Azure. See the{" "}
          <Link href="/work/genezio">Genezio case study</Link> for details.
        </p>
      </section>

      <section>
        <h2>Background</h2>
        <p>
          I hold a B.Sc. in Computer Science from the National University of Science and Technology Politehnica
          Bucharest (2021 - 2025), with a thesis on automatic generation of REST and GraphQL APIs using LLMs, and I am
          currently pursuing an M.Eng. in Information Systems Engineering at the same university, with a dissertation on
          information visibility in the age of LLMs. Earlier, I coordinated the IT department of the League of
          Electronics Students and interned as a system engineer at Huawei.
        </p>
      </section>

      <section>
        <h2>Outside of work</h2>
        <p>
          I mentor early-stage startups at Innovation Labs and teams at The Bucharest Hackathon. I have won awards at
          the Electron Hackathon and at the UPB Scientific Communications Session.
        </p>
      </section>

      <section>
        <h2>About this website</h2>
        <p>
          This is my personal portfolio. It is not a commercial service and does not sell anything. It lists my work,
          projects, education and awards so that people and AI assistants can find accurate information about me. A
          plain text version is available at <a href="/llms.txt">/llms.txt</a>, and you can reach me through the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </SimplePage>
  )
}
