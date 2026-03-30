# ezhou.dev

Personal website and portfolio for Eric Zhou. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Minimalist dark design** - Typography-focused with generous whitespace
- **Responsive mobile-first** - Works beautifully on all device sizes
- **Fast and performant** - Static generation, optimized for Core Web Vitals
- **MDX blog** - Write blog posts in Markdown with React components
- **Project showcase** - Portfolio of completed projects with full details
- **Smooth animations** - Framer Motion animations triggered on scroll
- **Monochrome aesthetic** - Pure black, white, and gray color scheme

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX with gray-matter for frontmatter
- **Icons**: Lucide React
- **Font**: Inter from Google Fonts

## Project Structure

```
ezhou-dev/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── projects/          # Projects page
│   ├── lab/               # Lab page
│   ├── blog/              # Blog pages
│   └── about/             # About page
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── BlogCard.tsx
│   ├── LabCard.tsx
│   └── AnimatedSection.tsx
├── lib/                   # Utilities and data
│   ├── projects.ts
│   ├── lab.ts
│   └── blog.ts
├── content/               # MDX content
│   └── blog/             # Blog posts
├── public/               # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## Writing Blog Posts

Blog posts are stored in `/content/blog/` as MDX files. Each post needs frontmatter:

```mdx
---
title: Your Post Title
date: 2024-03-15
excerpt: A brief excerpt shown in the blog listing
tags: [tag1, tag2]
---

# Your content here

Write your post in Markdown with support for MDX components.
```

## Customization

### Colors

Edit color values in:
- `app/globals.css` - CSS variables and color definitions
- `tailwind.config.ts` - Tailwind theme extensions

### Typography

- Font family is set in `tailwind.config.ts` (currently Inter)
- Modify font sizes in Tailwind config or inline with Tailwind classes

### Projects and Lab Items

Edit the data sources in:
- `lib/projects.ts` - Project data
- `lib/lab.ts` - Lab experiment data

## Deployment

This site is ready to deploy on:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect repository and deploy
- **Any Node.js host**: `npm run build && npm run start`

## License

This project is open source and available under the MIT License.

## Author

Eric Zhou - [ezhou.dev](https://ezhou.dev)
