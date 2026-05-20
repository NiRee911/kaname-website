import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Five Values - Kaname",
  description:
    "The five values that Kaname teams must live: Specification, Accountability, Transparency, Governance, and Flow.",
}

const values = [
  {
    number: "01",
    name: "Specification",
    definition:
      "The team commits to the specification as the single source of truth - not intuition, convenience, or verbal agreement.",
    why: "AI has no memory between sessions except the context you provide. The spec is that memory. When a team operates on verbal understanding instead of written specification, each AI session starts from a different set of assumptions - and the output drifts with each iteration. Specification is not documentation written after the fact. It is the decision, made explicit, before any implementation begins.",
    inPractice: [
      "Before generating any code, the relevant spec section is reviewed and confirmed complete.",
      '"I thought we agreed" carries no weight. What does spec.md say?',
      "Spec changes go through the Spec Owner. A task description update is not a spec change.",
      "When implementation reveals ambiguity, work stops and returns to the Spec Owner - it does not continue under assumption.",
      "The spec is the contract between the team and the AI. Both sides are held to it.",
    ],
    antiPattern:
      "The team runs on shared understanding. The AI generates feature A in week one and feature B in week three, both prompted with different verbal summaries of \"what we discussed.\" By week eight, nobody knows what the system is supposed to do. A new team member reads the code to understand intent. The code is wrong. The spec was never written.",
  },
  {
    number: "02",
    name: "Accountability",
    definition:
      "Each role is accountable for its defined scope without delegation. Every artifact has a named owner. Accountability cannot be shared, transferred, or left unassigned.",
    why: 'AI-augmented delivery creates a new failure mode: diffuse accountability. When the AI generates the plan, reviews its own output, and implements the tasks, it is tempting to treat the AI as accountable. It is not. The human who approved the plan is accountable for the plan. The human who cleared the gate is accountable for what passed through it. Named accountability is what makes human governance real rather than nominal.',
    inPractice: [
      "Every artifact - constitution.md, spec.md, plan.md, tasks.md - has exactly one named human owner.",
      "You can delegate the work of a role. You cannot delegate the accountability.",
      "When a gate is skipped, the person whose gate it was is accountable for what shipped without review.",
      '"Someone should handle this" is not an assignment. A name and a role are required.',
      "If any artifact lacks a named owner, the team is not running Kaname.",
    ],
    antiPattern:
      'Team lead runs a standup. "Who is reviewing the plan?" Silence. "Someone should pick that up." More silence. The plan is implemented without review. The architecture introduces a security boundary violation that the Constitution Guardian would have caught. Everyone is responsible. Nobody is accountable. The post-mortem produces no corrective action because there is nobody to correct.',
  },
  {
    number: "03",
    name: "Transparency",
    definition:
      "Work, decisions, and blockers are visible to the full team at all times. The board is the team's shared reality - not a reporting tool.",
    why: "AI moves fast. Without transparency, the team discovers conflicts late - two tasks produced incompatible implementations, a gate was quietly skipped, a blocker sat for three days while work continued downstream. Transparency is not reporting to management. It is the mechanism by which the team catches problems before they compound. A blocker surfaced on day one costs an hour. The same blocker discovered on day four costs a week.",
    inPractice: [
      "The board is updated when work starts and when it stops - not at standup, not at end of day.",
      "Blockers are surfaced immediately, not resolved silently or held until the next ceremony.",
      "Gate decisions - approved or rejected - are recorded on the board with the reviewer's name and a brief rationale.",
      "Assumptions made during implementation are flagged immediately, not buried in the diff.",
      "If something went wrong, it is visible. The team does not manage perception; it manages the work.",
    ],
    antiPattern:
      "A Task Implementer hits an ambiguous spec. Rather than surface the blocker, they make a reasonable assumption and continue. The task is marked done. The Spec Owner reviews the output four days later. The assumption was wrong. Three connected tasks built on the same assumption are also wrong. The blocker that would have cost two hours on day one costs two days on day five.",
  },
  {
    number: "04",
    name: "Governance",
    definition:
      "Every human gate is exercised without exception. A gate skipped once is a gate that no longer exists.",
    why: "The human gate is the only mechanism standing between AI-generated code and the delivery system. When the team is fast and confident, gates feel like friction. That is precisely when they are most important - fast, confident teams skip gates; slow, careful reviews catch what confidence misses. An optional gate is not a gate. It is a suggestion.",
    inPractice: [
      '"We are in a hurry" is not a valid reason to skip a gate. Urgency increases risk; gates manage risk.',
      "A gate is either cleared by a named human with explicit approval, or it is not cleared. There is no partial pass.",
      "The Constitution Guardian's veto is absolute. It cannot be overruled by schedule pressure, product priority, or consensus.",
      "Gates run in sequence. Gate 3 cannot be cleared before Gate 2.",
      "Governance applies equally to small tasks and large ones. The WIP limit does not have exceptions.",
    ],
    antiPattern:
      'Deadline pressure is high. "The spec looks solid - let\'s go straight to implementation, we\'ll catch anything in review." Gate 1 is skipped. Implementation begins. Halfway through, the spec has three unresolved edge cases that only become visible during implementation. Work stops under pressure. The hours saved by skipping the Specification Gate are spent five times over resolving ambiguity in the middle of a delivery cycle.',
  },
  {
    number: "05",
    name: "Flow",
    definition:
      "Work is pulled when capacity exists. WIP limits are enforced. The system is not overloaded. Finishing matters more than starting.",
    why: "AI can generate 40 tasks from a specification in ten minutes. Without flow discipline, the temptation is to start all 40 immediately. A team with 40 tasks in progress has not increased throughput - it has multiplied review load, increased context-switching, and degraded the quality of every gate. WIP limits are not bureaucracy. They are the mechanism by which review quality is maintained and delivery remains predictable.",
    inPractice: [
      "When a stage hits its WIP limit, no new work enters that stage. The limit is a hard constraint, not a guideline.",
      "Picking up additional tasks while blocked is a WIP violation. The blocker is resolved first.",
      "Lead time - the time from start to done for a single item - is the primary health metric. Throughput is secondary.",
      "The Flow Review inspects the system, not the people. The output is a policy change, not an action item for an individual.",
      "A task is done when it has passed its gate - not when the AI has finished generating the code.",
    ],
    antiPattern:
      "Monday morning. AI generates 40 tasks in 10 minutes. The team pulls all 40 into In Progress because capacity feels unlimited. By Wednesday, 40 diffs land in the review queue simultaneously. The Plan Reviewer spends a week in review. Quality drops under volume. Bugs pass through. The team concludes that review is the bottleneck and decides to do less of it. The governance system degrades from the inside.",
  },
]

