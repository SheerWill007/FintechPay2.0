export default function Stats() {
  const stats = [
    { value: "99.8%", label: "Detection Accuracy" },
    { value: "150+", label: "Countries Covered" },
    { value: "500M", label: "Transactions/Day" },
    { value: "0.2%", label: "False Positive Rate" },
  ]

  return (
    <section id="stats" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-primary/20 p-4 text-center">
            <div className="text-3xl font-semibold">{s.value}</div>
            <div className="mt-1 text-sm opacity-90">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
