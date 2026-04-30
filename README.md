# SubLift - Subreddit Growth SaaS

A production-ready Next.js App Router landing site for an organic subreddit growth service. Visitors can review plans and submit inquiries through an external Google Form.

## Features

- Public landing page with hero, how it works, pricing, testimonials, and FAQ
- Direct external Google Form application flow
- Toast notifications, loading states, responsive Tailwind UI, and SEO metadata

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

3. Fill in the environment variables you want to keep for future integrations:

```bash
NEXTAUTH_URL=http://localhost:3000
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Deployment

Deploy to Vercel, add the same environment variables in the Vercel dashboard, and set:

```bash
NEXTAUTH_URL=https://your-domain.com
```

The homepage buttons open the Google Form directly, so no auth or payment setup is required for the current flow.
