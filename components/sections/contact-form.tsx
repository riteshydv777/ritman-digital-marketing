'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const SERVICES = [
  'Social Media Marketing',
  'SEO & Content Optimization',
  'Paid Advertising Campaigns',
  'Brand Development',
  'Email Marketing',
  'Analytics & Reporting',
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceInterested: '',
    campaignDetails: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        serviceInterested: '',
        campaignDetails: '',
      })
      setTimeout(() => setSubmitted(false), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container relative">
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
            Submit Campaign <span className="gradient-text">Request</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to launch your campaign? Fill out the form below with your campaign details and our team will be in touch shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              {/* Email */}
              <div className="glass-effect p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Email Support</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  <a
                    href="mailto:support@ritmandigital.com"
                    className="text-blue-400 hover:text-cyan-400 transition-colors font-medium"
                  >
                    support@ritmandigital.com
                  </a>
                </p>
                <p className="text-slate-500 text-xs mt-3">
                  Response within 24 hours
                </p>
              </div>

              {/* Phone */}
              <div className="glass-effect p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Phone Support</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  Available for consultations
                </p>
                <p className="text-slate-500 text-xs mt-3">
                  24/7 Support Available
                </p>
              </div>

              {/* Info Box */}
              <div className="glass-effect p-6 rounded-2xl border-blue-400/20">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <span className="font-semibold text-blue-400 block mb-2">Professional Services</span>
                  All services are promotional and marketing focused. Our team ensures quality execution across all campaigns.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Campaign Request Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 glass-effect p-8 md:p-10 rounded-2xl"
          >
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-300 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Service Interested In */}
              <div>
                <label htmlFor="serviceInterested" className="block text-sm font-semibold text-slate-300 mb-2">
                  Service Interested In <span className="text-red-400">*</span>
                </label>
                <select
                  id="serviceInterested"
                  name="serviceInterested"
                  value={formData.serviceInterested}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Campaign Details */}
              <div>
                <label htmlFor="campaignDetails" className="block text-sm font-semibold text-slate-300 mb-2">
                  Campaign Details <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="campaignDetails"
                  name="campaignDetails"
                  value={formData.campaignDetails}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 transition-colors resize-none"
                  placeholder="Describe your campaign objectives, target audience, timeline, and budget..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isSubmitting ? 'Processing Request...' : 'Submit Campaign Request'}
              </button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                >
                  <p className="text-green-400 text-sm font-semibold text-center">
                    Campaign request submitted successfully! Our team will review your details and contact you within 24 hours.
                  </p>
                </motion.div>
              )}

              {/* Legal Notice */}
              <p className="text-xs text-slate-500 text-center leading-relaxed">
                By submitting this form, you agree to our Terms & Conditions and Privacy Policy. We respect your data and will not share it with third parties.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
