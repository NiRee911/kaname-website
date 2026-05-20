export function DownloadCta() {
  return (
    <section
      id="download"
      className="border-y border-slate-800 px-6 py-20 md:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-xl border border-amber-400/20 bg-gradient-to-br from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] p-10 text-center">
          <p className="mb-3 text-[10px] font-semibold tracking-[4px] text-amber-400 uppercase">
            The Full Guide
          </p>
          <h2 className="mb-3 text-2xl font-bold text-slate-50">
            Read Kaname in full.
          </h2>
          <p className="mb-8 text-sm text-slate-400">
            Free. No registration. CC BY-SA 4.0.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/kaname-guide.pdf"
              download
              className="rounded bg-amber-400 px-6 py-3 text-[11px] font-bold tracking-widest text-[#0f172a] uppercase transition-colors hover:bg-amber-300"
            >
              ↓ Download PDF
            </a>
            <a
              href="/kaname-guide.md"
              download
              className="rounded border border-slate-700 px-5 py-3 text-[11px] tracking-widest text-slate-400 uppercase transition-colors hover:border-slate-500 hover:text-slate-300"
            >
              ↓ Markdown
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
