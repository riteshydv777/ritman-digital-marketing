import { Navbar } from '@/components/layout/navbar'
import { FooterNew } from '@/components/sections/footer-new'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Ritman Digital Marketing',
  description: 'Privacy policy for Ritman Digital Marketing services',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32">
        <div className="section-container">
          <div className="max-width-container">
            <Link href="/" className="text-blue-400 hover:text-cyan-400 mb-8 inline-block">
              ← Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information Collection</h2>
                <p className="text-slate-400 leading-relaxed">
                  We collect information that you voluntarily provide through our contact forms and communication channels. This includes your name, email address, and message content. We also collect usage data through analytics to improve our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Data Usage</h2>
                <p className="text-slate-400 leading-relaxed">
                  Your information is used solely to respond to your inquiries, provide our promotional and marketing services, process payments through secure payment gateways, and improve our website. We do not share your personal information with third parties without your explicit consent. Payment information is processed securely through certified payment providers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                <p className="text-slate-400 leading-relaxed">
                  We implement industry-standard security measures to protect your personal information. However, no online transmission is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
                <p className="text-slate-400 leading-relaxed">
                  Our website uses cookies to enhance your experience. You can disable cookies through your browser settings. Analytics data is collected to help us understand user behavior and improve our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Links</h2>
                <p className="text-slate-400 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies when you visit them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <p className="text-slate-400 leading-relaxed">
                  You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at support@ritmandigital.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Policy</h2>
                <p className="text-slate-400 leading-relaxed">
                  We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date. Your continued use of our website constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Service Information</h2>
                <p className="text-slate-400 leading-relaxed">
                  All services provided by Ritman Digital Marketing are promotional and marketing in nature. Results may vary depending on campaign scope, market conditions, and implementation. We recommend reviewing our Terms & Conditions and Refund Policy for additional information about service delivery and limitations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                <p className="text-slate-400 leading-relaxed">
                  If you have questions about our privacy practices, please contact us at support@ritmandigital.com. We are committed to protecting your privacy.
                </p>
              </section>
            </div>

            <p className="text-slate-500 text-sm mt-12 pt-8 border-t border-white/10">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
      <FooterNew />
    </>
  )
}
