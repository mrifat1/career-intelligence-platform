# ResourceHub - Bangla Programming Resource Hub

ResourceHub is a curated platform for the Bangladeshi developer community to find high-quality, free programming resources in Bangla.

## Landing Page Structure

The ResourceHub landing page is divided into two primary sections to help users navigate their learning journey:

### 1. Explore Resources (Carousel)
- **Purpose**: Focuses on **Foundations**. This is where you'll find general computer science topics that apply across all career paths.
- **Topics**: Algorithms, Data Structures, Graph Theory, Competitive Programming, OOP, and Software Engineering.
- **Logic**: These are "featured" topics that provide the building blocks of a developer's career.

### 2. Tech Sectors (Grid)
- **Purpose**: Focuses on **Specialized Career Paths**. This section helps you dive deep into specific platforms and industries.
- **Sectors**: Web Development, Backend Development, Mobile Development, AI & Machine Learning.
- **Stacks**: Each sector contains specific "Tech Stacks" (e.g., React, Node.js, Flutter) which are clickable and link directly to relevant resources.

## 🚀 Vision
To empower Bangla-speaking developers with a high-fidelity, resource-first platform that provides clear learning paths from computer science fundamentals to modern software engineering best practices.

## 🏗 Project Structure
This monorepo is managed by **Turbo** and uses **pnpm**.

```
.
├── apps/
│   ├── web/                # Next.js frontend (Tailwind CSS, Lucide Icons)
│   └── backend/            # NestJS backend API (Port 3001)
├── packages/
│   ├── database/           # Prisma schema & shared DB client
│   ├── ui/                 # Shared React component library
│   ├── eslint-config/      # Shared linting rules
│   └── typescript-config/  # Shared TS configurations
```

## 🛠 Tech Stack
- **Frontend**: Next.js 14+ (App Router)
- **Backend**: NestJS
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Icons**: Lucide React
- **Styling**: Tailwind CSS

## 🏎 Developer Workflow

### Prerequisites
- Node.js (v18+)
- pnpm

### Setup & Run
1. **Install dependencies**:
   ```bash
   pnpm install
   ```
2. **Environment Variables**:
   Update `packages/database/.env` with your `DATABASE_URL`.
3. **Database Initialization**:
   ```bash
   pnpm --filter @repo/database db:push
   pnpm --filter @repo/database db:seed
   ```
4. **Start Development**:
   ```bash
   pnpm dev
   ```

## 📊 Data & Taxonomy
- **Hierarchy**: English categories (Sectors -> Topics).
- **Resources**: Multilingual support (primarily Bangla) with metadata like difficulty, author, and resource type (Video, Blog, Book, etc.).
- **Seeding**: Managed via `packages/database/prisma/seed.ts`. Full resource lists are populated here.

---
*Created with ❤️ by the ResourceHub Team*
