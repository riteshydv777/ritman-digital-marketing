import { Navbar } from '@/components/layout/navbar'
import { FooterNew } from '@/components/sections/footer-new'
import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions | Ritman Digital Marketing',
  description: 'Terms and conditions for Ritman Digital Marketing services',
}

export default function Terms() {
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
              Terms & Conditions
            </h1>

            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-400 leading-relaxed">
                  By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
                <p className="text-slate-400 leading-relaxed">
                  Ritman Digital Marketing provides professional digital marketing and promotional services. All services are promotional in nature and designed to increase visibility, engagement, and brand awareness. Our services are provided on an as-is basis. We make no representations or warranties about the fitness of our services for any particular purpose or guaranteed results.
                </p>
              </section>

              <section className="p-4 bg-amber-500/10 border border-amber-400/20 rounded-lg mb-6">
                <p className="text-slate-300 font-semibold">
                  Important: Results may vary depending on campaign scope and market conditions. We do not guarantee specific results or outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. No Guarantees - Results May Vary</h2>
                <p className="text-slate-400 leading-relaxed">
                  We do NOT guarantee specific results, outcomes, or ROI from our marketing campaigns. All promotional and marketing services carry inherent risk, and results depend on multiple factors including market conditions, competition, audience engagement, platform algorithms, external events, and other circumstances beyond our reasonable control. Clients acknowledge and accept this inherent uncertainty when engaging our promotional services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Client Responsibilities</h2>
                <p className="text-slate-400 leading-relaxed">
                  Clients are responsible for providing accurate information and maintaining the integrity of their accounts. Clients must comply with all applicable platform terms of service and local laws. Ritman Digital Marketing is not responsible for account suspensions or penalties resulting from client violations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p className="text-slate-400 leading-relaxed">
                  All content, materials, and intellectual property on our website are owned by or licensed to Ritman Digital Marketing. You may not reproduce, distribute, or transmit any content without our explicit written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. User-Generated Content</h2>
                <p className="text-slate-400 leading-relaxed">
                  You are solely responsible for any content you provide to us or publish through our services. You represent and warrant that you have all necessary rights to the content and that it does not infringe on third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-slate-400 leading-relaxed">
                  To the fullest extent permitted by law, Ritman Digital Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability is limited to the amount paid for the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Indemnification</h2>
                <p className="text-slate-400 leading-relaxed">
                  You agree to indemnify and hold harmless Ritman Digital Marketing from any claims, damages, or expenses arising from your use of our services or violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Platforms</h2>
                <p className="text-slate-400 leading-relaxed">
                  Our services may involve third-party platforms. We are not responsible for platform policies, algorithm changes, or actions taken by these platforms that affect campaign performance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Modification of Terms</h2>
                <p className="text-slate-400 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes become effective immediately upon posting. Your continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
                <p className="text-slate-400 leading-relaxed">
                  We reserve the right to terminate services if you violate these terms or engage in conduct we determine to be inappropriate or harmful to our business.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
                <p className="text-slate-400 leading-relaxed">
                  These terms are governed by applicable law. Any legal action or proceeding must be filed within one year of the cause of action arising.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                <p className="text-slate-400 leading-relaxed">
                  For questions about these terms, please contact support@ritmandigital.com.
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
