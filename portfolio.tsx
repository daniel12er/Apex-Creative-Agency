'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Modern 3D Animated School Website',
    category: 'Web Development',
    description: 'Immersive school digital presence with 3D animations and interactive features'
  },
  {
    title: 'Premium Brand Identity & Guidelines',
    category: 'Brand Identity',
    description: 'Complete visual identity system with comprehensive brand guidelines'
  },
  {
    title: 'High-Impact Video Editing & Commercial Reel',
    category: 'Video Production',
    description: 'Professional commercial reel with cinematic editing and visual storytelling'
  },
  {
    title: 'Multi-Channel Social Media Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Integrated social media strategy across multiple platforms with measurable results'
  },
  {
    title: 'Corporate Event Visual Design',
    category: 'Event Design',
    description: 'Stunning visual experiences and design concepts for corporate events'
  },
  {
    title: 'Brand Revitalization Strategy',
    category: 'Strategy & Design',
    description: 'Complete brand overhaul with new messaging and market positioning'
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Selected Works & Case Studies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest projects across web development, brand identity, visual media, and digital marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-accent transition cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
