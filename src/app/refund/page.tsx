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
                    In case of an approved refund, the amount will be credited to your original mode of payment within 4 to 6 working days (and up to 8 working days in certain cases, depending on your bank or payment provider).
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

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Cancellation Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Once a participant has enrolled and sessions have commenced, cancellations are generally not permitted. However, in the unfortunate event of a medical emergency or critical health condition that prevents the participant from continuing within the first month of joining, EaseMyCancer may review the case and consider a partial or full refund at its discretion.
                    All such requests must be supported by appropriate medical documentation and will be subject to verification.
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
