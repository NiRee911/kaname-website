import { Hero } from "@/components/sections/hero"
import { TheShift } from "@/components/sections/the-shift"
import { Convictions } from "@/components/sections/convictions"
import { Values } from "@/components/sections/values"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TheShift />
      <Convictions />
      <Values />
    </main>
  )
}
