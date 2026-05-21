import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events - Kaname",
  description:
    "Six events that keep the Kaname delivery system healthy. Each is a formal opportunity to inspect the artifact chain and adapt.",
}

const events = [
  {
    index: "01",
    name: "Spec Review Session",
    trigger: "Regular cadence",
    facilitator: "Spec Owner",
    attendance: "Constitution Guardian and at least one Task Implementer. When a delivery cycle is being prepared: Plan Reviewer and stakeholders also attend.",
    purpose:
      "Advance Use Cases in the specification toward Spec-Ready quality and maintain a sufficient queue ahead of Queue Replenishment. The Spec Owner receives structured feedback on in-progress Use Cases, resolves open questions, and agrees with stakeholders on what to specify next. Running at a regular cadence, it prevents the Spec Owner from becoming a bottleneck upstream of implementation.",
    dualRole:
      "When a delivery cycle is about to begin, the Spec Review Session additionally serves as the formal review at which Use Cases selected for Queue Replenishment are confirmed complete and constitutionally aligned.",
    output:
      "Use Cases assessed. Next Use Cases to specify agreed. When serving as a pre-delivery review: selected Use Cases confirmed Spec-Ready or blocking items recorded.",
  },
  {
    index: "02",
    name: "Queue Replenishment",
    trigger: "When Spec-Ready queue is insufficient to sustain the next delivery cycle, or at regular cadence",
    facilitator: "Delivery Coach",
    attendance: "Spec Owner and stakeholders provide priority input. Only Use Cases confirmed Spec-Ready through the Spec Review Session are eligible.",
    purpose:
      "Select Spec-Ready Use Cases for the next delivery cycle and commit them toward the Specification Gate. Queue Replenishment does not include estimation, technical planning, or architectural discussion.",
    dualRole: null,
    output: "Use Cases committed to the current delivery cycle.",
  },
  {
    index: "03",
    name: "Plan Review",
    trigger: "After AI generates plan.md",
    facilitator: "Plan Reviewer",
    attendance: "Spec Owner and Constitution Guardian.",
    purpose:
      "Inspect the AI-generated technical plan for architectural soundness and alignment with the specification and constitution. The Plan Review concludes when the plan is approved or when required revisions are recorded.",
    dualRole: null,
    output: "Plan approved or required revisions recorded.",
  },
  {
    index: "04",
    name: "Delivery Review",
    trigger: "After Gate 4 passes - not calendar-driven",
    facilitator: "Spec Owner",
    attendance: "Stakeholders, Task Implementers, and the Delivery Coach.",
    purpose:
      "Inspect the delivered system against its Use Cases and gather stakeholder feedback before the next delivery cycle begins. Each implemented Use Case is presented to stakeholders, who assess whether the delivered behavior matches their intent. Feedback that reveals gaps, new needs, or changed priorities is captured as input for the next Spec Review Session. The Delivery Review does not include technical planning or architectural discussion.",
    dualRole: null,
    output:
      "All Use Cases reviewed. Stakeholder feedback recorded. Delivery cycle formally closed.",
  },
  {
    index: "05",
    name: "Flow Review",
    trigger: "Regular cadence, when blocked items accumulate, or when lead time increases significantly",
    facilitator: "Delivery Coach",
    attendance: "Full team.",
    purpose:
      "Inspect the system of work - not individual work items - to identify policy changes that would improve delivery flow. The full team inspects the board, lead time distribution, and blocked items. The output is a change to WIP limits, gate criteria, or work handling policies - not an action item for an individual.",
    dualRole: null,
    output:
      "Policy change ratified, or explicit record that no change is warranted.",
  },
  {
    index: "06",
    name: "Constitution Review",
    trigger: "Proposed amendment, architectural findings from a Delivery Review, or scheduled post-delivery inspection",
    facilitator: "Constitution Guardian",
    attendance: "Constitutional amendments require the explicit ratification of the Constitution Guardian.",
    purpose:
      "Inspect constitution.md for completeness and continued relevance, and to ratify proposed amendments. It concludes when the proposed change is ratified, revised, or rejected, and constitution.md is updated accordingly.",
    dualRole: null,
    output: "constitution.md updated. Amendment ratified, revised, or rejected.",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50">
      <Nav />

      {/* Hero */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[4px] text-amber-400 uppercase">
            Kaname Events
          </p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-[-2px] text-slate-50 md:text-6xl">
            Six Events
          </h1>
          <p className="mb-4 max-w-xl text-base leading-relaxed text-slate-400">
            Events are formal opportunities to inspect the artifact chain and
            adapt. They are triggered by defined conditions, by regular cadence,
            or both.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-slate-500">
            Failure to hold events as defined results in specification drift,
            unreviewed architectural decisions, or accumulated delivery debt. An
            event that is optional is not an event - it is a suggestion.
          </p>
        </div>
      </section>

      {/* Event overview grid */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-12 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            At a Glance
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {events.map((e) => (
              <div
                key={e.index}
                className="rounded-lg border border-slate-800 bg-[#0f172a] p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold tracking-widest text-amber-400/50">
                    {e.index}
                  </span>
                  <span className="text-[10px] text-slate-600">
                    {e.facilitator}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-50">{e.name}</p>
                <p className="mt-1 text-[10px] leading-relaxed text-slate-600">
                  {e.trigger}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event deep-dives */}
      <div className="border-t border-slate-800">
        {events.map((e, i) => (
          <section
            key={e.index}
            className={`border-b border-slate-800 px-6 py-16 md:px-16 md:py-20 ${
              i % 2 === 1 ? "bg-[#0a0f1e]" : ""
            }`}
          >
            <div className="mx-auto max-w-5xl">
              {/* Header */}
              <div className="mb-8 flex flex-wrap items-baseline gap-4">
                <span className="font-mono text-xs font-semibold tracking-widest text-amber-400/50">
                  {e.index}
                </span>
                <h2 className="text-2xl font-bold tracking-[-0.5px] text-slate-50 md:text-3xl">
                  {e.name}
                </h2>
              </div>

              {/* Meta */}
              <div className="mb-8 flex flex-wrap gap-2">
                <span className="rounded border border-slate-800 px-2 py-0.5 text-[10px] text-slate-500">
                  Facilitator: {e.facilitator}
                </span>
                <span className="rounded border border-amber-400/20 bg-amber-950/20 px-2 py-0.5 text-[10px] text-amber-400/70">
                  Trigger: {e.trigger}
                </span>
              </div>

              {/* Purpose */}
              <blockquote className="mb-8 border-l-2 border-amber-400 pl-6">
                <p className="text-base leading-relaxed text-slate-300">
                  {e.purpose}
                </p>
              </blockquote>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Attendance */}
                <div className="rounded-lg border border-slate-800 bg-[#0a0f1e] p-4">
                  <p className="mb-2 text-[11px] font-semibold tracking-[2px] text-slate-500 uppercase">
                    Attendance
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {e.attendance}
                  </p>
                </div>

                {/* Output */}
                <div className="rounded-lg border border-slate-800 bg-[#0a0f1e] p-4">
                  <p className="mb-2 text-[11px] font-semibold tracking-[2px] text-slate-500 uppercase">
                    Output
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {e.output}
                  </p>
                </div>
              </div>

              {/* Dual role note */}
              {e.dualRole && (
                <div className="mt-4 rounded-lg border border-amber-400/20 bg-amber-950/20 p-4">
                  <p className="mb-1 text-[11px] font-semibold tracking-[2px] text-amber-400/70 uppercase">
                    Additional role
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {e.dualRole}
                  </p>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-16 md:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Events keep the delivery system healthy between gate transitions.
          </p>
          <div className="flex gap-3">
            <a
              href="/delivery-cycle"
              className="rounded border border-slate-800 px-4 py-2 text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:border-slate-600 hover:text-slate-300"
            >
              Delivery Cycle
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
