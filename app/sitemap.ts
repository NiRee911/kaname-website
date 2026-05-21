import { MetadataRoute } from "next"

const base = "https://kaname.guide"

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/manifesto", priority: 0.9 },
  { path: "/delivery-cycle", priority: 0.9 },
  { path: "/artifacts", priority: 0.8 },
  { path: "/events", priority: 0.8 },
  { path: "/gates", priority: 0.8 },
  { path: "/convictions", priority: 0.7 },
  { path: "/values", priority: 0.7 },
  { path: "/team", priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-05-21"),
    changeFrequency: "monthly",
    priority,
  }))
}
