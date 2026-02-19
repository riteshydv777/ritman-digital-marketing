'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="section-container relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
      
      <div className="max-width-container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-effect p-8 md:p-12 border-blue-500/20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Ritman Digital Marketing
            </motion.h2>

            <motion.div
              className="space-y-6 text-slate-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>
                We provide structured digital marketing solutions designed to help businesses expand their online presence through strategic promotional campaigns.
              </p>

              <p>
                Our team specializes in creating targeted strategies that connect your brand with the right audience, driving meaningful engagement and sustainable growth across all digital platforms.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-blue-400">Our Mission</h3>
                  <p className="text-slate-400">
                    To empower businesses with professional digital marketing solutions that drive growth, build brand authority, and create lasting connections with their target audience.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-blue-400">Our Approach</h3>
                  <p className="text-slate-400">
                    We combine data-driven strategies with creative excellence to deliver campaigns that not only look great but perform exceptionally well.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
