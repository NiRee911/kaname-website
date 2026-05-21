const pairs = [
  { left: "Specification clarity", right: "implementation velocity" },
  { left: "Human judgment", right: "AI momentum" },
  { left: "Living specification", right: "the codebase as truth" },
  { left: "Verified intent", right: "working code" },
]

export function ManifestoValues() {
  return (
    <section className="border-y border-slate-800 px-6 py-16 md:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
          Kaname Manifesto
        </p>
        <div className="mb-6 overflow-hidden rounded-lg border border-slate-800">
          {pairs.map((p, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_1fr] items-center ${
                i < pairs.length - 1 ? "border-b border-slate-800" : ""
              }`}
            >
              <div className="px-5 py-5 md:px-6">
                <span className="text-base font-bold text-slate-50 md:text-lg">
                  {p.left}
                </span>
              </div>
              <div className="border-x border-slate-800 px-3 py-5 text-center">
                <span className="text-[8px] font-bold tracking-[3px] text-amber-400/60 uppercase">
                  over
                </span>
              </div>
              <div className="px-5 py-5 md:px-6">
                <span className="text-base text-slate-500 md:text-lg">
                  {p.right}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-6">
          <p className="text-[11px] italic leading-relaxed text-slate-600">
            While there is value in the items on the right, we value the items
            on the left more.
          </p>
          <a
            href="/manifesto"
            className="shrink-0 rounded border border-slate-700 px-4 py-2 text-[11px] tracking-widest text-slate-400 uppercase transition-colors hover:border-slate-500 hover:text-slate-200"
          >
            Full manifesto →
          </a>
        </div>
      </div>
    </section>
  )
}
