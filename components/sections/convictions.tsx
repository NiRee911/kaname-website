const convictions = [
  {
    numeral: "I",
    title: "Specification Primacy",
    body: "The specification is the source of truth. Code is a derived, regenerable output. Specifications endure; implementations are replaced. When specification and code conflict, the specification governs.",
  },
  {
    numeral: "II",
    title: "Flow over Cadence",
    body: "Work moves continuously through defined stages governed by explicit policies - stated rules about how work enters, advances, and exits each stage. Time-boxed iterations are not required. Work is pulled, not pushed.",
  },
  {
    numeral: "III",
    title: "Human Governance over AI Autonomy",
    body: "Artificial intelligence generates code at speed and scale. Human judgment governs intent, architecture, and acceptance. No AI output advances without passing a human gate.",
  },
]

export function Convictions() {
  return (
    <section className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-10 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
          Three Convictions
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {convictions.map((c) => (
            <div
              key={c.numeral}
              className="rounded-lg border border-slate-800 bg-[#0a0f1e] p-5"
            >
              <p className="mb-3 text-xl font-light text-amber-400">
                {c.numeral}
              </p>
              <h3 className="mb-2 text-sm font-semibold text-slate-50">
                {c.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-500">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <a
            href="/convictions"
            className="rounded border border-slate-700 px-4 py-2 text-[11px] tracking-widest text-slate-400 uppercase transition-colors hover:border-slate-500 hover:text-slate-200"
          >
            Full breakdown →
          </a>
        </div>
      </div>
    </section>
  )
}
