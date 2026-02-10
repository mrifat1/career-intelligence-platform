# Project Structure

This monorepo is managed by [Turbo](https://turbo.build/repo) and uses [pnpm](https://pnpm.io/) as the package manager. It is organized into `apps` and `packages`.

## Directory Overview

```
.
├── apps/                   # Application source code
│   ├── web/                # Next.js frontend application
│   └── backend/            # NestJS backend application
│
├── packages/               # Shared packages and configurations
│   ├── ui/                 # Shared React UI component library
│   ├── database/           # Shared database schema and client (Prisma)
│   ├── eslint-config/      # Shared ESLint configurations
│   └── typescript-config/  # Shared TypeScript configurations
│
├── turbo.json              # Turbo build pipeline configuration
├── package.json            # Root package.json (scripts, dependencies)
├── pnpm-workspace.yaml     # pnpm workspace configuration
└── README.md               # Project documentation
```

## Apps

### `apps/web`
- **Framework**: [Next.js](https://nextjs.org/)
- **Description**: The main web frontend for the Career Intelligence Platform.
- **Port**: Typically runs on port `3000`.

### `apps/backend`
- **Framework**: [NestJS](https://nestjs.com/)
- **Description**: The backend API service handling business logic and data persistence.
- **Port**: Typically runs on port `3001` or checks environment variables.

## Packages

### `packages/ui`
- A shared UI library containing reusable React components.
- Used by `apps/web` to ensure design consistency.

### `packages/database`
- Contains the database schema (likely Prisma) and the database client.
- Shared across backend and other services that need direct database access.

### `packages/eslint-config`
- Shared ESLint configuration to enforce code style across the entire monorepo.

### `packages/typescript-config`
- Shared `tsconfig` files (`base.json`, `nextjs.json`, `nestjs.json`, etc.) to standardize TypeScript settings.
