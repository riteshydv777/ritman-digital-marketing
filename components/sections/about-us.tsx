'use client'

import { motion } from 'framer-motion'

export function AboutUs() {
  return (
    <section id="about" className="section-container relative">
      <div className="max-width-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="gradient-text">Ritman Digital</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              We provide structured digital marketing solutions designed to help businesses expand their online presence through strategic promotional campaigns.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              With years of experience in the digital marketing industry, we understand what it takes to build a strong online presence. Our team is dedicated to delivering professional, results-driven solutions tailored to your unique business needs.
            </p>

            <div className="space-y-4">
              {['Professional Expertise', 'Proven Track Record', 'Customer Focused'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-effect p-8 h-96 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-blue-400 mb-2">OUR MISSION</p>
              <p className="text-white text-lg leading-relaxed">
                To provide professional digital marketing and promotional services that help businesses and creators achieve their goals.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm font-semibold text-cyan-400 mb-2">OUR VALUES</p>
              <p className="text-slate-300 text-sm">
                Integrity, professionalism, and customer success drive everything we do.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
