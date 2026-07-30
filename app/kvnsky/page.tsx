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
      "Five areas of risk, each with its plain meaning always on screen: detection, response, continuity, traceability, compliance. Every control names the risk it reduces, so MUST is derived rather than asserted, and a script turns the verdicts into a map of where the thing actually bends. What nobody verified is its own number, never zero.",
    links: [
      { label: "Data flow", href: "/kvnsky/bibgauge/flow.html" },
      { label: "Live demo", href: "/kvnsky/bibgauge/demo.html" },
    ],
  },
  {
    tag: "BibTrace",
    year: "2026",
    status: "PoC",
    oneLiner: "From symptom to suspect, with evidence",
    description:
      "A bug lands and the trail is followed before the first person opens it. Output is ranked hypotheses, never a verdict, and each one carries the cheapest check that kills it: a wrong hypothesis costs two minutes, a wrong answer costs two hours. A script counts how many classes of evidence actually exist, so below the threshold nothing is written at all. And because the shared helper has other callers, the analysis names them too.",
    links: [
      { label: "Data flow", href: "/kvnsky/bibtrace/flow.html" },
      { label: "Live demo", href: "/kvnsky/bibtrace/demo.html" },
    ],
  },
  {
    tag: "BibHorizon",
    year: "2026",
    status: "PoC",
    oneLiner: "What history says we can carry",
    description:
      "Every planning tool asks a person for a number. This one reads what the team already delivered and answers with a range, because a single figure becomes a commitment within a week and a measuring stick shortly after. The simulation runs in a script against the team's own record, so the model writes the sentences and never the numbers. The one sprint that collapsed stays visible instead of being averaged away, and a team with too little history gets no forecast at all.",
    links: [
      { label: "Data flow", href: "/kvnsky/bibhorizon/flow.html" },
      { label: "Live demo", href: "/kvnsky/bibhorizon/demo.html" },
      { label: "Bigger picture", href: "/kvnsky/bibhorizon/horizons.html" },
    ],
  },
  {
    tag: "BibCascade",
    year: "2026",
    status: "PoC",
    oneLiner: "Where the net leaks",
    description:
      "Every defect passed through gates meant to stop it, and when one reaches a customer the team fixes the defect rather than the gate. The phase a defect was caught in is not a field anywhere, so it is derived from the trail the work already left. What comes back is a cascade: how many each gate held, how many it passed on, and the number at the bottom that nobody in the team found. A pattern needs eight cases, and one below the threshold is reported as declined rather than quietly dropped, because the failure mode here is not missing things but confident clusters that are not there.",
    links: [
      { label: "Data flow", href: "/kvnsky/bibcascade/flow.html" },
      { label: "Live demo", href: "/kvnsky/bibcascade/demo.html" },
    ],
  },
  {
    tag: "BibValve",
    year: "2026",
    status: "PoC",
    oneLiner: "One constraint, with evidence",
    description:
      "A team says it is not keeping up and nobody can point at where. This subtracts timestamps and answers with a ratio first: an item lives 150 hours and is worked on for 27 of them, so asking anyone to go faster addresses a sixth of the elapsed time and the rest is queueing. Then it names one place, not five, because five findings is the same as none. Every number in the report carries a decision; the ones that do not are listed as withheld, with the reason. And because a record that reaches back years describes teams that no longer exist, it windows the history, detects where the composition changed, and hands back two bases rather than averaging two different teams into one figure - as counts, never as a person.",
    links: [
      { label: "Data flow", href: "/kvnsky/bibvalve/flow.html" },
      { label: "Live demo", href: "/kvnsky/bibvalve/demo.html" },
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
