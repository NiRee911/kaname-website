import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Delivery Cycle - Kaname",
  description:
    "How work moves through Kaname: stages, human gates, artifact chain, and the six events that keep the system healthy.",
}

const stages = [
  {
    id: "backlog",
    label: "Backlog",
    type: "stage" as const,
    role: null,
    artifact: null,
    description:
      "Use Cases exist but are not yet Spec-Ready. The Spec Owner is aware of them and may be authoring them, but they have not yet entered the active specification pipeline.",
    entry: "A stakeholder intent or product need has been identified.",
    exit: "Use Case is submitted for Spec Review Session assessment.",
  },
  {
    id: "gate-1",
    label: "Gate 1",
    type: "gate" as const,
    gateName: "Specification Gate",
    gateOwners: "Spec Owner + Constitution Guardian",
    gateVerifies:
      "Each Use Case is complete, constitutionally aligned, and implementable without clarification.",
  },
  {
    id: "specify",
    label: "Specify",
    type: "stage" as const,
    role: "Spec Owner",
    artifact: "spec.md",
    description:
      "The Spec Owner writes and refines Use Cases until they meet the Spec-Ready standard: every input, output, variant, and failure condition is defined. The Spec Review Session runs at cadence here.",
    entry: "Spec Owner pulls the Use Case into active specification.",
    exit:
      "Use Case satisfies Behavioral Intent commitment - a Task Implementer can execute it using an AI agent without requesting clarification. The Use Case is Spec-Ready.",
  },
  {
    id: "gate-2",
    label: "Gate 2",
    type: "gate" as const,
    gateName: "Plan Gate",
    gateOwners: "Plan Reviewer",
    gateVerifies:
      "AI-generated plan.md is architecturally sound, constitutionally compliant, and covers all Use Cases in scope.",
  },
  {
    id: "plan",
    label: "Plan",
    type: "stage" as const,
    role: "Plan Reviewer",
    artifact: "plan.md",
    description:
      "An AI agent generates plan.md from the approved specification: component structure, data model, API contracts, and implementation sequence. The Plan Reviewer inspects - they do not author.",
    entry: "Gate 1 cleared. Spec-Ready Use Cases committed to the delivery cycle.",
    exit:
      "Plan satisfies Architecture Alignment commitment - every Use Case maps to a technical component, no constitutional violations.",
  },
  {
    id: "gate-3",
    label: "Gate 3",
    type: "gate" as const,
    gateName: "Implementation Gate",
    gateOwners: "Task Implementer",
    gateVerifies:
      "AI-generated code satisfies the linked Use Case acceptance criteria. Applied per task, not per delivery cycle.",
  },
  {
    id: "implement",
    label: "Implement",
    type: "stage" as const,
    role: "Task Implementer",
    artifact: "tasks.md",
    description:
      "Task Implementers pull tasks from tasks.md according to WIP limits and execute them with AI coding assistants. Each task carries its Use Case reference and acceptance criteria. Ambiguity returns to the Spec Owner - it is never resolved unilaterally.",
    entry: "Gate 2 cleared. Task pulled from board as capacity allows.",
    exit:
      "AI output reviewed against Use Case acceptance criteria. Task satisfies Implementation Completeness commitment.",
  },
  {
    id: "review",
    label: "Review",
    type: "stage" as const,
    role: "Spec Owner",
    artifact: null,
    description:
      "The Spec Owner performs end-to-end verification of all implemented Use Cases in the delivery cycle. This is not a code review - it is behavioral verification: does the delivered system do what the spec said it would?",
    entry: "All tasks in the delivery cycle have passed Gate 3.",
    exit:
      "All Use Cases verified end-to-end. Gate 4 is ready to be exercised.",
  },
  {
    id: "gate-4",
    label: "Gate 4",
    type: "gate" as const,
    gateName: "Delivery Gate",
    gateOwners: "Spec Owner",
    gateVerifies:
      "All Use Cases in the delivery cycle are satisfied. Release is authorized. Triggers the Delivery Review event.",
  },
  {
    id: "done",
    label: "Done",
    type: "stage" as const,
    role: "Delivery Coach",
    artifact: null,
    description:
      "Gate 4 has passed. The Delivery Review event is triggered - stakeholders inspect the delivered system and provide feedback. Their input enters the next Spec Review Session. The delivery cycle formally closes.",
    entry: "Gate 4 cleared by Spec Owner.",
    exit: "Delivery Review concluded. Feedback captured. Cycle closed.",
  },
]

const stageItems = stages.filter((s) => s.type === "stage")
const gateItems = stages.filter((s) => s.type === "gate")

