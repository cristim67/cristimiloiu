# Cristi Miloiu - Personal Portfolio

This repository contains the source code for my personal portfolio website and my resume (CV).

## 🚀 Tech Stack

### Frontend (Client)
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** `tailwindcss-animate`, `tw-animate-css`

### Resume (CV)
- **Format:** LaTeX
- **Compiler:** `pdflatex`

## 📂 Project Structure

```bash
.
├── client/          # Next.js Application
│   ├── app/         # App Router pages and layouts
│   ├── components/  # Reusable UI components
│   └── public/      # Static assets
└── cv/              # Resume Source
    └── resume.tex   # LaTeX source file
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm

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

## 📄 Building the Resume

To compile the resume, you need a LaTeX distribution installed (e.g., TeX Live, MacTeX).

```bash
cd cv
pdflatex resume.tex
```