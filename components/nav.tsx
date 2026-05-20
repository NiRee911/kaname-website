import Link from "next/link"

const sections = [
  { label: "Convictions", href: "/convictions" },
  { label: "Values", href: "/values" },
  { label: "Delivery Cycle", href: "/delivery-cycle" },
  { label: "Team", href: "/team" },
  { label: "Gates", href: "/gates" },
]

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#0f172a]/90 px-6 py-4 backdrop-blur md:px-16">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6">
        <Link
          href="/"
          className="text-sm font-bold tracking-[-0.5px] text-slate-50 hover:text-purple-300 transition-colors"
        >
          KANAME <span className="font-light text-purple-300/60">要</span>
        </Link>
        <div className="hidden items-center gap-5 md:flex">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-[10px] font-medium tracking-widest text-slate-500 uppercase transition-colors hover:text-slate-300"
            >
              {s.label}
            </Link>
          ))}
        </div>
        <a
          href="/kaname-guide.pdf"
          download
          className="text-[10px] font-semibold tracking-widest text-purple-300 uppercase transition-colors hover:text-purple-200"
        >
          ↓ PDF
        </a>
      </div>
    </nav>
  )
}
