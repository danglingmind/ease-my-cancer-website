"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Quote, User } from "lucide-react"
import Image from "next/image"

export function FounderSection() {
  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Quote Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Quote className="w-8 h-8 text-primary" />
            </div>
            <blockquote className="text-3xl md:text-4xl font-serif font-medium text-foreground leading-relaxed mb-8">
              "No one should have to go through this journey alone."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              — Parul Agarwal, Founder of EaseMyCancer
            </p>
          </div>

          {/* Founder's Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Founder's Image */}
            <div className="relative">
              <div className="relative w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/parul-agarwal.jpg"
                  alt="Parul Agarwal - Founder of EaseMyCancer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border">
                <div className="text-center">
                  <div className="text-sm font-medium text-primary">Founder & CEO</div>
                  <div className="text-xs text-muted-foreground">Onco Yoga Specialist</div>
                </div>
              </div>
            </div>

            {/* Right Side - Founder's Note */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  Hi, I'm Parul.
                </h2>
                <p className="text-xl text-muted-foreground">
                  When my mother was diagnosed with cancer, I became her primary caregiver and a silent witness to her everyday struggles.
                </p>
              </div>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      The fear she carried quietly, the fatigue, the endless questions no one seemed to have the time to answer.
                    </p>
                    <p>
                      I realized that while doctors fought bravely for her life, so much more was left unseen and unsaid, the emotional battles, the loss of strength, the isolation; And as her caregiver, I too carried a weight that often felt invisible.
                    </p>
                    <p>
                      It was during those moments that I made a promise to myself: <strong className="text-primary">no one should have to go through this journey alone.</strong>
                    </p>
                    <p>
                      EaseMyCancer was born out of that promise, to create a safe space of support, healing, and strength, not just for patients but also for the ones who stand by them. Because cancer care is not only about surviving treatment, but about living fully with dignity, hope, and compassion.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Founded with Love</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Personal Experience</span>
                </div>
              </div>

              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Learn More About Our Mission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
