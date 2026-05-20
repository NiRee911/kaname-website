const values = [
  "Specification",
  "Accountability",
  "Transparency",
  "Governance",
  "Flow",
]

export function Values() {
  return (
    <section className="border-y border-slate-800 px-6 py-16 md:px-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-8 text-[10px] font-semibold tracking-[3px] text-slate-600 uppercase">
          Five Values
        </p>
        <div className="flex flex-wrap gap-3">
          {values.map((v) => (
            <span
              key={v}
              className="rounded-full border border-purple-300/20 bg-purple-300/5 px-4 py-1.5 text-[10px] font-semibold tracking-[2px] text-purple-300 uppercase"
            >
              {v}
            </span>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <a
            href="/values"
            className="rounded border border-slate-700 px-4 py-2 text-[11px] tracking-widest text-slate-400 uppercase transition-colors hover:border-slate-500 hover:text-slate-200"
          >
            Full breakdown →
          </a>
        </div>
      </div>
    </section>
  )
}
