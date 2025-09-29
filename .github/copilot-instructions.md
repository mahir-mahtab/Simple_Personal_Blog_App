# AI Coding Agent Instructions

## Project Overview
This is a markdown-based personal blog built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Radix UI** components. The architecture follows Next.js App Router conventions with server-side rendering for blog posts stored as markdown files.

## Architecture & Data Flow

### Content Pipeline
- **Source**: Markdown files in `content/posts/` with frontmatter (title, date, excerpt)
- **Processing**: `lib/posts.ts` uses `gray-matter` to parse frontmatter, `remark` → `remark-rehype` → `rehype-highlight` → HTML
- **Rendering**: HTML injected via `dangerouslySetInnerHTML` with `.markdown-content` styling in `app/globals.css`

### Routing Structure
- `/` → `app/page.tsx` - Home page lists all posts via `getAllPosts()`
- `/blog/[id]` → `app/blog/[id]/page.tsx` - Dynamic post pages using `getPostById(id)`
- **Next.js 15 Requirement**: Dynamic params MUST be awaited (`const { id } = await params`)

### Component Hierarchy
```
layout.tsx (global wrapper with Navbar, Footer, ParticleEffect)
  ├── page.tsx (home) → BlogList component
  └── blog/[id]/page.tsx (post detail)
```

## Critical Patterns & Conventions

### Styling System
- **Base**: Tailwind CSS v4.1 with custom CSS variables in `@theme inline` block
- **Typography**: Uses `Cormorant_Garamond` font from `next/font/google` applied at layout level
- **Markdown Content**: All styling via `.markdown-content` class in `globals.css` (lines 166-242) - includes custom h1-h4, code blocks, lists, tables, blockquotes
- **Code Highlighting**: Custom inline GitHub-inspired syntax highlighting in `globals.css` - DO NOT import external CSS from node_modules
- **Design Philosophy**: Minimal, light gray palette (gray-50 to gray-900), subtle hover transitions (duration-200/300)

### UI Components
- **Location**: `components/ui/` contains shadcn/ui components (avatar, button, dropdown-menu, etc.)
- **Utility**: Use `cn()` helper from `lib/utils.ts` for conditional class merging (clsx + tailwind-merge)
- **Icons**: Lucide React (`lucide-react` package)

### Blog Post Requirements
When adding new posts to `content/posts/`:
```markdown
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Brief description for listing page"
---
# Markdown content starts here
```

## Development Workflow

### Commands
- **Dev Server**: `npm run dev` (uses Turbopack via `--turbopack` flag)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (ESLint disabled during builds in `next.config.ts`)

### Key Dependencies
- **Markdown Processing**: `gray-matter`, `remark`, `remark-rehype`, `rehype-highlight`, `rehype-stringify`
- **UI**: `@radix-ui/*` primitives, `lucide-react` icons
- **Styling**: `tailwindcss`, `@tailwindcss/typography`, `tw-animate-css`

## Modification Guidelines

### Adding New Features
1. **New Routes**: Create in `app/` following App Router conventions
2. **Reusable Components**: Place in `components/`, UI primitives in `components/ui/`
3. **Utilities**: Add to `lib/` (e.g., `lib/posts.ts` for content, `lib/utils.ts` for helpers)

### Styling New Content
- Apply `.markdown-content` class to any rendered markdown HTML
- Use Tailwind utilities; avoid custom CSS unless defining new markdown element styles
- Maintain light gray color scheme (gray-50 for backgrounds, gray-900 for text)
- **Never import CSS from node_modules** - use inline styles in `globals.css` to avoid bundle bloat and resolution issues

### Footer/Author Info
- Update `components/Footer.tsx` for author details and social links
- Current author: Mahir Mahtab (GitHub: mahirmahtab)

## Common Gotchas

1. **Next.js 15 Async Params**: Always `await params` in dynamic routes (e.g., `const { id } = await params`)
2. **Markdown Styling**: Don't style markdown elements directly - extend `.markdown-content` rules in `globals.css`
3. **Build Tool**: Uses Turbopack in dev mode - some plugins may not work identically to Webpack
4. **ESLint**: Disabled during builds (`ignoreDuringBuilds: true`) - check manually with `npm run lint`
5. **Font Loading**: Global font applied in `layout.tsx` - avoid duplicate font imports

## File Path Aliases
- `@/` → Root directory (configured in `tsconfig.json`)
- Example: `import { getAllPosts } from "@/lib/posts"`

## Testing & Validation
- Verify markdown rendering: Check `.markdown-content` styles apply correctly
- Test responsive: BlogList and Footer adapt to mobile (sm: breakpoint)
- Date formatting: Uses `toLocaleDateString('en-US')` in post detail pages
