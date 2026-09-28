# Agent Notes — rasp-ui

Only include what would cause an agent to guess wrong or miss a failure mode.

## Build / Verify
- `npm run build` = `tsc -b && vite build`. Do not skip `tsc -b`; project uses composite `tsconfig` refs (`tsconfig.app.json` + `tsconfig.node.json`).
- `npm run lint` = `eslint .`. Flat config at `eslint.config.js`; ignores `dist`.
- `npm run dev` = `vite`. No test command exists in `package.json`; do not assume `npm test` works.

## TypeScript Quirks (high failure risk if missed)
- `package.json`: `"type": "module"` (ESM everywhere).
- `tsconfig.app.json`: `verbatimModuleSyntax: true` → use `import type { ... }` for type-only imports; `noUnusedLocals: true` and `noUnusedParameters: true`; `jsx: "react-jsx"` (do not import React for JSX).
- `tsconfig.json` is composite with references; edit `tsconfig.app.json` for src rules.
- `allowImportingTsExtensions: true`; import `.ts`/`.tsx` directly.

## Source Layout (not a standard CRA)
- Entry: `src/main.tsx` (React 19 `createRoot`, `BrowserRouter`, routes `/`, `/services/coffee`, `/services/gym`).
- Pages: `src/pages/App.tsx`, `src/pages/Gym.tsx`, `src/pages/Agency.tsx`, `src/pages/coffee/`. No `pages/index.tsx`.
- Components / registry: `src/Registy/` (Content, Layout, Navigation, Base, Marketing, Meta, Input) and `src/Lib/` (types, utils). `Registy` spelling is intentional.
- Data: `src/DummyData.ts` exports site content (stats, destinations, coffee/gym timelines, plans, services).
- Styles: `src/index.css` + Tailwind v4 (`@tailwindcss/vite` in `vite.config.ts`).

## Tooling
- Vite + `@vitejs/plugin-react` + Tailwind v4 (`tailwindcss` ^4.3.3, `@tailwindcss/vite`).
- ESLint flat config uses `typescript-eslint`, `reactHooks`, `reactRefresh`; no type-aware rules enabled (`recommended` only).
- `lucide-react` icons; `date-fns`; `react-router` v8; `swiper`; `embla-carousel-react`; `clsx`/`tailwind-merge`/`cva`.

## When Changing Code
- If adding a new page, add the `<Route>` in `src/main.tsx`.
- If editing data, prefer `src/DummyData.ts`; page components consume from there.
- `noUnusedLocals` is strict: an unused import or variable breaks the build.
