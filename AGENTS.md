# AGENTS.md - ctvaledaluz.github.io

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Next.js dev server on port 3000 |
| `npm run build` | Production build (includes TypeScript typecheck) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint via `next lint` |

Verification gate is `npm run build` — it fails on both type errors and lint errors. There are no tests and no CI.

## Architecture

- **App Router** at `src/app/`. `layout.tsx` holds global metadata (OpenGraph, canonical, favicon), fonts, Header/Footer, floating WhatsApp button, and Organization JSON-LD.
- Routes: `/`, `/sobre`, `/como-ajudar`, `/contato`. All static (SSG).
- **Client components are the exception**: only `Header.tsx` (mobile menu state) and `PixCopyButton.tsx` (clipboard) carry `"use client"`. Everything else is a server component — do not add `"use client"` to pages.
- **`src/lib/site.ts` is the single source of truth** for CNPJ, PIX key, address, phone, email, WhatsApp URL, social links, and nav links. Change institutional data there, never inline in components.
- `src/components/Hero.tsx` is the shared page hero (background image + gradient + CTA row).
- Styling is Tailwind v3 with a small set of component classes in `src/app/globals.css` (`.btn-primary`, `.btn-secondary`, `.card`, `.section`, `.container-page`). Prefer these over ad-hoc utility blobs.

## Conventions

- All copy is Brazilian Portuguese; keep it that way.
- Brand color is teal (`brand-*` scale in `tailwind.config.ts`), not the old Chakra `teal.500`.
- Icons come from `lucide-react` only. The old Chakra UI + `react-icons` stack is gone — do not reintroduce it.
- `pitch.webm` (~50MB) is a raw static file in `public/`, not in the Next.js image pipeline. Never import it as an asset.
- Site URL is `https://valedaluz.com.br` (set in `src/lib/site.ts` and `metadataBase`).

## Assets

All images live in `public/` (flat, e.g. `/head3-img.webp`, `/card1.webp`, `/carousel/1.png`). There is no `src/assets` directory anymore.

## Docker Dev

`docker-compose -f docker-compose.dev.yml up -d` then `docker exec site-app npm run dev`. Container port 3000 is mapped to host 3001. `Dockerfile.dev` no longer needs the esbuild rebuild step that Vite required.
