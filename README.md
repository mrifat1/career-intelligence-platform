# Career Intelligence Platform

A scalable monorepo for the Career Intelligence Platform, built with Next.js, NestJS, and Turbo.

## Technologies

- **Monorepo Management**: [Turbo](https://turbo.build/repo)
- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [NestJS](https://nestjs.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Project requires Node v18+)
- [pnpm](https://pnpm.io/installation)

## Getting Started

1.  **Install dependencies**:

    ```bash
    pnpm install
    ```

2.  **Start the development server**:

    This command starts all applications (`web` and `backend`) in parallel.

    ```bash
    pnpm dev
    ```

    - Web App: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:3001](http://localhost:3001) (check console output for exact port)

## Build

To build all apps and packages:

```bash
pnpm build
```

## Workflow

- **Frontend**: Located in `apps/web`. Run `pnpm dev --filter=web` to run only the frontend.
- **Backend**: Located in `apps/backend`. Run `pnpm dev --filter=backend` to run only the backend.
- **Shared Packages**: Located in `packages/`. Changes in shared packages are automatically reflected in apps.

## creating new packages

To create a new package, simply add a folder in `packages/` and initialize a `package.json`. Then run `pnpm install` again.

## Project Structure

For a detailed breakdown of the project structure, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).
