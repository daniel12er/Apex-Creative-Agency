'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full mix-blend-screen blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Creative Agency
          </span>
          <br />
          <span className="text-foreground">for Bold Brands</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          We transform ideas into stunning digital experiences. From branding to development, we create solutions that matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition flex items-center gap-2 group">
            Start Your Project
            <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
          </button>
          <button className="px-8 py-4 rounded-full border border-primary text-primary hover:bg-primary/10 font-semibold transition">
            View Our Work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">50+</div>
            <div className="text-sm text-muted-foreground">Clients Worldwide</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
