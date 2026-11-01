import { Metadata } from "next"
import { SimplePage } from "@/components/simple-page"
import { PERSON } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "Privacy policy for cristimiloiu.com: what data this personal portfolio website collects, how it is used, and how to contact the site owner.",
}

export default function PrivacyPage() {
  return (
    <SimplePage
      title="Privacy Policy"
      intro={
        <p>
          This policy explains what information is processed when you visit cristimiloiu.com, the personal portfolio of
          Cristi Miloiu. The short version: the site has no accounts, no forms, no advertising and no tracking cookies.
        </p>
      }
    >
      <section>
        <h2>Who is responsible</h2>
        <p>
          The site is owned and operated by Cristi Miloiu, Bucharest, Romania. For any privacy question or request,
          email <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>.
        </p>
      </section>

      <section>
        <h2>What data is processed</h2>
        <ul>
          <li>
            Server logs: the hosting provider (Vercel) and the network provider (Cloudflare) process technical data
            such as your IP address, browser user agent, requested URL and time of the request, in order to deliver the
            site and protect it against abuse. These logs are kept for a limited time under their own policies.
          </li>
          <li>
            Theme preference: your light or dark mode choice is stored in your browser&apos;s local storage. It never
            leaves your device.
          </li>
          <li>
            GitHub activity: the contributions chart is loaded through this site&apos;s server from a public GitHub
            contributions API (github-contributions-api.jogruber.de). Your browser only talks to this site, so no data
            about you is sent to that service or to GitHub.
          </li>
          <li>Email: if you write to me, I use your message and address only to reply to you.</li>
        </ul>
      </section>

      <section>
        <h2>What is not done</h2>
        <p>
          The site does not use analytics or advertising cookies, does not build visitor profiles, and does not sell or
          share personal data with third parties beyond the infrastructure providers named above.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Under the GDPR you can ask for access to, correction of, or deletion of personal data I hold about you, such
          as emails you sent me. Send the request to the email address above. You can also complain to the Romanian data
          protection authority (ANSPDCP).
        </p>
        <p>Last updated: November 2026.</p>
      </section>
    </SimplePage>
  )
}
