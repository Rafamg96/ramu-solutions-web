# Use the official Node.js 20 image as base
FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# Install additional tools for Next.js development
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        git \
        curl \
        wget \
        vim \
        nano \
        unzip \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Install global npm packages for Next.js development
RUN npm install -g \
    @next/codemod \
    create-next-app \
    vercel \
    typescript \
    ts-node

# Create a non-root user
ARG USERNAME=node
USER $USERNAME

# Set working directory
WORKDIR /workspaces

# Install pnpm (alternative package manager)
RUN npm install -g pnpm

# Configure git (these will be overridden by the actual git config)
RUN git config --global init.defaultBranch main