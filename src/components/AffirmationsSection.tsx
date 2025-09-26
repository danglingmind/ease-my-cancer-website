"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Sun, 
  Shield, 
  Star,
  ArrowRight,
  Quote,
  Sparkles
} from "lucide-react"

const affirmations = [
  "I am strong, even on difficult days.",
  "It's okay to rest; I honor my body.",
  "I allow myself to feel hope and courage.",
  "Healing is happening",
  "I am supported and taken care",
  "Small victories matter, and I celebrate them.",
  "I can ask for help, and it's okay to receive it.",
  "I attract love, joy and abundance",
  "Everything is working in my favour"
]

const gentleReminders = [
  "Healing happens in waves",
  "Hard days make space for better ones",
  "Your body is learning to trust again",
  "The right support makes all the difference",
  "Rest is part of recovery",
  "Small steps still move you forward",
  "Your pace is your pace",
  "Feeling everything is perfectly human",
  "Each day teaches you something new",
  "You're figuring it out as you go"
]

export function AffirmationsSection() {
  return (
    <section id="affirmations" className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            <Heart className="w-4 h-4 mr-2" />
            Daily Inspiration
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            From Us, With Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Daily affirmations and gentle reminders to support you through your healing journey.
          </p>
        </div>

        {/* Affirmations Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
            Daily Affirmations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affirmations.map((affirmation, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium leading-relaxed">
                        {affirmation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gentle Reminders */}
        <div className="mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Gentle Reminder
                </h3>
                <p className="text-lg text-muted-foreground">
                  Things That Help You Heal
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {gentleReminders.map((reminder, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{reminder}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
              <blockquote className="text-2xl font-serif font-medium text-foreground leading-relaxed mb-6">
                "No judgement, no false promises, just support that empowers you to stand stronger."
              </blockquote>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground font-medium">— EaseMyCancer Team</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Start Your Day with Positivity
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join our community and receive daily affirmations, gentle reminders, and support messages to help you through your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Download Affirmations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
