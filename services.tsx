'use client'

import { motion } from 'framer-motion'
import { Palette, Share2, Film, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity & Strategy',
    description: 'Craft distinctive visual identities and strategic positioning that resonate with your target audience.'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing & Management',
    description: 'Build engaged communities and drive conversions through strategic content and data-driven campaigns.'
  },
  {
    icon: Film,
    title: 'High-Impact Video Production & Editing',
    description: 'Create cinematic visual content that captures attention and tells your brand story compellingly.'
  },
  {
    icon: Sparkles,
    title: 'Corporate & Event Visual Design',
    description: 'Design stunning visual experiences for corporate events and brand activations that leave lasting impressions.'
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What We Do Best</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elevating brands through strategic design, impactful marketing, and cinematic visual media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 rounded-2xl backdrop-blur-xl border border-border bg-card hover:border-primary/50 transition group cursor-pointer"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-primary group-hover:text-accent transition" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
