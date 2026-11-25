# Uxhan Forge

Next.js App Router website for the Uxhan Forge mobile app and game studio.

## Run locally

Use Node.js 22 or 24 with npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To verify a production build and serve it locally:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Deploy to Vercel

Import this project as a Next.js project and let Vercel run `npm run build`. To deploy using the CLI, run `npx vercel` for a preview and `npx vercel --prod` when the legal content is confirmed. See [the legal publication blockers](docs/legal-review.md) before replacing the live site. The domain used for canonicals, Open Graph metadata and the sitemap is configured in `data/site.ts`.

## Content and assets

- Edit `data/site.ts` to update studio and app information. To add a product, add its data and add the official artwork as `public/brand/<id>.png`. Add its release file and register it in `data/releases.ts`. Product routes, metadata, filters and support links derive from this data.
- Original assets are in `assets`. Website copies live in `public/brand`. Next Image creates responsive variants. The homepage loads the GLB hero when it enters view and uses the studio PNG on devices where 3D is unavailable or reduced motion is enabled.
- Add a verified release to the app's TypeScript file in `data`. Each file exports a `releases` array. Use an ISO date and a semantic version without the `v` prefix. Add detail lists only when you have release information for those categories.

```ts
export const releases: Release[] = [
  // { version, date, channel, title, summary, platform, features, improvements, fixes, knownIssues, url }
];
```

The production build uses Webpack because the local Turbopack CSS worker repeatedly failed to start. Tune Light, Dark and Dim tokens in `app/globals.css`. The glass switcher uses the displacement texture from `docs/liquidglassguide.md` and a CSS blur fallback.

The contact form validates inputs and opens an email draft in the visitor's email client. Studio and product support addresses are configured in `data/site.ts`. No email service or environment variables are configured.

## Privacy and Google Play setup

App-specific privacy, terms and deletion routes are generated from the shared route template. Factual app data disclosures live in data/legal.ts. The privacy and terms documents require release-specific and legal review. See docs/GOOGLE_PLAY_LEGAL_SETUP.md for the route map, source audit, unresolved facts and Play Console steps, and docs/LEGAL_DRAFTS.md for internal drafts. Deletion email links initiate requests through the visitor's email client. Confirm the support inbox and operational deletion process before registering these pages.

The OrganicLiquidBackground server component supplies three gradient layers with phase-offset multidirectional transform and opacity loops. Touch and small-screen devices use two layers. Theme palettes, movement, hidden-page pausing and reduced-motion styling live in app/globals.css.
Editorial studio and product content lives in data/editorial.ts. Shared FAQ, spotlight, design-principle and product-journey layouts are server components in components/editorial.tsx. Product detail composition lives in components/product-page.tsx. Add verified content to these data structures when the portfolio changes.