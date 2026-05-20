import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Team - Kaname",
  description:
    "Five roles, five accountabilities. How the Kaname team is structured and how each role governs the delivery system.",
}

const roles = [
  {
    number: "01",
    name: "Constitution Guardian",
    artifact: "constitution.md",
    commitment: "Technical Contract",
    gate: "Gate 1",
    oneLiner:
      "Accountable for the integrity of the system's architectural, security, and quality boundaries.",
    fullDescription:
      "The Constitution Guardian defines what the system may and may not do, independent of any specific feature or delivery cycle. Their authority is not subject to stakeholder pressure, schedule urgency, or team consensus. When the Constitution Guardian vetoes an implementation, the veto stands.",
    accountableFor: [
      "Authoring and maintaining constitution.md",
      "Reviewing AI-generated output for constitutional compliance",
      "Approving all changes to constitutional constraints",
      "Vetoing implementations that violate architectural or security boundaries",
      "Jointly clearing Gate 1 alongside the Spec Owner",
    ],
    notAccountableFor: [
      "Authoring spec.md or deciding what features to build - that is the Spec Owner's domain",
      "Generating or approving plan.md - that is the Plan Reviewer",
      "Daily board management or WIP enforcement - that is the Delivery Coach",
      "Implementation - the Constitution Guardian does not write code",
    ],
    events: ["Spec Review Session", "Constitution Review (facilitates)", "Plan Review"],
    note:
      "The Constitution Guardian is one person. Others may propose constitutional changes. Only the Constitution Guardian ratifies them.",
  },
  {
    number: "02",
    name: "Spec Owner",
    artifact: "spec.md",
    commitment: "Behavioral Intent",
    gate: "Gate 1 + Gate 4",
    oneLiner:
      "Accountable for the completeness and precision of behavioral specifications.",
    fullDescription:
      "The Spec Owner translates stakeholder intent into a form that both humans and AI agents can act on without ambiguity. They are the bridge between what stakeholders want and what the team builds. A specification that requires clarification during implementation is an incomplete specification - and that is a Spec Owner failure, not an implementation failure.",
    accountableFor: [
      "Authoring and maintaining spec.md and all Use Cases",
      "Ensuring each Use Case defines complete inputs, outputs, variants, and acceptance criteria",
      "Reviewing AI-generated output for specification alignment",
      "Approving specification changes before implementation proceeds",
      "Jointly clearing Gate 1 with the Constitution Guardian",
      "Performing end-to-end verification of all Use Cases at Gate 4",
      "Facilitating Spec Review Sessions and Delivery Reviews",
    ],
    notAccountableFor: [
      "Technical architecture decisions - those belong to the Plan Reviewer",
      "Implementation - the Spec Owner does not execute tasks",
      "Constitutional boundaries - those belong to the Constitution Guardian",
      "Board health and WIP limits - those belong to the Delivery Coach",
    ],
    events: [
      "Spec Review Session (facilitates)",
      "Queue Replenishment",
      "Plan Review",
      "Delivery Review (facilitates)",
    ],
    note:
      "Stakeholders may express intent. The Spec Owner determines how that intent is encoded. This distinction is what makes the specification authoritative.",
  },
  {
    number: "03",
    name: "Plan Reviewer",
    artifact: "plan.md",
    commitment: "Architecture Alignment",
    gate: "Gate 2",
    oneLiner:
      "Accountable for the architectural soundness of the AI-generated technical plan.",
    fullDescription:
      "The Plan Reviewer bridges behavioral intent and technical implementation. They do not author the plan - the AI generates it from the specification. The Plan Reviewer determines whether what the AI generated is acceptable: architecturally sound, constitutionally compliant, and complete enough for implementation to begin without ambiguity.",
    accountableFor: [
      "Reviewing AI-generated plan.md, data model, and API contracts",
      "Identifying architectural risks before implementation begins",
      "Verifying that the technical plan conforms to constitutional constraints",
      "Approving the plan before tasks are generated and pulled",
      "Clearing Gate 2",
    ],
    notAccountableFor: [
      "Authoring plan.md - the AI generates it from spec.md",
      "Writing specifications - that is the Spec Owner",
      "Implementing code - that is the Task Implementer",
      "Deciding what features to build - that is the Spec Owner and stakeholders",
      "Gate 1 or Gate 4 - those belong to the Spec Owner and Constitution Guardian",
    ],
    events: ["Plan Review (facilitates)", "Spec Review Session (when delivery cycle is being prepared)"],
    note:
      "The Plan Reviewer does not accept a plan that is architecturally unsound simply because the specification asked for it. If the spec requires something constitutionally prohibited, the plan cannot accommodate it - and both artifacts return for revision.",
  },
  {
    number: "04",
    name: "Task Implementer",
    artifact: "tasks.md",
    commitment: "Implementation Completeness",
    gate: "Gate 3",
    oneLiner:
      "Accountable for executing work using AI coding assistants within the constraints set by the specification and constitution.",
    fullDescription:
      "The Task Implementer is the primary interface with AI execution tooling. They pull tasks from the board as capacity allows, run AI agents with the appropriate artifact context, and verify that the AI-generated output satisfies the linked Use Case before marking the task done. They do not resolve specification ambiguity - they surface it.",
    accountableFor: [
      "Pulling tasks according to WIP limits",
      "Operating AI agents with the correct Use Case and plan component context per task",
      "Verifying AI-generated code against the relevant Use Case acceptance criteria",
      "Flagging specification ambiguities discovered during implementation",
      "Clearing Gate 3 for each task before marking it done",
    ],
    notAccountableFor: [
      "Resolving specification ambiguity unilaterally - ambiguity returns to the Spec Owner",
      "Architectural decisions - those belong to the Plan Reviewer",
      "Constitutional compliance judgments - those belong to the Constitution Guardian",
      "Pulling more tasks than WIP limits allow, even when blocked",
    ],
    events: ["Spec Review Session (at least one attends)", "Delivery Review"],
    note:
      "Task Implementers do not mark a task done because the AI finished generating code. They mark it done after reviewing the AI output against the Use Case acceptance criteria. These are different things.",
  },
  {
    number: "05",
    name: "Delivery Coach",
    artifact: null,
    commitment: null,
    gate: "All gates (oversight)",
    oneLiner:
      "Accountable for the health of the delivery system: policies, WIP limits, gate criteria, and board state.",
    fullDescription:
      "The Delivery Coach owns the delivery system itself - not what the system produces, but how it operates. In AI-augmented delivery, this role is the primary guardian of human gates: the speed of AI generation creates constant pressure to move faster and skip governance. The Delivery Coach holds that line. They do not make content decisions. Specification, architecture, and implementation remain with the roles that own them.",
    accountableFor: [
      "Facilitating the Flow Review and Queue Replenishment",
      "Ensuring all Kaname events are held as defined",
      "Ensuring all gates are exercised without exception",
      "Monitoring board health, WIP limits, and blocked items between events",
      "Surfacing impediments and escalating those that cannot be resolved within the team",
      "Coaching team members on Kaname practices and values",
    ],
    notAccountableFor: [
      "Specification content - that belongs to the Spec Owner",
      "Architectural decisions - those belong to the Plan Reviewer",
      "Constitutional boundaries - those belong to the Constitution Guardian",
      "Implementation quality - that belongs to Task Implementers and the gate system",
      "Clearing any specific gate - gates are owned by the roles defined for them",
    ],
    events: [
      "Queue Replenishment (facilitates)",
      "Flow Review (facilitates)",
      "All events (oversight and attendance)",
    ],
    note:
      "The Delivery Coach has no primary artifact. This is intentional. Their accountability is the system as a whole, which requires independence from any single artifact's concerns.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50">
      <Nav />

      {/* Hero */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[4px] text-purple-300 uppercase">
            Kaname Team
          </p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-[-2px] text-slate-50 md:text-6xl">
            Five Roles
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-400">
            Kaname operates through five named roles. Four own a primary
            artifact and one layer of the delivery governance chain. The fifth
            owns the delivery system itself. No accountability may go
            unassigned.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="rounded border border-slate-800 px-3 py-1.5 text-[10px] text-slate-500">
              Roles are not job titles
            </div>
            <div className="rounded border border-slate-800 px-3 py-1.5 text-[10px] text-slate-500">
              One person may hold multiple roles
            </div>
            <div className="rounded border border-purple-300/20 bg-purple-950/20 px-3 py-1.5 text-[10px] text-purple-300/70">
              Accountability cannot be shared or left unassigned
            </div>
          </div>
        </div>
      </section>

      {/* Role overview grid */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-12 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            At a Glance
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {roles.slice(0, 4).map((role) => (
              <div
                key={role.number}
                className="rounded-lg border border-slate-800 bg-[#0f172a] p-5"
              >
                <div className="mb-3 flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold tracking-widest text-purple-300/50">
                    {role.number}
                  </span>
                  {role.artifact && (
                    <code className="rounded bg-slate-800/60 px-1.5 py-0.5 text-[9px] text-purple-300/70">
                      {role.artifact}
                    </code>
                  )}
                </div>
                <p className="mb-1.5 font-semibold text-slate-50">
                  {role.name}
                </p>
                <p className="text-xs leading-relaxed text-slate-500">
                  {role.oneLiner}
                </p>
                <p className="mt-3 text-[9px] text-slate-700">
                  Owns: {role.gate}
                </p>
              </div>
            ))}
            <div className="col-span-full rounded-lg border border-purple-300/20 bg-[#0f172a] p-5">
              <div className="mb-3 flex items-start justify-between">
                <span className="font-mono text-xs font-semibold tracking-widest text-purple-300/50">
                  {roles[4].number}
                </span>
                <span className="text-[9px] font-semibold tracking-[2px] text-purple-300/50 uppercase">
                  No primary artifact
                </span>
              </div>
              <p className="mb-1.5 font-semibold text-slate-50">
                {roles[4].name}
              </p>
              <p className="text-xs leading-relaxed text-slate-500">
                {roles[4].oneLiner}
              </p>
              <p className="mt-3 text-[9px] text-slate-700">
                Owns: {roles[4].gate}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role deep-dives */}
      <div className="border-t border-slate-800">
        {roles.map((role, i) => (
          <section
            key={role.number}
            className={`border-b border-slate-800 px-6 py-16 md:px-16 md:py-20 ${
              i % 2 === 1 ? "bg-[#0a0f1e]" : ""
            }`}
          >
            <div className="mx-auto max-w-5xl">
              {/* Header */}
              <div className="mb-8 flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-xs font-semibold tracking-widest text-purple-300/50">
                  {role.number}
                </span>
                <h2 className="text-2xl font-bold tracking-[-0.5px] text-slate-50 md:text-3xl">
                  {role.name}
                </h2>
                {role.artifact && (
                  <code className="rounded bg-slate-800/60 px-2 py-0.5 text-[11px] text-purple-300">
                    {role.artifact}
                  </code>
                )}
              </div>

              {/* Description */}
              <blockquote className="mb-10 border-l-2 border-purple-300 pl-6">
                <p className="text-base leading-relaxed text-slate-300">
                  {role.fullDescription}
                </p>
              </blockquote>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Accountable for */}
                <div>
                  <p className="mb-3 text-[9px] font-semibold tracking-[3px] text-slate-600 uppercase">
                    Accountable for
                  </p>
                  <ul className="space-y-2">
                    {role.accountableFor.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not accountable for */}
                <div>
                  <p className="mb-3 text-[9px] font-semibold tracking-[3px] text-slate-600 uppercase">
                    Not accountable for
                  </p>
                  <ul className="space-y-2">
                    {role.notAccountableFor.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-slate-500"
                      >
                        <span className="mt-2 h-px w-3 shrink-0 bg-slate-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Events + Note */}
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-800 bg-[#0a0f1e] p-4">
                  <p className="mb-2 text-[9px] font-semibold tracking-[2px] text-slate-700 uppercase">
                    Events
                  </p>
                  <ul className="space-y-1">
                    {role.events.map((e, j) => (
                      <li key={j} className="text-xs text-slate-500">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-purple-300/10 bg-purple-950/10 p-4">
                  <p className="mb-2 text-[9px] font-semibold tracking-[2px] text-slate-700 uppercase">
                    Key principle
                  </p>
                  <p className="text-xs leading-relaxed text-slate-500 italic">
                    {role.note}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Role compression */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            Small Teams
          </p>
          <h2 className="mb-6 text-2xl font-bold tracking-[-0.5px] text-slate-50">
            Role Compression
          </h2>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-400">
            Kaname roles are not job titles. One person may hold multiple roles.
            What may not be compressed is accountability - each artifact and the
            delivery system must have a named owner, even if that owner holds
            two or three roles simultaneously.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-[#0f172a] p-5">
              <p className="mb-3 text-[10px] font-semibold tracking-[2px] text-slate-400 uppercase">
                What can be compressed
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700" />
                  Constitution Guardian + Plan Reviewer: both require architectural judgment and pair naturally
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700" />
                  Spec Owner + a stakeholder representative: common in product-led teams
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700" />
                  Task Implementer + any other role: implementation is a parallel track to governance
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-900/30 bg-red-950/20 p-5">
              <p className="mb-3 text-[10px] font-semibold tracking-[2px] text-red-400/70 uppercase">
                What cannot be compressed
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-900/60" />
                  Spec Owner + sole Task Implementer with no other reviewer: Gate 3 becomes self-review. Self-review is not governance.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-900/60" />
                  Accountability itself: if no one is named for a role, the role does not exist and the team is not running Kaname.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 px-6 py-16 md:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Each role exercises its accountability through the human gates.
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
