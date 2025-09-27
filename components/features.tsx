import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  { title: "Real-Time Risk Scoring", desc: "Streaming analysis for instant fraud signals." },
  { title: "Behavioral Anomaly Detection", desc: "Spot abnormal spending and session patterns." },
  { title: "Geo & Device Intelligence", desc: "Correlate geo, IP, and device fingerprints." },
  { title: "Rules & Policies", desc: "Create business-specific, overrideable policies." },
  { title: "Case Management", desc: "Triage queues and audit decisions quickly." },
  { title: "API & Webhooks", desc: "Bi-directional sync with SecurePay endpoints." },
]

export default function Features() {
  return (
    <section id="features" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            Powering modern
            <span className="text-primary"> fraud analytics</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            A focused toolkit that complements SecurePay with deeper analytics and policy orchestration.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
