const gates = [
  {
    number: "1",
    name: "Specification",
    purpose:
      "Verify the specification is complete and constitutionally aligned before technical planning begins.",
  },
  {
    number: "2",
    name: "Plan",
    purpose:
      "Verify the AI-generated plan is architecturally sound and covers all Use Cases in scope.",
  },
  {
    number: "3",
    name: "Implementation",
    purpose:
      "Verify AI-generated code satisfies the linked Use Case before merging into the codebase.",
  },
  {
    number: "4",
    name: "Delivery",
    purpose:
      "Verify the delivered system satisfies all Use Cases in the current cycle before release.",
  },
]

export function Gates() {
  return (
    <section className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-10 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
          Four Human Gates
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {gates.map((gate) => (
            <div
              key={gate.number}
              className="rounded-lg border border-slate-800 bg-[#0a0f1e] p-4"
            >
              <p className="mb-2 text-2xl font-bold text-purple-300">
                {gate.number}
              </p>
              <p className="mb-1 text-xs font-semibold text-slate-50">
                {gate.name} Gate
              </p>
              <p className="text-[10px] leading-relaxed text-slate-600">
                {gate.purpose}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs italic text-slate-600">
          No AI output advances through the delivery system without passing a
          human gate.
        </p>
      </div>
    </section>
  )
}
