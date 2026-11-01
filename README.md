# Cristi Miloiu - Personal Portfolio

This repository contains the source code for my personal portfolio website and my resume (CV).

## 🚀 Tech Stack

### Frontend (Client)
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/), `tw-animate-css`
- **Icons:** [Lucide React](https://lucide.dev/), plus local GitHub/LinkedIn icons in `components/brand-icons.tsx`
- **Theming:** `next-themes`
- **Agent readiness:** `llms.txt`, `llms-full.txt`, a Markdown homepage (`Accept: text/markdown`), and JSON-LD

### Resume (CV)
- **Format:** LaTeX
- **Compiler:** `pdflatex` or [Tectonic](https://tectonic-typesetting.github.io/)

## 📂 Project Structure

```bash
.
├── client/              # Next.js application
│   ├── app/             # App Router pages, layouts, llms.txt and OG image routes
│   ├── components/      # Reusable components
│   ├── lib/site.ts      # Shared profile data for llms.txt, Markdown and JSON-LD
│   ├── proxy.ts         # Serves Markdown to agents that ask for it
│   └── public/          # Static assets, including the CV PDF
└── cv/                  # Resume source
    └── resume.tex       # LaTeX source file
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 22+
- npm

### Running the Website Locally

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

When you change the homepage content, update `client/lib/site.ts` too, so `llms.txt` and the Markdown homepage stay in sync.

## 📄 Building the Resume

You need either a LaTeX distribution (e.g., TeX Live, MacTeX) or Tectonic (`brew install tectonic`).

```bash
cd cv
pdflatex resume.tex   # or: tectonic resume.tex
cp resume.pdf ../client/public/CV_Miloiu_Cristi_en.pdf
```
