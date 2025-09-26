"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Heart, 
  Zap, 
  Sun, 
  ArrowRight,
  CheckCircle,
  Clock,
  Target
} from "lucide-react"

const treatmentStages = [
  {
    stage: "While You Prepare for Surgery…",
    description: "We help you build strength, calm your mind, and face surgery with confidence. Gentle Yoga, breathing, nourishing foods, and mindful practices support smoother healing and faster recovery.",
    icon: Shield,
    color: "primary",
    features: ["Build physical strength", "Mental preparation", "Gentle yoga practices", "Breathing exercises", "Nourishing nutrition", "Mindful practices"]
  },
  {
    stage: "Just Done with Surgery?",
    description: "We help you gently restore comfort, manage pain, and improve mobility, with nutrition and restorative practices focused on tissue repair, reducing inflammation, and boosting energy.",
    icon: Heart,
    color: "secondary",
    features: ["Pain management", "Mobility restoration", "Tissue repair focus", "Inflammation reduction", "Energy recovery", "Gentle rehabilitation"]
  },
  {
    stage: "Undergoing Chemotherapy?",
    description: "We support you with restorative movements, tailored nutrition, and emotional care to ease fatigue, mood swings, and gut issues, helping you stay strong through the tough days.",
    icon: Zap,
    color: "accent",
    features: ["Fatigue management", "Mood support", "Gut health", "Restorative movements", "Emotional care", "Strength maintenance"]
  },
  {
    stage: "During Radiation…",
    description: "We will help you soothe your body and skin with simple yoga, skin care and emotional guidance to keep you supported and comfortable through treatment.",
    icon: Sun,
    color: "primary",
    features: ["Skin care support", "Body soothing", "Simple yoga", "Emotional guidance", "Comfort maintenance", "Treatment support"]
  },
  {
    stage: "Post Treatment Care & Recovery",
    description: "After your treatment we help you rebuild strength, immunity, and confidence through yoga, nutrition, emotional and community support, guiding you toward a healthier, empowered life.",
    icon: Target,
    color: "secondary",
    features: ["Strength rebuilding", "Immunity restoration", "Confidence building", "Holistic recovery", "Community support", "Empowered living"]
  }
]

export function TreatmentStagesSection() {
  return (
    <section id="treatment-stages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            <Clock className="w-4 h-4 mr-2" />
            Comprehensive Care
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            From diagnosis to recovery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every cancer journey is personal, with its own challenges. No matter your stage of treatment, we're here to offer the care and support you truly need.
          </p>
        </div>

        {/* What We Understand */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                What We Understand
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every cancer journey is unique and we understand this the best. Whatever stage of treatment you are in, our care is here to support you.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Stages */}
        <div className="space-y-8">
          {treatmentStages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-${stage.color}-100 text-${stage.color}-600`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-serif text-foreground">
                        {stage.stage}
                      </CardTitle>
                      <Badge variant="outline" className={`border-${stage.color}-200 text-${stage.color}-600 mt-2`}>
                        Stage {index + 1}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {stage.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {stage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className={`group-hover:bg-${stage.color} group-hover:text-${stage.color}-foreground group-hover:border-${stage.color}`}
                    >
                      Learn More About This Stage
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          {/* <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Ready to Start Your Healing Journey?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                No matter what stage you're in, we're here to support you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
