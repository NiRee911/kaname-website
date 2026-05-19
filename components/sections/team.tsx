interface Role {
  number: string
  title: string
  artifact: string | null
  description: string
  fullWidth: boolean
}

const roles: Role[] = [
  {
    number: "01",
    title: "Constitution Guardian",
    artifact: "constitution.md",
    description:
      "Accountable for the integrity of architectural, security, and quality boundaries.",
    fullWidth: false,
  },
  {
    number: "02",
    title: "Spec Owner",
    artifact: "spec.md",
    description:
      "Accountable for the completeness and precision of behavioral specifications.",
    fullWidth: false,
  },
  {
    number: "03",
    title: "Plan Reviewer",
    artifact: "plan.md",
    description:
      "Accountable for the architectural soundness of the AI-generated technical plan.",
    fullWidth: false,
  },
  {
    number: "04",
    title: "Task Implementer",
    artifact: "tasks.md",
    description:
      "Accountable for executing work using AI coding assistants within specification constraints.",
    fullWidth: false,
  },
  {
    number: "05",
    title: "Delivery Coach",
    artifact: null,
    description:
      "Accountable for the health of the delivery system — policies, WIP limits, gate criteria, and board state. The primary guardian of human gates in AI-augmented delivery.",
    fullWidth: true,
  },
]

export function Team() {
  const standard = roles.filter((r) => !r.fullWidth)
  const coach = roles.find((r) => r.fullWidth)
  if (!coach) return null

  return (
    <section className="border-y border-slate-800 px-6 py-20 md:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-10 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
          The Team · 5 Roles
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {standard.map((role) => (
            <div
              key={role.number}
              className="rounded-lg border border-slate-800 bg-[#0a0f1e] p-5"
            >
              <p className="mb-2 text-[9px] font-semibold tracking-[2px] text-purple-300 uppercase">
                Role {role.number}
              </p>
              <p className="mb-0.5 text-sm font-semibold text-slate-50">
                {role.title}
              </p>
              {role.artifact && (
                <p className="mb-2 font-mono text-[10px] text-slate-600">
                  {role.artifact}
                </p>
              )}
              <p className="text-xs leading-relaxed text-slate-500">
                {role.description}
              </p>
            </div>
          ))}
          <div className="col-span-full rounded-lg border border-purple-300/20 bg-[#0a0f1e] p-5">
            <p className="mb-2 text-[9px] font-semibold tracking-[2px] text-purple-300 uppercase">
              Role {coach.number}
            </p>
            <p className="mb-2 text-sm font-semibold text-slate-50">
              {coach.title}
            </p>
            <p className="text-xs leading-relaxed text-slate-500">
              {coach.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
