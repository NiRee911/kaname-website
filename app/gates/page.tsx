import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Human Gates - Kaname",
  description:
    "Four mandatory human gates in Kaname. What each gate verifies, who clears it, what happens when it fails, and why skipping a gate destroys the governance system.",
}

const gates = [
  {
    number: "1",
    name: "Specification Gate",
    precedes: "Plan stage",
    reviewers: ["Spec Owner", "Constitution Guardian"],
    requiresBoth: true,
    purpose:
      "Verify that the specification is complete and precise before technical planning begins. This is the cheapest gate to fail. A specification problem caught here costs hours. The same problem caught at Gate 4 costs days.",
    whatTheyVerify: [
      "Every selected Use Case has a defined actor, goal, successful path, variants, and failure conditions",
      "Every acceptance criterion is independently verifiable by a human - not \"system behaves correctly\" but a specific, observable outcome",
      "No acceptance criterion requires AI judgment to evaluate",
      "No Use Case assumes a technology or architectural decision that contradicts constitution.md",
      "A Task Implementer reading this Use Case cold could execute it without requesting clarification",
    ],
    onFailure:
      "Use Cases return to the Spec Owner for revision. The Constitution Guardian and Spec Owner re-review. Work stays in the Specify stage until Gate 1 passes. No implementation cost is incurred.",
    onFailurePath: "Specify stage",
    costIfMissed:
      "Specification ambiguity discovered during implementation. Task Implementers stop work, escalate to Spec Owner, implementation is revised under pressure. Every hour spent in ambiguous implementation is wasted.",
  },
  {
    number: "2",
    name: "Plan Gate",
    precedes: "Implement stage",
    reviewers: ["Plan Reviewer", "Spec Owner (coverage verification)"],
    requiresBoth: false,
    purpose:
      "Verify that the AI-generated technical plan is architecturally sound and specification-aligned before task generation and implementation begins. The Plan Reviewer approves; the Spec Owner confirms coverage.",
    whatTheyVerify: [
      "Every Use Case in scope maps to at least one named technical component",
      "The data model supports all Use Case data requirements",
      "API contracts define all inputs, outputs, and error conditions",
      "No component uses a technology prohibited by constitution.md",
      "The implementation sequence is feasible: no circular dependencies, no undefined prerequisites",
      "No architectural pattern is introduced that constitution.md has not approved",
    ],
    onFailure:
      "If architecturally unsound: AI regenerates the plan under corrected constraints. Plan Reviewer reviews again. If Use Case coverage is missing: gap is identified, AI regenerates the missing plan sections. Work stays in the Plan stage.",
    onFailurePath: "Plan stage",
    costIfMissed:
      "Architectural violations discovered mid-implementation. Code has been written against a plan that contradicts constitution.md. Rework begins. In worst cases, the data model is wrong and all tasks built on it must be redone.",
  },
  {
    number: "3",
    name: "Implementation Gate",
    precedes: "Merge",
    reviewers: ["Task Implementer"],
    requiresBoth: false,
    purpose:
      "Verify that AI-generated code satisfies the linked Use Case before it is merged into the codebase. This gate runs per task, not per delivery cycle. It may run dozens of times in a single cycle.",
    whatTheyVerify: [
      "AI output compiles and automated tests pass - necessary but not sufficient",
      "Every acceptance criterion in the linked Use Case is demonstrably met by the code",
      "No functionality was added beyond what the Use Case specifies",
      "No dependency was introduced that violates constitution.md",
      "The Task Implementer can point to specific acceptance criteria that each material code change satisfies",
    ],
    onFailure:
      "Code returns to implementation. Task Implementer re-runs the AI agent with better context or constraints. If the failure reveals genuine specification ambiguity - not an implementation error but a spec gap - the task is escalated to the Spec Owner. The Use Case may need to return through Gate 1.",
    onFailurePath: "Implement stage (or Specify if spec is the problem)",
    costIfMissed:
      "Incorrect code is merged into the codebase. Later tasks may build on incorrect foundations. Gate 4 catches this - but now the cost is end-to-end verification failure plus rework across multiple tasks, not a single task revision.",
  },
  {
    number: "4",
    name: "Delivery Gate",
    precedes: "Release",
    reviewers: ["Spec Owner"],
    requiresBoth: false,
    purpose:
      "Verify that the delivered system - as an integrated whole - satisfies all Use Cases in the current delivery cycle. A release is not authorized until this gate passes. This is the most expensive gate to fail.",
    whatTheyVerify: [
      "Every Use Case in the delivery cycle can be exercised end-to-end",
      "Each Use Case produces the outputs defined in the specification for every defined path and variant",
      "Interaction between Use Cases does not produce undefined or unspecified behavior",
      "All acceptance criteria across all Use Cases in the cycle are met by the integrated system",
      "No constitutional boundary is violated by the integrated delivery",
    ],
    onFailure:
      "Specific Use Cases return to the Review or Implement stage. If failure reveals missing specification coverage - a gap only visible in integration - Use Cases return all the way to the Specify stage. Gate 1 must be re-cleared for the affected Use Cases before implementation resumes.",
    onFailurePath: "Review stage - or back to Specify if spec is the root cause",
    costIfMissed:
      "The delivered system does not do what the specification said it would. This is not caught until production. Users encounter undefined behavior. Emergency fixes are applied without specification coverage. The next delivery cycle begins under the weight of undocumented workarounds.",
  },
]

