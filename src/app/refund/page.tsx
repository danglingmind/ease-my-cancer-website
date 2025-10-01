import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function RefundPage() {
  return (
    <div className="min-h-screen">
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="EaseMyCancer Logo"
              width={240}
              height={72}
              className="h-16 w-auto"
              priority
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-serif font-bold text-foreground">
                  Refund & Cancellation Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Trial Sessions
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer 1–2 complimentary trial sessions so you can experience our services before enrolling.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Refund Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Once a program/package has been purchased and commenced, we do not provide refunds, as our services involve live experts, dedicated time, and personalized care.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In rare and exceptional situations, refunds may be considered on a case-by-case basis at the discretion of the company, subject to verification.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Missed Sessions
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sessions missed by the participant are not eligible for refunds, but may be rescheduled wherever possible.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Contact for Refund Requests
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For any refund-related queries or exceptional circumstances, please contact our support team at hello@easemycancer.com with detailed information about your situation.
                  </p>
                </div>

                <div className="text-center pt-8">
                  <p className="text-sm text-muted-foreground">
                    Last updated: September 2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
