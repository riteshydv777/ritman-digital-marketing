'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen gradient-bg flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 blur-background" />

      <div className="max-width-container px-4 relative z-10">
        <div className="text-center">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-semibold text-blue-400 mb-4"
          >
            Professional Digital Marketing Services
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Elevate Your Brand With{' '}
            <span className="gradient-text">
              Strategic Digital Marketing
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Professional social media marketing solutions for businesses and creators.
            Drive engagement, grow your audience, and build your brand with our proven strategies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Get Started */}
            <a
              href="#contact"
              className="btn-primary"
            >
              Get Started
            </a>

            {/* Learn More */}
            <a
              href="#services"
              className="btn-secondary"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated Gradient Orb */}
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  )
}
