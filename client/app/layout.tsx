import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { PERSON, SITE_NAME, SITE_URL } from "@/lib/site"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/index.md",
      "text/plain": "/llms.txt",
    },
  },
  title: {
    default: "Cristi Miloiu - Software Engineer",
    template: "%s | Cristi Miloiu"
  },
  description: "Tech Lead specialized in AI Agents and Cloud Architecture, backed by a strong Full Stack foundation.",
  keywords: [
    "Software Engineer",
    "AI Agents",
    "Cloud Architecture",
    "Generative AI",
    "LLMs", 
    "RAG",
    "Langfuse",
    "Python", 
    "TypeScript", 
    "React", 
    "Next.js", 
    "AWS", 
    "FastAPI",
    "Bucharest", 
    "Romania"
  ],
  authors: [{ name: "Cristi Miloiu" }],
  creator: "Cristi Miloiu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Cristi Miloiu - Software Engineer",
    description: "Tech Lead specialized in AI Agents and Cloud Architecture, backed by a strong Full Stack foundation.",
    siteName: "Cristi Miloiu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristi Miloiu - Software Engineer",
    description: "Tech Lead specialized in AI Agents and Cloud Architecture, backed by a strong Full Stack foundation.",
    creator: "@cristim67",
  },
  generator: "Next.js",
}

const PERSON_ID = `${SITE_URL}/#person`

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: PERSON.name,
      givenName: PERSON.givenName,
      familyName: PERSON.familyName,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      description: PERSON.headline,
      jobTitle: PERSON.jobTitle,
      email: `mailto:${PERSON.email}`,
      worksFor: {
        "@type": "Organization",
        name: PERSON.employer.name,
        url: PERSON.employer.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: PERSON.location.city,
          addressCountry: PERSON.location.countryCode,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          url: "https://genezio.com/contact-sales/",
        },
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: PERSON.alumniOf,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: PERSON.location.city,
        addressCountry: PERSON.location.countryCode,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "professional inquiries",
        email: PERSON.email,
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English", "Romanian"],
      },
      knowsAbout: PERSON.knowsAbout,
      sameAs: PERSON.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: PERSON.headline,
      inLanguage: "en",
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Cristi Miloiu - Software Engineer",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": PERSON_ID },
      about: { "@id": PERSON_ID },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