export default function DeliveryCyclePage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50">
      <Nav />

      {/* Hero */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[4px] text-amber-400 uppercase">
            Kaname Delivery
          </p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-[-2px] text-slate-50 md:text-6xl">
            Delivery Cycle
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            Kaname is not sprint-based. Work flows continuously through defined
            stages governed by explicit policies. A delivery cycle begins when
            Use Cases are committed and ends when the Delivery Gate passes. What
            happens between those two points is the delivery cycle.
          </p>
        </div>
      </section>

      {/* Board visualization */}
      <section className="border-t border-slate-800 px-6 py-14 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            The Board
          </p>
          <div className="overflow-x-auto pb-4">
            <div className="flex min-w-max items-stretch gap-0">
              {stages.map((item, i) => {
                if (item.type === "gate") {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col items-center justify-center px-2"
                    >
                      <div className="h-full w-px bg-amber-400/20" />
                      <div className="my-1 rounded border border-amber-400/30 bg-amber-950/40 px-2 py-1 text-center">
                        <p className="text-[8px] font-bold tracking-[2px] text-amber-400 uppercase whitespace-nowrap">
                          {item.label}
                        </p>
                      </div>
                      <div className="h-full w-px bg-amber-400/20" />
                    </div>
                  )
                }
                return (
                  <div key={item.id} className="flex items-center gap-0">
                    <div
                      className={`rounded-lg border px-5 py-4 ${
                        item.id === "done"
                          ? "border-amber-400/30 bg-amber-950/30"
                          : "border-slate-800 bg-[#0a0f1e]"
                      }`}
                    >
                      <p
                        className={`text-xs font-semibold whitespace-nowrap ${
                          item.id === "done"
                            ? "text-amber-400"
                            : "text-slate-300"
                        }`}
                      >
                        {item.label}
                      </p>
                      {item.role && (
                        <p className="mt-1 text-[11px] text-slate-600 whitespace-nowrap">
                          {item.role}
                        </p>
                      )}
                      {item.artifact && (
                        <p className="mt-0.5 font-mono text-[11px] text-amber-400/50 whitespace-nowrap">
                          {item.artifact}
                        </p>
                      )}
                    </div>
                    {i < stages.length - 1 &&
                      stages[i + 1]?.type !== "gate" && (
                        <div className="px-1 text-slate-500">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3 8h10M9 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                  </div>
                )
              })}
            </div>
          </div>
          <p className="mt-4 text-[10px] text-slate-500">
            Vertical lines are human gates - work cannot cross them without
            named human approval.
          </p>
        </div>
      </section>

      {/* Stage by stage */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-16">
          <p className="mb-10 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            Stage by Stage
          </p>
        </div>
        {stageItems.map((stage, i) => (
          <div
            key={stage.id}
            className={`border-b border-slate-800 px-6 py-10 md:px-16 ${
              i % 2 === 1 ? "bg-[#0a0f1e]" : ""
            }`}
          >
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex items-center gap-4">
                <h2 className="text-xl font-bold text-slate-50">
                  {stage.label}
                </h2>
                {stage.role && (
                  <span className="rounded border border-slate-700 px-2 py-0.5 text-[11px] tracking-widest text-slate-500 uppercase">
                    {stage.role}
                  </span>
                )}
                {stage.artifact && (
                  <code className="rounded bg-slate-800/60 px-2 py-0.5 text-[10px] text-amber-400">
                    {stage.artifact}
                  </code>
                )}
              </div>
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-400">
                {stage.description}
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded border border-slate-800 px-4 py-3">
                  <p className="mb-1 text-[11px] font-semibold tracking-[2px] text-slate-500 uppercase">
                    Entry
                  </p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {stage.entry}
                  </p>
                </div>
                <div className="rounded border border-slate-800 px-4 py-3">
                  <p className="mb-1 text-[11px] font-semibold tracking-[2px] text-slate-500 uppercase">
                    Exit
                  </p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {stage.exit}
                  </p>
                </div>
              </div>

              {/* Gate that follows this stage */}
              {(() => {
                const stageIndex = stages.findIndex((s) => s.id === stage.id)
                const nextGate = stages[stageIndex + 1]
                if (!nextGate || nextGate.type !== "gate") return null
                return (
                  <div className="mt-4 flex items-start gap-3 rounded-lg border border-amber-400/20 bg-amber-950/20 px-4 py-3">
                    <span className="mt-0.5 text-[11px] font-bold tracking-[2px] text-amber-400 uppercase whitespace-nowrap">
                      {nextGate.label}
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold text-amber-400/80">
                        {nextGate.gateName}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-600">
                        {nextGate.gateOwners} verify: {nextGate.gateVerifies}
                      </p>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        ))}
      </section>

      {/* Artifact chain reference */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-10 md:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
              The Artifact Chain
            </p>
            <p className="text-sm text-slate-400">
              constitution.md governs spec.md governs plan.md governs tasks.md.
              Each artifact carries a binding commitment evaluated at its gate.
            </p>
          </div>
          <a
            href="/artifacts"
            className="shrink-0 rounded border border-slate-700 px-4 py-2 text-[11px] tracking-widest text-slate-400 uppercase transition-colors hover:border-slate-500 hover:text-slate-200"
          >
            Four Artifacts →
          </a>
        </div>
      </section>

      {/* Events reference */}
      <section className="border-t border-slate-800 px-6 py-10 md:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
              Six Events
            </p>
            <p className="text-sm text-slate-400">
              Formal opportunities to inspect the artifact chain and adapt.
              Triggered by defined conditions, cadence, or both.
            </p>
          </div>
          <a
            href="/events"
            className="shrink-0 rounded border border-slate-700 px-4 py-2 text-[11px] tracking-widest text-slate-400 uppercase transition-colors hover:border-slate-500 hover:text-slate-200"
          >
            Six Events →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-16 md:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            The four human gates are defined in detail in the Gates section.
          </p>
          <div className="flex gap-3">
            <a
              href="/gates"
              className="rounded border border-slate-800 px-4 py-2 text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:border-slate-600 hover:text-slate-300"
            >
              Human Gates
            </a>
            <a
              href="/kaname-guide.pdf"
              download
              className="rounded bg-amber-400 px-4 py-2 text-[10px] font-bold tracking-widest text-[#0f172a] uppercase transition-colors hover:bg-amber-300"
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
