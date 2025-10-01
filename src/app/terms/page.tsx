import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function TermsPage() {
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
                  Terms & Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Services
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide non-clinical, holistic cancer support including yoga, nutrition, emotional wellbeing, and psychological guidance. We are not a hospital, and our services do not replace professional medical treatment. Our programs are designed to complement professional care.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Eligibility
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By using our services, you confirm that you are 18 years or older, or have parental/guardian consent.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Payments
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>All fees must be paid in advance through approved payment methods.</li>
                    <li>Prices may change, but confirmed subscriptions will not be affected.</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Refunds & Cancellations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Please refer to our Refund & Cancellation Policy (linked separately).
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Use of Services
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>You agree not to misuse or resell our services.</li>
                    <li>You are responsible for ensuring your medical suitability before participating.</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Easevia Integrative Solutions Pvt. Ltd. and its team shall not be held liable for any direct or indirect consequences resulting from the use of our services. We do not guarantee medical outcomes.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Changes to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms occasionally. Continued use of our services constitutes acceptance of the updated Terms.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Contact
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For any questions regarding these terms, please contact us at hello@easemycancer.com
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
