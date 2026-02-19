'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Select Marketing Service',
    description: 'Choose from our comprehensive range of digital marketing services tailored to your business needs.',
  },
  {
    number: '02',
    title: 'Share Campaign Details',
    description: 'Provide us with information about your goals, target audience, and specific requirements.',
  },
  {
    number: '03',
    title: 'Strategy Execution',
    description: 'Our team develops and implements a customized strategy to achieve your marketing objectives.',
  },
  {
    number: '04',
    title: 'Performance Tracking',
    description: 'Receive detailed analytics and regular reports to measure campaign success and ROI.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-container bg-gradient-to-b from-slate-900/50 to-slate-950/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
      
      <div className="max-width-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Our streamlined process ensures your success from start to finish
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-4 w-8 h-20 border-r border-b border-blue-500/20 rounded-br-3xl" />
              )}

              <div className="glass-effect p-8 h-full hover:border-blue-400/50 transition-all duration-300">
                {/* Step Number */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl font-bold gradient-text opacity-50">{step.number}</div>
                  <CheckCircle2 className="w-6 h-6 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-300 mb-6">
            Ready to transform your digital marketing strategy?
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
