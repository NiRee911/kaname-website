import { Hero } from "@/components/sections/hero"
import { TheShift } from "@/components/sections/the-shift"
import { Convictions } from "@/components/sections/convictions"
import { Values } from "@/components/sections/values"
import { DeliveryCycle } from "@/components/sections/delivery-cycle"
import { Team } from "@/components/sections/team"
import { Gates } from "@/components/sections/gates"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TheShift />
      <Convictions />
      <Values />
      <DeliveryCycle />
      <Team />
      <Gates />
    </main>
  )
}
