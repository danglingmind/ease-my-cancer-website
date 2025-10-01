import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function PrivacyPage() {
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
                  Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Personal details (name, phone number, email, etc.) shared during registration or inquiry.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Health-related information voluntarily provided for personalization of services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Payment and billing information required for transactions (processed securely through our payment partners).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Usage data (such as cookies, IP address, device type, browsing activity).
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information collected for purposes including, but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Providing, personalizing, and improving our services.</li>
                    <li>Communicating important updates, reminders, or offers.</li>
                    <li>Processing payments securely and sending confirmations.</li>
                    <li>Conducting research and improving programs (data may be anonymized).</li>
                    <li>Complying with legal and regulatory requirements.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We do not sell, rent, or trade your personal information.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to keeping your personal information safe and confidential. Our systems use secure, industry-standard practices to protect your data, and we continuously work to maintain the highest levels of privacy and security. We strictly comply with applicable data protection laws and never share your information without your explicit consent, except as required by law or for the purposes described above.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Your Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You may request access, correction, or deletion of your personal data at any time by contacting us.
                  </p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Easevia Integrative Solutions Pvt. Ltd.<br />
                    4414, Block 44, Prestige Kew Gardens, Yamlur, Marathahalli Colony, Bangalore, Karnataka, India<br />
                    📧 hello@easemycancer.com<br />
                    📞 +91 72591 99955
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
