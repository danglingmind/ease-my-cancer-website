"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Users, 
  Utensils, 
  Brain, 
  Shield, 
  Phone, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react"

const services = [
  {
    title: "Onco Yoga & Rehab",
    description: "Live, structured sessions to ease side effects, restore mobility, manage pain, and rebuild strength. With unlimited access, join anytime you are ready — because no two treatment days are the same.",
    icon: Heart,
    features: ["Live guided sessions", "Pain management", "Mobility restoration", "Unlimited access"],
    color: "primary"
  },
  {
    title: "Onco Nutrition",
    description: "Personalised nutrition plans that help you feel stronger and recover faster. Weekly 30-minute calls with an onco-nutritionist to ensure your questions are answered, and your plan fits your taste, needs, and treatment phase.",
    icon: Utensils,
    features: ["Personalized meal plans", "Weekly consultations", "Treatment-specific nutrition", "Taste preferences"],
    color: "secondary"
  },
  {
    title: "Emotional Wellbeing",
    description: "Weekly live sessions of mindfulness, breathwork, and relaxation practices, guided by experts, backed by research to reduce stress, improve sleep, and bring balance, helping you stay calm and supported through your journey.",
    icon: Brain,
    features: ["Mindfulness practices", "Stress reduction", "Sleep improvement", "Expert guidance"],
    color: "accent"
  },
  {
    title: "Onco Psychology",
    description: "The cancer journey brings fears and emotions that are hard to share, even with loved ones. That's why we offer a safe, supportive space guided by psycho-oncology experts — where you can ease emotional stress, talk openly, and know you're not alone.",
    icon: Users,
    features: ["Safe space to share", "Expert psychological support", "Emotional stress relief", "Community connection"],
    color: "primary"
  }
]

const supportFeatures = [
  {
    title: "Care Beyond Sessions",
    description: "Support is just a message away — from 8 AM to 9 PM, our program coordinator is available to answer questions and support both you and your caregivers, whenever you need.",
    icon: Phone,
    time: "8 AM - 9 PM"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            <Shield className="w-4 h-4 mr-2" />
            Holistic Care
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            EaseMyCancer – Your Healing Ally
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are not a hospital, nor an alternative therapy center. We are a complete support system built around your needs through this journey.
          </p>
        </div>

        {/* Holistic Care Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  We bring for you a Holistic Care
                </h3>
                <p className="text-lg text-muted-foreground">
                  Guided by experienced doctors and oncologists, delivered by onco specialists in yoga, nutrition, psychology and psychiatry, and shaped by insights from the journey of patients that walked this very path.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <Badge variant="outline" className="border-primary text-primary">
                    <Star className="w-4 h-4 mr-2" />
                    Expert Guidance
                  </Badge>
                  <Badge variant="outline" className="border-secondary text-secondary">
                    <Users className="w-4 h-4 mr-2" />
                    Patient Insights
                  </Badge>
                  <Badge variant="outline" className="border-accent-500 text-accent-700">
                    <Heart className="w-4 h-4 mr-2" />
                    Holistic Approach
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-${service.color}-100 text-${service.color}-600`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Care Beyond Sessions */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Care Beyond Sessions
                    </h3>
                    <Badge className="bg-primary text-primary-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      8 AM - 9 PM
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Support is just a message away — from 8 AM to 9 PM, our program coordinator is available to answer questions and support both you and your caregivers, whenever you need.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">24/7 Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Caregiver Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Instant Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
