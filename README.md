<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Backend API for Hons Cafe, built with <a href="https://nestjs.com" target="_blank">NestJS</a> and <a href="https://www.prisma.io" target="_blank">Prisma</a>.</p>

## Stack

- [NestJS](https://nestjs.com) 11 (Express platform)
- [Prisma](https://www.prisma.io) 7 ORM, using the new `prisma-client` generator with the `@prisma/adapter-pg` driver adapter
- PostgreSQL 16 (via Docker Compose)

## Project status

Schema has `Category`, `MenuItem`, and `Staff` models with an initial migration applied, plus a seed script for demo menu data. There's no API beyond the default Nest starter yet — the menu endpoints and staff auth are still to come.

## Prerequisites

- Node.js
- Docker (for the local Postgres database)

## Getting started

Run these steps in order for a fresh checkout:

1. **Install dependencies**

   ```bash
   npm install
   ```

   This also runs `prisma generate` automatically (via `postinstall`), which writes the generated Prisma Client to `generated/prisma`. That folder is gitignored, so re-run `npx prisma generate` manually any time you pull schema changes without reinstalling.

2. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   The defaults match `docker-compose.yml`. Edit `.env` if you want different credentials.

3. **Start the database**

   ```bash
   docker compose up -d
   ```

   This starts a Postgres 16 container (`db` service) on port `5432` with the database/user/password from `.env`.

4. **Apply the database schema**

   ```bash
   npx prisma migrate dev
   ```

   Applies any pending migrations in `prisma/migrations`.

5. **Seed demo data (optional)**

   ```bash
   npx prisma db seed
   ```

   Upserts the categories and menu items defined in `prisma/seed-data.ts`, so it's safe to run more than once.

6. **Run the app**

   ```bash
   # development (watch mode)
   npm run start:dev

   # standard run
   npm run start

   # production mode (after `npm run build`)
   npm run start:prod
   ```

   The server listens on `http://localhost:3000` by default (override with `PORT`).

## Other useful commands

```bash
# open Prisma Studio to inspect the database
npx prisma studio

# regenerate the Prisma Client after editing schema.prisma
npx prisma generate

# create a new migration after editing schema.prisma
npx prisma migrate dev --name <description>

# lint
npm run lint

# format
npm run format
```

## Tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Stopping the database

```bash
docker compose down
```

Add `-v` to also remove the `pgdata` volume and wipe local data.
