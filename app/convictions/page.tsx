import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Three Convictions - Kaname",
  description:
    "The foundational beliefs of Kaname: Specification Primacy, Flow over Cadence, and Human Governance over AI Autonomy.",
}

const convictions = [
  {
    numeral: "I",
    title: "Specification Primacy",
    statement:
      "The specification is the source of truth. Code is a derived, regenerable output. Specifications endure; implementations are replaced. When specification and code conflict, the specification governs.",
    why: "AI can generate code faster than any team can write it. The bottleneck is no longer writing code - it is knowing what to build. A specification that is precise, complete, and owned is the only thing that prevents AI-generated code from drifting away from intent.",
    inPractice: [
      "No feature exists unless it is defined in spec.md. Verbal agreements and Slack threads are not specifications.",
      "When AI output and spec diverge, the AI output is wrong - not the spec.",
      "A spec change requires human approval before any implementation proceeds.",
      "The spec is written before any code is generated, not after.",
    ],
    antiPattern:
      'Teams skip the spec and ask AI to "figure it out." The AI produces something plausible. The team ships it. Three weeks later, the product does something no stakeholder wanted - but nobody can point to where the decision was made, because there was no specification to violate.',
    artifact: "spec.md",
    artifactOwner: "Spec Owner",
  },
  {
    numeral: "II",
    title: "Flow over Cadence",
    statement:
      "Work moves continuously through defined stages governed by explicit policies - stated rules about how work enters, advances, and exits each stage. Time-boxed iterations are not required. Work is pulled, not pushed. Limiting work in progress improves delivery more reliably than increasing effort.",
    why: "Sprints impose artificial rhythm. In AI-augmented delivery, a single spec can generate a full task list in minutes and implementation can follow in hours. Sprint boundaries become obstacles rather than checkpoints. Flow exposes real bottlenecks - a blocked gate, an overloaded reviewer, an ambiguous spec - rather than hiding them behind a two-week cadence.",
    inPractice: [
      "Work is pulled from the backlog when capacity exists, not batched into iterations.",
      "Each stage has an explicit WIP limit. When a stage is full, upstream work stops.",
      "The board state is always honest: Specify, Plan, Implement, Review, Done.",
      "A task does not move to the next stage until the human gate for that stage is cleared.",
    ],
    antiPattern:
      "A team running Kaname-flavored sprints commits to 12 tasks on Monday. By Wednesday, 8 are \"in progress\" simultaneously. The AI is fast; reviewers are drowning. Nothing ships by Friday. The sprint ends, tasks roll over, and the team calls it normal.",
    artifact: null,
    artifactOwner: "Delivery Coach",
  },
  {
    numeral: "III",
    title: "Human Governance over AI Autonomy",
    statement:
      "Artificial intelligence generates code at speed and scale. Human judgment governs intent, architecture, and acceptance. No AI output advances through the delivery system without passing a human gate.",
    why: "AI is a powerful but undiscriminating executor. It optimizes for completing the task as stated, not for the consequences of completing it. Architectural decisions made by AI without human review accumulate into systems that are expensive to change and dangerous to operate. Human gates are not bureaucratic overhead - they are the mechanism by which intent is preserved across generations of AI-generated code.",
    inPractice: [
      "Every stage transition requires a named human to approve the output.",
      "The Constitution Guardian can veto any output that violates architectural or security boundaries - at any stage.",
      "AI agents are given scoped context per task. They do not have access to the full system.",
      'Marking a task "done" without reviewing the AI output against the spec is a gate violation.',
    ],
    antiPattern:
      'A Task Implementer runs an AI agent on a batch of 20 tasks overnight. In the morning, all tasks are marked done. The code compiles. The tests pass. Nobody reads the diffs. The system now has a new data model, three new API endpoints, and a caching layer that nobody specified - all "working" and all wrong.',
    artifact: "constitution.md",
    artifactOwner: "Constitution Guardian",
  },
]

export default function ConvictionsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50">
      <Nav />

      {/* Hero */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[4px] text-purple-300 uppercase">
            Kaname Theory
          </p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-[-2px] text-slate-50 md:text-6xl">
            Three Convictions
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            Kaname is not a process. It is a set of beliefs about how software
            should be built when AI is doing the building. These three
            convictions are non-negotiable - they are the foundation everything
            else rests on.
          </p>
        </div>
      </section>

      {/* Conviction sections */}
      <div className="border-t border-slate-800">
        {convictions.map((c, i) => (
          <section
            key={c.numeral}
            className={`border-b border-slate-800 px-6 py-16 md:px-16 md:py-20 ${
              i % 2 === 1 ? "bg-[#0a0f1e]" : ""
            }`}
          >
            <div className="mx-auto max-w-3xl">
              {/* Numeral + title */}
              <div className="mb-8 flex items-baseline gap-4">
                <span className="text-3xl font-light text-purple-300">
                  {c.numeral}
                </span>
                <h2 className="text-2xl font-bold tracking-[-0.5px] text-slate-50 md:text-3xl">
                  {c.title}
                </h2>
              </div>

              {/* Statement */}
              <blockquote className="mb-10 border-l-2 border-purple-300 pl-6">
                <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                  {c.statement}
                </p>
              </blockquote>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Why */}
                <div>
                  <p className="mb-3 text-[9px] font-semibold tracking-[3px] text-slate-600 uppercase">
                    Why this conviction
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {c.why}
                  </p>
                </div>

                {/* In practice */}
                <div>
                  <p className="mb-3 text-[9px] font-semibold tracking-[3px] text-slate-600 uppercase">
                    In practice
                  </p>
                  <ul className="space-y-2">
                    {c.inPractice.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Anti-pattern */}
              <div className="mt-8 rounded-lg border border-red-900/30 bg-red-950/20 p-5">
                <p className="mb-2 text-[9px] font-semibold tracking-[3px] text-red-400/70 uppercase">
                  Without this conviction
                </p>
                <p className="text-sm leading-relaxed text-slate-500 italic">
                  {c.antiPattern}
                </p>
              </div>

              {/* Artifact */}
              {c.artifact && (
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[9px] font-semibold tracking-[2px] text-slate-700 uppercase">
                    Primary artifact
                  </span>
                  <span className="rounded border border-slate-800 bg-[#0a0f1e] px-2 py-0.5 font-mono text-[10px] text-purple-300">
                    {c.artifact}
                  </span>
                  <span className="text-[9px] text-slate-700">
                    owned by {c.artifactOwner}
                  </span>
                </div>
              )}
              {!c.artifact && (
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[9px] font-semibold tracking-[2px] text-slate-700 uppercase">
                    Governed by
                  </span>
                  <span className="text-[9px] text-slate-600">
                    {c.artifactOwner}
                  </span>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            The full guide covers all five roles, the delivery cycle, and human
            gates.
          </p>
          <div className="flex gap-3">
            <a
              href="/"
              className="rounded border border-slate-800 px-4 py-2 text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:border-slate-600 hover:text-slate-300"
            >
              Back to Kaname
            </a>
            <a
              href="/kaname-guide.pdf"
              download
              className="rounded bg-purple-300 px-4 py-2 text-[10px] font-bold tracking-widest text-[#0f172a] uppercase transition-colors hover:bg-purple-200"
            >
              ↓ Full Guide PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
