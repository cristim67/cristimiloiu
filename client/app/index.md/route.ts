import { profileMarkdown } from "@/lib/site"

export const dynamic = "force-static"

// Markdown version of the homepage. Middleware rewrites `/` here when a client
// sends `Accept: text/markdown`.
export function GET() {
  return new Response(profileMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
    },
  })
}
