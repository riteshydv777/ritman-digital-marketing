'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function GettingStarted() {
  const steps = [
    {
      number: '1',
      title: 'Select a Marketing Service',
      description: 'Browse our comprehensive suite of promotional marketing services tailored to your business needs.',
    },
    {
      number: '2',
      title: 'Submit Campaign Details via Inquiry Form',
      description: 'Provide your campaign requirements and specifications through our secure inquiry platform.',
    },
    {
      number: '3',
      title: 'Secure Online Payment Processing',
      description: 'Complete your payment using our secure and encrypted payment gateway for full transaction safety.',
    },
    {
      number: '4',
      title: 'Campaign Execution and Performance Tracking',
      description: 'Our team initiates your campaign and provides detailed performance metrics and tracking reports.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="section-container relative">
      <div className="max-width-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How to Get <span className="gradient-text">Started</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Customers can select a marketing service and submit their campaign requirements through our platform. Once reviewed, a secure payment link is generated. After successful payment confirmation, our team initiates the campaign process.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-8 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass-effect border-blue-400/20 rounded-2xl"
        >
          <div className="flex gap-4">
            <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-slate-300 leading-relaxed">
                <span className="font-semibold text-white block mb-2">Professional Service Delivery</span>
                Our team of marketing professionals ensures your campaign is executed with precision and attention to detail. We provide comprehensive support throughout the entire campaign lifecycle, from initial setup to performance analysis.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
