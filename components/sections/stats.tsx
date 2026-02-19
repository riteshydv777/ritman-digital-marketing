'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CountUp } from './count-up'

const stats = [
  { value: 500, label: 'Campaigns Managed', suffix: '+' },
  { value: 200, label: 'Clients Served', suffix: '+' },
  { value: 95, label: 'Client Satisfaction', suffix: '%' },
]

export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <section ref={ref} className="section-container bg-gradient-to-r from-blue-900/20 via-slate-900 to-cyan-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />
      
      <div className="max-width-container relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-effect p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                {inView ? <CountUp end={stat.value} suffix={stat.suffix} /> : '0'}
              </div>
              <p className="text-slate-300 text-lg font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
