# Spooky Action Park

Coming-soon landing page for **Spooky Action Park** — a research and commerce
campus for quantum technology in Austin, Texas.

The name plays on *"spooky action at a distance,"* Einstein's phrase for quantum
entanglement.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Hosted on [Vercel](https://vercel.com)
- Image assets served from a [Cloudflare R2](https://developers.cloudflare.com/r2/) bucket

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Environment

Copy `.env.example` to `.env.local`. The R2 host is:

```
NEXT_PUBLIC_R2_HOST=r2.spookyactionpark.com
```

`next.config.ts` whitelists this host for `next/image` optimization. The bucket
is currently empty — no image references exist in the page yet. Until the env
var is set, any `*.r2.dev` host is also allowed so dev URLs work out of the box.

## Deployment

Pushes to `main` deploy automatically via Vercel. Set `NEXT_PUBLIC_R2_HOST` in
the Vercel project's environment variables.

## Structure

```
app/
  layout.tsx     # metadata, fonts, global styles
  page.tsx       # the coming-soon hero
  globals.css    # theme tokens + entanglement animations
next.config.ts   # R2 remote-image config
```

This is an intentionally minimal scaffold meant to be built on.
