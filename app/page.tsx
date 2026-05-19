import { Hero } from "@/components/sections/hero"
import { TheShift } from "@/components/sections/the-shift"
import { Convictions } from "@/components/sections/convictions"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TheShift />
      <Convictions />
    </main>
  )
}
