# Development Guide - ResourceHub

Welcome to the **Career Intelligence Platform (ResourceHub)**. This document provides a high-level overview of the project's architecture, technologies, and development workflows.

## 🚀 Project Vision
ResourceHub is a curated platform for high-quality Bangla programming resources. It categorizes tutorials, blogs, videos, and books into a structured learning path for developers at all stages.

## 🛠 Tech Stack
- **Monorepo**: [Turbo](https://turbo.build/repo)
- **Frontend**: [Next.js](https://nextjs.org/) (App Router, Tailwind CSS, Lucide Icons)
- **Backend**: [NestJS](https://nestjs.com/) (Modular architecture, Prisma Integration)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📂 Project Structure
```
.
├── apps/
│   ├── web/                # Next.js frontend
│   └── backend/            # NestJS backend API
├── packages/
│   ├── database/           # Prisma schema and shared DB client
│   ├── ui/                 # Shared React components (Tailwind-based)
│   ├── eslint-config/      # Shared linting rules
│   └── typescript-config/  # Shared TS configurations
```

## 🏎 Getting Started

### 1. Installation
```bash
pnpm install
```

### 2. Database Setup
Ensure you have a PostgreSQL instance running and update the `.env` file in `packages/database`.

```bash
# Push schema and generate client
pnpm --filter @repo/database db:push

# Seed the database with resources
pnpm --filter @repo/database db:seed
```

### 3. Run Development
```bash
pnpm dev
```
- **Web**: http://localhost:3000
- **API**: http://localhost:3001

## Content Architecture

### 1. Foundations vs. Tech Sectors
We distinguish between foundational learning and specialized career paths:

- **Foundations**: General topics like Algorithms, Data Structures, and Software Engineering. These are featured in the landing page carousel.
- **Tech Sectors**: Practical domains like Web/App/AI. These are displayed in the Tech Sector Grid, with children categories serving as "Tech Stacks".

### 2. Taxonomy Hierarchy
The taxonomy is structured as a 2-level hierarchy:
- **Parent Category**: A "Sector" (e.g., Web Development).
- **Child Category**: A "Stack" or "Topic" (e.g., React, Algorithms).

Resources are connected to these child categories.

## 📊 Data Model & Taxonomy

### Taxonomy Hierarchy
We use a 2-level hierarchical category system defined in `seed.ts`:
1. **Sectors (Parent)**: Algorithms & DS, Software Engineering, Modern Development, Career & Guidance.
2. **Topics (Children)**: Basic, Linked List, OOP, React, Machine Learning, etc.

### Resource Types
- `VIDEO_SERIES`: YouTube playlists or video courses.
- `BLOG_POST`: Technical articles (e.g., Shafaet's Planet).
- `BOOK`: Physical or online books (e.g., CPBook, JS Zonayed).
- `INTERACTIVE_COURSE`: Learning platforms like How-to-code.
- `GITHUB_REPO`: Open source projects or curated lists.

## 🤝 Contribution Guidelines
To add new resources:
1. Update `packages/database/prisma/seed.ts` with the new resource metadata.
2. Ensure the `topics` slugs match existing entries in the `taxonomy` array.
3. Run `pnpm --filter @repo/database db:seed` to update your local DB.
4. Submit a Pull Request.

---
*Maintained by the ResourceHub Team*
