import { Metadata } from "next"
import { SimplePage } from "@/components/simple-page"
import { PERSON } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Contact Cristi Miloiu by email or LinkedIn for job opportunities, collaborations, mentoring or speaking about AI agents and cloud architecture.",
}

export default function ContactPage() {
  return (
    <SimplePage
      title="Contact"
      intro={
        <p>
          I am always interested in new opportunities, collaborations, and conversations about technology and design.
          The best way to reach me is by email.
        </p>
      }
    >
      <section>
        <h2>Get in touch</h2>
        <ul>
          <li>
            Email: <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer">
              Cristi Miloiu
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href={PERSON.github} target="_blank" rel="noopener noreferrer">
              @cristim67
            </a>
          </li>
          <li>
            Resume: <a href={PERSON.resume}>download the PDF</a>
          </li>
          <li>Location: Bucharest, Romania (time zone: Europe/Bucharest)</li>
        </ul>
      </section>

      <section>
        <h2>What to write about</h2>
        <p>
          I am happy to hear about engineering leadership and senior engineering roles focused on AI agents, LLM
          platforms and cloud backends, technical collaborations, startup mentoring, and talks or workshops about
          building with LLMs. Please include a short description of what you have in mind and any relevant links.
        </p>
        <p>
          For questions about Genezio products, pricing or support, please contact Genezio directly at{" "}
          <a href={PERSON.employer.url} target="_blank" rel="noopener noreferrer">
            genezio.com
          </a>
          . I usually reply to personal emails within a few working days. I write in English and Romanian.
        </p>
      </section>
    </SimplePage>
  )
}
