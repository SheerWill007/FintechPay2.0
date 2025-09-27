"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FraudTrendChart from "./charts/fraud-trend"

type Country = "US" | "GB" | "CA" | "AU" | "IN" | "NG"

const baseChart = [
  { label: "Mon", fraudRate: 2.3 },
  { label: "Tue", fraudRate: 2.9 },
  { label: "Wed", fraudRate: 3.1 },
  { label: "Thu", fraudRate: 2.7 },
  { label: "Fri", fraudRate: 3.8 },
  { label: "Sat", fraudRate: 4.5 },
  { label: "Sun", fraudRate: 3.2 },
]

export default function Demo() {
  const [amount, setAmount] = useState<string>("")
  const [country, setCountry] = useState<Country | "">("")
  const [score, setScore] = useState<number | null>(null)
  const [label, setLabel] = useState<string>("Not analyzed")

  const chartData = useMemo(() => {
    // Simple filter: simulate higher fraud rate with higher amount thresholds
    const amt = Number.parseFloat(amount || "0")
    const bump = Math.min(5, Math.max(0, amt / 1000)) // up to +5%
    return baseChart.map((d) => ({ ...d, fraudRate: +(d.fraudRate + bump).toFixed(1) }))
  }, [amount])

  function analyze(e: React.FormEvent) {
    e.preventDefault()
    const amt = Number.parseFloat(amount || "0")
    let s = 20
    if (amt > 1500) s += 35
    else if (amt > 750) s += 20
    if (country && ["NG", "IN"].includes(country)) s += 15 // illustrative geo risk
    s += Math.floor(Math.random() * 10) - 5
    s = Math.max(5, Math.min(95, s))
    setScore(s)
    setLabel(s > 70 ? "High Risk" : s > 30 ? "Medium Risk" : "Low Risk")
  }

  return (
    <section id="demo" className="border-y bg-muted/20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            Interactive <span className="text-primary">Demo</span>
          </h2>
          <p className="mt-3 max-w-prose text-pretty text-muted-foreground">
            Enter transaction details to simulate a risk score and preview weekly fraud-rate trends. Results are
            illustrative and designed for product exploration.
          </p>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Analyze Transaction</CardTitle>
              <CardDescription>Client-side validation and instant scoring</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4" onSubmit={analyze}>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount (USD)</Label>
                  <Input
                    id="amount"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Country</Label>
                  <Select value={country} onValueChange={(v) => setCountry(v as Country)}>
                    <SelectTrigger aria-label="Select country">
                      <SelectValue placeholder="Choose a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {["US", "GB", "CA", "AU", "IN", "NG"].map((c) => (
                        <SelectItem value={c} key={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  Analyze
                </Button>
              </form>

              <div className="mt-6 grid gap-2">
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="text-sm text-muted-foreground">Risk Score</div>
                  <div className="text-lg font-semibold">{score ?? "-"}</div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="text-sm text-muted-foreground">Assessment</div>
                  <div className="text-sm font-medium">{label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Weekly Fraud Rate</CardTitle>
              <CardDescription>Aggregated percentage across selected filters</CardDescription>
            </CardHeader>
            <CardContent>
              <FraudTrendChart data={chartData} />
              <p className="mt-3 text-xs text-muted-foreground">
                This visualization is sample data for product demonstration only.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
