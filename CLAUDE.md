@AGENTS.md

# kaname-website

Marketing and documentation site for the Kaname methodology. Live at kaname.guide.
GitHub: NiRee911/kaname-website · Vercel auto-deploy on push to main.

---

## CRITICAL: Security constraints

**No em dashes (—) anywhere.** Use `-` or `:` instead. Em dashes in source text must be replaced before displaying on the site or in the PDF.

**Author names must NEVER appear on any public-facing page or in the PDF.**
Names to suppress: `Jakub Kavinsky`, `Slavka Smolková` (also `Slavka Smolkova`).
Employers (Michelin, Ness) must not find these names by searching.

The PDF script (`scripts/generate-pdf.mjs`) strips names via regex. If the guide source changes, verify stripping still works. The invisible white-text `Jakub Kavinsky` at the end of the PDF is **intentional** (authorship watermark) - do not remove it.

---

## Content source of truth

All website content must match:
`/Users/kavinsky/Documents/Obsidian/PERS/sm-kolektiv/sdd/kaname-guide.md`

When in doubt about any content, read the guide. Do not invent or paraphrase.

---

## PDF generation

```bash
node scripts/generate-pdf.mjs
```

Reads directly from `kaname-guide.md` in the Obsidian vault - NOT from the website pages. Run after any content change to the guide. Output: `public/kaname-guide.pdf`.

---

## Stack

- Next.js 16 App Router, TypeScript, Tailwind CSS v4 (`@import "tailwindcss"`)
- All pages are static (`○ Static` in build output)
- Dark theme: `bg-[#0f172a]`, secondary `bg-[#0a0f1e]`, accent `text-amber-400`
- Light theme via `.light` class on `<html>` (ThemeToggle in nav)
- Tailwind v4: use `@layer utilities`, NOT `@tailwind` directives

---

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero → TheShift → ManifestoValues → Convictions → Values → DeliveryCycle → Team → Gates → DownloadCta |
| `/manifesto` | `app/manifesto/page.tsx` | 要 hero, 4 values grid, accordion explanations, progressive disclosure principles |
| `/convictions` | `app/convictions/page.tsx` | |
| `/values` | `app/values/page.tsx` | |
| `/delivery-cycle` | `app/delivery-cycle/page.tsx` | 7-step cycle + compact refs to /artifacts and /events |
| `/artifacts` | `app/artifacts/page.tsx` | Chain of constraint: constitution.md → spec.md → plan.md → tasks.md |
| `/events` | `app/events/page.tsx` | 6 events with attendance, triggers, outputs |
| `/gates` | `app/gates/page.tsx` | 4 human gates |
| `/team` | `app/team/page.tsx` | |

Nav order: Manifesto · Convictions · Values · Delivery Cycle · Artifacts · Gates · Events · Team

---

## Key patterns

**"X over Y" values** — always grid, never flex-wrap:
```tsx
<div className="grid grid-cols-[1fr_auto_1fr] items-center">
  <div>{left}</div>
  <div className="border-x border-slate-800 px-3 text-center">
    <span className="text-[8px] tracking-[3px] text-amber-400/60 uppercase">over</span>
  </div>
  <div>{right}</div>
</div>
```

**Active nav** — `components/nav.tsx` is `'use client'`, uses `usePathname()` to highlight current page in `text-amber-400`.

**Accordion** — native `<details>/<summary>` (no JS). `group` on `<details>`, `group-open:` on children for expand/collapse indicators.

---

## Dev workflow

**Simplicity First** — make every change as simple as possible. Touch only what's necessary. Avoid introducing side effects.

**No laziness** — find root causes. No temporary fixes. Senior developer standards.

**Verification before done** — always run `npm run build` before pushing. Never mark something complete without proving it works.

**Demand elegance** — for non-trivial changes, pause and ask "is there a more elegant way?" Skip for simple obvious fixes.

**Autonomous bug fixing** — when given a bug: just fix it. Point at the error, resolve it, no hand-holding required.

---

## Current values (updated 2026-05-21)

1. Specification clarity over implementation velocity
2. Human judgment over AI momentum
3. Living specification over the codebase as truth
4. Verified intent over working code
