import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kaname — Specification-Driven Delivery",
  description:
    "A specification-driven, flow-based methodology for AI-augmented software delivery.",
  openGraph: {
    title: "Kaname",
    description:
      "A specification-driven, flow-based methodology for AI-augmented software delivery.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#0f172a] text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
