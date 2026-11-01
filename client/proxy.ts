import { NextRequest, NextResponse } from "next/server"
import { notFoundMarkdown, PAGE_ROUTES } from "@/lib/site"

const KNOWN_PAGES = new Set(PAGE_ROUTES.map((route) => route || "/"))

// Returns the q-value the Accept header gives to a media type (0 when absent).
function quality(accept: string, type: string): number {
  let best = 0
  for (const part of accept.split(",")) {
    const [media, ...params] = part.trim().toLowerCase().split(";")
    if (media.trim() !== type) continue
    const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="))
    best = Math.max(best, q ? Number.parseFloat(q.slice(2)) || 0 : 1)
  }
  return best
}

function prefersMarkdown(req: NextRequest): boolean {
  const accept = req.headers.get("accept") ?? ""
  const md = quality(accept, "text/markdown")
  return md > 0 && md >= quality(accept, "text/html")
}

// Markdown content negotiation for agents (https://acceptmarkdown.com):
// - `/` with `Accept: text/markdown` is served the Markdown profile.
// - Unknown paths with `Accept: text/markdown` get a Markdown 404 body.
// - Everything else is served as usual, with `Vary: Accept`.
export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/\/+$/, "") || "/"

  if (prefersMarkdown(req)) {
    if (path === "/") {
      const res = NextResponse.rewrite(new URL("/index.md", req.url))
      res.headers.set("Vary", "Accept")
      return res
    }
    if (!KNOWN_PAGES.has(path)) {
      return new NextResponse(notFoundMarkdown(path), {
        status: 404,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          Vary: "Accept",
        },
      })
    }
  }

  const res = NextResponse.next()
  res.headers.append("Vary", "Accept")
  return res
}

export const config = {
  // Page routes only: skip Next internals, API routes and files with an extension.
  matcher: ["/((?!_next/|api/|.*\\.[^/]+$).*)"],
}
