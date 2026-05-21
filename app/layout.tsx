import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "700", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kaname.guide"),
  title: {
    template: "%s — Kaname",
    default: "Kaname — Specification-Driven AI Delivery",
  },
  description:
    "A specification-driven, flow-based methodology for AI-augmented software delivery. Four artifacts, six events, four human gates.",
  openGraph: {
    title: "Kaname — Specification-Driven AI Delivery",
    description:
      "A specification-driven, flow-based methodology for AI-augmented software delivery.",
    type: "website",
    url: "https://kaname.guide",
    siteName: "Kaname",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html: `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`}} />
      </head>
      <body
        className={`${inter.className} ${fraunces.variable} bg-[#0f172a] text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
