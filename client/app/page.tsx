"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { GitHubContributions } from "@/components/github-contributions"
import { Github, ArrowUpRight, Linkedin, Globe, Mail, Phone, FileText } from "lucide-react"
import { useTheme } from "next-themes"

interface Job {
  year: string
  role: string
  company: string
  description: string
  tech: string[]
  link?: string
}

interface Project {
  year: string
  title: string
  description: string
  tech: string[]
  link?: string
}

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [totalContributions, setTotalContributions] = useState(0)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    setMounted(true)
    
    async function fetchContributions() {
      try {
        const response = await fetch("https://github-contributions-api.jogruber.de/v4/cristim67?y=last")
        const data = await response.json()
        
        // Sum contributions for the last year
        const total = data.contributions.reduce((acc: number, curr: any) => acc + curr.count, 0)
        
        // Round to nearest 500
        const roundedTotal = Math.round(total / 500) * 500
        setTotalContributions(roundedTotal)
      } catch (error) {
        console.error("Failed to fetch contribution count:", error)
      }
    }
    
    fetchContributions()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const jobs: Job[] = [
    {
      year: "Sept 2023 — Present",
      role: "Software Engineer",
      company: "Genezio",
      description: "Core member of the team that secured a €2M pre-seed round. Owner & Maintainer of the backend and agents codebase (5000+ contributions). Architected the RBAC system, simulation engine, and metrics infrastructure. Engineered Red/Blue Team Agents and led mentorship.",
      link: "/work/genezio",
      tech: ["Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "React", "AWS", "Langfuse", "Docker"],
    },
    {
      year: "June 2023 — Aug 2023",
      role: "Full Stack Intern",
      company: "Genezio",
      description: "Enabled CLI deployment for Lambda/FastAPI and migrated Next.js deployment to native solution. Designed RAG system using OpenAI & LangChain integrated into a Discord bot with automated CI/CD.",
      link: "/work/genezio-intern",
      tech: ["Python", "LangChain", "OpenAI API", "Next.js", "FastAPI", "CircleCI"],
    },
    {
      year: "Oct 2022 — July 2024",
      role: "Technical Coordinator",
      company: "League of Electronics Students",
      description: "Managed the IT Department (50+ members). Delivered key web applications serving 1000+ users, including the organization website and charitable platforms.",
      link: "/work/lse",
      tech: ["JavaScript", "TypeScript", "React", "Node.js", "GitHub", "Tailwind CSS", "PostgreSQL"],
    },
    {
      year: "July 2022 — Sept 2022",
      role: "System Engineering Intern",
      company: "Huawei Enterprise GSC",
      description: "Worked with enterprise storage protocols (SAN/NAS, RAID) and Linux server administration.",
      link: "/work/huawei",
      tech: ["Linux", "SAN/NAS", "RAID", "Server Admin"],
    },
  ]

  const projects: Project[] = [
    {
      year: "May 2024",
      title: "Bachelor Project - AI Agent System",
      description: "Built a multi-agent system using Google Gemini to generate REST/GraphQL APIs. Architected backend with FastAPI, MongoDB, and SSE.",
      tech: ["Python", "FastAPI", "React", "MongoDB", "Gemini", "AWS", "Docker"],
      link: "/projects/bachelor-project"
    },
    {
      year: "Oct 2024",
      title: "Personal Portfolio Website",
      description: "Developed a modern, high-performance portfolio website using Next.js and Tailwind CSS. Optimized for speed and security on Vercel.",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel", "Cloudflare"],
      link: "/projects/portfolio"
    },
    {
      year: "Jan 2024",
      title: "Audio Analysis Platform",
      description: "Engineered a hardware system integrating ESP32 and Microphone for real-time audio processing (FFT) and visualization via WebSockets.",
      tech: ["ESP32", "FastAPI", "React", "WebSocket", "Signal Processing"],
      link: "/projects/audio-analysis"
    },
    {
      year: "Jan 2024",
      title: "Facial Emotion Recognition",
      description: "Built a high-performance FER system using Vision Transformers (ViT) fine-tuned on a custom dataset with advanced optimization techniques.",
      tech: ["Python", "PyTorch", "ViT", "Streamlit", "Docker"],
      link: "/projects/facial-emotion-recognition"
    },
    {
      year: "Dec 2023",
      title: "Comparative Modeling Environments",
      description: "Simulated fire propagation using Cellular Automata to benchmark High Performance Computing (HPC) approaches.",
      tech: ["Rust", "Go", "C++", "Python", "Rayon", "OpenMP"],
      link: "/projects/comparative-modeling"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 dark:bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 dark:bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "github", "work", "projects", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / {new Date().getFullYear()}</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Miloiu
                  <br />
                  <span className="text-muted-foreground">Cristi</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-lg">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Software Engineer specialized in <span className="text-foreground">AI Agents</span> and <span className="text-foreground">Cloud Architecture</span>, backed by a strong <span className="text-foreground">Full Stack</span> foundation.
                  Shipped over {totalContributions > 0 ? totalContributions.toLocaleString() : ""} contributions last year.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for opportunities
                  </div>
                  <div className="hidden sm:block text-border">|</div>
                  <div>Bucharest, Romania</div>
                  <div className="hidden sm:block text-border">|</div>
                  <Link
                    href="/CV_Miloiu_Cristi_en.pdf"
                    target="_blank"
                    className="flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors duration-200 group"
                  >
                    Resume
                    <svg
                      className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Software Engineer</div>
                  <div className="text-muted-foreground"> <a href="https://genezio.com/" target="_blank" rel="noopener noreferrer">@ Genezio</a></div>
                  <div className="text-xs text-muted-foreground">June 2023 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-muted-foreground/60 font-mono mb-2 uppercase tracking-wider">AI & Backend</div>
                  <div className="flex flex-wrap gap-2">
                    {["LLMs", "AI Agents", "RAG", "Langfuse", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-[10px] text-muted-foreground/60 font-mono mb-2 uppercase tracking-wider">Web & Cloud</div>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "React", "Next.js", "Tailwind CSS", "Docker", "AWS", "Grafana", "Cloudflare"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* <div className="text-[10px] text-muted-foreground/60 font-mono mb-2 uppercase tracking-wider">Dev Tools & Productivity</div>
                  <div className="flex flex-wrap gap-2">
                    {["Jira", "Confluence", "Slack", "GitHub", "Postman", "TablePlus", "Cursor"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="github"
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-8 sm:space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">GitHub Activity</h2>
              <Link
                href="https://github.com/cristim67"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-mono"
              >
                <Github className="w-4 h-4" />
                @cristim67
              </Link>
            </div>

            <div className="p-6 sm:p-8 border border-border rounded-lg">
              <GitHubContributions />
            </div>
          </div>
        </section>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">2022 — {new Date().getFullYear()}</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col gap-4 py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-medium text-foreground">{job.role}</h3>
                      <div className="text-sm text-muted-foreground font-mono mt-1">
                        {job.company} <span className="text-border mx-2">|</span> {job.year}
                      </div>
                    </div>
                    {job.link && (
                      <Link 
                        href={job.link}
                        className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link after:absolute after:inset-0"
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                  
                  <div className="text-muted-foreground leading-relaxed max-w-3xl">
                    {job.description}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-medium text-muted-foreground/80 bg-secondary/30 rounded-full border border-transparent group-hover:border-border transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {job.link && (
                    <Link 
                      href={job.link}
                      className="sm:hidden inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link mt-1 after:absolute after:inset-0"
                    >
                      Read Case Study
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
              <div className="text-sm text-muted-foreground font-mono">2023 — {new Date().getFullYear()}</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col gap-4 py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                      <div className="text-sm text-muted-foreground font-mono mt-1">
                        {project.year}
                      </div>
                    </div>
                    {project.link && (
                      <Link 
                        href={project.link}
                        className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link after:absolute after:inset-0"
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                  
                  <div className="text-muted-foreground leading-relaxed max-w-3xl">
                    {project.description}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-medium text-muted-foreground/80 bg-secondary/30 rounded-full border border-transparent group-hover:border-border transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                     <Link 
                       href={project.link}
                       className="sm:hidden inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link mt-1 after:absolute after:inset-0"
                     >
                       View Project
                       <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                     </Link>
                   )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[4] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Education & Awards</h2>

            <div className="grid gap-6 sm:gap-8">
              {[
                {
                  title: "M.Eng. in Information Systems Engineering",
                  excerpt: "National University of Science and Technology Politehnica Bucharest. Dissertation (WIP): Information Visibility in the Age of LLMs.",
                  date: "2025 - Present",
                  readTime: "UPB",
                  href: "/education/master"
                },
                {
                  title: "B.Sc. in Computer Science",
                  excerpt: "National University of Science and Technology Politehnica Bucharest. Bachelor Thesis: Automatic Generation of REST and GraphQL API Interfaces using LLMs.",
                  date: "2021 - 2025",
                  readTime: "UPB",
                  href: "/education/bachelor"
                },
                {
                  title: "3rd Place - Bachelor Thesis",
                  excerpt: "Awarded for the final implementation of the 'Automatic Generation of REST and GraphQL API Interfaces using LLMs' at the Scientific Communications Session.",
                  date: "May 2025",
                  readTime: "Award",
                  href: "/awards/bachelor-thesis"
                },
                {
                  title: "4th Place - API in Seconds",
                  excerpt: "Awarded for the initial prototype of the AI-driven backend generation platform at the Scientific Communications Session.",
                  date: "May 2024",
                  readTime: "Award",
                  href: "/awards/api-in-seconds"
                },
                {
                  title: "1st Place - Electron Hackathon",
                  excerpt: "Won first place at the Electron Hackathon (Electrify the Campus). Developed a Smart Campus parking solution using YOLOv5 and EasyOCR.",
                  date: "May 2023",
                  readTime: "Award",
                  href: "/awards/electron-hackathon"
                },
                {
                  title: "2nd Place - Scientific Communications",
                  excerpt: "Awarded for the project 'Number plate recognition'. Built a stolen car finding mobile app using YOLOv3 and color transformation algorithms.",
                  date: "May 2023",
                  readTime: "Award",
                  href: "/awards/scientific-communications-2023"
                },
              ].map((post, index) => (
                <Link
                  href={post.href || "#"}
                  key={index}
                  className="group block p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-medium group-hover:text-foreground transition-colors group-hover:underline decoration-1 underline-offset-4">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[5] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:miloiuc4@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">miloiuc4@gmail.com</span>
                    <Mail className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <div className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <span className="text-base sm:text-lg">0791423994</span>
                    <Phone className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@cristim67", url: "https://github.com/cristim67", icon: Github },
                  { name: "LinkedIn", handle: "Cristi Miloiu", url: "https://linkedin.com/in/cristi-miloiu-3a174a267/", icon: Linkedin },
                  { name: "Website", handle: "cristimiloiu.com", url: "https://www.cristimiloiu.com", icon: Globe },
                  { name: "Resume", handle: "View PDF", url: "/CV_Miloiu_Cristi_en.pdf", icon: FileText },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="p-2.5 bg-secondary/50 rounded-lg group-hover:bg-secondary transition-colors duration-300">
                      <social.icon className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Miloiu Cristi. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                  {mounted ? (theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )) : (
                    <div className="w-4 h-4" />
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
