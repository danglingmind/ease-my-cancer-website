import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { FamiliarFeelingsSection } from "@/components/FamiliarFeelingsSection"
import { FounderSection } from "@/components/FounderSection"
import { ServicesSection } from "@/components/ServicesSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { TreatmentStagesSection } from "@/components/TreatmentStagesSection"
import { EvidenceSection } from "@/components/EvidenceSection"
import { AdditionalSupportSection } from "@/components/AdditionalSupportSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FamiliarFeelingsSection />
        <FounderSection />
        <ServicesSection />
        <HowItWorksSection />
        <TreatmentStagesSection />
        <EvidenceSection />
        <AdditionalSupportSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
