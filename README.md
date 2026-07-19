<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Backend API for Hons Cafe, built with <a href="https://nestjs.com" target="_blank">NestJS</a> and <a href="https://www.prisma.io" target="_blank">Prisma</a>.</p>

## Stack

- [NestJS](https://nestjs.com) 11 (Express platform)
- [Prisma](https://www.prisma.io) 7 ORM
- PostgreSQL 16 (via Docker Compose)

## Project status

This is an early-stage scaffold: the default Nest starter module plus a Prisma setup pointed at a local Postgres container. The `prisma/schema.prisma` datasource is configured but has no models or migrations yet.

## Prerequisites

- Node.js
- Docker (for the local Postgres database)

## Getting started

Run these steps in order for a fresh checkout:

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the database**

   ```bash
   docker compose up -d
   ```

   This starts a Postgres 16 container (`db` service) on port `5432` with database `hons_cafe`, user `cafe`, password `cafe_dev_password`.

3. **Configure environment variables**

   Create a `.env` file in the project root with:

   ```bash
   DATABASE_URL="postgresql://cafe:cafe_dev_password@localhost:5432/hons_cafe"
   ```

   This must match the credentials in `docker-compose.yml`.

4. **Apply the database schema**

   ```bash
   npx prisma migrate dev
   ```

   (Once there are models in `prisma/schema.prisma`, this creates/applies migrations and generates the Prisma Client into `generated/prisma`.)

5. **Run the app**

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
