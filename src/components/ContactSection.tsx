"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Send,
  MessageCircle,
  Heart
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Support",
    value: "support@easemycancer.com",
    description: "Get in touch with our support team"
  },
  {
    icon: Phone,
    title: "Phone Support",
    value: "+91-XXXXXXXXXX",
    description: "Call us for immediate assistance"
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "Easevia Integrative Solutions Pvt. Ltd.",
    description: "4414, Block 44, Prestige Kew Gardens, Yamlur, Marathahalli Colony, Bangalore, Karnataka, India"
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "8 AM - 9 PM",
    description: "Available every day for your convenience"
  }
]


export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            <Heart className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            We're Here for You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? Need support? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-xl">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                            <p className="text-primary font-medium mb-2">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* QR Code Placeholder */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-4">Quick Contact</h4>
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-16 h-16 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Scan QR code for instant contact</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input type="tel" placeholder="+91 12345 67890" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Final CTA */}
        {/* <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Ready to Start Your Healing Journey?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of patients who have found hope, strength, and healing through our comprehensive approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More About Our Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  )
}
