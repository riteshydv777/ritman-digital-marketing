'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  {
    id: 1,
    label: 'Campaigns Managed',
    value: 300,
    suffix: '+',
  },
  {
    id: 2,
    label: 'Clients Served',
    value: 100,
    suffix: '+',
  },
  {
    id: 3,
    label: 'Client Satisfaction',
    value: 95,
    suffix: '%',
  },
  {
    id: 4,
    label: 'Years Experience',
    value: 1,
    suffix: '+',
  },
]

export function StatsNew() {
  return (
    <section className="section-container relative gradient-bg">
      <div className="absolute inset-0 blur-background" />

      <div className="max-width-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself with consistent growth and client satisfaction.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 text-center group hover:border-cyan-400/50 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                />
              </motion.div>

              <p className="text-slate-400 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
