"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

type Point = { label: string; fraudRate: number }

export default function FraudTrendChart({ data }: { data: Point[] }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 12, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-muted))" />
          <XAxis dataKey="label" stroke="hsl(var(--color-muted-foreground))" tick={{ fontSize: 12 }} />
          <YAxis unit="%" stroke="hsl(var(--color-muted-foreground))" tick={{ fontSize: 12 }} domain={[0, 10]} />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--color-popover))",
              border: "1px solid hsl(var(--color-border))",
              color: "hsl(var(--color-popover-foreground))",
            }}
          />
          <Line
            type="monotone"
            dataKey="fraudRate"
            stroke="hsl(var(--color-primary))"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
