import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "kvnsky" },
  description: "Unlisted concept lab.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

const projects = [
  {
    tag: "BibCell",
    year: "2026",
    status: "PoC",
    oneLiner: "AI incident management cell",
    description:
      "One incident file as the single source of truth. Every output rendered from it: role-aware stakeholder updates, I-PASS onboarding briefs, a live RCA. Executive comms held as draft until a human approves.",
    links: [
      { label: "Data flow", href: "/kvnsky/bibcell/flow.html" },
      { label: "Live demo", href: "/kvnsky/bibcell/demo.html" },
    ],
  },
  {
    tag: "BibRelay",
    year: "2026",
    status: "PoC",
    oneLiner: "Pre-handover readiness audit",
    description:
      "Runs cold on any repository. Deterministic tools measure, the agent interprets, every claim keeps a link to its evidence. Output is questions for the outgoing team, not tasks: 2 hours of answers beats 40 action points nobody will do.",
    links: [
      { label: "Data flow", href: "/kvnsky/bibrelay/flow.html" },
      { label: "Live demo", href: "/kvnsky/bibrelay/demo.html" },
    ],
  },
  {
    tag: "BibGauge",
    year: "2026",
    status: "PoC",
    oneLiner: "Does this meet the standard we set?",
    description:
      "Five plain questions about a service: will we notice, can we fix it, what if they leave, can we look back, are we allowed. Each check names the risk it reduces, so MUST is derived rather than asserted, and a script turns the answers into a map of where the thing actually bends. What nobody could check is its own number, never zero.",
    links: [
      { label: "Data flow", href: "/kvnsky/bibgauge/flow.html" },
      { label: "Live demo", href: "/kvnsky/bibgauge/demo.html" },
    ],
  },
]

export default function KvnskyPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-slate-200">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-[10px] uppercase tracking-[4px] text-amber-400/70">
          kvnsky &middot; concept lab
        </p>
        <h1
          className="mt-3 text-3xl font-light text-slate-50"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Working demos of things I keep thinking about.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
          An unlisted corner of this site. Agent concepts built as proofs of
          concept: each one has a data-flow one-pager and a scripted live demo.
          Mock data only, nothing here touches a real system.
        </p>

        <div className="mt-12 space-y-6">
          {projects.map((p) => (
            <article
              key={p.tag}
              className="rounded-xl border border-slate-800 bg-[#0f172a] p-6"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="font-mono text-lg font-semibold text-slate-50">
                  {p.tag}
                </h2>
                <span className="text-sm text-slate-400">{p.oneLiner}</span>
                <span className="ml-auto rounded-full border border-slate-700 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  {p.status} &middot; {p.year}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {p.description}
              </p>
              <div className="mt-5 flex gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-full border border-amber-400/40 px-4 py-1.5 text-sm text-amber-400 transition-colors hover:bg-amber-400/10"
                  >
                    {l.label} &rarr;
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-16 border-t border-slate-800/60 pt-6 font-mono text-[11px] text-slate-600">
          No index, no tracking, no names. If you found this page, someone gave
          you the link.
        </p>
      </div>
    </main>
  )
}
