"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-50 to-secondary-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-primary">EaseMyCancer</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your complete support system for the cancer journey. Holistic care built by those who understand.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Services
              </a>
              <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Services</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Onco Yoga & Rehab
              </a>
              <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Onco Nutrition
              </a>
              <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Emotional Wellbeing
              </a>
              <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Onco Psychology
              </a>
              <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Additional Support
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">support@easemycancer.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Bangalore, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Easevia Integrative Solutions Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="#refund" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
