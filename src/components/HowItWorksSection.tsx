"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Home, 
  Phone, 
  Users, 
  Wifi, 
  Monitor, 
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const steps = [
  {
    title: "Live Guided sessions from your home or wherever you are",
    description: "Join our expert-led sessions from the comfort of your own space. No travel required, just a stable internet connection.",
    icon: Home,
    features: ["Expert-led sessions", "From your home", "Flexible timing", "No travel needed"],
    color: "primary"
  },
  {
    title: "On-call support - Help is just a call away",
    description: "Available 8am–9pm. Our dedicated support team is here whenever you need guidance, answers, or just someone to talk to.",
    icon: Phone,
    features: ["8 AM - 9 PM availability", "Instant support", "Expert guidance", "Caregiver support"],
    color: "secondary"
  },
  {
    title: "Real Community - Connect with people and find strength together",
    description: "Join a supportive community of people who understand your journey. Share experiences, find strength, and build lasting connections.",
    icon: Users,
    features: ["Supportive community", "Shared experiences", "Peer support", "Lasting connections"],
    color: "accent"
  }
]

const requirements = [
  {
    icon: Wifi,
    title: "Stable Internet Connection",
    description: "A reliable internet connection to join our live sessions"
  },
  {
    icon: Monitor,
    title: "Device with Screen",
    description: "Any device with a screen - phone, tablet, or computer"
  },
  {
    icon: Heart,
    title: "Your Trust in Us",
    description: "The most important requirement - your willingness to begin this healing journey"
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            <Home className="w-4 h-4 mr-2" />
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No travel, no hassle. Join in from the comfort of your own space. All you need is a stable internet connection, a device with a screen, and your trust in us.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${step.color}-100 text-${step.color}-600 mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Requirements Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  What You Need to Get Started
                </h3>
                <p className="text-lg text-muted-foreground">
                  Simple requirements to begin your healing journey
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {requirements.map((requirement, index) => {
                  const Icon = requirement.icon
                  return (
                    <div key={index} className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-foreground">{requirement.title}</h4>
                      <p className="text-sm text-muted-foreground">{requirement.description}</p>
                    </div>
                  )
                })}
              </div>
              
              <div className="text-center mt-8">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="/packages">
                    Start Your Journey Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
