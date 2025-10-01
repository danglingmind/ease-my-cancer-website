"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Scissors, 
  Shirt, 
  Shield, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Users
} from "lucide-react"

const supportServices = [
  {
    title: "Dermatologist-Approved Wigs",
    description: "High-quality wigs designed for comfort and confidence during treatment",
    icon: Scissors,
    features: ["Dermatologist approved", "Comfortable fit", "Natural appearance", "Easy maintenance"]
  },
  {
    title: "Specialized Garments",
    description: "Comfortable, functional clothing designed for cancer patients",
    icon: Shirt,
    features: ["Comfortable design", "Easy access", "Soft materials", "Functional features"]
  },
  {
    title: "Skin Care Solutions",
    description: "Gentle, effective skincare products for sensitive skin during treatment",
    icon: Shield,
    features: ["Gentle formulas", "Sensitive skin safe", "Moisturizing", "Protective"]
  }
]

const additionalBenefits = [
  "Dermatologist-approved products",
  "Patient-focused solutions",
  "Quality assurance",
  "Comfort and confidence",
  "Easy maintenance",
  "Professional guidance"
]

export function AdditionalSupportSection() {
  return (
    <section id="additional-support" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            <Heart className="w-4 h-4 mr-2" />
            Beyond Treatment
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            That's not all!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our support goes beyond treatment—guiding you with solutions that are dermatologist-approved and patient-focused.
          </p>
        </div>

        {/* Support Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportServices.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Image Placeholder Section */}
        {/* <div className="mb-16">
          <Card className="bg-gradient-to-br from-accent-50 to-primary-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Product Gallery
                </h3>
                <p className="text-lg text-muted-foreground">
                  Images of our specialized products and services
                </p>
              </div>
               */}
              {/* Placeholder for product images */}
              {/* <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                        <Heart className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm text-primary font-medium">Product Image {item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Why Choose Our Additional Support?
                </h3>
                <p className="text-lg text-muted-foreground">
                  We understand handling everything alone can be exhausting. We are here to ease the load and bring back normalcy to your life.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {additionalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Complete Support for Your Journey
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                From treatment support to daily comfort, we're here to make your journey as smooth as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="/packages">
                    Explore All Packages
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="#contact">
                    Get Personalized Recommendations
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
