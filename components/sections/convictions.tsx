const convictions = [
  {
    numeral: "I",
    title: "Specification Primacy",
    body: "The specification is the source of truth. Code is a derived, regenerable output. When specification and code conflict, the specification governs.",
  },
  {
    numeral: "II",
    title: "Flow over Cadence",
    body: "Work moves continuously through defined stages governed by explicit policies. Time-boxed iterations are not required. Work is pulled, not pushed.",
  },
  {
    numeral: "III",
    title: "Human Governance over AI Autonomy",
    body: "AI generates code at speed and scale. Human judgment governs intent, architecture, and acceptance. No AI output advances without passing a human gate.",
  },
]

export function Convictions() {
  return (
    <section className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-10 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
          Three Convictions
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {convictions.map((c) => (
            <div
              key={c.numeral}
              className="rounded-lg border border-slate-800 bg-[#0a0f1e] p-5"
            >
              <p className="mb-3 text-xl font-light text-purple-300">
                {c.numeral}
              </p>
              <h3 className="mb-2 text-sm font-semibold text-slate-50">
                {c.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-500">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-right">
          <a
            href="/convictions"
            className="text-[10px] font-semibold tracking-[3px] text-purple-300/50 uppercase transition-colors hover:text-purple-300"
          >
            Explore in depth →
          </a>
        </div>
      </div>
    </section>
  )
}
