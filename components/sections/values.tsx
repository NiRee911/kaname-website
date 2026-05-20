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
        <div className="mt-8 text-right">
          <a
            href="/values"
            className="text-[10px] font-semibold tracking-[3px] text-purple-300/50 uppercase transition-colors hover:text-purple-300"
          >
            Explore in depth →
          </a>
        </div>
      </div>
    </section>
  )
}
