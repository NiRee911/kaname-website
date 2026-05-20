import { Nav } from "@/components/nav"
import { Hero } from "@/components/sections/hero"
import { TheShift } from "@/components/sections/the-shift"
import { Convictions } from "@/components/sections/convictions"
import { Values } from "@/components/sections/values"
import { DeliveryCycle } from "@/components/sections/delivery-cycle"
import { Team } from "@/components/sections/team"
import { Gates } from "@/components/sections/gates"
import { DownloadCta } from "@/components/sections/download-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TheShift />
      <Convictions />
      <Values />
      <DeliveryCycle />
      <Team />
      <Gates />
      <DownloadCta />
      <Footer />
    </main>
  )
}
