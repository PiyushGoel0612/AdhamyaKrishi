# ಕಿಸಾನ್ ಸಾಥಿ · Kisan Sathi

An information site for farmers in Karnataka: the package of practices for
five crops, the government schemes available to them, season-wise sowing
information, and contact details for agricultural research centres.

**Kannada is the primary language** — it is the language of the source
documents and of the audience. English is available as a translation.

Built with Next.js 16 (App Router), TypeScript and Tailwind 4. Light theme
only: this is read outdoors, on cheap phones, in bright sun.

## Running it

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

No API keys and no environment variables. All content ships with the repo.

```bash
pnpm build        # production build + typecheck
pnpm lint
```

## What's in it

| Route | What it does |
| --- | --- |
| `/` | Entry points, the five crops, the five schemes |
| `/crops` · `/crops/[slug]` | Package of practices for ragi, coconut, ginger, maize and sugarcane |
| `/schemes` · `/schemes/[slug]` | PMFBY, PMKSY, PM-KISAN, Krishi Yantra Dhare and KCC |
| `/seasons` | Cropping season, sowing time, and crops suited to low water |
| `/contacts` | Research centres and officers, with tap-to-call numbers |

## Where the content comes from

Everything on this site is transcribed from three source documents, and
nothing has been added to them:

| Document | Becomes |
| --- | --- |
| `website.docx` | `src/data/cropGuides.ts` — the five crop guides |
| `Schemes.docx` | `src/data/schemes.ts` and `src/data/contacts.ts` |
| `POP-S.docx` | `src/data/seasons.ts` |

The Kannada in those files is the source text. The English is a translation
of it, produced for this site and **not independently reviewed**. Where the
source says a detail is unclear or should be confirmed against the original
handbook, that caveat is carried through rather than filled in.

### The content model

The source documents are numbered sections containing a mix of prose,
bullet lists, sub-headed groups and tables. Rather than force that into a
fixed schema — which would mean dropping or inventing structure — each
section holds an ordered list of blocks that mirrors the document:

```ts
type Block =
  | { kind: "para";    text: Localized }
  | { kind: "subhead"; text: Localized }
  | { kind: "list";    items: Localized[] }
  | { kind: "table";   head: Localized[]; rows: Localized[][] }
  | { kind: "note";    text: Localized }
```

One renderer (`src/components/Blocks.tsx`) draws all of them, so a crop
page and a scheme page share the same code. Tables become a table on
desktop and one card per row on a phone — a six-column variety table is
unreadable at 360px.

## Language

Every content field is `{ kn, en }` — see `src/lib/types.ts`. UI chrome
lives in `src/data/ui.ts`, typed `satisfies Record<string, Localized>`, so
a missing string is a build error rather than a blank label.

The active language comes from `useSyncExternalStore` over `localStorage`
(`src/lib/i18n.tsx`), so there is no hydration mismatch. The server renders
in Kannada, which is the default. `?lang=en` on any URL overrides the
stored preference, which makes English links shareable.

Noto Sans Kannada leads the font stack; Mukta picks up the Latin that runs
through the agronomy text — variety codes, chemical names, units — so a
Kannada sentence containing `NPK 10:26:26` renders at one optical weight.

## Before this goes live

The agronomy is reproduced faithfully, but it has not been checked against
a current extension publication, and **the English translation has had no
expert review**. A wrong dose costs a real person real money.

Have the five crop guides read by an extension officer or a KVK scientist —
the contacts page lists people who could do it — and keep the notice that
sends readers to their Raitha Samparka Kendra.
