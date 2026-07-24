'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          APEX
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <a href="#services" className="text-foreground hover:text-primary transition">Services</a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition">Portfolio</a>
          <a href="#pricing" className="text-foreground hover:text-primary transition">Pricing</a>
          <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
          <button className="px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-4">
            <a href="#services" className="block text-foreground hover:text-primary transition">Services</a>
            <a href="#portfolio" className="block text-foreground hover:text-primary transition">Portfolio</a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition">Pricing</a>
            <a href="#contact" className="block text-foreground hover:text-primary transition">Contact</a>
            <button className="w-full px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
