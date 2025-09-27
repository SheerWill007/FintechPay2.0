import type { Metadata } from "next"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Demo from "@/components/demo"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "CipherIQ — Fraud Analytics Platform",
  description:
    "AI-driven fraud analytics with real-time insights, anomaly detection, and customizable risk policies. Built to complement SecurePay.",
  keywords: ["fraud analytics", "fintech", "risk", "dashboard", "security", "CipherIQ"],
}

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  )
}
