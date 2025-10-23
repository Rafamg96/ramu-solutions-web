# DevContainer for Next.js Development

This devcontainer provides a complete development environment for Next.js applications with TypeScript, Tailwind CSS, and ESLint support.

## Features

- **Node.js 20**: Latest LTS version
- **Package Managers**: npm, pnpm, and yarn support
- **TypeScript**: Full TypeScript support with IntelliSense
- **Next.js Tools**: Includes create-next-app, @next/codemod, and Vercel CLI
- **VS Code Extensions**: Pre-configured with essential extensions for React/Next.js development
- **Port Forwarding**: Automatic forwarding of development ports (3000, 3001)
- **Git Integration**: GitHub CLI and Git configuration

## Included Extensions

- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- Prettier Code Formatter
- ESLint
- Auto Rename Tag
- Path Intellisense
- CSS Peek
- HTML Language Features

## Getting Started

1. Open this repository in VS Code
2. When prompted, select "Reopen in Container"
3. Wait for the container to build and initialize
4. The post-creation script will run automatically

## Creating a New Next.js App

If you don't have a Next.js app yet, run:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias '@/*'
```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Port Information

- **3000**: Main Next.js application
- **3001**: Additional development server (if needed)

## Optional Services

The `docker-compose.yml` includes commented-out configurations for:
- PostgreSQL database
- Redis cache

Uncomment these services if your project requires them.

## Customization

You can customize this devcontainer by:

1. Modifying the `devcontainer.json` file
2. Adding more VS Code extensions
3. Installing additional tools in the `Dockerfile`
4. Updating the `post-create.sh` script