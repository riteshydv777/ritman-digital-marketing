'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function FooterNew() {
  const footerLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950/50 border-t border-white/10 backdrop-blur-sm">
      <div className="max-width-container px-4 py-12 md:py-16">
        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-effect p-6 rounded-xl mb-12 border-blue-400/20"
        >
          <p className="text-sm text-slate-300 leading-relaxed text-center">
            <span className="font-semibold text-white block mb-2">Service Disclaimer</span>
            All services are provided for promotional and marketing purposes only. Results may vary depending on campaign scope and market conditions. Our refund policy applies only if the service has not been initiated. Please review our Terms & Conditions for complete details.
          </p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Ritman Digital
            </h3>
            <p className="text-slate-400 text-sm">
              Professional digital marketing and promotional services for businesses and creators.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@ritmandigital.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  support@ritmandigital.com
                </a>
              </li>
              <li className="text-slate-400 text-sm pt-2">
                Available for consultations 24/7
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm text-center md:text-left"
          >
            © {currentYear} Ritman Digital Marketing. All rights reserved.
          </motion.p>

          {/* Policy Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-blue-400 transition-colors text-xs"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
