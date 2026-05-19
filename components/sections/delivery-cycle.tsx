type StepType = "start" | "step" | "gate" | "repeat"

interface CycleStep {
  id: string
  type: StepType
  label: string
  description: string
}

const steps: CycleStep[] = [
  {
    id: "step-1",
    type: "start",
    label: "1",
    description:
      "Spec Owner authors a specification that precisely defines system behavior.",
  },
  {
    id: "step-2",
    type: "step",
    label: "2",
    description: "Spec-Ready Use Cases are selected for the delivery cycle.",
  },
  {
    id: "gate-1",
    type: "gate",
    label: "3",
    description:
      "Specification Gate: human judgment approves selected Use Cases before technical planning begins.",
  },
  {
    id: "step-4",
    type: "step",
    label: "4",
    description:
      "AI agents generate a technical plan; the Plan Reviewer approves it before tasks are generated.",
  },
  {
    id: "step-5",
    type: "step",
    label: "5",
    description:
      "Task Implementers pull tasks and verify AI-generated code against the specification at each merge.",
  },
  {
    id: "gate-4",
    type: "gate",
    label: "6",
    description:
      "Delivery Gate: the system is verified against all Use Cases before release.",
  },
  {
    id: "repeat",
    type: "repeat",
    label: "↺",
    description:
      "Repeat. Steps 2-7 constitute one delivery cycle, scope-defined, not time-boxed.",
  },
]

function StepMarker({ type, label }: { type: StepType; label: string }) {
  if (type === "start") {
    return (
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-300 text-xs font-bold text-[#0f172a]">
        {label}
      </div>
    )
  }
  if (type === "gate" || type === "repeat") {
    return (
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-purple-300/40 bg-purple-300/10 text-xs font-bold text-purple-300">
        {label}
      </div>
    )
  }
  return (
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-slate-700 bg-[#0a0f1e] text-xs font-bold text-slate-500">
      {label}
    </div>
  )
}

export function DeliveryCycle() {
  return (
    <section className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-10 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
          The Delivery Cycle · 7 Steps
        </p>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={step.id}>
              <div className="flex items-start gap-4">
                <StepMarker type={step.type} label={step.label} />
                <p
                  className={`pt-1 text-sm leading-relaxed ${
                    step.type === "gate" || step.type === "repeat"
                      ? "text-purple-300"
                      : "text-slate-400"
                  }`}
                >
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="ml-4 h-5 w-px bg-slate-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
