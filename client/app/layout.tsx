import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: {
    default: "Cristi Miloiu - Software Engineer",
    template: "%s | Cristi Miloiu"
  },
  description: "Software Engineer specialized in AI Agents and Cloud Architecture, backed by a strong Full Stack foundation.",
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
    url: "https://cristimiloiu.com",
    title: "Cristi Miloiu - Software Engineer",
    description: "Software Engineer specialized in AI Agents and Cloud Architecture, backed by a strong Full Stack foundation.",
    siteName: "Cristi Miloiu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristi Miloiu - Software Engineer",
    description: "Software Engineer specialized in AI Agents and Cloud Architecture, backed by a strong Full Stack foundation.",
    creator: "@cristim67",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
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
