#!/bin/bash

# Post-create setup script for Next.js development environment

echo "🚀 Setting up Next.js development environment..."

# Update npm to latest version
npm install -g npm@latest

# Check if package.json exists, if not, initialize a Next.js project
if [ ! -f "package.json" ]; then
    echo "📦 No package.json found. Would you like to create a new Next.js app?"
    echo "Run: npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias '@/*'"
else
    echo "📦 Installing dependencies..."
    npm install
fi

# Install additional development tools
echo "🔧 Installing additional development tools..."
npm install -g @types/node

echo "✅ Setup complete! Your Next.js development environment is ready."
echo ""
echo "📚 Quick commands:"
echo "  - npm run dev     : Start development server"
echo "  - npm run build   : Build for production"
echo "  - npm run start   : Start production server"
echo "  - npm run lint    : Run ESLint"
echo ""
echo "🌐 Development server will be available at: http://localhost:3000"