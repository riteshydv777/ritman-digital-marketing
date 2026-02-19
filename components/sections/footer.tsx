'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="section-container py-12">
        <div className="max-width-container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Professional digital marketing solutions designed to enhance
                brand visibility and deliver measurable campaign results.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '#services', label: 'Services' },
                  { href: '#about', label: 'About' },
                  { href: '#how-it-works', label: 'How It Works' },
                  { href: '#contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-semibold text-white mb-4">Policies</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                  { href: '/refund-policy', label: 'Refund Policy' },
                  { href: '/terms', label: 'Terms & Conditions' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:support@ritmandigital.com"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    support@ritmandigital.com
                  </a>
                </li>
                <li className="text-slate-400">
                  Professional digital marketing services
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ritman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
