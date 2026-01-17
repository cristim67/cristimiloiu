"use client"

import { useMemo } from "react"

interface ContributionDay {
  date: Date
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

function generateContributionData(): ContributionDay[] {
  const data: ContributionDay[] = []
  const today = new Date()
  const startDate = new Date(today)
  startDate.setFullYear(startDate.getFullYear() - 1)
  startDate.setDate(startDate.getDate() - startDate.getDay()) // Start from Sunday

  for (let i = 0; i < 53 * 7; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)

    if (date > today) {
      data.push({ date, count: 0, level: 0 })
      continue
    }

    // Generate realistic-looking contribution patterns
    const dayOfWeek = date.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const random = Math.random()

    let count = 0
    let level: 0 | 1 | 2 | 3 | 4 = 0

    if (isWeekend) {
      // Less activity on weekends
      if (random > 0.6) {
        count = Math.floor(Math.random() * 5) + 1
        level = count <= 2 ? 1 : count <= 4 ? 2 : 3
      }
    } else {
      // More activity on weekdays
      if (random > 0.15) {
        count = Math.floor(Math.random() * 12) + 1
        level = count <= 2 ? 1 : count <= 5 ? 2 : count <= 8 ? 3 : 4
      }
    }

    data.push({ date, count, level })
  }

  return data
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function GitHubContributions() {
  const contributions = useMemo(() => generateContributionData(), [])

  // Group contributions by week
  const weeks: ContributionDay[][] = []
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }

  // Calculate month labels positions
  const monthLabels: { month: string; position: number }[] = []
  let lastMonth = -1
  weeks.forEach((week, weekIndex) => {
    const firstDayOfWeek = week[0]
    const month = firstDayOfWeek.date.getMonth()
    if (month !== lastMonth) {
      monthLabels.push({ month: MONTHS[month], position: weekIndex })
      lastMonth = month
    }
  })

  // Calculate total contributions
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0)

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-muted"
      case 1:
        return "bg-emerald-900/50 dark:bg-emerald-400/30"
      case 2:
        return "bg-emerald-700/70 dark:bg-emerald-400/50"
      case 3:
        return "bg-emerald-600 dark:bg-emerald-400/70"
      case 4:
        return "bg-emerald-500 dark:bg-emerald-400"
      default:
        return "bg-muted"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">{totalContributions.toLocaleString()}</span> contributions in
          the last year
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="inline-block min-w-full">
          {/* Month labels */}
          <div className="flex mb-2 text-xs text-muted-foreground">
            <div className="w-8 shrink-0" />
            <div className="flex relative" style={{ width: weeks.length * 13 }}>
              {monthLabels.map((label, i) => (
                <span key={i} className="absolute" style={{ left: label.position * 13 }}>
                  {label.month}
                </span>
              ))}
            </div>
          </div>

          <div className="flex">
            {/* Day labels */}
            <div className="flex flex-col gap-[3px] text-xs text-muted-foreground mr-2 shrink-0">
              {DAYS.map((day, i) => (
                <div
                  key={day}
                  className="h-[10px] flex items-center"
                  style={{ visibility: i % 2 === 1 ? "visible" : "hidden" }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex gap-[3px]">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(day.level)} transition-colors duration-200 hover:ring-1 hover:ring-foreground/50`}
                      title={`${day.count} contributions on ${day.date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-[3px]">
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(level)}`} />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  )
}
