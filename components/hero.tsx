import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="border-b">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-pretty text-4xl font-semibold leading-tight md:text-5xl">
            CipherIQ
            <span className="block text-primary">Fraud Analytics Platform</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Real-time fraud insights, anomaly detection, and customizable risk policies that complement SecurePay’s
            transaction protection.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#demo">
              <Button>Live Demo</Button>
            </a>
            <a href="#features">
              <Button variant="outline">Explore Features</Button>
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted-foreground md:max-w-md">
            <li className="rounded-md border p-3">99.8% detection accuracy</li>
            <li className="rounded-md border p-3">Sub-second scoring</li>
            <li className="rounded-md border p-3">PCI DSS ready</li>
            <li className="rounded-md border p-3">SOC 2 aligned</li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-xl border p-4">
            <div className="text-sm text-muted-foreground">Preview</div>
            <div className="mt-2 rounded-lg bg-muted p-6">
              <p className="text-center text-sm">Risk score preview and trend analytics</p>
            </div>
            <div className="mt-4 text-center text-xs text-muted-foreground">
              Seamlessly integrates with SecurePay APIs
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
