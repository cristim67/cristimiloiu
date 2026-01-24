"use client"

import { useEffect, useState, useMemo, useRef } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { ChevronDown, MoreHorizontal } from "lucide-react"

interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ApiResponse {
  total: {
    [year: string]: number
  }
  contributions: ContributionDay[]
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function GitHubContributions({ username = "cristim67" }: { username?: string }) {
  const [data, setData] = useState<ContributionDay[]>([])
  const [lastYearData, setLastYearData] = useState<any>(null)
  const [years, setYears] = useState<number[]>([])
  const [selectedYear, setSelectedYear] = useState<number | "lastYear" | null>(null)
  const [totalContributions, setTotalContributions] = useState(0)
  const [loading, setLoading] = useState(true)
  
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [hoveredDay, setHoveredDay] = useState<{ day: ContributionDay; x: number; y: number } | null>(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const [allResponse, lastResponse] = await Promise.all([
             fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=all`),
             fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
        ])

        const allJson: ApiResponse = await allResponse.json()
        const lastJson = await lastResponse.json()
        
        // Sort data ascending
        const sortedData = allJson.contributions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        setData(sortedData)
        setLastYearData(lastJson)
        
        const availableYears = Object.keys(allJson.total)
          .map(Number)
          .sort((a, b) => b - a)
        
        setYears(availableYears)
        setSelectedYear("lastYear")

      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [username])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropdown(false)
        }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  const { weeks, total, yearLabel } = useMemo(() => {
    if (data.length === 0 || !selectedYear) return { weeks: [], total: 0, yearLabel: "" }

    let processedData: ContributionDay[] = []
    let label = ""

    if (selectedYear === "lastYear") {
        if (lastYearData && lastYearData.contributions) {
            // Usually y=last returns { contributions: [ ... ] }
            processedData = lastYearData.contributions
            label = "in the last year"
        } else {
            // Fallback if not loaded yet
             processedData = []
        }
    } else {
        processedData = data.filter(d => new Date(d.date).getFullYear() === selectedYear)
        label = `in ${selectedYear}`
    }

    if (processedData.length === 0) return { weeks: [], total: 0, yearLabel: label }

    const totalCount = processedData.reduce((sum, day) => sum + day.count, 0)
    
    // --- Grid Generation ---
    const firstDate = new Date(processedData[0].date)
    const startDay = firstDate.getDay() // 0 = Sun
    
    const gridData: (ContributionDay | null)[] = []
    
    for (let i = 0; i < startDay; i++) {
        gridData.push(null)
    }
    
    gridData.push(...processedData)
    
    // Chunk
    const weeksChunked: (ContributionDay | null)[][] = []
    let currentWeek: (ContributionDay | null)[] = []
    
    gridData.forEach((day) => {
        currentWeek.push(day)
        if (currentWeek.length === 7) {
            weeksChunked.push(currentWeek)
            currentWeek = []
        }
    })
    
    if (currentWeek.length > 0) {
        while (currentWeek.length < 7) {
            currentWeek.push(null)
        }
        weeksChunked.push(currentWeek)
    }

    return { weeks: weeksChunked, total: totalCount, yearLabel: label }
  }, [data, selectedYear])

  useEffect(() => {
    if (total > 0) {
        setTotalContributions(total)
    }
  }, [total])


  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-secondary" 
      case 1:
        return "bg-primary/20" 
      case 2:
        return "bg-primary/40"
      case 3:
        return "bg-primary/70" 
      case 4:
        return "bg-primary" 
      default:
        return "bg-secondary"
    }
  }

  // Month Labels
  const monthLabels: { month: string; position: number }[] = []
  let lastMonth = -1
  weeks.forEach((week, weekIndex) => {
      const firstValidDay = week.find(d => d !== null)
      if (firstValidDay) {
          const date = new Date(firstValidDay.date)
          const month = date.getMonth()
          if (month !== lastMonth) {
              monthLabels.push({ month: MONTHS[month], position: weekIndex })
              lastMonth = month
          }
      }
  })

  if (loading) {
    return (
      <div className="w-full flex flex-col xl:flex-row gap-8 animate-pulse">
        {/* Skeleton Column 1: Header + Grid */}
        <div className="flex-1 min-w-0">
          {/* Header Skeleton */}
          <div className="mb-8 space-y-2">
             <div className="h-8 w-64 bg-muted/20 rounded" />
          </div>

          {/* Grid Skeleton */}
          <div className="overflow-x-auto scrollbar-hide pb-2">
            <div className="min-w-max">
                {/* Month Labels Skeleton */}
                <div className="flex mb-3">
                  <div className="w-8 shrink-0" />
                  <div className="flex gap-12">
                     {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-4 w-6 bg-muted/20 rounded" />
                     ))}
                  </div>
                </div>

                <div className="flex gap-2">
                    {/* Weekday Labels Skeleton */}
                    <div className="flex flex-col gap-[4px] py-[2px] w-8 pt-[14px]">
                        <div className="h-[10px] w-6 bg-muted/20 rounded" />
                        <div className="h-[10px]" />
                        <div className="h-[10px] w-6 bg-muted/20 rounded" />
                        <div className="h-[10px]" />
                        <div className="h-[10px] w-6 bg-muted/20 rounded" />
                    </div>
                    
                    {/* Grid Cells Skeleton */}
                    <div className="flex gap-[4px]">
                        {[...Array(53)].map((_, colIndex) => (
                            <div key={colIndex} className="flex flex-col gap-[4px]">
                                {[...Array(7)].map((_, rowIndex) => (
                                    <div key={rowIndex} className="w-[10px] h-[10px] bg-muted/10 rounded-[2px]" />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Skeleton Column 2: Buttons */}
        <div className="flex xl:flex-col flex-row flex-wrap gap-2 xl:w-32 shrink-0 content-start">
            <div className="h-9 w-full bg-muted/20 rounded-lg" />
            <div className="h-9 w-full bg-muted/20 rounded-lg" />
            <div className="h-9 w-full bg-muted/20 rounded-lg" />
            <div className="h-9 w-full bg-muted/20 rounded-lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col xl:flex-row gap-8">
        {/* Column 1: Header + Grid */}
        <div className="flex-1 min-w-0">
             {/* Header */}
             <div className="mb-8">
                 <div className="text-xl sm:text-2xl font-light tracking-tight text-foreground">
                    {totalContributions.toLocaleString()} contributions {yearLabel}
                 </div>
             </div>

            {/* Grid */}
            <div className="overflow-x-auto scrollbar-hide pb-2 relative z-0">
                <div className="min-w-max">
                        {/* Month Labels */}
                        <div className="flex mb-3 text-xs font-medium text-muted-foreground/60 select-none">
                        <div className="w-8 shrink-0" />
                        <div className="relative flex h-4">
                            {monthLabels.map((label, i) => (
                                    <span key={i} className="absolute" style={{ left: `${label.position * 14}px` }}>
                                    {label.month}
                                    </span>
                            ))}
                        </div>
                        </div>

                        <div className="flex gap-2">
                            {/* Weekday Labels */}
                            <div className="flex flex-col gap-[4px] py-[2px] text-[10px] font-medium text-muted-foreground/50 w-8 select-none pt-[14px] ">
                                {/* 
                                    Grid Pitch is 10px (cell) + 4px (gap) = 14px.
                                    We align with rows 1 (Mon), 3 (Wed), 5 (Fri).
                                */}
                                {/* Mon */}
                                <div className="h-[10px] flex items-center">Mon</div>
                                
                                {/* Tue (gap) */}
                                <div className="h-[10px]" />
                                
                                {/* Wed */}
                                <div className="h-[10px] flex items-center">Wed</div>
                                
                                {/* Thu (gap) */}
                                <div className="h-[10px]" />
                                
                                {/* Fri */}
                                <div className="h-[10px] flex items-center">Fri</div>
                            </div>
                            
                            {/* Grid */}
                            <div className="flex gap-[4px]">
                                {weeks.map((week, weekIndex) => (
                                    <div key={weekIndex} className="flex flex-col gap-[4px]">
                                        {week.map((day, dayIndex) => (
                                            day ? (
                                                <div
                                                key={day.date}
                                                className={cn(
                                                    "w-[10px] h-[10px] rounded-[2px] transition-all duration-200",
                                                    getLevelColor(day.level),
                                                    "hover:ring-2 hover:ring-foreground/50 hover:z-20 hover:scale-125 cursor-crosshair"
                                                )}
                                                onMouseEnter={(e) => {
                                                    setHoveredDay({
                                                        day,
                                                        x: e.clientX,
                                                        y: e.clientY
                                                    })
                                                }}
                                                onMouseLeave={() => setHoveredDay(null)}
                                                />
                                            ) : (
                                                <div key={`empty-${weekIndex}-${dayIndex}`} className="w-[10px] h-[10px]" />
                                            )
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-6 flex items-center gap-2 text-[10px] text-muted-foreground select-none ml-10">
                        <span>Less</span>
                        <div className="flex gap-1">
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-secondary" />
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-primary/20" />
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-primary/40" />
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-primary/70" />
                            <div className="w-[10px] h-[10px] rounded-[2px] bg-primary" />
                        </div>
                        <span>More</span>
                        </div>
                </div>
            </div>
        </div>

        {/* Column 2: Vertical Button Stack */}
        <div className="flex xl:flex-col flex-row flex-wrap gap-2 xl:w-32 shrink-0 content-start">
             {/* 1. Last Year Button */}
             <button
                onClick={() => {
                    setSelectedYear("lastYear")
                    setShowDropdown(false)
                }}
                className={cn(
                    "px-4 py-2 text-sm text-left rounded-lg transition-all duration-200 border w-full",
                    selectedYear === "lastYear"
                        ? "bg-primary text-primary-foreground border-primary font-medium shadow-md" 
                        : "bg-transparent text-muted-foreground border-transparent hover:bg-muted/50 hover:text-foreground"
                )}
             >
                Last Year
             </button>

             {/* 2. Explicit Years (First 3) */}
             {years.slice(0, 3).map(year => (
                 <button
                    key={year}
                    onClick={() => {
                        setSelectedYear(year)
                        setShowDropdown(false)
                    }}
                    className={cn(
                        "px-4 py-2 text-sm text-left rounded-lg transition-all duration-200 w-full",
                         selectedYear === year
                            ? "bg-muted text-foreground font-medium" 
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                 >
                    {year}
                 </button>
             ))}

             {/* 3. "More" Dropdown for Older Years */}
             {years.length > 3 && (
                 <div className="relative w-full">
                     <button 
                        onClick={() => setShowDropdown(!showDropdown)}
                        className={cn(
                             "flex items-center justify-between px-4 py-2 w-full rounded-lg transition-all duration-200 text-sm",
                             showDropdown || (selectedYear !== "lastYear" && !years.slice(0, 3).includes(selectedYear as number))
                                ? "text-foreground font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                     >
                        <span>More</span>
                        <ChevronDown className={cn("w-3 h-3 transition-transform", showDropdown ? "rotate-180" : "")} />
                     </button>

                     {/* Dropdown Menu */}
                     {showDropdown && (
                         <div className="absolute left-0 top-full mt-2 xl:left-full xl:top-auto xl:bottom-0 xl:mt-0 xl:ml-2 w-32 bg-popover border border-border rounded-lg shadow-xl z-50 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100">
                             {years.slice(3).map((year) => (
                                 <button
                                     key={year}
                                     onClick={() => {
                                         setSelectedYear(year)
                                         setShowDropdown(false)
                                     }}
                                     className={cn(
                                         "w-full text-left px-4 py-2 text-sm transition-colors",
                                         selectedYear === year 
                                            ? "bg-accent text-accent-foreground font-medium" 
                                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                     )}
                                 >
                                     {year}
                                 </button>
                             ))}
                         </div>
                     )}
                 </div>
             )}
        </div>

        {/* Global Tooltip */}
        {hoveredDay && typeof document !== 'undefined' && createPortal(
            <div 
                className="fixed pointer-events-none z-[100] px-3 py-2 bg-popover border border-border text-popover-foreground text-xs rounded-lg shadow-xl font-medium transition-opacity duration-75"
                style={{ 
                    // Position slightly above the cursor
                    left: hoveredDay.x, 
                    top: hoveredDay.y - 12, 
                    transform: 'translate(-50%, -100%)' 
                }}
            >
                <div className="flex items-center gap-2 whitespace-nowrap">
                        <span className="text-muted-foreground font-normal">{new Date(hoveredDay.day.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="mt-0.5 text-sm font-semibold whitespace-nowrap">
                    {hoveredDay.day.count} contributions
                </div>
            </div>,
            document.body
        )}
    </div>
  )
}
