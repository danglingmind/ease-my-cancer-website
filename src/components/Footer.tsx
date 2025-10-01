"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-50 to-secondary-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 py-2">
              <Image
                src="/logo.png"
                alt="EaseMyCancer Logo"
                width={480}
                height={144}
                className="h-36 w-auto"
                priority
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your complete support system for the cancer journey. Holistic care built by those who understand.
            </p>
            {/* Social icons removed as requested */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/packages" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Packages
              </a>
              <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#evidence" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Research
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
                <span className="text-sm text-muted-foreground">hello@easemycancer.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+91 72591 99955</span>
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
            © 2025 Easevia Integrative Solutions Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="/refund" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
