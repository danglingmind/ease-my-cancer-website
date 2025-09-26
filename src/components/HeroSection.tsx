"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-accent-50 to-primary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f08b52%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Holistic Cancer Support
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                Every journey deserves a hand to hold and a heart to lean on
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are not a hospital, nor an alternative therapy center. We are a complete support system built around your needs through this journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 z-50"
                asChild
              >
                <Link href="/packages">
                  Start Your Healing Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              {/* <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button> */}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Evidence-Based Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Compassionate Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.png"
                alt="Woman practicing yoga at home with online guidance"
                fill
                className="object-cover object-center"
                priority
              />
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Lives Touched</div>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
