import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "CipherIQ cut review time by 70% while improving catch rates. It slots neatly alongside SecurePay.",
    author: "Yuval Patel",
    role: "CFO, FinTech Solutions",
    image: "/headshot-yuval-patel.jpg",
  },
  {
    quote: "Accurate, fast, and easy to operate. Our analysts love the policy editor and audit trails.",
    author: "William Law II",
    role: "CTO, Global Retail",
    image: "/headshot-william-law.jpg",
  },
  {
    quote: "The analytics depth is outstanding. We found hidden fraud rings in week one.",
    author: "Aditya Chaudhary",
    role: "Head of Risk, PayTech",
    image: "/headshot-aditya-chaudhary.jpg",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">Trusted by modern risk teams</h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            Hear how CipherIQ helps organizations strengthen fraud defenses.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.author} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">“{t.quote}”</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={t.image || "/placeholder.svg"} alt={`${t.author} headshot`} />
                    <AvatarFallback>
                      {t.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 3)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">{t.author}</div>
                    <div>{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
