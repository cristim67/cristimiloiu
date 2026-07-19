import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://github-contributions-api.jogruber.de/v4";
const ALLOWED_USERNAMES = new Set(["cristim67"]);

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

// The upstream `y=last` endpoint is unreliable (frequent 502s), so we only hit
// `y=all` and derive the trailing-year window ourselves. Cached for an hour;
// on a stale-while-revalidate window Next keeps serving the last good response
// even if the upstream is temporarily down.
export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username") ?? "cristim67";

  if (!ALLOWED_USERNAMES.has(username)) {
    return NextResponse.json({ error: "Unknown username" }, { status: 400 });
  }

  try {
    const response = await fetch(`${API_BASE}/${username}?y=all`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Upstream unavailable" },
        { status: 502 },
      );
    }

    const all = (await response.json()) as ApiResponse;

    const ascending = [...all.contributions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    // GitHub's "last year" graph is a 53-column grid: a 371-day window ending
    // today, spanning two calendar years — not the current calendar year. Match
    // that window exactly (365 days undercounts vs GitHub's shown total) and
    // drop any future-dated days the upstream may include.
    const DAY = 24 * 60 * 60 * 1000;
    const now = new Date();
    // Normalize to the start of today (UTC) so the day-count math lines up with
    // the midnight-anchored `date` values, matching GitHub's inclusive 371-day
    // window (today plus the 370 preceding days).
    const today = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
    );
    const cutoff = today - 370 * DAY;
    const lastContributions = ascending.filter((d) => {
      const t = new Date(d.date).getTime();
      return t >= cutoff && t <= today;
    });

    const last: ApiResponse = {
      total: {},
      contributions: lastContributions,
    };

    return NextResponse.json(
      { all, last },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { error: "Upstream unavailable" },
      { status: 502 },
    );
  }
}
