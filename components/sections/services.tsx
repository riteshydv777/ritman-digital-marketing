'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Users, Eye, MessageCircle, Award } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Instagram Marketing Campaigns',
    description: 'Strategic campaigns designed to increase brand visibility and engagement on Instagram.',
    icon: Sparkles,
  },
  {
    id: 2,
    title: 'YouTube Promotion Services',
    description: 'Comprehensive promotion strategies to grow your channel and increase video views.',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Brand Awareness Campaigns',
    description: 'Build lasting brand recognition through targeted and professional marketing.',
    icon: Eye,
  },
  {
    id: 4,
    title: 'Audience Growth Strategy',
    description: 'Develop sustainable growth strategies tailored to your specific business goals.',
    icon: Users,
  },
  {
    id: 5,
    title: 'Engagement Optimization',
    description: 'Maximize audience interaction and build a loyal, engaged community.',
    icon: MessageCircle,
  },
  {
    id: 6,
    title: 'Performance Analytics',
    description: 'Track, measure, and optimize your marketing performance with detailed insights.',
    icon: Award,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function Services() {
  return (
    <section id="services" className="section-container relative">
      <div className="max-width-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your online presence and drive results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="glass-effect p-8 group hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="text-blue-400 font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                    Learn more →
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
