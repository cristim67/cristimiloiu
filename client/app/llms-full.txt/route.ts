import { llmsTxt, profileMarkdown } from "@/lib/site"

export const dynamic = "force-static"

export function GET() {
  return new Response(`${profileMarkdown()}\n---\n\n${llmsTxt()}`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
