'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { useState } from 'react'
import { OrderModal } from './order-modal'
import { QuoteModal } from './quote-modal'

export function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; price: number } | null>(null)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const openOrderModal = (name: string, price: number) => {
    setSelectedPackage({ name, price })
    setIsOrderModalOpen(true)
  }

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true)
  }
  const pricingTiers = [
    {
      level: 'LEVEL 1',
      name: 'Essential Branding',
      price: 5000,
      billing: 'One-Time',
      color: 'blue',
      description: 'Startups and small businesses looking for core identity design',
      features: [
        'Professional Logo Design',
        'Business Card Design',
        'Banner / Sticker Design',
        'Social Media Profile Setup'
      ]
    },
    {
      level: 'LEVEL 2',
      name: 'Start-Up Monthly Marketing',
      price: 10500,
      billing: '/month (Retainer)',
      color: 'cyan',
      description: 'Growing businesses needing consistent social media management',
      features: [
        '15 Social Media Posts / Month',
        '4 Short Promo Videos / Reels / Month',
        '2 Flyer Promotions / Month',
        'Monthly Performance & Growth Report',
        'Creative Strategy Consulting'
      ]
    },
    {
      level: 'LEVEL 3',
      name: 'Corporate Branding & Website',
      price: 13000,
      billing: 'One-Time',
      color: 'amber',
      description: 'Established businesses seeking full brand revitalization and web presence',
      features: [
        'Brand Revitalization & Full Identity Design',
        'Modern Website Development & Deployment',
        'Employee Branding & ID Card Design',
        'Brand Storytelling & Messaging Concept',
        'Interactive Event Design'
      ]
    },
    {
      level: 'LEVEL 4',
      name: 'Corporate Monthly & Web Management',
      price: 17500,
      billing: '/month (Retainer)',
      color: 'purple',
      isFeatured: true,
      description: 'Enterprises requiring total market dominance and continuous web maintenance',
      features: [
        'Social Media Posts & Custom Grid Creation',
        'High-Impact Video Production & Editing',
        'Website Maintenance & Interactive Feature Updates',
        'Targeted Ad Campaign Design',
        'Employee Branding & Packaging Design',
        'Storefront & Event Visuals',
        'Creative Board Meetings & Strategy',
        '24/7 Premium Support & Priority Revisions'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Pricing Packages</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your project. All prices in ETB.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl backdrop-blur-xl border transition overflow-hidden ${
                tier.isFeatured
                  ? 'md:col-span-2 lg:col-span-1 border-accent/50 bg-accent/10 lg:scale-105'
                  : 'border-border bg-card/50'
              }`}
            >
              {tier.isFeatured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  <Star size={14} />
                  Featured
                </div>
              )}

              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{tier.level}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{tier.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground">ETB{tier.billing}</span>
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                <button 
                  onClick={() => openOrderModal(tier.name, tier.price)}
                  className="flex-1 px-4 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold transition"
                >
                  Get Started
                </button>
                <button 
                  onClick={openQuoteModal}
                  className="flex-1 px-4 py-2 rounded-full border border-border text-foreground hover:border-primary text-sm font-semibold transition"
                >
                  Custom Quote
                </button>
              </div>

              <div className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modals */}
        {selectedPackage && (
          <OrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            packageName={selectedPackage.name}
            packagePrice={selectedPackage.price}
          />
        )}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </div>
    </section>
  )
}
