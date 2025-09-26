"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="EaseMyCancer Logo"
              width={340}
              height={100}
              className="h-32 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#founder" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/packages" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Packages
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#evidence" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Research
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              size="sm"
              asChild
            >
              <a href="#contact">
                Schedule Free Consultation
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#founder"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/packages"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#evidence"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Schedule Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