const violations = [
  {
    title: "The deadline skip",
    description:
      'The delivery cycle is behind. Product pressure is high. "The spec looks solid - let\'s go straight to implementation." Gate 1 is skipped. Three Use Cases have ambiguous acceptance criteria. Task Implementers discover this mid-implementation, make assumptions, and continue. Gate 4 fails. The time saved at Gate 1 is spent five times over in rework.',
  },
  {
    title: "The silent merge",
    description:
      'A Task Implementer reviews the AI output briefly. Tests pass. They merge without comparing the output against each acceptance criterion in the Use Case. The code is "working" but implements the wrong variant. Gate 4 catches it - after all other tasks in the cycle have been built on this foundation.',
  },
  {
    title: "The consensus override",
    description:
      'The Constitution Guardian flags a constitutional violation in a task output. The team discusses it. Three people agree the violation is minor. The Constitution Guardian is overruled by consensus. The veto is not honored. The architectural boundary is now breached. The next delivery cycle builds on the breach. Remediation, when it comes, is proportionally more expensive.',
  },
]

export default function GatesPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50">
      <Nav />

      {/* Hero */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[4px] text-purple-300 uppercase">
            Human Governance
          </p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-[-2px] text-slate-50 md:text-6xl">
            Four Human Gates
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-400">
            Kaname defines four mandatory gates - decision points at which human
            judgment must approve before work advances. No AI agent can carry
            work across a gate boundary. Gates cannot be bypassed by any role,
            including the roles that own the upstream artifacts.
          </p>
          <div className="rounded-lg border border-purple-300/20 bg-purple-950/20 p-5 max-w-xl">
            <p className="text-sm leading-relaxed text-slate-400">
              Gates are not bureaucratic checkpoints. They are the mechanism by
              which human intent is preserved across generations of AI-generated
              code. An optional gate is not a gate - it is a suggestion.
            </p>
          </div>
        </div>
      </section>

      {/* Cost of failure gradient */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-12 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            Cost of Failure
          </p>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-400">
            The cost of catching a problem grows at each gate. Every gate that
            passes without catching a problem multiplies the cost when the
            problem is eventually found.
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {[
              { label: "Gate 1", cost: "Hours", color: "border-emerald-900/40 bg-emerald-950/20 text-emerald-400/70" },
              { label: "Gate 2", cost: "Half a day", color: "border-yellow-900/40 bg-yellow-950/20 text-yellow-400/70" },
              { label: "Gate 3", cost: "A day", color: "border-orange-900/40 bg-orange-950/20 text-orange-400/70" },
              { label: "Gate 4", cost: "Days to weeks", color: "border-red-900/40 bg-red-950/20 text-red-400/70" },
              { label: "No gate", cost: "Production incident", color: "border-red-700/50 bg-red-900/20 text-red-300/80" },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-lg border p-4 text-center ${item.color}`}
              >
                <p className="mb-1 text-[9px] font-semibold tracking-widest uppercase opacity-80">
                  {item.label}
                </p>
                <p className="text-xs font-medium">{item.cost}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] text-slate-700">
            These are relative costs for catching the same class of problem at
            different stages. Problems caught in production carry additional
            costs: user impact, emergency response, and fixes applied without
            specification coverage.
          </p>
        </div>
      </section>

      {/* Gate sequence */}
      <section className="border-t border-slate-800 px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max items-center gap-0">
              {[
                { type: "stage", label: "Specify" },
                { type: "gate", label: "Gate 1", sub: "Spec Gate" },
                { type: "stage", label: "Plan" },
                { type: "gate", label: "Gate 2", sub: "Plan Gate" },
                { type: "stage", label: "Implement" },
                { type: "gate", label: "Gate 3", sub: "Impl Gate" },
                { type: "stage", label: "Review" },
                { type: "gate", label: "Gate 4", sub: "Delivery Gate" },
                { type: "stage", label: "Done" },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  {item.type === "gate" ? (
                    <div className="flex flex-col items-center px-1.5">
                      <div className="rounded border border-purple-300/40 bg-purple-950/40 px-2.5 py-2 text-center">
                        <p className="text-[9px] font-bold tracking-widest text-purple-300 uppercase whitespace-nowrap">
                          {item.label}
                        </p>
                        <p className="text-[8px] text-purple-300/50 whitespace-nowrap">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-0">
                      <div className={`rounded border border-slate-800 px-4 py-3 ${item.label === "Done" ? "border-purple-300/20 bg-purple-950/20" : "bg-[#0a0f1e]"}`}>
                        <p className={`text-xs font-medium whitespace-nowrap ${item.label === "Done" ? "text-purple-300" : "text-slate-400"}`}>
                          {item.label}
                        </p>
                      </div>
                      {i < 8 && (
                        <svg className="text-slate-800" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-[10px] text-slate-700">
            Gates run in sequence. Gate 3 cannot be cleared before Gate 2. Work
            does not skip stages.
          </p>
        </div>
      </section>

      {/* Gate deep-dives */}
      <div className="border-t border-slate-800">
        {gates.map((gate, i) => (
          <section
            key={gate.number}
            className={`border-b border-slate-800 px-6 py-16 md:px-16 md:py-20 ${
              i % 2 === 1 ? "bg-[#0a0f1e]" : ""
            }`}
          >
            <div className="mx-auto max-w-5xl">
              {/* Header */}
              <div className="mb-8 flex flex-wrap items-baseline gap-3">
                <span className="text-4xl font-extrabold tracking-[-2px] text-purple-300/30">
                  {gate.number}
                </span>
                <h2 className="text-2xl font-bold tracking-[-0.5px] text-slate-50 md:text-3xl">
                  {gate.name}
                </h2>
              </div>

              {/* Reviewers */}
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-[9px] font-semibold tracking-[2px] text-slate-700 uppercase">
                  Reviewers:
                </span>
                {gate.reviewers.map((r) => (
                  <span
                    key={r}
                    className="rounded border border-slate-800 px-2 py-0.5 text-[10px] text-slate-400"
                  >
                    {r}
                  </span>
                ))}
                {gate.requiresBoth && (
                  <span className="rounded border border-purple-300/20 bg-purple-950/20 px-2 py-0.5 text-[9px] text-purple-300/70">
                    Both must approve
                  </span>
                )}
              </div>

              {/* Purpose */}
              <blockquote className="mb-10 border-l-2 border-purple-300 pl-6">
                <p className="text-base leading-relaxed text-slate-300">
                  {gate.purpose}
                </p>
              </blockquote>

              <div className="grid gap-8 md:grid-cols-2">
                {/* What they verify */}
                <div>
                  <p className="mb-3 text-[9px] font-semibold tracking-[3px] text-slate-600 uppercase">
                    What they verify
                  </p>
                  <ul className="space-y-2.5">
                    {gate.whatTheyVerify.map((item, j) => (
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

                {/* On failure */}
                <div className="space-y-3">
                  <div className="rounded-lg border border-slate-800 p-4">
                    <p className="mb-2 text-[9px] font-semibold tracking-[2px] text-slate-700 uppercase">
                      If this gate fails
                    </p>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {gate.onFailure}
                    </p>
                    <p className="mt-2 text-[9px] text-slate-700">
                      Returns to: {gate.onFailurePath}
                    </p>
                  </div>
                  <div className="rounded-lg border border-red-900/30 bg-red-950/20 p-4">
                    <p className="mb-2 text-[9px] font-semibold tracking-[2px] text-red-400/70 uppercase">
                      If this gate is skipped
                    </p>
                    <p className="text-sm leading-relaxed text-slate-500 italic">
                      {gate.costIfMissed}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Gate violations */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            Gate Violations
          </p>
          <h2 className="mb-6 text-2xl font-bold tracking-[-0.5px] text-slate-50">
            How gates get skipped
          </h2>
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-slate-400">
            Gate violations rarely look like violations in the moment. They look
            like pragmatism. They look like moving fast. The consequences arrive
            later, compounded.
          </p>
          <div className="space-y-4">
            {violations.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border border-red-900/20 bg-red-950/10 p-5"
              >
                <p className="mb-2 text-sm font-semibold text-slate-300">
                  {v.title}
                </p>
                <p className="text-sm leading-relaxed text-slate-500">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constitutional veto */}
      <section className="border-t border-slate-800 px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
            Beyond the Four Gates
          </p>
          <h2 className="mb-6 text-2xl font-bold tracking-[-0.5px] text-slate-50">
            The Constitutional Veto
          </h2>
          <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-400">
            The four gates are stage transitions. The Constitution Guardian's
            veto is continuous - it operates at any point in the delivery cycle,
            independent of gate sequence. If the Constitution Guardian identifies
            a constitutional violation in any artifact or any AI output at any
            stage, they may halt work.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-[#0a0f1e] p-5">
              <p className="mb-2 text-[9px] font-semibold tracking-[2px] text-slate-600 uppercase">
                The veto is absolute
              </p>
              <p className="text-sm leading-relaxed text-slate-500">
                The Constitution Guardian's veto cannot be overruled by any
                other role, by team consensus, or by schedule pressure. If the
                veto can be overruled, it is not a veto - it is an opinion.
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-[#0a0f1e] p-5">
              <p className="mb-2 text-[9px] font-semibold tracking-[2px] text-slate-600 uppercase">
                The veto is specific
              </p>
              <p className="text-sm leading-relaxed text-slate-500">
                A veto names the constitutional clause being violated and the
                specific artifact or output that violates it. "I don't like
                this" is not a veto. "This API design violates the security
                boundary defined in constitution.md section 3" is a veto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-[#0a0f1e] px-6 py-16 md:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            All five roles, gate ownerships, and accountability boundaries are
            in the full guide.
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
