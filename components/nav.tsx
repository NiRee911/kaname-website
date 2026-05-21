import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const sections = [
  { label: "Manifesto", href: "/manifesto" },
  { label: "Convictions", href: "/convictions" },
  { label: "Values", href: "/values" },
  { label: "Delivery Cycle", href: "/delivery-cycle" },
  { label: "Artifacts", href: "/artifacts" },
  { label: "Gates", href: "/gates" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
]

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-800 px-6 py-4 backdrop-blur md:px-16"
      style={{ backgroundColor: 'var(--color-nav-bg)' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 group">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-105">
            <span className="text-[15px] font-light leading-none text-[#0f172a]">
              要
            </span>
          </div>
          <span className="text-sm font-bold tracking-[-0.5px] text-slate-50 transition-colors group-hover:text-amber-400">
            KANAME
          </span>
        </Link>
        <div className="flex items-center gap-4 overflow-x-auto">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="shrink-0 text-[10px] font-medium tracking-widest text-slate-500 uppercase transition-colors hover:text-slate-300"
            >
              {s.label}
            </Link>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <ThemeToggle />
          <a
            href="/kaname-guide.pdf"
            download
            className="text-[10px] font-semibold tracking-widest text-amber-400 uppercase transition-colors hover:text-amber-300"
          >
            ↓ PDF
          </a>
        </div>
      </div>
    </nav>
  )
}
