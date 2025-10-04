"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Moon, Utensils, Phone, Search, Zap, User } from "lucide-react"

const familiarFeelings = [
  {
    id: 1,
    text: "Lying wide awake at 3:00 AM, worrying about the future & family",
    icon: Moon,
  },
  {
    id: 2,
    text: "Food on your plate, but no taste or appetite",
    icon: Utensils,
  },
  {
    id: 3,
    text: "Constant hospital visits and worry of calling the doctor for even the smallest concern",
    icon: Phone,
  },
  {
    id: 4,
    text: "Searching online for answers that only raise more questions",
    icon: Search,
  },
  {
    id: 5,
    text: "Wanting to do simple things, but running out of energy too soon",
    icon: Zap,
  },
  {
    id: 6,
    text: "Missing the \"you\" that existed before treatment began",
    icon: User,
  },
]

export function FamiliarFeelingsSection() {
  const [selectedFeelings, setSelectedFeelings] = useState<number[]>([])

  const handleFeelingChange = (feelingId: number, checked: boolean) => {
    if (checked) {
      setSelectedFeelings([...selectedFeelings, feelingId])
    } else {
      setSelectedFeelings(selectedFeelings.filter(id => id !== feelingId))
    }
  }

  return (
    <section id="familiar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Does any of this feel familiar?
            </h2>
            <p className="text-xl text-muted-foreground">
              We understand the challenges you're facing. You're not alone in this journey.
            </p>
          </div>

          {/* Feelings Checklist */}
          <Card className="bg-gradient-to-br from-accent-50 to-primary-50 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {familiarFeelings.map((feeling) => {
                  const Icon = feeling.icon
                  return (
                    <div
                      key={feeling.id}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
                    >
                      <Checkbox
                        id={`feeling-${feeling.id}`}
                        checked={selectedFeelings.includes(feeling.id)}
                        onCheckedChange={(checked) => 
                          handleFeelingChange(feeling.id, checked as boolean)
                        }
                        className="mt-1"
                      />
                      <div className="flex items-center space-x-3 flex-1">
                        <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                        <label
                          htmlFor={`feeling-${feeling.id}`}
                          className="text-lg text-foreground cursor-pointer flex-1"
                        >
                          {feeling.text}
                        </label>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Response Message */}
              {selectedFeelings.length > 0 && (
                <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">
                      If even one of these feels real, take a breath, we have got you!
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    You've selected {selectedFeelings.length} feeling{selectedFeelings.length > 1 ? 's' : ''} that resonate with you. 
                    This is completely normal, and you don't have to face these challenges alone.
                  </p>
                </div>
              )}

              {/* Default Message */}
              {selectedFeelings.length === 0 && (
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground text-lg">
                    Select any feelings that resonate with you to get personalized support.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