export default function ValuesPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50">
      <Nav />

      {/* Hero */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[4px] text-purple-300 uppercase">
            Kaname Values
          </p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-[-2px] text-slate-50 md:text-6xl">
            Five Values
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            Kaname is built on beliefs about how software is built. It also
            requires a set of behaviors. These five values are not aspirational.
            They are operational - the team either lives them or it is not
            running Kaname.
          </p>
        </div>
      </section>

      {/* Values */}
      <div className="border-t border-slate-800">
        {values.map((v, i) => (
          <section
            key={v.number}
            className={`border-b border-slate-800 px-6 py-16 md:px-16 md:py-20 ${
              i % 2 === 1 ? "bg-[#0a0f1e]" : ""
            }`}
          >
            <div className="mx-auto max-w-3xl">
              {/* Number + name */}
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-mono text-xs font-semibold tracking-widest text-purple-300/60">
                  {v.number}
                </span>
                <h2 className="text-3xl font-extrabold tracking-[-1px] text-slate-50 md:text-4xl">
                  {v.name}
                </h2>
              </div>

              {/* Definition */}
              <blockquote className="mb-10 border-l-2 border-purple-300 pl-6">
                <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                  {v.definition}
                </p>
              </blockquote>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Why */}
                <div>
                  <p className="mb-3 text-[9px] font-semibold tracking-[3px] text-slate-600 uppercase">
                    Why this value
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {v.why}
                  </p>
                </div>

                {/* In practice */}
                <div>
                  <p className="mb-3 text-[9px] font-semibold tracking-[3px] text-slate-600 uppercase">
                    In practice
                  </p>
                  <ul className="space-y-2.5">
                    {v.inPractice.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Anti-pattern */}
              <div className="mt-8 rounded-lg border border-red-900/30 bg-red-950/20 p-5">
                <p className="mb-2 text-[9px] font-semibold tracking-[3px] text-red-400/70 uppercase">
                  Without this value
                </p>
                <p className="text-sm leading-relaxed text-slate-500 italic">
                  {v.antiPattern}
                </p>
              </div>
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
