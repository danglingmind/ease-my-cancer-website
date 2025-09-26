"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  Heart, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Quote,
  ArrowRight
} from "lucide-react"

const statistics = [
  {
    number: "85%",
    label: "Report Improved Quality of Life",
    description: "Patients report significant improvement in their overall quality of life"
  },
  {
    number: "70%",
    label: "Reduced Treatment Side Effects",
    description: "Effective management of chemotherapy and radiation side effects"
  },
  {
    number: "90%",
    label: "Better Sleep Quality",
    description: "Improved sleep patterns and reduced insomnia"
  },
  {
    number: "95%",
    label: "Increased Emotional Well-being",
    description: "Better emotional regulation and mental health outcomes"
  }
]

const testimonials = [
  {
    quote: "EaseMyCancer gave me back my strength when I thought I had lost it forever. The yoga sessions helped me manage my pain and the community made me feel less alone.",
    author: "Sarah M.",
    role: "Breast Cancer Survivor"
  },
  {
    quote: "The nutrition guidance was a game-changer. I finally had energy again and my appetite returned. The support team was always there when I needed them.",
    author: "Michael R.",
    role: "Lung Cancer Patient"
  },
  {
    quote: "As a caregiver, I was struggling too. EaseMyCancer supported both me and my wife through her treatment. We couldn't have done it without them.",
    author: "David L.",
    role: "Caregiver"
  }
]

export function EvidenceSection() {
  return (
    <section id="evidence" className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            <BarChart3 className="w-4 h-4 mr-2" />
            Research-Backed
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Backed by research, tailored for you
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our approach is grounded in scientific evidence and personalized to meet your unique needs.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Note */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Some things even study cannot capture
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The comfort of being truly heard, the little joys that return to your day, and the quiet strength of knowing you are not alone. It is more than care—it's comfort, laughter, and connection.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              What Our Community Says
            </h3>
            <p className="text-lg text-muted-foreground">
              Real stories from real people who found hope and healing with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <blockquote className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Ready to Experience Evidence-Based Healing?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of patients who have found hope, strength, and healing through our comprehensive approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Start Your Healing Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Research Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
