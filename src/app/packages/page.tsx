import { Footer } from "@/components/Footer"
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
  Star,
  Zap,
  ArrowLeft,
  Home
} from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Ease Path",
    duration: "1 Month",
    description: "Start Your Healing Plan (Digital / Online)",
    icon: Heart,
    color: "primary",
    popular: false,
    originalPrice: "₹12,000",
    salePrice: "₹9,999",
    services: [
      "12 Group Onco-Yoga & Emotional Wellbeing Sessions",
      "Personalized Nutrition Plan",
      "1 Follow-Up Nutrition Consultation",
      "1 Group Psycho-Oncology Session every week",
      "6-Day Dedicated Support (8 AM – 9 PM)",
      "Community & Resources – Access to easy healthy recipes and quick relaxation tools",
      "Complimentary Wellness Kit to Kickstart Your Program"
    ],
    features: [
      "Expert-led sessions",
      "Personalized plan",
      "Community access",
      "Dedicated support"
    ]
  },
  {
    name: "Thrive 120",
    duration: "4 Months of Care + 2 Complimentary Weeks",
    description: "Digital / Online",
    icon: Shield,
    color: "secondary",
    popular: true,
    originalPrice: "₹48,000",
    salePrice: "₹29,999",
    emi: "₹6666/month EMI option",
    services: [
      "54 Group Onco-Yoga & Emotional Wellbeing Sessions",
      "Personalized Nutrition Plan",
      "Weekly 1 follow up Nutrition Consultation",
      "1 Group Psycho-Oncology Session every week",
      "1 Skin Care Consultation with Expert Dermatologist",
      "Progress Tracking",
      "6-Day Dedicated Support (8 AM – 9 PM)",
      "Community & Resources – Access to easy healthy recipes and quick relaxation tools",
      "Complimentary Wellness Kit to Kickstart Your Program"
    ],
    features: [
      "Most popular",
      "Progress tracking",
      "Dermatology consult",
      "Priority support"
    ]
  }
]

const additionalServices = [
  {
    title: "Onco Yoga & Rehab",
    description: "Specialized yoga sessions designed for cancer patients",
    icon: Heart,
    features: ["Pain management", "Mobility restoration", "Strength building", "Flexibility improvement"]
  },
  {
    title: "Onco Nutrition",
    description: "Personalized nutrition plans for optimal recovery",
    icon: Utensils,
    features: ["Custom meal plans", "Treatment-specific nutrition", "Appetite management", "Weight management"]
  },
  {
    title: "Emotional Wellbeing",
    description: "Mindfulness and stress management support",
    icon: Brain,
    features: ["Stress reduction", "Sleep improvement", "Anxiety management", "Mindfulness practices"]
  },
  {
    title: "Onco Psychology",
    description: "Professional psychological support and counseling",
    icon: Users,
    features: ["Individual counseling", "Group therapy", "Coping strategies", "Mental health support"]
  }
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/90 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
              <Shield className="w-4 h-4 mr-2" />
              Our Packages
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choose Your Healing Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support packages designed to meet you wherever you are in your cancer journey. 
              All services are delivered by certified specialists with years of experience.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon
              return (
                <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${pkg.color}-100 text-${pkg.color}-600 mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                        <span className="text-3xl font-bold text-primary">{pkg.salePrice}</span>
                      </div>
                      {pkg.emi && (
                        <div className="text-sm text-muted-foreground">{pkg.emi}</div>
                      )}
                      <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                    </div>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {pkg.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <a href="#">
                        Buy Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Specialized Services</h2>
              <p className="text-lg text-muted-foreground">
                Each service is delivered by certified specialists with expertise in cancer care
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <div className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-center space-x-1">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-0 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Healing Journey?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Book a free consultation to discuss which package is right for you and your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href="/#contact">
                      Book Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="/brochure.pdf" download>
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
