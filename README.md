<div align="center">
  <!-- Optional: remove this line if you don't want a logo in the README -->
  <img src="public/logo.png" width="96" alt="Site logo" />

  <h1>folio2k26</h1>

  <p>Personal portfolio site built with React + TypeScript + Vite.</p>

  <img src="public/screenshot.png" width="1000" alt="Site screenshot" />
</div>

## Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

## Overview

This repo contains a React single-page application (SPA) with a small API layer used to fetch live data (e.g. WakaTime stats and Spotify recently played).

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Node/Express (local API in development)
- Vercel Serverless Functions (API in production)

## Project Structure

- `src/` — main frontend app
  - `src/pages/` — route-level pages
  - `src/components/` — reusable UI components
  - `src/data/` — static content (projects/skills/experience/etc.)
- `api/` — Vercel serverless functions (deployed API)
- `server/` — local Express server for API during development
- `public/` — static assets (includes `logo.png` and `screenshot.png`)

## Getting Started

Quick start (two terminals):

```bash
pnpm install
pnpm dev
```

In a second terminal:

```bash
pnpm exec ts-node --esm server/index.ts
```

### Prerequisites

- Node.js (recommended: current LTS)
- pnpm

### Install

```bash
pnpm install
```

### Run (frontend)

```bash
pnpm dev
```

The site starts on the Vite dev server.

### Run (API for local development)

The frontend calls `/api/*`. In development, Vite proxies `/api` to a local server on `http://localhost:3001`.

Start the API server in a second terminal:

```bash
pnpm exec ts-node --esm server/index.ts
```

If the above doesn’t work on your machine, this alternative is equivalent:

```bash
node --loader ts-node/esm server/index.ts
```

## Environment Variables

Create a `.env` file in the project root for local development (used by `server/index.ts`).

```bash
WAKATIME_API_KEY=your_wakatime_api_key

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token

# Frontend (Vite) env vars must start with VITE_
# Sepolia RPC used by the Resume verifier (optional; defaults to a public endpoint)
SEPOLIA_RPC_URL=https://ethereum-sepolia-rpc.publicnode.com
# If using Ankr, you must include the API key as a path segment:
# VITE_SEPOLIA_RPC_URL=https://rpc.ankr.com/eth_sepolia/<YOUR_API_KEY>
```

For production on Vercel, add the same variables in the Vercel Project Settings.

## API Endpoints

The app uses these endpoints:

- `GET /api/wakatime` — proxies WakaTime “last 7 days” stats
- `GET /api/spotify` — returns the most recently played Spotify track

Notes:

- On Vercel, these routes are implemented by `api/wakatime.ts` and `api/spotify.ts`.
- Locally, they are served by the Express server in `server/index.ts` and reached via the Vite proxy.

## Scripts

```bash
# Dev server
pnpm dev

# Production build
pnpm build

# Preview the production build locally
pnpm preview

# Lint
pnpm lint
```

## Deployment

- This repo is set up for SPA routing on Vercel via `vercel.json` rewrites.
- Frontend is built with Vite.
- API routes are deployed as Vercel Serverless Functions from `api/`.

## License

See `LICENSE`.
