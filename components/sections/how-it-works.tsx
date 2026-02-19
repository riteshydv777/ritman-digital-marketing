'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Select a Service Package',
    description:
      'Browse and choose from our range of digital marketing service packages designed to enhance your online visibility and engagement.',
  },
  {
    id: 2,
    title: 'Submit Campaign Requirements',
    description:
      'Provide the required campaign details such as profile link, quantity, or service preferences through our secure platform.',
  },
  {
    id: 3,
    title: 'Secure Payment Confirmation',
    description:
      'Complete your transaction using our encrypted and secure payment gateway. Your order is confirmed immediately after successful payment.',
  },
  {
    id: 4,
    title: 'Order Processing & Delivery',
    description:
      'Once payment is confirmed, the selected service is processed and delivered within the estimated timeframe according to the chosen package.',
  },
]

export function HowItWorksNew() {
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
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our simple four-step process ensures smooth and secure order placement and service delivery.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Connection Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-blue-500/20 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number Circle */}
              <div className="absolute -top-6 left-0 right-0 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/50">
                  {step.id}
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-effect p-8 pt-16 text-center h-full hover:border-blue-400/50 transition-all duration-300"
              >
                <CheckCircle2 className="w-8 h-8 text-blue-400 mx-auto mb-4" />

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Delivery timelines may vary depending on selected service package,
            platform policies, and campaign requirements. All services are
            provided for promotional and marketing purposes only.
          </p>
        </div>

      </div>
    </section>
  )
}
