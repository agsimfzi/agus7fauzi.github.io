FROM node:12-bullseye-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Development image, copy all the files and run gatsby
FROM base AS dev
RUN apt-get update && apt-get install -y curl --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .


# Production image, copy all the files and run next
FROM base AS runner
RUN apt-get update && apt-get install -y curl ca-certificates --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV GATSBY_TELEMETRY_DISABLED=1

# Set the correct permission for prerender cache
RUN mkdir -p .cache
RUN mkdir -p public
RUN chown -R node:node .cache
RUN chown -R node:node public

COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node . .
COPY docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

USER node

EXPOSE 9000

ENTRYPOINT ["/bin/sh", "/docker-entrypoint.sh"]
