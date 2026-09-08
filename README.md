# Traders @ BPHC

Official web platform for **Traders @ BPHC** — The Official Trading & Quantitative Finance Club of BITS Pilani, Hyderabad Campus.

## Overview

Traders @ BPHC empowers students to explore algorithmic trading, mathematical finance, equity valuation, and derivatives strategies through hands-on simulations, research cohorts, and flagship national competitions.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS
- **Backend API**: Node.js & Express REST API (`/backend`)
- **Deployment**: Static HTML/CSS/JS export (`next build`) ready for GitHub Pages and modern static hosts

## Getting Started

### 1. Frontend Web App

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build static production export
npm run build
```

### 2. Express Backend API

```bash
cd backend
npm install
npm start
```
The API runs at `http://localhost:5001`.

## Project Structure

- `src/app/` — Pages (`/`, `/about`, `/events`, `/team`, `/faq`, `/contact`)
- `src/components/layout/` — Layout components (`Navbar`, `Footer`, `MarketTicker`, `TradersLogo`)
- `src/data/` — Static data layer (`events`, `team`, `announcements`, `faq`, `types`)
- `backend/` — Express REST API service with file persistence (`db.json`)
- `public/` — Static assets and branding (`traders-logo.png`)
