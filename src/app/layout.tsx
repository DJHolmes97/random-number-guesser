import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Random Number Guesser Game",
  description:
    "A game where you try a beat the computer by guessing its number.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>{children}</body>
    </html>
  )
}
