export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-16 md:py-36">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_#d8b4fe15,_transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-5 text-[10px] font-semibold tracking-[4px] text-purple-300 uppercase">
          A Methodology for the AI Age
        </p>
        <div className="mb-6 flex items-baseline gap-4">
          <h1 className="text-6xl font-extrabold tracking-[-3px] text-slate-50 md:text-7xl">
            KANAME
          </h1>
          <span className="text-4xl font-light text-purple-300/70">要</span>
        </div>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-400">
          A specification-driven, flow-based methodology for AI-augmented
          software delivery.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#download"
            className="rounded bg-purple-300 px-5 py-2.5 text-[11px] font-bold tracking-widest text-[#0f172a] uppercase transition-colors hover:bg-purple-200"
          >
            Read the Guide
          </a>
          <a
            href="/kaname-guide.pdf"
            download
            className="rounded border border-slate-700 px-4 py-2.5 text-[11px] tracking-widest text-slate-400 uppercase transition-colors hover:border-slate-500 hover:text-slate-300"
          >
            ↓ Download PDF
          </a>
        </div>
        <p className="mt-6 text-[10px] tracking-wide text-slate-500">
          v1.0 · Jakub Kavinsky & Slavomira Smolkova · CC BY-SA 4.0
        </p>
      </div>
    </section>
  )
}
